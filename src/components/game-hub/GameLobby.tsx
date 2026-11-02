import React from 'react';
import { Compass, Image, Trophy, Award, Play, Volume2, VolumeX, Shield, Coins, Star, BarChart3, ChevronRight, Target, Grid3X3 } from 'lucide-react';
import { soundFx } from '../../sound/soundFx';

interface GameLobbyProps {
  onStartAdventure: () => void;
  onOpenDashboard: () => void;
  playerCoins: number;
  totalStars?: number;
}

export const GameLobby: React.FC<GameLobbyProps> = ({
  onStartAdventure,
  onOpenDashboard,
  playerCoins,
  totalStars = 0,
}) => {
  const [isMuted, setIsMuted] = React.useState(!soundFx.isSoundEnabled());

  const toggleSound = () => {
    const next = soundFx.toggleSound();
    setIsMuted(!next);
  };

  return (
    <div className="min-h-screen bg-[#0c0d12] text-zinc-100 p-4 sm:p-8 select-none flex flex-col justify-between">
      <div className="max-w-5xl mx-auto w-full space-y-6">
        {/* Minimalist Top Navigation Header */}
        <header className="flex flex-wrap items-center justify-between gap-4 bg-[#14161f] border border-zinc-800/80 rounded-2xl px-5 py-3.5 shadow-lg">
          {/* Brand & Identity */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/80 flex items-center justify-center font-mono font-black text-amber-400 text-base shadow-sm">
              M7
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm sm:text-base font-bold text-white tracking-wide">
                  Đấu Trường Toán 7
                </h2>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-zinc-800 border border-zinc-700 text-zinc-400">
                  Tactical Arena
                </span>
              </div>
              <p className="text-xs text-zinc-400">
                Hệ thống rèn luyện toán học theo thử thách
              </p>
            </div>
          </div>

          {/* Player Stats & Controls */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenDashboard}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-750 border border-zinc-700/80 text-zinc-200 text-xs font-semibold transition-all active:scale-95"
            >
              <BarChart3 className="w-3.5 h-3.5 text-zinc-400" />
              <span>Hồ sơ & Tranh</span>
            </button>

            {/* Total Stars Counter */}
            <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-850 border border-zinc-700 text-amber-400 font-mono text-xs font-bold shadow-inner">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{totalStars}</span>
            </div>

            {/* Coins Counter */}
            <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-850 border border-zinc-700 text-zinc-200 font-mono text-xs font-bold shadow-inner">
              <Coins className="w-3.5 h-3.5 text-yellow-400" />
              <span>{playerCoins}</span>
            </div>

            {/* Sound Toggle Button */}
            <button
              onClick={toggleSound}
              className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-400 hover:text-white transition-all active:scale-95"
              title={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-zinc-500" /> : <Volume2 className="w-4 h-4 text-zinc-300" />}
            </button>
          </div>
        </header>

        {/* Hero Mission Card */}
        <section className="relative overflow-hidden rounded-2xl bg-[#14161f] border border-zinc-800 p-6 sm:p-8 shadow-xl">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-800/80 border border-zinc-700 text-zinc-300 text-xs font-mono">
              <Target className="w-3.5 h-3.5 text-amber-400" />
              <span>LỘ TRÌNH 10 CHUYÊN ĐỀ GDPT 2018</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Chinh phục Toán 7 qua thử thách phân tầng
            </h1>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-xl">
              Hệ thống kết hợp bài toán tính toán số học mở tranh, bài toán đố thực tế vượt mê cung và các bài thi tổng hợp.
            </p>

            <div className="pt-2">
              <button
                onClick={onStartAdventure}
                className="px-6 py-3.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs sm:text-sm tracking-wide uppercase transition-all flex items-center gap-2.5 shadow-lg active:scale-95 hover:shadow-zinc-100/10"
              >
                <Play className="w-4 h-4 fill-zinc-950" />
                <span>Bắt đầu vượt ải ngay</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* 3 Tactical Mode Overview Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl bg-[#14161f] border border-zinc-800/80 p-5 space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300">
              <Grid3X3 className="w-4 h-4 text-amber-400" />
            </div>
            <h3 className="text-sm font-bold text-white">Mảnh ghép số học</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Giải đúng 9 phép tính số học để giải mã từng ô trên ma trận hình ảnh.
            </p>
          </div>

          <div className="rounded-2xl bg-[#14161f] border border-zinc-800/80 p-5 space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300">
              <Compass className="w-4 h-4 text-sky-400" />
            </div>
            <h3 className="text-sm font-bold text-white">Mê cung toán đố</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Vượt các chốt chặn thử thách bằng bài toán đố có lời văn và hình học trực quan.
            </p>
          </div>

          <div
            onClick={onOpenDashboard}
            className="rounded-2xl bg-[#14161f] border border-zinc-800/80 p-5 space-y-2.5 cursor-pointer hover:border-zinc-700 transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300">
              <Trophy className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white">Bảo tàng & Thành tích</h3>
              <span className="text-[11px] text-zinc-500 font-mono">Xem →</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              10 kiệt tác hình ảnh và báo cáo thống kê chi tiết theo từng chuyên đề.
            </p>
          </div>
        </section>
      </div>

      {/* Subtle Footer Note */}
      <footer className="text-center py-4 text-xs text-zinc-600 font-mono">
        Math7 Tactical Workspace • GDPT 2018
      </footer>
    </div>
  );
};
