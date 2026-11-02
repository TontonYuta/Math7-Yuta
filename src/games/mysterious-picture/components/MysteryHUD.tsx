import React from 'react';
import { Heart, Timer, ArrowLeft, Trophy, Image, Sparkles } from 'lucide-react';

interface MysteryHUDProps {
  score: number;
  coins: number;
  lives: number;
  maxLives: number;
  timeRemaining: number;
  revealedCount: number;
  totalTiles: number;
  imageTitle: string;
  onExit: () => void;
}

export const MysteryHUD: React.FC<MysteryHUDProps> = ({
  score,
  coins,
  lives,
  maxLives,
  timeRemaining,
  revealedCount,
  totalTiles,
  imageTitle,
  onExit,
}) => {
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <header className="w-full max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-3 p-3 sm:p-4 bg-stone-900/95 border-2 border-amber-600/60 rounded-3xl shadow-xl backdrop-blur-md select-none">
      {/* Exit Button */}
      <button
        onClick={onExit}
        className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-stone-800 hover:bg-stone-700 border border-stone-600 text-stone-200 text-xs sm:text-sm font-black transition-all active:scale-95 min-h-[44px]"
        title="Trở về bản đồ phiêu lưu"
      >
        <ArrowLeft className="w-4 h-4 text-amber-400" />
        <span>Về Bản Đồ</span>
      </button>

      {/* Center Image Mission Info */}
      <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-amber-950/60 border border-amber-500/40 text-amber-200 text-xs font-bold">
        <Image className="w-4 h-4 text-amber-400" />
        <span className="truncate max-w-[200px]">{imageTitle}</span>
      </div>

      {/* Progress: Mảnh ghép đã mở */}
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-stone-800 border border-stone-700 text-xs font-bold text-stone-200">
        <Sparkles className="w-4 h-4 text-amber-400" />
        <span>Mảnh ghép:</span>
        <span className="text-amber-300 font-mono font-black">{revealedCount}/{totalTiles}</span>
      </div>

      {/* Stats Group */}
      <div className="flex items-center gap-3">
        {/* Hearts */}
        <div className="flex items-center gap-1 px-3 py-1.5 rounded-2xl bg-red-950/70 border border-red-500/50">
          {Array.from({ length: maxLives }).map((_, i) => (
            <Heart
              key={i}
              className={`w-4 h-4 ${
                i < lives ? 'text-red-500 fill-red-500 animate-pulse' : 'text-stone-700'
              }`}
            />
          ))}
        </div>

        {/* Timer */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-stone-800 border border-stone-700 text-stone-200 text-xs sm:text-sm font-mono font-bold">
          <Timer className="w-4 h-4 text-amber-400" />
          <span className={timeRemaining < 120 ? 'text-red-400 animate-pulse' : 'text-amber-200'}>
            {formatTime(timeRemaining)}
          </span>
        </div>

        {/* Coins */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-yellow-950/70 border border-yellow-500/50 text-yellow-300 text-xs sm:text-sm font-bold font-mono">
          <span>🪙</span>
          <span>{coins}</span>
        </div>
      </div>
    </header>
  );
};
