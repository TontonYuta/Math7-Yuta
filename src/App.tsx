import React, { useState, useEffect, useRef } from 'react';
import { Navbar, AppMode } from './components/Navbar';
import { AppSidebar } from './components/AppSidebar';
import { StudentNameModal, StudentSurveyData } from './components/StudentNameModal';
import { WebhookModal } from './components/WebhookModal';
import { ExamIntro } from './components/ExamIntro';
import { DashboardView } from './components/DashboardView';
import { ExamSimulation } from './components/ExamSimulation';
import { ExamResults } from './components/ExamResults';
import { TopicPractice } from './components/TopicPractice';
import { QuestionBankView } from './components/QuestionBankView';
import { ExamTimer } from './components/ExamTimer';
import { TreasureHunterGame } from './games/treasure-hunter/TreasureHunterGame';
import { 
  TOAN7_QUESTIONS_DATABASE as MASTER_QUESTIONS_DATABASE, 
  TOAN7_EXAM_SETS as ALL_ACTIVE_EXAM_SETS, 
  TOAN7_CHAPTERS_METADATA as ACTIVE_CHAPTERS_METADATA,
  TOAN7_MICRO_TOPICS_METADATA as ACTIVE_MICRO_TOPICS_METADATA 
} from './data/toan7/index';
import { UserAnswer, ExamReport, TopicId, ExamTrack } from './types/exam';
import { generateExamReport } from './utils/scoring';
import { prepareExamQuestions } from './utils/questionRandomizer';
import { TrafficBadge } from './components/TrafficBadge';
import { notifyStudentJoined } from './utils/trafficTracker';
import { ResumeExamModal, SavedExamState } from './components/ResumeExamModal';
import { 
  generateTamperProofHash, 
  checkSubmissionCooldown, 
  recordSubmissionTime, 
  isAllowedWebhookUrl, 
  sanitizeInput 
} from './utils/security';
import { filterExamSetsByTrack, filterQuestionsByTrack, TRACK_METADATA } from './utils/trackFilter';
import { getHideQuestionSourcePref, setHideQuestionSourcePref } from './utils/questionSource';
import { GraduationCap } from 'lucide-react';

