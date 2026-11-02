import React from 'react';
import { GameWorld } from './types';
import { Star, ArrowLeft, Play, Lock, CheckCircle2, Trophy, BarChart3, Compass } from 'lucide-react';

interface TopicSelectionViewProps {
  worlds: GameWorld[];
  totalStars: number;
  playerCoins: number;
  onSelectTopic: (worldId: string) => void;
  onBackToLobby: () => void;
  onOpenDashboard: () => void;
}

export const TopicSelectionView: React.FC<TopicSelectionViewProps> = ({
  worlds,
  totalStars,
  playerCoins,
  onSelectTopic,
  onBackToLobby,
  onOpenDashboard,
}) => {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col p-3 sm:p-6 select-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(180,83,9,0.2),rgba(0,0,0,0))]">
      <div className="max-w-5xl mx-auto w-full space-y-6">
        {/* Top Header */}
        <header className="flex flex-wrap items-center justify-between gap-4 bg-stone-900/90 border-2 border-amber-600/60 rounded-3xl p-3 sm:p-4 shadow-xl backdrop-blur-md">
          <button
            onClick={onBackToLobby}
            className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-stone-800 hover:bg-stone-700 border border-stone-600 text-stone-200 text-xs sm:text-sm font-black transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>Sảnh Game</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDashboard}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-amber-600/30 hover:bg-amber-600/50 border border-amber-500/60 text-amber-200 text-xs sm:text-sm font-black transition-all active:scale-95 shadow"
            >
              <BarChart3 className="w-4 h-4 text-amber-300" />
              <span>Thống Kê & Tranh</span>
            </button>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-amber-950/80 border border-amber-500/60 text-amber-300 font-bold shadow-inner">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="font-mono text-sm sm:text-base font-black">{totalStars}</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-yellow-950/80 border border-yellow-500/60 text-yellow-300 font-bold shadow-inner">
              <span className="text-sm sm:text-base">🪙</span>
              <span className="font-mono text-sm sm:text-base font-black">{playerCoins}</span>
            </div>
          </div>
        </header>

        {/* Banner Title */}
        <div className="relative rounded-3xl bg-gradient-to-r from-amber-950 via-stone-900 to-amber-900 border-4 border-amber-600/70 p-5 sm:p-7 shadow-2xl text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/40 uppercase">
            <Compass className="w-4 h-4" />
            <span>BẢN ĐỒ 10 CHUYÊN ĐỀ TOÁN 7</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-amber-100 tracking-wide uppercase drop-shadow">
            CHỌN CHUYÊN ĐỀ ĐỂ BẮT ĐẦU VƯỢT ẢI
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto">
            Mỗi chuyên đề kết hợp mảnh ghép số học, mê cung toán đố và màn trùm tổng hợp.
          </p>
        </div>

        {/* 10 Topics Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {worlds.map((world, idx) => {
            const worldStars = world.levels.reduce((acc, l) => acc + l.starsEarned, 0);
            const maxWorldStars = world.levels.length * 3;
            const isUnlocked = world.levels.some((l) => l.isUnlocked);
            const isCompleted = worldStars === maxWorldStars && maxWorldStars > 0;

            return (
              <div
                key={world.id}
                onClick={() => isUnlocked && onSelectTopic(world.id)}
                className={`group relative rounded-3xl p-5 border-2 transition-all duration-200 flex flex-col justify-between ${
                  isUnlocked
                    ? 'bg-gradient-to-br from-stone-900 via-stone-850 to-stone-900 border-amber-500/60 hover:border-amber-400 shadow-xl hover:-translate-y-1 cursor-pointer hover:shadow-[0_0_25px_rgba(245,158,11,0.25)]'
                    : 'bg-stone-900/50 border-stone-800 opacity-60 cursor-not-allowed'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border-2 border-amber-400/50 flex items-center justify-center text-3xl shadow group-hover:scale-105 transition-transform">
                        {world.themeIcon}
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                          Chuyên đề {idx + 1}
                        </span>
                        <h3 className="text-base sm:text-lg font-black text-amber-100 group-hover:text-amber-200 transition">
                          {world.shortName}
                        </h3>
                      </div>
                    </div>

                    {isUnlocked ? (
                      <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/40 flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                        <span>{worldStars}/{maxWorldStars}</span>
                      </span>
                    ) : (
                      <Lock className="w-5 h-5 text-stone-600" />
                    )}
                  </div>

                  <p className="text-xs text-stone-300 line-clamp-2">
                    {world.description}
                  </p>

                  <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-stone-400">
                    <span className="px-2.5 py-1 rounded-lg bg-stone-800 border border-stone-700">
                      {world.levels.length} ải thử thách
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-stone-800 border border-stone-700">
                      Mảnh ghép • Mê cung • Trùm Boss
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-400">
                    {isCompleted ? 'Đã hoàn thành' : isUnlocked ? 'Đang thám hiểm' : 'Chưa mở khóa'}
                  </span>

                  {isUnlocked && (
                    <button
                      type="button"
                      className="px-4 py-2 min-h-[44px] rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 group-hover:from-amber-400 group-hover:to-amber-500 text-stone-950 font-black text-xs uppercase tracking-wider shadow flex items-center gap-1.5 transition-transform active:scale-95"
                    >
                      <span>Vào Chuyên Đề</span>
                      <span>→</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};
