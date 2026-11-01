import { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { MazeCell, Position, TreasureGameState, GameStatus } from './types';
import { generateTreasureMaze, checkPathExists, GRID_SIZE } from './mazeGenerator';
import { Question } from '../../types/exam';
import { checkAnswerCorrectness } from '../../utils/scoring';

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
      lives: MAX_LIVES,
      maxLives: MAX_LIVES,
      timeRemaining: INITIAL_TIME,
      status: 'playing',
      activeQuestionCell: null,
      questionsAnswered: 0,
    };
  });

  const [feedback, setFeedback] = useState<{
    type: 'correct' | 'wrong' | null;
    message: string;
  }>({ type: null, message: '' });

  // Timer countdown
  useEffect(() => {
    if (gameState.status !== 'playing') return;

    const timer = setInterval(() => {
      setGameState((prev) => {
        if (prev.timeRemaining <= 1) {
          clearInterval(timer);
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
      lives: MAX_LIVES,
      maxLives: MAX_LIVES,
      timeRemaining: INITIAL_TIME,
      status: 'playing',
      activeQuestionCell: null,
      questionsAnswered: 0,
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

      // Cannot move to an obstacle or blocked tile
      if (cell.type === 'obstacle' || cell.status === 'blocked') {
        return;
      }

      // Must be adjacent to current player position
      if (!isAdjacent(playerPos, { row: cell.row, col: cell.col })) {
        return;
      }

      // If it's the chest and adjacent
      if (cell.row === chestPos.row && cell.col === chestPos.col) {
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
        setGameState((prev) => ({
          ...prev,
          playerPos: { row: cell.row, col: cell.col },
          score: prev.score + 50,
          status: 'won',
        }));
        return;
      }

      // If it's a question cell not yet completed
      if (cell.type === 'question' && cell.status !== 'completed') {
        setGameState((prev) => ({
          ...prev,
          activeQuestionCell: cell,
        }));
        return;
      }

      // Normal empty tile or already cleared question tile: walk onto it
      setGameState((prev) => ({
        ...prev,
        playerPos: { row: cell.row, col: cell.col },
      }));
    },
    [gameState]
  );

  const submitAnswer = useCallback(
    (userAnswer: string) => {
      if (!gameState.activeQuestionCell || !gameState.activeQuestionCell.question) {
        return;
      }

      const q = gameState.activeQuestionCell.question;
      const isCorrect = checkAnswerCorrectness(q, userAnswer);
      const targetCell = gameState.activeQuestionCell;

      setGameState((prev) => {
        const newGrid = prev.grid.map((row) =>
          row.map((c) => {
            if (c.row === targetCell.row && c.col === targetCell.col) {
              return {
                ...c,
                status: isCorrect ? ('completed' as const) : ('blocked' as const),
              };
            }
            return c;
          })
        );

        if (isCorrect) {
          confetti({ particleCount: 60, spread: 50, origin: { y: 0.7 } });
          setFeedback({
            type: 'correct',
            message: 'Chính xác! Bạn được cộng +10 điểm và khai thông đường đi.',
          });

          const newScore = prev.score + 10;
          const newPlayerPos = { row: targetCell.row, col: targetCell.col };

          // Check if reached chest
          if (
            newPlayerPos.row === prev.chestPos.row &&
            newPlayerPos.col === prev.chestPos.col
          ) {
            return {
              ...prev,
              grid: newGrid,
              playerPos: newPlayerPos,
              score: newScore + 50,
              status: 'won',
              activeQuestionCell: null,
              questionsAnswered: prev.questionsAnswered + 1,
            };
          }

          return {
            ...prev,
            grid: newGrid,
            playerPos: newPlayerPos,
            score: newScore,
            activeQuestionCell: null,
            questionsAnswered: prev.questionsAnswered + 1,
          };
        } else {
          // Wrong answer
          const newLives = prev.lives - 1;
          const pathAvailable = checkPathExists(
            newGrid,
            prev.playerPos,
            prev.chestPos
          );

          setFeedback({
            type: 'wrong',
            message: !pathAvailable
              ? 'Lối đi tới kho báu đã bị chặn đứt hoàn toàn!'
              : `Chưa chính xác! Bạn còn ${newLives} mạng. Lối đi này đã bị phong tỏa.`,
          });

          const isLost = newLives <= 0 || !pathAvailable;

          return {
            ...prev,
            grid: newGrid,
            lives: newLives,
            status: isLost ? 'lost' : prev.status,
            activeQuestionCell: null,
            questionsAnswered: prev.questionsAnswered + 1,
          };
        }
      });
    },
    [gameState.activeQuestionCell]
  );

  const closeQuestionModal = useCallback(() => {
    setGameState((prev) => ({ ...prev, activeQuestionCell: null }));
  }, []);

  return {
    gameState,
    feedback,
    handleCellClick,
    submitAnswer,
    closeQuestionModal,
    restartGame,
  };
}
