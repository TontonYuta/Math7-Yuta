import React, { useState } from 'react';
import { Question } from '../../../types/exam';
import { MathRenderer } from '../../../components/MathRenderer';
import { VirtualMathKeyboard } from '../../../components/VirtualMathKeyboard';
import { getDifficultyInfo } from '../../../utils/difficultyBadge';
import { X, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';

interface MathChallengeModalProps {
  question: Question;
  onClose: () => void;
  onSubmit: (userAnswer: string) => void;
}

export const MathChallengeModal: React.FC<MathChallengeModalProps> = ({
  question,
  onClose,
  onSubmit,
}) => {
  const [selectedMcq, setSelectedMcq] = useState<string>('');
  const [fillValue, setFillValue] = useState<string>('');

  const isMcq = question.type === 'mcq' && question.options && question.options.length > 0;
  const diffInfo = getDifficultyInfo(question);

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in select-none">
      {/* Expansive Arcade Modal: max-w-4xl (90-95vw) */}
      <div className="relative w-full max-w-4xl bg-stone-900 border-4 border-amber-500/80 rounded-3xl shadow-[0_20px_60px_-15px_rgba(245,158,11,0.3)] overflow-hidden flex flex-col max-h-[94vh]">
        {/* Fantasy Arcade Header */}
        <header className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-amber-100 px-6 py-4 flex items-center justify-between border-b-2 border-amber-900/60 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/30 border border-amber-300/40 flex items-center justify-center text-2xl shadow-inner animate-pulse">
              ⭐
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black tracking-wide text-amber-100 uppercase">
                  THỬ THÁCH TOÁN HỌC 7
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-950/60 text-amber-300 text-xs font-bold border border-amber-500/40">
                  {isMcq ? 'Trắc nghiệm' : 'Điền số'}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border shadow-sm ${diffInfo.bgClass} ${diffInfo.borderClass} ${diffInfo.colorClass}`}>
                  Độ khó: {diffInfo.starsString} ({diffInfo.badgeText})
                </span>
              </div>
              <p className="text-xs sm:text-sm text-amber-200/90 font-medium truncate max-w-md sm:max-w-xl">
                {question.chapterName || question.topicName || 'Giải đúng để mở đường đến kho báu!'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-2xl hover:bg-black/30 text-amber-200 hover:text-white transition-colors active:scale-90"
            title="Đóng (Không giải)"
          >
            <X className="w-6 h-6" />
          </button>
        </header>

        {/* Question Body - Spacious & Crisp Typography */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-stone-100">
          {/* Question Prompt Card */}
          <div className="p-5 sm:p-7 rounded-2xl bg-gradient-to-b from-stone-850 to-stone-900 border-2 border-amber-500/30 text-base sm:text-lg md:text-xl leading-relaxed shadow-xl text-stone-100">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Đề bài câu hỏi:</span>
            </div>
            <MathRenderer
              content={question.content}
              className="!text-amber-100 text-base sm:text-lg md:text-xl font-medium"
            />
          </div>

          {/* Multiple Choice Options - Large Tactile Arcade Buttons */}
          {isMcq && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
              {question.options!.map((opt) => {
                const isSelected = selectedMcq === opt.key;
                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => setSelectedMcq(opt.key)}
                    className={`group relative flex items-center gap-4 p-4 sm:p-5 rounded-2xl border-2 text-left transition-all duration-150 min-h-[72px] ${
                      isSelected
                        ? 'border-amber-400 bg-gradient-to-r from-amber-950/90 to-amber-900/80 text-amber-100 shadow-[0_0_20px_rgba(245,158,11,0.25)] ring-2 ring-amber-400/60 scale-[1.01]'
                        : 'border-stone-700 bg-stone-850/80 hover:bg-stone-800 hover:border-amber-500/60 text-stone-200 hover:scale-[1.005]'
                    }`}
                  >
                    <span
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center font-black text-base sm:text-lg shrink-0 shadow-md transition-all ${
                        isSelected
                          ? 'bg-amber-400 text-stone-950 ring-2 ring-amber-300'
                          : 'bg-stone-700/80 text-stone-200 group-hover:bg-amber-600/40 group-hover:text-amber-200'
                      }`}
                    >
                      {opt.key}
                    </span>

                    <div className="flex-1 text-sm sm:text-base font-medium">
                      <MathRenderer
                        content={opt.content}
                        className={isSelected ? '!text-amber-100 font-semibold' : '!text-stone-200'}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Direct Math Input for Fill Questions */}
          {!isMcq && (
            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="text-center">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-400 block mb-2">
                  Nhập đáp số của bạn vào ô dưới đây:
                </label>
                <input
                  type="text"
                  value={fillValue}
                  onChange={(e) => setFillValue(e.target.value)}
                  placeholder="Ví dụ: 12 hoặc 3/4 hoặc -5.2"
                  className="w-full text-center text-2xl sm:text-3xl md:text-4xl font-mono font-black px-6 py-4 rounded-2xl border-2 border-amber-500 bg-stone-950 text-amber-200 placeholder:text-stone-600 focus:outline-none focus:ring-4 focus:ring-amber-500/30 shadow-inner"
                  autoFocus
                />
              </div>

              <div className="pt-2">
                <VirtualMathKeyboard value={fillValue} onChange={setFillValue} />
              </div>
            </div>
          )}
        </div>

        {/* Violympic Action Bar: Sửa (Clear) & Trả lời (Submit) */}
        <footer className="bg-stone-950 px-6 py-4 border-t-2 border-stone-800 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 font-bold text-xs sm:text-sm transition-all"
          >
            Quay lại mê cung
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleClear}
              className="px-5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 active:scale-95 text-stone-200 font-bold text-sm transition-all shadow flex items-center gap-2 border border-stone-600"
            >
              <RotateCcw className="w-4 h-4 text-emerald-400" />
              <span>Sửa đáp án</span>
            </button>

            <button
              type="button"
              disabled={isMcq ? !selectedMcq : !fillValue.trim()}
              onClick={() => handleSubmit()}
              className="px-8 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 text-white font-black text-sm sm:text-base tracking-wider uppercase transition-all shadow-xl flex items-center gap-2"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>TRẢ LỜI NGAY</span>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};
