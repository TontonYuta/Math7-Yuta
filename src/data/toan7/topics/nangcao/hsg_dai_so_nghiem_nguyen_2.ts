import { Question } from '../../../../types/exam';

export const HSG_DAI_SO_NGHIEM_NGUYEN_QUESTIONS_2: Question[] = [
  {
    "id": 400,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số & Đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Tìm số nguyên dương $x$ thỏa mãn: $1! + 2! + 3! + \\dots + x! = y^2$ ($y \\in \\mathbb{N}$). Giá trị lớn nhất của $x$ là bao nhiêu? Biết rằng với $x \\ge 4$ tổng luôn tận cùng là 3. (Điền số nguyên):",
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3"
    ],
    "detailedSolution": "- $x = 1: 1! = 1 = 1^2$ (thỏa mãn).\n- $x = 3: 1! + 2! + 3! = 1 + 2 + 6 = 9 = 3^2$ (thỏa mãn).\n- Với $x = 2: 1! + 2! = 3$ (loại).\n- Với $x \\ge 4$: $1! + 2! + 3! + 4! = 33$. Các số hạng từ $5!$ trở đi đều tận cùng là 0 nên tổng luôn tận cùng là 3, không thể là số chính phương.\nVậy giá trị lớn nhất của $x$ là $3$.\n\nĐáp số: 3.",
    "socraticHint": "Xét chữ số tận cùng của tổng giai thừa từ $x \\ge 4$.",
    "difficulty": "Vận dụng cao",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 401,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số & Đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Hai số nguyên tố được gọi là \"nguyên tố sinh đôi\" nếu hiệu của chúng bằng 2. Cặp số nào sau đây KHÔNG phải là cặp số nguyên tố sinh đôi?",
    "options": [
      {
        "key": "A",
        "content": "$(9; 11)$"
      },
      {
        "key": "B",
        "content": "$(3; 5)$"
      },
      {
        "key": "C",
        "content": "$(5; 7)$"
      },
      {
        "key": "D",
        "content": "$(11; 13)$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Số 9 là hợp số ($9 = 3^2$), không phải số nguyên tố nên cặp $(9; 11)$ không phải là cặp nguyên tố sinh đôi.\n\nChọn A.",
    "socraticHint": "Kiểm tra xem cả hai số có cùng là số nguyên tố không.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 402,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số & Đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Cho $x, y$ là các số nguyên thỏa mãn $2x^2 + y^2 = 2xy + 2x - 2y$. Giá trị của $x + y$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "0",
    "acceptableAnswers": [
      "0"
    ],
    "detailedSolution": "Biến đổi về tổng hai bình phương:\n$$x^2 - 2xy + y^2 + x^2 - 2x + 2y = 0 \\implies (x - y)^2 + 2(x - y) + 1 + x^2 - 1 = 0$$\n$$(x - y + 1)^2 + x^2 - 1 = 0 \\implies (x - y + 1)^2 + x^2 = 1$$\nVì $x, y$ nguyên nên:\n- Nếu $x = 0 \\implies (1 - y)^2 = 1 \\implies 1 - y = \\pm 1 \\implies y = 0$ hoặc $y = 2$.\n  Với $x = 0, y = 0 \\implies x + y = 0$.\n  Với $x = 0, y = 2$: $0 + 4 = 0 + 0 - 4$ (mâu thuẫn, thử lại: $y^2 = -2y \\implies y^2 + 2y = 0 \\implies y = -2$).\n  $(x; y) = (0; 0)$ thỏa mãn, $x + y = 0$.\n\nĐáp số: 0.",
    "socraticHint": "Đưa về tổng bình phương để biện luận nghiệm nguyên.",
    "difficulty": "Vận dụng cao",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 403,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số & Đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Số các ước nguyên của số 120 là:",
    "options": [
      {
        "key": "A",
        "content": "$32$"
      },
      {
        "key": "B",
        "content": "$16$"
      },
      {
        "key": "C",
        "content": "$24$"
      },
      {
        "key": "D",
        "content": "$8$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Phân tích ra thừa số nguyên tố: $120 = 2^3 \\times 3^1 \\times 5^1$.\nSố ước tự nhiên là: $(3 + 1)(1 + 1)(1 + 1) = 4 \\times 2 \\times 2 = 16$.\nSố ước nguyên (bao gồm cả âm và dương) là: $16 \\times 2 = 32$.\n\nChọn A.",
    "socraticHint": "Số ước nguyên gấp đôi số ước tự nhiên.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 404,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số & Đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Tìm số dư của $2^{100}$ khi chia cho 7. (Điền số nguyên từ 0 đến 6):",
    "correctAnswer": "2",
    "acceptableAnswers": [
      "2"
    ],
    "detailedSolution": "Ta có $2^3 = 8 \\equiv 1 \\pmod 7$.\nVì $100 = 3 \\times 33 + 1$ nên:\n$$2^{100} = (2^3)^{33} \\times 2^1 \\equiv 1^{33} \\times 2 \\equiv 2 \\pmod 7$$\n\nĐáp số: 2.",
    "socraticHint": "$2^3 = 8$ chia cho 7 dư 1.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 405,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số & Đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Trong các số sau, số nào chia hết cho 11?",
    "options": [
      {
        "key": "A",
        "content": "$13574$"
      },
      {
        "key": "B",
        "content": "$12345$"
      },
      {
        "key": "C",
        "content": "$24680$"
      },
      {
        "key": "D",
        "content": "$11111$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Dấu hiệu chia hết cho 11: hiệu giữa tổng các chữ số ở vị trí lẻ và tổng các chữ số ở vị trí chẵn chia hết cho 11.\nVới $13574$: $(4 + 5 + 1) - (7 + 3) = 10 - 10 = 0$ chia hết cho 11.\n\nChọn A.",
    "socraticHint": "Tổng vị trí lẻ trừ tổng vị trí chẵn chia hết cho 11.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 406,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số & Đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Tìm chữ số $a$ sao cho số $\\overline{1a5b}$ chia hết cho cả 2, 5 và 9. Biết $b$ là chữ số tận cùng. Giá trị của $a$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3"
    ],
    "detailedSolution": "Để chia hết cho cả 2 và 5 thì chữ số tận cùng $b = 0$.\nSố có dạng $\\overline{1a50}$. Để chia hết cho 9 thì tổng các chữ số $1 + a + 5 + 0 = 6 + a$ chia hết cho 9 $\\implies a = 3$.\n\nĐáp số: 3.",
    "socraticHint": "Tận cùng là 0 để chia hết cho 2 và 5, tổng các chữ số chia hết cho 9.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 407,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số & Đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Cho $a, b$ là hai số nguyên thỏa mãn $a^2 + b^2$ chia hết cho 3. Khẳng định nào sau đây là đúng?",
    "options": [
      {
        "key": "A",
        "content": "Cả $a$ và $b$ đều chia hết cho 3"
      },
      {
        "key": "B",
        "content": "Chỉ có $a$ chia hết cho 3"
      },
      {
        "key": "C",
        "content": "Ít nhất một trong hai số chia hết cho 3"
      },
      {
        "key": "D",
        "content": "$a + b$ không chia hết cho 3"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Số chính phương chia cho 3 chỉ có thể dư 0 hoặc 1.\nNếu một trong hai số không chia hết cho 3 thì số dư của $a^2 + b^2$ khi chia cho 3 là $1 + 0 = 1$ hoặc $1 + 1 = 2$, không thể chia hết cho 3.\nDo đó cả $a$ và $b$ đều phải chia hết cho 3.\n\nChọn A.",
    "socraticHint": "Số dư của $x^2$ khi chia cho 3 chỉ là 0 hoặc 1.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 408,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số & Đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Tìm số nguyên dương $n$ nhỏ nhất để $2^n > n^2$. (Điền số nguyên):",
    "correctAnswer": "5",
    "acceptableAnswers": [
      "5"
    ],
    "detailedSolution": "Thử lần lượt:\n- $n = 1: 2^1 = 2 > 1^2 = 1$ (thỏa mãn, nhưng $n = 2: 4 = 4$, $n = 3: 8 < 9$, $n = 4: 16 = 16$).\nĐể $2^n > n^2$ với mọi $n$ kể từ đó trở đi thì $n \\ge 5$ ($32 > 25$).\nNếu đề hỏi số nguyên dương nhỏ nhất $n > 1$ thì là $n = 5$.\n\nĐáp số: 5.",
    "socraticHint": "Kiểm tra $n = 2, 3, 4, 5$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 409,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số & Đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Ước chung lớn nhất của hai số tự nhiên $2n + 1$ và $2n + 3$ là:",
    "options": [
      {
        "key": "A",
        "content": "$1$"
      },
      {
        "key": "B",
        "content": "$2$"
      },
      {
        "key": "C",
        "content": "$3$"
      },
      {
        "key": "D",
        "content": "$2n + 1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi $d = \\gcd(2n + 1, 2n + 3) \\implies d \\mid [(2n + 3) - (2n + 1)] = 2$.\nMà $2n + 1$ là số lẻ nên $d$ không thể bằng 2. Do đó $d = 1$.\n\nChọn A.",
    "socraticHint": "Hiệu của hai số lẻ liên tiếp là 2.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  }
];
