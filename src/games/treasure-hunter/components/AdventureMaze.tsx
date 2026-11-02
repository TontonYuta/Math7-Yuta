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
      className={`relative w-full max-w-[1600px] mx-auto p-5 sm:p-7 bg-[#141622]/95 backdrop-blur-md rounded-3xl border border-zinc-800/90 shadow-2xl transition-transform select-none overflow-hidden ${
        shake ? 'animate-shake' : ''
      }`}
    >
      {/* Background artwork filling the entire maze canvas */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/assets/onepiece/op_world_background.jpg"
          alt="One Piece Sea Background"
          className="w-full h-full object-cover filter brightness-[0.35] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c13]/95 via-[#0a0c13]/80 to-[#0a0c13]/90" />
      </div>

      {/* Maze Tactical Header */}
      <div className="relative z-10 flex items-center justify-between pb-4 px-1 border-b border-zinc-800/80 text-xs sm:text-sm">
        <div className="flex items-center gap-2.5 text-zinc-200 font-bold">
          <Compass className="w-5 h-5 text-amber-400" />
          <span>Mê Cung Tiền Đồn Hải Tặc • Lưới 8x8 Toàn Màn Hình</span>
        </div>
        <span className="font-mono text-xs sm:text-sm text-amber-300 font-semibold">
          Chạm ô liền kề để thuyền trưởng Luffy di chuyển
        </span>
      </div>

      {/* Grid Canvas expanding to fill full-width container */}
      <div
        className="relative z-10 grid gap-2.5 p-3 sm:p-5 mt-4 bg-[#0a0c13]/85 rounded-2xl border border-zinc-800/90 h-[560px] sm:h-[640px] lg:h-[700px] w-full"
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

            let tileStyle = 'bg-[#151724]/90 border-zinc-800/60 text-zinc-600';

            if (isObstacle) {
              tileStyle = 'bg-zinc-950/80 border-zinc-900 opacity-60';
            } else if (isBlocked) {
              tileStyle = 'bg-red-950/40 border-red-800/60 text-red-400';
            } else if (isPlayer) {
              tileStyle = 'bg-amber-400/25 border-amber-400 ring-4 ring-amber-400/40 z-10 shadow-lg shadow-amber-500/20';
            } else if (isChest) {
              tileStyle = 'bg-yellow-500/25 border-yellow-400 ring-4 ring-yellow-400/40 shadow-lg shadow-yellow-500/20';
            } else if (canClick && isQuestion && !isCompleted) {
              tileStyle = 'bg-sky-950/50 border-sky-400 hover:bg-sky-950/70 cursor-pointer animate-pulse ring-2 ring-sky-400/40';
            } else if (canClick) {
              tileStyle = 'bg-zinc-800/95 border-zinc-600 hover:bg-zinc-700 cursor-pointer text-zinc-200';
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
                    <LuffyStrawHatPawn className="w-7 h-7 sm:w-9 sm:h-9" />
                  </div>
                )}

                {/* 2. Goal: Royal One Piece Gold Chest */}
                {!isPlayer && isChest && (
                  <div className="flex items-center justify-center animate-bounce">
                    <OnePieceTreasureChest className="w-7 h-7 sm:w-9 sm:h-9" />
                  </div>
                )}

                {/* 3. Blocked Barrier: World Government Marine Iron Gate */}
                {!isPlayer && !isChest && isBlocked && (
                  <div className="flex items-center justify-center">
                    <MarineIronGateBarrier className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                )}

                {/* 4. Question Barrier Node: Ancient Poneglyph Stone Monolith */}
                {!isPlayer && !isChest && !isBlocked && isQuestion && !isCompleted && (
                  <div className="flex items-center justify-center">
                    <AncientPoneglyphNode className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                )}

                {/* 5. Sea Reef Obstacle */}
                {!isPlayer && !isChest && isObstacle && (
                  <div className="flex items-center justify-center">
                    <SeaReefObstacle className="w-6 h-6 sm:w-8 sm:h-8 opacity-70" />
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
