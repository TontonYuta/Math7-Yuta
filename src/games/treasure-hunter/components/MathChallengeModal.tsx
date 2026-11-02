import React, { useState } from 'react';
import { Question } from '../../../types/exam';
import { MathRenderer } from '../../../components/MathRenderer';
import { VirtualMathKeyboard } from '../../../components/VirtualMathKeyboard';
import { getDifficultyInfo } from '../../../utils/difficultyBadge';
import { X, CheckCircle2, RotateCcw } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in select-none">
      <div className="relative w-full max-w-4xl bg-[#14161f] border border-zinc-700/90 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[94vh]">
        {/* Minimalist Problem Header */}
        <header className="bg-[#181a24] text-zinc-100 px-6 py-3.5 flex items-center justify-between border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 text-xs font-mono font-bold border border-zinc-700">
              {isMcq ? 'Trắc nghiệm' : 'Điền số'}
            </span>
            <span className={`px-2.5 py-1 rounded text-xs font-mono font-bold border ${diffInfo.bgClass} ${diffInfo.borderClass} ${diffInfo.colorClass}`}>
              Độ khó: {diffInfo.starsString} ({diffInfo.badgeText})
            </span>
            <span className="text-xs text-zinc-400 font-medium hidden sm:inline truncate max-w-sm">
              {question.chapterName || question.topicName || 'Thử thách toán học'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 min-w-[36px] min-h-[36px] flex items-center justify-center rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors active:scale-90"
            title="Đóng (Không giải)"
          >
            <X className="w-4 h-4" />
          </button>
        </header>

        {/* Question Prompt & Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-zinc-100">
          <div className="p-5 sm:p-6 rounded-xl bg-[#101218] border border-zinc-800 text-base sm:text-lg leading-relaxed shadow-inner">
            <div className="text-xs font-mono uppercase text-zinc-500 mb-2">
              Đề bài:
            </div>
            <MathRenderer
              content={question.content}
              className="!text-zinc-100 text-base sm:text-lg font-medium"
            />
          </div>

          {/* MCQ Options */}
          {isMcq && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {question.options!.map((opt) => {
                const isSelected = selectedMcq === opt.key;
                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => setSelectedMcq(opt.key)}
                    className={`group relative flex items-center gap-3.5 p-4 rounded-xl border text-left transition-all min-h-[64px] ${
                      isSelected
                        ? 'border-amber-400 bg-amber-950/20 text-white shadow ring-1 ring-amber-400'
                        : 'border-zinc-800 bg-[#101218] hover:border-zinc-600 text-zinc-300'
                    }`}
                  >
                    <span
                      className={`w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-sm shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-amber-400 text-zinc-950 font-black'
                          : 'bg-zinc-800 text-zinc-400 group-hover:text-zinc-200'
                      }`}
                    >
                      {opt.key}
                    </span>

                    <div className="flex-1 text-sm sm:text-base font-medium">
                      <MathRenderer
                        content={opt.content}
                        className={isSelected ? '!text-white font-semibold' : '!text-zinc-300'}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Direct Math Input for Fill Questions */}
          {!isMcq && (
            <div className="space-y-4 max-w-xl mx-auto">
              <div className="text-center">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                  Nhập đáp số vào ô bên dưới:
                </label>
                <input
                  type="text"
                  value={fillValue}
                  onChange={(e) => setFillValue(e.target.value)}
                  placeholder="Ví dụ: 12 hoặc 3/4 hoặc -5.2"
                  className="w-full text-center text-xl sm:text-2xl font-mono font-bold px-4 py-3 rounded-xl border border-zinc-700 bg-[#101218] text-amber-300 placeholder:text-zinc-600 focus:outline-none focus:border-amber-400 shadow-inner"
                  autoFocus
                />
              </div>

              <div className="pt-2">
                <VirtualMathKeyboard value={fillValue} onChange={setFillValue} />
              </div>
            </div>
          )}
        </div>

        {/* Action Bar */}
        <footer className="bg-[#181a24] px-6 py-3.5 border-t border-zinc-800 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 min-h-[40px] rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold text-xs transition-all flex items-center justify-center active:scale-95"
          >
            {backLabel || 'Quay lại'}
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleClear}
              className="px-4 py-2 min-h-[40px] rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold text-xs transition-all flex items-center gap-2 border border-zinc-700 active:scale-95"
            >
              <RotateCcw className="w-3.5 h-3.5 text-zinc-400" />
              <span>Sửa đáp án</span>
            </button>

            <button
              type="button"
              disabled={isMcq ? !selectedMcq : !fillValue.trim()}
              onClick={() => handleSubmit()}
              className="px-6 py-2.5 min-h-[40px] rounded-lg bg-zinc-100 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all shadow flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Xác nhận kết quả</span>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};
