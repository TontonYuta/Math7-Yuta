import React from 'react';
import { Heart, Timer, ArrowLeft, Image, Grid3X3 } from 'lucide-react';

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
    <header className="w-full max-w-[1600px] mx-auto flex flex-wrap items-center justify-between gap-2.5 sm:gap-4 px-3 py-2.5 sm:px-6 sm:py-4 bg-[#14161f]/95 backdrop-blur-md border border-zinc-800/90 rounded-2xl sm:rounded-3xl shadow-xl select-none">
      <button
        onClick={onExit}
        className="flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-xs sm:text-sm font-bold transition-all active:scale-95 border border-zinc-700/80 shadow-sm"
        title="Trở về bản đồ"
      >
        <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-300" />
        <span className="hidden xs:inline sm:inline">Về Bản Đồ</span>
        <span className="xs:hidden sm:hidden">Về</span>
      </button>

      {/* Target Artwork Title */}
      <div className="hidden md:flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-zinc-850 border border-zinc-750 text-zinc-200 text-sm font-mono font-bold">
        <Image className="w-4 h-4 text-amber-400" />
        <span className="truncate max-w-[280px]">{imageTitle}</span>
      </div>

      {/* Tiles Count */}
      <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl bg-zinc-850 border border-zinc-750 text-xs sm:text-sm text-zinc-200 font-mono font-bold shadow-inner">
        <Grid3X3 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
        <span className="hidden sm:inline">Tiến độ phong ấn:</span>
        <span className="sm:hidden">Phong ấn:</span>
        <span className="text-amber-400 font-extrabold">{revealedCount}/{totalTiles}</span>
      </div>

      {/* Stats Group */}
      <div className="flex items-center gap-1.5 sm:gap-3">
        {/* Lives / Hearts */}
        <div className="flex items-center gap-1 px-2.5 py-1.5 sm:px-3.5 sm:py-2.5 rounded-xl sm:rounded-2xl bg-zinc-850 border border-zinc-750 shadow-inner">
          {Array.from({ length: maxLives }).map((_, i) => (
            <Heart
              key={i}
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                i < lives ? 'text-red-500 fill-red-500' : 'text-zinc-700'
              }`}
            />
          ))}
        </div>

        {/* Timer */}
        <div className="flex items-center gap-1 px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl bg-zinc-850 border border-zinc-750 text-xs sm:text-sm font-mono font-extrabold text-zinc-200 shadow-inner">
          <Timer className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-400" />
          <span className={timeRemaining < 120 ? 'text-red-400' : 'text-zinc-200'}>
            {formatTime(timeRemaining)}
          </span>
        </div>

        {/* Berries (Beli) */}
        <div className="flex items-center gap-1 px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-mono font-black shadow-inner">
          <span className="text-sm sm:text-base text-amber-400 leading-none">฿</span>
          <span>{coins.toLocaleString()}</span>
        </div>
      </div>
    </header>
  );
};
