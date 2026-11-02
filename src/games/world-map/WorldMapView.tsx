import React, { useState } from 'react';
import { GameWorld, GameLevel } from './types';
import { CandySagaRoad } from './CandySagaRoad';
import { ShinobiGrandLineMap } from './ShinobiGrandLineMap';
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
    <div className="min-h-screen bg-transparent text-zinc-100 p-4 sm:p-8 select-none flex flex-col justify-between">
      <div className="max-w-5xl mx-auto w-full space-y-6">
        {/* Top Navigation Header */}
        <header className="flex flex-wrap items-center justify-between gap-4 bg-[#14161f] border border-zinc-800/80 rounded-2xl px-5 py-3.5 shadow-lg">
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToLobby}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-800/90 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-all active:scale-95 border border-zinc-700/80"
              title="Về sảnh chính"
            >
              <ArrowLeft className="w-4 h-4 text-zinc-400" />
              <span>Sảnh</span>
            </button>

            <button
              onClick={onOpenTopicSelect}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-800/90 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-all active:scale-95 border border-zinc-700/80"
              title="Danh sách 10 chuyên đề"
            >
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>10 Chuyên Đề</span>
            </button>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center bg-zinc-900/90 p-1 rounded-xl border border-zinc-800">
            <button
              type="button"
              onClick={() => setViewMode('grand-map')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'grand-map'
                  ? 'bg-amber-400 text-zinc-950 shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <MapIcon className="w-3.5 h-3.5" />
              <span>Hải Đồ Thế Giới</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('island-trail')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'island-trail'
                  ? 'bg-amber-400 text-zinc-950 shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Route className="w-3.5 h-3.5" />
              <span>Chi Tiết Ải Đảo</span>
            </button>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenDashboard}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-800/90 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-all active:scale-95 border border-zinc-700/80"
              title="Bảng thống kê và bộ sưu tập tranh"
            >
              <BarChart3 className="w-3.5 h-3.5 text-zinc-400" />
              <span>Hồ sơ & Tranh</span>
            </button>

            <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-850 border border-zinc-700 text-amber-400 font-mono text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{totalStars}</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-850 border border-zinc-700 text-zinc-200 font-mono text-xs font-bold">
              <Coins className="w-3.5 h-3.5 text-yellow-400" />
              <span>{playerCoins}</span>
            </div>
          </div>
        </header>

        {/* View Mode 1: Interactive Shinobi Grand Line Map */}
        {viewMode === 'grand-map' && (
          <ShinobiGrandLineMap
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
          <div className="space-y-6">
            {/* Chapter Navigator Banner */}
            <div className="rounded-2xl bg-[#14161f] border border-zinc-800 p-5 sm:p-6 flex items-center justify-between gap-4 shadow-xl">
              <button
                onClick={prevWorld}
                disabled={activeIdx === 0}
                className="p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed border border-zinc-700 text-zinc-300 transition-all active:scale-95"
                title="Hòn đảo trước"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="text-center space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-zinc-800 text-zinc-400 font-mono text-[11px] border border-zinc-700">
                  <span>HẢI TRÌNH {formattedChapNum} / {worlds.length.toString().padStart(2, '0')}</span>
                </div>
                <h1 className="text-base sm:text-xl font-bold text-white tracking-tight">
                  {activeWorld.name}
                </h1>
                <p className="text-xs text-zinc-400 max-w-lg mx-auto line-clamp-2">
                  {activeWorld.description}
                </p>
              </div>

              <button
                onClick={nextWorld}
                disabled={activeIdx === worlds.length - 1}
                className="p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed border border-zinc-700 text-zinc-300 transition-all active:scale-95"
                title="Hòn đảo tiếp theo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Roadmap Nodes Sequence */}
            <section className="bg-[#14161f] border border-zinc-800 rounded-2xl p-4 sm:p-8 shadow-xl">
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

      <footer className="text-center py-4 text-xs text-zinc-600 font-mono">
        Hệ thống Đại Hải Trình x Nhẫn Giới Toán 7 GDPT 2018
      </footer>
    </div>
  );
};
