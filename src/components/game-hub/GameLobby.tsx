import React from 'react';
import { Compass, Image, Sparkles, Trophy, Award, Flame, Play, Volume2, VolumeX, Shield, Coins, Star, BarChart3 } from 'lucide-react';
import { soundFx } from '../../sound/soundFx';

interface GameLobbyProps {
  onStartAdventure: () => void;
  onOpenDashboard: () => void;
  playerCoins: number;
}

export const GameLobby: React.FC<GameLobbyProps> = ({
  onStartAdventure,
  onOpenDashboard,
  playerCoins,
}) => {
  const [isMuted, setIsMuted] = React.useState(!soundFx.isSoundEnabled());

  const toggleSound = () => {
    const next = soundFx.toggleSound();
    setIsMuted(!next);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-950 via-stone-900 to-black text-stone-100 p-4 sm:p-8 select-none">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Top Arcade Navigation Bar */}
        <header className="flex flex-wrap items-center justify-between gap-4 bg-stone-900/90 border-2 border-amber-600/60 rounded-3xl p-4 shadow-2xl backdrop-blur-md">
          {/* Player Badge */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-2xl shadow-lg border-2 border-amber-400">
                <span>🐿️</span>
              </div>
              <span className="absolute -bottom-1 -right-1 px-1.5 py-0.2 bg-amber-400 text-stone-950 font-black text-[10px] rounded-full font-mono">
                Lv.1
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black text-amber-200">
                  Dũng Sĩ Toán 7
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-[10px] text-amber-300 font-bold uppercase">
                  Violympic Arcade
                </span>
              </div>
              <p className="text-xs text-stone-400 font-medium">
                Đấu trường học Toán 7 qua trò chơi
              </p>
            </div>
          </div>

          {/* Stats & Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDashboard}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-amber-600/30 hover:bg-amber-600/50 border border-amber-500/60 text-amber-200 text-xs sm:text-sm font-black transition-all active:scale-95 shadow"
            >
              <BarChart3 className="w-4 h-4 text-amber-300" />
              <span>Thống Kê & Tranh</span>
            </button>

            {/* Coins */}
            <div className="flex items-center gap-1.5 bg-yellow-950/60 border border-yellow-500/40 px-3.5 py-2 rounded-2xl text-yellow-300 font-bold shadow-inner">
              <Coins className="w-4 h-4 text-yellow-400" />
              <span className="font-mono text-sm sm:text-base font-black">{playerCoins}</span>
            </div>

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              className="p-2.5 rounded-2xl bg-stone-800 hover:bg-stone-700 border border-stone-600 text-amber-400 transition-all shadow-md active:scale-95"
              title={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-stone-500" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
            </button>
          </div>
        </header>

        {/* Hero Welcome Banner */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-900/90 via-stone-900 to-amber-950 border-4 border-amber-600/70 p-6 sm:p-8 shadow-2xl text-center sm:text-left">
          <div className="max-w-2xl relative z-10 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/30 border border-amber-400/50 text-amber-300 text-xs font-black tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Bản đồ phiêu lưu Candy Saga thống nhất
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-amber-100 tracking-tight leading-snug drop-shadow-md">
              CHINH PHỤC TOÁN 7 QUA TRÒ CHƠI
            </h1>
            <p className="text-sm sm:text-base text-amber-200/80 leading-relaxed font-medium">
              Một hành trình duy nhất: Xen kẽ giữa các ải <strong>Bức Tranh Bí Ẩn</strong> (tính toán số học) và <strong>Vượt Chướng Ngại Vật</strong> (toán đố thực tế), kết thúc bằng trận chiến săn Trùm Boss!
            </p>

            <div className="pt-2">
              <button
                onClick={onStartAdventure}
                className="py-4 px-8 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-stone-950 font-black tracking-wider uppercase text-base sm:text-lg shadow-2xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-[0_8px_0_#92400e]"
              >
                <Play className="w-6 h-6 fill-stone-950" />
                <span>BẮT ĐẦU PHIÊU LƯU NGAY</span>
              </button>
            </div>
          </div>
          <div className="absolute right-4 bottom-2 text-7xl sm:text-9xl opacity-20 select-none pointer-events-none">
            🗺️
          </div>
        </section>

        {/* 2 Feature Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Card 1: Vòng lặp gameplay xen kẽ */}
          <div className="rounded-3xl bg-stone-900/90 border-2 border-amber-500/50 p-6 shadow-xl space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🔄</span>
              <h3 className="text-lg font-black text-amber-200">
                Gameplay Xen Kẽ Trong Từng Chuyên Đề
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Mỗi thế giới tích hợp cả hai dạng bài một cách tự nhiên:
              Ải lẻ là <strong>Bức Tranh Bí Ẩn</strong> rèn phản xạ tính toán, ải chẵn là <strong>Vượt Chướng Ngại Vật</strong> rèn tư duy toán đố thực tế, và ải đỉnh núi là <strong>Boss Battle</strong>!
            </p>
          </div>

          {/* Card 2: Bộ sưu tập tranh & Thống kê */}
          <div
            onClick={onOpenDashboard}
            className="group rounded-3xl bg-stone-900/90 border-2 border-amber-500/50 p-6 shadow-xl space-y-3 cursor-pointer hover:border-amber-400 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🖼️</span>
                <h3 className="text-lg font-black text-amber-200 group-hover:text-amber-100">
                  Bảo Tàng Kiệt Tác & Thống Kê
                </h3>
              </div>
              <span className="text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                Xem →
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Chiêm ngưỡng 10 bức tranh danh lam thắng cảnh Việt Nam và cội nguồn toán học mở khóa sau mỗi ải, cùng bảng tổng kết chiến tích chi tiết.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
