import React from 'react';
import { GameWorld } from './types';
import { getRealmMeta } from './levelData';
import { Star, ArrowLeft, Lock, BarChart3, ChevronRight, Layers, Coins, Swords, ShieldAlert } from 'lucide-react';

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
    <div className="min-h-screen bg-transparent text-zinc-100 p-4 sm:p-8 select-none flex flex-col justify-between">
      <div className="max-w-5xl mx-auto w-full space-y-6">
        {/* Top Header */}
        <header className="flex flex-wrap items-center justify-between gap-4 bg-[#141624]/90 backdrop-blur-md border border-zinc-800 rounded-2xl px-5 py-3.5 shadow-xl">
          <button
            onClick={onBackToLobby}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-800/90 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-all active:scale-95 border border-zinc-700/80"
          >
            <ArrowLeft className="w-4 h-4 text-zinc-400" />
            <span>Sảnh chính</span>
          </button>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenDashboard}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-800/90 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-all active:scale-95 border border-zinc-700/80"
            >
              <BarChart3 className="w-3.5 h-3.5 text-zinc-400" />
              <span>Kho Báu & Tranh</span>
            </button>

            <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-850 border border-zinc-700 text-amber-400 font-mono text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{totalStars}</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-850 border border-zinc-700 text-amber-300 font-mono text-xs font-bold">
              <span className="text-sm font-black">฿</span>
              <span>{playerCoins.toLocaleString()}</span>
            </div>
          </div>
        </header>

        {/* Section Heading */}
        <div className="rounded-3xl bg-[#141624]/90 backdrop-blur-md border border-zinc-800 p-6 space-y-2 shadow-xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-[11px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/30 uppercase font-bold">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>10 Vùng Biển Đại Hải Trình (Grand Line Sagas)</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            10 Chuyên Đề Trọng Tâm Toán 7
          </h1>
          <p className="text-xs text-zinc-300 max-w-2xl leading-relaxed">
            Mỗi hải trình tương ứng một chuyên đề toán học. Giải mã văn tự cổ Poneglyph và hạ gục Trùm Arc để nâng cao mức tiền thưởng truy nã hải tặc.
          </p>
        </div>

        {/* 10 Topics Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                className={`group relative rounded-2xl p-5 border transition-all duration-150 flex flex-col justify-between ${
                  isUnlocked
                    ? 'bg-[#141624]/90 backdrop-blur-md border-zinc-800 hover:border-amber-500/50 hover:bg-[#181c2e] cursor-pointer shadow-lg'
                    : 'bg-[#10121a]/80 border-zinc-850 opacity-40 cursor-not-allowed'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-zinc-800/80 border border-zinc-700 flex items-center justify-center font-mono font-bold text-xl text-zinc-200">
                        {realm.themeSymbol}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                          Hải Trình {formattedNum} • {realm.islandCode}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                          {realm.sagaName}
                        </h3>
                      </div>
                    </div>

                    {isUnlocked ? (
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-zinc-800 border border-zinc-700 text-amber-400 flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span>{worldStars}/{maxWorldStars}</span>
                      </span>
                    ) : (
                      <Lock className="w-4 h-4 text-zinc-600" />
                    )}
                  </div>

                  <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed">
                    <strong className="text-amber-300/90">{world.shortName}:</strong> {world.description}
                  </p>

                  {/* Boss Info snippet */}
                  <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-zinc-400 pt-0.5">
                    <div className="flex items-center gap-1 text-red-400 truncate">
                      <Swords className="w-3 h-3 text-red-400 shrink-0" />
                      <span>{realm.bossName}</span>
                    </div>
                    <div className="flex items-center gap-1 text-amber-400">
                      <ShieldAlert className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>{realm.bountyReward}</span>
                    </div>
                  </div>

                  {/* Progress Line */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                      <span>{world.levels.length} ải hải trình</span>
                      <span>{progressPercent}%</span>
                    </div>
                    <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-400 transition-all duration-300"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-500">
                    {isCompleted ? 'Đã chinh phục' : isUnlocked ? 'Đang mở' : 'Đã khóa'}
                  </span>

                  {isUnlocked && (
                    <button
                      type="button"
                      className="px-3.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold flex items-center gap-1 transition-all group-hover:bg-amber-400 group-hover:text-zinc-950 font-bold"
                    >
                      <span>Giương Buồm</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </section>
      </div>

      <footer className="text-center py-4 text-xs text-zinc-500 font-mono">
        Chọn vùng biển hải trình để tiến vào hải đồ chi tiết
      </footer>
    </div>
  );
};
