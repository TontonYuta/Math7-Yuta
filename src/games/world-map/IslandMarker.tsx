import React from 'react';
import { GameWorld } from './types';
import { getRealmMeta } from './levelData';
import { Star, Lock, Anchor } from 'lucide-react';
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
      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer select-none group z-20"
      onClick={() => isUnlocked && onSelect(world.id)}
      title={`${world.name} - ${world.shortName}`}
    >
      {/* Ship / Active Beacon Anchor */}
      {isActive && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-30 pointer-events-none">
          <div className="px-2.5 py-1 rounded-full bg-amber-400 text-zinc-950 text-xs font-mono font-black shadow-xl flex items-center gap-1.5 uppercase tracking-wider whitespace-nowrap">
            <Anchor className="w-3.5 h-3.5 text-zinc-950" />
            <span>Thuyền Cập Bến</span>
          </div>
          <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-amber-400" />
        </div>
      )}

      {/* Island Disc */}
      <div
        className={`relative w-13 h-13 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-200 ${
          isActive
            ? 'bg-gradient-to-br from-amber-500/25 to-zinc-900 border-2 border-amber-400 ring-4 ring-amber-400/30 shadow-[0_0_25px_rgba(245,158,11,0.5)] scale-110'
            : isCompleted
            ? 'bg-gradient-to-br from-emerald-500/15 to-zinc-900 border-2 border-emerald-500/80 shadow-md group-hover:scale-105'
            : isUnlocked
            ? 'bg-[#151824]/90 border border-zinc-700 group-hover:border-amber-400/80 group-hover:bg-[#1c2030] group-hover:scale-105 shadow-lg'
            : 'bg-[#10121a]/90 border border-zinc-850 opacity-40 grayscale cursor-not-allowed'
        }`}
      >
        {/* Island Icon / Unique Canon Badge */}
        {BadgeComponent ? (
          <div className="group-hover:scale-110 transition-transform">
            <BadgeComponent className="w-8 h-8 sm:w-9 sm:h-9" />
          </div>
        ) : (
          <span className="text-xl sm:text-2xl filter drop-shadow-sm group-hover:scale-110 transition-transform">
            {realm.themeSymbol}
          </span>
        )}

        {/* Level badge count */}
        <span className="absolute -bottom-2 -left-1 px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-700 text-xs font-mono text-zinc-200 font-extrabold shadow">
          {world.worldNumber}
        </span>

        {/* Lock or Star indicator */}
        {!isUnlocked ? (
          <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-zinc-900/90 border border-zinc-700 flex items-center justify-center text-zinc-500 shadow">
            <Lock className="w-3 h-3" />
          </div>
        ) : isCompleted ? (
          <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center text-emerald-400 shadow">
            <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
          </div>
        ) : (
          <div className="absolute -top-1.5 -right-1.5 px-1.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-700 flex items-center gap-0.5 text-xs font-mono text-amber-400 shadow font-bold">
            <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
            <span>{totalWorldStars}</span>
          </div>
        )}
      </div>

      {/* Floating Island Label (Compact) */}
      <div className="mt-1.5 flex flex-col items-center pointer-events-none">
        <div
          className={`px-2.5 py-1 rounded-lg border text-xs font-mono font-bold tracking-tight shadow-md transition-colors whitespace-nowrap max-w-[130px] truncate ${
            isActive
              ? 'bg-zinc-900/95 border-amber-400 text-amber-300 shadow-amber-500/20'
              : 'bg-zinc-950/90 border-zinc-800 text-zinc-200 group-hover:text-white group-hover:border-zinc-700'
          }`}
        >
          {realm.sagaName}
        </div>
      </div>
    </div>
  );
};
