import React from 'react';
import { Clock, Heart, ArrowLeft, Volume2, VolumeX, Coins, Compass } from 'lucide-react';
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

  const isLowTime = timeRemaining < 120;

  return (
    <header className="w-full max-w-4xl mx-auto mb-4 bg-[#14161f] border border-zinc-800 rounded-2xl px-4 py-3 shadow-lg select-none">
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Left: Exit & Mode Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onExit}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-all active:scale-95 border border-zinc-700"
            title="Trở về bản đồ"
          >
            <ArrowLeft className="w-4 h-4 text-zinc-400" />
            <span>Về Bản Đồ</span>
          </button>

          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-sky-400" />
            <div>
              <h1 className="text-sm sm:text-base font-bold text-white tracking-wide">
                Mê Cung Toán Đố
              </h1>
              <span className="text-[10px] font-mono text-zinc-500 hidden sm:block">
                Giải bài toán để mở các chốt chặn
              </span>
            </div>
          </div>
        </div>

        {/* Center/Right: Timer, Lives, Stats */}
        <div className="flex items-center gap-2.5">
          {/* Hearts / Lives */}
          <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-zinc-850 border border-zinc-750">
            {Array.from({ length: maxLives }).map((_, i) => (
              <Heart
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < lives ? 'text-red-500 fill-red-500' : 'text-zinc-700'
                }`}
              />
            ))}
          </div>

          {/* Timer */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-850 border border-zinc-750 text-xs font-mono font-bold text-zinc-200">
            <Clock className="w-3.5 h-3.5 text-zinc-400" />
            <span className={isLowTime ? 'text-red-400' : 'text-zinc-200'}>
              {formatTime(timeRemaining)}
            </span>
          </div>

          {/* Berries (Beli) */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold shadow-sm">
            <span className="text-amber-400 font-extrabold text-sm leading-none">฿</span>
            <span>{coins.toLocaleString()}</span>
          </div>

          {/* Sound Mute */}
          <button
            onClick={toggleMute}
            className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-400 transition-all active:scale-95"
            title={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-zinc-500" /> : <Volume2 className="w-3.5 h-3.5 text-zinc-300" />}
          </button>
        </div>
      </div>
    </header>
  );
};
