import { Question } from '../../../../types/exam';
import { CHUONG_10_HINH_KHOI_THUC_TIEN_ARITHMETIC_QUESTIONS } from './chuong_10_hinh_khoi_thuc_tien_arithmetic';
import { CHUONG_10_HINH_KHOI_THUC_TIEN_WORD_QUESTIONS } from './chuong_10_hinh_khoi_thuc_tien_word';

export const CHUONG_10_HINH_KHOI_THUC_TIEN_QUESTIONS: Question[] = [
  ...CHUONG_10_HINH_KHOI_THUC_TIEN_ARITHMETIC_QUESTIONS,
  ...CHUONG_10_HINH_KHOI_THUC_TIEN_WORD_QUESTIONS,
];
