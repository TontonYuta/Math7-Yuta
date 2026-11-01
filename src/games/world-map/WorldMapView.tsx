import React, { useState } from 'react';
import { GameWorld, GameLevel } from './types';
import { CandySagaRoad } from './CandySagaRoad';
import { LevelDetailModal } from './LevelDetailModal';
import { Star, ArrowLeft, ChevronLeft, ChevronRight, Compass, BarChart3 } from 'lucide-react';

interface WorldMapViewProps {
  worlds: GameWorld[];
  currentWorldId: string;
  totalStars: number;
  playerCoins: number;
  onSelectWorld: (worldId: string) => void;
  onSelectLevel: (level: GameLevel) => void;
  onBackToLobby: () => void;
  onOpenDashboard: () => void;
}

export const WorldMapView: React.FC<WorldMapViewProps> = ({
  worlds,
  currentWorldId,
  totalStars,
  playerCoins,
  onSelectWorld,
  onSelectLevel,
  onBackToLobby,
  onOpenDashboard,
}) => {
  const [selectedPreviewLevel, setSelectedPreviewLevel] = useState<GameLevel | null>(null);

  const activeWorld = worlds.find((w) => w.id === currentWorldId) || worlds[0];
  const activeIdx = worlds.findIndex((w) => w.id === activeWorld.id);

  const prevWorld = () => {
    if (activeIdx > 0) onSelectWorld(worlds[activeIdx - 1].id);
  };
  const nextWorld = () => {
    if (activeIdx < worlds.length - 1) onSelectWorld(worlds[activeIdx + 1].id);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col p-3 sm:p-6 select-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,53,15,0.25),rgba(255,255,255,0))]">
      <div className="max-w-4xl mx-auto w-full space-y-6">
        {/* Top Candy Saga Bar */}
        <header className="flex flex-wrap items-center justify-between gap-4 bg-stone-900/90 border-2 border-amber-600/60 rounded-3xl p-3 sm:p-4 shadow-xl backdrop-blur-md">
          <button
            onClick={onBackToLobby}
            className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-stone-800 hover:bg-stone-700 border border-stone-600 text-stone-200 text-xs sm:text-sm font-black transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>Sảnh Game</span>
          </button>

          <div className="flex items-center gap-3">
            {/* Dashboard & Gallery Shortcut */}
            <button
              onClick={onOpenDashboard}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-amber-600/30 hover:bg-amber-600/50 border border-amber-500/60 text-amber-200 text-xs sm:text-sm font-black transition-all active:scale-95 shadow"
              title="Bảng Thống Kê & Bộ Sưu Tập Tranh"
            >
              <BarChart3 className="w-4 h-4 text-amber-300" />
              <span>Thống Kê & Tranh</span>
            </button>

            {/* Stars */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-amber-950/80 border border-amber-500/60 text-amber-300 font-bold shadow-inner">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="font-mono text-sm sm:text-base font-black">{totalStars}</span>
            </div>

            {/* Coins */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-yellow-950/80 border border-yellow-500/60 text-yellow-300 font-bold shadow-inner">
              <span className="text-sm sm:text-base">🪙</span>
              <span className="font-mono text-sm sm:text-base font-black">{playerCoins}</span>
            </div>
          </div>
        </header>

        {/* Candy Crush World / Episode Navigator */}
        <div className="relative rounded-3xl bg-gradient-to-r from-amber-950 via-stone-900 to-amber-900 border-4 border-amber-600/70 p-5 sm:p-7 shadow-2xl flex items-center justify-between gap-4">
          <button
            onClick={prevWorld}
            disabled={activeIdx === 0}
            className="p-3 rounded-2xl bg-stone-800/90 hover:bg-stone-700 disabled:opacity-30 disabled:cursor-not-allowed border border-stone-600 transition-all active:scale-95 shadow-lg"
            title="Thế giới trước"
          >
            <ChevronLeft className="w-6 h-6 text-amber-300" />
          </button>

          <div className="text-center space-y-1.5">
            <span className="text-4xl sm:text-5xl block animate-bounce filter drop-shadow">
              {activeWorld.themeIcon}
            </span>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/40">
              <Compass className="w-3.5 h-3.5" />
              <span>CHƯƠNG {activeIdx + 1} / {worlds.length}</span>
            </div>
            <h1 className="text-xl sm:text-3xl font-black text-amber-100 uppercase tracking-wide">
              {activeWorld.name}
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 max-w-lg mx-auto line-clamp-2">
              {activeWorld.description}
            </p>
          </div>

          <button
            onClick={nextWorld}
            disabled={activeIdx === worlds.length - 1}
            className="p-3 rounded-2xl bg-stone-800/90 hover:bg-stone-700 disabled:opacity-30 disabled:cursor-not-allowed border border-stone-600 transition-all active:scale-95 shadow-lg"
            title="Thế giới tiếp theo"
          >
            <ChevronRight className="w-6 h-6 text-amber-300" />
          </button>
        </div>

        {/* Candy Crush Saga Winding Adventure Road */}
        <section className="bg-stone-900/60 border-2 border-amber-600/40 rounded-3xl p-4 sm:p-8 backdrop-blur-sm shadow-2xl">
          <CandySagaRoad
            levels={activeWorld.levels}
            onOpenLevelPreview={(lvl) => setSelectedPreviewLevel(lvl)}
          />
        </section>
      </div>

      {/* Candy Crush Level Goal & Launch Preview Modal */}
      {selectedPreviewLevel && (
        <LevelDetailModal
          level={selectedPreviewLevel}
          worldName={activeWorld.name}
          onClose={() => setSelectedPreviewLevel(null)}
          onStartLevel={(lvl) => {
            setSelectedPreviewLevel(null);
            onSelectLevel(lvl);
          }}
        />
      )}
    </div>
  );
};
