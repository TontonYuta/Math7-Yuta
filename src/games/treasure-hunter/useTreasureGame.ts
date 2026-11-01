import { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { MazeCell, Position, TreasureGameState } from './types';
import { generateTreasureMaze, checkPathExists } from './mazeGenerator';
import { Question } from '../../types/exam';
import { checkAnswerCorrectness } from '../../utils/scoring';
import { soundFx } from '../../sound/soundFx';

const INITIAL_TIME = 20 * 60; // 20 minutes
const MAX_LIVES = 3;

export function useTreasureGame(questionsPool: Question[]) {
  const [gameState, setGameState] = useState<TreasureGameState>(() => {
    const { grid, playerPos, chestPos } = generateTreasureMaze(questionsPool);
    return {
      grid,
      playerPos,
      chestPos,
      score: 0,
      coins: 0,
      lives: MAX_LIVES,
      maxLives: MAX_LIVES,
      timeRemaining: INITIAL_TIME,
      status: 'playing',
      activeQuestionCell: null,
      questionsAnswered: 0,
      correctAnswersCount: 0,
      stepsTaken: 0,
      streak: 0,
    };
  });

  const [feedback, setFeedback] = useState<{
    type: 'correct' | 'wrong' | null;
    message: string;
  }>({ type: null, message: '' });

  const [shake, setShake] = useState(false);

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

  const restartGame = useCallback(() => {
    const { grid, playerPos, chestPos } = generateTreasureMaze(questionsPool);
    setGameState({
      grid,
      playerPos,
      chestPos,
      score: 0,
      coins: 0,
      lives: MAX_LIVES,
      maxLives: MAX_LIVES,
      timeRemaining: INITIAL_TIME,
      status: 'playing',
      activeQuestionCell: null,
      questionsAnswered: 0,
      correctAnswersCount: 0,
      stepsTaken: 0,
      streak: 0,
    });
    setFeedback({ type: null, message: '' });
  }, [questionsPool]);

  const isAdjacent = (pos1: Position, pos2: Position): boolean => {
    const dr = Math.abs(pos1.row - pos2.row);
    const dc = Math.abs(pos1.col - pos2.col);
    return (dr === 1 && dc === 0) || (dr === 0 && dc === 1);
  };

  const handleCellClick = useCallback(
    (cell: MazeCell) => {
      if (gameState.status !== 'playing') return;
      const { playerPos, chestPos } = gameState;

      if (cell.type === 'obstacle' || cell.status === 'blocked') return;
      if (!isAdjacent(playerPos, { row: cell.row, col: cell.col })) return;

      // Victory Condition: Stepping on Treasure Chest
      if (cell.row === chestPos.row && cell.col === chestPos.col) {
        soundFx.playVictory();
        confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
        setGameState((prev) => ({
          ...prev,
          playerPos: { row: cell.row, col: cell.col },
          score: prev.score + 50,
          coins: prev.coins + 100,
          status: 'won',
          stepsTaken: prev.stepsTaken + 1,
        }));
        return;
      }

      // Question Challenge Node
      if (cell.type === 'question' && cell.status !== 'completed') {
        soundFx.playStarClick();
        setGameState((prev) => ({
          ...prev,
          activeQuestionCell: cell,
        }));
        return;
      }

      // Normal Move
      soundFx.playStep();
      setGameState((prev) => ({
        ...prev,
        playerPos: { row: cell.row, col: cell.col },
        stepsTaken: prev.stepsTaken + 1,
      }));
    },
    [gameState]
  );

  const submitAnswer = useCallback(
    (userAnswer: string) => {
      if (!gameState.activeQuestionCell || !gameState.activeQuestionCell.question) return;

      const q = gameState.activeQuestionCell.question;
      const isCorrect = checkAnswerCorrectness(q, userAnswer);
      const target = gameState.activeQuestionCell;

      if (isCorrect) {
        soundFx.playCorrect();
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.65 } });
        setFeedback({
          type: 'correct',
          message: '🌟 Xuất sắc! Đường đi đã được mở khóa (+10 điểm, +15 xu)',
        });

        setGameState((prev) => {
          const newGrid = prev.grid.map((r) =>
            r.map((c) =>
              c.row === target.row && c.col === target.col
                ? { ...c, status: 'completed' as const }
                : c
            )
          );
          const newPos = { row: target.row, col: target.col };
          const isAtChest = newPos.row === prev.chestPos.row && newPos.col === prev.chestPos.col;

          return {
            ...prev,
            grid: newGrid,
            playerPos: newPos,
            score: prev.score + 10,
            coins: prev.coins + 15,
            streak: prev.streak + 1,
            questionsAnswered: prev.questionsAnswered + 1,
            correctAnswersCount: prev.correctAnswersCount + 1,
            stepsTaken: prev.stepsTaken + 1,
            status: isAtChest ? 'won' : prev.status,
            activeQuestionCell: null,
          };
        });
      } else {
        soundFx.playWrong();
        setShake(true);
        setTimeout(() => setShake(false), 500);

        setGameState((prev) => {
          const newLives = prev.lives - 1;
          const newGrid = prev.grid.map((r) =>
            r.map((c) =>
              c.row === target.row && c.col === target.col
                ? { ...c, status: 'blocked' as const }
                : c
            )
          );
          const pathAvailable = checkPathExists(newGrid, prev.playerPos, prev.chestPos);

          setFeedback({
            type: 'wrong',
            message: !pathAvailable
              ? '💥 Đường tới kho báu đã bị chặn đứt hoàn toàn!'
              : `❌ Sai rồi! Bạn còn ${newLives} tim. Hướng này đã bị đá chặn!`,
          });

          const isLost = newLives <= 0 || !pathAvailable;

          return {
            ...prev,
            grid: newGrid,
            lives: newLives,
            streak: 0,
            questionsAnswered: prev.questionsAnswered + 1,
            status: isLost ? 'lost' : prev.status,
            activeQuestionCell: null,
          };
        });
      }
    },
    [gameState.activeQuestionCell]
  );

  const closeQuestionModal = useCallback(() => {
    setGameState((prev) => ({ ...prev, activeQuestionCell: null }));
  }, []);

  return {
    gameState,
    feedback,
    shake,
    handleCellClick,
    submitAnswer,
    closeQuestionModal,
    restartGame,
  };
}
