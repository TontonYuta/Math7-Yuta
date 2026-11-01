import { Question } from '../../../../types/exam';

export const HSG_BDT_CUC_TRI_LUY_THUA_QUESTIONS_2: Question[] = [
  {
    "id": 380,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Cho $x > 0$. Giá trị nhỏ nhất của biểu thức $F = x + \\frac{4}{x}$ là:",
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
        "content": "$5$"
      },
      {
        "key": "D",
        "content": "$8$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Áp dụng BĐT AM-GM cho hai số dương: $x + \\frac{4}{x} \\ge 2\\sqrt{x \\cdot \\frac{4}{x}} = 2\\sqrt{4} = 4$.\nĐẳng thức xảy ra khi $x = 2$.\n\nChọn A.",
    "socraticHint": "Áp dụng BĐT AM-GM hoặc phân tích hằng đẳng thức $(\\sqrt{x} - 2/\\sqrt{x})^2 + 4$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 381,
    "type": "fill",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Tìm giá trị nhỏ nhất của biểu thức $H = |2x - 1| + |2x - 5|$. (Điền số nguyên):",
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4"
    ],
    "detailedSolution": "$H = |2x - 1| + |5 - 2x| \\ge |2x - 1 + 5 - 2x| = 4$.\nĐẳng thức xảy ra khi $1/2 \\le x \\le 5/2$.\n\nĐáp số: 4.",
    "socraticHint": "Đổi dấu biểu thức thứ hai thành $5 - 2x$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 382,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Cho $a, b, c$ là ba số thực thỏa mãn $a^2 + b^2 + c^2 = 3$. Giá trị lớn nhất của $ab + bc + ca$ là:",
    "options": [
      {
        "key": "A",
        "content": "$3$"
      },
      {
        "key": "B",
        "content": "$1$"
      },
      {
        "key": "C",
        "content": "$6$"
      },
      {
        "key": "D",
        "content": "$9$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta luôn có $ab + bc + ca \\le a^2 + b^2 + c^2 = 3$.\nĐẳng thức xảy ra khi $a = b = c = 1$.\n\nChọn A.",
    "socraticHint": "Từ $(a-b)^2 + (b-c)^2 + (c-a)^2 \\ge 0 \\implies ab + bc + ca \\le a^2 + b^2 + c^2$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 383,
    "type": "fill",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Tìm giá trị lớn nhất của biểu thức $G = \\frac{1}{x^2 + 2}$. Nhập phân số tối giản a/b hoặc số thập phân:",
    "correctAnswer": "1/2",
    "acceptableAnswers": [
      "1/2",
      "0.5",
      "0,5"
    ],
    "detailedSolution": "Vì $x^2 \\ge 0 \\implies x^2 + 2 \\ge 2$. Do đó $\\frac{1}{x^2 + 2} \\le \\frac{1}{2}$.\nĐạt được khi $x = 0$.\n\nĐáp số: 1/2.",
    "socraticHint": "Mẫu số nhỏ nhất bằng 2 khi $x = 0$.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 384,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Cho hai số $x, y$ thỏa mãn $x + y = 2$. Giá trị nhỏ nhất của $x^2 + y^2$ là:",
    "options": [
      {
        "key": "A",
        "content": "$2$"
      },
      {
        "key": "B",
        "content": "$4$"
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
    "detailedSolution": "Ta có $(x + y)^2 \\le 2(x^2 + y^2) \\implies 4 \\le 2(x^2 + y^2) \\implies x^2 + y^2 \\ge 2$.\nĐẳng thức xảy ra khi $x = y = 1$.\n\nChọn A.",
    "socraticHint": "Áp dụng BĐT Bunhiacopxki hoặc $(x - y)^2 \\ge 0$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 385,
    "type": "fill",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Tìm giá trị nhỏ nhất của biểu thức $K = |x - 2| + |x + 3|$. (Điền số nguyên):",
    "correctAnswer": "5",
    "acceptableAnswers": [
      "5"
    ],
    "detailedSolution": "$K = |2 - x| + |x + 3| \\ge |2 - x + x + 3| = 5$.\nĐẳng thức xảy ra khi $-3 \\le x \\le 2$.\n\nĐáp số: 5.",
    "socraticHint": "Đổi $|x - 2| = |2 - x|$ rồi cộng.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 386,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Với mọi số thực $x$, biểu thức $A = -x^2 + 4x - 5$ luôn:",
    "options": [
      {
        "key": "A",
        "content": "Nhỏ hơn hoặc bằng -1"
      },
      {
        "key": "B",
        "content": "Lớn hơn hoặc bằng 0"
      },
      {
        "key": "C",
        "content": "Nhỏ hơn hoặc bằng 5"
      },
      {
        "key": "D",
        "content": "Lớn hơn hoặc bằng -1"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "$A = -(x^2 - 4x + 4) - 1 = -(x - 2)^2 - 1 \\le -1$ với mọi $x$.\n\nChọn A.",
    "socraticHint": "Viết biểu thức dưới dạng $-(x - 2)^2 - 1$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 387,
    "type": "fill",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Tìm giá trị nhỏ nhất của biểu thức $L = (x^2 - 9)^2 + |y - 2| + 20$. (Điền số nguyên):",
    "correctAnswer": "20",
    "acceptableAnswers": [
      "20"
    ],
    "detailedSolution": "Vì bình phương và trị tuyệt đối đều $\\ge 0$ nên $L \\ge 20$. Đạt được khi $x = \\pm 3$ và $y = 2$.\n\nĐáp số: 20.",
    "socraticHint": "Cả hai số hạng đều triệt tiêu về 0.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 388,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Cho $a, b > 0$. Bất đẳng thức nào sau đây tương đương với $(a - b)^2 \\ge 0$?",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{a+b}{2} \\ge \\sqrt{ab}$"
      },
      {
        "key": "B",
        "content": "$\\frac{a+b}{2} \\le \\sqrt{ab}$"
      },
      {
        "key": "C",
        "content": "$a^2 + b^2 \\le 2ab$"
      },
      {
        "key": "D",
        "content": "$a + b = 2ab$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "$(a - b)^2 \\ge 0 \\iff a^2 - 2ab + b^2 \\ge 0 \\iff a^2 + 2ab + b^2 \\ge 4ab \\iff (a + b)^2 \\ge 4ab \\iff \\frac{a+b}{2} \\ge \\sqrt{ab}$ (BĐT AM-GM).\n\nChọn A.",
    "socraticHint": "BĐT Cauchy cho hai số không âm suy ra từ bình phương.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 389,
    "type": "fill",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Tìm giá trị nhỏ nhất của biểu thức $M = |x - 1| + |x - 10|$. (Điền số nguyên):",
    "correctAnswer": "9",
    "acceptableAnswers": [
      "9"
    ],
    "detailedSolution": "$M = |x - 1| + |10 - x| \\ge |x - 1 + 10 - x| = 9$.\n\nĐáp số: 9.",
    "socraticHint": "Đổi $|x - 10| = |10 - x|$.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  }
];
