import React, { useState } from 'react';
import { Question } from '../../../types/exam';
import { MathRenderer } from '../../../components/MathRenderer';
import { VirtualMathKeyboard } from '../../../components/VirtualMathKeyboard';
import { HelpCircle, X, CheckCircle2, RotateCcw } from 'lucide-react';

interface QuestionModalProps {
  question: Question;
  onClose: () => void;
  onSubmit: (userAnswer: string) => void;
}

export const QuestionModal: React.FC<QuestionModalProps> = ({
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
    if (isMcq) {
      setSelectedMcq('');
    } else {
      setFillValue('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white dark:bg-stone-900 rounded-3xl border-4 border-amber-600 dark:border-amber-700 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white px-6 py-4 flex items-center justify-between border-b-2 border-amber-900/40">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            <div>
              <h2 className="text-lg font-black tracking-wide">THỬ THÁCH TOÁN HỌC</h2>
              <p className="text-xs text-amber-200">
                {question.chapterName || question.topicName || 'Toán học lớp 7'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
            title="Đóng thử thách"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Question Text with KaTeX */}
          <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-stone-800/80 border border-amber-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 text-base sm:text-lg leading-relaxed shadow-sm">
            <MathRenderer content={question.content} />
          </div>

          {/* MCQ Mode */}
          {isMcq && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {question.options!.map((opt) => {
                const isSelected = selectedMcq === opt.key;
                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => setSelectedMcq(opt.key)}
                    className={`flex items-start gap-3 p-4 rounded-2xl border-2 text-left transition-all ${
                      isSelected
                        ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/40 ring-2 ring-amber-500 font-bold shadow-md'
                        : 'border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 hover:border-amber-400 dark:hover:border-amber-600'
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm ${
                        isSelected
                          ? 'bg-amber-600 text-white'
                          : 'bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300'
                      }`}
                    >
                      {opt.key}
                    </span>
                    <div className="flex-1 text-sm sm:text-base text-stone-800 dark:text-stone-200 mt-1">
                      <MathRenderer content={opt.content} />
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Fill-in Short Answer Mode */}
          {!isMcq && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                  Nhập đáp án của bạn:
                </label>
                <input
                  type="text"
                  value={fillValue}
                  onChange={(e) => setFillValue(e.target.value)}
                  placeholder="Ví dụ: 12 hoặc 3/4 hoặc -5"
                  className="w-full text-center text-xl sm:text-2xl font-mono font-bold px-4 py-3 rounded-2xl border-2 border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-500/20 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 shadow-inner"
                  autoFocus
                />
              </div>

              {/* Virtual Math Keyboard */}
              <div className="pt-2">
                <VirtualMathKeyboard
                  value={fillValue}
                  onChange={setFillValue}
                />
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Violympic Style Buttons */}
        <div className="bg-stone-50 dark:bg-stone-800/80 px-6 py-4 border-t border-stone-200 dark:border-stone-700 flex items-center justify-end gap-3">
          {/* Button "Sửa" (Clear) */}
          <button
            type="button"
            onClick={handleClear}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-sm flex items-center gap-1.5 active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Sửa</span>
          </button>

          {/* Button "Trả lời" (Submit) */}
          <button
            type="button"
            disabled={isMcq ? !selectedMcq : !fillValue.trim()}
            onClick={() => handleSubmit()}
            className="px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black tracking-wide transition-all shadow-md flex items-center gap-2 active:scale-95"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>Trả lời</span>
          </button>
        </div>
      </div>
    </div>
  );
};
