import React, { useState } from 'react';
import { GameWorld, GameLevel } from './types';
import { Trophy, Star, Lock, Play, ArrowLeft, Flame, ShieldAlert, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

interface WorldMapViewProps {
  worlds: GameWorld[];
  currentWorldId: string;
  totalStars: number;
  playerCoins: number;
  onSelectWorld: (worldId: string) => void;
  onSelectLevel: (level: GameLevel) => void;
  onBackToLobby: () => void;
}

export const WorldMapView: React.FC<WorldMapViewProps> = ({
  worlds,
  currentWorldId,
  totalStars,
  playerCoins,
  onSelectWorld,
  onSelectLevel,
  onBackToLobby,
}) => {
  const activeWorld = worlds.find((w) => w.id === currentWorldId) || worlds[0];
  const activeIdx = worlds.findIndex((w) => w.id === activeWorld.id);

  const prevWorld = () => {
    if (activeIdx > 0) onSelectWorld(worlds[activeIdx - 1].id);
  };
  const nextWorld = () => {
    if (activeIdx < worlds.length - 1) onSelectWorld(worlds[activeIdx + 1].id);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col p-3 sm:p-6 select-none">
      <div className="max-w-4xl mx-auto w-full space-y-6">
        {/* Top Header */}
        <header className="flex flex-wrap items-center justify-between gap-4 bg-stone-900/90 border-2 border-amber-600/60 rounded-3xl p-3 sm:p-4 shadow-xl backdrop-blur-md">
          <button
            onClick={onBackToLobby}
            className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-stone-800 hover:bg-stone-700 border border-stone-600 text-stone-200 text-xs sm:text-sm font-black transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>Sảnh Game</span>
          </button>

          <div className="flex items-center gap-4">
            {/* Stars */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-amber-950/70 border border-amber-500/50 text-amber-300 font-bold">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="font-mono text-sm sm:text-base font-black">{totalStars}</span>
            </div>

            {/* Coins */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-yellow-950/70 border border-yellow-500/50 text-yellow-300 font-bold">
              <span>🪙</span>
              <span className="font-mono text-sm sm:text-base font-black">{playerCoins}</span>
            </div>
          </div>
        </header>

        {/* World Navigator Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-amber-900 via-stone-900 to-amber-950 border-4 border-amber-600/70 p-4 sm:p-6 shadow-2xl flex items-center justify-between gap-4">
          <button
            onClick={prevWorld}
            disabled={activeIdx === 0}
            className="p-2 sm:p-3 rounded-2xl bg-stone-800/80 hover:bg-stone-700 disabled:opacity-30 disabled:cursor-not-allowed border border-stone-600 transition-all active:scale-95"
            title="Thế giới trước"
          >
            <ChevronLeft className="w-5 h-5 text-amber-300" />
          </button>

          <div className="text-center space-y-1">
            <span className="text-3xl sm:text-4xl block animate-bounce">
              {activeWorld.themeIcon}
            </span>
            <h1 className="text-xl sm:text-2xl font-black text-amber-200 uppercase tracking-wide">
              {activeWorld.name}
            </h1>
            <p className="text-xs text-stone-300 max-w-md mx-auto line-clamp-2">
              {activeWorld.description}
            </p>
          </div>

          <button
            onClick={nextWorld}
            disabled={activeIdx === worlds.length - 1}
            className="p-2 sm:p-3 rounded-2xl bg-stone-800/80 hover:bg-stone-700 disabled:opacity-30 disabled:cursor-not-allowed border border-stone-600 transition-all active:scale-95"
            title="Thế giới tiếp theo"
          >
            <ChevronRight className="w-5 h-5 text-amber-300" />
          </button>
        </div>

        {/* Levels Path Container */}
        <section className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 px-2">
            <Sparkles className="w-4 h-4" />
            <span>LỘ TRÌNH VƯỢT ẢI CHUYÊN ĐỀ & SĂN BOSS</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {activeWorld.levels.map((level) => {
              const isLocked = !level.isUnlocked;

              if (level.isBoss) {
                // Boss Stage Card
                return (
                  <div
                    key={level.id}
                    onClick={() => !isLocked && onSelectLevel(level)}
                    className={`col-span-1 sm:col-span-2 relative rounded-3xl p-5 border-4 transition-all duration-300 ${
                      isLocked
                        ? 'bg-stone-900/60 border-stone-800 opacity-60 cursor-not-allowed'
                        : 'bg-gradient-to-r from-red-950 via-amber-950 to-stone-900 border-red-500 hover:border-red-400 shadow-2xl hover:scale-[1.01] cursor-pointer'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-4 text-center sm:text-left">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-amber-700 flex items-center justify-center text-3xl shadow-xl border-2 border-red-400 shrink-0 animate-pulse">
                          <span>{level.bossIcon || '👑'}</span>
                        </div>
                        <div>
                          <div className="flex items-center justify-center sm:justify-start gap-2">
                            <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-wider animate-pulse flex items-center gap-1">
                              <Flame className="w-3 h-3" /> MÀN BOSS
                            </span>
                            <span className="text-xs font-bold text-red-300 font-mono">
                              {level.subtitle}
                            </span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-black text-amber-100 mt-1">
                            {level.bossName || level.title}
                          </h3>
                          <p className="text-xs text-stone-300">
                            Đề thi tổng hợp toàn diện kiểm tra bản lĩnh dũng sĩ Toán học!
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        {isLocked ? (
                          <div className="px-5 py-2.5 rounded-xl bg-stone-800 text-stone-500 font-bold flex items-center gap-1.5 text-xs">
                            <Lock className="w-4 h-4" />
                            <span>Khóa</span>
                          </div>
                        ) : (
                          <button
                            type="button"
                            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-black text-sm tracking-wider uppercase shadow-xl flex items-center gap-2 active:scale-95"
                          >
                            <Play className="w-4 h-4 fill-white" />
                            <span>KHIÊU CHIẾN BOSS</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }

              // Regular Topic Level Card
              return (
                <div
                  key={level.id}
                  onClick={() => !isLocked && onSelectLevel(level)}
                  className={`group relative rounded-2xl p-4 border-2 transition-all duration-200 flex flex-col justify-between ${
                    isLocked
                      ? 'bg-stone-900/50 border-stone-800/80 opacity-50 cursor-not-allowed'
                      : 'bg-stone-900 hover:bg-stone-850 border-amber-600/50 hover:border-amber-400 shadow-md hover:-translate-y-0.5 cursor-pointer'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm border ${
                          isLocked
                            ? 'bg-stone-800 text-stone-500 border-stone-700'
                            : 'bg-amber-600/30 text-amber-300 border-amber-500/60 group-hover:scale-105'
                        }`}
                      >
                        {level.levelNumber}
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-stone-100 group-hover:text-amber-200 transition">
                          {level.title}
                        </h4>
                        <p className="text-[11px] text-stone-400 line-clamp-1">
                          {level.subtitle}
                        </p>
                      </div>
                    </div>

                    {isLocked && <Lock className="w-4 h-4 text-stone-600 shrink-0" />}
                  </div>

                  {/* Stars earned & Play */}
                  <div className="mt-3 pt-2.5 border-t border-stone-800/80 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < level.starsEarned
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-stone-700 fill-stone-800'
                          }`}
                        />
                      ))}
                    </div>

                    {!isLocked && (
                      <span className="text-amber-400 font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1 text-[11px]">
                        <span>Vào ải</span>
                        <span>→</span>
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
