import React from 'react';
import { GameWorld } from './types';
import { getRealmMeta } from './levelData';
import { MYSTERY_IMAGES } from '../mysterious-picture/mysteryImages';
import { IslandMarker } from './IslandMarker';
import { Compass, Swords, ArrowRight, Star, ShieldAlert } from 'lucide-react';

interface GrandLineWorldMapProps {
  worlds: GameWorld[];
  activeWorldId: string;
  onSelectWorld: (worldId: string) => void;
  onEnterWorldTrail: (worldId: string) => void;
}

export const GrandLineWorldMap: React.FC<GrandLineWorldMapProps> = ({
  worlds,
  activeWorldId,
  onSelectWorld,
  onEnterWorldTrail,
}) => {
  const activeWorld = worlds.find((w) => w.id === activeWorldId) || worlds[0] || {
    id: 'chuong_1_so_huu_ti',
    worldNumber: 1,
    name: 'Hải Trình 1',
    shortName: 'Số hữu tỉ',
    description: '',
    color: '#0284c7',
    levels: [],
  };

  const activeIdx = Math.max(0, worlds.findIndex((w) => w.id === activeWorld.id));
  const activeRealm = getRealmMeta(activeWorld.id, activeIdx);
  const activeMysteryImg = MYSTERY_IMAGES[activeIdx % MYSTERY_IMAGES.length] || MYSTERY_IMAGES[0];

  const worldStars = activeWorld.levels ? activeWorld.levels.reduce((acc, l) => acc + l.starsEarned, 0) : 0;
  const maxWorldStars = activeWorld.levels ? activeWorld.levels.length * 3 : 0;

  // Path coordinates connecting the 10 islands sequentially
  const linePoints = worlds
    .map((w, idx) => {
      const cfg = getRealmMeta(w.id, idx);
      return `${cfg.mapCoords.x},${cfg.mapCoords.y}`;
    })
    .join(' ');

  return (
    <div className="relative w-full flex flex-col gap-6 select-none">
      {/* Visual Canvas Area */}
      <div className="relative w-full h-[430px] sm:h-[480px] rounded-3xl overflow-hidden border border-zinc-800/90 bg-[#090b11] shadow-2xl">
        {/* Ocean Grid Background & Vignette */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(217, 119, 6, 0.15) 0%, transparent 70%),
              linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '100% 100%, 40px 40px, 40px 40px',
          }}
        />

        {/* Decorative Compass & Log Pose Atmosphere */}
        <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none z-10 opacity-80">
          <Compass className="w-5 h-5 text-amber-400 animate-[spin_60s_linear_infinite]" />
          <span className="text-[11px] font-mono tracking-widest text-zinc-300 font-bold uppercase">
            Hải Đồ Đại Hải Trình (Grand Line Map)
          </span>
        </div>

        <div className="absolute top-4 right-4 pointer-events-none z-10 opacity-70">
          <span className="text-[10px] font-mono text-amber-400 uppercase px-2.5 py-0.5 rounded bg-zinc-900/90 border border-amber-500/30">
            Log Pose Route • 10 Vùng Biển
          </span>
        </div>

        {/* Calm Belt subtle indicators */}
        <div className="absolute bottom-2 left-6 text-[9px] font-mono text-zinc-500 pointer-events-none">
          Vành Đai Tĩnh Lặng (Calm Belt) • Vùng Trú Ngụ Của Vua Biển Sea Kings
        </div>

        {/* Grand Line Sea Route Vector Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
          {linePoints && (
            <>
              <polyline
                points={linePoints}
                fill="none"
                stroke="rgba(245, 158, 11, 0.2)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points={linePoints}
                fill="none"
                stroke="rgba(245, 158, 11, 0.75)"
                strokeWidth="2"
                strokeDasharray="6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </>
          )}
        </svg>

        {/* 10 Island Markers on the Map */}
        {worlds.map((world) => {
          const wStars = world.levels ? world.levels.reduce((acc, l) => acc + l.starsEarned, 0) : 0;
          const maxStars = world.levels ? world.levels.length * 3 : 0;
          const isUnlocked = world.levels ? world.levels.some((l) => l.isUnlocked) : false;
          const isCompleted = wStars === maxStars && maxStars > 0;

          return (
            <IslandMarker
              key={world.id}
              world={world}
              isActive={world.id === activeWorld.id}
              isUnlocked={isUnlocked}
              isCompleted={isCompleted}
              totalWorldStars={wStars}
              maxWorldStars={maxStars}
              onSelect={onSelectWorld}
            />
          );
        })}
      </div>

      {/* Selected Island Deep Dock Info Card */}
      <div className="rounded-3xl bg-[#141624]/95 backdrop-blur-md border border-zinc-800 p-5 sm:p-6 shadow-xl flex flex-col md:flex-row items-center gap-6">
        {/* Island Anime Preview Thumbnail */}
        <div className="relative w-full md:w-56 h-36 rounded-2xl overflow-hidden border border-zinc-700/80 shrink-0 bg-zinc-900 shadow-md">
          <img
            src={activeMysteryImg?.imageUrl || '/assets/onepiece/op_01_east_blue.jpg'}
            alt={activeRealm.sagaName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900/90 border border-zinc-700 text-amber-400 font-bold">
              Hải Trình {activeIdx + 1}
            </span>
            <span className="text-[10px] font-mono text-zinc-300 flex items-center gap-1">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{worldStars}/{maxWorldStars}</span>
            </span>
          </div>
        </div>

        {/* Island Details & Canon Lore */}
        <div className="flex-1 w-full space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-amber-300 font-bold">
              {activeRealm.islandCode}
            </span>
            <span className="text-xs font-mono text-zinc-400">
              {activeWorld.levels ? activeWorld.levels.length : 0} Ải Hải Trình
            </span>
          </div>

          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <span>{activeRealm.themeSymbol}</span>
            <span>{activeRealm.sagaName}</span>
          </h2>

          <p className="text-xs sm:text-sm text-zinc-300 font-medium line-clamp-2">
            {activeWorld.shortName}: {activeWorld.description}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs pt-1 font-mono">
            <div className="flex items-center gap-1 text-red-400">
              <Swords className="w-3.5 h-3.5 text-red-400" />
              <span>Trùm: <strong className="text-white">{activeRealm.bossName}</strong></span>
            </div>
            <div className="flex items-center gap-1 text-amber-400">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
              <span>Tiền thưởng: <strong>{activeRealm.bountyReward}</strong></span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="w-full md:w-auto shrink-0 flex flex-col items-center gap-2">
          <button
            type="button"
            onClick={() => onEnterWorldTrail(activeWorld.id)}
            className="w-full md:w-auto px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95"
          >
            <span>Cập Bến & Vượt Ải</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <span className="text-[10px] font-mono text-zinc-500">
            Giương buồm con tàu Thousand Sunny
          </span>
        </div>
      </div>
    </div>
  );
};
