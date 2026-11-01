import React, { useState, useEffect, useMemo } from 'react';
import { GameLobby } from './components/game-hub/GameLobby';
import { WorldMapView } from './games/world-map/WorldMapView';
import { TreasureHunterGame } from './games/treasure-hunter/TreasureHunterGame';
import { MysteriousPictureGame } from './games/mysterious-picture/MysteriousPictureGame';
import { BossBattleGame } from './games/boss-battle/BossBattleGame';
import { useWorldProgress } from './games/world-map/useWorldProgress';
import { GameLevel } from './games/world-map/types';
import { TOAN7_QUESTIONS_DATABASE, TOAN7_EXAM_SETS } from './data/toan7/index';
import { Question } from './types/exam';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<'lobby' | 'world-map' | 'treasure' | 'picture' | 'boss'>('lobby');
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

  // Questions pool for currently active level
  const activeLevelQuestions: Question[] = useMemo(() => {
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

    const chapterFiltered = TOAN7_QUESTIONS_DATABASE.filter((q) => q.chapterId === selectedLevel.worldId);
    return chapterFiltered.length > 0 ? chapterFiltered : TOAN7_QUESTIONS_DATABASE;
  }, [selectedLevel]);

  // Specific question sets partitioned for game modes
  const arithmeticQuestions = useMemo(() => {
    const filtered = activeLevelQuestions.filter((q) => q.gameCategory === 'arithmetic');
    return filtered.length >= 6 ? filtered : activeLevelQuestions;
  }, [activeLevelQuestions]);

  const wordProblemQuestions = useMemo(() => {
    const filtered = activeLevelQuestions.filter((q) => q.gameCategory === 'word_problem');
    return filtered.length >= 6 ? filtered : activeLevelQuestions;
  }, [activeLevelQuestions]);

  const handleSelectLevel = (level: GameLevel, mode: 'treasure' | 'picture' | 'boss') => {
    setSelectedLevel(level);
    if (mode === 'boss' || level.isBoss) {
      setActiveScreen('boss');
    } else if (mode === 'picture') {
      setActiveScreen('picture');
    } else {
      setActiveScreen('treasure');
    }
  };

  const handleLevelVictory = (score: number, stars: number) => {
    if (selectedLevel) {
      recordLevelCompletion(selectedLevel.id, score, stars);
      setPlayerCoins((c) => c + 50);
    }
  };

  const handleBossVictory = (score: number, stars: number) => {
    if (selectedLevel) {
      recordLevelCompletion(selectedLevel.id, score, stars);
      setPlayerCoins((c) => c + 150);
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950">
      {activeScreen === 'lobby' && (
        <GameLobby
          onSelectGame={(gameId) => {
            if (gameId === 'picture') {
              setActiveScreen('picture');
            } else {
              setActiveScreen('world-map');
            }
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
          questionsPool={wordProblemQuestions}
          onExit={() => setActiveScreen('world-map')}
        />
      )}

      {activeScreen === 'picture' && (
        <MysteriousPictureGame
          questionsPool={arithmeticQuestions}
          onExit={() => (selectedLevel ? setActiveScreen('world-map') : setActiveScreen('lobby'))}
          onCompleteLevel={handleLevelVictory}
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
