import { Question } from '../../../../types/exam';
import { CHUONG_6_TI_LE_THUC_ARITHMETIC_QUESTIONS } from './chuong_6_ti_le_thuc_arithmetic';
import { CHUONG_6_TI_LE_THUC_WORD_QUESTIONS } from './chuong_6_ti_le_thuc_word';

export const CHUONG_6_TI_LE_THUC_QUESTIONS: Question[] = [
  ...CHUONG_6_TI_LE_THUC_ARITHMETIC_QUESTIONS,
  ...CHUONG_6_TI_LE_THUC_WORD_QUESTIONS,
];
