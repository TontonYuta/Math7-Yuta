import React, { useState, useEffect } from 'react';
import { GameLobby } from './components/game-hub/GameLobby';
import { TreasureHunterGame } from './games/treasure-hunter/TreasureHunterGame';
import { TOAN7_QUESTIONS_DATABASE } from './data/toan7/index';

export default function App() {
  const [activeGame, setActiveGame] = useState<'lobby' | 'treasure' | 'picture' | 'frog'>('lobby');

  const [playerCoins, setPlayerCoins] = useState<number>(() => {
    const saved = localStorage.getItem('math7_player_coins');
    return saved ? parseInt(saved, 10) : 50;
  });

  useEffect(() => {
    localStorage.setItem('math7_player_coins', playerCoins.toString());
  }, [playerCoins]);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950">
      {activeGame === 'lobby' && (
        <GameLobby
          onSelectGame={(gameId) => setActiveGame(gameId)}
          playerCoins={playerCoins}
        />
      )}

      {activeGame === 'treasure' && (
        <TreasureHunterGame
          questionsPool={TOAN7_QUESTIONS_DATABASE}
          onExit={() => setActiveGame('lobby')}
        />
      )}
    </div>
  );
}
