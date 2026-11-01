import { Question } from '../../../../types/exam';

export const CHUONG_7_DA_THUC_WORD_QUESTIONS_2: Question[] = [
  {
    "id": 159,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "phep_tinh_da_thuc_mot_bien",
    "topicName": "Cộng trừ đa thức một biến",
    "content": "Cho $A(x) = 4x^3 - 2x + 5$ và $B(x) = 4x^3 + 3x - 1$. Hiệu $A(x) - B(x)$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$-5x + 6$"
      },
      {
        "key": "B",
        "content": "$x + 4$"
      },
      {
        "key": "C",
        "content": "$8x^3 + x + 4$"
      },
      {
        "key": "D",
        "content": "$-5x + 4$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Thực hiện trừ:\n$$A(x) - B(x) = (4 - 4)x^3 + (-2 - 3)x + (5 - (-1)) = -5x + 6$$\n\nChọn A.",
    "socraticHint": "Lưu ý đổi dấu toàn bộ hạng tử của $B(x)$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 160,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "phep_tinh_da_thuc_mot_bien",
    "topicName": "Nhân chia đa thức một biến",
    "content": "Tìm số dư trong phép chia đa thức $(x^2 - 3x + 5)$ cho $(x - 1)$. (Điền số nguyên):",
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3"
    ],
    "detailedSolution": "Theo định lý Bézout hoặc chia đa thức:\n$$x^2 - 3x + 5 = (x - 1)(x - 2) + 3$$\nSố dư là $3$.\n\nĐáp số: 3.",
    "socraticHint": "Số dư khi chia $f(x)$ cho $x - 1$ chính là giá trị $f(1)$.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 161,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Đa thức nào sau đây nhận $x = 1$ và $x = -1$ làm nghiệm?",
    "options": [
      {
        "key": "A",
        "content": "$x^2 - 1$"
      },
      {
        "key": "B",
        "content": "$x^2 + 1$"
      },
      {
        "key": "C",
        "content": "$x^2 - 2x + 1$"
      },
      {
        "key": "D",
        "content": "$x^2 + 2x + 1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Với $x = \\pm 1$ thì $(\\pm 1)^2 - 1 = 1 - 1 = 0$.\n\nChọn A.",
    "socraticHint": "Hằng đẳng thức hiệu hai bình phương: $x^2 - 1 = (x-1)(x+1)$.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 162,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "bieu_thuc_dai_so_khai_niem",
    "topicName": "Đa thức một biến",
    "content": "Cho đa thức $K(x) = 3x^2 - x + 4$. Giá trị của $K(0) + K(1)$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "10",
    "acceptableAnswers": [
      "10"
    ],
    "detailedSolution": "Ta có $K(0) = 4$, $K(1) = 3(1)^2 - 1 + 4 = 6$. Tổng là $4 + 6 = 10$.\n\nĐáp số: 10.",
    "socraticHint": "Tính riêng $K(0)$ và $K(1)$ rồi cộng lại.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 163,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "phep_tinh_da_thuc_mot_bien",
    "topicName": "Nhân chia đa thức một biến",
    "content": "Khai triển tích $(x + 2)(x - 3)$ ta thu được kết quả là:",
    "options": [
      {
        "key": "A",
        "content": "$x^2 - x - 6$"
      },
      {
        "key": "B",
        "content": "$x^2 + x - 6$"
      },
      {
        "key": "C",
        "content": "$x^2 - 5x - 6$"
      },
      {
        "key": "D",
        "content": "$x^2 - 6$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "$(x + 2)(x - 3) = x^2 - 3x + 2x - 6 = x^2 - x - 6$.\n\nChọn A.",
    "socraticHint": "Nhân lần lượt từng hạng tử: $x \\cdot x - 3x + 2x - 6$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 164,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Tìm nghiệm dương của đa thức $G(x) = 4x^2 - 36$. (Điền số nguyên):",
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3"
    ],
    "detailedSolution": "$4x^2 - 36 = 0 \\implies 4x^2 = 36 \\implies x^2 = 9 \\implies x = 3$ (vì cần nghiệm dương).\n\nĐáp số: 3.",
    "socraticHint": "Giải phương trình $x^2 = 9$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  }
];
