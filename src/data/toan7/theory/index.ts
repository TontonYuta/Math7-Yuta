import { TheoryScroll } from './theoryTypes';
import { THEORY_CHAPTERS_1_TO_5 } from './theoryChapters1To5';
import { THEORY_CHAPTERS_6_TO_10 } from './theoryChapters6To10';

export * from './theoryTypes';

export const ALL_THEORY_SCROLLS: Record<string, TheoryScroll> = {
  ...THEORY_CHAPTERS_1_TO_5,
  ...THEORY_CHAPTERS_6_TO_10,
};

/**
 * Retrieves the matching Theory Scroll for a chapter or topic
 */
export function getTheoryScroll(chapterId?: string, topicId?: string): TheoryScroll {
  if (chapterId && ALL_THEORY_SCROLLS[chapterId]) {
    return ALL_THEORY_SCROLLS[chapterId];
  }

  // Fallback to Chapter 1
  return ALL_THEORY_SCROLLS['chuong_1_so_huu_ti'];
}
