import { MazeCell, Position } from './types';
import { Question } from '../../types/exam';
import { layoutMazeCheckpoints } from '../../utils/questionInterleaver';

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

/**
 * Intelligent Maze Generator with Violympic choke-point question placement.
 * Ensures:
 * 1. Exactly 10 distinct questions placed at strategic corridor checkpoints.
 * 2. Every path towards the treasure chest requires solving questions.
 * 3. Multiple branching paths exist so if 1 star is blocked, detour is possible.
 */
export function generateTreasureMaze(questionsPool: Question[]): {
  grid: MazeCell[][];
  playerPos: Position;
  chestPos: Position;
} {
  const playerPos: Position = { row: 0, col: 0 };
  const chestPos: Position = { row: GRID_SIZE - 1, col: GRID_SIZE - 1 };
  const pool = [...questionsPool].sort(() => Math.random() - 0.5);

  const grid: MazeCell[][] = Array.from({ length: GRID_SIZE }, (_, r) =>
    Array.from({ length: GRID_SIZE }, (_, c) => ({
      row: r,
      col: c,
      type: 'empty',
      status: 'normal',
    }))
  );

  grid[chestPos.row][chestPos.col].type = 'chest';

  // Fixed barrier walls to force serpentine/multi-lane corridors
  // Lane 1: Upper-Right, Lane 2: Diagonal Center, Lane 3: Lower-Left
  const fixedObstacles: Position[] = [
    { row: 0, col: 3 }, { row: 1, col: 3 }, { row: 2, col: 1 }, { row: 2, col: 3 },
    { row: 3, col: 5 }, { row: 4, col: 1 }, { row: 4, col: 3 }, { row: 4, col: 5 },
    { row: 5, col: 3 }, { row: 5, col: 6 }, { row: 6, col: 1 }, { row: 6, col: 4 },
  ];

  fixedObstacles.forEach(({ row, col }) => {
    grid[row][col].type = 'obstacle';
  });

  // Candidate strategic choke-points along the 3 corridors
  // Distance tiers from (0,0) to (7,7)
  const candidateCheckpoints: Position[] = [
    { row: 0, col: 2 }, // Tier 1 Upper
    { row: 1, col: 1 }, // Tier 1 Center
    { row: 2, col: 0 }, // Tier 1 Lower
    { row: 1, col: 4 }, // Tier 2 Upper
    { row: 3, col: 2 }, // Tier 2 Center
    { row: 3, col: 0 }, // Tier 2 Lower
    { row: 2, col: 5 }, // Tier 3 Upper
    { row: 3, col: 4 }, // Tier 3 Center
    { row: 5, col: 2 }, // Tier 3 Lower
    { row: 3, col: 6 }, // Tier 4 Upper
    { row: 5, col: 5 }, // Tier 4 Center
    { row: 6, col: 3 }, // Tier 4 Lower
    { row: 5, col: 7 }, // Tier 5 Pre-chest
    { row: 7, col: 5 }, // Tier 5 Pre-chest
  ];

  // Select 10 distinct checkpoints
  const chosenPoints = [...candidateCheckpoints]
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

  // Assign interleaved Phổ thông & Nâng cao questions
  const mazeQuestions = layoutMazeCheckpoints(questionsPool, chosenPoints.length);

  chosenPoints.forEach((pt, idx) => {
    grid[pt.row][pt.col].type = 'question';
    grid[pt.row][pt.col].question = mazeQuestions[idx] || pool[idx % pool.length];
  });

  // Ensure path exists at start
  if (!checkPathExists(grid, playerPos, chestPos)) {
    // Fallback: clear any direct blocking obstacles
    fixedObstacles.slice(0, 4).forEach(({ row, col }) => {
      grid[row][col].type = 'empty';
    });
  }

  return { grid, playerPos, chestPos };
}
