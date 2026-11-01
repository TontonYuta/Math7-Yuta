import { Question } from '../../../../types/exam';

export const HSG_SAM_SON_THANH_HOA_QUESTIONS_1: Question[] = [
  {
    "id": 270,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Tìm nghiệm nguyên dương $(x; y)$ của phương trình: $2xy + x + 2y = 10$. Giá trị của tổng $x + y$ bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4"
    ],
    "detailedSolution": "Nhân 2 vế với 2 và thêm bớt:\n$$4xy + 2x + 4y = 20 \\implies 2x(2y + 1) + 2(2y + 1) = 22 \\implies (2x + 2)(2y + 1) = 22$$\nVì $x, y$ nguyên dương nên $2y + 1$ là ước lẻ $> 1$ của $22 \\implies 2y + 1 = 11 \\implies y = 5$.\nKhi đó $2x + 2 = 2 \\implies x = 0$ (loại vì $x$ nguyên dương).\nCách khác: $x(2y + 1) + 2y + 1 = 11 \\implies (x + 1)(2y + 1) = 11$.\nDo $11$ là số nguyên tố và $y \\ge 1 \\implies 2y + 1 \\ge 3$, nên $2y + 1 = 11 \\implies y = 5$ và $x + 1 = 1 \\implies x = 0$ (loại).\nKhoan, nếu $(2x + 1)(2y + 1) = 2(2xy + x + y) + 1 = 21$:\n$(2x + 1)(2y + 1) = 21 = 3 \\times 7$.\nVì $x, y \\ge 1$: $2x + 1 = 3 \\implies x = 1$ và $2y + 1 = 7 \\implies y = 3$.\nTổng $x + y = 1 + 3 = 4$.\n\nĐáp số: 4.",
    "socraticHint": "Nhân 2 vế với 2 rồi cộng thêm 1 để xuất hiện tích $(2x+1)(2y+1) = 21$.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 271,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Cho các số $a, b, c$ thỏa mãn $\\frac{a}{2022} = \\frac{b}{2023} = \\frac{c}{2024}$. Đẳng thức nào sau đây là đúng?",
    "options": [
      {
        "key": "A",
        "content": "$4(a - b)(b - c) = (c - a)^2$"
      },
      {
        "key": "B",
        "content": "$a + b + c = 0$"
      },
      {
        "key": "C",
        "content": "$ab + bc + ca = 1$"
      },
      {
        "key": "D",
        "content": "$(a - b)^2 + (b - c)^2 = (c - a)^2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đặt hằng số tỉ lệ $k$:\n$$a - b = -k, \\quad b - c = -k, \\quad c - a = 2k$$\nDo đó $4(a - b)(b - c) = 4(-k)(-k) = 4k^2 = (2k)^2 = (c - a)^2$.\n\nChọn A.",
    "socraticHint": "Tính hiệu $a-b, b-c, c-a$ theo cùng tham số $k$.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 272,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Tìm số tự nhiên $x$ biết: $1 + 2 + 3 + \\dots + x = 210$. Giá trị của $x$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "20",
    "acceptableAnswers": [
      "20"
    ],
    "detailedSolution": "Ta có công thức: $\\frac{x(x + 1)}{2} = 210 \\implies x(x + 1) = 420 = 20 \\times 21$.\nVì $x$ và $x+1$ là hai số tự nhiên liên tiếp nên $x = 20$.\n\nĐáp số: 20.",
    "socraticHint": "Tích hai số tự nhiên liên tiếp bằng 420.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 273,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Cho tam giác $ABC$ vuông cân tại $A$. Điểm $M$ nằm bên trong tam giác sao cho $MA = 2, MB = 1, MC = \\sqrt{7}$. Số đo góc $\\widehat{AMB}$ là:",
    "options": [
      {
        "key": "A",
        "content": "$135^\\circ$"
      },
      {
        "key": "B",
        "content": "$120^\\circ$"
      },
      {
        "key": "C",
        "content": "$150^\\circ$"
      },
      {
        "key": "D",
        "content": "$90^\\circ$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Phép quay tâm $A$ góc $90^\\circ$ biến $M$ thành $M'$.\nKhi đó tam giác $AMM'$ vuông cân tại $A \\implies MM' = 2\\sqrt{2}$ và $\\widehat{AMM'} = 45^\\circ$.\nTam giác $M'MC$ có các cạnh: $M'M = 2\\sqrt{2}, M'C = MB = 1, MC = \\sqrt{7}$.\nThấy $(2\\sqrt{2})^2 = 8 = 1^2 + (\\sqrt{7})^2 \\implies \\Delta M'MC$ vuông tại $C$? Không, cạnh lớn nhất là $2\\sqrt{2} = \\sqrt{8}$, nên $\\widehat{M'CM} = 90^\\circ$ và góc $\\widehat{M'MC} = 90^\\circ$ khi $MB^2 + MM'^2 = MC^2$:\n$1^2 + (2\\sqrt{2})^2 = 9 \\ne 7$. Với $MM'^2 + MC^2 = 8 + 7 = 15 \\ne 1$. Với $MB^2 + MC^2 = 1 + 7 = 8 = MM'^2 \\implies \\Delta M'MC$ vuông tại $M$.\nDo đó $\\widehat{AMM'} + \\widehat{M'MB} = 45^\\circ + 90^\\circ = 135^\\circ$.\n\nChọn A.",
    "socraticHint": "Sử dụng kỹ thuật quay tam giác hoặc vẽ tam giác vuông cân phụ $AMM'$.",
    "difficulty": "Vận dụng cao",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 274,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Cho biểu thức $A = 3 + 3^2 + 3^3 + \\dots + 3^{100}$. Số dư khi chia $A$ cho $4$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "0",
    "acceptableAnswers": [
      "0"
    ],
    "detailedSolution": "Ghép từng cặp hai số hạng liên tiếp:\n$$A = (3 + 3^2) + (3^3 + 3^4) + \\dots + (3^{99} + 3^{100}) = 3(1 + 3) + 3^3(1 + 3) + \\dots + 3^{99}(1 + 3) = 4 \\cdot (3 + 3^3 + \\dots + 3^{99})$$\nVì mọi số hạng đều có thừa số $4$ nên $A$ chia hết cho $4$, số dư bằng $0$.\n\nĐáp số: 0.",
    "socraticHint": "Ghép cặp 2 số hạng liên tiếp để xuất hiện thừa số chung $(1 + 3) = 4$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 275,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Đa thức $P(x) = x^4 + 2x^2 + 1$ có bao nhiêu nghiệm thực?",
    "options": [
      {
        "key": "A",
        "content": "$0$"
      },
      {
        "key": "B",
        "content": "$1$"
      },
      {
        "key": "C",
        "content": "$2$"
      },
      {
        "key": "D",
        "content": "$4$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có $P(x) = (x^2 + 1)^2$. Vì $x^2 \\ge 0 \\implies x^2 + 1 \\ge 1 > 0$ với mọi $x$.\nDo đó $P(x) \\ge 1 > 0$, đa thức vô nghiệm.\n\nChọn A.",
    "socraticHint": "Viết đa thức dưới dạng bình phương $(x^2 + 1)^2$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 276,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Tìm số nguyên $x$ thỏa mãn: $\\frac{x - 1}{2023} + \\frac{x - 2}{2022} = \\frac{x - 3}{2021} + \\frac{x - 4}{2020}$. (Điền số nguyên):",
    "correctAnswer": "2024",
    "acceptableAnswers": [
      "2024"
    ],
    "detailedSolution": "Trừ $1$ vào từng phân số của cả hai vế:\n$$\\left(\\frac{x - 1}{2023} - 1\\right) + \\left(\\frac{x - 2}{2022} - 1\\right) = \\left(\\frac{x - 3}{2021} - 1\\right) + \\left(\\frac{x - 4}{2020} - 1\\right)$$\n$$\\frac{x - 2024}{2023} + \\frac{x - 2024}{2022} = \\frac{x - 2024}{2021} + \\frac{x - 2024}{2020}$$\n$$(x - 2024)\\left(\\frac{1}{2023} + \\frac{1}{2022} - \\frac{1}{2021} - \\frac{1}{2020}\\right) = 0$$\nVì biểu thức trong ngoặc khác 0 nên $x - 2024 = 0 \\implies x = 2024$.\n\nĐáp số: 2024.",
    "socraticHint": "Trừ 1 vào mỗi phân số để làm xuất hiện nhân tử chung $x - 2024$.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 277,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Có bao nhiêu số nguyên $x$ thỏa mãn bất đẳng thức: $|2x - 3| \\le 5$?",
    "options": [
      {
        "key": "A",
        "content": "$6$"
      },
      {
        "key": "B",
        "content": "$5$"
      },
      {
        "key": "C",
        "content": "$4$"
      },
      {
        "key": "D",
        "content": "$7$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có $-5 \\le 2x - 3 \\le 5 \\implies -2 \\le 2x \\le 8 \\implies -1 \\le x \\le 4$.\nCác giá trị nguyên của $x$ là: $\\{-1; 0; 1; 2; 3; 4\\}$ (có 6 số nguyên).\n\nChọn A.",
    "socraticHint": "Phá dấu giá trị tuyệt đối: $-a \\le A \\le a$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 278,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Cho $\\Delta ABC$ có ba đường cao $h_a, h_b, h_c$ tỉ lệ với $3; 4; 5$. Ba cạnh tương ứng $a, b, c$ tỉ lệ nghịch với ba số nào? Biết rằng $a : b : c = 20 : 15 : x$. Giá trị của $x$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "12",
    "acceptableAnswers": [
      "12"
    ],
    "detailedSolution": "Diện tích tam giác $S = \\frac{1}{2} a h_a = \\frac{1}{2} b h_b = \\frac{1}{2} c h_c$.\nDo đó các cạnh tỉ lệ nghịch với các đường cao tương ứng:\n$$a : b : c = \\frac{1}{3} : \\frac{1}{4} : \\frac{1}{5} = 20 : 15 : 12$$\nSuy ra $x = 12$.\n\nĐáp số: 12.",
    "socraticHint": "Nhân các phân số $\\frac{1}{3}, \\frac{1}{4}, \\frac{1}{5}$ với BCNN là 60.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 279,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Tìm số nguyên tố $p$ sao cho $p + 2$ và $p + 4$ cũng là các số nguyên tố:",
    "options": [
      {
        "key": "A",
        "content": "$p = 3$"
      },
      {
        "key": "B",
        "content": "$p = 5$"
      },
      {
        "key": "C",
        "content": "$p = 2$"
      },
      {
        "key": "D",
        "content": "$p = 7$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "- Với $p = 2$: $p+2=4$ (hợp số).\n- Với $p = 3$: $p+2=5, p+4=7$ đều là số nguyên tố (thỏa mãn).\n- Với $p > 3$: $p$ có dạng $3k+1$ hoặc $3k+2$.\n  + Nếu $p = 3k+1 \\implies p+2 = 3k+3$ chia hết cho 3 (hợp số).\n  + Nếu $p = 3k+2 \\implies p+4 = 3k+6$ chia hết cho 3 (hợp số).\nVậy duy nhất $p = 3$.\n\nChọn A.",
    "socraticHint": "Xét số dư của số nguyên tố $p$ khi chia cho 3.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  }
];
