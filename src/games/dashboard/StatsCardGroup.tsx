import React from 'react';
import { DashboardStats } from './types';
import { Star, Trophy, Award, Image, Compass, Swords } from 'lucide-react';

interface StatsCardGroupProps {
  stats: DashboardStats;
}

export const StatsCardGroup: React.FC<StatsCardGroupProps> = ({ stats }) => {
  const percentComplete = Math.round((stats.totalLevelsCompleted / Math.max(1, stats.totalLevels)) * 100);

  return (
    <div className="space-y-4">
      {/* Hero Rank Card */}
      <div className="rounded-2xl bg-[#14161f] border border-zinc-800 p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-14 h-14 rounded-2xl bg-zinc-850 border border-zinc-700 flex items-center justify-center text-amber-400 text-2xl shadow">
            <Trophy className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-amber-400 font-mono text-[11px] font-bold uppercase">
                {stats.playerRank}
              </span>
              <span className="text-xs font-mono text-zinc-500">Toán 7 Tactical</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white mt-1">
              Bảng Tổng Kết Chiến Tích
            </h2>
            <p className="text-xs text-zinc-400">
              Tổng tiến độ hoàn thành chương trình: {percentComplete}%
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full sm:w-56 space-y-1.5 text-xs text-zinc-400">
          <div className="flex justify-between font-mono">
            <span>Tiến độ ải:</span>
            <span className="text-zinc-200 font-bold">{stats.totalLevelsCompleted} / {stats.totalLevels} ải</span>
          </div>
          <div className="w-full h-2 bg-zinc-850 rounded-full overflow-hidden border border-zinc-800">
            <div
              className="h-full bg-amber-400 transition-all duration-300"
              style={{ width: `${percentComplete}%` }}
            />
          </div>
        </div>
      </div>

      {/* Grid of 4 Core Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <div className="p-4 rounded-xl bg-[#14161f] border border-zinc-800 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-2 font-mono">
            <span>Sao tích lũy</span>
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          </div>
          <div className="text-xl sm:text-2xl font-mono font-bold text-white">
            {stats.totalStars} <span className="text-xs font-normal text-zinc-500">/ {stats.maxStars}</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#14161f] border border-zinc-800 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-2 font-mono">
            <span>Bài số học</span>
            <Image className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-xl sm:text-2xl font-mono font-bold text-white">
            {stats.totalCalculationsSolved} <span className="text-xs font-normal text-zinc-500">câu</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#14161f] border border-zinc-800 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-2 font-mono">
            <span>Bài toán đố</span>
            <Compass className="w-4 h-4 text-sky-400" />
          </div>
          <div className="text-xl sm:text-2xl font-mono font-bold text-white">
            {stats.totalWordProblemsSolved} <span className="text-xs font-normal text-zinc-500">câu</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#14161f] border border-zinc-800 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-2 font-mono">
            <span>Trùm Boss</span>
            <Swords className="w-4 h-4 text-red-400" />
          </div>
          <div className="text-xl sm:text-2xl font-mono font-bold text-white">
            {stats.bossesDefeated} <span className="text-xs font-normal text-zinc-500">/ 10</span>
          </div>
        </div>
      </div>
    </div>
  );
};
