import React, { useState } from 'react';
import { Question } from '../../../types/exam';
import { MathRenderer } from '../../../components/MathRenderer';
import { VirtualMathKeyboard } from '../../../components/VirtualMathKeyboard';
import { getDifficultyInfo } from '../../../utils/difficultyBadge';
import { getTheoryScroll } from '../../../data/toan7/theory';
import { TheoryScrollModal } from '../../../components/theory/TheoryScrollModal';
import { X, CheckCircle2, RotateCcw, Scroll } from 'lucide-react';

interface MathChallengeModalProps {
  question: Question;
  onClose: () => void;
  onSubmit: (userAnswer: string) => void;
  backLabel?: string;
}

export const MathChallengeModal: React.FC<MathChallengeModalProps> = ({
  question,
  onClose,
  onSubmit,
  backLabel,
}) => {
  const [selectedMcq, setSelectedMcq] = useState<string>('');
  const [fillValue, setFillValue] = useState<string>('');
  const [showTheory, setShowTheory] = useState<boolean>(false);

  const isMcq = question.type === 'mcq' && question.options && question.options.length > 0;
  const diffInfo = getDifficultyInfo(question);
  const theoryScroll = getTheoryScroll(question.chapterId, question.topicId);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const ans = isMcq ? selectedMcq : fillValue.trim();
    if (!ans) return;
    onSubmit(ans);
  };

  const handleClear = () => {
    if (isMcq) setSelectedMcq('');
    else setFillValue('');
  };

  return (
    <>
      {/* 100% Full-Screen Immersive Question Experience */}
      <div className="fixed inset-0 z-50 w-screen h-screen bg-[#0a0c14] flex flex-col animate-fade-in select-none overflow-hidden">
        {/* Full-Width Header */}
        <header className="w-full bg-[#131622] text-zinc-100 px-4 sm:px-8 lg:px-12 py-3.5 flex items-center justify-between border-b border-zinc-800 shadow-lg shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-4 flex-wrap">
            <span className="px-3 py-1 rounded-lg bg-zinc-800 text-zinc-200 text-xs sm:text-sm font-mono font-black border border-zinc-700">
              {isMcq ? 'Trắc nghiệm' : 'Điền số'}
            </span>
            <span className={`px-3 py-1 rounded-lg text-xs sm:text-sm font-mono font-black border ${diffInfo.bgClass} ${diffInfo.borderClass} ${diffInfo.colorClass}`}>
              Độ khó: {diffInfo.starsString} ({diffInfo.badgeText})
            </span>
            {question.track === 'NANGCAO' ? (
              <span className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-amber-500/20 to-purple-500/20 text-amber-300 border border-amber-500/50 text-xs font-black uppercase tracking-wider">
                👑 15 Chuyên Đề HSG
              </span>
            ) : (
              <span className="px-2.5 py-1 rounded-lg bg-sky-500/15 text-sky-300 border border-sky-500/40 text-xs font-bold uppercase tracking-wider">
                📘 Phổ Thông
              </span>
            )}
            <span className="text-xs sm:text-sm text-zinc-400 font-semibold hidden md:inline truncate max-w-md">
              {question.chapterName || question.topicName || 'Thử thách toán học'}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Quick Access Theory Scroll (Bí kíp) */}
            <button
              onClick={() => setShowTheory(true)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 text-amber-300 text-xs sm:text-sm font-bold transition-all active:scale-95 shadow-sm"
              title="Tra cứu bí kíp lý thuyết"
            >
              <Scroll className="w-4 h-4 text-amber-400" />
              <span>Bí Kíp</span>
            </button>

            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors active:scale-90"
              title="Đóng (Không giải)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Full-Screen Main Content Body */}
        <div className="flex-1 w-full overflow-y-auto px-4 sm:px-10 lg:px-16 py-6 space-y-6">
          {/* Broad Question Prompt Box */}
          <div className="w-full p-6 sm:p-8 rounded-2xl bg-[#111420] border border-zinc-800 text-lg sm:text-2xl leading-relaxed shadow-xl">
            <div className="text-xs sm:text-sm font-mono uppercase text-amber-400 font-bold mb-3 flex items-center gap-2">
              <span>Đề Bài Thử Thách:</span>
            </div>
            <MathRenderer
              content={question.content}
              className="!text-zinc-100 text-lg sm:text-2xl font-medium leading-loose"
            />
          </div>

          {/* MCQ Options - Wide Full-Screen Grid */}
          {isMcq && (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {question.options!.map((opt) => {
                const isSelected = selectedMcq === opt.key;
                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => setSelectedMcq(opt.key)}
                    className={`group relative flex items-center gap-4 p-5 sm:p-6 rounded-2xl border text-left transition-all min-h-[76px] shadow-md ${
                      isSelected
                        ? 'border-amber-400 bg-amber-950/25 text-white ring-2 ring-amber-400/80'
                        : 'border-zinc-800 bg-[#121420] hover:border-zinc-600 hover:bg-[#161a29] text-zinc-300'
                    }`}
                  >
                    <span
                      className={`w-11 h-11 rounded-xl flex items-center justify-center font-mono font-black text-base shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-amber-400 text-zinc-950 shadow-lg'
                          : 'bg-zinc-800 text-zinc-400 group-hover:text-zinc-200'
                      }`}
                    >
                      {opt.key}
                    </span>

                    <div className="flex-1 text-base sm:text-xl font-medium">
                      <MathRenderer
                        content={opt.content}
                        className={isSelected ? '!text-white font-semibold' : '!text-zinc-200'}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Direct Math Input for Fill Questions - Wide Centered Layout */}
          {!isMcq && (
            <div className="w-full max-w-3xl mx-auto space-y-6 pt-2">
              <div className="text-center">
                <label className="text-sm font-mono uppercase tracking-wider text-amber-300 font-bold block mb-3">
                  Nhập đáp số vào ô bên dưới:
                </label>
                <input
                  type="text"
                  value={fillValue}
                  onChange={(e) => setFillValue(e.target.value)}
                  placeholder="Ví dụ: 12 hoặc 3/4 hoặc -5.2"
                  className="w-full text-center text-2xl sm:text-3xl font-mono font-black px-6 py-4 rounded-2xl border-2 border-zinc-700 bg-[#121420] text-amber-300 placeholder:text-zinc-600 focus:outline-none focus:border-amber-400 shadow-2xl"
                  autoFocus
                />
              </div>

              <div className="pt-2">
                <VirtualMathKeyboard value={fillValue} onChange={setFillValue} />
              </div>
            </div>
          )}
        </div>

        {/* Full-Width Action Footer */}
        <footer className="w-full bg-[#131622] px-4 sm:px-10 lg:px-16 py-4 border-t border-zinc-800 flex items-center justify-between gap-4 shrink-0 shadow-2xl">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-sm transition-all active:scale-95"
          >
            {backLabel || 'Quay lại bản đồ'}
          </button>

          <div className="flex items-center gap-3.5">
            <button
              type="button"
              onClick={handleClear}
              className="px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-sm transition-all flex items-center gap-2 border border-zinc-700 active:scale-95"
            >
              <RotateCcw className="w-4 h-4 text-zinc-400" />
              <span>Sửa đáp án</span>
            </button>

            <button
              type="button"
              disabled={isMcq ? !selectedMcq : !fillValue.trim()}
              onClick={() => handleSubmit()}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 text-zinc-950 font-black text-sm uppercase tracking-wider transition-all shadow-xl shadow-amber-500/20 flex items-center gap-2.5"
            >
              <CheckCircle2 className="w-5 h-5 fill-zinc-950" />
              <span>Xác nhận kết quả</span>
            </button>
          </div>
        </footer>
      </div>

      {/* Embedded Theory Scroll Modal */}
      {showTheory && (
        <TheoryScrollModal
          theory={theoryScroll}
          onClose={() => setShowTheory(false)}
        />
      )}
    </>
  );
};
