import { Question } from '../types/exam';

export interface DifficultyInfo {
  level: 1 | 2 | 3 | 4 | 5;
  label: string;
  badgeText: string;
  starsString: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
}

export function getDifficultyInfo(q: Question): DifficultyInfo {
  let level = q.difficultyLevel;
  if (!level) {
    if (q.difficulty === 'Nhận biết') level = 1;
    else if (q.difficulty === 'Thông hiểu') level = 2;
    else if (q.difficulty === 'Vận dụng') level = 3;
    else if (q.difficulty === 'Vận dụng cao') level = 4;
    else level = 2;
  }

  const map: Record<1 | 2 | 3 | 4 | 5, { label: string; badgeText: string; starsString: string; colorClass: string; bgClass: string; borderClass: string }> = {
    1: {
      label: 'Cơ bản (Cấp 1)',
      badgeText: 'Cấp 1/5',
      starsString: '★☆☆☆☆',
      colorClass: 'text-emerald-400',
      bgClass: 'bg-emerald-950/70',
      borderClass: 'border-emerald-500/50',
    },
    2: {
      label: 'Thông hiểu (Cấp 2)',
      badgeText: 'Cấp 2/5',
      starsString: '★★☆☆☆',
      colorClass: 'text-sky-400',
      bgClass: 'bg-sky-950/70',
      borderClass: 'border-sky-500/50',
    },
    3: {
      label: 'Vận dụng (Cấp 3)',
      badgeText: 'Cấp 3/5',
      starsString: '★★★☆☆',
      colorClass: 'text-amber-400',
      bgClass: 'bg-amber-950/70',
      borderClass: 'border-amber-500/50',
    },
    4: {
      label: 'Vận dụng cao (Cấp 4)',
      badgeText: 'Cấp 4/5',
      starsString: '★★★★☆',
      colorClass: 'text-orange-400',
      bgClass: 'bg-orange-950/70',
      borderClass: 'border-orange-500/50',
    },
    5: {
      label: 'Học sinh giỏi (Cấp 5)',
      badgeText: 'Cấp 5/5',
      starsString: '★★★★★',
      colorClass: 'text-purple-400',
      bgClass: 'bg-purple-950/70',
      borderClass: 'border-purple-500/50',
    },
  };

  return {
    level,
    ...map[level],
  };
}
