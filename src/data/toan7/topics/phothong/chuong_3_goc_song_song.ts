import { Question } from '../../../../types/exam';
import { CHUONG_3_GOC_SONG_SONG_ARITHMETIC_QUESTIONS } from './chuong_3_goc_song_song_arithmetic';
import { CHUONG_3_GOC_SONG_SONG_WORD_QUESTIONS } from './chuong_3_goc_song_song_word';

export const CHUONG_3_GOC_SONG_SONG_QUESTIONS: Question[] = [
  ...CHUONG_3_GOC_SONG_SONG_ARITHMETIC_QUESTIONS,
  ...CHUONG_3_GOC_SONG_SONG_WORD_QUESTIONS,
];
