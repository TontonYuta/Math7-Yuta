import React from 'react';
import { GameWorld } from './types';
import { getRealmMeta } from './levelData';
import { Star, ArrowLeft, Lock, BarChart3, ChevronRight, Layers, Swords, ShieldAlert } from 'lucide-react';

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
    <div className="min-h-screen bg-transparent text-zinc-100 p-4 sm:p-6 lg:p-10 select-none flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full space-y-8">
        {/* Top Header */}
        <header className="flex flex-wrap items-center justify-between gap-4 bg-[#141624]/95 backdrop-blur-md border border-zinc-800/90 rounded-3xl px-6 py-4 shadow-xl">
          <button
            onClick={onBackToLobby}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-zinc-800/90 hover:bg-zinc-700 text-zinc-100 text-sm font-bold transition-all active:scale-95 border border-zinc-700/80 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-zinc-300" />
            <span>Sảnh chính</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDashboard}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-zinc-800/90 hover:bg-zinc-700 text-zinc-100 text-sm font-bold transition-all active:scale-95 border border-zinc-700/80 shadow-sm"
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

        {/* Section Heading */}
        <div className="rounded-3xl bg-[#141624]/95 backdrop-blur-md border border-zinc-800/90 p-8 space-y-3 shadow-xl">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full text-xs sm:text-sm font-mono text-amber-300 bg-amber-500/10 border border-amber-500/30 uppercase font-bold">
            <Layers className="w-4 h-4 text-amber-400" />
            <span>10 Vùng Biển Đại Hải Trình (Grand Line Sagas)</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            10 Chuyên Đề Trọng Tâm Toán 7 GDPT 2018
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 max-w-3xl leading-relaxed font-medium">
            Mỗi hải trình tương ứng một chuyên đề toán học. Giải mã văn tự cổ Poneglyph và hạ gục Trùm Arc để nâng cao mức tiền thưởng truy nã hải tặc của bạn.
          </p>
        </div>

        {/* 10 Topics Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {worlds.map((world, idx) => {
            const worldStars = world.levels.reduce((acc, l) => acc + l.starsEarned, 0);
            const maxWorldStars = world.levels.length * 3;
            const isUnlocked = world.levels.some((l) => l.isUnlocked);
            const isCompleted = worldStars === maxWorldStars && maxWorldStars > 0;
            const progressPercent = maxWorldStars > 0 ? Math.round((worldStars / maxWorldStars) * 100) : 0;
            const formattedNum = (idx + 1).toString().padStart(2, '0');
            const realm = getRealmMeta(world.id, idx);

            return (
              <div
                key={world.id}
                onClick={() => isUnlocked && onSelectTopic(world.id)}
                className={`group relative rounded-3xl p-6 sm:p-7 border transition-all duration-150 flex flex-col justify-between ${
                  isUnlocked
                    ? 'bg-[#141624]/95 backdrop-blur-md border-zinc-800/90 hover:border-amber-500/60 hover:bg-[#181c2e] cursor-pointer shadow-xl hover:shadow-2xl'
                    : 'bg-[#10121a]/80 border-zinc-850 opacity-40 cursor-not-allowed'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-zinc-800/90 border border-zinc-700 flex items-center justify-center font-mono font-black text-2xl text-zinc-200 shadow-inner shrink-0">
                        {realm.themeSymbol}
                      </div>
                      <div>
                        <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block font-bold">
                          Hải Trình {formattedNum} • {realm.islandCode}
                        </span>
                        <h3 className="text-base sm:text-lg font-black text-white group-hover:text-amber-300 transition-colors">
                          {realm.sagaName}
                        </h3>
                      </div>
                    </div>

                    {isUnlocked ? (
                      <span className="px-3 py-1 rounded-xl text-xs sm:text-sm font-mono font-bold bg-zinc-800 border border-zinc-700 text-amber-400 flex items-center gap-1.5 shadow-sm">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span>{worldStars}/{maxWorldStars}</span>
                      </span>
                    ) : (
                      <Lock className="w-5 h-5 text-zinc-600" />
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 line-clamp-2 leading-relaxed font-medium">
                    <strong className="text-amber-300 font-bold">{world.shortName}:</strong> {world.description}
                  </p>

                  {/* Boss Info snippet */}
                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-mono text-zinc-300 pt-1">
                    <div className="flex items-center gap-1.5 text-red-400 truncate font-semibold">
                      <Swords className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{realm.bossName}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
                      <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{realm.bountyReward}</span>
                    </div>
                  </div>

                  {/* Progress Line */}
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-400 font-semibold">
                      <span>{world.levels.length} ải hải trình</span>
                      <span>{progressPercent}%</span>
                    </div>
                    <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden shadow-inner">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-300"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400 font-semibold">
                    {isCompleted ? 'Đã chinh phục' : isUnlocked ? 'Đang mở' : 'Đã khóa'}
                  </span>

                  {isUnlocked && (
                    <button
                      type="button"
                      className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-xs sm:text-sm font-black flex items-center gap-1.5 transition-all group-hover:bg-amber-400 group-hover:text-zinc-950 shadow-md"
                    >
                      <span>Giương Buồm</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </section>
      </div>

      <footer className="text-center py-6 text-xs sm:text-sm text-zinc-400 font-mono">
        Chọn vùng biển hải trình để tiến vào hải đồ chi tiết
      </footer>
    </div>
  );
};
