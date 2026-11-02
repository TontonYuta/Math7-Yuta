import React from 'react';
import { GameWorld } from './types';
import { ANIME_REALMS_CONFIG } from './levelData';
import { Star, Lock, Anchor, Flame, Skull } from 'lucide-react';

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
  maxWorldStars,
  onSelect,
}) => {
  const realm = ANIME_REALMS_CONFIG[world.id] || {
    realmName: world.shortName,
    themeSymbol: '🏝️',
    mapCoords: { x: 50, y: 50 },
    bossName: 'Boss',
    bossIcon: '👑',
  };

  const { x, y } = realm.mapCoords;

  return (
    <div
      style={{ left: `${x}%`, top: `${y}%` }}
      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer select-none group z-20"
      onClick={() => isUnlocked && onSelect(world.id)}
      title={`${world.name} - ${world.shortName}`}
    >
      {/* Ship / Active Beacon Anchor */}
      {isActive && (
        <div className="absolute -top-9 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-30 pointer-events-none">
          <div className="px-2 py-0.5 rounded-full bg-amber-400 text-zinc-950 text-[10px] font-mono font-black shadow-lg flex items-center gap-1 uppercase tracking-wider whitespace-nowrap">
            <Anchor className="w-3 h-3 text-zinc-950" />
            <span>Thuyền Cập Bến</span>
          </div>
          <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-amber-400" />
        </div>
      )}

      {/* Island Disc */}
      <div
        className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-200 ${
          isActive
            ? 'bg-gradient-to-br from-amber-500/20 to-zinc-900 border-2 border-amber-400 ring-4 ring-amber-400/20 shadow-[0_0_20px_rgba(245,158,11,0.4)] scale-110'
            : isCompleted
            ? 'bg-gradient-to-br from-emerald-500/10 to-zinc-900 border-2 border-emerald-500/80 shadow-md group-hover:scale-105'
            : isUnlocked
            ? 'bg-[#151824] border border-zinc-700 group-hover:border-amber-400/70 group-hover:bg-[#1c2030] group-hover:scale-105 shadow-md'
            : 'bg-[#10121a]/90 border border-zinc-850 opacity-40 grayscale cursor-not-allowed'
        }`}
      >
        {/* Island Icon / Symbol */}
        <span className="text-xl sm:text-2xl filter drop-shadow-sm group-hover:scale-110 transition-transform">
          {realm.themeSymbol}
        </span>

        {/* Level badge count */}
        <span className="absolute -bottom-2 -left-1 px-1.5 py-0.2 rounded bg-zinc-900 border border-zinc-700 text-[10px] font-mono text-zinc-300 font-bold">
          {world.worldNumber}
        </span>

        {/* Lock or Star indicator */}
        {!isUnlocked ? (
          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-zinc-900/90 border border-zinc-800 flex items-center justify-center text-zinc-500">
            <Lock className="w-2.5 h-2.5" />
          </div>
        ) : isCompleted ? (
          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center text-emerald-400">
            <Star className="w-2.5 h-2.5 fill-emerald-400 text-emerald-400" />
          </div>
        ) : (
          <div className="absolute -top-1 -right-1 px-1 rounded-full bg-zinc-900 border border-zinc-700 flex items-center gap-0.5 text-[9px] font-mono text-amber-400">
            <Star className="w-2 h-2 fill-amber-400 text-amber-400" />
            <span>{totalWorldStars}</span>
          </div>
        )}
      </div>

      {/* Floating Island Label */}
      <div className="mt-1 flex flex-col items-center pointer-events-none">
        <div
          className={`px-2 py-0.5 rounded-lg border text-[10px] font-semibold tracking-tight shadow-md transition-colors whitespace-nowrap max-w-[130px] truncate ${
            isActive
              ? 'bg-zinc-900 border-amber-400 text-amber-300'
              : 'bg-zinc-950/80 border-zinc-800 text-zinc-300 group-hover:text-white'
          }`}
        >
          {realm.realmName}
        </div>
      </div>
    </div>
  );
};
