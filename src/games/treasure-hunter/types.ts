import { Question } from '../../types/exam';

export type CellType = 'empty' | 'obstacle' | 'question' | 'chest';
export type CellStatus = 'normal' | 'active' | 'completed' | 'blocked';

export interface MazeCell {
  row: number;
  col: number;
  type: CellType;
  status: CellStatus;
  question?: Question;
}

export type GameStatus = 'idle' | 'playing' | 'won' | 'lost';

export interface Position {
  row: number;
  col: number;
}

export interface TreasureGameState {
  grid: MazeCell[][];
  playerPos: Position;
  chestPos: Position;
  score: number;
  coins: number;
  lives: number;
  maxLives: number;
  timeRemaining: number;
  status: GameStatus;
  activeQuestionCell: MazeCell | null;
  questionsAnswered: number;
  correctAnswersCount: number;
  stepsTaken: number;
  streak: number;
}
