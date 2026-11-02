import React from 'react';
import { Question } from '../../types/exam';
import { useMysteryGame } from './useMysteryGame';
import { MysteryHUD } from './components/MysteryHUD';
import { PictureGrid } from './components/PictureGrid';
import { MysteryOutcomeModal } from './components/MysteryOutcomeModal';
import { MathChallengeModal } from '../treasure-hunter/components/MathChallengeModal';

interface MysteriousPictureGameProps {
  questionsPool: Question[];
  onExit: () => void;
  onCompleteLevel?: (score: number, stars: number) => void;
}

export const MysteriousPictureGame: React.FC<MysteriousPictureGameProps> = ({
  questionsPool,
  onExit,
  onCompleteLevel,
}) => {
  const {
    gameState,
    handleSelectTile,
    handleCloseModal,
    handleSubmitAnswer,
    restartGame,
  } = useMysteryGame(questionsPool);

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
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col p-3 sm:p-6 select-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(180,83,9,0.25),rgba(0,0,0,0))]">
      <div className="max-w-4xl mx-auto w-full space-y-6 flex flex-col items-center flex-1">
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
        <div className="text-center space-y-1">
          <h2 className="text-lg sm:text-2xl font-black text-amber-200 tracking-wide uppercase flex items-center justify-center gap-2">
            <span>🖼️</span>
            <span>BỨC TRANH BÍ ẨN: {currentImage.title}</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-400">
            Giải đúng các phép tính số học bên dưới để lật mở từng mảnh ghép của kiệt tác!
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
