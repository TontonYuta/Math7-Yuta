import React from 'react';
import { Compass, Volume2, VolumeX, Coins, Star, BarChart3, ChevronRight, Anchor } from 'lucide-react';
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
    <div className="min-h-screen bg-transparent text-zinc-100 p-4 sm:p-6 lg:p-10 select-none flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full space-y-8">
        {/* Top Navigation Header */}
        <header className="flex flex-wrap items-center justify-between gap-4 bg-[#121522]/90 backdrop-blur-md border border-zinc-800/90 rounded-3xl px-6 py-4 shadow-xl">
          {/* Brand & Identity */}
          <div className="flex items-center gap-4">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 via-zinc-900 to-red-500/20 border-2 border-amber-400/60 flex items-center justify-center font-mono font-black text-amber-400 text-2xl shadow-[0_0_20px_rgba(245,158,11,0.35)] shrink-0">
              🏴‍☠️
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <h2 className="text-base sm:text-xl font-black text-white tracking-wide">
                  Đại Hải Trình Toán 7
                </h2>
                <span className="px-2.5 py-0.5 rounded-md text-xs font-mono uppercase bg-amber-400/10 border border-amber-400/40 text-amber-300 font-bold">
                  One Piece Grand Line
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 mt-0.5 font-medium">
                10 Vùng biển Tân Thế Giới • Thu thập Khối Poneglyph & Truyền Thuyết Joy Boy
              </p>
            </div>
          </div>

          {/* Player Stats & Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDashboard}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-zinc-800/90 hover:bg-zinc-700 border border-zinc-700/80 text-zinc-100 text-sm font-bold transition-all active:scale-95 shadow-md"
            >
              <BarChart3 className="w-4 h-4 text-amber-400" />
              <span>Kho Báu & Tranh</span>
            </button>

            {/* Total Stars Counter */}
            <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-zinc-850/90 border border-zinc-700 text-amber-400 font-mono text-sm font-extrabold shadow-inner">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{totalStars}</span>
            </div>

            {/* Berries (Beli) Counter */}
            <div className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-sm font-extrabold shadow-inner">
              <span className="text-amber-400 font-black text-base">฿</span>
              <span>{playerCoins.toLocaleString()}</span>
            </div>

            {/* Sound Toggle Button */}
            <button
              onClick={toggleSound}
              className="p-2.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-400 hover:text-white transition-all active:scale-95 shadow-md"
              title={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
            >
              {isMuted ? <VolumeX className="w-5 h-5 text-zinc-500" /> : <Volume2 className="w-5 h-5 text-zinc-200" />}
            </button>
          </div>
        </header>

        {/* Hero Mission Card with One Piece Wallpaper Accent */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#161a29]/95 via-[#111420]/95 to-[#0b0d16]/95 border border-zinc-800/90 p-8 sm:p-12 lg:p-14 shadow-2xl backdrop-blur-md">
          {/* Subtle Right Background Artwork */}
          <div className="absolute -right-4 -bottom-4 w-[520px] h-full opacity-30 pointer-events-none overflow-hidden rounded-3xl hidden lg:block">
            <img
              src="/assets/onepiece/op_01_east_blue.jpg"
              alt="Straw Hat Pirates East Blue"
              className="w-full h-full object-cover object-top filter contrast-125 saturate-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111420] via-[#111420]/60 to-transparent" />
          </div>

          <div className="max-w-2xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-mono font-bold tracking-wide">
              <Anchor className="w-4 h-4 text-amber-400" />
              <span>HẢI TRÌNH 10 CHUYÊN ĐỀ TOÁN 7 CHUẨN GDPT 2018</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Giương Buồm Chinh Phục Đại Hải Trình & Kho Báu One Piece
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed font-normal">
              Giải mã các khối đá Poneglyph số học huyền thoại, đột kích căn cứ tiền đồn bằng bài toán thực tế và thách thức Trùm Tứ Hoàng bằng các đề thi toán tổng hợp chuẩn hóa.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onStartAdventure}
                className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 font-black text-base sm:text-lg flex items-center gap-3.5 shadow-2xl shadow-amber-500/20 transition-all active:scale-95"
              >
                <Compass className="w-6 h-6 text-zinc-950 group-hover:rotate-45 transition-transform" />
                <span>Mở Hải Đồ Thế Giới & Khởi Hành</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* 3 Core Tactical Game Mechanics Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl bg-[#141624]/90 backdrop-blur-md border border-zinc-800/90 p-6 sm:p-7 space-y-3.5 shadow-xl hover:border-amber-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-400 border border-amber-500/30 text-2xl shadow-sm">
              📜
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white">Ải Lẻ: Giải Mã Poneglyph</h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Tính toán số học chuẩn xác trên lưới 9 ô để bẻ gãy phong ấn cổ đại và mở khóa kiệt tác tranh One Piece huyền thoại.
            </p>
          </div>

          <div className="rounded-3xl bg-[#141624]/90 backdrop-blur-md border border-zinc-800/90 p-6 sm:p-7 space-y-3.5 shadow-xl hover:border-blue-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/30 text-2xl shadow-sm">
              🏯
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white">Ải Chẵn: Mê Cung Thâm Nhập</h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Điều khiển hoa tiêu luồn lách qua mê cung tiền đồn pháo đài, giải quyết các bài toán đố thực tế và thu thập rương kho báu.
            </p>
          </div>

          <div className="rounded-3xl bg-[#141624]/90 backdrop-blur-md border border-zinc-800/90 p-6 sm:p-7 space-y-3.5 shadow-xl hover:border-red-500/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-400 border border-red-500/30 text-2xl shadow-sm">
              ⚔️
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white">Màn Boss: Đại Chiến Tứ Hoàng</h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Quyết chiến trùm cuối mỗi Saga với bộ đề ôn tập Giữa kì và Cuối kì, tôi luyện Haki và nhận thưởng tiền truy nã khổng lồ.
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-xs sm:text-sm text-zinc-400 font-mono">
        Sản phẩm rèn luyện Toán 7 • Chủ đề Đại Hải Trình One Piece (Manga Eiichiro Oda)
      </footer>
    </div>
  );
};
