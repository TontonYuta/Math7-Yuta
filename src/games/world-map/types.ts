export type BossType = 'topic' | 'midterm' | 'final';

export interface GameLevel {
  id: string;
  worldId: string;
  levelNumber: number;
  title: string;
  subtitle: string;
  topicId?: string;
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
  totalStars: number;
  currentWorldId: string;
}
