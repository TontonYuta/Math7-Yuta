import React from 'react';
import { MysteryImageItem } from '../types';
import { Trophy, RotateCcw, ArrowLeft, Star, Sparkles } from 'lucide-react';

interface MysteryOutcomeModalProps {
  status: 'won' | 'lost';
  score: number;
  coins: number;
  image: MysteryImageItem;
  onRestart: () => void;
  onExit: () => void;
}

export const MysteryOutcomeModal: React.FC<MysteryOutcomeModalProps> = ({
  status,
  score,
  coins,
  image,
  onRestart,
  onExit,
}) => {
  const isWon = status === 'won';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in select-none">
      <div
        className={`relative w-full max-w-md rounded-3xl p-6 text-center shadow-2xl border-4 ${
          isWon
            ? 'bg-gradient-to-b from-stone-900 via-amber-950 to-stone-950 border-amber-500 shadow-[0_0_50px_rgba(245,158,11,0.4)]'
            : 'bg-gradient-to-b from-stone-900 via-red-950 to-stone-950 border-red-500 shadow-[0_0_50px_rgba(239,68,68,0.3)]'
        }`}
      >
        <div className="text-5xl sm:text-6xl mb-3 animate-bounce">
          {isWon ? '🖼️' : '💔'}
        </div>

        <h3 className="text-2xl font-black text-amber-200 mb-1">
          {isWon ? 'GIẢI MÃ THÀNH CÔNG!' : 'CHƯA MỞ ĐƯỢC TRANH!'}
        </h3>

        <p className="text-xs sm:text-sm text-stone-300 mb-4 px-2">
          {isWon
            ? `Tuyệt đỉnh! Toàn bộ bức tranh "${image.title}" đã được lật mở rực rỡ!`
            : 'Bạn đã hết lượt trái tim. Hãy bình tĩnh tính toán lại một lần nữa nhé!'}
        </p>

        {/* 3 Stars display for victory */}
        {isWon && (
          <div className="flex items-center justify-center gap-2 mb-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400 animate-pulse" />
            ))}
          </div>
        )}

        {/* Reward Stats */}
        <div className="bg-stone-850/80 rounded-2xl p-4 border border-stone-700 mb-6 flex items-center justify-around text-center">
          <div>
            <span className="text-[11px] text-stone-400 block">Điểm số</span>
            <span className="text-xl font-mono font-black text-amber-300">+{score}</span>
          </div>
          <div className="w-px h-8 bg-stone-700" />
          <div>
            <span className="text-[11px] text-stone-400 block">Vàng thưởng</span>
            <span className="text-xl font-mono font-black text-yellow-400">+{coins} 🪙</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onExit}
            className="flex-1 py-3 rounded-2xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-sm transition-all flex items-center justify-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Thoát</span>
          </button>

          <button
            onClick={onRestart}
            className={`flex-1 py-3 rounded-2xl text-white font-black text-sm tracking-wider uppercase transition-all shadow-xl flex items-center justify-center gap-1.5 active:scale-95 ${
              isWon
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500'
                : 'bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500'
            }`}
          >
            <RotateCcw className="w-4 h-4" />
            <span>{isWon ? 'Mở tranh mới' : 'Chơi lại'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
