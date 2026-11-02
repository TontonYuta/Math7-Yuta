import React from 'react';
import { MazeCell, Position } from '../types';
import { GRID_SIZE } from '../mazeGenerator';
import { Compass } from 'lucide-react';
import {
  LuffyStrawHatPawn,
  OnePieceTreasureChest,
  AncientPoneglyphNode,
  MarineIronGateBarrier,
  SeaReefObstacle,
} from '../../world-map/onePieceAssets';

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
      className={`relative w-full max-w-2xl sm:max-w-3xl mx-auto p-5 sm:p-7 bg-[#141622]/95 backdrop-blur-md rounded-3xl border border-zinc-800/90 shadow-2xl transition-transform select-none ${
        shake ? 'animate-shake' : ''
      }`}
    >
      {/* Maze Tactical Header */}
      <div className="flex items-center justify-between pb-4 px-1 border-b border-zinc-800/80 text-xs sm:text-sm">
        <div className="flex items-center gap-2.5 text-zinc-200 font-bold">
          <Compass className="w-5 h-5 text-amber-400" />
          <span>Mê Cung Tiền Đồn • Lưới 8x8</span>
        </div>
        <span className="font-mono text-xs text-zinc-400 font-medium">
          Chạm ô liền kề để di chuyển
        </span>
      </div>

      {/* Grid Canvas */}
      <div
        className="grid gap-2 p-4 mt-4 bg-[#0a0c13] rounded-2xl border border-zinc-800/90 aspect-square"
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

            let tileStyle = 'bg-[#151724] border-zinc-800/60 text-zinc-600';

            if (isObstacle) {
              tileStyle = 'bg-zinc-950 border-zinc-900 opacity-60';
            } else if (isBlocked) {
              tileStyle = 'bg-red-950/40 border-red-800/60 text-red-400';
            } else if (isPlayer) {
              tileStyle = 'bg-amber-400/20 border-amber-400 ring-4 ring-amber-400/40 z-10 shadow-lg shadow-amber-500/20';
            } else if (isChest) {
              tileStyle = 'bg-yellow-500/20 border-yellow-400 ring-4 ring-yellow-400/40 shadow-lg shadow-yellow-500/20';
            } else if (canClick && isQuestion && !isCompleted) {
              tileStyle = 'bg-sky-950/40 border-sky-400 hover:bg-sky-950/60 cursor-pointer animate-pulse ring-2 ring-sky-400/30';
            } else if (canClick) {
              tileStyle = 'bg-zinc-800/90 border-zinc-600 hover:bg-zinc-700 cursor-pointer text-zinc-200';
            }

            return (
              <button
                key={`${r}-${c}`}
                type="button"
                disabled={!canClick}
                onClick={() => onCellClick(cell)}
                className={`relative flex items-center justify-center p-1 rounded-xl border text-center transition-all duration-150 ${tileStyle} ${
                  canClick ? 'hover:scale-105 active:scale-95' : 'cursor-default'
                }`}
                title={`Tọa độ [${r + 1}, ${c + 1}]`}
              >
                {/* 1. Player Pawn: Straw Hat Luffy */}
                {isPlayer && (
                  <div className="flex items-center justify-center animate-pulse">
                    <LuffyStrawHatPawn className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                )}

                {/* 2. Goal: Royal One Piece Gold Chest */}
                {!isPlayer && isChest && (
                  <div className="flex items-center justify-center animate-bounce">
                    <OnePieceTreasureChest className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                )}

                {/* 3. Blocked Barrier: World Government Marine Iron Gate */}
                {!isPlayer && !isChest && isBlocked && (
                  <div className="flex items-center justify-center">
                    <MarineIronGateBarrier className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                )}

                {/* 4. Question Barrier Node: Ancient Poneglyph Stone Monolith */}
                {!isPlayer && !isChest && !isBlocked && isQuestion && !isCompleted && (
                  <div className="flex items-center justify-center">
                    <AncientPoneglyphNode className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                )}

                {/* 5. Sea Reef Obstacle */}
                {!isPlayer && !isChest && isObstacle && (
                  <div className="flex items-center justify-center">
                    <SeaReefObstacle className="w-5 h-5 sm:w-6 sm:h-6 opacity-70" />
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
