import { Question } from '../../types/exam';

export interface BossBattleState {
  bossName: string;
  bossIcon: string;
  bossHp: number;
  maxBossHp: number;
  playerHp: number;
  maxPlayerHp: number;
  questions: Question[];
  currentIdx: number;
  status: 'fighting' | 'won' | 'lost';
  streak: number;
  score: number;
  isBossDamaged: boolean;
  isPlayerDamaged: boolean;
}
