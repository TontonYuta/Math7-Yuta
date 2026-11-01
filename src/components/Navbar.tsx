import React from 'react';
import { Sun, Moon, GraduationCap, LayoutGrid, Menu, LogOut, Eye, EyeOff } from 'lucide-react';
import { ExamTrack } from '../utils/trackFilter';
import { getTargetExamYear } from '../utils/timeUtils';

export type AppMode = 'intro' | 'exam' | 'practice' | 'bank' | 'treasure';

interface NavbarProps {
  currentMode: AppMode;
  onSelectMode: (mode: AppMode) => void;
  onStartExam: () => void;
  isExamInProgress: boolean;
  onSubmitExamClick?: () => void;
  onExitExamClick?: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onHomeClick?: () => void;
  currentTrack?: ExamTrack;
  onSelectTrack?: (track: ExamTrack) => void;
  // Exam CBT header controls
  examTitle?: string;
  examTimerSlot?: React.ReactNode;
  isSidebarOpen?: boolean;
  onToggleSidebar?: () => void;
  answeredCount?: number;
  totalQuestions?: number;
  hideQuestionSource?: boolean;
  onToggleHideQuestionSource?: () => void;
  // Global sidebar & student profile
  onToggleMobileSidebar?: () => void;
  studentName?: string;
  studentSchool?: string;
  onEditStudentName?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentMode,
  onSelectMode,
  isExamInProgress,
  onSubmitExamClick,
  onExitExamClick,
  onHomeClick,
  theme,
  onToggleTheme,
  currentTrack = 'PHOTHONG',
  onSelectTrack,
  examTitle,
  examTimerSlot,
  isSidebarOpen,
  onToggleSidebar,
  answeredCount = 0,
  totalQuestions = 20,
  hideQuestionSource = false,
  onToggleHideQuestionSource,
  onToggleMobileSidebar,
  studentName,
  studentSchool,
}) => {
  const isPT = currentTrack === 'PHOTHONG';
  const targetYear = getTargetExamYear();

  return (
    <header className={`sticky top-0 z-40 h-[52px] bg-white dark:bg-[#09090b] border-b border-slate-200 dark:border-zinc-800 transition-colors select-none ${
      !isExamInProgress ? 'md:hidden' : ''
    }`}>
      <div className="w-full h-full flex items-center justify-between px-2.5 sm:px-4">
        {/* Left Zone: Brand Logo (outside exam) OR Focus Exam Controls (inside exam) */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {isExamInProgress ? (
            /* Inside Exam: Professional Exit Exam Button & Exam Title (Hidden all unrelated navigation) */
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onExitExamClick}
                className="px-2.5 py-1.5 rounded-lg border border-rose-200 dark:border-rose-900/60 bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-300 hover:bg-rose-100 dark:hover:bg-rose-900/50 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer shadow-xs active:scale-95"
                title="Rời khỏi phòng thi (Hệ thống sẽ hỏi xác nhận)"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Rời phòng thi</span>
                <span className="sm:hidden">Thoát</span>
              </button>

              {examTitle && (
                <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-zinc-800/80 text-xs font-medium text-slate-700 dark:text-zinc-300 max-w-[260px] lg:max-w-[340px] truncate border border-slate-200 dark:border-zinc-700/60">
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0 ${
                    isPT 
                      ? 'bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/60'
                      : 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60'
                  }`}>
                    {isPT ? 'Phổ Thông' : 'Nâng Cao'}
                  </span>
                  <span className="truncate" title={examTitle}>
                    {examTitle}
                  </span>
                </div>
              )}
            </div>
          ) : (
            /* Outside Exam: Brand Logo & Mobile Sidebar Trigger */
            <>
              {onToggleMobileSidebar && (
                <button
                  type="button"
                  onClick={onToggleMobileSidebar}
                  className="md:hidden p-2 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800 transition cursor-pointer"
                  title="Mục lục & Tổng quan hệ thống"
                  aria-label="Toggle Sidebar Menu"
                >
                  <Menu className="w-4 h-4" />
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  if (onHomeClick) {
                    onHomeClick();
                  } else {
                    onSelectMode('intro');
                  }
                }}
                className="flex items-center gap-2 group cursor-pointer text-left"
                title="Hồ sơ học sinh & Trang chủ"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-blue-500/30 dark:ring-blue-400/30 shrink-0 bg-blue-50 dark:bg-zinc-800 shadow-xs flex items-center justify-center">
                  <img src="/avt.png" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-black tracking-tight text-slate-900 dark:text-zinc-100 truncate max-w-[130px] sm:max-w-[180px]">
                    {studentName || 'Học sinh'}
                  </span>
                  <span className="text-[9.5px] text-slate-400 dark:text-zinc-500 font-medium truncate max-w-[130px] sm:max-w-[180px]">
                    {studentSchool || (isPT ? 'Toán 7 Chuẩn SGK' : 'Toán 7 Nâng Cao')}
                  </span>
                </div>
              </button>
            </>
          )}
        </div>

        {/* Center Zone: Mode Dependent */}
        {isExamInProgress ? (
          /* When in Exam CBT Mode: Live SVG Countdown Timer */
          <div className="flex items-center justify-center">
            {examTimerSlot}
          </div>
        ) : (
          /* Clean Section Breadcrumb Indicator (Desktop only) */
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400">
            <span className="text-slate-400 dark:text-zinc-500">{isPT ? 'Toán 7 Phổ Thông' : 'Toán 7 Nâng Cao'}</span>
            <span className="text-slate-300 dark:text-zinc-700">/</span>
            <span className="font-semibold text-slate-800 dark:text-zinc-200">
              {currentMode === 'practice'
                ? '25 Chuyên Đề Trọng Tâm'
                : currentMode === 'bank'
                ? 'Ngân Hàng Câu Hỏi'
                : currentMode === 'treasure'
                ? 'Vượt Chướng Ngại Vật (Đi Tìm Kho Báu)'
                : `Thi Thử ${isPT ? '60 Phút' : '90 Phút'}`}
            </span>
          </div>
        )}

        {/* Right Zone: CBT Actions / Mobile Track Switcher / Theme */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {isExamInProgress ? (
            <>
              {/* Toggle Question Source Tag (Hiện / Ẩn Nguồn Đề Thi) */}
              {onToggleHideQuestionSource && (
                <button
                  type="button"
                  onClick={onToggleHideQuestionSource}
                  className={`px-2 sm:px-2.5 py-1.5 rounded-lg border text-xs font-medium transition items-center gap-1.5 cursor-pointer shadow-xs ${
                    !hideQuestionSource
                      ? 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-300 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300'
                      : 'bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-800'
                  }`}
                  title={
                    hideQuestionSource
                      ? 'Hiện nguồn câu hỏi (SGK / Đề thi HSG)'
                      : 'Ẩn nguồn câu hỏi để thi thử như thi thật'
                  }
                >
                  {hideQuestionSource ? (
                    <EyeOff className="w-3.5 h-3.5 text-slate-400" />
                  ) : (
                    <Eye className="w-3.5 h-3.5 text-indigo-500" />
                  )}
                  <span className="hidden lg:inline text-[11px]">
                    {hideQuestionSource ? 'Hiện nguồn' : 'Nguồn đề'}
                  </span>
                </button>
              )}

              {/* Toggle Sidebar Button [📋 Câu hỏi] */}
              <button
                type="button"
                onClick={onToggleSidebar}
                className={`px-2 sm:px-2.5 py-1.5 rounded-lg border text-xs font-medium transition items-center gap-1.5 cursor-pointer shadow-xs ${
                  isSidebarOpen
                    ? 'bg-sky-50 dark:bg-sky-950/40 border-sky-300 dark:border-sky-800 text-sky-700 dark:text-sky-300'
                    : 'bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-800'
                }`}
                title={isSidebarOpen ? 'Thu gọn bảng câu hỏi' : 'Mở bảng câu hỏi'}
              >
                <LayoutGrid className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span className="font-mono text-[11px] sm:text-xs">
                  <span className="hidden sm:inline">Bảng câu hỏi </span>({answeredCount}/{totalQuestions})
                </span>
              </button>

              {/* Theme Toggle */}
              <button
                type="button"
                onClick={onToggleTheme}
                className="p-1.5 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 transition cursor-pointer"
                title={theme === 'dark' ? 'Chuyển sang giao diện Sáng' : 'Chuyển sang giao diện Tối'}
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-slate-700" />
                )}
              </button>

              {/* Nộp bài thi Button */}
              <button
                type="button"
                onClick={onSubmitExamClick}
                className="px-2.5 sm:px-3.5 py-1.5 text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 active:scale-95 rounded-lg transition whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
              >
                Nộp bài
              </button>
            </>
          ) : (
            <>
              {/* Mobile Fast Track Switcher Pill */}
              {onSelectTrack && (
                <div className="flex items-center p-0.5 rounded-lg bg-slate-100 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80">
                  <button
                    type="button"
                    onClick={() => onSelectTrack('PHOTHONG')}
                    className={`px-2 py-1 rounded-md text-[10px] font-bold transition flex items-center gap-1 cursor-pointer ${
                      isPT
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100'
                    }`}
                    title="Chế độ Phổ Thông chuẩn SGK"
                  >
                    <span>📘 Phổ Thông</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectTrack('NANGCAO')}
                    className={`px-2 py-1 rounded-md text-[10px] font-bold transition flex items-center gap-1 cursor-pointer ${
                      !isPT
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100'
                    }`}
                    title="Chế độ Nâng Cao & HSG"
                  >
                    <span>🚀 Nâng Cao</span>
                  </button>
                </div>
              )}

              {/* Theme Toggle */}
              <button
                type="button"
                onClick={onToggleTheme}
                className="p-1.5 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 transition cursor-pointer"
                title={theme === 'dark' ? 'Chuyển sang giao diện Sáng' : 'Chuyển sang giao diện Tối'}
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-slate-700" />
                )}
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
