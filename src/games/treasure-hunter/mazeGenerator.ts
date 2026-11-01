import { MazeCell, Position } from './types';
import { Question } from '../../types/exam';

export const GRID_SIZE = 8;

export function checkPathExists(
  grid: MazeCell[][],
  start: Position,
  target: Position
): boolean {
  const visited: boolean[][] = Array.from({ length: GRID_SIZE }, () =>
    Array(GRID_SIZE).fill(false)
  );
  const queue: Position[] = [start];
  visited[start.row][start.col] = true;

  const directions = [
    { r: -1, c: 0 },
    { r: 1, c: 0 },
    { r: 0, c: -1 },
    { r: 0, c: 1 },
  ];

  while (queue.length > 0) {
    const current = queue.shift()!;
    if (current.row === target.row && current.col === target.col) {
      return true;
    }

    for (const dir of directions) {
      const nr = current.row + dir.r;
      const nc = current.col + dir.c;

      if (
        nr >= 0 &&
        nr < GRID_SIZE &&
        nc >= 0 &&
        nc < GRID_SIZE &&
        !visited[nr][nc]
      ) {
        const cell = grid[nr][nc];
        // Can walk if not a physical obstacle and not a blocked rock
        if (cell.type !== 'obstacle' && cell.status !== 'blocked') {
          visited[nr][nc] = true;
          queue.push({ row: nr, col: nc });
        }
      }
    }
  }

  return false;
}

export function generateTreasureMaze(questionsPool: Question[]): {
  grid: MazeCell[][];
  playerPos: Position;
  chestPos: Position;
} {
  const playerPos: Position = { row: 0, col: 0 };
  const chestPos: Position = { row: GRID_SIZE - 1, col: GRID_SIZE - 1 };
  const pool = [...questionsPool].sort(() => Math.random() - 0.5);

  let attempts = 0;
  while (attempts < 60) {
    attempts++;
    const grid: MazeCell[][] = [];

    for (let r = 0; r < GRID_SIZE; r++) {
      const row: MazeCell[] = [];
      for (let c = 0; c < GRID_SIZE; c++) {
        row.push({
          row: r,
          col: c,
          type: 'empty',
          status: 'normal',
        });
      }
      grid.push(row);
    }

    grid[chestPos.row][chestPos.col].type = 'chest';

    // Place obstacle bushes (approx 20% density)
    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        if ((r === 0 && c === 0) || (r === chestPos.row && c === chestPos.col)) {
          continue;
        }
        // Protect direct initial neighbors so player always has options
        if ((r === 0 && c === 1) || (r === 1 && c === 0)) {
          continue;
        }
        if ((r === GRID_SIZE - 1 && c === GRID_SIZE - 2) || (r === GRID_SIZE - 2 && c === GRID_SIZE - 1)) {
          continue;
        }

        if (Math.random() < 0.22) {
          grid[r][c].type = 'obstacle';
        }
      }
    }

    // Verify initial traversability before placing stars
    if (!checkPathExists(grid, playerPos, chestPos)) {
      continue;
    }

    // Place Star Questions on ~35% of paths
    let qIdx = 0;
    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        if (
          (r === 0 && c === 0) ||
          (r === chestPos.row && c === chestPos.col) ||
          grid[r][c].type === 'obstacle'
        ) {
          continue;
        }

        if (Math.random() < 0.38 && qIdx < pool.length) {
          grid[r][c].type = 'question';
          grid[r][c].question = pool[qIdx % pool.length];
          qIdx++;
        }
      }
    }

    return { grid, playerPos, chestPos };
  }

  // Fallback simple grid if random generation timed out
  const fallbackGrid: MazeCell[][] = Array.from({ length: GRID_SIZE }, (_, r) =>
    Array.from({ length: GRID_SIZE }, (_, c) => ({
      row: r,
      col: c,
      type: (r === chestPos.row && c === chestPos.col) ? 'chest' : 'empty',
      status: 'normal',
    }))
  );
  return { grid: fallbackGrid, playerPos, chestPos };
}
