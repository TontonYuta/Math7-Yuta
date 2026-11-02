import React from 'react';
import { DashboardStats } from './types';
import { Star, Trophy, Award, Image, Compass, Swords } from 'lucide-react';

interface StatsCardGroupProps {
  stats: DashboardStats;
}

export const StatsCardGroup: React.FC<StatsCardGroupProps> = ({ stats }) => {
  const percentComplete = Math.round((stats.totalLevelsCompleted / Math.max(1, stats.totalLevels)) * 100);

  return (
    <div className="space-y-6">
      {/* Hero Rank Card */}
      <div className="rounded-3xl bg-[#14161f]/95 border border-zinc-800/90 p-7 sm:p-9 shadow-2xl backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5 text-center sm:text-left">
          <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 flex items-center justify-center text-amber-400 text-3xl shadow-inner shrink-0">
            <Trophy className="w-9 h-9" />
          </div>
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
              <span className="px-3 py-1 rounded-md bg-amber-400/10 border border-amber-400/30 text-amber-300 font-mono text-xs sm:text-sm font-black uppercase">
                {stats.playerRank}
              </span>
              <span className="text-xs sm:text-sm font-mono text-amber-400 font-bold">Lệnh Truy Nã Hải Tặc</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-white">
              Bảng Tổng Kết Chiến Tích Grand Line
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 font-medium">
              Tổng tiến độ hoàn thành chương trình: {percentComplete}%
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full md:w-72 space-y-2 text-xs sm:text-sm text-zinc-300 font-medium">
          <div className="flex justify-between font-mono">
            <span>Tiến độ ải:</span>
            <span className="text-white font-black">{stats.totalLevelsCompleted} / {stats.totalLevels} ải</span>
          </div>
          <div className="w-full h-3 bg-zinc-850 rounded-full overflow-hidden border border-zinc-800 shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-300"
              style={{ width: `${percentComplete}%` }}
            />
          </div>
        </div>
      </div>

      {/* Grid of 4 Core Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="p-5 sm:p-6 rounded-2xl bg-[#14161f]/95 border border-zinc-800/90 flex flex-col justify-between shadow-lg">
          <div className="flex items-center justify-between text-xs sm:text-sm text-zinc-300 mb-3 font-mono font-bold">
            <span>Sao tích lũy</span>
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
          </div>
          <div className="text-2xl sm:text-4xl font-mono font-black text-white">
            {stats.totalStars} <span className="text-xs sm:text-sm font-normal text-zinc-400">/ {stats.maxStars}</span>
          </div>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-[#14161f]/95 border border-zinc-800/90 flex flex-col justify-between shadow-lg">
          <div className="flex items-center justify-between text-xs sm:text-sm text-zinc-300 mb-3 font-mono font-bold">
            <span>Bài số học</span>
            <Image className="w-5 h-5 text-amber-400" />
          </div>
          <div className="text-2xl sm:text-4xl font-mono font-black text-white">
            {stats.totalCalculationsSolved} <span className="text-xs sm:text-sm font-normal text-zinc-400">câu</span>
          </div>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-[#14161f]/95 border border-zinc-800/90 flex flex-col justify-between shadow-lg">
          <div className="flex items-center justify-between text-xs sm:text-sm text-zinc-300 mb-3 font-mono font-bold">
            <span>Bài toán đố</span>
            <Compass className="w-5 h-5 text-sky-400" />
          </div>
          <div className="text-2xl sm:text-4xl font-mono font-black text-white">
            {stats.totalWordProblemsSolved} <span className="text-xs sm:text-sm font-normal text-zinc-400">câu</span>
          </div>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-[#14161f]/95 border border-zinc-800/90 flex flex-col justify-between shadow-lg">
          <div className="flex items-center justify-between text-xs sm:text-sm text-zinc-300 mb-3 font-mono font-bold">
            <span>Trùm Arc</span>
            <Swords className="w-5 h-5 text-red-400" />
          </div>
          <div className="text-2xl sm:text-4xl font-mono font-black text-white">
            {stats.bossesDefeated} <span className="text-xs sm:text-sm font-normal text-zinc-400">/ 10</span>
          </div>
        </div>
      </div>
    </div>
  );
};
