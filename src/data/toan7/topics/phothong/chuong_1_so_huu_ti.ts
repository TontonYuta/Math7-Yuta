import { Question } from '../../../../types/exam';
import { CHUONG_1_SO_HUU_TI_ARITHMETIC_QUESTIONS } from './chuong_1_so_huu_ti_arithmetic';
import { CHUONG_1_SO_HUU_TI_WORD_QUESTIONS } from './chuong_1_so_huu_ti_word';

export const CHUONG_1_SO_HUU_TI_QUESTIONS: Question[] = [
  ...CHUONG_1_SO_HUU_TI_ARITHMETIC_QUESTIONS,
  ...CHUONG_1_SO_HUU_TI_WORD_QUESTIONS,
];
