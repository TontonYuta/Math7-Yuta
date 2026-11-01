import { Question } from '../../../../types/exam';

export const HSG_BDT_CUC_TRI_LUY_THUA_QUESTIONS_1: Question[] = [
  {
    "id": 370,
    "type": "fill",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Tìm giá trị nhỏ nhất của biểu thức $A = |x - 2022| + |x - 2024|$. (Điền số nguyên):",
    "correctAnswer": "2",
    "acceptableAnswers": [
      "2"
    ],
    "detailedSolution": "Áp dụng BĐT $|a| + |b| \\ge |a + b|$:\n$$A = |x - 2022| + |2024 - x| \\ge |x - 2022 + 2024 - x| = 2$$\nDấu đẳng thức xảy ra khi $2022 \\le x \\le 2024$.\n\nĐáp số: 2.",
    "socraticHint": "Đổi $|x - 2024| = |2024 - x|$ rồi cộng lại.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 371,
    "type": "fill",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Tìm giá trị nhỏ nhất của biểu thức $B = |x - 1| + |x - 2| + |x - 3|$. (Điền số nguyên):",
    "correctAnswer": "2",
    "acceptableAnswers": [
      "2"
    ],
    "detailedSolution": "Ta có $|x - 1| + |x - 3| = |x - 1| + |3 - x| \\ge 2$.\nĐồng thời $|x - 2| \\ge 0$.\nDấu bằng xảy ra khi $x = 2$. Khi đó $B = |2 - 1| + 0 + |2 - 3| = 2$.\n\nĐáp số: 2.",
    "socraticHint": "Ghép cặp hai đầu $|x-1| + |3-x| \\ge 2$, điểm rơi tại $x = 2$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 372,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Cho biểu thức $P = \\frac{2024}{(x - 1)^2 + 4}$. Giá trị lớn nhất của $P$ là:",
    "options": [
      {
        "key": "A",
        "content": "$506$"
      },
      {
        "key": "B",
        "content": "$2024$"
      },
      {
        "key": "C",
        "content": "$1012$"
      },
      {
        "key": "D",
        "content": "Không có GTLN"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vì $(x - 1)^2 \\ge 0$ nên $(x - 1)^2 + 4 \\ge 4$.\nPhân thức đạt GTLN khi mẫu số đạt GTNN: $P \\le \\frac{2024}{4} = 506$.\nĐạt được khi $x = 1$.\n\nChọn A.",
    "socraticHint": "Mẫu số nhỏ nhất bằng 4 khi $x = 1$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 373,
    "type": "fill",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Tìm giá trị nhỏ nhất của biểu thức $C = (x - 3)^2 + |y + 4| + 15$. (Điền số nguyên):",
    "correctAnswer": "15",
    "acceptableAnswers": [
      "15"
    ],
    "detailedSolution": "Vì $(x - 3)^2 \\ge 0$ và $|y + 4| \\ge 0$ với mọi $x, y$ nên $C \\ge 15$.\nDấu đẳng thức xảy ra khi $x = 3$ và $y = -4$.\n\nĐáp số: 15.",
    "socraticHint": "Tổng hai số không âm cộng với 15 luôn lớn hơn hoặc bằng 15.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 374,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Cho $x, y$ là hai số thực dương thỏa mãn $x + y = 1$. Giá trị nhỏ nhất của biểu thức $S = \\frac{1}{x} + \\frac{1}{y}$ là:",
    "options": [
      {
        "key": "A",
        "content": "$4$"
      },
      {
        "key": "B",
        "content": "$2$"
      },
      {
        "key": "C",
        "content": "$1$"
      },
      {
        "key": "D",
        "content": "$8$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Áp dụng BĐT cộng mẫu: $\\frac{1}{x} + \\frac{1}{y} \\ge \\frac{4}{x + y} = \\frac{4}{1} = 4$.\nĐẳng thức xảy ra khi $x = y = \\frac{1}{2}$.\n\nChọn A.",
    "socraticHint": "Bất đẳng thức Schwarz: $\\frac{1}{x} + \\frac{1}{y} \\ge \\frac{4}{x+y}$.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 375,
    "type": "fill",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Tìm giá trị lớn nhất của biểu thức $Q = 10 - (2x - 3)^2 - 4(y + 1)^2$. (Điền số nguyên):",
    "correctAnswer": "10",
    "acceptableAnswers": [
      "10"
    ],
    "detailedSolution": "Vì $-(2x - 3)^2 \\le 0$ và $-4(y + 1)^2 \\le 0$ nên $Q \\le 10$.\nĐạt được khi $x = 1{,}5$ và $y = -1$.\n\nĐáp số: 10.",
    "socraticHint": "Các số trừ đi luôn không âm, nên biểu thức lớn nhất bằng 10.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 376,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Cho ba số thực dương $a, b, c$. Khẳng định nào sau đây là bất đẳng thức đúng?",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{a+b}{c} + \\frac{b+c}{a} + \\frac{c+a}{b} \\ge 6$"
      },
      {
        "key": "B",
        "content": "$\\frac{a+b}{c} + \\frac{b+c}{a} + \\frac{c+a}{b} \\le 6$"
      },
      {
        "key": "C",
        "content": "$\\frac{a+b}{c} + \\frac{b+c}{a} + \\frac{c+a}{b} = 3$"
      },
      {
        "key": "D",
        "content": "$\\frac{a+b}{c} + \\frac{b+c}{a} + \\frac{c+a}{b} \\ge 9$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tách biểu thức thành 6 phân số:\n$$\\left(\\frac{a}{b} + \\frac{b}{a}\\right) + \\left(\\frac{b}{c} + \\frac{c}{b}\\right) + \\left(\\frac{c}{a} + \\frac{a}{c}\\right)$$\nVì mỗi cặp số nghịch đảo $\\frac{x}{y} + \\frac{y}{x} \\ge 2$ nên tổng lớn hơn hoặc bằng $2 + 2 + 2 = 6$.\n\nChọn A.",
    "socraticHint": "Nhóm các cặp phân thức nghịch đảo của nhau.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 377,
    "type": "fill",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Tìm giá trị nhỏ nhất của biểu thức $D = x^2 + 2x + 10$. (Điền số nguyên):",
    "correctAnswer": "9",
    "acceptableAnswers": [
      "9"
    ],
    "detailedSolution": "$D = (x + 1)^2 + 9 \\ge 9$. Đẳng thức xảy ra khi $x = -1$.\n\nĐáp số: 9.",
    "socraticHint": "Viết biểu thức thành $(x + 1)^2 + 9$.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 378,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Cho hai số $a, b$ cùng dấu. Bất đẳng thức nào sau đây luôn đúng?",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{a}{b} + \\frac{b}{a} \\ge 2$"
      },
      {
        "key": "B",
        "content": "$\\frac{a}{b} + \\frac{b}{a} \\le 2$"
      },
      {
        "key": "C",
        "content": "$\\frac{a}{b} + \\frac{b}{a} < 0$"
      },
      {
        "key": "D",
        "content": "$\\frac{a}{b} + \\frac{b}{a} = 1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Xét hiệu: $\\frac{a}{b} + \\frac{b}{a} - 2 = \\frac{a^2 + b^2 - 2ab}{ab} = \\frac{(a - b)^2}{ab}$.\nVì $a, b$ cùng dấu nên $ab > 0$, mà $(a - b)^2 \\ge 0$ nên hiệu $\\ge 0$.\n\nChọn A.",
    "socraticHint": "Xét hiệu và đưa về bình phương: $\\frac{(a-b)^2}{ab} \\ge 0$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 379,
    "type": "fill",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Biểu thức $E = 5 - (x^2 - 4)^2$ đạt giá trị lớn nhất khi $x^2$ bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4"
    ],
    "detailedSolution": "Vì $-(x^2 - 4)^2 \\le 0$ nên $E \\le 5$. Đạt GTLN khi $x^2 - 4 = 0 \\implies x^2 = 4$.\n\nĐáp số: 4.",
    "socraticHint": "Bình phương bằng 0 khi biểu thức bên trong bằng 0.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  }
];
