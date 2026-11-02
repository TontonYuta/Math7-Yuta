import React from 'react';
import { MazeCell, Position } from '../types';
import { GRID_SIZE } from '../mazeGenerator';
import { Lock, Target, HelpCircle, User } from 'lucide-react';

interface AdventureMazeProps {
  grid: MazeCell[][];
  playerPos: Position;
  chestPos: Position;
  onCellClick: (cell: MazeCell) => void;
  shake?: boolean;
}

export const AdventureMaze: React.FC<AdventureMazeProps> = ({
  grid,
  playerPos,
  chestPos,
  onCellClick,
  shake,
}) => {
  const isAdjacent = (r: number, c: number) => {
    const dr = Math.abs(r - playerPos.row);
    const dc = Math.abs(c - playerPos.col);
    return (dr === 1 && dc === 0) || (dr === 0 && dc === 1);
  };

  return (
    <div
      className={`relative w-full max-w-xl mx-auto p-4 bg-[#14161f] rounded-2xl border border-zinc-800 shadow-xl transition-transform select-none ${
        shake ? 'animate-shake' : ''
      }`}
    >
      {/* Maze Header */}
      <div className="flex items-center justify-between pb-3 px-1 border-b border-zinc-800 text-xs text-zinc-400">
        <span className="font-mono">
          Nhấp vào ô liền kề để di chuyển dũng sĩ
        </span>
        <span className="font-mono text-zinc-500">Lưới 8x8</span>
      </div>

      {/* Grid Canvas */}
      <div
        className="grid gap-1.5 p-2.5 mt-3 bg-[#0d0e14] rounded-xl border border-zinc-800/80 aspect-square"
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

            const canClick = adjacent && !isObstacle && !isBlocked;

            let tileStyle = 'bg-[#181a24] border-zinc-800/60 text-zinc-600';

            if (isObstacle) {
              tileStyle = 'bg-zinc-900 border-zinc-850 opacity-40';
            } else if (isBlocked) {
              tileStyle = 'bg-red-950/40 border-red-800/50 text-red-400';
            } else if (isPlayer) {
              tileStyle = 'bg-sky-500/20 border-sky-400 ring-2 ring-sky-400/50 z-10 text-white';
            } else if (isChest) {
              tileStyle = 'bg-amber-500/20 border-amber-400 text-amber-300';
            } else if (canClick && isQuestion && !isCompleted) {
              tileStyle = 'bg-amber-950/30 border-amber-500/80 hover:bg-amber-950/50 text-amber-400 cursor-pointer animate-pulse';
            } else if (canClick) {
              tileStyle = 'bg-zinc-800 border-zinc-600 hover:bg-zinc-700 cursor-pointer text-zinc-300';
            }

            return (
              <button
                key={`${r}-${c}`}
                type="button"
                disabled={!canClick}
                onClick={() => onCellClick(cell)}
                className={`relative flex items-center justify-center rounded-lg border text-center transition-all duration-150 ${tileStyle} ${
                  canClick ? 'hover:scale-105 active:scale-95' : 'cursor-default'
                }`}
                title={`Vị trí [${r + 1}, ${c + 1}]`}
              >
                {/* 1. Player Pawn */}
                {isPlayer && (
                  <div className="flex items-center justify-center text-sky-400">
                    <User className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  </div>
                )}

                {/* 2. Goal: Target / Chest */}
                {!isPlayer && isChest && (
                  <div className="flex items-center justify-center text-amber-400">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
                  </div>
                )}

                {/* 3. Blocked / Barrier */}
                {!isPlayer && !isChest && isBlocked && (
                  <div className="flex items-center justify-center text-red-400">
                    <Lock className="w-3.5 h-3.5" />
                  </div>
                )}

                {/* 4. Question Barrier Node */}
                {!isPlayer && !isChest && !isBlocked && isQuestion && !isCompleted && (
                  <div className="flex items-center justify-center text-amber-400">
                    <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                )}
              </button>
            );
          })
        )}
      </div>
    </div>
  );
};
