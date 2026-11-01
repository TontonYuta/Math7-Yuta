import React, { useState, useEffect } from 'react';
import { GameLobby } from './components/game-hub/GameLobby';
import { WorldMapView } from './games/world-map/WorldMapView';
import { TreasureHunterGame } from './games/treasure-hunter/TreasureHunterGame';
import { BossBattleGame } from './games/boss-battle/BossBattleGame';
import { useWorldProgress } from './games/world-map/useWorldProgress';
import { GameLevel } from './games/world-map/types';
import { TOAN7_QUESTIONS_DATABASE, TOAN7_EXAM_SETS } from './data/toan7/index';
import { Question } from './types/exam';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<'lobby' | 'world-map' | 'treasure' | 'boss'>('lobby');
  const [selectedLevel, setSelectedLevel] = useState<GameLevel | null>(null);

  const {
    worlds,
    currentWorldId,
    totalStars,
    setCurrentWorldId,
    recordLevelCompletion,
  } = useWorldProgress();

  const [playerCoins, setPlayerCoins] = useState<number>(() => {
    const saved = localStorage.getItem('math7_player_coins');
    return saved ? parseInt(saved, 10) : 100;
  });

  useEffect(() => {
    localStorage.setItem('math7_player_coins', playerCoins.toString());
  }, [playerCoins]);

  // Questions for current level
  const activeLevelQuestions: Question[] = React.useMemo(() => {
    if (!selectedLevel) return TOAN7_QUESTIONS_DATABASE;

    if (selectedLevel.isBoss && selectedLevel.examSetId) {
      const examSet = TOAN7_EXAM_SETS.find((s) => s.id === selectedLevel.examSetId);
      if (examSet && examSet.questionIds) {
        const found = TOAN7_QUESTIONS_DATABASE.filter((q) => examSet.questionIds.includes(q.id));
        if (found.length > 0) return found;
      }
      return TOAN7_QUESTIONS_DATABASE;
    }

    if (selectedLevel.topicId) {
      const filtered = TOAN7_QUESTIONS_DATABASE.filter((q) => q.topicId === selectedLevel.topicId);
      if (filtered.length >= 5) return filtered;
    }

    // Fallback: chapter questions
    const chapterFiltered = TOAN7_QUESTIONS_DATABASE.filter((q) => q.chapterId === selectedLevel.worldId);
    return chapterFiltered.length > 0 ? chapterFiltered : TOAN7_QUESTIONS_DATABASE;
  }, [selectedLevel]);

  const handleSelectLevel = (level: GameLevel) => {
    setSelectedLevel(level);
    if (level.isBoss) {
      setActiveScreen('boss');
    } else {
      setActiveScreen('treasure');
    }
  };

  const handleBossVictory = (score: number, stars: number) => {
    if (selectedLevel) {
      recordLevelCompletion(selectedLevel.id, score, stars);
      setPlayerCoins((c) => c + 100);
    }
  };

  const handleTreasureExit = () => {
    setActiveScreen('world-map');
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950">
      {activeScreen === 'lobby' && (
        <GameLobby
          onSelectGame={(gameId) => {
            if (gameId === 'treasure') setActiveScreen('world-map');
          }}
          playerCoins={playerCoins}
        />
      )}

      {activeScreen === 'world-map' && (
        <WorldMapView
          worlds={worlds}
          currentWorldId={currentWorldId}
          totalStars={totalStars}
          playerCoins={playerCoins}
          onSelectWorld={setCurrentWorldId}
          onSelectLevel={handleSelectLevel}
          onBackToLobby={() => setActiveScreen('lobby')}
        />
      )}

      {activeScreen === 'treasure' && (
        <TreasureHunterGame
          questionsPool={activeLevelQuestions}
          onExit={handleTreasureExit}
        />
      )}

      {activeScreen === 'boss' && selectedLevel && (
        <BossBattleGame
          bossName={selectedLevel.bossName || selectedLevel.title}
          bossIcon={selectedLevel.bossIcon || '👑'}
          questions={activeLevelQuestions}
          onVictory={handleBossVictory}
          onExit={() => setActiveScreen('world-map')}
        />
      )}
    </div>
  );
}
