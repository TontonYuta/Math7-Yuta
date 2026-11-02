import React from 'react';
import { GameLevel } from './types';
import { Star, Lock, Swords } from 'lucide-react';
import { AncientPoneglyphNode, OnePieceTreasureChest } from './onePieceAssets';

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
    const pattern = [30, 70, 30, 70];
    return `${pattern[index % pattern.length]}%`;
  };

  const currentLevel =
    levels.find((l) => l.isUnlocked && l.starsEarned < 3) ||
    [...levels].reverse().find((l) => l.isUnlocked) ||
    levels[0];

  return (
    <div className="relative w-full max-w-3xl mx-auto py-10 px-6 flex flex-col items-center select-none">
      {/* Central Guide Line */}
      <div className="absolute inset-y-8 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-amber-500/20 via-zinc-800 to-amber-500/10 pointer-events-none rounded-full" />

      {/* Levels Road Stack (bottom to top progression) */}
      <div className="relative w-full flex flex-col-reverse gap-12">
        {levels.map((level, idx) => {
          const isBoss = !!level.isBoss;
          const isLocked = !level.isUnlocked;
          const isCurrent = level.id === currentLevel.id;
          const hOffset = getHorizontalOffset(idx, isBoss);
          const formattedNum = level.levelNumber.toString().padStart(2, '0');

          if (isBoss) {
            return (
              <div key={level.id} className="w-full flex justify-center pt-4 z-10">
                <div
                  onClick={() => !isLocked && onOpenLevelPreview(level)}
                  className={`group relative flex flex-col items-center cursor-pointer transition-all ${
                    isLocked ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.03] active:scale-95'
                  }`}
                >
                  <div
                    className={`w-32 h-32 sm:w-36 sm:h-36 rounded-3xl border-2 flex flex-col items-center justify-center p-4 transition-all ${
                      isLocked
                        ? 'bg-[#101218] border-zinc-800 text-zinc-600'
                        : isCurrent
                        ? 'bg-[#1f141a] border-red-500 ring-4 ring-red-500/30 text-white shadow-2xl'
                        : 'bg-[#18131a] border-red-700/80 hover:border-red-500 text-white shadow-xl'
                    }`}
                  >
                    <Swords className={`w-10 h-10 mb-2 ${isLocked ? 'text-zinc-600' : 'text-red-400'}`} />
                    <span className="text-xs font-mono font-black tracking-wider uppercase text-zinc-200">
                      {isLocked ? 'KHÓA' : 'TRÙM ARC'}
                    </span>
                  </div>

                  <div className="mt-3 text-center bg-[#14161f]/95 px-5 py-2 rounded-2xl border border-zinc-700/80 shadow-lg">
                    <h4 className="text-sm sm:text-base font-black text-white">
                      Trùm: {level.bossName || level.title}
                    </h4>
                    <span className="text-xs font-mono text-amber-300 block font-bold mt-0.5">
                      Đề tổng hợp • Nhận Berries
                    </span>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div key={level.id} className="relative w-full h-24 flex items-center z-10">
              <div
                style={{ left: hOffset }}
                className="absolute -translate-x-1/2 flex flex-col items-center"
              >
                {/* Current Active Indicator Pill */}
                {isCurrent && !isLocked && (
                  <div className="absolute -top-8 px-3 py-1 rounded-full bg-amber-400 text-zinc-950 text-xs font-mono font-black uppercase tracking-wider shadow-lg whitespace-nowrap z-20 animate-pulse">
                    Vị trí hiện tại
                  </div>
                )}

                {/* Sleek Node Button */}
                <button
                  type="button"
                  onClick={() => !isLocked && onOpenLevelPreview(level)}
                  disabled={isLocked}
                  className={`group relative w-18 h-18 sm:w-20 sm:h-20 rounded-3xl border-2 flex flex-col items-center justify-center transition-all duration-150 active:scale-95 shadow-lg ${
                    isLocked
                      ? 'bg-[#101218] border-zinc-850 text-zinc-600 cursor-not-allowed opacity-60'
                      : isCurrent
                      ? 'bg-zinc-800 border-amber-400 ring-4 ring-amber-400/30 text-white shadow-amber-500/20'
                      : 'bg-[#14161f] border-zinc-700 hover:border-amber-400/70 text-zinc-100 hover:bg-[#1c1e2b]'
                  }`}
                >
                  {isLocked ? (
                    <Lock className="w-5 h-5 text-zinc-600" />
                  ) : (
                    <>
                      <div className="transition-transform group-hover:scale-110">
                        {level.gameType === 'picture' ? (
                          <AncientPoneglyphNode className="w-5 h-5" />
                        ) : (
                          <OnePieceTreasureChest className="w-5 h-5" />
                        )}
                      </div>
                      <span className="font-mono text-sm sm:text-base font-black text-white leading-none mt-1">
                        {formattedNum}
                      </span>
                    </>
                  )}
                </button>

                {/* Stars Bar */}
                <div className="mt-2 flex items-center gap-1.5 bg-[#14161f] px-2.5 py-1 rounded-lg border border-zinc-800 shadow-sm">
                  {Array.from({ length: 3 }).map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className={`w-3.5 h-3.5 ${
                        starIdx < level.starsEarned
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-zinc-700'
                      }`}
                    />
                  ))}
                </div>

                {/* Level Title (Compact) */}
                <span className="text-xs font-mono text-zinc-300 font-bold mt-1.5 max-w-[150px] text-center truncate">
                  Ải {level.levelNumber}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
