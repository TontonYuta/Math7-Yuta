import React, { useMemo } from 'react';
import {
  Sparkles,
  BookOpen,
  Search,
  Trophy,
  Target,
  Clock,
  ArrowRight,
  ChevronRight,
  FileCheck2,
  Calendar,
  Layers,
  Edit3,
  Award,
  BarChart3,
  GraduationCap,
  RotateCcw,
  Zap,
  CheckCircle2,
  Flame,
  Compass,
} from 'lucide-react';
import { TOAN7_CHAPTERS_METADATA, TOAN7_EXAM_SETS, TOAN7_QUESTIONS_DATABASE } from '../data/toan7/index';
import { Question, ExamSet, ChapterInfo } from '../types/exam';
import { ExamTrack, TRACK_METADATA, isPracticalMathQuestion } from '../utils/trackFilter';
import { useRealtimeClock } from '../utils/timeUtils';
import { BorderBeam } from './effects/BorderBeam';
import { WindingDragonTrails } from './effects/WindingDragonTrails';

export interface ExamHistoryItem {
  id: string;
  examSetId: string;
  examSetTitle: string;
  track?: ExamTrack;
  studentName: string;
  completedAt: string;
  score: number;
  maxScore: number;
  mcqScore: number;
  mcqTotal: number;
  fillScore: number;
  fillTotal: number;
  timeSpentSeconds: number;
  percentage: number;
  tabSwitchCount?: number;
  integrityStatus?: 'clean' | 'suspicious' | 'flagged';
  integrityChecksum?: string;
}

