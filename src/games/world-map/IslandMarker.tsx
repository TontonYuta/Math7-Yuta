import React from 'react';
import { GameWorld } from './types';
import { getRealmMeta } from './levelData';
import { Star, Lock } from 'lucide-react';
import { ISLAND_UNIQUE_BADGES } from './onePieceAssets';

interface IslandMarkerProps {
  world: GameWorld;
  isActive: boolean;
  isUnlocked: boolean;
  isCompleted: boolean;
  totalWorldStars: number;
  maxWorldStars: number;
  onSelect: (worldId: string) => void;
}

export const IslandMarker: React.FC<IslandMarkerProps> = ({
  world,
  isActive,
  isUnlocked,
  isCompleted,
  totalWorldStars,
  onSelect,
}) => {
  const realm = getRealmMeta(world.id, world.worldNumber - 1);
  const { x, y } = realm.mapCoords;
  const BadgeComponent = ISLAND_UNIQUE_BADGES[realm.islandCode];

  return (
    <div
      style={{ left: `${x}%`, top: `${y}%` }}
      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer select-none group z-20 flex flex-col items-center"
      onClick={() => isUnlocked && onSelect(world.id)}
      title={`${world.name} - ${world.shortName}`}
    >
      {/* Island Main Icon Disc */}
      <div
        className={`relative w-11 h-11 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-200 shadow-xl ${
          isActive
            ? 'bg-gradient-to-br from-amber-500/30 via-zinc-900 to-amber-950/60 border-2 border-amber-400 ring-2 sm:ring-4 ring-amber-400/40 shadow-[0_0_25px_rgba(245,158,11,0.6)] scale-105 sm:scale-110'
            : isCompleted
            ? 'bg-gradient-to-br from-emerald-500/20 to-zinc-900 border-2 border-emerald-400/80 group-hover:scale-105'
            : isUnlocked
            ? 'bg-[#151824]/95 border-2 border-zinc-700/80 group-hover:border-amber-400 group-hover:bg-[#1d2235] group-hover:scale-105'
            : 'bg-[#0f1118]/90 border border-zinc-800 opacity-40 grayscale cursor-not-allowed'
        }`}
      >
        {/* Island Canon SVG Badge */}
        {BadgeComponent ? (
          <div className="group-hover:scale-110 transition-transform">
            <BadgeComponent className="w-6 h-6 sm:w-9 sm:h-9" />
          </div>
        ) : (
          <span className="text-base sm:text-2xl filter drop-shadow group-hover:scale-110 transition-transform">
            {realm.themeSymbol}
          </span>
        )}

        {/* Prominent Island Index Number Badge */}
        <span className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg bg-zinc-950 border border-amber-400 text-[10px] sm:text-xs font-mono font-black text-amber-300 flex items-center justify-center shadow-lg">
          {world.worldNumber}
        </span>

        {/* Lock or Star indicator */}
        {!isUnlocked ? (
          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-500 shadow-md">
            <Lock className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
          </div>
        ) : isCompleted ? (
          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-950 border border-emerald-400 flex items-center justify-center text-emerald-400 shadow-md">
            <Star className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-emerald-400 text-emerald-400" />
          </div>
        ) : (
          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 px-1 sm:px-1.5 py-0.5 rounded-full bg-zinc-900/95 border border-amber-500/50 flex items-center gap-0.5 text-[9px] sm:text-xs font-mono text-amber-300 shadow-md font-black">
            <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-400 text-amber-400" />
            <span>{totalWorldStars}</span>
          </div>
        )}
      </div>

      {/* Island Name Banner (High-contrast, Large, Readable, Responsive) */}
      <div className="mt-1.5 sm:mt-2.5 pointer-events-none">
        <div
          className={`px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-lg sm:rounded-xl text-[10px] sm:text-sm font-black tracking-wide shadow-2xl transition-all duration-150 whitespace-nowrap border max-w-[85px] sm:max-w-none truncate ${
            isActive
              ? 'bg-amber-400 border-amber-300 text-zinc-950 shadow-[0_0_18px_rgba(245,158,11,0.6)] scale-105'
              : isCompleted
              ? 'bg-zinc-950/95 border-emerald-500/60 text-emerald-300'
              : isUnlocked
              ? 'bg-zinc-950/95 border-zinc-700/80 text-zinc-100 group-hover:border-amber-400 group-hover:text-amber-300 group-hover:scale-105'
              : 'bg-zinc-950/80 border-zinc-850 text-zinc-500'
          }`}
        >
          {realm.sagaName}
        </div>
      </div>
    </div>
  );
};
