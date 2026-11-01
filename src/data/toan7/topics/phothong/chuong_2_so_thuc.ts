import { Question } from '../../../../types/exam';
import { CHUONG_2_SO_THUC_ARITHMETIC_QUESTIONS } from './chuong_2_so_thuc_arithmetic';
import { CHUONG_2_SO_THUC_WORD_QUESTIONS } from './chuong_2_so_thuc_word';

export const CHUONG_2_SO_THUC_QUESTIONS: Question[] = [
  ...CHUONG_2_SO_THUC_ARITHMETIC_QUESTIONS,
  ...CHUONG_2_SO_THUC_WORD_QUESTIONS,
];
