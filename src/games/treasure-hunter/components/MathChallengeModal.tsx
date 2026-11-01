import React, { useState } from 'react';
import { Question } from '../../../types/exam';
import { MathRenderer } from '../../../components/MathRenderer';
import { VirtualMathKeyboard } from '../../../components/VirtualMathKeyboard';
import { X, CheckCircle2, RotateCcw, HelpCircle } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in select-none">
      <div className="relative w-full max-w-xl bg-stone-900 border-4 border-amber-600 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Parchment Styled Header */}
        <header className="bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-amber-100 px-5 py-3.5 flex items-center justify-between border-b-2 border-amber-950/60">
          <div className="flex items-center gap-2">
            <span className="text-2xl animate-spin-slow">⭐</span>
            <div>
              <h2 className="text-base sm:text-lg font-black tracking-wide text-amber-200">
                THỬ THÁCH TOÁN HỌC 7
              </h2>
              <p className="text-[11px] text-amber-300/80 font-medium truncate max-w-[280px]">
                {question.chapterName || question.topicName || 'Giải toán mở đường'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-black/30 text-amber-200 transition-colors"
            title="Đóng (Không giải)"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        {/* Question Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1 text-stone-100">
          {/* Question Text with KaTeX */}
          <div className="p-4 rounded-2xl bg-stone-800/90 border border-amber-600/30 text-sm sm:text-base leading-relaxed shadow-inner">
            <MathRenderer content={question.content} className="!text-amber-100 text-sm sm:text-base font-medium" />
          </div>

          {/* Multiple Choice Options */}
          {isMcq && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {question.options!.map((opt) => {
                const isSelected = selectedMcq === opt.key;
                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => setSelectedMcq(opt.key)}
                    className={`flex items-start gap-2.5 p-3 sm:p-3.5 rounded-xl border-2 text-left transition-all ${
                      isSelected
                        ? 'border-amber-400 bg-amber-950/70 text-amber-200 font-bold shadow-md ring-2 ring-amber-500/50'
                        : 'border-stone-700 bg-stone-800/60 hover:border-amber-500/50 text-stone-300'
                    }`}
                  >
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs shrink-0 ${
                        isSelected
                          ? 'bg-amber-500 text-stone-950'
                          : 'bg-stone-700 text-stone-300'
                      }`}
                    >
                      {opt.key}
                    </span>
                    <div className="flex-1 text-xs sm:text-sm mt-0.5">
                      <MathRenderer content={opt.content} className="!text-stone-100 font-medium" />
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Direct Math Input for Fill Questions */}
          {!isMcq && (
            <div className="space-y-3">
              <input
                type="text"
                value={fillValue}
                onChange={(e) => setFillValue(e.target.value)}
                placeholder="Ví dụ: 12 hoặc 3/4 hoặc -5"
                className="w-full text-center text-xl sm:text-2xl font-mono font-bold px-4 py-2.5 rounded-2xl border-2 border-amber-500/80 bg-stone-800 text-amber-200 focus:outline-none focus:ring-4 focus:ring-amber-500/20 shadow-inner"
                autoFocus
              />

              <div className="pt-1">
                <VirtualMathKeyboard
                  value={fillValue}
                  onChange={setFillValue}
                />
              </div>
            </div>
          )}
        </div>

        {/* Violympic Action Bar: Sửa (Clear) & Trả lời (Submit) */}
        <footer className="bg-stone-950 px-5 py-3 border-t border-stone-800 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={handleClear}
            className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 active:scale-95 text-white font-bold text-xs sm:text-sm transition-all shadow flex items-center gap-1.5"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Sửa</span>
          </button>

          <button
            type="button"
            disabled={isMcq ? !selectedMcq : !fillValue.trim()}
            onClick={() => handleSubmit()}
            className="px-6 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 text-white font-black text-xs sm:text-sm tracking-wide transition-all shadow-lg flex items-center gap-1.5"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Trả lời</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
