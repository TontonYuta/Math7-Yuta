import { Question } from '../../../../types/exam';

export const CHUONG_1_SO_HUU_TI_ARITHMETIC_QUESTIONS_2: Question[] = [
  {
    "id": 30,
    "type": "mcq",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "phep_tinh_so_huu_ti",
    "topicName": "Cộng, trừ, nhân, chia số hữu tỉ",
    "content": "Kết quả của phép tính $\\frac{-5}{9} \\cdot \\frac{2}{13} + \\frac{-5}{9} \\cdot \\frac{11}{13} + \\frac{5}{9}$ bằng:",
    "options": [
      {
        "key": "A",
        "content": "$0$"
      },
      {
        "key": "B",
        "content": "$\\frac{5}{9}$"
      },
      {
        "key": "C",
        "content": "$-\\frac{5}{9}$"
      },
      {
        "key": "D",
        "content": "$1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Áp dụng tính chất phân phối:\n$$\\frac{-5}{9}\\left(\\frac{2}{13} + \\frac{11}{13}\\right) + \\frac{5}{9} = \\frac{-5}{9} \\cdot 1 + \\frac{5}{9} = 0$$\n\nChọn A.",
    "socraticHint": "Đặt nhân tử chung $\\frac{-5}{9}$ ra ngoài.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  },
  {
    "id": 31,
    "type": "fill",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "phep_tinh_so_huu_ti",
    "topicName": "Cộng, trừ, nhân, chia số hữu tỉ",
    "content": "Tính giá trị biểu thức: $A = \\left(-\\frac{2}{5}\\right) + \\frac{7}{10} - \\frac{1}{2}$. (Điền số thập phân, ví dụ -0.2):",
    "correctAnswer": "-0.2",
    "acceptableAnswers": [
      "-0.2",
      "-0,2",
      "-1/5"
    ],
    "detailedSolution": "Quy đồng mẫu 10:\n$$A = \\frac{-4 + 7 - 5}{10} = \\frac{-2}{10} = -0{,}2$$\n\nĐáp số: -0.2.",
    "socraticHint": "Mẫu số chung là 10.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  },
  {
    "id": 32,
    "type": "mcq",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Kết quả của phép tính $\\left(-\\frac{1}{3}\\right)^3 \\cdot 27$ là:",
    "options": [
      {
        "key": "A",
        "content": "$-1$"
      },
      {
        "key": "B",
        "content": "$1$"
      },
      {
        "key": "C",
        "content": "$-9$"
      },
      {
        "key": "D",
        "content": "$9$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "$\\left(-\\frac{1}{3}\\right)^3 \\cdot 27 = \\frac{-1}{27} \\cdot 27 = -1$.\n\nChọn A.",
    "socraticHint": "Số mũ lẻ giữ nguyên dấu âm.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  },
  {
    "id": 33,
    "type": "mcq",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "content": "Biết $x^2 = \\frac{16}{25}$. Các giá trị của $x$ là:",
    "options": [
      {
        "key": "A",
        "content": "$x = \\frac{4}{5}$"
      },
      {
        "key": "B",
        "content": "$x = -\\frac{4}{5}$"
      },
      {
        "key": "C",
        "content": "$x = \\pm \\frac{4}{5}$"
      },
      {
        "key": "D",
        "content": "$x = \\pm \\frac{16}{25}$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Vì $\\left(\\pm \\frac{4}{5}\\right)^2 = \\frac{16}{25}$ nên $x = \\pm \\frac{4}{5}$.\n\nChọn C.",
    "socraticHint": "Số mũ chẵn có cả nghiệm âm và dương.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  },
  {
    "id": 34,
    "type": "fill",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "quy_tac_dau_ngoac_chuyen_ve",
    "topicName": "Quy tắc dấu ngoặc & Quy tắc chuyển vế",
    "content": "Tìm số nguyên $x$ thỏa mãn: $\\frac{3}{4} - x = \\frac{1}{4} + \\frac{1}{2}$. (Điền số nguyên):",
    "correctAnswer": "0",
    "acceptableAnswers": [
      "0",
      "0.0"
    ],
    "detailedSolution": "Vế phải: $\\frac{1}{4} + \\frac{2}{4} = \\frac{3}{4}$. Do đó $\\frac{3}{4} - x = \\frac{3}{4} \\implies x = 0$.\n\nĐáp số: 0.",
    "socraticHint": "Rút gọn vế phải rồi chuyển vế.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  }
];
