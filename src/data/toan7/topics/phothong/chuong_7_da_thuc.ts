import { Question } from '../../../../types/exam';
import { CHUONG_7_DA_THUC_ARITHMETIC_QUESTIONS } from './chuong_7_da_thuc_arithmetic';
import { CHUONG_7_DA_THUC_WORD_QUESTIONS } from './chuong_7_da_thuc_word';

export const CHUONG_7_DA_THUC_QUESTIONS: Question[] = [
  ...CHUONG_7_DA_THUC_ARITHMETIC_QUESTIONS,
  ...CHUONG_7_DA_THUC_WORD_QUESTIONS,
];
