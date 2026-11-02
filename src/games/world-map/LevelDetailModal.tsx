import React from 'react';
import { GameLevel } from './types';
import { X, Play, Star, Swords } from 'lucide-react';
import { AncientPoneglyphNode, OnePieceTreasureChest } from './onePieceAssets';

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
  const formattedNum = level.levelNumber.toString().padStart(2, '0');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in select-none">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#14161f] border border-zinc-700/90 p-6 sm:p-8 shadow-2xl text-zinc-100">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2.5">
            <span className="text-xs sm:text-sm font-mono text-zinc-400 font-bold uppercase tracking-wider truncate max-w-[200px]">
              {worldName}
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-xs sm:text-sm font-mono font-black text-amber-400">
              {isBoss ? 'Trùm Arc' : `Ải ${formattedNum}`}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition-colors active:scale-95 shadow"
            title="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Level Icon Emblem */}
        <div className="py-6 flex flex-col items-center gap-4">
          <div className="w-20 h-20 rounded-3xl bg-zinc-800/90 border border-zinc-700 flex items-center justify-center text-zinc-200 shadow-inner p-3">
            {isBoss ? (
              <Swords className="w-10 h-10 text-red-400" />
            ) : isPicture ? (
              <AncientPoneglyphNode className="w-12 h-12" />
            ) : (
              <OnePieceTreasureChest className="w-12 h-12" />
            )}
          </div>

          <div className="text-center space-y-1.5">
            <h3 className="text-lg sm:text-xl font-black text-white">
              {level.title}
            </h3>
            <p className="text-sm text-zinc-300 px-2 leading-relaxed font-medium">
              {level.subtitle}
            </p>
          </div>
        </div>

        {/* Stars Status Indicator */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-2xl bg-zinc-850 border border-zinc-800 shadow-inner">
            {Array.from({ length: 3 }).map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < level.starsEarned
                    ? 'text-amber-400 fill-amber-400'
                    : 'text-zinc-700'
                }`}
              />
            ))}
            <span className="text-sm font-mono font-black text-zinc-200 ml-1">
              {level.starsEarned}/3 sao
            </span>
          </div>
        </div>

        {/* Goals & Reward Box */}
        <div className="rounded-2xl bg-zinc-850/80 border border-zinc-800 p-4 space-y-2.5 mb-6 text-sm text-zinc-300">
          <div className="flex items-center justify-between">
            <span className="text-zinc-400">Hình thức:</span>
            <span className="font-semibold text-white">
              {isBoss
                ? 'Đại chiến Trùm Arc & Đề thi chuẩn'
                : isPicture
                ? 'Giải mã lưới 9 ô Poneglyph số học'
                : 'Vượt mê cung tiền đồn giải toán đố'}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-zinc-400">Phần thưởng:</span>
            <span className="font-bold text-amber-300 font-mono">
              {isBoss ? '+150 ฿ & Mở Khóa Đảo Mới' : '+60 ฿ & Mở Khóa Tranh'}
            </span>
          </div>
        </div>

        {/* CTA Launch Button */}
        <button
          onClick={() => {
            onClose();
            onStartLevel(level);
          }}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 font-black text-base uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 shadow-xl active:scale-95"
        >
          <Play className="w-5 h-5 fill-zinc-950" />
          <span>{isBoss ? 'Bắt đầu khiêu chiến' : 'CHƠI NGAY'}</span>
        </button>
      </div>
    </div>
  );
};
