import { Question } from '../../../../types/exam';

export const HSG_DAI_SO_NGHIEM_NGUYEN_QUESTIONS_1: Question[] = [
  {
    "id": 390,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số & Đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Tìm số nghiệm nguyên dương của phương trình: $\\frac{1}{x} + \\frac{1}{y} = \\frac{1}{3}$. (Điền số nguyên):",
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3"
    ],
    "detailedSolution": "Quy đồng khử mẫu:\n$$3(x + y) = xy \\implies xy - 3x - 3y = 0 \\implies (x - 3)(y - 3) = 9$$\nCác ước dương của 9 là $1, 3, 9$:\n- $x - 3 = 1, y - 3 = 9 \\implies (x; y) = (4; 12)$\n- $x - 3 = 3, y - 3 = 3 \\implies (x; y) = (6; 6)$\n- $x - 3 = 9, y - 3 = 1 \\implies (x; y) = (12; 4)$\nCó tất cả $3$ cặp nghiệm nguyên dương.\n\nĐáp số: 3.",
    "socraticHint": "Biến đổi về $(x - 3)(y - 3) = 9$.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 391,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số & Đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Phương trình $x^2 - y^2 = 2026$ có bao nhiêu nghiệm nguyên $(x; y)$?",
    "options": [
      {
        "key": "A",
        "content": "$0$ nghiệm"
      },
      {
        "key": "B",
        "content": "$2$ nghiệm"
      },
      {
        "key": "C",
        "content": "$4$ nghiệm"
      },
      {
        "key": "D",
        "content": "Vô số nghiệm"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Hiệu hai số chính phương $x^2 - y^2 = (x - y)(x + y)$.\nHai thừa số $x - y$ và $x + y$ có cùng tính chẵn lẻ nên tích của chúng chia cho 4 chỉ có thể dư 0, 1 hoặc 3 (không thể chia cho 4 dư 2).\nMà $2026 = 4 \\times 506 + 2$ chia cho 4 dư 2. Do đó phương trình vô nghiệm.\n\nChọn A.",
    "socraticHint": "Xét số dư của hiệu hai số chính phương khi chia cho 4.",
    "difficulty": "Vận dụng cao",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 392,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số & Đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Tìm số cặp số nguyên $(x; y)$ thỏa mãn: $x y + 3x - 5y = 17$. (Điền số nguyên):",
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4"
    ],
    "detailedSolution": "Thêm bớt đưa về phương trình ước số:\n$$x(y + 3) - 5(y + 3) + 15 = 17 \\implies (x - 5)(y + 3) = 2$$\nCác ước của 2 là $\\{\\pm 1; \\pm 2\\}$ (có 4 ước). Do đó có 4 cặp nghiệm nguyên.\n\nĐáp số: 4.",
    "socraticHint": "Đưa về phương trình tích $(x - 5)(y + 3) = 2$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 393,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số & Đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Cho $p$ là số nguyên tố lớn hơn 3. Số dư của $p^2$ khi chia cho 24 là:",
    "options": [
      {
        "key": "A",
        "content": "$1$"
      },
      {
        "key": "B",
        "content": "$5$"
      },
      {
        "key": "C",
        "content": "$7$"
      },
      {
        "key": "D",
        "content": "$23$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vì $p$ là số nguyên tố lớn hơn 3 nên $p$ lẻ $\\implies p^2 \\equiv 1 \\pmod 8$.\nĐồng thời $p$ không chia hết cho 3 nên $p \\equiv \\pm 1 \\pmod 3 \\implies p^2 \\equiv 1 \\pmod 3$.\nVì $\\gcd(8, 3) = 1$ nên $p^2 - 1$ chia hết cho $8 \\times 3 = 24$, tức $p^2$ chia 24 dư 1.\n\nChọn A.",
    "socraticHint": "Số nguyên tố $p > 3$ không chia hết cho 2 và 3.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 394,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số & Đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Tìm số nguyên tố $p$ sao cho $p^2 + 8$ cũng là một số nguyên tố. Giá trị của $p$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3"
    ],
    "detailedSolution": "- Với $p = 2: p^2 + 8 = 12$ (hợp số).\n- Với $p = 3: p^2 + 8 = 17$ (số nguyên tố, thỏa mãn).\n- Với $p > 3: p \\equiv \\pm 1 \\pmod 3 \\implies p^2 \\equiv 1 \\pmod 3 \\implies p^2 + 8 \\equiv 9 \\equiv 0 \\pmod 3$ (hợp số).\nVậy duy nhất $p = 3$.\n\nĐáp số: 3.",
    "socraticHint": "Xét số dư của $p$ khi chia cho 3.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 395,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số & Đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Tích của bốn số tự nhiên liên tiếp cộng thêm 1 luôn là:",
    "options": [
      {
        "key": "A",
        "content": "Một số chính phương"
      },
      {
        "key": "B",
        "content": "Một số nguyên tố"
      },
      {
        "key": "C",
        "content": "Một số chia hết cho 5"
      },
      {
        "key": "D",
        "content": "Một số lẻ chia cho 4 dư 3"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi 4 số là $n, n+1, n+2, n+3$:\n$$n(n+1)(n+2)(n+3) + 1 = [n(n+3)][(n+1)(n+2)] + 1 = (n^2 + 3n)(n^2 + 3n + 2) + 1$$\nĐặt $t = n^2 + 3n \\implies t(t + 2) + 1 = t^2 + 2t + 1 = (t + 1)^2$ là số chính phương.\n\nChọn A.",
    "socraticHint": "Ghép cặp $(n)(n+3)$ và $(n+1)(n+2)$ rồi đặt ẩn phụ.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 396,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số & Đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Tìm số các số nguyên $x$ sao cho phân thức $\\frac{2x + 3}{x - 2}$ nhận giá trị nguyên. (Điền số nguyên):",
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4"
    ],
    "detailedSolution": "$\\frac{2x + 3}{x - 2} = \\frac{2(x - 2) + 7}{x - 2} = 2 + \\frac{7}{x - 2}$.\nĐể nguyên thì $x - 2 \\in Ư(7) = \\{\\pm 1; \\pm 7\\}$ (có 4 giá trị).\n\nĐáp số: 4.",
    "socraticHint": "Tách tử số thành $2(x - 2) + 7$.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 397,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số & Đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Cho phương trình $x^2 + y^2 = 2023$. Khẳng định nào sau đây là đúng?",
    "options": [
      {
        "key": "A",
        "content": "Phương trình không có nghiệm nguyên"
      },
      {
        "key": "B",
        "content": "Phương trình có đúng 2 cặp nghiệm"
      },
      {
        "key": "C",
        "content": "Phương trình có vô số nghiệm"
      },
      {
        "key": "D",
        "content": "Phương trình có 4 cặp nghiệm"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Một số chính phương khi chia cho 4 chỉ có thể dư 0 hoặc 1.\nDo đó tổng hai số chính phương $x^2 + y^2$ chia cho 4 chỉ có thể dư 0, 1 hoặc 2.\nMà $2023 = 4 \\times 505 + 3$ chia cho 4 dư 3. Mâu thuẫn! Vậy phương trình vô nghiệm.\n\nChọn A.",
    "socraticHint": "Xét số dư của số chính phương khi chia cho 4.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 398,
    "type": "fill",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số & Đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Tìm số nguyên dương $n$ nhỏ nhất sao cho $n^2 + 1$ chia hết cho $5$. (Điền số nguyên):",
    "correctAnswer": "2",
    "acceptableAnswers": [
      "2"
    ],
    "detailedSolution": "Thử lần lượt $n = 1: 1^2 + 1 = 2$; $n = 2: 2^2 + 1 = 5$ chia hết cho 5.\nVậy số nguyên dương nhỏ nhất là $n = 2$.\n\nĐáp số: 2.",
    "socraticHint": "Thử các số tự nhiên từ 1.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 399,
    "type": "mcq",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số & Đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "content": "Một số tự nhiên có 3 chữ số giống nhau luôn chia hết cho số nào sau đây?",
    "options": [
      {
        "key": "A",
        "content": "$37$"
      },
      {
        "key": "B",
        "content": "$17$"
      },
      {
        "key": "C",
        "content": "$19$"
      },
      {
        "key": "D",
        "content": "$23$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Số có 3 chữ số giống nhau là $\\overline{aaa} = 111 \\cdot a = 3 \\times 37 \\times a$.\nDo đó số này luôn chia hết cho 37.\n\nChọn A.",
    "socraticHint": "Phân tích $111 = 3 \\times 37$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  }
];
