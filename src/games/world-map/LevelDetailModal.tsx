import React from 'react';
import { GameLevel } from './types';
import { X, Play, Star, Swords, Grid3X3, Compass } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in select-none">
      <div className="relative w-full max-w-md rounded-2xl bg-[#14161f] border border-zinc-700/90 p-6 shadow-2xl text-zinc-100">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              {worldName}
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-xs font-mono font-bold text-amber-400">
              {isBoss ? 'Trùm Boss' : `Ải ${formattedNum}`}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 min-w-[36px] min-h-[36px] rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition-colors active:scale-95"
            title="Đóng"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Level Icon Emblem */}
        <div className="py-5 flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-200 shadow-inner">
            {isBoss ? (
              <Swords className="w-7 h-7 text-red-400" />
            ) : isPicture ? (
              <Grid3X3 className="w-7 h-7 text-amber-400" />
            ) : (
              <Compass className="w-7 h-7 text-sky-400" />
            )}
          </div>

          <div className="text-center space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-white">
              {isBoss ? level.bossName : level.title}
            </h3>
            <p className="text-xs text-zinc-400 px-2 leading-relaxed">
              {level.subtitle}
            </p>
          </div>
        </div>

        {/* Stars Status Indicator */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-zinc-850 border border-zinc-800">
            {Array.from({ length: 3 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < level.starsEarned
                    ? 'text-amber-400 fill-amber-400'
                    : 'text-zinc-700'
                }`}
              />
            ))}
            <span className="text-xs font-mono font-bold text-zinc-300 ml-1">
              {level.starsEarned}/3 sao
            </span>
          </div>
        </div>

        {/* Goals & Reward Box */}
        <div className="rounded-xl bg-zinc-850/80 border border-zinc-800 p-3.5 space-y-2 mb-6 text-xs text-zinc-300">
          <div className="flex items-center justify-between">
            <span className="text-zinc-500">Hình thức:</span>
            <span className="font-medium text-zinc-200">
              {isBoss
                ? 'Quyết chiến Trùm Arc & Đề thi tổng hợp'
                : isPicture
                ? 'Giải mã 9 ký tự Poneglyph số học'
                : 'Thâm nhập căn cứ hải tặc giải toán đố'}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-zinc-500">Phần thưởng:</span>
            <span className="font-medium text-amber-400 font-mono font-bold">
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
          className="w-full py-3.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95"
        >
          <Play className="w-4 h-4 fill-zinc-950" />
          <span>{isBoss ? 'Bắt đầu khiêu chiến' : 'CHƠI NGAY'}</span>
        </button>
      </div>
    </div>
  );
};
