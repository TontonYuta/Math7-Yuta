import { Question } from '../../../../types/exam';

export const HSG_TONG_SON_BA_THUOC_QUESTIONS_2: Question[] = [
  {
    "id": 360,
    "type": "fill",
    "chapterId": "chuong_3_goc_va_duong_thang_song_song",
    "chapterName": "Chương 3: Góc & Đường thẳng song song",
    "topicId": "goc_doi_dinh_ke_bu_phan_giac",
    "topicName": "Góc ở vị trí đặc biệt & Tia phân giác",
    "content": "Cho $\\Delta ABC$ có trung tuyến $AM = 9\\text{ cm}$. Trọng tâm $G$. Đoạn thẳng $GM$ có độ dài bao nhiêu cm? (Điền số nguyên):",
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3",
      "3cm"
    ],
    "detailedSolution": "Theo tính chất trọng tâm: $GM = \\frac{1}{3} AM = \\frac{1}{3} \\cdot 9 = 3\\text{ cm}$.\n\nĐáp số: 3.",
    "socraticHint": "Trọng tâm cách trung điểm cạnh một khoảng bằng 1/3 đường trung tuyến.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 361,
    "type": "mcq",
    "chapterId": "chuong_3_goc_va_duong_thang_song_song",
    "chapterName": "Chương 3: Góc & Đường thẳng song song",
    "topicId": "goc_doi_dinh_ke_bu_phan_giac",
    "topicName": "Góc ở vị trí đặc biệt & Tia phân giác",
    "content": "Cho tỉ lệ thức $\\frac{a}{b} = \\frac{c}{d}$. Biểu thức nào sau đây bằng với $\\frac{a^2 + b^2}{c^2 + d^2}$?",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{ab}{cd}$"
      },
      {
        "key": "B",
        "content": "$\\frac{a+b}{c+d}$"
      },
      {
        "key": "C",
        "content": "$\\frac{a^2}{c^2}$"
      },
      {
        "key": "D",
        "content": "$\\frac{b^2}{d^2}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đặt $\\frac{a}{b} = \\frac{c}{d} = k \\implies a = kb, c = kd$.\nKhi đó $\\frac{a^2 + b^2}{c^2 + d^2} = \\frac{b^2(k^2 + 1)}{d^2(k^2 + 1)} = \\frac{b^2}{d^2}$.\nMặt khác $\\frac{ab}{cd} = \\frac{kb \\cdot b}{kd \\cdot d} = \\frac{b^2}{d^2}$.\nDo đó $\\frac{a^2 + b^2}{c^2 + d^2} = \\frac{ab}{cd}$.\n\nChọn A.",
    "socraticHint": "Dùng phương pháp đặt $a = kb, c = kd$.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 362,
    "type": "fill",
    "chapterId": "chuong_3_goc_va_duong_thang_song_song",
    "chapterName": "Chương 3: Góc & Đường thẳng song song",
    "topicId": "goc_doi_dinh_ke_bu_phan_giac",
    "topicName": "Góc ở vị trí đặc biệt & Tia phân giác",
    "content": "Tính tổng $S = 1 + 3 + 5 + 7 + \\dots + 99$. (Điền số nguyên):",
    "correctAnswer": "2500",
    "acceptableAnswers": [
      "2500"
    ],
    "detailedSolution": "Số số hạng: $(99 - 1) : 2 + 1 = 50$ số.\nTổng $S = \\frac{(1 + 99) \\times 50}{2} = 50 \\times 50 = 2500$.\n\nĐáp số: 2500.",
    "socraticHint": "Tổng của $n$ số lẻ đầu tiên luôn bằng $n^2$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 363,
    "type": "mcq",
    "chapterId": "chuong_3_goc_va_duong_thang_song_song",
    "chapterName": "Chương 3: Góc & Đường thẳng song song",
    "topicId": "goc_doi_dinh_ke_bu_phan_giac",
    "topicName": "Góc ở vị trí đặc biệt & Tia phân giác",
    "content": "Cho đa thức $f(x) = x^2 - x + 1$. Khẳng định nào sau đây là đúng về giá trị của $f(x)$?",
    "options": [
      {
        "key": "A",
        "content": "$f(x) > 0$ với mọi số thực $x$"
      },
      {
        "key": "B",
        "content": "$f(x) \\ge 1$ với mọi $x$"
      },
      {
        "key": "C",
        "content": "$f(x) = 0$ tại $x = 1$"
      },
      {
        "key": "D",
        "content": "$f(x) < 0$ khi $x < 0$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "$f(x) = x^2 - 2 \\cdot x \\cdot \\frac{1}{2} + \\frac{1}{4} + \\frac{3}{4} = \\left(x - \\frac{1}{2}\\right)^2 + \\frac{3}{4} \\ge \\frac{3}{4} > 0$ với mọi $x$.\n\nChọn A.",
    "socraticHint": "Biến đổi về hằng đẳng thức: $(x - 1/2)^2 + 3/4$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 364,
    "type": "fill",
    "chapterId": "chuong_3_goc_va_duong_thang_song_song",
    "chapterName": "Chương 3: Góc & Đường thẳng song song",
    "topicId": "goc_doi_dinh_ke_bu_phan_giac",
    "topicName": "Góc ở vị trí đặc biệt & Tia phân giác",
    "content": "Tìm số nguyên dương $x$ thỏa mãn: $1 + \\frac{1}{2} + \\frac{1}{3} + \\dots + \\frac{1}{x} < 3$. Giá trị lớn nhất của $x$ là bao nhiêu? Biết rằng $1 + \\frac{1}{2} + \\dots + \\frac{1}{10} = 2{,}9289$ và $1 + \\frac{1}{2} + \\dots + \\frac{1}{11} = 3{,}0198$. (Điền số nguyên):",
    "correctAnswer": "10",
    "acceptableAnswers": [
      "10"
    ],
    "detailedSolution": "Từ dữ kiện đề bài, tại $x = 10$ tổng nhỏ hơn 3 ($2{,}9289 < 3$), còn tại $x = 11$ tổng vượt quá 3 ($3{,}0198 > 3$). Do đó giá trị nguyên lớn nhất là $x = 10$.\n\nĐáp số: 10.",
    "socraticHint": "So sánh giá trị xấp xỉ của tổng tại 10 và 11 với 3.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 365,
    "type": "mcq",
    "chapterId": "chuong_3_goc_va_duong_thang_song_song",
    "chapterName": "Chương 3: Góc & Đường thẳng song song",
    "topicId": "goc_doi_dinh_ke_bu_phan_giac",
    "topicName": "Góc ở vị trí đặc biệt & Tia phân giác",
    "content": "Cho $\\Delta ABC$ cân tại $A$. Trên cạnh $BC$ lấy hai điểm $D$ và $E$ sao cho $BD = CE < \\frac{1}{2} BC$. Kết luận nào sau đây đúng?",
    "options": [
      {
        "key": "A",
        "content": "$\\Delta ADE$ là tam giác cân"
      },
      {
        "key": "B",
        "content": "$\\Delta ADE$ là tam giác đều"
      },
      {
        "key": "C",
        "content": "$\\Delta ADE$ là tam giác vuông"
      },
      {
        "key": "D",
        "content": "$AD > AB$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Xét $\\Delta ABD$ và $\\Delta ACE$:\n$AB = AC$, $BD = CE$, $\\widehat{B} = \\widehat{C}$.\nSuy ra $\\Delta ABD = \\Delta ACE$ (c-g-c) $\\implies AD = AE$.\nVậy $\\Delta ADE$ là tam giác cân tại $A$.\n\nChọn A.",
    "socraticHint": "Chứng minh $\\Delta ABD = \\Delta ACE$ để suy ra hai cạnh bằng nhau.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 366,
    "type": "fill",
    "chapterId": "chuong_3_goc_va_duong_thang_song_song",
    "chapterName": "Chương 3: Góc & Đường thẳng song song",
    "topicId": "goc_doi_dinh_ke_bu_phan_giac",
    "topicName": "Góc ở vị trí đặc biệt & Tia phân giác",
    "content": "Tìm số nguyên $x$ sao cho $(x + 2)(x - 5) < 0$. Có bao nhiêu số nguyên $x$ như vậy? (Điền số nguyên):",
    "correctAnswer": "6",
    "acceptableAnswers": [
      "6"
    ],
    "detailedSolution": "Tích hai thừa số âm khi hai thừa số trái dấu:\nVì $x + 2 > x - 5$ nên $x - 5 < 0$ và $x + 2 > 0 \\implies -2 < x < 5$.\nCác số nguyên thỏa mãn: $\\{-1; 0; 1; 2; 3; 4\\}$ (có 6 số nguyên).\n\nĐáp số: 6.",
    "socraticHint": "Hai số nhân nhau âm thì số lớn hơn dương và số bé hơn âm.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 367,
    "type": "mcq",
    "chapterId": "chuong_3_goc_va_duong_thang_song_song",
    "chapterName": "Chương 3: Góc & Đường thẳng song song",
    "topicId": "goc_doi_dinh_ke_bu_phan_giac",
    "topicName": "Góc ở vị trí đặc biệt & Tia phân giác",
    "content": "Cho $\\frac{a}{b} = \\frac{c}{d}$ với $a, b, c, d > 0$. Khẳng định nào sau đây luôn đúng?",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{a+b}{b} = \\frac{c+d}{d}$"
      },
      {
        "key": "B",
        "content": "$\\frac{a-b}{a} = \\frac{c+d}{c}$"
      },
      {
        "key": "C",
        "content": "$\\frac{a}{c} = \\frac{d}{b}$"
      },
      {
        "key": "D",
        "content": "$a+d = b+c$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Cộng 1 vào hai vế: $\\frac{a}{b} + 1 = \\frac{c}{d} + 1 \\implies \\frac{a+b}{b} = \\frac{c+d}{d}$.\n\nChọn A.",
    "socraticHint": "Cộng thêm 1 vào cả hai vế của tỉ lệ thức.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 368,
    "type": "fill",
    "chapterId": "chuong_3_goc_va_duong_thang_song_song",
    "chapterName": "Chương 3: Góc & Đường thẳng song song",
    "topicId": "goc_doi_dinh_ke_bu_phan_giac",
    "topicName": "Góc ở vị trí đặc biệt & Tia phân giác",
    "content": "Tìm số tự nhiên $n$ sao cho $3^{n+2} - 3^n = 216$. (Điền số nguyên):",
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3"
    ],
    "detailedSolution": "Đặt nhân tử chung: $3^n(3^2 - 1) = 216 \\implies 3^n \\cdot 8 = 216 \\implies 3^n = 27 = 3^3 \\implies n = 3$.\n\nĐáp số: 3.",
    "socraticHint": "Đặt $3^n$ làm thừa số chung.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 369,
    "type": "mcq",
    "chapterId": "chuong_3_goc_va_duong_thang_song_song",
    "chapterName": "Chương 3: Góc & Đường thẳng song song",
    "topicId": "goc_doi_dinh_ke_bu_phan_giac",
    "topicName": "Góc ở vị trí đặc biệt & Tia phân giác",
    "content": "Cho $\\Delta ABC$ có ba góc thỏa mãn $\\widehat{A} = 2\\widehat{B} = 3\\widehat{C}$. Số đo của góc $\\widehat{A}$ là:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{1080^\\circ}{11}$"
      },
      {
        "key": "B",
        "content": "$90^\\circ$"
      },
      {
        "key": "C",
        "content": "$100^\\circ$"
      },
      {
        "key": "D",
        "content": "$120^\\circ$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có $\\frac{\\widehat{A}}{6} = \\frac{\\widehat{B}}{3} = \\frac{\\widehat{C}}{2} = \\frac{180^\\circ}{6+3+2} = \\frac{180^\\circ}{11}$.\nDo đó $\\widehat{A} = 6 \\times \\frac{180^\\circ}{11} = \\frac{1080^\\circ}{11} \\approx 98{,}18^\\circ$.\n\nChọn A.",
    "socraticHint": "Chia các số cho 6 để đưa về dãy tỉ số bằng nhau.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  }
];
