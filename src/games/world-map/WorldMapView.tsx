import React, { useState } from 'react';
import { GameWorld, GameLevel } from './types';
import { CandySagaRoad } from './CandySagaRoad';
import { GrandLineWorldMap } from './GrandLineWorldMap';
import { LevelDetailModal } from './LevelDetailModal';
import { Star, ArrowLeft, ChevronLeft, ChevronRight, BarChart3, Coins, Layers, Map as MapIcon, Route } from 'lucide-react';

interface WorldMapViewProps {
  worlds: GameWorld[];
  currentWorldId: string;
  totalStars: number;
  playerCoins: number;
  onSelectWorld: (worldId: string) => void;
  onSelectLevel: (level: GameLevel) => void;
  onBackToLobby: () => void;
  onOpenDashboard: () => void;
  onOpenTopicSelect: () => void;
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
  onOpenTopicSelect,
}) => {
  const [selectedPreviewLevel, setSelectedPreviewLevel] = useState<GameLevel | null>(null);
  const [viewMode, setViewMode] = useState<'grand-map' | 'island-trail'>('grand-map');

  const activeWorld = worlds.find((w) => w.id === currentWorldId) || worlds[0];
  const activeIdx = worlds.findIndex((w) => w.id === activeWorld.id);
  const formattedChapNum = (activeIdx + 1).toString().padStart(2, '0');

  const prevWorld = () => {
    if (activeIdx > 0) onSelectWorld(worlds[activeIdx - 1].id);
  };
  const nextWorld = () => {
    if (activeIdx < worlds.length - 1) onSelectWorld(worlds[activeIdx + 1].id);
  };

  return (
    <div className="min-h-screen bg-transparent text-zinc-100 p-4 sm:p-6 lg:p-10 select-none flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full space-y-8">
        {/* Top Navigation Header */}
        <header className="flex flex-wrap items-center justify-between gap-4 bg-[#14161f]/95 backdrop-blur-md border border-zinc-800/90 rounded-3xl px-6 py-4 shadow-xl">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToLobby}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-zinc-800/90 hover:bg-zinc-700 text-zinc-100 text-sm font-bold transition-all active:scale-95 border border-zinc-700/80 shadow-sm"
              title="Về sảnh chính"
            >
              <ArrowLeft className="w-4 h-4 text-zinc-300" />
              <span>Sảnh</span>
            </button>

            <button
              onClick={onOpenTopicSelect}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-zinc-800/90 hover:bg-zinc-700 text-zinc-100 text-sm font-bold transition-all active:scale-95 border border-zinc-700/80 shadow-sm"
              title="Danh sách 10 chuyên đề"
            >
              <Layers className="w-4 h-4 text-amber-400" />
              <span>10 Chuyên Đề</span>
            </button>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center bg-zinc-900/95 p-1.5 rounded-2xl border border-zinc-800 shadow-inner">
            <button
              type="button"
              onClick={() => setViewMode('grand-map')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                viewMode === 'grand-map'
                  ? 'bg-amber-400 text-zinc-950 shadow-md font-black'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <MapIcon className="w-4 h-4" />
              <span>Hải Đồ Thế Giới</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('island-trail')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                viewMode === 'island-trail'
                  ? 'bg-amber-400 text-zinc-950 shadow-md font-black'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Route className="w-4 h-4" />
              <span>Chi Tiết Ải Đảo</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDashboard}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-zinc-800/90 hover:bg-zinc-700 text-zinc-100 text-sm font-bold transition-all active:scale-95 border border-zinc-700/80 shadow-sm"
              title="Kho báu và bộ sưu tập tranh"
            >
              <BarChart3 className="w-4 h-4 text-amber-400" />
              <span>Kho Báu & Tranh</span>
            </button>

            <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-zinc-850 border border-zinc-700 text-amber-400 font-mono text-sm font-extrabold shadow-inner">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{totalStars}</span>
            </div>

            <div className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-sm font-extrabold shadow-inner">
              <span className="text-base font-black text-amber-400">฿</span>
              <span>{playerCoins.toLocaleString()}</span>
            </div>
          </div>
        </header>

        {/* View Mode 1: Interactive One Piece Grand Line Map */}
        {viewMode === 'grand-map' && (
          <GrandLineWorldMap
            worlds={worlds}
            activeWorldId={currentWorldId}
            onSelectWorld={onSelectWorld}
            onEnterWorldTrail={(wId) => {
              onSelectWorld(wId);
              setViewMode('island-trail');
            }}
          />
        )}

        {/* View Mode 2: Island Trail (Candy Saga Style) */}
        {viewMode === 'island-trail' && (
          <div className="space-y-8">
            {/* Chapter Navigator Banner */}
            <div className="rounded-3xl bg-[#14161f]/95 border border-zinc-800/90 p-6 sm:p-8 flex items-center justify-between gap-6 shadow-2xl backdrop-blur-md">
              <button
                onClick={prevWorld}
                disabled={activeIdx === 0}
                className="p-3.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed border border-zinc-700 text-zinc-200 transition-all active:scale-95 shadow-md"
                title="Hòn đảo trước"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 text-amber-300 font-mono text-xs sm:text-sm font-bold border border-amber-400/30">
                  <span>HẢI TRÌNH {formattedChapNum} / {worlds.length.toString().padStart(2, '0')}</span>
                </div>
                <h1 className="text-xl sm:text-3xl font-black text-white tracking-tight">
                  {activeWorld.name}
                </h1>
                <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto line-clamp-2 leading-relaxed">
                  {activeWorld.description}
                </p>
              </div>

              <button
                onClick={nextWorld}
                disabled={activeIdx === worlds.length - 1}
                className="p-3.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed border border-zinc-700 text-zinc-200 transition-all active:scale-95 shadow-md"
                title="Hòn đảo tiếp theo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Roadmap Nodes Sequence */}
            <section className="bg-[#14161f]/95 border border-zinc-800/90 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
              <CandySagaRoad
                levels={activeWorld.levels}
                onOpenLevelPreview={(lvl) => setSelectedPreviewLevel(lvl)}
              />
            </section>
          </div>
        )}
      </div>

      {/* Level Detail Modal */}
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

      <footer className="text-center py-6 text-xs sm:text-sm text-zinc-400 font-mono">
        Hệ thống Đại Hải Trình One Piece Toán 7 • Chinh phục kho báu tri thức
      </footer>
    </div>
  );
};
