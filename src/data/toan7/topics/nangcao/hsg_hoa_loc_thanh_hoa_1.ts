import { Question } from '../../../../types/exam';

export const HSG_HOA_LOC_THANH_HOA_QUESTIONS_1: Question[] = [
  {
    "id": 290,
    "type": "fill",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Chứng minh rằng với mọi số tự nhiên $n$, phân số $A = \\frac{12n + 1}{30n + 2}$ là phân số tối giản. Ước chung lớn nhất của tử số và mẫu số luôn bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "1",
    "acceptableAnswers": [
      "1"
    ],
    "detailedSolution": "Gọi $d = \\gcd(12n + 1, 30n + 2)$:\n$\\implies d \\mid 5(12n + 1) = 60n + 5$\nvà $d \\mid 2(30n + 2) = 60n + 4$.\nSuy ra $d \\mid [(60n + 5) - (60n + 4)] = 1 \\implies d = 1$.\nDo đó phân số luôn tối giản.\n\nĐáp số: 1.",
    "socraticHint": "Nhân tử với 5 và mẫu với 2 để triệt tiêu $60n$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 291,
    "type": "mcq",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Cho các số thực $a, b, c$ thỏa mãn $\\frac{a}{b+c} = \\frac{b}{c+a} = \\frac{c}{a+b}$. Giá trị của biểu thức $P = \\frac{b+c}{a} + \\frac{c+a}{b} + \\frac{a+b}{c}$ khi $a + b + c \\ne 0$ là:",
    "options": [
      {
        "key": "A",
        "content": "$6$"
      },
      {
        "key": "B",
        "content": "$3$"
      },
      {
        "key": "C",
        "content": "$-3$"
      },
      {
        "key": "D",
        "content": "$1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Cộng tử và mẫu theo dãy tỉ số bằng nhau:\n$$\\frac{a}{b+c} = \\frac{b}{c+a} = \\frac{c}{a+b} = \\frac{a+b+c}{2(a+b+c)} = \\frac{1}{2}$$\nSuy ra $b+c = 2a, c+a = 2b, a+b = 2c$.\nKhi đó $P = 2 + 2 + 2 = 6$.\n\nChọn A.",
    "socraticHint": "Cộng 3 tỉ số lại: hằng số tỉ lệ bằng $1/2$.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 292,
    "type": "fill",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Tính giá trị biểu thức $A = 1 - 2 + 3 - 4 + 5 - 6 + \\dots + 2023 - 2024$. (Điền số nguyên âm):",
    "correctAnswer": "-1012",
    "acceptableAnswers": [
      "-1012"
    ],
    "detailedSolution": "Ghép từng cặp hai số liên tiếp:\n$$A = (1 - 2) + (3 - 4) + \\dots + (2023 - 2024)$$\nCó tất cả $2024 : 2 = 1012$ cặp, mỗi cặp có giá trị bằng $-1$.\nVậy $A = 1012 \\times (-1) = -1012$.\n\nĐáp số: -1012.",
    "socraticHint": "Ghép mỗi cặp $(2k - 1) - 2k = -1$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 293,
    "type": "mcq",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Tìm giá trị nguyên của $x$ để phân thức $M = \\frac{5}{x - 3}$ đạt giá trị nhỏ nhất:",
    "options": [
      {
        "key": "A",
        "content": "$x = 2$"
      },
      {
        "key": "B",
        "content": "$x = 4$"
      },
      {
        "key": "C",
        "content": "$x = 0$"
      },
      {
        "key": "D",
        "content": "$x = -2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Để $M$ đạt GTNN thì $M$ phải nhận giá trị âm, tức là $x - 3 < 0 \\implies x < 3$.\nĐể phân số âm có giá trị nhỏ nhất (âm lớn nhất về giá trị tuyệt đối) thì mẫu số âm phải lớn nhất, tức là $x - 3 = -1 \\implies x = 2$.\nKhi đó $M = \\frac{5}{-1} = -5$.\n\nChọn A.",
    "socraticHint": "Phân số có tử dương thì GTNN đạt được khi mẫu số âm và gần 0 nhất.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 294,
    "type": "fill",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Cho hai số $x, y$ thỏa mãn $(2x - 1)^2 + (y + 2)^2 = 0$. Giá trị của $x + y$ là bao nhiêu? (Nhập phân số tối giản a/b hoặc số thập phân):",
    "correctAnswer": "-1.5",
    "acceptableAnswers": [
      "-1.5",
      "-3/2",
      "-1,5"
    ],
    "detailedSolution": "Vì tổng hai bình phương bằng 0 nên từng biểu thức phải bằng 0:\n$2x - 1 = 0 \\implies x = 0{,}5$.\n$y + 2 = 0 \\implies y = -2$.\nSuy ra $x + y = 0{,}5 - 2 = -1{,}5 = -\\frac{3}{2}$.\n\nĐáp số: -1.5.",
    "socraticHint": "Tổng hai số không âm bằng 0 khi cả hai số đồng thời bằng 0.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 295,
    "type": "mcq",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Cho tam giác $ABC$ có $\\widehat{B} = 45^\\circ, \\widehat{C} = 30^\\circ$. Đường cao $AH$. Khẳng định nào sau đây là đúng về mối liên hệ giữa $BH$ và $CH$?",
    "options": [
      {
        "key": "A",
        "content": "$CH = BH \\sqrt{3}$"
      },
      {
        "key": "B",
        "content": "$CH = 2BH$"
      },
      {
        "key": "C",
        "content": "$CH = BH$"
      },
      {
        "key": "D",
        "content": "$CH = \\frac{1}{2} BH$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tam giác $ABH$ vuông tại $H$ có $\\widehat{B} = 45^\\circ \\implies AH = BH$.\nTam giác $ACH$ vuông tại $H$ có $\\widehat{C} = 30^\\circ \\implies CH = AH \\cot(30^\\circ) = AH \\sqrt{3} = BH \\sqrt{3}$.\n\nChọn A.",
    "socraticHint": "Tam giác vuông có góc 45 độ là tam giác vuông cân, suy ra $AH = BH$.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 296,
    "type": "fill",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Tính giá trị của đa thức $P(x) = x^5 - 5x^4 + 5x^3 - 5x^2 + 5x - 1$ tại $x = 4$. (Điền số nguyên):",
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3"
    ],
    "detailedSolution": "Thay $5 = x + 1$ với $x = 4$:\n$$P(x) = x^5 - (x+1)x^4 + (x+1)x^3 - (x+1)x^2 + (x+1)x - 1$$\n$$= x^5 - x^5 - x^4 + x^4 + x^3 - x^3 - x^2 + x^2 + x - 1 = x - 1$$\nTại $x = 4$: $P(4) = 4 - 1 = 3$.\n\nĐáp số: 3.",
    "socraticHint": "Tách hệ số $5 = x + 1$ và rút gọn triệt tiêu liên tiếp.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 297,
    "type": "mcq",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Có bao nhiêu cặp số nguyên $(x; y)$ thỏa mãn đẳng thức: $x^2 + y^2 = 5$?",
    "options": [
      {
        "key": "A",
        "content": "$8$ cặp"
      },
      {
        "key": "B",
        "content": "$4$ cặp"
      },
      {
        "key": "C",
        "content": "$2$ cặp"
      },
      {
        "key": "D",
        "content": "$12$ cặp"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Phân tích 5 thành tổng hai số chính phương: $5 = 1 + 4 = (\\pm 1)^2 + (\\pm 2)^2$.\nCác cặp $(x; y)$ là: $(\\pm 1; \\pm 2)$ và $(\\pm 2; \\pm 1)$. Có tất cả $4 + 4 = 8$ cặp.\n\nChọn A.",
    "socraticHint": "5 chỉ có thể phân tích thành $1^2 + 2^2$. Đổi dấu và đổi vị trí $x, y$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 298,
    "type": "fill",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Cho $\\frac{x}{3} = \\frac{y}{4}$ và $x \\cdot y = 48$ với $x, y > 0$. Giá trị của $x + y$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "14",
    "acceptableAnswers": [
      "14"
    ],
    "detailedSolution": "Đặt $x = 3k, y = 4k$ ($k > 0$):\n$$xy = 3k \\cdot 4k = 12k^2 = 48 \\implies k^2 = 4 \\implies k = 2$$\nSuy ra $x = 6, y = 8$. Tổng $x + y = 6 + 8 = 14$.\n\nĐáp số: 14.",
    "socraticHint": "Đặt ẩn phụ $k$ rồi thế vào tích $x \\cdot y$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 299,
    "type": "mcq",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Cho $a, b, c$ là độ dài ba cạnh của một tam giác. Bất đẳng thức nào sau đây luôn đúng?",
    "options": [
      {
        "key": "A",
        "content": "$(a + b - c)(b + c - a)(c + a - b) > 0$"
      },
      {
        "key": "B",
        "content": "$a^2 + b^2 = c^2$"
      },
      {
        "key": "C",
        "content": "$a + b = c$"
      },
      {
        "key": "D",
        "content": "$a^2 + b^2 < c^2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Theo bất đẳng thức tam giác, tổng hai cạnh luôn lớn hơn cạnh thứ ba:\n$a + b - c > 0$, $b + c - a > 0$, $c + a - b > 0$.\nTích ba số dương luôn là một số dương.\n\nChọn A.",
    "socraticHint": "Áp dụng BĐT tam giác cho từng thừa số.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  }
];
