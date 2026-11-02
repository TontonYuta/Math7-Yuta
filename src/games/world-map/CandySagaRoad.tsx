import React from 'react';
import { GameLevel } from './types';
import { Star, Lock, Swords, Grid3X3, Compass } from 'lucide-react';

interface CandySagaRoadProps {
  levels: GameLevel[];
  onOpenLevelPreview: (level: GameLevel) => void;
}

export const CandySagaRoad: React.FC<CandySagaRoadProps> = ({
  levels,
  onOpenLevelPreview,
}) => {
  const getHorizontalOffset = (index: number, isBoss: boolean) => {
    if (isBoss) return '50%';
    const pattern = [35, 65, 35, 65];
    return `${pattern[index % pattern.length]}%`;
  };

  const currentLevel =
    levels.find((l) => l.isUnlocked && l.starsEarned < 3) ||
    [...levels].reverse().find((l) => l.isUnlocked) ||
    levels[0];

  return (
    <div className="relative w-full max-w-xl mx-auto py-8 px-4 flex flex-col items-center select-none">
      {/* Central Guide Line */}
      <div className="absolute inset-y-8 left-1/2 -translate-x-1/2 w-0.5 bg-zinc-800/80 pointer-events-none" />

      {/* Levels Road Stack (bottom to top progression) */}
      <div className="relative w-full flex flex-col-reverse gap-10">
        {levels.map((level, idx) => {
          const isBoss = !!level.isBoss;
          const isLocked = !level.isUnlocked;
          const isCurrent = level.id === currentLevel.id;
          const hOffset = getHorizontalOffset(idx, isBoss);
          const formattedNum = level.levelNumber.toString().padStart(2, '0');

          if (isBoss) {
            return (
              <div key={level.id} className="w-full flex justify-center pt-2 z-10">
                <div
                  onClick={() => !isLocked && onOpenLevelPreview(level)}
                  className={`group relative flex flex-col items-center cursor-pointer transition-all ${
                    isLocked ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-95'
                  }`}
                >
                  <div
                    className={`w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border-2 flex flex-col items-center justify-center p-3 transition-all ${
                      isLocked
                        ? 'bg-[#101218] border-zinc-800 text-zinc-600'
                        : isCurrent
                        ? 'bg-[#1a1418] border-red-500/80 ring-2 ring-red-500/30 text-white shadow-xl'
                        : 'bg-[#161318] border-red-700/60 hover:border-red-500 text-white shadow-md'
                    }`}
                  >
                    <Swords className={`w-8 h-8 mb-1 ${isLocked ? 'text-zinc-600' : 'text-red-400'}`} />
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-zinc-300">
                      {isLocked ? 'KHÓA' : 'QUYẾT ĐẤU TRÙM ARC'}
                    </span>
                  </div>

                  <div className="mt-2 text-center bg-[#14161f]/90 px-3.5 py-1.5 rounded-xl border border-zinc-800 shadow">
                    <h4 className="text-xs font-bold text-white">
                      {level.bossName || level.title}
                    </h4>
                    <span className="text-[10px] font-mono text-amber-400 block font-semibold">
                      Đề tổng hợp • Nhận Bounty
                    </span>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div key={level.id} className="relative w-full h-20 flex items-center z-10">
              <div
                style={{ left: hOffset }}
                className="absolute -translate-x-1/2 flex flex-col items-center"
              >
                {/* Current Active Indicator Pill */}
                {isCurrent && !isLocked && (
                  <div className="absolute -top-7 px-2 py-0.5 rounded bg-zinc-100 text-zinc-950 text-[10px] font-mono font-bold uppercase tracking-wider shadow whitespace-nowrap z-20">
                    Vị trí hiện tại
                  </div>
                )}

                {/* Sleek Node Button */}
                <button
                  type="button"
                  onClick={() => !isLocked && onOpenLevelPreview(level)}
                  disabled={isLocked}
                  className={`group relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border-2 flex flex-col items-center justify-center transition-all duration-150 active:scale-95 ${
                    isLocked
                      ? 'bg-[#101218] border-zinc-850 text-zinc-600 cursor-not-allowed opacity-60'
                      : isCurrent
                      ? 'bg-zinc-800 border-amber-400 ring-2 ring-amber-400/40 text-white shadow-lg'
                      : 'bg-[#14161f] border-zinc-700/80 hover:border-zinc-500 text-zinc-200 hover:bg-[#1a1c27]'
                  }`}
                >
                  {isLocked ? (
                    <Lock className="w-4 h-4 text-zinc-600" />
                  ) : (
                    <>
                      <div className="text-zinc-400 group-hover:text-amber-400 transition-colors">
                        {level.gameType === 'picture' ? (
                          <Grid3X3 className="w-3.5 h-3.5" />
                        ) : (
                          <Compass className="w-3.5 h-3.5" />
                        )}
                      </div>
                      <span className="font-mono text-xs sm:text-sm font-bold text-white leading-none mt-0.5">
                        {formattedNum}
                      </span>
                    </>
                  )}
                </button>

                {/* Subtle Stars Bar */}
                <div className="mt-1.5 flex items-center gap-1 bg-[#14161f] px-2 py-0.5 rounded-md border border-zinc-800">
                  {Array.from({ length: 3 }).map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className={`w-3 h-3 ${
                        starIdx < level.starsEarned
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-zinc-700'
                      }`}
                    />
                  ))}
                </div>

                {/* Concise Level Title */}
                <span className="text-[10px] font-mono text-zinc-400 mt-1 max-w-[120px] text-center truncate">
                  {level.gameType === 'picture' ? 'Poneglyph' : 'Đột kích'} {formattedNum}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
