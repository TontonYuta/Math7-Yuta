import { Question } from '../../../../types/exam';

export const CHUONG_7_DA_THUC_ARITHMETIC_QUESTIONS: Question[] = [
  {
    "id": 147,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "bieu_thuc_dai_so_khai_niem",
    "topicName": "Biểu thức đại số",
    "content": "Giá trị của biểu thức $A = 2x^2 - 3x + 1$ tại $x = -2$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "15",
    "acceptableAnswers": [
      "15"
    ],
    "detailedSolution": "Thay $x = -2$ vào $A$:\n$$A = 2(-2)^2 - 3(-2) + 1 = 2 \\cdot 4 + 6 + 1 = 8 + 6 + 1 = 15$$\n\nĐáp số: 15.",
    "socraticHint": "Lưu ý $(-2)^2 = 4$ và $-3(-2) = +6$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  },
  {
    "id": 148,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "bieu_thuc_dai_so_khai_niem",
    "topicName": "Đa thức một biến",
    "content": "Bậc của đa thức $P(x) = 5x^4 - 2x^3 + 7x^4 + 3x - 12x^4 + 1$ là:",
    "options": [
      {
        "key": "A",
        "content": "$4$"
      },
      {
        "key": "B",
        "content": "$3$"
      },
      {
        "key": "C",
        "content": "$1$"
      },
      {
        "key": "D",
        "content": "$0$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Thu gọn đa thức:\n$$P(x) = (5 + 7 - 12)x^4 - 2x^3 + 3x + 1 = -2x^3 + 3x + 1$$\nHạng tử bậc cao nhất là $-2x^3$ nên bậc của đa thức là $3$.\n\nChọn B.",
    "socraticHint": "Thu gọn các hạng tử đồng dạng trước khi xác định bậc.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  },
  {
    "id": 149,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "bieu_thuc_dai_so_khai_niem",
    "topicName": "Đa thức một biến",
    "content": "Hệ số cao nhất của đa thức $Q(x) = -4x^3 + 7x^5 - 2x + 9$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "7",
    "acceptableAnswers": [
      "7"
    ],
    "detailedSolution": "Bậc cao nhất là $5$ với số mũ $x^5$, hệ số đi cùng $x^5$ là $7$.\n\nĐáp số: 7.",
    "socraticHint": "Tìm hệ số của lũy thừa có số mũ lớn nhất.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  },
  {
    "id": 150,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "bieu_thuc_dai_so_khai_niem",
    "topicName": "Đa thức một biến",
    "content": "Hệ số tự do của đa thức $M(x) = 3x^3 - 5x + 8$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "8",
    "acceptableAnswers": [
      "8"
    ],
    "detailedSolution": "Hệ số tự do là hạng tử không chứa biến $x$, ở đây là $8$.\n\nĐáp số: 8.",
    "socraticHint": "Hạng tử tự do tương ứng với bậc 0.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  },
  {
    "id": 151,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "phep_tinh_da_thuc_mot_bien",
    "topicName": "Cộng trừ đa thức một biến",
    "content": "Cho $P(x) = 2x^2 + 3x - 1$ và $Q(x) = x^2 - 3x + 4$. Kết quả của $P(x) + Q(x)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$3x^2 + 3$"
      },
      {
        "key": "B",
        "content": "$3x^2 + 6x + 3$"
      },
      {
        "key": "C",
        "content": "$x^2 + 6x - 5$"
      },
      {
        "key": "D",
        "content": "$3x^2 - 3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Cộng các hệ số tương ứng:\n$$P(x) + Q(x) = (2+1)x^2 + (3-3)x + (-1+4) = 3x^2 + 3$$\n\nChọn A.",
    "socraticHint": "Cộng các hạng tử có cùng số mũ với nhau.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  },
  {
    "id": 152,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Nghiệm của đa thức $f(x) = 2x - 8$ là số nào? (Điền số nguyên):",
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4"
    ],
    "detailedSolution": "Cho $f(x) = 0 \\implies 2x - 8 = 0 \\implies 2x = 8 \\implies x = 4$.\n\nĐáp số: 4.",
    "socraticHint": "Nghiệm là giá trị của biến làm cho đa thức bằng 0.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  },
  {
    "id": 153,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Số nào sau đây là nghiệm của đa thức $g(x) = x^2 - 5x + 6$?",
    "options": [
      {
        "key": "A",
        "content": "$x = 1$"
      },
      {
        "key": "B",
        "content": "$x = 2$"
      },
      {
        "key": "C",
        "content": "$x = -2$"
      },
      {
        "key": "D",
        "content": "$x = 4$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Thay $x = 2$: $2^2 - 5(2) + 6 = 4 - 10 + 6 = 0$. Vậy $x = 2$ là nghiệm.\n\nChọn B.",
    "socraticHint": "Thử thay các giá trị vào xem giá trị nào cho kết quả bằng 0.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  },
  {
    "id": 154,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Đa thức $h(x) = x^2 + 9$ có bao nhiêu nghiệm thực? (Điền số nguyên):",
    "correctAnswer": "0",
    "acceptableAnswers": [
      "0",
      "không có"
    ],
    "detailedSolution": "Vì $x^2 \\ge 0$ với mọi $x$ nên $x^2 + 9 \\ge 9 > 0$. Đa thức vô nghiệm.\n\nĐáp số: 0.",
    "socraticHint": "Bình phương luôn không âm cộng thêm 9 luôn lớn hơn 0.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  },
  {
    "id": 155,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "phep_tinh_da_thuc_mot_bien",
    "topicName": "Nhân chia đa thức một biến",
    "content": "Tích của đơn thức $2x$ và đa thức $3x^2 - 4x + 1$ là:",
    "options": [
      {
        "key": "A",
        "content": "$6x^3 - 8x^2 + 2x$"
      },
      {
        "key": "B",
        "content": "$6x^2 - 8x + 2$"
      },
      {
        "key": "C",
        "content": "$5x^3 - 6x^2 + 2x$"
      },
      {
        "key": "D",
        "content": "$6x^3 - 4x + 1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Nhân phân phối: $2x(3x^2 - 4x + 1) = 6x^3 - 8x^2 + 2x$.\n\nChọn A.",
    "socraticHint": "Nhân $2x$ với từng hạng tử bên trong ngoặc.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  }
];
