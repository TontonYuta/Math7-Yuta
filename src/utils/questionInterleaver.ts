import { Question } from '../types/exam';
import { GameLevel } from '../games/world-map/types';

/**
 * Checks if a question belongs to the Phổ thông (foundational) tier
 */
export function isPhothongQuestion(q: Question): boolean {
  if (q.track === 'PHOTHONG') return true;
  if (q.difficulty === 'Nhận biết' || q.difficulty === 'Thông hiểu') return true;
  if (q.difficultyLevel && q.difficultyLevel <= 2) return true;
  return false;
}

/**
 * Checks if a question belongs to the Nâng cao / HSG tier
 */
export function isNangcaoQuestion(q: Question): boolean {
  if (q.track === 'NANGCAO') return true;
  if (q.difficulty === 'Vận dụng' || q.difficulty === 'Vận dụng cao') return true;
  if (q.difficultyLevel && q.difficultyLevel >= 3) return true;
  return false;
}

/**
 * Fisher-Yates array shuffle helper
 */
function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Selects an interleaved, difficulty-balanced question pool for a game level.
 * Guarantees a harmonious blend of Phổ thông and Nâng cao (15 Chuyên đề HSG).
 */
export function getBalancedLevelPool(
  selectedLevel: GameLevel | null,
  allQuestions: Question[]
): Question[] {
  if (!selectedLevel) return allQuestions;

  // Boss Battle: progressive difficulty from Phase 1 to Final Phase
  if (selectedLevel.isBoss) {
    let bossPool = allQuestions.filter((q) => q.chapterId === selectedLevel.worldId);
    if (bossPool.length < 8) bossPool = allQuestions;

    const ptQuestions = shuffleArray(bossPool.filter(isPhothongQuestion));
    const ncQuestions = shuffleArray(bossPool.filter(isNangcaoQuestion));

    // Fallback if either pool is depleted
    const ptFallback = ptQuestions.length >= 3 ? ptQuestions : shuffleArray(allQuestions.filter(isPhothongQuestion));
    const ncFallback = ncQuestions.length >= 5 ? ncQuestions : shuffleArray(allQuestions.filter(isNangcaoQuestion));

    // 8-question progressive sequence for Boss:
    // Turn 1-2: Phổ thông (Cơ bản -> Thông hiểu)
    // Turn 3-4: Vận dụng (Nâng cao cấp 3-4)
    // Turn 5-8: Vận dụng cao HSG (Đòn tất sát cấp 5)
    return [
      ptFallback[0] || bossPool[0],
      ptFallback[1] || bossPool[1],
      ncFallback[0] || bossPool[2],
      ncFallback[1] || bossPool[3],
      ncFallback[2] || bossPool[4],
      ncFallback[3] || bossPool[5],
      ncFallback[4] || bossPool[6],
      ncFallback[5] || bossPool[7],
    ].filter(Boolean);
  }

  // Regular level: topic or chapter matching
  let topicPool = selectedLevel.topicId
    ? allQuestions.filter((q) => q.topicId === selectedLevel.topicId)
    : [];

  // Supplement from current chapter if needed
  const chapterPool = allQuestions.filter((q) => q.chapterId === selectedLevel.worldId);

  let ptList = topicPool.filter(isPhothongQuestion);
  let ncList = topicPool.filter(isNangcaoQuestion);

  // If topic lacks advanced or foundational questions, borrow from the chapter
  if (ptList.length < 6) {
    const extraPt = chapterPool.filter((q) => isPhothongQuestion(q) && !ptList.includes(q));
    ptList = [...ptList, ...extraPt];
    if (ptList.length < 6) {
      ptList = [...ptList, ...allQuestions.filter(isPhothongQuestion)];
    }
  }

  if (ncList.length < 6) {
    const extraNc = chapterPool.filter((q) => isNangcaoQuestion(q) && !ncList.includes(q));
    ncList = [...ncList, ...extraNc];
    if (ncList.length < 6) {
      ncList = [...ncList, ...allQuestions.filter(isNangcaoQuestion)];
    }
  }

  const shuffledPt = shuffleArray(ptList);
  const shuffledNc = shuffleArray(ncList);

  // Weave alternately: PT, NC, PT, NC...
  const interleaved: Question[] = [];
  const maxLen = Math.max(shuffledPt.length, shuffledNc.length);

  for (let i = 0; i < maxLen; i++) {
    if (i < shuffledPt.length) interleaved.push(shuffledPt[i]);
    if (i < shuffledNc.length) interleaved.push(shuffledNc[i]);
  }

  return interleaved.length >= 6 ? interleaved : allQuestions;
}

