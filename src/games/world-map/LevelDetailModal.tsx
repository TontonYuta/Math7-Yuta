import React from 'react';
import { GameLevel } from './types';
import { X, Play, Star, Footprints, Image, Swords } from 'lucide-react';

interface LevelDetailModalProps {
  level: GameLevel;
  worldName: string;
  onClose: () => void;
  onStartLevel: (level: GameLevel, mode: 'treasure' | 'picture' | 'boss') => void;
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
        className={`relative w-full max-w-lg rounded-3xl p-6 text-center shadow-2xl border-4 transition-transform scale-100 ${
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
        <div className="pt-2 pb-3">
          <div
            className={`w-20 h-20 mx-auto rounded-3xl flex items-center justify-center text-4xl shadow-2xl border-4 ${
              isBoss
                ? 'bg-gradient-to-br from-red-600 to-amber-700 border-red-300 animate-pulse'
                : 'bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 border-amber-200 shadow-[0_8px_0_#92400e]'
            }`}
          >
            {isBoss ? '👑' : level.levelNumber}
          </div>
        </div>

        {/* Level Name & Subtitle */}
        <div className="space-y-1 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
            {worldName} • {isBoss ? 'MÀN BOSS TỔNG HỢP' : `ẢI ${level.levelNumber}`}
          </span>
          <h3 className="text-lg sm:text-xl font-black text-amber-100">
            {isBoss ? level.bossName : level.title}
          </h3>
          <p className="text-xs text-stone-300 px-4">
            {level.subtitle || 'Giải toán chinh phục 3 sao danh giá!'}
          </p>
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

        {/* Action Buttons: Dual Game Modes for Regular Levels or Boss Arena */}
        {isBoss ? (
          <button
            onClick={() => {
              onClose();
              onStartLevel(level, 'boss');
            }}
            className="w-full py-4 rounded-2xl text-white font-black text-base sm:text-lg tracking-wider uppercase shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:to-amber-500 shadow-[0_8px_0_#7f1d1d]"
          >
            <Swords className="w-6 h-6" />
            <span>KHIÊU CHIẾN BOSS NGAY</span>
          </button>
        ) : (
          <div className="space-y-2.5">
            <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-1">
              Chọn chế độ trải nghiệm cho màn này:
            </div>

            {/* Mode 1: Bức tranh bí ẩn (Tính toán số học) */}
            <button
              onClick={() => {
                onClose();
                onStartLevel(level, 'picture');
              }}
              className="w-full p-3.5 rounded-2xl text-left bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-stone-950 font-black shadow-lg flex items-center justify-between active:scale-98 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🖼️</span>
                <div>
                  <h4 className="text-sm font-black text-stone-950 uppercase tracking-wide">
                    BỨC TRANH BÍ ẨN
                  </h4>
                  <p className="text-[11px] text-amber-950 font-semibold">
                    Chuyên trị bài tính toán số học & Lật mở kiệt tác
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-xl bg-stone-950/20 text-xs font-black text-stone-950">
                Chơi →
              </span>
            </button>

            {/* Mode 2: Vượt chướng ngại vật (Toán đố lời văn) */}
            <button
              onClick={() => {
                onClose();
                onStartLevel(level, 'treasure');
              }}
              className="w-full p-3.5 rounded-2xl text-left bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black shadow-lg flex items-center justify-between active:scale-98 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🐿️</span>
                <div>
                  <h4 className="text-sm font-black text-white uppercase tracking-wide">
                    VƯỢT CHƯỚNG NGẠI VẬT
                  </h4>
                  <p className="text-[11px] text-emerald-100 font-medium">
                    Chuyên trị toán đố có lời văn & Dẫn sóc tìm kho báu
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-xl bg-black/20 text-xs font-black text-white">
                Chơi →
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
