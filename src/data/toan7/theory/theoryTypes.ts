export interface TheoryFormula {
  name: string;
  latex: string;
  explanation?: string;
}

export interface TheoryScroll {
  id: string; // chapterId or topicId
  chapterId: string;
  chapterName: string;
  title: string;
  onePieceTheme: string; // e.g. 'Bí Kíp Biển Đông • East Blue'
  summary: string;
  coreFormulas: TheoryFormula[];
  keyRules: string[];
  hsgProTips: string[];
}
