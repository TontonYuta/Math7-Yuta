import React from 'react';
import { TheoryScroll } from '../../data/toan7/theory';
import { MathRenderer } from '../MathRenderer';
import { X, Scroll, Zap, BookOpen, Lightbulb, Play, ShieldAlert } from 'lucide-react';

interface TheoryScrollModalProps {
  theory: TheoryScroll;
  onClose: () => void;
  onStartAction?: () => void;
  startActionLabel?: string;
}

export const TheoryScrollModal: React.FC<TheoryScrollModalProps> = ({
  theory,
  onClose,
  onStartAction,
  startActionLabel = 'Vào Trận Ngay',
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in select-none p-3 sm:p-6 lg:p-10">
      <div className="relative w-full max-w-6xl h-full max-h-[92vh] rounded-3xl bg-[#0f111a] border-2 border-amber-500/70 shadow-2xl flex flex-col overflow-hidden text-zinc-100">
        {/* Ancient Scroll Header */}
        <header className="px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-[#171a2b] via-[#1c2136] to-[#171a2b] border-b border-amber-500/40 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400 shadow-md">
              <Scroll className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] sm:text-xs font-mono font-bold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  {theory.onePieceTheme}
                </span>
                <span className="text-zinc-500 text-xs hidden sm:inline">•</span>
                <span className="text-xs text-zinc-400 font-semibold hidden sm:inline">{theory.chapterName}</span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-amber-100 mt-0.5">
                {theory.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition-colors active:scale-90"
            title="Đóng bí kíp"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Summary Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 text-amber-200 text-sm sm:text-base leading-relaxed flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p className="font-medium">{theory.summary}</p>
          </div>

          {/* Section 1: Core Formulations (Công thức trọng tâm) */}
          <section className="space-y-4">
            <div className="flex items-center gap-2.5 text-base sm:text-lg font-bold text-amber-300">
              <Zap className="w-5 h-5 text-amber-400" />
              <span>1. Công Thức Trọng Tâm Cần Nhớ</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {theory.coreFormulas.map((f, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#141624] border border-zinc-700/80 p-4 sm:p-5 flex flex-col justify-between hover:border-amber-400/50 transition-colors shadow-md"
                >
                  <div className="text-xs sm:text-sm font-bold text-amber-400 uppercase font-mono tracking-wider mb-2">
                    {f.name}
                  </div>
                  <div className="py-2.5 px-3 rounded-xl bg-[#0a0c13] border border-zinc-800 my-1 overflow-x-auto text-center">
                    <MathRenderer content={f.latex} className="!text-amber-100 text-base sm:text-lg font-medium" />
                  </div>
                  {f.explanation && (
                    <div className="text-xs text-zinc-400 mt-2 font-medium italic">
                      💡 {f.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Key Rules & Theorems (Quy tắc & Định lý) */}
          <section className="space-y-3">
            <div className="flex items-center gap-2.5 text-base sm:text-lg font-bold text-sky-300">
              <BookOpen className="w-5 h-5 text-sky-400" />
              <span>2. Quy Tắc & Định Lý Cốt Lõi</span>
            </div>

            <div className="space-y-2.5">
              {theory.keyRules.map((rule, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-xl bg-[#12141f] border border-zinc-800 text-sm sm:text-base text-zinc-200 flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{rule}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: HSG Pro-Tips (Tuyệt kỹ giải nhanh HSG) */}
          <section className="space-y-3">
            <div className="flex items-center gap-2.5 text-base sm:text-lg font-bold text-purple-300">
              <ShieldAlert className="w-5 h-5 text-purple-400" />
              <span>3. Tuyệt Kỹ & Mẹo Giải Nhanh HSG</span>
            </div>

            <div className="space-y-2.5">
              {theory.hsgProTips.map((tip, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/40 text-sm sm:text-base text-purple-100 flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-lg bg-purple-500/30 text-purple-300 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    ★
                  </span>
                  <div className="leading-relaxed flex-1">
                    <MathRenderer content={tip} className="!text-purple-100" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Action Footer */}
        <footer className="px-6 sm:px-8 py-4 bg-[#141624] border-t border-zinc-800 flex items-center justify-between shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm font-bold transition-all"
          >
            Đóng Cẩm Nang
          </button>

          {onStartAction && (
            <button
              onClick={() => {
                onClose();
                onStartAction();
              }}
              className="px-8 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 font-black text-sm sm:text-base flex items-center gap-2.5 shadow-xl shadow-amber-500/20 transition-all active:scale-95"
            >
              <Play className="w-5 h-5 fill-zinc-950" />
              <span>{startActionLabel}</span>
            </button>
          )}
        </footer>
      </div>
    </div>
  );
};
