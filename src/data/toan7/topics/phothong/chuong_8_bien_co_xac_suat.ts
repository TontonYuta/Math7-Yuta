import { Question } from '../../../../types/exam';
import { CHUONG_8_BIEN_CO_XAC_SUAT_ARITHMETIC_QUESTIONS } from './chuong_8_bien_co_xac_suat_arithmetic';
import { CHUONG_8_BIEN_CO_XAC_SUAT_WORD_QUESTIONS } from './chuong_8_bien_co_xac_suat_word';

export const CHUONG_8_BIEN_CO_XAC_SUAT_QUESTIONS: Question[] = [
  ...CHUONG_8_BIEN_CO_XAC_SUAT_ARITHMETIC_QUESTIONS,
  ...CHUONG_8_BIEN_CO_XAC_SUAT_WORD_QUESTIONS,
];
