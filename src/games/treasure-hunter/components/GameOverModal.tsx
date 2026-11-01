import React from 'react';
import { Trophy, Skull, RotateCcw, ArrowLeft, Award, Clock } from 'lucide-react';
import { GameStatus } from '../types';

interface GameOverModalProps {
  status: GameStatus;
  score: number;
  timeRemaining: number;
  questionsAnswered: number;
  onRestart: () => void;
  onExit: () => void;
}

export const GameOverModal: React.FC<GameOverModalProps> = ({
  status,
  score,
  timeRemaining,
  questionsAnswered,
  onRestart,
  onExit,
}) => {
  if (status !== 'won' && status !== 'lost') return null;

  const isWon = status === 'won';
  const timeSpentSeconds = 20 * 60 - timeRemaining;
  const mins = Math.floor(timeSpentSeconds / 60);
  const secs = timeSpentSeconds % 60;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md bg-white dark:bg-stone-900 rounded-3xl border-4 border-amber-600 dark:border-amber-700 shadow-2xl p-6 sm:p-8 text-center space-y-6">
        {/* Banner Graphic */}
        <div className="flex justify-center">
          <div
            className={`w-24 h-24 rounded-full flex items-center justify-center shadow-xl ${
              isWon
                ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-500 border-4 border-amber-400 animate-bounce'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-500 border-4 border-stone-400'
            }`}
          >
            {isWon ? (
              <Trophy className="w-12 h-12 text-yellow-500 fill-yellow-500" />
            ) : (
              <Skull className="w-12 h-12 text-stone-500" />
            )}
          </div>
        </div>

        {/* Title */}
        <div>
          <h2
            className={`text-2xl sm:text-3xl font-black tracking-wide ${
              isWon ? 'text-amber-500 dark:text-amber-400' : 'text-stone-700 dark:text-stone-300'
            }`}
          >
            {isWon ? '🎉 CHÚC MỪNG CHIẾN THẮNG! 🎉' : 'THỬ THÁCH KẾT THÚC'}
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
            {isWon
              ? 'Bạn đã khéo léo dẫn đường cho chú sóc thợ mỏ chạm tay tới rương kho báu!'
              : 'Đường tới kho báu đã bị chặn đứt hoặc bạn đã hết số mạng cho phép.'}
          </p>
        </div>

        {/* Summary Stats Cards */}
        <div className="grid grid-cols-2 gap-3 py-2">
          <div className="p-3 bg-amber-50 dark:bg-stone-800/80 rounded-2xl border border-amber-200 dark:border-stone-700">
            <span className="text-xs uppercase font-bold text-stone-500 dark:text-stone-400 block mb-1">
              Tổng điểm
            </span>
            <span className="font-mono text-2xl font-black text-amber-600 dark:text-amber-400">
              {score}
            </span>
          </div>

          <div className="p-3 bg-stone-50 dark:bg-stone-800/80 rounded-2xl border border-stone-200 dark:border-stone-700">
            <span className="text-xs uppercase font-bold text-stone-500 dark:text-stone-400 block mb-1">
              Thời gian
            </span>
            <span className="font-mono text-xl font-bold text-stone-800 dark:text-stone-200">
              {mins}:{secs.toString().padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={onExit}
            className="flex-1 py-3 px-4 rounded-2xl bg-stone-200 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 font-bold transition-all flex items-center justify-center gap-2 active:scale-95 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Thoát</span>
          </button>

          <button
            onClick={onRestart}
            className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-black tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 active:scale-95 text-sm"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Chơi lại</span>
          </button>
        </div>
      </div>
    </div>
  );
};
