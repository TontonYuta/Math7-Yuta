import { useState, useEffect, useCallback, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { Question } from '../../types/exam';
import { MysteryTile, MysteryGameState, MysteryImageItem } from './types';
import { MYSTERY_IMAGES } from './mysteryImages';
import { checkAnswerCorrectness } from '../../utils/scoring';
import { soundFx } from '../../sound/soundFx';

const INITIAL_TIME = 20 * 60; // 20 minutes in seconds
const MAX_LIVES = 3;

export function useMysteryGame(
  questionsPool: Question[],
  targetImageId?: string,
  onVictory?: (score: number, stars: number) => void
) {
  // Filter for arithmetic questions or fallback to entire pool
  const arithmeticPool = useMemo(() => {
    const filtered = questionsPool.filter((q) => q.gameCategory === 'arithmetic');
    return filtered.length >= 9 ? filtered : questionsPool;
  }, [questionsPool]);

  const chosenImage = useMemo(() => {
    if (targetImageId) {
      const match = MYSTERY_IMAGES.find((img) => img.id === targetImageId);
      if (match) return match;
    }
    return MYSTERY_IMAGES[0];
  }, [targetImageId]);

  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const initTiles = useCallback(
    (pool: Question[]): MysteryTile[] => {
      const shuffledQ = [...pool].sort(() => Math.random() - 0.5);
      const tiles: MysteryTile[] = [];

      for (let i = 0; i < 9; i++) {
        const row = Math.floor(i / 3);
        const col = i % 3;
        tiles.push({
          id: i,
          row,
          col,
          question: shuffledQ[i % shuffledQ.length],
          isRevealed: false,
          isWrongShake: false,
        });
      }
      return tiles;
    },
    []
  );

  const [gameState, setGameState] = useState<MysteryGameState>(() => {
    const tiles = initTiles(arithmeticPool);
    return {
      tiles,
      currentImage: chosenImage,
      revealedCount: 0,
      totalTiles: 9,
      activeTile: null,
      lives: MAX_LIVES,
      maxLives: MAX_LIVES,
      score: 0,
      coins: 0,
      timeRemaining: INITIAL_TIME,
      status: 'playing',
    };
  });

  // Timer countdown
  useEffect(() => {
    if (gameState.status !== 'playing') return;

    const timer = setInterval(() => {
      setGameState((prev) => {
        if (prev.timeRemaining <= 1) {
          clearInterval(timer);
          soundFx.playWrong();
          return { ...prev, timeRemaining: 0, status: 'lost' };
        }
        return { ...prev, timeRemaining: prev.timeRemaining - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState.status]);

  const handleSelectTile = useCallback(
    (tile: MysteryTile) => {
      if (gameState.status !== 'playing' || tile.isRevealed) return;
      soundFx.playStarClick();
      setGameState((prev) => ({
        ...prev,
        activeTile: tile,
      }));
    },
    [gameState.status]
  );

  const handleCloseModal = useCallback(() => {
    setGameState((prev) => ({ ...prev, activeTile: null }));
  }, []);

  const handleSubmitAnswer = useCallback(
    (userAnswer: string) => {
      if (!gameState.activeTile) return;

      const currentTile = gameState.activeTile;
      const isCorrect = checkAnswerCorrectness(currentTile.question, userAnswer);

      if (isCorrect) {
        soundFx.playCorrect();
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });

        setGameState((prev) => {
          const newTiles = prev.tiles.map((t) =>
            t.id === currentTile.id ? { ...t, isRevealed: true } : t
          );
          const newRevealed = prev.revealedCount + 1;
          const isWon = newRevealed === 9;

          if (isWon) {
            soundFx.playVictory();
            confetti({ particleCount: 200, spread: 100, origin: { y: 0.5 } });
            const finalScore = prev.score + 15 + 50;
            const finalStars = prev.lives >= 2 ? 3 : 2;
            if (onVictory) {
              onVictory(finalScore, finalStars);
            }
          }

          return {
            ...prev,
            tiles: newTiles,
            revealedCount: newRevealed,
            score: prev.score + 15 + (isWon ? 50 : 0),
            coins: prev.coins + 25 + (isWon ? 50 : 0),
            activeTile: null,
            status: isWon ? 'won' : prev.status,
          };
        });
      } else {
        soundFx.playWrong();
        setGameState((prev) => {
          const newLives = prev.lives - 1;
          const newTiles = prev.tiles.map((t) =>
            t.id === currentTile.id ? { ...t, isWrongShake: true } : t
          );

          // Clear shake after 500ms
          setTimeout(() => {
            setGameState((inner) => ({
              ...inner,
              tiles: inner.tiles.map((t) =>
                t.id === currentTile.id ? { ...t, isWrongShake: false } : t
              ),
            }));
          }, 500);

          return {
            ...prev,
            tiles: newTiles,
            lives: newLives,
            activeTile: null,
            status: newLives <= 0 ? 'lost' : prev.status,
          };
        });
      }
    },
    [gameState.activeTile]
  );

  const restartGame = useCallback(() => {
    const nextIdx = (currentImageIdx + 1) % MYSTERY_IMAGES.length;
    setCurrentImageIdx(nextIdx);
    const newTiles = initTiles(arithmeticPool);

    setGameState({
      tiles: newTiles,
      currentImage: MYSTERY_IMAGES[nextIdx],
      revealedCount: 0,
      totalTiles: 9,
      activeTile: null,
      lives: MAX_LIVES,
      maxLives: MAX_LIVES,
      score: 0,
      coins: 0,
      timeRemaining: INITIAL_TIME,
      status: 'playing',
    });
  }, [arithmeticPool, currentImageIdx, initTiles]);

  return {
    gameState,
    handleSelectTile,
    handleCloseModal,
    handleSubmitAnswer,
    restartGame,
  };
}
