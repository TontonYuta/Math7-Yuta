import React from 'react';
import { useTreasureGame } from './useTreasureGame';
import { TreasureHeader } from './components/TreasureHeader';
import { MazeGrid } from './components/MazeGrid';
import { QuestionModal } from './components/QuestionModal';
import { GameOverModal } from './components/GameOverModal';
import { Question } from '../../types/exam';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface TreasureHunterGameProps {
  questionsPool: Question[];
  onExit: () => void;
}

export const TreasureHunterGame: React.FC<TreasureHunterGameProps> = ({
  questionsPool,
  onExit,
}) => {
  const {
    gameState,
    feedback,
    handleCellClick,
    submitAnswer,
    closeQuestionModal,
    restartGame,
  } = useTreasureGame(questionsPool);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col p-3 sm:p-6 select-none">
      {/* Top Header */}
      <TreasureHeader
        score={gameState.score}
        lives={gameState.lives}
        maxLives={gameState.maxLives}
        timeRemaining={gameState.timeRemaining}
        onRestart={restartGame}
        onExit={onExit}
      />

      {/* Floating Status Feedback Bar */}
      {feedback.type && (
        <div className="max-w-2xl mx-auto w-full mb-4 transition-all">
          <div
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border text-sm font-bold shadow-md animate-fade-in ${
              feedback.type === 'correct'
                ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-200'
                : 'bg-rose-950/80 border-rose-500/50 text-rose-200'
            }`}
          >
            {feedback.type === 'correct' ? (
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
            )}
            <span>{feedback.message}</span>
          </div>
        </div>
      )}

      {/* Central Maze Board */}
      <div className="flex-1 flex items-center justify-center">
        <MazeGrid
          grid={gameState.grid}
          playerPos={gameState.playerPos}
          chestPos={gameState.chestPos}
          onCellClick={handleCellClick}
        />
      </div>

      {/* Math Question Modal */}
      {gameState.activeQuestionCell && gameState.activeQuestionCell.question && (
        <QuestionModal
          question={gameState.activeQuestionCell.question}
          onClose={closeQuestionModal}
          onSubmit={submitAnswer}
        />
      )}

      {/* Game Over / Victory Modal */}
      <GameOverModal
        status={gameState.status}
        score={gameState.score}
        timeRemaining={gameState.timeRemaining}
        questionsAnswered={gameState.questionsAnswered}
        onRestart={restartGame}
        onExit={onExit}
      />
    </div>
  );
};
