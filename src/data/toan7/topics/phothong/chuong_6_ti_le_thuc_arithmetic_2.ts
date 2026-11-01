import { Question } from '../../../../types/exam';

export const CHUONG_6_TI_LE_THUC_ARITHMETIC_QUESTIONS_2: Question[] = [
  {
    "id": 133,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức và đại lượng tỉ lệ",
    "topicId": "dai_luong_ti_le_thuan_nghich",
    "topicName": "Đại lượng tỉ lệ nghịch",
    "content": "Một đội gồm $6$ công nhân làm xong một công việc trong $10$ ngày. Với cùng năng suất đó, nếu muốn hoàn thành công việc trong $5$ ngày thì cần bao nhiêu công nhân? (Điền số nguyên):",
    "correctAnswer": "12",
    "acceptableAnswers": [
      "12",
      "12 công nhân",
      "12 người"
    ],
    "detailedSolution": "Số công nhân và số ngày hoàn thành công việc là hai đại lượng tỉ lệ nghịch:\n$$n \\cdot 5 = 6 \\cdot 10 \\implies n = \\frac{60}{5} = 12$$\n\nĐáp số: 12.",
    "socraticHint": "Thời gian giảm một nửa thì số người phải tăng gấp đôi.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  },
  {
    "id": 134,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức và đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tính chất của dãy tỉ số bằng nhau",
    "content": "Ba số $a, b, c$ tỉ lệ với các số $2; 3; 5$. Cách viết nào sau đây là chính xác?",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{a}{2} = \\frac{b}{3} = \\frac{c}{5}$"
      },
      {
        "key": "B",
        "content": "$2a = 3b = 5c$"
      },
      {
        "key": "C",
        "content": "$\\frac{2}{a} = \\frac{3}{b} = \\frac{c}{5}$"
      },
      {
        "key": "D",
        "content": "$a + 2 = b + 3 = c + 5$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Theo định nghĩa, ba số $a, b, c$ tỉ lệ với $2; 3; 5$ được viết là $\\frac{a}{2} = \\frac{b}{3} = \\frac{c}{5}$.\n\nChọn A.",
    "socraticHint": "Tỉ số của từng số với các hệ số tương ứng bằng nhau.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  },
  {
    "id": 136,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức và đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức",
    "content": "Tìm giá trị dương của $x$ thoả mãn: $\\frac{x}{3} = \\frac{12}{x}$. (Điền số nguyên):",
    "correctAnswer": "6",
    "acceptableAnswers": [
      "6"
    ],
    "detailedSolution": "Ta có $x^2 = 3 \\cdot 12 = 36 \\implies x = 6$ (do $x > 0$).\n\nĐáp số: 6.",
    "socraticHint": "Nhân chéo ta được $x^2 = 36$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  },
  {
    "id": 138,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức và đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tính chất của dãy tỉ số bằng nhau",
    "content": "Tìm $x$ biết: $\\frac{x}{2} = \\frac{y}{3} = \\frac{z}{5}$ và $x + 2y - z = 9$. Giá trị của $x$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "6",
    "acceptableAnswers": [
      "6"
    ],
    "detailedSolution": "Áp dụng tính chất dãy tỉ số bằng nhau:\n$$\\frac{x}{2} = \\frac{2y}{6} = \\frac{z}{5} = \\frac{x + 2y - z}{2 + 6 - 5} = \\frac{9}{3} = 3 \\implies x = 2 \\cdot 3 = 6$$\n\nĐáp số: 6.",
    "socraticHint": "Biến đổi phân số giữa thành $\\frac{2y}{6}$.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  },
  {
    "id": 139,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức và đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức",
    "content": "Cho $\\frac{a}{b} = \\frac{c}{d}$ với $a, b, c, d \\ne 0$. Khẳng định nào sau đây là SAI?",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{a}{c} = \\frac{b}{d}$"
      },
      {
        "key": "B",
        "content": "$\\frac{d}{b} = \\frac{c}{a}$"
      },
      {
        "key": "C",
        "content": "$\\frac{b}{a} = \\frac{d}{c}$"
      },
      {
        "key": "D",
        "content": "$\\frac{a}{d} = \\frac{c}{b}$"
      }
    ],
    "correctAnswer": "D",
    "detailedSolution": "Tỉ lệ thức $\\frac{a}{d} = \\frac{c}{b} \\implies a \\cdot b = c \\cdot d$, trái với giả thiết $a \\cdot d = b \\cdot c$.\n\nChọn D.",
    "socraticHint": "Tích chéo phải là $ad = bc$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  },
  {
    "id": 141,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức và đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức",
    "content": "Tìm $x$ biết: $\\frac{x - 1}{4} = \\frac{9}{x - 1}$ với $x > 1$. Giá trị của $x$ bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "7",
    "acceptableAnswers": [
      "7"
    ],
    "detailedSolution": "Ta có $(x - 1)^2 = 36 \\implies x - 1 = 6$ (vì $x > 1$) $\\implies x = 7$.\n\nĐáp số: 7.",
    "socraticHint": "Khai căn hai vế của $(x - 1)^2 = 36$.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  },
  {
    "id": 142,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức và đại lượng tỉ lệ",
    "topicId": "dai_luong_ti_le_thuan_nghich",
    "topicName": "Đại lượng tỉ lệ nghịch",
    "content": "Nếu $y$ tỉ lệ nghịch với $x$ theo hệ số tỉ lệ là $12$, khi $x = -4$ thì giá trị của $y$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$-3$"
      },
      {
        "key": "B",
        "content": "$3$"
      },
      {
        "key": "C",
        "content": "$-48$"
      },
      {
        "key": "D",
        "content": "$-8$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Công thức tỉ lệ nghịch: $y = \\frac{a}{x} = \\frac{12}{-4} = -3$.\n\nChọn A.",
    "socraticHint": "Lấy hệ số $a$ chia cho $x$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  },
  {
    "id": 144,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức và đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức",
    "content": "Cho $\\frac{x}{y} = \\frac{2}{3}$. Giá trị của biểu thức $P = \\frac{x + y}{y}$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{5}{3}$"
      },
      {
        "key": "B",
        "content": "$\\frac{2}{5}$"
      },
      {
        "key": "C",
        "content": "$\\frac{3}{5}$"
      },
      {
        "key": "D",
        "content": "$\\frac{5}{2}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có $P = \\frac{x}{y} + 1 = \\frac{2}{3} + 1 = \\frac{5}{3}$.\n\nChọn A.",
    "socraticHint": "Tách phân số thành $\\frac{x}{y} + \\frac{y}{y}$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  }
];
