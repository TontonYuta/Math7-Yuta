import React from 'react';
import { useTreasureGame } from './useTreasureGame';
import { TreasureHUD } from './components/TreasureHUD';
import { AdventureMaze } from './components/AdventureMaze';
import { MathChallengeModal } from './components/MathChallengeModal';
import { GameOutcomeModal } from './components/GameOutcomeModal';
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
    shake,
    handleCellClick,
    submitAnswer,
    closeQuestionModal,
    restartGame,
  } = useTreasureGame(questionsPool);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-950 via-stone-900 to-black text-stone-100 flex flex-col p-2 sm:p-5 select-none">
      {/* Top Arcade HUD */}
      <TreasureHUD
        score={gameState.score}
        coins={gameState.coins}
        lives={gameState.lives}
        maxLives={gameState.maxLives}
        timeRemaining={gameState.timeRemaining}
        streak={gameState.streak}
        onRestart={restartGame}
        onExit={onExit}
      />

      {/* Floating Status Notification */}
      {feedback.type && (
        <div className="max-w-xl mx-auto w-full mb-3 px-2">
          <div
            className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl border text-xs sm:text-sm font-bold shadow-lg animate-fade-in ${
              feedback.type === 'correct'
                ? 'bg-emerald-950/90 border-emerald-500/60 text-emerald-200'
                : 'bg-rose-950/90 border-rose-500/60 text-rose-200'
            }`}
          >
            {feedback.type === 'correct' ? (
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
            )}
            <span>{feedback.message}</span>
          </div>
        </div>
      )}

      {/* Main Adventure Board */}
      <main className="flex-1 flex items-center justify-center p-1 sm:p-2">
        <AdventureMaze
          grid={gameState.grid}
          playerPos={gameState.playerPos}
          chestPos={gameState.chestPos}
          onCellClick={handleCellClick}
          shake={shake}
        />
      </main>

      {/* Math Challenge Modal */}
      {gameState.activeQuestionCell && gameState.activeQuestionCell.question && (
        <MathChallengeModal
          question={gameState.activeQuestionCell.question}
          onClose={closeQuestionModal}
          onSubmit={submitAnswer}
        />
      )}

      {/* Victory / Defeat Outcome Modal */}
      <GameOutcomeModal
        status={gameState.status}
        score={gameState.score}
        coins={gameState.coins}
        stepsTaken={gameState.stepsTaken}
        timeRemaining={gameState.timeRemaining}
        correctAnswersCount={gameState.correctAnswersCount}
        onRestart={restartGame}
        onExit={onExit}
      />
    </div>
  );
};
