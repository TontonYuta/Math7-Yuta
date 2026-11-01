import React from 'react';
import { MazeCell, Position } from '../types';
import { GRID_SIZE } from '../mazeGenerator';
import { Sparkles, Lock, Footprints } from 'lucide-react';

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
      className={`relative w-full max-w-xl mx-auto p-3 sm:p-5 bg-gradient-to-b from-stone-900 via-stone-950 to-black rounded-3xl border-4 border-amber-800/80 shadow-2xl transition-transform duration-200 select-none ${
        shake ? 'animate-shake' : ''
      }`}
    >
      {/* Wooden Frame Header Tag */}
      <div className="flex items-center justify-between pb-3 px-2 border-b border-amber-900/40 text-xs font-bold text-amber-300">
        <span className="flex items-center gap-1.5">
          <Footprints className="w-4 h-4 text-amber-500" />
          <span>Bấm ô kề bên để dẫn đường cho sóc thợ mỏ</span>
        </span>
        <span className="text-stone-400 font-mono">Bản đồ 8x8</span>
      </div>

      {/* Grid Canvas */}
      <div
        className="grid gap-1 sm:gap-2 p-2 sm:p-3 mt-3 bg-stone-900/90 rounded-2xl border-2 border-stone-800 shadow-inner aspect-square"
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

            let tileStyle = 'bg-stone-800/70 border-stone-700/50';

            if (isObstacle) {
              tileStyle = 'bg-emerald-950/90 border-emerald-800/60 shadow-inner';
            } else if (isBlocked) {
              tileStyle = 'bg-red-950/90 border-red-800/70 opacity-90';
            } else if (isPlayer) {
              tileStyle = 'bg-amber-500/30 border-amber-400 ring-2 ring-amber-400 ring-offset-2 ring-offset-stone-900 z-10';
            } else if (isChest) {
              tileStyle = 'bg-yellow-500/20 border-yellow-400 animate-pulse';
            } else if (canClick && isQuestion && !isCompleted) {
              tileStyle = 'bg-amber-600/40 border-amber-400 hover:bg-amber-500/50 ring-2 ring-amber-400/80 cursor-pointer animate-pulse';
            } else if (canClick) {
              tileStyle = 'bg-stone-700/90 border-amber-500/60 hover:bg-stone-600 cursor-pointer shadow-md';
            }

            return (
              <button
                key={`${r}-${c}`}
                type="button"
                disabled={!canClick}
                onClick={() => onCellClick(cell)}
                className={`relative flex items-center justify-center rounded-xl border text-center transition-all duration-150 ${tileStyle} ${
                  canClick ? 'hover:scale-105 active:scale-95' : 'cursor-default'
                }`}
                title={`Vị trí [Hàng ${r + 1}, Cột ${c + 1}]`}
              >
                {/* 1. Player (Squirrel Explorer) */}
                {isPlayer && (
                  <div className="relative flex items-center justify-center text-2xl sm:text-3xl filter drop-shadow animate-bounce">
                    <span>🐿️</span>
                    <span className="absolute -bottom-1 w-4 h-1 bg-black/40 rounded-full blur-[1px]"></span>
                  </div>
                )}

                {/* 2. Goal: Royal Treasure Chest */}
                {!isPlayer && isChest && (
                  <div className="flex flex-col items-center justify-center text-2xl sm:text-3xl filter drop-shadow hover:scale-110 transition-transform">
                    <span>👑</span>
                  </div>
                )}

                {/* 3. Obstacle: Dense Hedge */}
                {!isPlayer && !isChest && isObstacle && (
                  <div className="text-lg sm:text-2xl opacity-90 select-none">
                    <span>🌳</span>
                  </div>
                )}

                {/* 4. Blocked Path: Rubble & Lock */}
                {!isPlayer && !isChest && isBlocked && (
                  <div className="flex flex-col items-center justify-center text-red-400">
                    <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                )}

                {/* 5. Question Star Node */}
                {!isPlayer && !isChest && !isBlocked && isQuestion && !isCompleted && (
                  <div className="relative flex items-center justify-center">
                    <span className="text-lg sm:text-2xl drop-shadow">⭐</span>
                    <span className="absolute text-[9px] sm:text-[11px] font-black text-amber-950 font-mono -mt-0.5">
                      ?
                    </span>
                  </div>
                )}

                {/* 6. Cleared Star Path */}
                {!isPlayer && !isChest && isCompleted && (
                  <div className="flex items-center justify-center opacity-80">
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                  </div>
                )}

                {/* 7. Stepping Hint on Valid Adjacent Empty Cell */}
                {!isPlayer && !isChest && canClick && !isQuestion && (
                  <div className="w-2 h-2 rounded-full bg-amber-400/80 animate-ping"></div>
                )}
              </button>
            );
          })
        )}
      </div>

      {/* Quick Legend Guide */}
      <footer className="mt-4 pt-3 border-t border-stone-800 flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-[11px] text-stone-400 font-semibold">
        <span className="flex items-center gap-1">🐿️ Bạn</span>
        <span className="flex items-center gap-1">⭐ Câu đố Toán</span>
        <span className="flex items-center gap-1">🌳 Chướng ngại</span>
        <span className="flex items-center gap-1">🔒 Bị chặn</span>
        <span className="flex items-center gap-1">👑 Kho báu</span>
      </footer>
    </div>
  );
};
