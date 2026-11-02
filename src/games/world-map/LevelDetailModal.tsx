import React from 'react';
import { GameLevel } from './types';
import { X, Play, Star, Swords, Sparkles, Image, Footprints } from 'lucide-react';

interface LevelDetailModalProps {
  level: GameLevel;
  worldName: string;
  onClose: () => void;
  onStartLevel: (level: GameLevel) => void;
}

export const LevelDetailModal: React.FC<LevelDetailModalProps> = ({
  level,
  worldName,
  onClose,
  onStartLevel,
}) => {
  const isBoss = level.gameType === 'boss' || !!level.isBoss;
  const isPicture = level.gameType === 'picture';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in select-none">
      <div
        className={`relative w-full max-w-md rounded-3xl p-6 text-center shadow-2xl border-4 transition-transform scale-100 ${
          isBoss
            ? 'bg-gradient-to-b from-stone-900 via-red-950 to-stone-950 border-red-500 shadow-[0_0_50px_rgba(239,68,68,0.3)]'
            : isPicture
            ? 'bg-gradient-to-b from-stone-900 via-amber-950 to-stone-950 border-amber-500 shadow-[0_0_50px_rgba(245,158,11,0.3)]'
            : 'bg-gradient-to-b from-stone-900 via-emerald-950 to-stone-950 border-emerald-500 shadow-[0_0_50px_rgba(16,185,129,0.3)]'
        }`}
      >
        {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-2xl bg-stone-850 hover:bg-stone-750 text-stone-300 hover:text-white transition-colors active:scale-90"
            title="Đóng"
          >
            <X className="w-5 h-5" />
          </button>

        {/* Level Emblem / Avatar */}
        <div className="pt-2 pb-3">
          <div
            className={`w-20 h-20 mx-auto rounded-3xl flex items-center justify-center text-4xl shadow-2xl border-4 ${
              isBoss
                ? 'bg-gradient-to-br from-red-600 to-amber-700 border-red-300 animate-pulse'
                : isPicture
                ? 'bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 border-amber-200 shadow-[0_8px_0_#92400e]'
                : 'bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700 border-emerald-200 shadow-[0_8px_0_#064e3b]'
            }`}
          >
            {isBoss ? '👑' : isPicture ? '🖼️' : '🐿️'}
          </div>
        </div>

        {/* Level Name & Subtitle */}
        <div className="space-y-1 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
            {worldName} • {isBoss ? 'MÀN BOSS' : `ẢI ${level.levelNumber}`}
          </span>
          <h3 className="text-lg sm:text-xl font-black text-amber-100">
            {isBoss ? level.bossName : level.title}
          </h3>
          <p className="text-xs text-stone-300 px-2">
            {level.subtitle}
          </p>
        </div>

        {/* Mode Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900/90 border border-stone-700 text-xs font-bold text-amber-300 mb-4 shadow-sm">
          {isBoss ? (
            <Swords className="w-3.5 h-3.5 text-red-400" />
          ) : isPicture ? (
            <Image className="w-3.5 h-3.5 text-yellow-400" />
          ) : (
            <Footprints className="w-3.5 h-3.5 text-emerald-400" />
          )}
          <span>
            {isBoss
              ? 'Đấu Trường Đề Tổng Hợp'
              : isPicture
              ? 'Thử Thách: Tính Toán Số Học'
              : 'Thử Thách: Toán Đố Lời Văn & Mê Cung'}
          </span>
        </div>

        {/* Candy Crush 3 Stars Display */}
        <div className="py-2.5 px-6 mx-auto inline-flex items-center gap-2 bg-stone-950/80 rounded-2xl border border-stone-800 mb-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Star
              key={i}
              className={`w-7 h-7 filter drop-shadow ${
                i < level.starsEarned
                  ? 'text-yellow-400 fill-yellow-400 scale-110 animate-bounce'
                  : 'text-stone-700 fill-stone-800'
              }`}
            />
          ))}
        </div>

        {/* Goals & Rewards */}
        <div className="bg-stone-850/80 rounded-2xl p-3 border border-stone-700/60 text-left text-xs space-y-1.5 mb-5 text-stone-300">
          <div className="flex items-center justify-between">
            <span className="text-stone-400">Mục tiêu:</span>
            <span className="font-bold text-amber-300">
              {isBoss
                ? 'Hạ gục Boss để hoàn thành đề tổng hợp'
                : isPicture
                ? 'Lật mở 9 mảnh ghép kiệt tác'
                : 'Dẫn sóc vượt mê cung tới rương'}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-stone-400">Phần thưởng:</span>
            <span className="font-bold text-yellow-400">🪙 +50 ~ +100 Xu {isPicture ? '• 🖼️ Tranh sưu tập' : ''}</span>
          </div>
        </div>

        {/* Big Juicy Play Button */}
        <button
          onClick={() => {
            onClose();
            onStartLevel(level);
          }}
          className={`w-full py-4 rounded-2xl text-white font-black text-base sm:text-lg tracking-wider uppercase shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all ${
            isBoss
              ? 'bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:to-amber-500 shadow-[0_8px_0_#7f1d1d]'
              : isPicture
              ? 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 text-stone-950 font-black shadow-[0_8px_0_#92400e]'
              : 'bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-[0_8px_0_#064e3b]'
          }`}
        >
          {isBoss ? <Swords className="w-6 h-6" /> : <Play className="w-6 h-6 fill-current" />}
          <span>{isBoss ? 'KHIÊU CHIẾN BOSS NGAY' : 'CHƠI NGAY'}</span>
        </button>
      </div>
    </div>
  );
};
