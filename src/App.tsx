import React, { useState, useEffect, useMemo } from 'react';
import { GameLobby } from './components/game-hub/GameLobby';
import { TopicSelectionView } from './games/world-map/TopicSelectionView';
import { WorldMapView } from './games/world-map/WorldMapView';
import { TreasureHunterGame } from './games/treasure-hunter/TreasureHunterGame';
import { MysteriousPictureGame } from './games/mysterious-picture/MysteriousPictureGame';
import { BossBattleGame } from './games/boss-battle/BossBattleGame';
import { DashboardGalleryView } from './games/dashboard/DashboardGalleryView';
import { useWorldProgress } from './games/world-map/useWorldProgress';
import { GameLevel } from './games/world-map/types';
import { TOAN7_QUESTIONS_DATABASE, TOAN7_EXAM_SETS } from './data/toan7/index';
import { Question } from './types/exam';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<'lobby' | 'topic-select' | 'world-map' | 'treasure' | 'picture' | 'boss' | 'dashboard'>('lobby');
  const [selectedLevel, setSelectedLevel] = useState<GameLevel | null>(null);

  const {
    worlds,
    currentWorldId,
    totalStars,
    progress,
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

  const handleSelectLevel = (level: GameLevel) => {
    setSelectedLevel(level);
    if (level.gameType === 'boss') {
      setActiveScreen('boss');
    } else if (level.gameType === 'picture') {
      setActiveScreen('picture');
    } else {
      setActiveScreen('treasure');
    }
  };

  const handlePictureVictory = (score: number, stars: number) => {
    if (selectedLevel) {
      recordLevelCompletion(selectedLevel.id, score, stars, 'picture', selectedLevel.galleryImageId);
      setPlayerCoins((c) => c + 60);
    }
  };

  const handleTreasureVictory = (score: number, stars: number) => {
    if (selectedLevel) {
      recordLevelCompletion(selectedLevel.id, score, stars, 'treasure');
      setPlayerCoins((c) => c + 60);
    }
  };

  const handleBossVictory = (score: number, stars: number) => {
    if (selectedLevel) {
      recordLevelCompletion(selectedLevel.id, score, stars, 'boss');
      setPlayerCoins((c) => c + 150);
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950">
      {activeScreen === 'lobby' && (
        <GameLobby
          onStartAdventure={() => setActiveScreen('topic-select')}
          onOpenDashboard={() => setActiveScreen('dashboard')}
          playerCoins={playerCoins}
          totalStars={totalStars}
        />
      )}

      {activeScreen === 'topic-select' && (
        <TopicSelectionView
          worlds={worlds}
          totalStars={totalStars}
          playerCoins={playerCoins}
          onSelectTopic={(wId) => {
            setCurrentWorldId(wId);
            setActiveScreen('world-map');
          }}
          onBackToLobby={() => setActiveScreen('lobby')}
          onOpenDashboard={() => setActiveScreen('dashboard')}
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
          onOpenDashboard={() => setActiveScreen('dashboard')}
          onOpenTopicSelect={() => setActiveScreen('topic-select')}
        />
      )}

      {activeScreen === 'treasure' && (
        <TreasureHunterGame
          questionsPool={wordProblemQuestions}
          onExit={() => setActiveScreen('world-map')}
          onCompleteLevel={handleTreasureVictory}
        />
      )}

      {activeScreen === 'picture' && (
        <MysteriousPictureGame
          questionsPool={arithmeticQuestions}
          targetImageId={selectedLevel?.galleryImageId}
          onExit={() => setActiveScreen('world-map')}
          onCompleteLevel={handlePictureVictory}
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

      {activeScreen === 'dashboard' && (
        <DashboardGalleryView
          worlds={worlds}
          progress={progress}
          playerCoins={playerCoins}
          onBack={() => setActiveScreen('topic-select')}
        />
      )}
    </div>
  );
}
