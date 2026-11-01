import { Question } from '../../../../types/exam';
import { CHUONG_5_THU_THAP_DU_LIEU_ARITHMETIC_QUESTIONS } from './chuong_5_thu_thap_du_lieu_arithmetic';
import { CHUONG_5_THU_THAP_DU_LIEU_WORD_QUESTIONS } from './chuong_5_thu_thap_du_lieu_word';

export const CHUONG_5_THU_THAP_DU_LIEU_QUESTIONS: Question[] = [
  ...CHUONG_5_THU_THAP_DU_LIEU_ARITHMETIC_QUESTIONS,
  ...CHUONG_5_THU_THAP_DU_LIEU_WORD_QUESTIONS,
];
