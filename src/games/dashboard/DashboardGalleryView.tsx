import React, { useState } from 'react';
import { GameWorld, PlayerProgress } from '../world-map/types';
import { MysteryImageItem } from '../mysterious-picture/types';
import { MYSTERY_IMAGES } from '../mysterious-picture/mysteryImages';
import { StatsCardGroup } from './StatsCardGroup';
import { GalleryGridView } from './GalleryGridView';
import { DashboardStats } from './types';
import { ArrowLeft, BarChart3, Image, Star, Coins } from 'lucide-react';

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

  // Compute total statistics
  const totalLevels = worlds.reduce((acc, w) => acc + w.levels.length, 0);
  const totalLevelsCompleted = Object.values(progress.levelStars).filter((s) => s > 0).length;
  const maxStars = totalLevels * 3;

  const playerRank =
    progress.totalStars >= 60
      ? 'Đại Hiệp Toán Học'
      : progress.totalStars >= 30
      ? 'Pháp Sư Tính Toán'
      : progress.totalStars >= 10
      ? 'Thợ Săn Kho Báu'
      : 'Dũng Sĩ Tập Sự';

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
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col p-3 sm:p-6 select-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(180,83,9,0.2),rgba(0,0,0,0))]">
      <div className="max-w-4xl mx-auto w-full space-y-6">
        {/* Top Header */}
        <header className="flex flex-wrap items-center justify-between gap-4 bg-stone-900/95 border-2 border-amber-600/60 rounded-3xl p-3 sm:p-4 shadow-xl backdrop-blur-md">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-stone-800 hover:bg-stone-700 border border-stone-600 text-stone-200 text-xs sm:text-sm font-black transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>Quay lại Bản đồ</span>
          </button>

          {/* Navigation Tabs */}
          <div className="flex items-center p-1 bg-stone-950 rounded-2xl border border-stone-800">
            <button
              onClick={() => setActiveTab('stats')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeTab === 'stats'
                  ? 'bg-amber-500 text-stone-950 shadow-md'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Thống Kê Chiến Báo</span>
            </button>

            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeTab === 'gallery'
                  ? 'bg-amber-500 text-stone-950 shadow-md'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Image className="w-4 h-4" />
              <span>Bộ Sưu Tập Tranh ({unlockedCount}/{MYSTERY_IMAGES.length})</span>
            </button>
          </div>

          {/* Coins Display */}
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-yellow-950/80 border border-yellow-500/60 text-yellow-300 font-bold">
            <span>🪙</span>
            <span className="font-mono text-base font-black">{playerCoins}</span>
          </div>
        </header>

        {/* Tab Content */}
        {activeTab === 'stats' ? (
          <StatsCardGroup stats={stats} />
        ) : (
          <GalleryGridView
            allImages={MYSTERY_IMAGES}
            unlockedImageIds={progress.unlockedGalleryImageIds}
          />
        )}
      </div>
    </div>
  );
};