/**
 * Organizes 9 questions for the 3x3 Poneglyph Picture Grid.
 * Places 5 Phổ thông and 4 Nâng cao questions, with the center tile #4
 * guaranteed to be the highest difficulty HSG capstone question!
 */
export function layoutPoneglyphTiles(pool: Question[]): Question[] {
  const ptList = shuffleArray(pool.filter(isPhothongQuestion));
  const ncList = shuffleArray(pool.filter(isNangcaoQuestion));

  // Find the most challenging HSG question for the center tile (difficultyLevel 5 or 'Vận dụng cao')
  let centerQ = ncList.find((q) => q.difficultyLevel === 5 || q.difficulty === 'Vận dụng cao');
  if (!centerQ && ncList.length > 0) centerQ = ncList[0];

  const remainingNc = ncList.filter((q) => q !== centerQ);

  // Ensure we have enough questions (with fallbacks if needed)
  const safePt = ptList.length >= 5 ? ptList : pool.slice(0, 5);
  const safeNc = remainingNc.length >= 3 ? remainingNc : pool.slice(5, 8);

  // Grid layout (3x3):
  // [0: PT, 1: NC, 2: PT]
  // [3: NC, 4: CENTER_HSG, 5: NC]
  // [6: PT, 7: NC, 8: PT]
  const tiles: Question[] = [
    safePt[0] || pool[0],
    safeNc[0] || pool[1],
    safePt[1] || pool[2],
    safeNc[1] || pool[3],
    centerQ || pool[4],
    safeNc[2] || pool[5],
    safePt[2] || pool[6],
    safePt[3] || pool[7],
    safePt[4] || pool[8],
  ];

  return tiles;
}

/**
 * Organizes questions for Maze checkpoints in Treasure Hunt.
 * Alternates foundational and advanced questions along corridors,
 * placing an advanced HSG gatekeeper before the treasure chest.
 */
export function layoutMazeCheckpoints(pool: Question[], checkpointCount: number = 10): Question[] {
  const ptList = shuffleArray(pool.filter(isPhothongQuestion));
  const ncList = shuffleArray(pool.filter(isNangcaoQuestion));

  const questions: Question[] = [];
  let ptIdx = 0;
  let ncIdx = 0;

  for (let i = 0; i < checkpointCount; i++) {
    // Final gatekeeper checkpoint before chest is always Nâng cao / HSG
    if (i === checkpointCount - 1 && ncList.length > 0) {
      const bossGate = ncList.find((q) => q.difficultyLevel === 5) || ncList[ncIdx % ncList.length];
      questions.push(bossGate);
      continue;
    }

    // Alternating checkpoints: even = Phổ thông, odd = Nâng cao
    if (i % 2 === 0) {
      if (ptList.length > 0) {
        questions.push(ptList[ptIdx % ptList.length]);
        ptIdx++;
      } else {
        questions.push(pool[i % pool.length]);
      }
    } else {
      if (ncList.length > 0) {
        questions.push(ncList[ncIdx % ncList.length]);
        ncIdx++;
      } else {
        questions.push(pool[i % pool.length]);
      }
    }
  }

  return questions;
}
