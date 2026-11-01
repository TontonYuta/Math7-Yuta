import { Question } from '../../types/exam';

export interface MysteryTile {
  id: number; // 0 to 8 (9 tiles)
  row: number; // 0 to 2
  col: number; // 0 to 2
  question: Question;
  isRevealed: boolean;
  isWrongShake: boolean;
}

export interface MysteryImageItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface MysteryGameState {
  tiles: MysteryTile[];
  currentImage: MysteryImageItem;
  revealedCount: number;
  totalTiles: number;
  activeTile: MysteryTile | null;
  lives: number;
  maxLives: number;
  score: number;
  coins: number;
  timeRemaining: number;
  status: 'playing' | 'won' | 'lost';
}
