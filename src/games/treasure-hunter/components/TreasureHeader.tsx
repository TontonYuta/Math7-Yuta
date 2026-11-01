import React from 'react';
import { Clock, Heart, Award, RotateCcw, ArrowLeft, Volume2, Shield } from 'lucide-react';

interface TreasureHeaderProps {
  score: number;
  lives: number;
  maxLives: number;
  timeRemaining: number;
  onRestart: () => void;
  onExit: () => void;
}

export const TreasureHeader: React.FC<TreasureHeaderProps> = ({
  score,
  lives,
  maxLives,
  timeRemaining,
  onRestart,
  onExit,
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const isLowTime = timeRemaining < 180; // under 3 minutes

  return (
    <div className="w-full bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 border-b-4 border-amber-950 text-amber-50 shadow-lg px-4 py-3 rounded-2xl mb-6">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Left: Back & Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onExit}
            className="p-2 rounded-xl bg-amber-950/40 hover:bg-amber-950/70 border border-amber-600/40 transition-colors flex items-center gap-1.5 text-sm font-semibold"
            title="Thoát trò chơi"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Trở về</span>
          </button>
          <div>
            <h1 className="text-xl sm:text-2xl font-black tracking-wide text-amber-200 drop-shadow flex items-center gap-2">
              <span>🏴‍☠️</span>
              <span>ĐI TÌM KHO BÁU</span>
            </h1>
            <p className="text-xs text-amber-300/80 font-medium hidden sm:block">
              Giải toán • Vượt mê cung • Chinh phục kho báu
            </p>
          </div>
        </div>

        {/* Center: Timer & Lives */}
        <div className="flex items-center gap-4 sm:gap-6 bg-black/25 px-4 py-2 rounded-xl border border-amber-500/20">
          {/* Timer */}
          <div className="flex items-center gap-2">
            <Clock className={`w-5 h-5 ${isLowTime ? 'text-red-400 animate-pulse' : 'text-amber-300'}`} />
            <span
              className={`font-mono text-xl sm:text-2xl font-black tracking-wider ${
                isLowTime ? 'text-red-400 animate-pulse' : 'text-amber-100'
              }`}
            >
              {formatTime(timeRemaining)}
            </span>
          </div>

          <div className="h-6 w-px bg-amber-500/30" />

          {/* Lives (Hearts) */}
          <div className="flex items-center gap-1.5" title={`${lives} mạng còn lại`}>
            {Array.from({ length: maxLives }).map((_, i) => (
              <Heart
                key={i}
                className={`w-6 h-6 transition-transform ${
                  i < lives
                    ? 'text-red-500 fill-red-500 drop-shadow'
                    : 'text-stone-600 fill-stone-700/50 opacity-40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right: Score & Reset */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-amber-950/60 px-4 py-2 rounded-xl border border-amber-500/30">
            <Award className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-xs uppercase tracking-wider text-amber-300 font-bold">Điểm:</span>
            <span className="font-mono text-2xl font-black text-yellow-300">{score}</span>
          </div>

          <button
            onClick={onRestart}
            className="p-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 active:scale-95 text-amber-950 font-bold shadow-md transition-all"
            title="Tạo màn mới"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
