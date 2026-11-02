import React from 'react';
import { Question } from '../../types/exam';
import { useMysteryGame } from './useMysteryGame';
import { MysteryHUD } from './components/MysteryHUD';
import { PictureGrid } from './components/PictureGrid';
import { MysteryOutcomeModal } from './components/MysteryOutcomeModal';
import { MathChallengeModal } from '../treasure-hunter/components/MathChallengeModal';

interface MysteriousPictureGameProps {
  questionsPool: Question[];
  targetImageId?: string;
  onExit: () => void;
  onCompleteLevel?: (score: number, stars: number) => void;
}

export const MysteriousPictureGame: React.FC<MysteriousPictureGameProps> = ({
  questionsPool,
  targetImageId,
  onExit,
  onCompleteLevel,
}) => {
  const {
    gameState,
    handleSelectTile,
    handleCloseModal,
    handleSubmitAnswer,
    restartGame,
  } = useMysteryGame(questionsPool, targetImageId, onCompleteLevel);

  const {
    tiles,
    currentImage,
    revealedCount,
    totalTiles,
    activeTile,
    lives,
    maxLives,
    score,
    coins,
    timeRemaining,
    status,
  } = gameState;

  return (
    <div className="min-h-screen bg-transparent text-zinc-100 flex flex-col p-4 sm:p-8 select-none">
      <div className="max-w-6xl mx-auto w-full space-y-8 flex flex-col items-center flex-1">
        {/* Mystery HUD Header */}
        <MysteryHUD
          score={score}
          coins={coins}
          lives={lives}
          maxLives={maxLives}
          timeRemaining={timeRemaining}
          revealedCount={revealedCount}
          totalTiles={totalTiles}
          imageTitle={currentImage.title}
          onExit={onExit}
        />

        {/* Game Title Tag */}
        <div className="text-center space-y-2">
          <h2 className="text-lg sm:text-2xl font-black text-white tracking-tight flex items-center justify-center gap-2.5">
            <span>Ma Trận Mảnh Ghép:</span>
            <span className="text-amber-400">{currentImage.title}</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 font-medium">
            Giải đúng các phép tính số học để giải mã từng ô trên ma trận Poneglyph cổ đại.
          </p>
        </div>

        {/* 3x3 Mystery Picture Grid Canvas */}
        <PictureGrid
          tiles={tiles}
          currentImage={currentImage}
          onSelectTile={handleSelectTile}
        />

        {/* Spacious Math Challenge Modal for Selected Tile */}
        {activeTile && (
          <MathChallengeModal
            question={activeTile.question}
            onClose={handleCloseModal}
            onSubmit={handleSubmitAnswer}
            backLabel="Quay lại bàn cờ"
          />
        )}

        {/* Victory / Defeat Outcome Dialog */}
        {status !== 'playing' && (
          <MysteryOutcomeModal
            status={status}
            score={score}
            coins={coins}
            image={currentImage}
            onRestart={restartGame}
            onExit={() => {
              if (status === 'won' && onCompleteLevel) {
                onCompleteLevel(score, 3);
              }
              onExit();
            }}
          />
        )}
      </div>
    </div>
  );
};
