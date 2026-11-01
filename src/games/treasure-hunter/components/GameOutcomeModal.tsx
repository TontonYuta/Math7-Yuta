import React from 'react';
import { Trophy, Skull, RotateCcw, ArrowLeft, Coins, Award, Footprints, Clock } from 'lucide-react';
import { GameStatus } from '../types';

interface GameOutcomeModalProps {
  status: GameStatus;
  score: number;
  coins: number;
  stepsTaken: number;
  timeRemaining: number;
  correctAnswersCount: number;
  onRestart: () => void;
  onExit: () => void;
}

export const GameOutcomeModal: React.FC<GameOutcomeModalProps> = ({
  status,
  score,
  coins,
  stepsTaken,
  timeRemaining,
  correctAnswersCount,
  onRestart,
  onExit,
}) => {
  if (status !== 'won' && status !== 'lost') return null;

  const isWon = status === 'won';
  const timeSpentSeconds = 20 * 60 - timeRemaining;
  const mins = Math.floor(timeSpentSeconds / 60);
  const secs = timeSpentSeconds % 60;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in select-none">
      <div className="relative w-full max-w-sm bg-stone-900 rounded-3xl border-4 border-amber-600 shadow-2xl p-6 text-center space-y-5 text-stone-100">
        {/* Animated Trophy / Skull Icon */}
        <div className="flex justify-center">
          <div
            className={`w-20 h-20 rounded-full flex items-center justify-center shadow-2xl border-4 ${
              isWon
                ? 'bg-amber-500/20 text-yellow-400 border-amber-400 animate-bounce'
                : 'bg-stone-800 text-stone-500 border-stone-600'
            }`}
          >
            {isWon ? <Trophy className="w-10 h-10 fill-yellow-400" /> : <Skull className="w-10 h-10" />}
          </div>
        </div>

        {/* Title */}
        <div>
          <h2 className={`text-xl sm:text-2xl font-black tracking-wide ${isWon ? 'text-amber-300' : 'text-stone-300'}`}>
            {isWon ? '👑 CHIẾN THẮNG KHO BÁU! 👑' : '💀 HẾT ĐƯỜNG ĐI! 💀'}
          </h2>
          <p className="text-xs text-stone-400 mt-1 leading-relaxed">
            {isWon
              ? 'Tuyệt đỉnh! Bạn đã dẫn lối thành công cho sóc thợ mỏ mở khóa rương báu.'
              : 'Các lối đi tới kho báu đã bị chặn kín hoặc bạn đã dùng hết số mạng.'}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2.5 py-1 text-left">
          <div className="p-2.5 bg-stone-800/80 rounded-xl border border-stone-700">
            <span className="text-[10px] uppercase font-bold text-stone-400 flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-amber-400" /> Điểm số
            </span>
            <span className="font-mono text-xl font-black text-amber-300 block mt-0.5">{score}</span>
          </div>

          <div className="p-2.5 bg-stone-800/80 rounded-xl border border-stone-700">
            <span className="text-[10px] uppercase font-bold text-stone-400 flex items-center gap-1">
              <Coins className="w-3.5 h-3.5 text-yellow-400" /> Tiền vàng
            </span>
            <span className="font-mono text-xl font-black text-yellow-400 block mt-0.5">+{coins}</span>
          </div>

          <div className="p-2.5 bg-stone-800/80 rounded-xl border border-stone-700">
            <span className="text-[10px] uppercase font-bold text-stone-400 flex items-center gap-1">
              <Footprints className="w-3.5 h-3.5 text-sky-400" /> Bước chân
            </span>
            <span className="font-mono text-base font-bold text-stone-200 block mt-0.5">{stepsTaken} bước</span>
          </div>

          <div className="p-2.5 bg-stone-800/80 rounded-xl border border-stone-700">
            <span className="text-[10px] uppercase font-bold text-stone-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-emerald-400" /> Thời gian
            </span>
            <span className="font-mono text-base font-bold text-stone-200 block mt-0.5">
              {mins}:{secs.toString().padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 pt-1">
          <button
            onClick={onExit}
            className="flex-1 py-2.5 px-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 text-xs"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>Sảnh game</span>
          </button>

          <button
            onClick={onRestart}
            className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-black tracking-wide transition-all shadow-lg flex items-center justify-center gap-1.5 active:scale-95 text-xs"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Chơi lại</span>
          </button>
        </div>
      </div>
    </div>
  );
};
