export type QuestionType = 'mcq' | 'fill';

export type ExamTrack = 'PHOTHONG' | 'NANGCAO' | 'THPTQG' | 'HSA';

export type TopicId = string;

export interface MicroTopicInfo {
  id: string;
  name: string;
  shortName: string;
  chapterId: string;
  description: string;
  questionCount?: number;
}

export interface ChapterInfo {
  id: string;
  name: string;
  shortName: string;
  description: string;
  color: string;
  topics: MicroTopicInfo[];
}

export interface TopicInfo {
  id: string;
  name: string;
  shortName: string;
  description: string;
  color: string;
  iconName?: string;
}

export interface Question {
  id: number;
  type: QuestionType; // 'mcq' for 4-choices, 'fill' for short answer
  chapterId?: string;
  chapterName?: string;
  topicId: string;
  topicName: string;
  content: string; // Markdown with LaTeX $...$ or $$...$$
  options?: {
    key: 'A' | 'B' | 'C' | 'D';
    content: string;
  }[];
  correctAnswer: string; // 'A'|'B'|'C'|'D' or number e.g. "2.5", "-4"
  acceptableAnswers?: string[]; // Alternative inputs e.g. ["2.5", "5/2", "2,5"]
  detailedSolution: string; // LaTeX-rich step-by-step explanation
  socraticHint: string; // Intuitive hint guiding student's critical thinking
  difficulty: 'Nhận biết' | 'Thông hiểu' | 'Vận dụng' | 'Vận dụng cao';
  difficultyLevel?: 1 | 2 | 3 | 4 | 5; // 5-point scale: 1=Dễ/Nhận biết, 2=Thông hiểu, 3=Vận dụng, 4=Vận dụng cao, 5=Học sinh giỏi
  examSets?: string[]; // IDs of exam sets this question belongs to
  isPracticalMath?: boolean; // Real-world practical application question
  hasParametricM?: boolean;  // Question contains parameter m
  track?: ExamTrack | 'BOTH'; // Which track this question primarily targets
  gameCategory?: 'arithmetic' | 'word_problem'; // 'arithmetic' for Bức tranh bí ẩn, 'word_problem' for Vượt chướng ngại vật
  latexVerified?: boolean;   // Hidden audit flag: marks question as having 100% verified LaTeX syntax & rendering (no UI display)
  answerVerified?: boolean;  // Audit flag: marks question as 100% verified for both mathematical logic and answer rendering
}

export interface ExamSet {
  id: string;
  track?: ExamTrack; // 'THPTQG' or 'HSA'
  title: string;
  subtitle: string;
  timeMinutes: number;
  questionCount: number;
  mcqCount: number;
  fillCount: number;
  badge: string;
  description: string;
  questionIds: number[];
}

export interface UserAnswer {
  questionId: number;
  value: string;
  isFlagged: boolean;
  timeSpentSeconds?: number;
}

export interface ExamReport {
  studentName: string;
  studentEmail: string;
  teacherEmail?: string;
  track?: ExamTrack;
  examSetTitle: string;
  completedAt: string;
  totalTimeSpentSeconds: number;
  totalScore: number;
  maxScore: number;
  mcqScore: number;
  mcqTotal: number;
  fillScore: number;
  fillTotal: number;
  topicBreakdown: {
    topicId: TopicId;
    topicName: string;
    correctCount: number;
    totalCount: number;
    percentage: number;
  }[];
  weakestTopic: {
    topicId: TopicId;
    topicName: string;
    percentage: number;
  };
  answers: {
    questionId: number;
    userAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
    topicName: string;
    type: QuestionType;
  }[];
  // Anti-cheat & Security integrity metrics
  tabSwitchCount?: number;
  integrityStatus?: 'clean' | 'suspicious' | 'flagged';
  integrityChecksum?: string;
}
