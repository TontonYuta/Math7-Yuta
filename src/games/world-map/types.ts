export type BossType = 'topic' | 'midterm' | 'final';

export type GameLevelType = 'picture' | 'treasure' | 'boss';

export interface GameLevel {
  id: string;
  worldId: string;
  levelNumber: number;
  title: string;
  subtitle: string;
  topicId?: string;
  gameType: GameLevelType; // Alternates between 'picture' and 'treasure', ending with 'boss'
  galleryImageId?: string; // Image unlocked if gameType === 'picture'
  isBoss: boolean;
  bossType?: BossType;
  bossName?: string;
  bossIcon?: string;
  examSetId?: string;
  starsEarned: number;
  isUnlocked: boolean;
  highscore: number;
}

export interface GameWorld {
  id: string;
  worldNumber: number;
  name: string;
  shortName: string;
  description: string;
  color: string;
  themeIcon: string;
  levels: GameLevel[];
}

export interface PlayerProgress {
  unlockedLevelIds: string[];
  levelStars: Record<string, number>;
  levelHighscores: Record<string, number>;
  unlockedGalleryImageIds: string[];
  totalStars: number;
  currentWorldId: string;
  totalCalculationsSolved?: number;
  totalWordProblemsSolved?: number;
  bossesDefeated?: number;
}
