import { GameWorld, PlayerProgress } from '../world-map/types';
import { MysteryImageItem } from '../mysterious-picture/types';

export interface DashboardStats {
  totalStars: number;
  maxStars: number;
  totalLevelsCompleted: number;
  totalLevels: number;
  playerCoins: number;
  playerRank: string;
  totalCalculationsSolved: number;
  totalWordProblemsSolved: number;
  bossesDefeated: number;
}
