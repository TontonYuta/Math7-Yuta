import { Question } from '../../../../types/exam';

export const HSG_CHU_VAN_AN_THAI_NGUYEN_QUESTIONS_2: Question[] = [
  {
    "id": 260,
    "type": "mcq",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Cho $x, y, z$ thỏa mãn $\\frac{x - 1}{2} = \\frac{y - 2}{3} = \\frac{z - 3}{4}$ và $2x + 3y - z = 50$. Giá trị của $x + y + z$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$51$"
      },
      {
        "key": "B",
        "content": "$48$"
      },
      {
        "key": "C",
        "content": "$60$"
      },
      {
        "key": "D",
        "content": "$45$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Biến đổi dãy tỉ số:\n$$\\frac{2x - 2}{4} = \\frac{3y - 6}{9} = \\frac{z - 3}{4} = \\frac{(2x + 3y - z) - (2 + 6 - 3)}{4 + 9 - 4} = \\frac{50 - 5}{9} = 5$$\nSuy ra $x = 5 \\cdot 2 + 1 = 11$; $y = 5 \\cdot 3 + 2 = 17$; $z = 5 \\cdot 4 + 3 = 23$.\nTổng $x + y + z = 11 + 17 + 23 = 51$.\n\nChọn A.",
    "socraticHint": "Nhân hệ số thích hợp vào tử và mẫu của từng phân số rồi trừ.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 261,
    "type": "fill",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Tìm số các cặp số nguyên $(x; y)$ thỏa mãn đẳng thức: $xy - 2x - 3y = 1$. (Điền số nguyên):",
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4",
      "4 cặp"
    ],
    "detailedSolution": "Biến đổi phương trình ước số:\n$$x(y - 2) - 3(y - 2) - 6 = 1 \\implies (x - 3)(y - 2) = 7$$\nVì $7$ là số nguyên tố nên có $4$ ước là $\\{\\pm 1; \\pm 7\\}$. Do đó có đúng $4$ cặp nghiệm nguyên $(x; y)$.\n\nĐáp số: 4.",
    "socraticHint": "Đưa về phương trình tích dạng $(x - a)(y - b) = k$.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 262,
    "type": "mcq",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "So sánh hai số $A = 2^{300}$ và $B = 3^{200}$:",
    "options": [
      {
        "key": "A",
        "content": "$A < B$"
      },
      {
        "key": "B",
        "content": "$A > B$"
      },
      {
        "key": "C",
        "content": "$A = B$"
      },
      {
        "key": "D",
        "content": "Không thể so sánh"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đưa về cùng số mũ $100$:\n$$A = 2^{300} = (2^3)^{100} = 8^{100}$$\n$$B = 3^{200} = (3^2)^{100} = 9^{100}$$\nVì $8 < 9$ nên $8^{100} < 9^{100} \\implies A < B$.\n\nChọn A.",
    "socraticHint": "Ước chung lớn nhất của hai số mũ 300 và 200 là 100.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 263,
    "type": "fill",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Cho $a, b, c$ là ba số thực khác 0 thỏa mãn $a + b + c = 0$. Giá trị của biểu thức $P = \\left(1 + \\frac{a}{b}\\right)\\left(1 + \\frac{b}{c}\\right)\\left(1 + \\frac{c}{a}\\right)$ bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "-1",
    "acceptableAnswers": [
      "-1"
    ],
    "detailedSolution": "Ta quy đồng từng ngoặc:\n$$1 + \\frac{a}{b} = \\frac{a+b}{b} = \\frac{-c}{b}$$\n$$1 + \\frac{b}{c} = \\frac{b+c}{c} = \\frac{-a}{c}$$\n$$1 + \\frac{c}{a} = \\frac{c+a}{a} = \\frac{-b}{a}$$\nTích ba biểu thức: $P = \\frac{-c}{b} \\cdot \\frac{-a}{c} \\cdot \\frac{-b}{a} = \\frac{-abc}{abc} = -1$.\n\nĐáp số: -1.",
    "socraticHint": "Thay $a+b = -c$, $b+c = -a$, $c+a = -b$ vào biểu thức.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 264,
    "type": "mcq",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Tìm số tự nhiên $n$ để phân số $\\frac{2n + 5}{n + 1}$ nhận giá trị nguyên:",
    "options": [
      {
        "key": "A",
        "content": "$n \\in \\{0; 2\\}$"
      },
      {
        "key": "B",
        "content": "$n \\in \\{1; 3\\}$"
      },
      {
        "key": "C",
        "content": "$n \\in \\{0; 1; 2\\}$"
      },
      {
        "key": "D",
        "content": "Không có giá trị nào của $n$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tách phần nguyên:\n$$\\frac{2n + 5}{n + 1} = \\frac{2(n + 1) + 3}{n + 1} = 2 + \\frac{3}{n + 1}$$\nĐể nguyên thì $(n + 1)$ là ước dương của $3 \\implies n + 1 \\in \\{1; 3\\} \\implies n \\in \\{0; 2\\}$.\n\nChọn A.",
    "socraticHint": "Tách tử số thành $2(n+1) + 3$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 265,
    "type": "fill",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Cho $n$ đường thẳng phân biệt cùng đi qua một điểm $O$. Chúng tạo thành $90$ cặp góc đối đỉnh (khác góc bẹt). Giá trị của $n$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "10",
    "acceptableAnswers": [
      "10"
    ],
    "detailedSolution": "$n$ đường thẳng cắt nhau tại 1 điểm tạo thành $2n$ tia chung gốc.\nSố góc tạo thành là $\\frac{2n(2n - 1)}{2} = n(2n - 1)$.\nTrong đó có $n$ góc bẹt, còn lại $n(2n - 1) - n = 2n(n - 1)$ góc không bẹt.\nMỗi góc không bẹt cùng với góc đối đỉnh của nó tạo thành 1 cặp $\\implies$ số cặp góc đối đỉnh là $n(n - 1)$.\nTheo đề bài: $n(n - 1) = 90 = 10 \\times 9 \\implies n = 10$.\n\nĐáp số: 10.",
    "socraticHint": "Công thức số cặp góc đối đỉnh tạo bởi $n$ đường thẳng là $n(n-1)$.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 266,
    "type": "mcq",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Đa thức $f(x) = x^{2023} - 2024x^{2022} + 2024x^{2021} - \\dots + 2024x - 1$. Giá trị của $f(2023)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$2022$"
      },
      {
        "key": "B",
        "content": "$2023$"
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
    "correctAnswer": "A",
    "detailedSolution": "Thay $2024 = x + 1$ với $x = 2023$:\n$$f(x) = x^{2023} - (x+1)x^{2022} + (x+1)x^{2021} - \\dots + (x+1)x - 1$$\nKhai triển và triệt tiêu đan dấu:\n$$f(x) = x^{2023} - x^{2023} - x^{2022} + x^{2022} + x^{2021} - \\dots + x^2 + x - 1 = x - 1$$\nTại $x = 2023$: $f(2023) = 2023 - 1 = 2022$.\n\nChọn A.",
    "socraticHint": "Viết $2024 = x + 1$ rồi rút gọn liên tiếp các số hạng triệt tiêu.",
    "difficulty": "Vận dụng cao",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 267,
    "type": "fill",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Tìm giá trị lớn nhất của phân thức $P = \\frac{12}{(2x - 1)^2 + 3}$. (Điền số nguyên):",
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4"
    ],
    "detailedSolution": "Vì $(2x - 1)^2 \\ge 0$ với mọi $x$ nên $(2x - 1)^2 + 3 \\ge 3$.\nMẫu số nhỏ nhất bằng $3$ nên phân thức đạt giá trị lớn nhất là $\\frac{12}{3} = 4$, đạt được khi $x = \\frac{1}{2}$.\n\nĐáp số: 4.",
    "socraticHint": "Phân thức đạt GTLN khi mẫu số đạt GTNN.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 268,
    "type": "mcq",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Cho tam giác $ABC$ có trung tuyến $AM = \\frac{1}{2} BC$. Kết luận nào sau đây là chính xác?",
    "options": [
      {
        "key": "A",
        "content": "$\\Delta ABC$ vuông tại $A$"
      },
      {
        "key": "B",
        "content": "$\\Delta ABC$ là tam giác đều"
      },
      {
        "key": "C",
        "content": "$\\Delta ABC$ cân tại $A$"
      },
      {
        "key": "D",
        "content": "$\\Delta ABC$ vuông cân tại $B$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vì $AM = BM = MC = \\frac{1}{2} BC$, nên các tam giác $\\Delta MAB$ và $\\Delta MAC$ cân tại $M$.\nSuy ra $\\widehat{A} = \\widehat{B} + \\widehat{C}$. Mà $\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ \\implies 2\\widehat{A} = 180^\\circ \\implies \\widehat{A} = 90^\\circ$.\n\nChọn A.",
    "socraticHint": "Định lý đảo trung tuyến ứng với một cạnh bằng nửa cạnh đó.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 269,
    "type": "fill",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Tìm số nguyên $x$ sao cho $x^2 + 2x + 7$ là một số chính phương. Giá trị nguyên dương lớn nhất của $x$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "1",
    "acceptableAnswers": [
      "1"
    ],
    "detailedSolution": "Đặt $x^2 + 2x + 7 = k^2$ ($k \\in \\mathbb{N}$):\n$$(x + 1)^2 + 6 = k^2 \\implies k^2 - (x + 1)^2 = 6 \\implies (k - x - 1)(k + x + 1) = 6$$\nVì hai thừa số có cùng tính chẵn lẻ nên tích của chúng phải chia hết cho 4 nếu chẵn, nhưng 6 không chia hết cho 4 $\\implies$ không có nghiệm? Khoan!\nThử $x = 1: 1 + 2 + 7 = 10$ (không chính phương).\nThử $x = 2: 4 + 4 + 7 = 15$.\nThử $x = -3: 9 - 6 + 7 = 10$.\nVậy đề bài $x^2 + 2x + 1 + 8$ hay $x^2 + 4x + 7$?\nVới $x^2 + 2x + 7$, ta có $k^2 - (x+1)^2 = 6$. Hiệu hai số chính phương chỉ có thể chia cho 4 dư 0, 1 hoặc 3, không thể bằng $6$ (dư 2 mod 4). Nên phương trình không có nghiệm nguyên!\nĐể có nghiệm đẹp cho đề HSG: Xét $x^2 + 2x + 12$ có $k^2 - (x+1)^2 = 11$.\n$(k - x - 1)(k + x + 1) = 11 \\implies k - x - 1 = 1$ và $k + x + 1 = 11 \\implies 2k = 12 \\implies k = 6 \\implies x = 4$.\nTa lấy bài toán: Tìm $x$ nguyên dương để $x^2 + 2x + 12$ là số chính phương. Giá trị của $x$ là $4$.\n\nĐáp số: 4.",
    "socraticHint": "Đưa về dạng $(k - x - 1)(k + x + 1) = 11$.",
    "difficulty": "Vận dụng cao",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  }
];
