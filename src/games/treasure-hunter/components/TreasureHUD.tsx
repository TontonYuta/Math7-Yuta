import React from 'react';
import { Clock, Heart, Award, RotateCcw, ArrowLeft, Volume2, VolumeX, Coins, Flame } from 'lucide-react';
import { soundFx } from '../../../sound/soundFx';

interface TreasureHUDProps {
  score: number;
  coins: number;
  lives: number;
  maxLives: number;
  timeRemaining: number;
  streak: number;
  onRestart: () => void;
  onExit: () => void;
}

export const TreasureHUD: React.FC<TreasureHUDProps> = ({
  score,
  coins,
  lives,
  maxLives,
  timeRemaining,
  streak,
  onRestart,
  onExit,
}) => {
  const [isMuted, setIsMuted] = React.useState(!soundFx.isSoundEnabled());

  const toggleMute = () => {
    const newState = soundFx.toggleSound();
    setIsMuted(!newState);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const isLowTime = timeRemaining < 180;

  return (
    <header className="w-full max-w-4xl mx-auto mb-4 bg-gradient-to-r from-amber-900 via-stone-900 to-amber-950 border-4 border-amber-700/60 rounded-3xl p-3 sm:p-4 shadow-2xl text-amber-50 select-none">
      <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-6">
        {/* Left: Exit & Arcade Badge */}
        <div className="flex items-center gap-3">
          <button
            onClick={onExit}
            className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-stone-800/80 hover:bg-stone-700 border-2 border-stone-600 text-stone-200 text-xs sm:text-sm font-black transition-all shadow-md active:scale-95"
            title="Trở về Sảnh Trò Chơi"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Sảnh Game</span>
          </button>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl animate-bounce">🏴‍☠️</span>
              <h1 className="text-lg sm:text-2xl font-black tracking-wider text-amber-300 drop-shadow">
                ĐI TÌM KHO BÁU
              </h1>
            </div>
            <p className="text-[11px] text-amber-200/70 font-semibold hidden md:block">
              Vượt mê cung • Vượt chướng ngại vật
            </p>
          </div>
        </div>

        {/* Center: Timer & Lives */}
        <div className="flex items-center gap-3 sm:gap-5 bg-black/40 px-3.5 py-1.5 rounded-2xl border-2 border-amber-800/50">
          {/* Timer */}
          <div className="flex items-center gap-1.5">
            <Clock className={`w-4 h-4 sm:w-5 sm:h-5 ${isLowTime ? 'text-red-400 animate-pulse' : 'text-amber-400'}`} />
            <span className={`font-mono text-lg sm:text-2xl font-black ${isLowTime ? 'text-red-400 animate-pulse' : 'text-amber-100'}`}>
              {formatTime(timeRemaining)}
            </span>
          </div>

          <div className="h-6 w-px bg-amber-700/40" />

          {/* Lives */}
          <div className="flex items-center gap-1" title={`${lives} tim còn lại`}>
            {Array.from({ length: maxLives }).map((_, i) => (
              <Heart
                key={i}
                className={`w-5 h-5 sm:w-6 sm:h-6 transition-all ${
                  i < lives
                    ? 'text-red-500 fill-red-500 drop-shadow-md scale-100'
                    : 'text-stone-700 fill-stone-800/80 opacity-30 scale-90'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right: Coins, Score, Audio & Restart */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Streak indicator if >= 2 */}
          {streak >= 2 && (
            <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-xl bg-orange-950/80 border border-orange-500/60 text-orange-400 text-xs font-black animate-pulse">
              <Flame className="w-4 h-4 fill-orange-500 text-orange-500" />
              <span>x{streak}</span>
            </div>
          )}

          {/* Coins */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-yellow-950/60 border border-yellow-500/40 text-yellow-300">
            <Coins className="w-4 h-4 text-yellow-400" />
            <span className="font-mono text-xs sm:text-sm font-black">{coins}</span>
          </div>

          {/* Score */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-950/80 border border-amber-500/40 text-amber-200">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="font-mono text-base sm:text-lg font-black text-amber-300">{score}</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={toggleMute}
            className="p-2 rounded-xl bg-stone-800/80 hover:bg-stone-700 border border-stone-600 text-amber-400 transition-colors shadow-xs active:scale-95"
            title={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-stone-500" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
          </button>

          {/* Replay Button */}
          <button
            onClick={onRestart}
            className="p-2 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 hover:from-amber-500 hover:to-amber-700 border-2 border-amber-500/60 text-amber-100 font-bold transition-all shadow-md active:scale-95"
            title="Tạo màn mê cung mới"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
