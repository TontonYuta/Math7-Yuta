import React from 'react';
import { MazeCell, Position } from '../types';
import { GRID_SIZE } from '../mazeGenerator';
import { Sparkles, HelpCircle, Lock, Gem } from 'lucide-react';

interface MazeGridProps {
  grid: MazeCell[][];
  playerPos: Position;
  chestPos: Position;
  onCellClick: (cell: MazeCell) => void;
}

export const MazeGrid: React.FC<MazeGridProps> = ({
  grid,
  playerPos,
  chestPos,
  onCellClick,
}) => {
  const isAdjacent = (r: number, c: number) => {
    const dr = Math.abs(r - playerPos.row);
    const dc = Math.abs(c - playerPos.col);
    return (dr === 1 && dc === 0) || (dr === 0 && dc === 1);
  };

  return (
    <div className="flex flex-col items-center justify-center p-2 sm:p-6 bg-gradient-to-b from-stone-900 to-stone-950 rounded-3xl border-4 border-amber-900/60 shadow-2xl max-w-2xl mx-auto w-full">
      {/* Maze Grid Container */}
      <div
        className="grid grid-cols-8 gap-1 sm:gap-2 p-2 sm:p-4 bg-amber-950/40 rounded-2xl border-2 border-amber-800/40 shadow-inner w-full aspect-square"
        style={{
          gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${GRID_SIZE}, minmax(0, 1fr))`,
        }}
      >
        {grid.map((row, r) =>
          row.map((cell, c) => {
            const isPlayer = r === playerPos.row && c === playerPos.col;
            const isChest = r === chestPos.row && c === chestPos.col;
            const adjacent = isAdjacent(r, c);
            const isBlocked = cell.status === 'blocked';
            const isCompleted = cell.status === 'completed';
            const isObstacle = cell.type === 'obstacle';
            const isQuestion = cell.type === 'question';

            let cellBg = 'bg-stone-800/80 hover:bg-stone-700/80 border-stone-700/60';
            let canClick = adjacent && !isObstacle && !isBlocked;

            if (isObstacle) {
              cellBg = 'bg-emerald-950/80 border-emerald-800/50 shadow-inner';
            } else if (isBlocked) {
              cellBg = 'bg-red-950/80 border-red-800/60 opacity-80';
            } else if (isPlayer) {
              cellBg = 'bg-amber-500/20 border-amber-400 ring-2 ring-amber-400 ring-offset-2 ring-offset-stone-900';
            } else if (isChest) {
              cellBg = 'bg-yellow-500/20 border-yellow-400/80 animate-pulse';
            } else if (adjacent && isQuestion && !isCompleted) {
              cellBg = 'bg-amber-600/30 border-amber-400 hover:bg-amber-500/40 animate-bounce-subtle cursor-pointer ring-1 ring-amber-300';
            } else if (adjacent && !isObstacle && !isBlocked) {
              cellBg = 'bg-stone-700/90 border-stone-500/80 cursor-pointer hover:border-amber-400';
            }

            return (
              <button
                key={`${r}-${c}`}
                disabled={!canClick}
                onClick={() => onCellClick(cell)}
                className={`relative flex items-center justify-center rounded-xl border transition-all duration-200 select-none ${cellBg} ${
                  canClick ? 'hover:scale-105 active:scale-95' : 'cursor-default'
                }`}
                title={`Ô [${r + 1}, ${c + 1}]`}
              >
                {/* 1. Player (Squirrel Explorer) */}
                {isPlayer && (
                  <div className="relative flex items-center justify-center text-2xl sm:text-3xl filter drop-shadow animate-pulse">
                    <span>🐿️</span>
                    <span className="absolute -top-1 -right-1 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                  </div>
                )}

                {/* 2. Treasure Chest */}
                {!isPlayer && isChest && (
                  <div className="flex flex-col items-center justify-center text-2xl sm:text-3xl filter drop-shadow hover:scale-110 transition-transform">
                    <span>👑</span>
                  </div>
                )}

                {/* 3. Obstacle (Hedge / Bushes) */}
                {!isPlayer && !isChest && isObstacle && (
                  <div className="text-xl sm:text-2xl opacity-90 select-none">
                    <span>🌳</span>
                  </div>
                )}

                {/* 4. Blocked Path (Red Rock / Lock) */}
                {!isPlayer && !isChest && isBlocked && (
                  <div className="flex items-center justify-center text-red-400/90">
                    <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                  </div>
                )}

                {/* 5. Star Question Node */}
                {!isPlayer && !isChest && !isBlocked && isQuestion && !isCompleted && (
                  <div className="relative flex items-center justify-center">
                    <span className="text-xl sm:text-2xl drop-shadow-md">⭐</span>
                    <span className="absolute text-[10px] sm:text-xs font-black text-amber-950 font-mono -mt-0.5">
                      ?
                    </span>
                  </div>
                )}

                {/* 6. Cleared Question Node */}
                {!isPlayer && !isChest && isCompleted && (
                  <div className="flex items-center justify-center opacity-70">
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                  </div>
                )}
              </button>
            );
          })
        )}
      </div>

      {/* Legend guide below board */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-300 font-medium">
        <div className="flex items-center gap-1.5">
          <span>🐿️</span>
          <span>Bạn</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span>⭐</span>
          <span>Thử thách Toán</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span>🌳</span>
          <span>Chướng ngại vật</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span>🔒</span>
          <span>Đường bị khóa</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span>👑</span>
          <span>Kho báu</span>
        </div>
      </div>
    </div>
  );
};
