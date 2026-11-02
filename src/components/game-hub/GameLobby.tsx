import React from 'react';
import { Compass, Image, Trophy, Play, Volume2, VolumeX, Shield, Coins, Star, BarChart3, ChevronRight, Target, Grid3X3, Swords, Anchor } from 'lucide-react';
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
    <div className="min-h-screen bg-transparent text-zinc-100 p-4 sm:p-8 select-none flex flex-col justify-between">
      <div className="max-w-5xl mx-auto w-full space-y-6">
        {/* Top Navigation Header */}
        <header className="flex flex-wrap items-center justify-between gap-4 bg-[#14161f] border border-zinc-800/80 rounded-2xl px-5 py-3.5 shadow-lg">
          {/* Brand & Identity */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-zinc-900 border border-amber-500/40 flex items-center justify-center font-mono font-black text-amber-400 text-sm shadow-sm">
              OP·N
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm sm:text-base font-bold text-white tracking-wide">
                  Đại Hải Trình x Nhẫn Giới Toán 7
                </h2>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-zinc-800 border border-zinc-700 text-amber-400">
                  Shinobi Grand Line
                </span>
              </div>
              <p className="text-xs text-zinc-400">
                10 Vùng đất Hải trình • Thu thập Khối Poneglyph & Nhẫn Thuật
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
              <span>Kho Báu & Tranh</span>
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
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#161825] via-[#12141e] to-[#0c0d12] border border-zinc-800 p-6 sm:p-10 shadow-2xl">
          <div className="max-w-2xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono">
              <Anchor className="w-3.5 h-3.5 text-amber-400" />
              <span>HẢI TRÌNH 10 CHUYÊN ĐỀ TOÁN 7 CHUẨN GDPT</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Giương Buồm Chinh Phục Đại Hải Trình & Đỉnh Cao Nhẫn Giới
            </h1>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-xl">
              Giải mã các khối đá Poneglyph số học, đột kích mê cung căn cứ pháo đài bằng bài toán thực tế và thách thức Trùm Tứ Hoàng bằng các đề thi tổng hợp.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onStartAdventure}
                className="group px-7 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-sm sm:text-base flex items-center gap-3 shadow-xl transition-all active:scale-95"
              >
                <Compass className="w-5 h-5 text-zinc-950 group-hover:rotate-45 transition-transform" />
                <span>Mở Hải Đồ Thế Giới & Khởi Hành</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Subtly integrated background artwork preview */}
          <div className="hidden lg:block absolute -right-6 -bottom-6 w-80 h-64 rounded-2xl overflow-hidden opacity-30 border border-zinc-700 pointer-events-none rotate-3">
            <img
              src="/assets/anime/chap_1_naruto_luffy.jpg"
              alt="Naruto x One Piece"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* 3 Core Tactical Game Mechanics Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl bg-[#14161f] border border-zinc-800 p-5 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-zinc-800 flex items-center justify-center text-amber-400 border border-zinc-700">
              <Grid3X3 className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white">Ải Lẻ: Giải Mã Poneglyph</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Tính toán số học chuẩn xác trên lưới 9 ô để bẻ gãy phong ấn và mở khóa kiệt tác tranh anime độ nét cao.
            </p>
          </div>

          <div className="rounded-2xl bg-[#14161f] border border-zinc-800 p-5 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-zinc-800 flex items-center justify-center text-blue-400 border border-zinc-700">
              <Compass className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white">Ải Chẵn: Mê Cung Đột Kích</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Điều khiển ninja/hải tặc luồn lách qua mê cung pháo đài, giải quyết các bài toán đố thực tế và thu thập rương báu.
            </p>
          </div>

          <div className="rounded-2xl bg-[#14161f] border border-zinc-800 p-5 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-zinc-800 flex items-center justify-center text-red-400 border border-zinc-700">
              <Swords className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white">Màn Boss: Đại Chiến Tứ Hoàng</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Quyết chiến trùm cuối mỗi đảo với bộ đề ôn tập Giữa kì và Cuối kì, tôi luyện Haki và nhận thưởng huy hiệu tối thượng.
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 text-xs text-zinc-600 font-mono">
        Sản phẩm rèn luyện Toán 7 • Thiết kế theo phong cách Naruto x One Piece
      </footer>
    </div>
  );
};