export default function App() {
  // Theme state: light by default, can toggle to dark
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('hsa_theme') as 'dark' | 'light') || 'light';
  });

  // Question Source Display Preference (Hiện / Ẩn nguồn câu hỏi)
  const [hideQuestionSource, setHideQuestionSource] = useState<boolean>(() => {
    return getHideQuestionSourcePref();
  });

  const toggleHideQuestionSource = () => {
    setHideQuestionSource((prev) => {
      const next = !prev;
      setHideQuestionSourcePref(next);
      return next;
    });
  };

  useEffect(() => {
    localStorage.setItem('hsa_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Exam Track Mode: PHOTHONG (Toán 7 GDPT 2018) vs NANGCAO (Bứt phá 9+ & HSG)
  const [currentTrack, setCurrentTrack] = useState<ExamTrack>(() => {
    const saved = localStorage.getItem('toan7_exam_track') as ExamTrack;
    if (saved === 'PHOTHONG' || saved === 'NANGCAO') return saved;
    return 'PHOTHONG';
  });

  useEffect(() => {
    localStorage.setItem('toan7_exam_track', currentTrack);
  }, [currentTrack]);

  // Filtered Exam Sets & Questions for the selected track
  const availableExamSets = React.useMemo(() => {
    return filterExamSetsByTrack(ALL_ACTIVE_EXAM_SETS, currentTrack);
  }, [currentTrack]);

  const trackQuestionsDatabase = React.useMemo(() => {
    return filterQuestionsByTrack(MASTER_QUESTIONS_DATABASE, currentTrack);
  }, [currentTrack]);

  // Navigation & View state
  const [currentMode, setCurrentMode] = useState<AppMode | 'intro' | 'results'>('intro');
  const [practiceTopic, setPracticeTopic] = useState<TopicId | undefined>(undefined);

  // Exam Selection state
  const [selectedExamSetId, setSelectedExamSetId] = useState<string>(() => {
    return currentTrack === 'PHOTHONG' ? 'toan7_pt_01' : 'toan7_nc_01';
  });

  const currentExamSet = React.useMemo(() => {
    return ALL_ACTIVE_EXAM_SETS.find((s) => s.id === selectedExamSetId) || availableExamSets[0];
  }, [selectedExamSetId, availableExamSets]);

  // Switch Track Handler
  const handleSelectTrack = (newTrack: ExamTrack) => {
    if (newTrack === currentTrack) return;
    if (isExamActive) {
      const confirmSwitch = window.confirm(
        'Bài thi đang diễn ra! Bạn có chắc chắn muốn chuyển đổi chế độ và kết thúc lượt thi này?'
      );
      if (!confirmSwitch) return;
      setIsExamActive(false);
      localStorage.removeItem('hsa_active_exam_state');
    }
    setCurrentTrack(newTrack);
    const newSets = filterExamSetsByTrack(ALL_ACTIVE_EXAM_SETS, newTrack);
    const defaultSet = newSets[0];
    setSelectedExamSetId(defaultSet.id);

    const questionIdSet = new Set(defaultSet.questionIds);
    const questionsForSet = MASTER_QUESTIONS_DATABASE.filter((q) => questionIdSet.has(q.id));
    setActiveQuestions(prepareExamQuestions(questionsForSet));
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setExamReport(null);
  };

  // Active questions for the current exam session
  const [activeQuestions, setActiveQuestions] = useState(() => {
    const questionIdSet = new Set(currentExamSet.questionIds);
    const questionsForSet = MASTER_QUESTIONS_DATABASE.filter((q) => questionIdSet.has(q.id));
    return prepareExamQuestions(questionsForSet);
  });

  // Exam simulation state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, UserAnswer>>({});
  const [isExamActive, setIsExamActive] = useState<boolean>(false);
  const [timeSpentSeconds, setTimeSpentSeconds] = useState<number>(0);
  const examStartTimeRef = useRef<number>(Date.now());
  const [isConfirmSubmitOpen, setIsConfirmSubmitOpen] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(() => {
    return typeof window !== 'undefined' ? window.innerWidth >= 768 : true;
  });

  // Global Sidebar & Navigation states
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  const [isCollapsedDesktop, setIsCollapsedDesktop] = useState<boolean>(false);
  const [isWebhookModalOpen, setIsWebhookModalOpen] = useState<boolean>(false);

  // Result report state
  const [examReport, setExamReport] = useState<ExamReport | null>(null);

  // User Profile & Webhook Settings
  const DEFAULT_GAS_WEBHOOK_URL =
    'https://script.google.com/macros/s/AKfycbydbnEnhDyyS4zkTvZhm6P2kRLLznrpIVSmwSt0YJBa4n3YJLKdNQ4k_zgzHyDox6Rmiw/exec';
  const DEFAULT_TEACHER_EMAIL = 'huyhoang6altt@gmail.com';

  const [studentName, setStudentName] = useState<string>(() => {
    return localStorage.getItem('hsa_student_name') || '';
  });
  const [studentSchool, setStudentSchool] = useState<string>(() => {
    return localStorage.getItem('hsa_student_school') || '';
  });
  const [studentEmail, setStudentEmail] = useState<string>(() => {
    return localStorage.getItem('hsa_student_email') || '';
  });
  const [teacherEmail, setTeacherEmail] = useState<string>(() => {
    return localStorage.getItem('hsa_teacher_email') || DEFAULT_TEACHER_EMAIL;
  });
  const [webhookUrl, setWebhookUrl] = useState<string>(() => {
    return localStorage.getItem('hsa_webhook_url') || DEFAULT_GAS_WEBHOOK_URL;
  });

  // Student onboarding gate modal: open on entrance if student not registered
  const [isNameModalOpen, setIsNameModalOpen] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const registered = localStorage.getItem('hsa_student_registered');
    const storedName = localStorage.getItem('hsa_student_name');
    return !registered || !storedName || storedName.trim() === '' || storedName.trim() === 'Học sinh HSA';
  });

  // Saved exam state persistence & recovery
  const [savedExamState, setSavedExamState] = useState<SavedExamState | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [timerInitialSeconds, setTimerInitialSeconds] = useState<number>(() => currentExamSet.timeMinutes * 60);
  const [tabSwitchCount, setTabSwitchCount] = useState<number>(0);

  // Check and restore ongoing exam on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem('hsa_active_exam_state');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.startTime && parsed.totalSeconds) {
          const elapsed = Math.floor((Date.now() - parsed.startTime) / 1000);
          const remaining = parsed.totalSeconds - elapsed;
          if (remaining > 0) {
            // Validate tamper-proof checksum if present
            if (parsed.checksum) {
              const expectedHash = generateTamperProofHash({
                examSetId: parsed.examSetId,
                startTime: parsed.startTime,
                totalSeconds: parsed.totalSeconds,
                userAnswers: parsed.userAnswers,
                tabSwitchCount: parsed.tabSwitchCount || 0,
              });
              if (expectedHash !== parsed.checksum) {
                console.warn('⚠️ Cảnh báo bảo mật: Dữ liệu bài thi lưu trữ đã bị can thiệp bên ngoài!');
              }
            }
            setSavedExamState({
              ...parsed,
              timeRemainingSeconds: remaining,
            });
            setIsResumeModalOpen(true);
          } else {
            localStorage.removeItem('hsa_active_exam_state');
          }
        }
      }
    } catch (e) {
      console.error('Failed to read saved exam state', e);
    }
  }, []);

  // Warn student before closing or reloading tab during active exam
  useEffect(() => {
    if (!isExamActive) return;
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isExamActive]);

  // Auto-save exam state to localStorage with anti-tamper checksum
  useEffect(() => {
    if (!isExamActive || activeQuestions.length === 0) return;
    try {
      const stateToSave: SavedExamState = {
        examSetId: selectedExamSetId,
        examSetTitle: currentExamSet.title,
        activeQuestions,
        userAnswers,
        currentQuestionIndex,
        startTime: examStartTimeRef.current,
        totalSeconds: currentExamSet.timeMinutes * 60,
        timeRemainingSeconds: Math.max(0, currentExamSet.timeMinutes * 60 - Math.floor((Date.now() - examStartTimeRef.current) / 1000)),
        lastSavedAt: Date.now(),
        tabSwitchCount,
        checksum: generateTamperProofHash({
          examSetId: selectedExamSetId,
          startTime: examStartTimeRef.current,
          totalSeconds: currentExamSet.timeMinutes * 60,
          userAnswers,
          tabSwitchCount,
        }),
      };
      localStorage.setItem('hsa_active_exam_state', JSON.stringify(stateToSave));
    } catch (e) {
      console.error('Failed to auto-save exam state', e);
    }
  }, [isExamActive, selectedExamSetId, currentExamSet.title, currentExamSet.timeMinutes, activeQuestions, userAnswers, currentQuestionIndex, tabSwitchCount]);

  // Handler to resume saved exam
  const handleResumeSavedExam = () => {
    if (!savedExamState) return;
    setSelectedExamSetId(savedExamState.examSetId);
    setActiveQuestions(savedExamState.activeQuestions);
    setUserAnswers(savedExamState.userAnswers || {});
    setCurrentQuestionIndex(savedExamState.currentQuestionIndex || 0);
    examStartTimeRef.current = savedExamState.startTime;
    setTimerInitialSeconds(savedExamState.timeRemainingSeconds);
    setTabSwitchCount(savedExamState.tabSwitchCount || 0);
    setIsExamActive(true);
    setIsSidebarOpen(typeof window !== 'undefined' ? window.innerWidth >= 768 : true);
    setCurrentMode('exam');
    setIsResumeModalOpen(false);
  };

  // Handler to discard saved exam
  const handleDiscardSavedExam = () => {
    localStorage.removeItem('hsa_active_exam_state');
    setSavedExamState(null);
    setIsResumeModalOpen(false);
  };

  // Save changes to localStorage
  useEffect(() => {
    if (studentName) {
      localStorage.setItem('hsa_student_name', studentName);
    }
  }, [studentName]);

  useEffect(() => {
    if (studentSchool) {
      localStorage.setItem('hsa_student_school', studentSchool);
    }
  }, [studentSchool]);

  useEffect(() => {
    localStorage.setItem('hsa_student_email', studentEmail);
  }, [studentEmail]);

  useEffect(() => {
    localStorage.setItem('hsa_teacher_email', teacherEmail);
  }, [teacherEmail]);

  useEffect(() => {
    localStorage.setItem('hsa_webhook_url', webhookUrl);
  }, [webhookUrl]);

  // Handler to start official exam with selected set
  const handleStartExam = (examSetId?: string) => {
    const targetSetId = examSetId || selectedExamSetId;
    const targetSet = ALL_ACTIVE_EXAM_SETS.find((s) => s.id === targetSetId) || availableExamSets[0];
    const targetQuestionIdSet = new Set(targetSet.questionIds);
    const questionsForSet = MASTER_QUESTIONS_DATABASE.filter((q) => targetQuestionIdSet.has(q.id));

    // Clear any previous saved state
    localStorage.removeItem('hsa_active_exam_state');
    setSavedExamState(null);
    setIsResumeModalOpen(false);
    setTimerInitialSeconds(targetSet.timeMinutes * 60);
    setTabSwitchCount(0);

    // Randomize choices and within-tier questions, sorted strictly from easy to hard
    const randomizedQuestions = prepareExamQuestions(questionsForSet);

    setSelectedExamSetId(targetSet.id);
    setActiveQuestions(randomizedQuestions);
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setTimeSpentSeconds(0);
    examStartTimeRef.current = Date.now();
    setIsExamActive(true);
    setIsSidebarOpen(typeof window !== 'undefined' ? window.innerWidth >= 768 : true);
    setCurrentMode('exam');
  };

  // Handler to record an answer
  const handleAnswerQuestion = (questionId: number, value: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: {
        questionId,
        value,
        isFlagged: prev[questionId]?.isFlagged || false,
      },
    }));
  };

  // Handler to toggle question flag
  const handleToggleFlag = (questionId: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: {
        questionId,
        value: prev[questionId]?.value || '',
        isFlagged: !prev[questionId]?.isFlagged,
      },
    }));
  };

  // Submit and grade the exam
  const handleSubmitExam = () => {
    setIsExamActive(false);
    const calculatedSeconds = Math.max(
      1,
      Math.round((Date.now() - examStartTimeRef.current) / 1000)
    );
    setTimeSpentSeconds(calculatedSeconds);
    const generatedReport = generateExamReport(
      activeQuestions,
      userAnswers,
      studentName,
      studentEmail,
      calculatedSeconds,
      currentExamSet.title,
      teacherEmail || DEFAULT_TEACHER_EMAIL,
      tabSwitchCount
    );
    const report: ExamReport = {
      ...generatedReport,
      track: currentTrack,
    };
    setExamReport(report);
    setCurrentMode('results');

    // Clear active exam auto-save state
    localStorage.removeItem('hsa_active_exam_state');
    setSavedExamState(null);
    setIsResumeModalOpen(false);

    // Save completed exam record to localStorage for Dashboard statistics
    try {
      const raw = localStorage.getItem('hsa_exam_history');
      const history = raw ? JSON.parse(raw) : [];
      const newEntry = {
        id: 'exam_' + Date.now(),
        examSetId: selectedExamSetId,
        examSetTitle: currentExamSet.title,
        track: currentTrack,
        studentName,
        school: studentSchool,
        completedAt: new Date().toISOString(),
        score: report.totalScore,
        maxScore: report.maxScore,
        mcqScore: report.mcqScore,
        mcqTotal: report.mcqTotal,
        fillScore: report.fillScore,
        fillTotal: report.fillTotal,
        timeSpentSeconds: calculatedSeconds,
        percentage: Math.round((report.totalScore / (report.maxScore || 1)) * 100),
        tabSwitchCount,
        integrityStatus: report.integrityStatus,
        integrityChecksum: report.integrityChecksum,
      };
      const updatedHistory = [newEntry, ...(Array.isArray(history) ? history : [])].slice(0, 25);
      localStorage.setItem('hsa_exam_history', JSON.stringify(updatedHistory));
    } catch (e) {
      console.error('Failed to save exam history', e);
    }

    // Automatically dispatch result report with throttling and domain validation
    const targetUrl = webhookUrl?.trim() || DEFAULT_GAS_WEBHOOK_URL;
    if (targetUrl && isAllowedWebhookUrl(targetUrl)) {
      const cooldown = checkSubmissionCooldown('hsa_exam_submission', 10);
      if (cooldown.canSubmit) {
        recordSubmissionTime('hsa_exam_submission');
        fetch(targetUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify({
            ...report,
            track: currentTrack,
            school: sanitizeInput(studentSchool, 100),
            studentName: sanitizeInput(studentName, 60),
            studentEmail: sanitizeInput(studentEmail, 100),
            teacherEmail: teacherEmail || DEFAULT_TEACHER_EMAIL,
          }),
        }).catch(() => {});
      }
    }
  };

  // When time expires
  const handleTimeUp = () => {
    handleSubmitExam();
  };

  // Practice specific topic
  const handleSelectTopicPractice = (topicId?: TopicId) => {
    setPracticeTopic(topicId);
    setCurrentMode('practice');
  };

  // Select whole chapter from sidebar
  const handleSelectChapter = (chapterId: string) => {
    const chapter = ACTIVE_CHAPTERS_METADATA.find((c) => c.id === chapterId);
    if (chapter && chapter.topics.length > 0) {
      setPracticeTopic(chapter.topics[0].id);
    } else {
      setPracticeTopic(undefined);
    }
    setExamReport(null);
    setCurrentMode('practice');
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Save student onboarding information and survey results
  const handleSaveStudentInfo = (
    name: string, 
    school: string, 
    email: string, 
    surveyData?: StudentSurveyData
  ) => {
    const cleanName = sanitizeInput(name, 60);
    const cleanSchool = sanitizeInput(school, 80);
    const cleanEmail = sanitizeInput(email, 100);
    setStudentName(cleanName);
    setStudentSchool(cleanSchool);
    if (cleanEmail) setStudentEmail(cleanEmail);
    localStorage.setItem('hsa_student_name', cleanName);
    localStorage.setItem('hsa_student_school', cleanSchool);
    if (cleanEmail) localStorage.setItem('hsa_student_email', cleanEmail);
    localStorage.setItem('hsa_student_registered', 'true');

    if (surveyData) {
      localStorage.setItem('hsa_survey_source', surveyData.source);
      localStorage.setItem('hsa_survey_rating', surveyData.tiktokRating);
      localStorage.setItem('hsa_survey_feedback', surveyData.hasFeedback);
      if (surveyData.feedbackMessage) {
        localStorage.setItem('hsa_survey_message', surveyData.feedbackMessage);
      }
    }

    setIsNameModalOpen(false);

    // Automatically send notification to teacher
    notifyStudentJoined(cleanName, cleanSchool, cleanEmail, teacherEmail, webhookUrl, surveyData, currentTrack);
  };

  // Exit exam confirmation
  const handleExitExam = () => {
    const confirmed = window.confirm(
      'Bài thi đang diễn ra! Bạn có chắc chắn muốn rời khỏi phòng thi không?'
    );
    if (confirmed) {
      localStorage.removeItem('hsa_active_exam_state');
      setSavedExamState(null);
      setIsResumeModalOpen(false);
      setIsExamActive(false);
      setCurrentMode('intro');
    }
  };

  // Safe Home Navigation (Prevents white-screen bug)
  const handleGoHome = () => {
    if (isExamActive) {
      handleExitExam();
    } else {
      setExamReport(null);
      setCurrentMode('intro');
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const answeredCount = Object.values(userAnswers).filter(
    (a) => a.value && a.value.trim() !== ''
  ).length;

  // Render main screen content with absolute fallback to ExamIntro
  const renderMainContent = () => {
    if (isExamActive && currentMode === 'exam') {
      return (
        <ExamSimulation
          questions={activeQuestions}
          currentExamSet={currentExamSet}
          currentQuestionIndex={currentQuestionIndex}
          userAnswers={userAnswers}
          onSelectQuestion={(idx) => setCurrentQuestionIndex(idx)}
          onAnswerQuestion={handleAnswerQuestion}
          onToggleFlag={handleToggleFlag}
          onSubmitExam={handleSubmitExam}
          isConfirmSubmitOpen={isConfirmSubmitOpen}
          setIsConfirmSubmitOpen={setIsConfirmSubmitOpen}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          tabSwitchCount={tabSwitchCount}
          onTabSwitchCountChange={setTabSwitchCount}
          studentName={studentName}
          hideQuestionSource={hideQuestionSource}
          onToggleHideQuestionSource={toggleHideQuestionSource}
        />
      );
    }

    if (currentMode === 'results' && examReport) {
      return (
        <ExamResults
          report={examReport}
          questions={activeQuestions}
          webhookUrl={webhookUrl}
          onRetakeExam={() => handleStartExam(selectedExamSetId)}
          onPracticeWeakestTopic={(tId) => handleSelectTopicPractice(tId)}
          onGoHome={handleGoHome}
        />
      );
    }

    if (currentMode === 'practice') {
      return (
        <TopicPractice
          questions={MASTER_QUESTIONS_DATABASE}
          initialTopicId={practiceTopic}
          onBackToExam={handleGoHome}
          studentName={studentName}
          setStudentName={setStudentName}
          studentEmail={studentEmail}
          setStudentEmail={setStudentEmail}
          teacherEmail={teacherEmail}
          webhookUrl={webhookUrl}
          currentTrack={currentTrack}
          chapters={ACTIVE_CHAPTERS_METADATA}
        />
      );
    }

    if (currentMode === 'bank') {
      return (
        <QuestionBankView
          questions={MASTER_QUESTIONS_DATABASE}
          onStartExam={() => handleStartExam()}
          currentTrack={currentTrack}
          onSelectTrack={handleSelectTrack}
          onSelectTopicPractice={(tId) => handleSelectTopicPractice(tId)}
          topicsMetadata={ACTIVE_MICRO_TOPICS_METADATA}
        />
      );
    }

    if (currentMode === 'treasure') {
      return (
        <TreasureHunterGame
          questionsPool={MASTER_QUESTIONS_DATABASE}
          onExit={handleGoHome}
        />
      );
    }

    if (currentMode === 'intro') {
      return (
        <DashboardView
          studentName={studentName}
          studentSchool={studentSchool}
          onEditStudentProfile={() => setIsNameModalOpen(true)}
          onStartExamMode={() => {
            setExamReport(null);
            setCurrentMode('exam');
          }}
          onStartSpecificExam={(setId) => handleStartExam(setId)}
          onPracticeMode={() => {
            setPracticeTopic(undefined);
            setCurrentMode('practice');
          }}
          onSelectChapter={(chapId) => handleSelectChapter(chapId)}
          onQuestionBankMode={() => setCurrentMode('bank')}
          onTreasureMode={() => setCurrentMode('treasure')}
          currentTrack={currentTrack}
          onSelectTrack={handleSelectTrack}
          questions={trackQuestionsDatabase}
          totalQuestionsCount={MASTER_QUESTIONS_DATABASE.length}
          examSets={availableExamSets}
          chapters={ACTIVE_CHAPTERS_METADATA}
        />
      );
    }

    if (currentMode === 'exam' && !isExamActive) {
      return (
        <ExamIntro
          onStartExam={(setId) => handleStartExam(setId)}
          onSelectTopicPractice={handleSelectTopicPractice}
          studentName={studentName}
          setStudentName={setStudentName}
          selectedExamSetId={selectedExamSetId}
          setSelectedExamSetId={setSelectedExamSetId}
          currentTrack={currentTrack}
          examSets={availableExamSets}
        />
      );
    }

    // Bulletproof Fallback: Always render DashboardView
    return (
      <DashboardView
        studentName={studentName}
        studentSchool={studentSchool}
        onEditStudentProfile={() => setIsNameModalOpen(true)}
        onStartExamMode={() => {
          setExamReport(null);
          setCurrentMode('exam');
        }}
        onStartSpecificExam={(setId) => handleStartExam(setId)}
        onPracticeMode={() => {
          setPracticeTopic(undefined);
          setCurrentMode('practice');
        }}
        onSelectChapter={(chapId) => handleSelectChapter(chapId)}
        onQuestionBankMode={() => setCurrentMode('bank')}
        currentTrack={currentTrack}
        onSelectTrack={handleSelectTrack}
        questions={trackQuestionsDatabase}
        totalQuestionsCount={MASTER_QUESTIONS_DATABASE.length}
        examSets={availableExamSets}
        chapters={ACTIVE_CHAPTERS_METADATA}
      />
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#09090b] text-slate-900 dark:text-[#f4f4f5] flex font-sans transition-colors duration-200">
      {/* 1. Global Navigation Sidebar for Desktop & Mobile (Hidden during active 75-minute CBT exam) */}
      {!isExamActive && (
        <AppSidebar
          currentMode={currentMode}
          onSelectMode={(mode) => {
            setExamReport(null);
            if (mode === 'practice') {
              setPracticeTopic(undefined);
            }
            setCurrentMode(mode);
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          onSelectChapter={handleSelectChapter}
          studentName={studentName}
          studentSchool={studentSchool}
          onEditStudentName={() => setIsNameModalOpen(true)}
          isExamInProgress={isExamActive}
          isOpenMobile={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
          isCollapsedDesktop={isCollapsedDesktop}
          onToggleCollapseDesktop={() => setIsCollapsedDesktop((prev) => !prev)}
          theme={theme}
          onToggleTheme={toggleTheme}
          currentTrack={currentTrack}
          onSelectTrack={handleSelectTrack}
          availableQuestionsCount={trackQuestionsDatabase.length}
          totalQuestionsCount={MASTER_QUESTIONS_DATABASE.length}
          chapters={ACTIVE_CHAPTERS_METADATA}
          examSets={availableExamSets}
          questions={trackQuestionsDatabase}
        />
      )}

      {/* 2. Main Content Flow Column */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Unified Topbar - 52px */}
        <Navbar
          currentMode={
            currentMode === 'intro' || currentMode === 'results' ? 'exam' : currentMode
          }
          currentTrack={currentTrack}
          onSelectTrack={handleSelectTrack}
          onHomeClick={handleGoHome}
          onSelectMode={(mode) => {
            if (isExamActive && mode !== 'exam') {
              handleExitExam();
              return;
            }
            if (mode === 'exam') {
              if (!isExamActive) {
                setExamReport(null);
                setCurrentMode('intro');
              } else {
                setCurrentMode('exam');
              }
            } else {
              setExamReport(null);
              if (mode === 'practice') {
                setPracticeTopic(undefined);
              }
              setCurrentMode(mode);
            }
          }}
          onStartExam={() => handleStartExam()}
          isExamInProgress={isExamActive}
          onSubmitExamClick={() => setIsConfirmSubmitOpen(true)}
          onExitExamClick={handleExitExam}
          theme={theme}
          onToggleTheme={toggleTheme}
          isSidebarOpen={isSidebarOpen}
          onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
          answeredCount={answeredCount}
          totalQuestions={activeQuestions.length}
          examTitle={isExamActive ? currentExamSet.title : undefined}
          hideQuestionSource={hideQuestionSource}
          onToggleHideQuestionSource={toggleHideQuestionSource}
          onToggleMobileSidebar={() => setIsMobileSidebarOpen((prev) => !prev)}
          studentName={studentName}
          studentSchool={studentSchool}
          onEditStudentName={() => setIsNameModalOpen(true)}
          examTimerSlot={
            isExamActive ? (
              <ExamTimer
                initialSeconds={timerInitialSeconds}
                isRunning={true}
                onTimeUp={handleTimeUp}
              />
            ) : undefined
          }
        />

        {/* Main View Area */}
        <main className={(isExamActive || currentMode === 'practice' || currentMode === 'bank' || currentMode === 'treasure') ? 'flex-1 overflow-hidden' : currentMode === 'exam' ? 'flex-1 overflow-y-auto p-2.5 sm:p-4' : 'flex-1 px-3 sm:px-6 pt-4 sm:pt-6 pb-8 sm:pb-12'}>
          {renderMainContent()}
        </main>

        {/* Footer */}
        {!isExamActive && currentMode !== 'practice' && currentMode !== 'bank' && currentMode !== 'exam' && currentMode !== 'treasure' && (
          <footer className="border-t border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#09090b] py-6 text-xs text-slate-500 dark:text-zinc-500 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <GraduationCap className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                <span className="font-bold text-slate-800 dark:text-zinc-200">
                  Toán 7 THCS · GDPT 2018
                </span>
                <span>·</span>
                <span>Hệ Thống Luyện Thi & Bứt Phá Điểm 9-10 Môn Toán 7 (GDPT 2018)</span>
              </div>

              <div className="flex items-center gap-3 text-[11px] text-slate-400 dark:text-zinc-500">
                <span>Chuẩn 10 chương SGK Kết nối tri thức & Cánh diều</span>
                <span>·</span>
                <span>2 lộ trình: Phổ Thông & Nâng Cao HSG</span>
              </div>
            </div>
          </footer>
        )}
      </div>

      {/* Real-time Traffic Statistics Floating Corner Badge (Only visible on Dashboard, completely hidden during exam & practice) */}
      {!isExamActive && currentMode === 'intro' && (
        <TrafficBadge
          webhookUrl={webhookUrl}
          isExamActive={isExamActive}
          studentName={studentName}
          currentMode={currentMode}
        />
      )}

      {/* Resume Ongoing Exam Session Modal */}
      <ResumeExamModal
        isOpen={isResumeModalOpen}
        savedExam={savedExamState}
        onResume={handleResumeSavedExam}
        onDiscard={handleDiscardSavedExam}
      />

      {/* Mandatory Onboarding / Edit Name Modal */}
      <StudentNameModal
        isOpen={isNameModalOpen}
        onSave={handleSaveStudentInfo}
        initialName={studentName}
        initialSchool={studentSchool}
        initialEmail={studentEmail}
        teacherEmail={teacherEmail}
        isFirstVisit={typeof window !== 'undefined' ? !localStorage.getItem('hsa_student_registered') : false}
      />

      {/* Webhook Configuration Modal */}
      <WebhookModal
        isOpen={isWebhookModalOpen}
        onClose={() => setIsWebhookModalOpen(false)}
        webhookUrl={webhookUrl}
        onSaveWebhookUrl={setWebhookUrl}
        studentEmail={studentEmail}
        onSaveStudentEmail={setStudentEmail}
        studentName={studentName}
        onSaveStudentName={setStudentName}
        teacherEmail={teacherEmail}
        onSaveTeacherEmail={setTeacherEmail}
      />
    </div>
  );
}
