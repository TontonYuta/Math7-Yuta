import React from 'react';
import { DashboardStats } from './types';
import { Star, Trophy, Award, Image, Footprints, Swords, Flame, Coins } from 'lucide-react';

interface StatsCardGroupProps {
  stats: DashboardStats;
}

export const StatsCardGroup: React.FC<StatsCardGroupProps> = ({ stats }) => {
  const percentComplete = Math.round((stats.totalLevelsCompleted / Math.max(1, stats.totalLevels)) * 100);

  return (
    <div className="space-y-4">
      {/* Hero Rank Card */}
      <div className="relative rounded-3xl bg-gradient-to-r from-amber-900/80 via-stone-900 to-amber-950 border-4 border-amber-500/70 p-5 sm:p-6 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-br from-amber-500 to-amber-700 border-2 border-amber-300 flex items-center justify-center text-4xl sm:text-5xl shadow-xl">
            🐿️
          </div>
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-stone-950 text-xs font-black uppercase">
                {stats.playerRank}
              </span>
              <span className="text-xs text-stone-400">Dũng sĩ Toán 7</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-amber-100 mt-1">
              Bảng Thành Tích & Chiến Báo
            </h2>
            <p className="text-xs text-stone-300">
              Tiến độ hoàn thành toàn bộ hành trình Toán 7: {percentComplete}%
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full sm:w-56 space-y-1.5 text-xs text-stone-300">
          <div className="flex justify-between font-bold">
            <span>Tiến độ ải:</span>
            <span className="text-amber-300">{stats.totalLevelsCompleted} / {stats.totalLevels} Ải</span>
          </div>
          <div className="w-full h-3 bg-stone-800 rounded-full overflow-hidden border border-stone-700">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-500"
              style={{ width: `${percentComplete}%` }}
            />
          </div>
        </div>
      </div>

      {/* Grid of 4 Core Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {/* Stars */}
        <div className="p-4 rounded-2xl bg-stone-900/90 border-2 border-amber-500/40 shadow-lg flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-stone-400 font-bold mb-2">
            <span>Ngôi Sao Vàng</span>
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-mono font-black text-yellow-300">
            {stats.totalStars} <span className="text-xs font-sans text-stone-500">/ {stats.maxStars}</span>
          </div>
        </div>

        {/* Calculations Solved */}
        <div className="p-4 rounded-2xl bg-stone-900/90 border-2 border-amber-600/40 shadow-lg flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-stone-400 font-bold mb-2">
            <span>Tính Toán Số Học</span>
            <Image className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-mono font-black text-amber-200">
            {stats.totalCalculationsSolved} <span className="text-xs font-sans text-stone-500">câu</span>
          </div>
        </div>

        {/* Word Problems Solved */}
        <div className="p-4 rounded-2xl bg-stone-900/90 border-2 border-emerald-600/40 shadow-lg flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-stone-400 font-bold mb-2">
            <span>Toán Đố Lời Văn</span>
            <Footprints className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-mono font-black text-emerald-300">
            {stats.totalWordProblemsSolved} <span className="text-xs font-sans text-stone-500">câu</span>
          </div>
        </div>

        {/* Bosses Defeated */}
        <div className="p-4 rounded-2xl bg-stone-900/90 border-2 border-red-600/40 shadow-lg flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-stone-400 font-bold mb-2">
            <span>Boss Đã Hạ</span>
            <Swords className="w-4 h-4 text-red-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-mono font-black text-red-300">
            {stats.bossesDefeated} <span className="text-xs font-sans text-stone-500">trùm</span>
          </div>
        </div>
      </div>
    </div>
  );
};
