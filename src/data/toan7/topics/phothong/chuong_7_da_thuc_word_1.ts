import { Question } from '../../../../types/exam';

export const CHUONG_7_DA_THUC_WORD_QUESTIONS_1: Question[] = [
  {
    "id": 146,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "bieu_thuc_dai_so_khai_niem",
    "topicName": "Biểu thức đại số",
    "content": "Biểu thức đại số biểu thị diện tích hình chữ nhật có chiều dài là $x$ và chiều rộng kém chiều dài $3\\text{ cm}$ là:",
    "options": [
      {
        "key": "A",
        "content": "$x(x - 3)$"
      },
      {
        "key": "B",
        "content": "$x(x + 3)$"
      },
      {
        "key": "C",
        "content": "$2(x + x - 3)$"
      },
      {
        "key": "D",
        "content": "$x^2 - 3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chiều rộng là $x - 3$. Diện tích là dài nhân rộng: $x(x - 3)$.\n\nChọn A.",
    "socraticHint": "Diện tích hình chữ nhật bằng tích hai kích thước.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 165,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "bieu_thuc_dai_so_khai_niem",
    "topicName": "Biểu thức đại số",
    "content": "Biểu thức đại số biểu thị tổng quãng đường đi được của một người đi bộ trong $2$ giờ với vận tốc $x\\text{ (km/h)}$ và đi xe đạp trong $3$ giờ với vận tốc $y\\text{ (km/h)}$ là:",
    "options": [
      {
        "key": "A",
        "content": "$2x + 3y$"
      },
      {
        "key": "B",
        "content": "$3x + 2y$"
      },
      {
        "key": "C",
        "content": "$5(x + y)$"
      },
      {
        "key": "D",
        "content": "$6xy$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Quãng đường đi bộ: $2x$. Quãng đường đi xe đạp: $3y$. Tổng quãng đường là $2x + 3y$.\n\nChọn A.",
    "socraticHint": "Quãng đường bằng vận tốc nhân thời gian.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 156,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "phep_tinh_da_thuc_mot_bien",
    "topicName": "Nhân chia đa thức một biến",
    "content": "Thực hiện phép chia đa thức: $(6x^3 - 9x^2 + 3x) : (3x)$. Khi $x = 3$, giá trị của thương bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "10",
    "acceptableAnswers": [
      "10"
    ],
    "detailedSolution": "Thực hiện chia từng hạng tử: thương là $2x^2 - 3x + 1$.\nTại $x = 3$: $2(3)^2 - 3(3) + 1 = 18 - 9 + 1 = 10$.\n\nĐáp số: 10.",
    "socraticHint": "Chia từng hạng tử cho $3x$ rồi thay $x = 3$.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 157,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "bieu_thuc_dai_so_khai_niem",
    "topicName": "Đa thức một biến",
    "content": "Đa thức nào sau đây được sắp xếp theo lũy thừa giảm dần của biến?",
    "options": [
      {
        "key": "A",
        "content": "$5 - 3x + 4x^2 - x^3$"
      },
      {
        "key": "B",
        "content": "$-x^3 + 4x^2 - 3x + 5$"
      },
      {
        "key": "C",
        "content": "$4x^2 - x^3 - 3x + 5$"
      },
      {
        "key": "D",
        "content": "$-3x + 4x^2 - x^3 + 5$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Các số mũ giảm dần lần lượt là $3, 2, 1, 0$: $-x^3 + 4x^2 - 3x + 5$.\n\nChọn B.",
    "socraticHint": "Số mũ của $x$ phải đi từ lớn nhất đến nhỏ nhất.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 158,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số và đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Biết đa thức $P(x) = ax - 6$ có một nghiệm là $x = 2$. Hệ số $a$ bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3"
    ],
    "detailedSolution": "Vì $x = 2$ là nghiệm nên $P(2) = 0 \\implies a(2) - 6 = 0 \\implies 2a = 6 \\implies a = 3$.\n\nĐáp số: 3.",
    "socraticHint": "Thay $x = 2$ vào đa thức và đặt biểu thức bằng 0.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  }
];
