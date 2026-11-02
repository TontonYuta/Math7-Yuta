import React from 'react';
import { Clock, Heart, ArrowLeft, Volume2, VolumeX, Compass } from 'lucide-react';
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
  coins,
  lives,
  maxLives,
  timeRemaining,
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
    <header className="w-full max-w-[1600px] mx-auto mb-3 sm:mb-6 bg-[#14161f]/95 backdrop-blur-md border border-zinc-800/90 rounded-2xl sm:rounded-3xl px-3 py-2.5 sm:px-6 sm:py-4 shadow-xl select-none">
      <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-4">
        {/* Left: Exit & Mode Title */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={onExit}
            className="flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-xs sm:text-sm font-bold transition-all active:scale-95 border border-zinc-700/80 shadow-sm"
            title="Trở về bản đồ"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-300" />
            <span className="hidden xs:inline sm:inline">Về Bản Đồ</span>
            <span className="xs:hidden sm:hidden">Về</span>
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
            </div>
            <div>
              <h1 className="text-sm sm:text-lg font-black text-white tracking-wide truncate max-w-[160px] xs:max-w-none">
                Mê Cung Hải Trình
              </h1>
              <span className="text-xs font-mono text-zinc-400 hidden sm:block font-medium">
                Giải bài toán thực tế để mở các trạm gác pháo đài
              </span>
            </div>
          </div>
        </div>

        {/* Center/Right: Timer, Lives, Stats */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Hearts / Lives */}
          <div className="flex items-center gap-1 px-2.5 py-1.5 sm:px-3.5 sm:py-2.5 rounded-xl sm:rounded-2xl bg-zinc-850 border border-zinc-750 shadow-inner">
            {Array.from({ length: maxLives }).map((_, i) => (
              <Heart
                key={i}
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                  i < lives ? 'text-red-500 fill-red-500' : 'text-zinc-700'
                }`}
              />
            ))}
          </div>

          {/* Timer */}
          <div className="flex items-center gap-1 px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl bg-zinc-850 border border-zinc-750 text-xs sm:text-sm font-mono font-extrabold text-zinc-200 shadow-inner">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-400" />
            <span className={isLowTime ? 'text-red-400' : 'text-zinc-200'}>
              {formatTime(timeRemaining)}
            </span>
          </div>

          {/* Berries (Beli) */}
          <div className="flex items-center gap-1 px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-mono font-black shadow-inner">
            <span className="text-sm sm:text-base text-amber-400 leading-none">฿</span>
            <span>{coins.toLocaleString()}</span>
          </div>

          {/* Sound Mute */}
          <button
            onClick={toggleMute}
            className="p-1.5 sm:p-2.5 rounded-xl sm:rounded-2xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-400 hover:text-white transition-all active:scale-95 shadow-sm"
            title={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
          >
            {isMuted ? <VolumeX className="w-5 h-5 text-zinc-500" /> : <Volume2 className="w-5 h-5 text-zinc-200" />}
          </button>
        </div>
      </div>
    </header>
  );
};
