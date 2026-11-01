import { useState, useEffect, useCallback, useMemo } from 'react';
import { PlayerProgress, GameWorld, GameLevel } from './types';
import { buildGameWorlds } from './levelData';

const PROGRESS_KEY = 'math7_player_world_progress';

export function useWorldProgress() {
  const allWorlds = useMemo(() => buildGameWorlds(), []);

  const [progress, setProgress] = useState<PlayerProgress>(() => {
    try {
      const saved = localStorage.getItem(PROGRESS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          unlockedLevelIds: parsed.unlockedLevelIds || ['chuong_1_so_huu_ti_lvl_1'],
          levelStars: parsed.levelStars || {},
          levelHighscores: parsed.levelHighscores || {},
          unlockedGalleryImageIds: parsed.unlockedGalleryImageIds || [],
          totalStars: parsed.totalStars || 0,
          currentWorldId: parsed.currentWorldId || 'chuong_1_so_huu_ti',
          totalCalculationsSolved: parsed.totalCalculationsSolved || 0,
          totalWordProblemsSolved: parsed.totalWordProblemsSolved || 0,
          bossesDefeated: parsed.bossesDefeated || 0,
        };
      }
    } catch (e) {
      console.warn('Failed to parse saved progress', e);
    }
    return {
      unlockedLevelIds: ['chuong_1_so_huu_ti_lvl_1'],
      levelStars: {},
      levelHighscores: {},
      unlockedGalleryImageIds: [],
      totalStars: 0,
      currentWorldId: 'chuong_1_so_huu_ti',
      totalCalculationsSolved: 0,
      totalWordProblemsSolved: 0,
      bossesDefeated: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  }, [progress]);

  const recordLevelCompletion = useCallback(
    (levelId: string, score: number, stars: number, gameType?: 'picture' | 'treasure' | 'boss', galleryImageId?: string) => {
      setProgress((prev) => {
        const prevStars = prev.levelStars[levelId] || 0;
        const prevHighscore = prev.levelHighscores[levelId] || 0;

        const updatedStars = {
          ...prev.levelStars,
          [levelId]: Math.max(prevStars, stars),
        };
        const updatedHighscores = {
          ...prev.levelHighscores,
          [levelId]: Math.max(prevHighscore, score),
        };

        // Unlock artwork if galleryImageId provided
        const newGallery = [...prev.unlockedGalleryImageIds];
        if (galleryImageId && !newGallery.includes(galleryImageId)) {
          newGallery.push(galleryImageId);
        }

        // Find next level to unlock
        const allLevels: GameLevel[] = [];
        allWorlds.forEach((w) => allLevels.push(...w.levels));
        const currentIdx = allLevels.findIndex((l) => l.id === levelId);

        const newUnlocked = [...prev.unlockedLevelIds];
        if (currentIdx !== -1 && currentIdx + 1 < allLevels.length) {
          const nextLevel = allLevels[currentIdx + 1];
          if (!newUnlocked.includes(nextLevel.id)) {
            newUnlocked.push(nextLevel.id);
          }
        }

        const totalStars = Object.values(updatedStars).reduce((a, b) => a + b, 0);

        return {
          ...prev,
          unlockedLevelIds: newUnlocked,
          levelStars: updatedStars,
          levelHighscores: updatedHighscores,
          unlockedGalleryImageIds: newGallery,
          totalStars,
          totalCalculationsSolved: (prev.totalCalculationsSolved || 0) + (gameType === 'picture' ? 9 : 0),
          totalWordProblemsSolved: (prev.totalWordProblemsSolved || 0) + (gameType === 'treasure' ? 5 : 0),
          bossesDefeated: (prev.bossesDefeated || 0) + (gameType === 'boss' ? 1 : 0),
        };
      });
    },
    [allWorlds]
  );

  const worldsWithProgress: GameWorld[] = useMemo(() => {
    return allWorlds.map((world) => ({
      ...world,
      levels: world.levels.map((lvl) => ({
        ...lvl,
        isUnlocked: progress.unlockedLevelIds.includes(lvl.id),
        starsEarned: progress.levelStars[lvl.id] || 0,
        highscore: progress.levelHighscores[lvl.id] || 0,
      })),
    }));
  }, [allWorlds, progress]);

  return {
    worlds: worldsWithProgress,
    currentWorldId: progress.currentWorldId,
    totalStars: progress.totalStars,
    progress,
    setCurrentWorldId: (wId: string) =>
      setProgress((prev) => ({ ...prev, currentWorldId: wId })),
    recordLevelCompletion,
  };
}
