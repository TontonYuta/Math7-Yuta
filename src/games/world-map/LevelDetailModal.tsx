import React from 'react';
import { GameLevel } from './types';
import { X, Play, Star, Trophy, Sparkles, Swords } from 'lucide-react';

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
  const isBoss = !!level.isBoss;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in select-none">
      <div
        className={`relative w-full max-w-md rounded-3xl p-6 text-center shadow-2xl border-4 transition-transform scale-100 ${
          isBoss
            ? 'bg-gradient-to-b from-stone-900 via-red-950 to-stone-950 border-red-500 shadow-[0_0_50px_rgba(239,68,68,0.3)]'
            : 'bg-gradient-to-b from-stone-900 via-amber-950 to-stone-950 border-amber-500 shadow-[0_0_50px_rgba(245,158,11,0.3)]'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-stone-850 hover:bg-stone-750 text-stone-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Level Emblem / Avatar */}
        <div className="pt-2 pb-4">
          <div
            className={`w-24 h-24 mx-auto rounded-3xl flex items-center justify-center text-5xl shadow-2xl border-4 ${
              isBoss
                ? 'bg-gradient-to-br from-red-600 to-amber-700 border-red-300 animate-pulse'
                : 'bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 border-amber-200 shadow-[0_8px_0_#92400e]'
            }`}
          >
            {isBoss ? '👑' : level.levelNumber}
          </div>
        </div>

        {/* Level Name & Subtitle */}
        <div className="space-y-1 mb-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
            {worldName} • {isBoss ? 'MÀN BOSS' : `ẢI ${level.levelNumber}`}
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-amber-100">
            {isBoss ? level.bossName : level.title}
          </h3>
          <p className="text-xs text-stone-300 px-4">
            {level.subtitle || 'Giải đáp các thử thách toán học để giành 3 sao danh giá!'}
          </p>
        </div>

        {/* Candy Crush 3 Stars Display */}
        <div className="py-3 px-6 mx-auto inline-flex items-center gap-3 bg-stone-950/80 rounded-2xl border border-stone-800 mb-5">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <Star
                className={`w-8 h-8 filter drop-shadow ${
                  i < level.starsEarned
                    ? 'text-yellow-400 fill-yellow-400 scale-110 animate-bounce'
                    : 'text-stone-700 fill-stone-800'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Goals & Rewards */}
        <div className="bg-stone-850/80 rounded-2xl p-3 border border-stone-700/60 text-left text-xs space-y-1.5 mb-6 text-stone-300">
          <div className="flex items-center justify-between">
            <span className="text-stone-400">Nhiệm vụ:</span>
            <span className="font-bold text-amber-300">
              {isBoss ? 'Hạ gục Boss toàn diện' : 'Mở đường đến rương kho báu'}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-stone-400">Phần thưởng:</span>
            <span className="font-bold text-yellow-400">🪙 +50 ~ +100 Xu</span>
          </div>
        </div>

        {/* Juicy Play Button */}
        <button
          onClick={() => {
            onClose();
            onStartLevel(level);
          }}
          className={`w-full py-4 rounded-2xl text-white font-black text-base sm:text-lg tracking-wider uppercase shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all ${
            isBoss
              ? 'bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:to-amber-500 shadow-[0_8px_0_#7f1d1d]'
              : 'bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-[0_8px_0_#064e3b]'
          }`}
        >
          {isBoss ? <Swords className="w-6 h-6" /> : <Play className="w-6 h-6 fill-white" />}
          <span>{isBoss ? 'KHIÊU CHIẾN BOSS NGAY' : 'CHƠI NGAY'}</span>
        </button>
      </div>
    </div>
  );
};
