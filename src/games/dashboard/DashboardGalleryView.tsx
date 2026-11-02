import React, { useState } from 'react';
import { GameWorld, PlayerProgress } from '../world-map/types';
import { MYSTERY_IMAGES } from '../mysterious-picture/mysteryImages';
import { StatsCardGroup } from './StatsCardGroup';
import { GalleryGridView } from './GalleryGridView';
import { OnePieceCollectionGallery } from './OnePieceCollectionGallery';
import { DashboardStats } from './types';
import { ArrowLeft, BarChart3, Image, Sparkles } from 'lucide-react';

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
  const [activeTab, setActiveTab] = useState<'stats' | 'gallery' | 'collection'>('stats');

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
    <div className="min-h-screen bg-transparent text-zinc-100 p-2.5 sm:p-6 lg:p-8 select-none flex flex-col justify-between">
      <div className="max-w-[1600px] mx-auto w-full space-y-4 sm:space-y-8">
        {/* Top Header */}
        <header className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-4 bg-[#141624]/95 backdrop-blur-md border border-zinc-800/90 rounded-2xl sm:rounded-3xl px-3 py-2.5 sm:px-6 sm:py-4 shadow-xl">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-xs sm:text-sm font-bold transition-all active:scale-95 border border-zinc-700/80 shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-300" />
            <span className="hidden xs:inline sm:inline">Quay lại Hải Đồ</span>
            <span className="xs:hidden sm:hidden">Hải Đồ</span>
          </button>

          {/* Clean Segmented Tabs (Responsive) */}
          <div className="flex flex-wrap items-center p-1 sm:p-1.5 bg-zinc-900/95 rounded-xl sm:rounded-2xl border border-zinc-800 shadow-inner gap-1">
            <button
              onClick={() => setActiveTab('stats')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'stats'
                  ? 'bg-amber-400 text-zinc-950 font-black shadow-md'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Tiến Độ Hải Trình</span>
              <span className="sm:hidden">Tiến Độ</span>
            </button>

            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'gallery'
                  ? 'bg-amber-400 text-zinc-950 font-black shadow-md'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Image className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Kho Báu Tranh ({unlockedCount}/{MYSTERY_IMAGES.length})</span>
              <span className="sm:hidden">Tranh ({unlockedCount})</span>
            </button>

            <button
              onClick={() => setActiveTab('collection')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'collection'
                  ? 'bg-amber-400 text-zinc-950 font-black shadow-md'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
              <span className="hidden sm:inline">Bộ Sưu Tập 100 Thẻ One Piece</span>
              <span className="sm:hidden">100 Thẻ</span>
            </button>
          </div>

          {/* Berries Display */}
          <div className="flex items-center gap-1 px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-mono font-black shadow-inner">
            <span className="text-sm sm:text-base text-amber-400">฿</span>
            <span>{playerCoins.toLocaleString()}</span>
          </div>
        </header>

        {/* Tab Body */}
        {activeTab === 'stats' && <StatsCardGroup stats={stats} />}
        {activeTab === 'gallery' && (
          <GalleryGridView
            allImages={MYSTERY_IMAGES}
            unlockedImageIds={progress.unlockedGalleryImageIds}
          />
        )}
        {activeTab === 'collection' && <OnePieceCollectionGallery />}
      </div>

      <footer className="text-center py-6 text-xs sm:text-sm text-zinc-400 font-mono">
        Dữ liệu chiến tích và bộ sưu tập được lưu trữ an toàn trên thiết bị
      </footer>
    </div>
  );
};