interface DashboardViewProps {
  studentName: string;
  studentSchool?: string;
  onEditStudentProfile: () => void;
  onStartExamMode: () => void;
  onStartSpecificExam: (examSetId: string) => void;
  onPracticeMode: () => void;
  onSelectChapter: (chapterId: string) => void;
  onQuestionBankMode: () => void;
  onTreasureMode?: () => void;
  currentTrack?: ExamTrack;
  onSelectTrack?: (track: ExamTrack) => void;
  questions?: Question[];
  totalQuestionsCount?: number;
  examSets?: ExamSet[];
  chapters?: ChapterInfo[];
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  studentName,
  studentSchool,
  onEditStudentProfile,
  onStartExamMode,
  onStartSpecificExam,
  onPracticeMode,
  onSelectChapter,
  onQuestionBankMode,
  onTreasureMode,
  currentTrack = 'PHOTHONG',
  onSelectTrack,
  questions,
  totalQuestionsCount,
  examSets,
  chapters = TOAN7_CHAPTERS_METADATA,
}) => {
  const isPT = currentTrack === 'PHOTHONG';
  const activeQuestions = questions || TOAN7_QUESTIONS_DATABASE;
  const activeExamSets = examSets || TOAN7_EXAM_SETS.filter((s) => (s.track ? s.track === currentTrack : isPT ? s.id.startsWith('toan7_pt') : s.id.startsWith('toan7_nc')));
  const trackMeta = TRACK_METADATA[(currentTrack as ExamTrack) || 'PHOTHONG'];
  const { targetYear, formattedDate, formattedTime } = useRealtimeClock();
  
  // Total micro-topics dynamically computed across chapters
  const totalTopicsCount = useMemo(() => {
    return chapters.reduce((sum, ch) => sum + ch.topics.length, 0);
  }, [chapters]);

  // Read exam history from localStorage (filtered by active track for accuracy)
  const examHistory: ExamHistoryItem[] = useMemo(() => {
    if (typeof window === 'undefined') return [];
    try {
      const raw = localStorage.getItem('hsa_exam_history');
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }, []);

  // Filter exam history by current track
  const trackExamHistory = useMemo(() => {
    const activeExamSetIds = new Set(activeExamSets.map((s) => s.id));
    return examHistory.filter(
      (item) => item.track === currentTrack || activeExamSetIds.has(item.examSetId)
    );
  }, [examHistory, activeExamSets, currentTrack]);

  // Compute analytics standardized to 10-point scale
  const completedExamsCount = trackExamHistory.length;
  const distinctExamSetsCount = useMemo(() => {
    const set = new Set(trackExamHistory.map((item) => item.examSetId));
    return set.size;
  }, [trackExamHistory]);

  const scaledScores = useMemo(() => {
    return trackExamHistory.map((item) => {
      if (item.maxScore && item.maxScore > 0) {
        return (item.score / item.maxScore) * 10;
      }
      return item.score <= 10 ? item.score : (item.score / 20) * 10;
    });
  }, [trackExamHistory]);

  const highestScore = useMemo(() => {
    if (scaledScores.length === 0) return null;
    return Math.round(Math.max(...scaledScores) * 10) / 10;
  }, [scaledScores]);

  const avgScore = useMemo(() => {
    if (scaledScores.length === 0) return null;
    const total = scaledScores.reduce((sum, s) => sum + s, 0);
    return Math.round((total / scaledScores.length) * 10) / 10;
  }, [scaledScores]);

  // Questions count map per chapter (track-aware)
  const chapterQuestionCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const q of activeQuestions) {
      if (q.chapterId) {
        counts[q.chapterId] = (counts[q.chapterId] || 0) + 1;
      }
    }
    return counts;
  }, [activeQuestions]);

  const practicalQuestionsCount = useMemo(() => {
    return activeQuestions.filter(isPracticalMathQuestion).length;
  }, [activeQuestions]);

  const formatDuration = (seconds: number) => {
    if (!seconds || seconds <= 0) return '0 phút';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (mins === 0) return `${secs} giây`;
    if (secs === 0) return `${mins} phút`;
    return `${mins}p ${secs}s`;
  };

  const formatDate = (isoString: string) => {
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return 'Gần đây';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-3 sm:space-y-4 pb-8 animate-fade-in font-sans text-slate-900 dark:text-zinc-100 select-none">
      {/* =================================================================== */}
      {/* 1. TOP REALTIME STATUS & TRACK SWITCHER (Responsive & Clean)       */}
      {/* =================================================================== */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 p-2 sm:p-2.5 sm:px-4 rounded-2xl bg-white dark:bg-[#111319] border border-slate-200 dark:border-zinc-800 shadow-xs">
        {/* Track Switcher: Visible on sm+ (on mobile, top Navbar already has fast 1-tap track switcher) */}
        <div className="hidden sm:flex items-center gap-2">
          <div className="flex items-center p-0.5 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800">
            <button
              type="button"
              onClick={() => onSelectTrack && onSelectTrack('PHOTHONG')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                isPT
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100'
              }`}
              title="Toán 7 Phổ Thông (Chuẩn SGK Kết nối tri thức & Cánh diều)"
            >
              <span>📘 Phổ Thông (SGK)</span>
            </button>
            <button
              type="button"
              onClick={() => onSelectTrack && onSelectTrack('NANGCAO')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                !isPT
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100'
              }`}
              title="Toán 7 Nâng Cao (Bứt phá điểm 10 & Học sinh giỏi)"
            >
              <span>🚀 Nâng Cao (HSG 9+)</span>
            </button>
          </div>
        </div>

        {/* Live Realtime Clock & Status Indicator */}
        <div className="flex items-center justify-between sm:justify-end gap-2 text-xs font-mono w-full sm:w-auto">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-300">
            <Clock className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span className="hidden md:inline">{formattedDate} • </span>
            <span className="font-bold">{formattedTime}</span>
          </div>
          <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border font-bold ${
            isPT 
              ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300' 
              : 'bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-900 text-amber-700 dark:text-amber-300'
          }`}>
            <Zap className={`w-3.5 h-3.5 shrink-0 ${isPT ? 'text-blue-500' : 'text-amber-500'}`} />
            <span>Lộ trình: <span className="font-black font-mono">{isPT ? 'Chuẩn SGK' : 'Bứt Phá 9+'}</span></span>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 2. BENTO ROW 1: HERO CTA (2/3) + STATS RADAR (1/3)                  */}
      {/* =================================================================== */}
      <div className="relative">
        {/* Dragon & Phoenix delicate ethereal trails winding gracefully around Row 1 cards */}
        <WindingDragonTrails />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
          {/* HERO CARD (Spans 2 cols on lg) - Clean Natural Surface with Perimeter Border Beam */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-xs transition-all border border-slate-200/90 dark:border-zinc-800 bg-white dark:bg-[#121217]">
            {/* Delicate border beam winding gently around Hero Card */}
            <BorderBeam
              beamSizePercent={14}
              duration={13}
              color={isPT ? '#38bdf8' : '#f59e0b'}
              glowColor={isPT ? '#818cf8' : '#fbbf24'}
              rx={24}
            />

            <div className="space-y-3 relative z-10">
              <div className="flex items-center justify-between flex-wrap gap-2.5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                    isPT
                      ? 'bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/60'
                      : 'bg-amber-50 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-900/60'
                  }`}>
                    {isPT ? 'Toán 7 GDPT 2018 (SGK Mới)' : 'Toán 7 Nâng Cao (HSG 9+)'}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={onEditStudentProfile}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-zinc-800/80 hover:bg-slate-200 dark:hover:bg-zinc-700 border border-slate-200 dark:border-zinc-700/80 transition cursor-pointer"
                  title="Bấm để cập nhật hồ sơ học sinh"
                >
                  <Edit3 className={`w-3.5 h-3.5 ${isPT ? 'text-blue-500' : 'text-amber-500'}`} />
                  <span>{studentSchool ? `${studentName || 'Học sinh'} · ${studentSchool}` : (studentName ? `Học sinh: ${studentName}` : 'Hồ sơ học sinh')}</span>
                </button>
              </div>

              <div className="space-y-1.5 mt-2">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-zinc-50 tracking-tight leading-tight">
                  Chào {studentName ? <span className={isPT ? 'text-sky-600 dark:text-sky-400 font-extrabold' : 'text-amber-600 dark:text-amber-400 font-extrabold'}>{studentName}</span> : 'bạn'}, {isPT ? 'sẵn sàng chinh phục điểm 9-10 Toán 7?' : 'sẵn sàng bứt phá học sinh giỏi Toán 7?'} 👋
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 max-w-xl leading-relaxed">
                  {isPT ? (
                    <span>
                      Chương trình ôn tập chuẩn hóa <strong>GDPT 2018</strong> (Kết nối tri thức, Cánh diều): Nắm chắc Số hữu tỉ, Số thực, Tam giác bằng nhau, Tỉ lệ thức và Thống kê biểu đồ. Tự tin bứt phá mọi bài kiểm tra Giữa kì & Cuối kì.
                    </span>
                  ) : (
                    <span>
                      Chuyên đề phân hóa bồi dưỡng <strong>Học sinh giỏi & Chuyên Toán</strong>: Rèn luyện dãy phân số quy luật, BĐT giá trị tuyệt đối nhiều tầng, cực trị đại số, và kẻ đường phụ hình học.
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* Hero Action Button & Pill Features */}
            <div className="pt-4 sm:pt-5 relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-slate-100 dark:border-zinc-800/80 mt-5">
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-[11px] sm:text-xs font-semibold text-slate-600 dark:text-zinc-400">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800/80">
                  <Clock className={`w-3.5 h-3.5 ${isPT ? 'text-sky-500' : 'text-amber-500'}`} />
                  <span>{isPT ? '60 Phút / Đề' : '90 Phút / Đề'}</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800/80">
                  <Layers className="w-3.5 h-3.5 text-indigo-500" />
                  <span>{activeExamSets.length} Bộ Đề Thi</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800/80">
                  <Award className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Chấm điểm tức thì</span>
                </div>
              </div>

              <button
                type="button"
                onClick={onStartExamMode}
                className={`px-5 py-2.5 sm:py-3 rounded-2xl font-bold text-xs sm:text-sm shadow-md transition active:scale-98 flex items-center justify-center gap-2 cursor-pointer ${
                  isPT
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/25'
                    : 'bg-amber-600 hover:bg-amber-500 text-white shadow-amber-600/25'
                }`}
              >
                <span>{isPT ? 'Vào thi thử chuẩn SGK (60p)' : 'Vào thi thử nâng cao (90p)'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* STATS RADAR CARD (1 col) - Clean Natural Surface with Subtle Counter-Border Beam */}
          <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-[#121217] border border-slate-200/90 dark:border-zinc-800 p-4 sm:p-5 flex flex-col justify-between shadow-xs">
            {/* Delicate border beam winding gently around Stats Card */}
            <BorderBeam
              beamSizePercent={12}
              duration={16}
              color={isPT ? '#f59e0b' : '#38bdf8'}
              glowColor={isPT ? '#fbbf24' : '#818cf8'}
              rx={24}
              reverse
            />

            <div className="relative z-10 flex items-center justify-between pb-2.5 border-b border-slate-100 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <Trophy className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-slate-900 dark:text-zinc-100">Chỉ Số Năng Lực</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 font-semibold">
                {completedExamsCount} bài nộp
              </span>
            </div>

            {/* 3 Clean Natural Stat Tiles */}
            <div className="relative z-10 grid grid-cols-2 gap-2 my-2.5">
              {/* Tile 1: Điểm cao nhất - Clean Surface */}
              <div className="col-span-2 p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800/80 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-zinc-400 block">
                    Điểm kỷ lục cao nhất
                  </span>
                  <div className={`text-2xl sm:text-3xl font-black font-mono tracking-tight mt-0.5 tabular-nums ${
                    isPT ? 'text-sky-600 dark:text-sky-400' : 'text-amber-600 dark:text-amber-400'
                  }`}>
                    {highestScore !== null ? `${highestScore}` : '--'}{' '}
                    <span className="text-xs font-medium text-slate-400">/ 10</span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-200/60 dark:bg-zinc-800 border border-slate-300/80 dark:border-zinc-700 flex items-center justify-center font-bold text-xs text-slate-700 dark:text-zinc-200 font-mono">
                  {highestScore !== null ? `${Math.round((highestScore / 10) * 100)}%` : '0%'}
                </div>
              </div>

              {/* Tile 2: Đề đã hoàn thành */}
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800/80">
                <span className="text-[10px] font-semibold text-slate-500 dark:text-zinc-400 block">
                  Đề đã luyện
                </span>
                <div className="text-lg font-black text-slate-900 dark:text-zinc-100 font-mono mt-0.5 tabular-nums">
                  {distinctExamSetsCount} <span className="text-[10px] font-normal text-slate-400">/ {activeExamSets.length}</span>
                </div>
              </div>

              {/* Tile 3: Điểm trung bình */}
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800/80">
                <span className="text-[10px] font-semibold text-slate-500 dark:text-zinc-400 block">
                  Điểm trung bình
                </span>
                <div className="text-lg font-black text-slate-900 dark:text-zinc-100 font-mono mt-0.5 tabular-nums">
                  {avgScore !== null ? avgScore.toFixed(1) : '--'}{' '}
                  <span className="text-[10px] font-normal text-slate-400">/ 10</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-2 text-[11px] text-slate-500 dark:text-zinc-400 flex items-center justify-between border-t border-slate-100 dark:border-zinc-800">
              <span className="flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                <span>Tiến độ thực chiến:</span>
              </span>
              <span className="font-bold text-slate-800 dark:text-zinc-200 font-mono">
                {Math.round((distinctExamSetsCount / (activeExamSets.length || 1)) * 100)}% hoàn thành
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* BENTO ROW 2: 3 PRACTICE GATEWAYS (Chuyên Đề & Ngân Hàng & Game)    */}
      {/* =================================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
        {/* Gateway 1: Luyện Chuyên Đề */}
        <div
          onClick={onPracticeMode}
          className="group rounded-2xl bg-white dark:bg-[#121217] border border-slate-200/90 dark:border-zinc-800 p-4 sm:p-5 shadow-xs hover:border-indigo-400/80 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between"
        >
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                {totalTopicsCount} DẠNG TOÁN
              </span>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition flex items-center gap-1.5">
                <span>Luyện Theo Dạng Toán</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400 mt-0.5 leading-relaxed">
                Rèn sâu từng dạng bài có đáp án giải thích chi tiết, gợi ý tư duy Socratic ({activeQuestions.length} câu {isPT ? 'chuẩn SGK' : 'bứt phá 9+'}).
              </p>
            </div>
          </div>

          <div className="pt-3 mt-2 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
            <span>Chọn dạng toán để bắt đầu</span>
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </div>
        </div>

        {/* Gateway 2: Ngân Hàng Câu Hỏi */}
        <div
          onClick={onQuestionBankMode}
          className="group rounded-2xl bg-white dark:bg-[#121217] border border-slate-200/90 dark:border-zinc-800 p-4 sm:p-5 shadow-xs hover:border-emerald-400/80 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between"
        >
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <Search className="w-4 h-4" />
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                {totalQuestionsCount ? `${totalQuestionsCount} CÂU` : `${activeQuestions.length} CÂU`}
              </span>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition flex items-center gap-1.5">
                <span>Ngân Hàng Câu Hỏi</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400 mt-0.5 leading-relaxed">
                Tra cứu kho câu hỏi đầy đủ phân loại 4 cấp độ ({activeQuestions.length} câu {isPT ? 'chuẩn SGK' : 'bứt phá HSG'}).
              </p>
            </div>
          </div>

          <div className="pt-3 mt-2 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <span>Duyệt câu hỏi theo mức độ</span>
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </div>
        </div>

        {/* Gateway 3: Game Vượt Chướng Ngại Vật (Đi Tìm Kho Báu) */}
        <div
          onClick={onTreasureMode}
          className="group rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent dark:from-amber-950/40 dark:via-zinc-900 dark:to-zinc-950 border-2 border-amber-400/80 dark:border-amber-600/70 p-4 sm:p-5 shadow-sm hover:border-amber-500 hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden"
        >
          <div className="space-y-2.5 relative z-10">
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <Compass className="w-4 h-4" />
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black font-mono bg-amber-500 text-white shadow-xs">
                GAME VIOLYMPIC
              </span>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-black text-amber-900 dark:text-amber-200 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition flex items-center gap-1.5">
                <span>Vượt Chướng Ngại Vật</span>
                <ChevronRight className="w-4 h-4 text-amber-500 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-300 mt-0.5 leading-relaxed">
                Đồng hành cùng chú sóc vượt mê cung thử thách toán học, tránh bụi cây và mở khóa rương kho báu hoàng gia!
              </p>
            </div>
          </div>

          <div className="pt-3 mt-2 border-t border-amber-200/60 dark:border-amber-800/60 flex items-center justify-between text-xs font-bold text-amber-700 dark:text-amber-400 relative z-10">
            <span>Vào chơi ngay</span>
            <span className="group-hover:translate-x-0.5 transition-transform font-mono">→</span>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* BENTO ROW 3: BẢN ĐỒ 10 CHƯƠNG TOÁN GDPT 2018 (Airy Tiles)           */}
      {/* =================================================================== */}
      <div className="rounded-3xl bg-white dark:bg-[#111319] border-2 border-slate-200 dark:border-zinc-800 p-4 sm:p-5 shadow-sm space-y-3 sm:space-y-4 transition-colors">
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-zinc-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-zinc-100">
                Lộ Trình 10 Chương Trọng Tâm {isPT ? 'Toán 7 Phổ Thông' : 'Toán 7 Nâng Cao'}
              </h2>
              <p className="text-xs text-slate-500 dark:text-zinc-400">
                Chọn một chương để mở danh sách chuyên đề và bắt đầu làm bài
              </p>
            </div>
          </div>

          <span className="text-xs font-mono font-bold text-slate-500 dark:text-zinc-400 hidden sm:inline px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-zinc-800">
            10 Chương · GDPT 2018
          </span>
        </div>

        {/* 10 Chapter Interactive Cards (2 cols on mobile, 3 on sm, 5 on lg) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
          {chapters.map((chapter, idx) => {
            const qCount = chapterQuestionCounts[chapter.id] || 0;
            return (
              <div
                key={chapter.id}
                onClick={() => onSelectChapter(chapter.id)}
                className="p-3.5 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 hover:bg-slate-50/80 dark:hover:bg-zinc-800/80 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group space-y-2.5"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold font-mono px-1.5 py-0.5 rounded bg-slate-900 text-white dark:bg-zinc-100 dark:text-zinc-900">
                      Ch.{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400">
                      {qCount} câu
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition line-clamp-2 leading-snug">
                    {chapter.name}
                  </h4>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-zinc-400 pt-1 border-t border-slate-100 dark:border-zinc-800">
                  <span>{chapter.topics.length} dạng</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =================================================================== */}
      {/* BENTO ROW 4: LỊCH SỬ THI & BÁO CÁO GẦN NHẤT                          */}
      {/* =================================================================== */}
      <div className="rounded-3xl bg-white dark:bg-[#111319] border-2 border-slate-200 dark:border-zinc-800 p-4 sm:p-5 shadow-sm space-y-3 sm:space-y-4 transition-colors">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-zinc-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-zinc-100">
                Lịch Sử Làm Bài Gần Đây
              </h2>
              <p className="text-xs text-slate-500 dark:text-zinc-400">
                Kết quả các bài thi thử được lưu trữ và đồng bộ
              </p>
            </div>
          </div>

          {examHistory.length > 0 && (
            <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
              {examHistory.length} bài đã lưu
            </span>
          )}
        </div>

        {examHistory.length === 0 ? (
          <div className="py-10 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-zinc-900 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-bold text-slate-800 dark:text-zinc-200">
                Chưa có lịch sử làm bài thi thử
              </p>
              <p className="text-xs text-slate-500 dark:text-zinc-400 max-w-sm mx-auto">
                Bấm giờ làm bài thi thử để hệ thống ghi nhận điểm số và phân tích chuyên đề cần cải thiện.
              </p>
            </div>
            <button
              type="button"
              onClick={onStartExamMode}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-xs transition cursor-pointer"
            >
              <span>Làm bài thi thử đầu tiên</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <div className="space-y-2.5">
            {examHistory.slice(0, 5).map((item) => {
              const isHighScore = item.score >= 40;
              const isMediumScore = item.score >= 25 && item.score < 40;
              return (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 hover:shadow-sm transition gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-zinc-100">
                        {item.examSetTitle}
                      </span>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono ${
                          isHighScore
                            ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                            : isMediumScore
                            ? 'bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300'
                            : 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300'
                        }`}
                      >
                        {item.score} / {item.maxScore || 50} điểm ({item.percentage}%)
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500 dark:text-zinc-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(item.completedAt)}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {formatDuration(item.timeSpentSeconds)}
                      </span>
                      <span>·</span>
                      <span>TN: {item.mcqScore}/{item.mcqTotal || 35}</span>
                      <span>·</span>
                      <span>Điền số: {item.fillScore}/{item.fillTotal || 15}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onStartSpecificExam(item.examSetId)}
                    className="self-end sm:self-center px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-700 text-[11px] font-semibold text-slate-700 dark:text-zinc-200 transition flex items-center gap-1.5 cursor-pointer shrink-0 shadow-xs"
                    title="Làm lại bộ đề này"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-blue-500" />
                    <span>Làm lại đề này</span>
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
