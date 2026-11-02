import React, { useState } from 'react';
import { GameWorld, PlayerProgress } from '../world-map/types';
import { MYSTERY_IMAGES } from '../mysterious-picture/mysteryImages';
import { StatsCardGroup } from './StatsCardGroup';
import { GalleryGridView } from './GalleryGridView';
import { DashboardStats } from './types';
import { ArrowLeft, BarChart3, Image } from 'lucide-react';

interface DashboardGalleryViewProps {
  worlds: GameWorld[];
  progress: PlayerProgress;
  playerCoins: number;
  onBack: () => void;
}

export const DashboardGalleryView: React.FC<DashboardGalleryViewProps> = ({
  worlds,
  progress,
  playerCoins,
  onBack,
}) => {
  const [activeTab, setActiveTab] = useState<'stats' | 'gallery'>('stats');

  const totalLevels = worlds.reduce((acc, w) => acc + w.levels.length, 0);
  const totalLevelsCompleted = Object.values(progress.levelStars).filter((s) => s > 0).length;
  const maxStars = totalLevels * 3;

  const playerRank =
    progress.totalStars >= 60
      ? 'Vua Hải Tặc (Pirate King)'
      : progress.totalStars >= 45
      ? 'Tứ Hoàng (Yonko)'
      : progress.totalStars >= 30
      ? 'Thất Vũ Hải (Shichibukai)'
      : progress.totalStars >= 15
      ? 'Siêu Tân Tinh (Supernova)'
      : 'Tân Binh Biển Đông (Rookie)';

  const stats: DashboardStats = {
    totalStars: progress.totalStars,
    maxStars,
    totalLevelsCompleted,
    totalLevels,
    playerCoins,
    playerRank,
    totalCalculationsSolved: progress.totalCalculationsSolved || totalLevelsCompleted * 4,
    totalWordProblemsSolved: progress.totalWordProblemsSolved || totalLevelsCompleted * 3,
    bossesDefeated: progress.bossesDefeated || 0,
  };

  const unlockedCount = progress.unlockedGalleryImageIds.length;

  return (
    <div className="min-h-screen bg-transparent text-zinc-100 p-4 sm:p-6 lg:p-10 select-none flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full space-y-8">
        {/* Top Header */}
        <header className="flex flex-wrap items-center justify-between gap-4 bg-[#141624]/95 backdrop-blur-md border border-zinc-800/90 rounded-3xl px-6 py-4 shadow-xl">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-sm font-bold transition-all active:scale-95 border border-zinc-700/80 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-zinc-300" />
            <span>Quay lại Hải Đồ</span>
          </button>

          {/* Clean Segmented Tabs */}
          <div className="flex items-center p-1.5 bg-zinc-900/95 rounded-2xl border border-zinc-800 shadow-inner">
            <button
              onClick={() => setActiveTab('stats')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'stats'
                  ? 'bg-amber-400 text-zinc-950 font-black shadow-md'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Tiến Độ Hải Trình</span>
            </button>

            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'gallery'
                  ? 'bg-amber-400 text-zinc-950 font-black shadow-md'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Image className="w-4 h-4" />
              <span>Kho Báu Tranh ({unlockedCount}/{MYSTERY_IMAGES.length})</span>
            </button>
          </div>

          {/* Berries Display */}
          <div className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm font-mono font-black shadow-inner">
            <span className="text-base text-amber-400">฿</span>
            <span>{playerCoins.toLocaleString()}</span>
          </div>
        </header>

        {/* Tab Body */}
        {activeTab === 'stats' ? (
          <StatsCardGroup stats={stats} />
        ) : (
          <GalleryGridView
            allImages={MYSTERY_IMAGES}
            unlockedImageIds={progress.unlockedGalleryImageIds}
          />
        )}
      </div>

      <footer className="text-center py-6 text-xs sm:text-sm text-zinc-400 font-mono">
        Dữ liệu chiến tích được lưu trữ an toàn trên thiết bị
      </footer>
    </div>
  );
};
