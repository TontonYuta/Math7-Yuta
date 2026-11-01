import { Question } from '../../../../types/exam';
import { CHUONG_9_QUAN_HE_TAM_GIAC_ARITHMETIC_QUESTIONS } from './chuong_9_quan_he_tam_giac_arithmetic';
import { CHUONG_9_QUAN_HE_TAM_GIAC_WORD_QUESTIONS } from './chuong_9_quan_he_tam_giac_word';

export const CHUONG_9_QUAN_HE_TAM_GIAC_QUESTIONS: Question[] = [
  ...CHUONG_9_QUAN_HE_TAM_GIAC_ARITHMETIC_QUESTIONS,
  ...CHUONG_9_QUAN_HE_TAM_GIAC_WORD_QUESTIONS,
];
