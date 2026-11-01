import { Question } from '../../../../types/exam';
import { CHUONG_4_TAM_GIAC_BANG_NHAU_ARITHMETIC_QUESTIONS } from './chuong_4_tam_giac_bang_nhau_arithmetic';
import { CHUONG_4_TAM_GIAC_BANG_NHAU_WORD_QUESTIONS } from './chuong_4_tam_giac_bang_nhau_word';

export const CHUONG_4_TAM_GIAC_BANG_NHAU_QUESTIONS: Question[] = [
  ...CHUONG_4_TAM_GIAC_BANG_NHAU_ARITHMETIC_QUESTIONS,
  ...CHUONG_4_TAM_GIAC_BANG_NHAU_WORD_QUESTIONS,
];
