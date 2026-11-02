import React from 'react';
import { Heart, Timer, ArrowLeft, Image, Grid3X3, Coins } from 'lucide-react';

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
    <header className="w-full max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-[#14161f] border border-zinc-800 rounded-2xl shadow-lg select-none">
      <button
        onClick={onExit}
        className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-all active:scale-95 border border-zinc-700"
        title="Trở về bản đồ"
      >
        <ArrowLeft className="w-4 h-4 text-zinc-400" />
        <span>Về Bản Đồ</span>
      </button>

      {/* Target Artwork Title */}
      <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-850 border border-zinc-750 text-zinc-300 text-xs font-mono">
        <Image className="w-3.5 h-3.5 text-zinc-400" />
        <span className="truncate max-w-[200px]">{imageTitle}</span>
      </div>

      {/* Tiles Count */}
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-850 border border-zinc-750 text-xs text-zinc-300 font-mono font-bold">
        <Grid3X3 className="w-3.5 h-3.5 text-amber-400" />
        <span>Tiến độ:</span>
        <span className="text-amber-400">{revealedCount}/{totalTiles}</span>
      </div>

      {/* Stats Group */}
      <div className="flex items-center gap-2.5">
        {/* Lives / Hearts */}
        <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-zinc-850 border border-zinc-750">
          {Array.from({ length: maxLives }).map((_, i) => (
            <Heart
              key={i}
              className={`w-3.5 h-3.5 ${
                i < lives ? 'text-red-500 fill-red-500' : 'text-zinc-700'
              }`}
            />
          ))}
        </div>

        {/* Timer */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-850 border border-zinc-750 text-xs font-mono font-bold text-zinc-200">
          <Timer className="w-3.5 h-3.5 text-zinc-400" />
          <span className={timeRemaining < 120 ? 'text-red-400' : 'text-zinc-200'}>
            {formatTime(timeRemaining)}
          </span>
        </div>

        {/* Coins */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-850 border border-zinc-750 text-yellow-400 text-xs font-mono font-bold">
          <Coins className="w-3.5 h-3.5" />
          <span>{coins}</span>
        </div>
      </div>
    </header>
  );
};
