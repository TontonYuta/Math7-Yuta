import React from 'react';
import { Compass, Image, Sparkles, Trophy, Award, Flame, Play, Volume2, VolumeX, Shield, Coins, Star } from 'lucide-react';
import { soundFx } from '../../sound/soundFx';

interface GameLobbyProps {
  onSelectGame: (gameId: 'treasure' | 'picture' | 'frog') => void;
  playerCoins: number;
}

export const GameLobby: React.FC<GameLobbyProps> = ({
  onSelectGame,
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
                  Nhà Thám Hiểm Toán 7
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-[10px] text-amber-300 font-bold uppercase">
                  Violympic
                </span>
              </div>
              <p className="text-xs text-stone-400 font-medium">
                Đấu trường học Toán qua trò chơi
              </p>
            </div>
          </div>

          {/* Stats & Controls */}
          <div className="flex items-center gap-3">
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
              <Sparkles className="w-3.5 h-3.5" /> Sân chơi trí tuệ Violympic Toán 7
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-amber-100 tracking-tight leading-snug drop-shadow-md">
              HỌC TOÁN 7 QUA TRÒ CHƠI
            </h1>
            <p className="text-sm sm:text-base text-amber-200/80 leading-relaxed font-medium">
              Khám phá thế giới toán học sinh động qua các màn chơi vượt mê cung, tìm kiếm kho báu và mở khóa những bức tranh bí ẩn!
            </p>
          </div>
          <div className="absolute right-4 bottom-2 text-7xl sm:text-9xl opacity-20 select-none pointer-events-none">
            🏴‍☠️
          </div>
        </section>

        {/* Game Arcade Grid */}
        <section className="space-y-4">
          <h2 className="text-lg font-black tracking-wide text-amber-300 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-400" />
            <span>DANH SÁCH TRÒ CHƠI</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Card 1: Vượt Chướng Ngại Vật (Đi Tìm Kho Báu) */}
            <div className="group relative rounded-3xl bg-gradient-to-br from-stone-900 via-stone-900/90 to-amber-950/40 border-4 border-amber-500 hover:border-amber-400 p-6 shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 text-white flex items-center justify-center text-2xl shadow-lg border-2 border-amber-400 group-hover:scale-110 transition-transform">
                    <span>🏴‍☠️</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500 text-stone-950 text-xs font-black uppercase tracking-wider shadow">
                    SẴN SÀNG CHƠI
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-amber-200 group-hover:text-amber-100 transition">
                    Vượt Chướng Ngại Vật (Đi Tìm Kho Báu)
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
                    Dẫn đường cho chú sóc thợ mỏ vượt mê cung 8x8, tránh bụi cây cản lối và giải các câu đố Toán 7 để mở rương kho báu hoàng gia.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 text-xs font-semibold text-amber-300/80">
                  <span className="px-2.5 py-1 rounded-xl bg-stone-800/80 border border-stone-700">⏱️ 20 phút</span>
                  <span className="px-2.5 py-1 rounded-xl bg-stone-800/80 border border-stone-700">❤️ 3 mạng sống</span>
                  <span className="px-2.5 py-1 rounded-xl bg-stone-800/80 border border-stone-700">⭐ Đố vui Toán 7</span>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-stone-800">
                <button
                  onClick={() => onSelectGame('treasure')}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-stone-950 font-black tracking-wider uppercase text-sm sm:text-base shadow-xl flex items-center justify-center gap-2 transition-all active:scale-95 group-hover:shadow-amber-500/30"
                >
                  <Play className="w-5 h-5 fill-stone-950" />
                  <span>VÀO CHƠI NGAY</span>
                </button>
              </div>
            </div>

            {/* Card 2: Bức Tranh Bí Ẩn */}
            <div className="group relative rounded-3xl bg-gradient-to-br from-stone-900 via-stone-900/90 to-amber-950/40 border-4 border-amber-500 hover:border-amber-400 p-6 shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-600 text-stone-950 flex items-center justify-center text-2xl shadow-lg border-2 border-amber-300 group-hover:scale-110 transition-transform">
                    <span>🖼️</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500 text-stone-950 text-xs font-black uppercase tracking-wider shadow">
                    SẴN SÀNG CHƠI
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-amber-200 group-hover:text-amber-100 transition">
                    Bức Tranh Bí Ẩn (Mysterious Picture)
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
                    Chuyên trị các phép tính toán số học siêu tốc. Giải đúng từng phép tính để lật mở 9 mảnh ghép của những bức tranh phong cảnh và kiệt tác kỳ vĩ!
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 text-xs font-semibold text-amber-300/80">
                  <span className="px-2.5 py-1 rounded-xl bg-stone-800/80 border border-stone-700">⏱️ 20 phút</span>
                  <span className="px-2.5 py-1 rounded-xl bg-stone-800/80 border border-stone-700">❤️ 3 mạng sống</span>
                  <span className="px-2.5 py-1 rounded-xl bg-stone-800/80 border border-stone-700">🧩 9 Mảnh ghép 3x3</span>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-stone-800">
                <button
                  onClick={() => onSelectGame('picture')}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 text-stone-950 font-black tracking-wider uppercase text-sm sm:text-base shadow-xl flex items-center justify-center gap-2 transition-all active:scale-95 group-hover:shadow-amber-500/30"
                >
                  <Play className="w-5 h-5 fill-stone-950" />
                  <span>VÀO CHƠI NGAY</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
