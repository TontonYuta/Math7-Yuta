import React, { useState } from 'react';
import { GameWorld, PlayerProgress } from '../world-map/types';
import { MYSTERY_IMAGES } from '../mysterious-picture/mysteryImages';
import { StatsCardGroup } from './StatsCardGroup';
import { GalleryGridView } from './GalleryGridView';
import { DashboardStats } from './types';
import { ArrowLeft, BarChart3, Image, Coins } from 'lucide-react';

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
    <div className="min-h-screen bg-transparent text-zinc-100 p-4 sm:p-8 select-none flex flex-col justify-between">
      <div className="max-w-4xl mx-auto w-full space-y-6">
        {/* Top Header */}
        <header className="flex flex-wrap items-center justify-between gap-4 bg-[#141624]/90 backdrop-blur-md border border-zinc-800 rounded-2xl px-5 py-3.5 shadow-xl">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-all active:scale-95 border border-zinc-700"
          >
            <ArrowLeft className="w-4 h-4 text-zinc-400" />
            <span>Quay lại Hải Đồ</span>
          </button>

          {/* Clean Segmented Tabs */}
          <div className="flex items-center p-1 bg-zinc-900 rounded-xl border border-zinc-800">
            <button
              onClick={() => setActiveTab('stats')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'stats'
                  ? 'bg-amber-400 text-zinc-950 font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Tiến Độ Hải Trình</span>
            </button>

            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'gallery'
                  ? 'bg-amber-400 text-zinc-950 font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Image className="w-3.5 h-3.5" />
              <span>Kho Báu Tranh ({unlockedCount}/{MYSTERY_IMAGES.length})</span>
            </button>
          </div>

          {/* Berries Display */}
          <div className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-zinc-850 border border-zinc-750 text-amber-300 text-xs font-mono font-bold">
            <span className="text-sm font-black">฿</span>
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

      <footer className="text-center py-4 text-xs text-zinc-600 font-mono">
        Dữ liệu chiến tích được lưu trữ an toàn trên thiết bị
      </footer>
    </div>
  );
};
