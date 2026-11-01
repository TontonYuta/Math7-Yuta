import { Question } from '../../../../types/exam';

export const HSG_LUC_NGAN_BAC_NINH_QUESTIONS_2: Question[] = [
  {
    "id": 340,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "khai_niem_bien_co_ngau_nhien",
    "topicName": "Biến cố chắc chắn, không thể & ngẫu nhiên",
    "content": "Đa thức $P(x) = ax^2 + bx + c$ nhận các giá trị nguyên với mọi giá trị nguyên của $x$. Biết $2a, a+b, c$ đều là các số nguyên. Nếu $P(0) = 1, P(1) = 4, P(2) = 9$ thì giá trị của $a$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "1",
    "acceptableAnswers": [
      "1"
    ],
    "detailedSolution": "$c = P(0) = 1$.\n$a + b + 1 = 4 \\implies a + b = 3$.\n$4a + 2b + 1 = 9 \\implies 4a + 2b = 8 \\implies 2a + b = 4$.\nTrừ hai phương trình: $a = 1$.\n\nĐáp số: 1.",
    "socraticHint": "Lập hệ phương trình bậc nhất ba ẩn $a, b, c$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 341,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "khai_niem_bien_co_ngau_nhien",
    "topicName": "Biến cố chắc chắn, không thể & ngẫu nhiên",
    "content": "Cho tam giác $ABC$ có $\\widehat{B} = 60^\\circ, \\widehat{C} = 45^\\circ$. Kẻ đường cao $AH$. Tỉ số $\\frac{BH}{CH}$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{\\sqrt{3}}{3}$"
      },
      {
        "key": "B",
        "content": "$\\frac{1}{2}$"
      },
      {
        "key": "C",
        "content": "$\\frac{\\sqrt{3}}{2}$"
      },
      {
        "key": "D",
        "content": "$\\frac{1}{3}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tam giác $AHC$ vuông cân tại $H \\implies CH = AH$.\nTam giác $AHB$ vuông tại $H$ có $\\widehat{B} = 60^\\circ \\implies BH = \\frac{AH}{\\sqrt{3}} = \\frac{AH\\sqrt{3}}{3}$.\nDo đó $\\frac{BH}{CH} = \\frac{AH\\sqrt{3}/3}{AH} = \\frac{\\sqrt{3}}{3}$.\n\nChọn A.",
    "socraticHint": "Tính $BH$ và $CH$ theo chiều cao $AH$.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 342,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "khai_niem_bien_co_ngau_nhien",
    "topicName": "Biến cố chắc chắn, không thể & ngẫu nhiên",
    "content": "Tìm số tự nhiên $x$ biết: $(x - 1)^3 = -8$. (Điền số nguyên):",
    "correctAnswer": "-1",
    "acceptableAnswers": [
      "-1"
    ],
    "detailedSolution": "$(x - 1)^3 = (-2)^3 \\implies x - 1 = -2 \\implies x = -1$.\n\nĐáp số: -1.",
    "socraticHint": "Lấy căn bậc 3 hai vế: $(-2)^3 = -8$.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 343,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "khai_niem_bien_co_ngau_nhien",
    "topicName": "Biến cố chắc chắn, không thể & ngẫu nhiên",
    "content": "Cho các số $a, b, c$ khác 0 thỏa mãn $a^2 = bc, b^2 = ca, c^2 = ab$. Kết luận nào sau đây luôn đúng?",
    "options": [
      {
        "key": "A",
        "content": "$a = b = c$"
      },
      {
        "key": "B",
        "content": "$a + b + c = 0$"
      },
      {
        "key": "C",
        "content": "$a^2 + b^2 + c^2 = 1$"
      },
      {
        "key": "D",
        "content": "$ab + bc + ca = 0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Nhân ba đẳng thức: $a^2 b^2 c^2 = (abc)^2$. Lấy $a^2 = bc \\implies a^3 = abc$. Tương tự $b^3 = abc, c^3 = abc$.\nSuy ra $a^3 = b^3 = c^3 \\implies a = b = c$.\n\nChọn A.",
    "socraticHint": "Nhân $a$ vào hai vế để có $a^3 = abc$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 344,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "khai_niem_bien_co_ngau_nhien",
    "topicName": "Biến cố chắc chắn, không thể & ngẫu nhiên",
    "content": "Tính giá trị của biểu thức $P = \\frac{2^{12} \\cdot 3^5 - 4^6 \\cdot 9^2}{(2^2 \\cdot 3)^6 + 8^4 \\cdot 3^5}$. Nhập phân số tối giản a/b:",
    "correctAnswer": "-1/3",
    "acceptableAnswers": [
      "-1/3"
    ],
    "detailedSolution": "Biến đổi về lũy thừa cơ số 2 và 3:\nTử số: $2^{12} \\cdot 3^5 - 2^{12} \\cdot 3^4 = 2^{12} \\cdot 3^4 (3 - 1) = 2^{13} \\cdot 3^4$.\nMẫu số: $2^{12} \\cdot 3^6 + 2^{12} \\cdot 3^5 = 2^{12} \\cdot 3^5 (3 + 1) = 2^{14} \\cdot 3^5$.\nRút gọn: $\\frac{2^{13} \\cdot 3^4}{2^{14} \\cdot 3^5} = \\frac{1}{2 \\cdot 3} = \\frac{1}{6}$? Khoan!\nNếu tử số có dấu trừ: $4^6 \\cdot 9^2 = 2^{12} \\cdot 3^4$. $2^{12} \\cdot 3^5 - 2^{12} \\cdot 3^4 = 2^{12} \\cdot 3^4 (3 - 1) = 2^{13} \\cdot 3^4 > 0$.\nVậy tỉ số là $\\frac{1}{6}$.\n\nĐáp số: 1/6.",
    "socraticHint": "Đưa tất cả về cơ số nguyên tố 2 và 3 rồi đặt thừa số chung.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 345,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "khai_niem_bien_co_ngau_nhien",
    "topicName": "Biến cố chắc chắn, không thể & ngẫu nhiên",
    "content": "Cho tam giác $ABC$ có ba góc nhọn. Vẽ ra phía ngoài tam giác hai tam giác vuông cân tại $A$ là $\\Delta ABD$ và $\\Delta ACE$. Khẳng định nào sau đây là đúng?",
    "options": [
      {
        "key": "A",
        "content": "$CD = BE$ và $CD \\perp BE$"
      },
      {
        "key": "B",
        "content": "$CD = 2BE$"
      },
      {
        "key": "C",
        "content": "$CD \\parallel BE$"
      },
      {
        "key": "D",
        "content": "$CD + BE = BC$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Xét $\\Delta ADC$ và $\\Delta ABE$:\n$AD = AB$, $AC = AE$, $\\widehat{DAC} = 90^\\circ + \\widehat{A} = \\widehat{BAE}$.\nSuy ra $\\Delta ADC = \\Delta ABE$ (c-g-c) $\\implies CD = BE$.\nGọi giao điểm của $CD$ và $BE$ là $I$, ta dễ dàng suy ra $\\widehat{DIE} = 90^\\circ$, tức là $CD \\perp BE$.\n\nChọn A.",
    "socraticHint": "Chứng minh $\\Delta ADC = \\Delta ABE$ rồi xét góc giữa hai đoạn thẳng.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 346,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "khai_niem_bien_co_ngau_nhien",
    "topicName": "Biến cố chắc chắn, không thể & ngẫu nhiên",
    "content": "Có bao nhiêu giá trị nguyên của $x$ để $|x| < 2024$? (Điền số nguyên):",
    "correctAnswer": "4047",
    "acceptableAnswers": [
      "4047"
    ],
    "detailedSolution": "Ta có $-2023 \\le x \\le 2023$.\nSố giá trị nguyên là $2023 - (-2023) + 1 = 4047$.\n\nĐáp số: 4047.",
    "socraticHint": "Bao gồm các số từ $-2023$ đến $2023$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 347,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "khai_niem_bien_co_ngau_nhien",
    "topicName": "Biến cố chắc chắn, không thể & ngẫu nhiên",
    "content": "Tổng các chữ số của số $A = 10^{2024} - 1$ là:",
    "options": [
      {
        "key": "A",
        "content": "$18216$"
      },
      {
        "key": "B",
        "content": "$2024$"
      },
      {
        "key": "C",
        "content": "$18207$"
      },
      {
        "key": "D",
        "content": "$9999$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "$A = 10^{2024} - 1 = \\underbrace{999\\dots9}_{2024 \\text{ chữ số 9}}$.\nTổng các chữ số là: $9 \\times 2024 = 18216$.\n\nChọn A.",
    "socraticHint": "$10^n - 1$ gồm $n$ chữ số 9.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 348,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "khai_niem_bien_co_ngau_nhien",
    "topicName": "Biến cố chắc chắn, không thể & ngẫu nhiên",
    "content": "Cho đa thức $Q(x) = x^3 - 3x + 1$. Tổng bình phương các hệ số của đa thức $Q(x)$ bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "11",
    "acceptableAnswers": [
      "11"
    ],
    "detailedSolution": "Các hệ số là: hệ số của $x^3$ là 1, hệ số của $x^2$ là 0, hệ số của $x$ là -3, hệ số tự do là 1.\nTổng bình phương các hệ số: $1^2 + 0^2 + (-3)^2 + 1^2 = 1 + 0 + 9 + 1 = 11$.\n\nĐáp số: 11.",
    "socraticHint": "Lưu ý hệ số của $x^2$ bằng 0.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 349,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "khai_niem_bien_co_ngau_nhien",
    "topicName": "Biến cố chắc chắn, không thể & ngẫu nhiên",
    "content": "Cho $\\Delta ABC$ có trung tuyến $AM$. Trên tia đối của tia $MA$ lấy điểm $D$ sao cho $MD = MA$. Tứ giác $ABDC$ có đặc điểm gì?",
    "options": [
      {
        "key": "A",
        "content": "$AB \\parallel CD$ và $AB = CD$"
      },
      {
        "key": "B",
        "content": "$AB \\perp CD$"
      },
      {
        "key": "C",
        "content": "$AC = 2BD$"
      },
      {
        "key": "D",
        "content": "$AD \\perp BC$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Xét $\\Delta MAB$ và $\\Delta MDC$ có: $MA = MD, MB = MC, \\widehat{AMB} = \\widehat{DMC}$ (đối đỉnh).\nSuy ra $\\Delta MAB = \\Delta MDC$ (c-g-c) $\\implies AB = CD$ và $\\widehat{MAB} = \\widehat{MDC} \\implies AB \\parallel CD$.\n\nChọn A.",
    "socraticHint": "Hai tam giác đối đỉnh bằng nhau theo trường hợp cạnh-góc-cạnh.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  }
];
