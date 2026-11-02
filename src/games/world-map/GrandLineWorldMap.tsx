import React, { useState, useEffect } from 'react';
import { GameWorld } from './types';
import { getRealmMeta } from './levelData';
import { MYSTERY_IMAGES } from '../mysterious-picture/mysteryImages';
import { IslandMarker } from './IslandMarker';
import { FloatingLuffyNavigator } from './FloatingLuffyNavigator';
import { Compass, Swords, ArrowRight, Star, ShieldAlert } from 'lucide-react';
import { ISLAND_UNIQUE_BADGES, generateWindingBezierPath } from './onePieceAssets';

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
    name: '1. East Blue',
    shortName: 'Số hữu tỉ',
    description: '',
    color: '#0284c7',
    levels: [],
  };

  const [isAutoPatrol, setIsAutoPatrol] = useState(false);

  // Auto patrol along the 10 islands
  useEffect(() => {
    if (!isAutoPatrol || worlds.length === 0) return;
    const interval = setInterval(() => {
      const currentIdx = worlds.findIndex((w) => w.id === activeWorldId);
      const nextIdx = (currentIdx + 1) % worlds.length;
      onSelectWorld(worlds[nextIdx].id);
    }, 3600);
    return () => clearInterval(interval);
  }, [isAutoPatrol, activeWorldId, worlds, onSelectWorld]);

  const activeIdx = Math.max(0, worlds.findIndex((w) => w.id === activeWorld.id));
  const activeRealm = getRealmMeta(activeWorld.id, activeIdx);
  const activeMysteryImg = MYSTERY_IMAGES[activeIdx % MYSTERY_IMAGES.length] || MYSTERY_IMAGES[0];

  const worldStars = activeWorld.levels ? activeWorld.levels.reduce((acc, l) => acc + l.starsEarned, 0) : 0;
  const maxWorldStars = activeWorld.levels ? activeWorld.levels.length * 3 : 0;

  // Extract coords for 10 islands
  const islandCoords = worlds.map((w, idx) => {
    const cfg = getRealmMeta(w.id, idx);
    return cfg.mapCoords;
  });

  // Generate smooth winding Cubic Bézier SVG curve path
  const windingCurvedPath = generateWindingBezierPath(islandCoords, 1000, 650);

  return (
    <div className="relative w-full flex flex-col gap-6 select-none">
      {/* Full-width Immersive Map Canvas Area */}
      <div className="relative w-full h-[620px] sm:h-[700px] lg:h-[750px] rounded-3xl overflow-hidden border border-zinc-800/90 bg-[#090b11] shadow-2xl">
        {/* Real Canon One Piece Grand Line Map Artwork Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src="/assets/onepiece/op_grand_line_map.png"
            alt="One Piece Grand Line Canon World Map"
            className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-125 saturate-125"
          />
          {/* Nautical dark vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090b11]/95 via-[#090b11]/20 to-[#090b11]/75" />
        </div>

        {/* Decorative Compass & Log Pose Navigation Badge */}
        <div className="absolute top-6 left-7 flex items-center gap-3.5 pointer-events-none z-10 opacity-95 bg-zinc-950/85 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-zinc-800 shadow-xl">
          <Compass className="w-8 h-8 text-amber-400 animate-[spin_60s_linear_infinite] shrink-0" />
          <div>
            <span className="text-sm sm:text-base font-mono tracking-widest text-zinc-100 font-black uppercase drop-shadow block">
              Hải Đồ Đại Hải Trình (Grand Line World Map)
            </span>
            <span className="text-xs sm:text-sm font-mono text-amber-300 font-extrabold block">
              Hải trình 10 Vùng Biển • Tuyến đường Log Pose uốn lượn
            </span>
          </div>
        </div>

        <div className="absolute top-6 right-7 pointer-events-none z-10 opacity-95">
          <span className="text-xs sm:text-sm font-mono text-amber-300 font-black uppercase px-4 py-2.5 rounded-2xl bg-zinc-950/90 border border-amber-500/50 shadow-2xl backdrop-blur-md block">
            Reverse Mountain → Tân Thế Giới New World
          </span>
        </div>

        {/* Calm Belt indicators */}
        <div className="absolute bottom-5 left-7 text-xs sm:text-sm font-mono text-zinc-200 font-bold pointer-events-none drop-shadow-md bg-zinc-950/85 px-4 py-2 rounded-xl border border-zinc-800 backdrop-blur-sm">
          ⚓ Vành Đai Tĩnh Lặng (Calm Belt) • Vùng Trú Ngụ Của Vua Biển Sea Kings
        </div>

        {/* Grand Line Winding Sea Route Curved Vector Lines */}
        <svg
          viewBox="0 0 1000 650"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        >
          {windingCurvedPath && (
            <>
              {/* Layer 1: Ambient Deep Ocean Current Glow */}
              <path
                d={windingCurvedPath}
                fill="none"
                stroke="rgba(245, 158, 11, 0.15)"
                strokeWidth="20"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Layer 2: Main Sea Route Ribbon */}
              <path
                d={windingCurvedPath}
                fill="none"
                stroke="rgba(245, 158, 11, 0.65)"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Layer 3: Dynamic Log Pose Dashed Navigation Stream */}
              <path
                d={windingCurvedPath}
                fill="none"
                stroke="#FEF08A"
                strokeWidth="2.5"
                strokeDasharray="10 8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-80"
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

        {/* Animated Floating Luffy Navigator Sailing the Grand Line */}
        <FloatingLuffyNavigator
          coords={activeRealm.mapCoords}
          islandName={activeWorld.name}
          sagaName={activeRealm.sagaName}
          isAutoPatrol={isAutoPatrol}
          onToggleAutoPatrol={() => setIsAutoPatrol((prev) => !prev)}
        />
      </div>

      {/* Selected Island Deep Dock Info Card */}
      <div className="rounded-3xl bg-[#141624]/95 backdrop-blur-md border border-zinc-800/90 p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row items-center gap-8">
        {/* Island Anime Preview Thumbnail */}
        <div className="relative w-full md:w-80 h-48 sm:h-52 rounded-2xl overflow-hidden border border-zinc-700/80 shrink-0 bg-zinc-900 shadow-xl">
          <img
            src={activeMysteryImg?.imageUrl || '/assets/onepiece/op_01_east_blue.jpg'}
            alt={activeRealm.sagaName}
            className="w-full h-full object-cover saturate-115 filter contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <span className="text-xs sm:text-sm font-mono px-3 py-1 rounded-lg bg-zinc-900/95 border border-zinc-700 text-amber-300 font-black shadow-md">
              Hải Trình {activeIdx + 1}
            </span>
            <span className="text-xs sm:text-sm font-mono text-zinc-100 flex items-center gap-1.5 font-extrabold bg-zinc-900/95 px-3 py-1 rounded-lg border border-zinc-700 shadow-md">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{worldStars}/{maxWorldStars}</span>
            </span>
          </div>
        </div>

        {/* Island Details & Canon Lore */}
        <div className="flex-1 w-full space-y-3.5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs sm:text-sm font-mono px-3 py-1 rounded-lg bg-zinc-800 border border-zinc-700 text-amber-300 font-black">
              {activeRealm.islandCode}
            </span>
            <span className="text-xs sm:text-sm font-mono text-zinc-300 font-bold bg-zinc-900 px-3 py-1 rounded-lg border border-zinc-800">
              {activeWorld.levels ? activeWorld.levels.length : 0} Ải Hải Trình
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-3">
            {ISLAND_UNIQUE_BADGES[activeRealm.islandCode] ? (
              React.createElement(ISLAND_UNIQUE_BADGES[activeRealm.islandCode], { className: 'w-8 h-8 shrink-0' })
            ) : (
              <span className="text-2xl">{activeRealm.themeSymbol}</span>
            )}
            <span>{activeRealm.sagaName}</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-200 font-normal leading-relaxed line-clamp-3">
            <strong className="text-amber-300 font-bold">{activeWorld.shortName}:</strong> {activeWorld.description}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1 text-xs sm:text-sm font-mono">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 font-bold shadow-sm">
              <Swords className="w-4 h-4 text-red-400" />
              <span>Trùm Arc: <strong className="text-white font-extrabold">{activeRealm.bossName}</strong></span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold shadow-sm">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>Truy nã: <strong className="font-extrabold">{activeRealm.bountyReward}</strong></span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="w-full md:w-auto shrink-0 flex flex-col items-center gap-2">
          <button
            type="button"
            onClick={() => onEnterWorldTrail(activeWorld.id)}
            className="w-full md:w-auto px-9 py-4.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 font-black text-base sm:text-lg flex items-center justify-center gap-3 shadow-2xl transition-all active:scale-95 shadow-amber-500/20"
          >
            <span>Cập Bến & Vượt Ải</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <span className="text-xs font-mono text-zinc-400">
            Giương buồm tàu Thousand Sunny
          </span>
        </div>
      </div>
    </div>
  );
};
