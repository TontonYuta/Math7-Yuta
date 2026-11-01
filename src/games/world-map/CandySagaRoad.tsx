import React from 'react';
import { GameLevel } from './types';
import { Star, Lock, Swords, Flame, Sparkles } from 'lucide-react';

interface CandySagaRoadProps {
  levels: GameLevel[];
  onOpenLevelPreview: (level: GameLevel) => void;
}

export const CandySagaRoad: React.FC<CandySagaRoadProps> = ({
  levels,
  onOpenLevelPreview,
}) => {
  // Candy Crush horizontal winding positions (percentages from left)
  // Alternating wave: 25% -> 50% -> 75% -> 50% -> ...
  const getHorizontalOffset = (index: number, total: number, isBoss: boolean) => {
    if (isBoss) return '50%';
    const pattern = [25, 50, 75, 50];
    return `${pattern[index % pattern.length]}%`;
  };

  // Find current active level (the first unlocked level that hasn't earned 3 stars, or the highest unlocked level)
  const currentLevel = levels.find((l) => l.isUnlocked && l.starsEarned < 3) ||
    [...levels].reverse().find((l) => l.isUnlocked) ||
    levels[0];

  return (
    <div className="relative w-full max-w-xl mx-auto py-8 px-4 flex flex-col items-center">
      {/* Background Candy Winding Dashed Trail */}
      <div className="absolute inset-y-12 left-1/2 -translate-x-1/2 w-4 bg-gradient-to-b from-amber-600/30 via-yellow-500/20 to-red-600/30 rounded-full border border-dashed border-amber-500/40 pointer-events-none" />

      {/* Levels list rendered vertically */}
      <div className="relative w-full flex flex-col-reverse gap-10">
        {levels.map((level, idx) => {
          const isBoss = !!level.isBoss;
          const isLocked = !level.isUnlocked;
          const isCurrent = level.id === currentLevel.id;
          const hOffset = getHorizontalOffset(idx, levels.length, isBoss);

          if (isBoss) {
            // Candy Crush Boss Fortress Portal
            return (
              <div
                key={level.id}
                className="w-full flex justify-center pt-4 z-10"
              >
                <div
                  onClick={() => !isLocked && onOpenLevelPreview(level)}
                  className={`group relative flex flex-col items-center cursor-pointer transition-transform ${
                    isLocked ? 'opacity-60 cursor-not-allowed' : 'hover:scale-105 active:scale-95'
                  }`}
                >
                  {/* Boss Flaming Aura */}
                  {!isLocked && (
                    <div className="absolute -inset-4 bg-gradient-to-r from-red-600/40 to-amber-600/40 rounded-full blur-xl animate-pulse pointer-events-none" />
                  )}

                  {/* Boss Castle / Portal Button */}
                  <div
                    className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl border-4 flex flex-col items-center justify-center shadow-2xl transition-all ${
                      isLocked
                        ? 'bg-stone-850 border-stone-700 text-stone-500 shadow-[0_8px_0_#292524]'
                        : 'bg-gradient-to-br from-red-600 via-rose-700 to-amber-700 border-yellow-400 text-white shadow-[0_10px_0_#7f1d1d]'
                    }`}
                  >
                    <div className="text-4xl sm:text-5xl drop-shadow-md">
                      {isLocked ? '🔒' : '👑'}
                    </div>

                    <span className="text-[10px] sm:text-xs font-black tracking-wider uppercase text-yellow-300 mt-1">
                      {isLocked ? 'ĐÃ KHÓA' : 'TRÙM CUỐI'}
                    </span>
                  </div>

                  {/* Boss Label & Details */}
                  <div className="mt-2 text-center bg-stone-900/90 px-4 py-1.5 rounded-2xl border border-red-500/50 shadow-md">
                    <h4 className="text-xs sm:text-sm font-black text-amber-200">
                      {level.bossName || level.title}
                    </h4>
                    <p className="text-[10px] text-stone-400">Đề thi kiểm tra toàn diện</p>
                  </div>
                </div>
              </div>
            );
          }

          // Regular Candy Node
          return (
            <div
              key={level.id}
              className="relative w-full h-24 flex items-center z-10"
            >
              <div
                style={{ left: hOffset }}
                className="absolute -translate-x-1/2 flex flex-col items-center"
              >
                {/* Bouncing Mascot Indicator for Current Level */}
                {isCurrent && !isLocked && (
                  <div className="absolute -top-11 flex flex-col items-center animate-bounce z-20">
                    <span className="text-2xl filter drop-shadow">🐿️</span>
                    <span className="px-2 py-0.5 rounded-full bg-amber-400 text-stone-950 text-[10px] font-black uppercase tracking-wider shadow-md">
                      BẠN Ở ĐÂY
                    </span>
                  </div>
                )}

                {/* Candy Crush 3D Glossy Node */}
                <button
                  type="button"
                  onClick={() => !isLocked && onOpenLevelPreview(level)}
                  disabled={isLocked}
                  className={`group relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 flex items-center justify-center transition-all duration-150 active:scale-95 ${
                    isLocked
                      ? 'bg-gradient-to-b from-stone-700 to-stone-850 border-stone-600 text-stone-500 shadow-[0_6px_0_#292524] cursor-not-allowed opacity-65'
                      : isCurrent
                      ? 'bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 border-yellow-200 text-stone-950 font-black shadow-[0_8px_0_#92400e] ring-4 ring-amber-400/50 scale-105'
                      : 'bg-gradient-to-b from-amber-500 to-amber-700 border-amber-300 text-white font-black shadow-[0_6px_0_#78350f] hover:scale-105'
                  }`}
                >
                  {/* Gloss highlight crescent */}
                  <div className="absolute top-1 left-2 right-2 h-4 sm:h-5 bg-white/35 rounded-full pointer-events-none" />

                  {isLocked ? (
                    <Lock className="w-6 h-6 text-stone-400" />
                  ) : (
                    <div className="flex flex-col items-center">
                      <span className="text-xs">{level.gameType === 'picture' ? '🖼️' : '🐿️'}</span>
                      <span className="text-sm sm:text-base font-black drop-shadow-sm leading-none mt-0.5">
                        {level.levelNumber}
                      </span>
                    </div>
                  )}
                </button>

                {/* Candy Stars Pedestal */}
                <div className="mt-1.5 flex items-center gap-1 bg-stone-900/85 px-2 py-0.5 rounded-full border border-stone-700/80 shadow">
                  {Array.from({ length: 3 }).map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className={`w-3.5 h-3.5 ${
                        starIdx < level.starsEarned
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-stone-700 fill-stone-800'
                      }`}
                    />
                  ))}
                </div>

                {/* Level Title Snippet */}
                <span className="text-[11px] font-bold text-stone-300 mt-1 max-w-[120px] text-center truncate group-hover:text-amber-300">
                  {level.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
