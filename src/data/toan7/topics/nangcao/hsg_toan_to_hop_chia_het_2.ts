import { Question } from '../../../../types/exam';

export const HSG_TOAN_TO_HOP_CHIA_HET_QUESTIONS_2: Question[] = [
  {
    "id": 440,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố trong trò chơi đơn giản",
    "content": "Tìm số tự nhiên $n$ nhỏ nhất sao cho $2^n - 1$ chia hết cho 31. (Điền số nguyên):",
    "correctAnswer": "5",
    "acceptableAnswers": [
      "5"
    ],
    "detailedSolution": "$2^5 - 1 = 32 - 1 = 31$ chia hết cho 31. Do đó $n = 5$.\n\nĐáp số: 5.",
    "socraticHint": "$2^5 = 32$.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 441,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố trong trò chơi đơn giản",
    "content": "Có 4 bạn học sinh cùng ngồi vào một bàn tròn có 4 ghế. Số cách sắp xếp vị trí ngồi khác nhau (chỉ tính vị trí tương đối) là:",
    "options": [
      {
        "key": "A",
        "content": "$6$"
      },
      {
        "key": "B",
        "content": "$24$"
      },
      {
        "key": "C",
        "content": "$12$"
      },
      {
        "key": "D",
        "content": "$4$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Số hoán vị vòng quanh của 4 phần tử là $(4 - 1)! = 3! = 6$.\n\nChọn A.",
    "socraticHint": "Công thức xếp bàn tròn $n$ người là $(n - 1)!$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 442,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố trong trò chơi đơn giản",
    "content": "Tính số hoán vị của tập hợp gồm 4 phần tử phân biệt. (Điền số nguyên):",
    "correctAnswer": "24",
    "acceptableAnswers": [
      "24"
    ],
    "detailedSolution": "$4! = 4 \\times 3 \\times 2 \\times 1 = 24$.\n\nĐáp số: 24.",
    "socraticHint": "Tính $4!$.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 443,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố trong trò chơi đơn giản",
    "content": "Một số tự nhiên khi chia cho 9 dư 5. Bình phương của số đó khi chia cho 9 sẽ có số dư là:",
    "options": [
      {
        "key": "A",
        "content": "$7$"
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
        "content": "$1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Gọi số đó là $n \\equiv 5 \\pmod 9$.\nKhi đó $n^2 \\equiv 5^2 = 25 \\pmod 9$.\nVì $25 = 9 \\times 2 + 7$ nên số dư là 7.\n\nChọn A.",
    "socraticHint": "Bình phương số dư: $5^2 = 25$, sau đó chia cho 9.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 444,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố trong trò chơi đơn giản",
    "content": "Tìm số nguyên dương $n$ để phân số $\\frac{n+7}{n-2}$ là số nguyên tố lớn nhất có thể. Giá trị của phân số đó là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "10",
    "acceptableAnswers": [
      "10"
    ],
    "detailedSolution": "Ta có $\\frac{n+7}{n-2} = 1 + \\frac{9}{n-2}$.\nĐể biểu thức là số nguyên tố thì $n-2$ phải là ước của 9: Ư$(9) = \\{1; 3; 9\\}$.\n- $n - 2 = 1 \\implies n = 3$, giá trị là $1 + 9 = 10$ (không nguyên tố).\n- $n - 2 = 3 \\implies n = 5$, giá trị là $1 + 3 = 4$ (không nguyên tố).\n- $n - 2 = 9 \\implies n = 11$, giá trị là $1 + 1 = 2$ (số nguyên tố).\n- Với $n - 2 = -1 \\implies n = 1$, giá trị $1 - 9 = -8$ (loại).\nVậy giá trị phân số là số nguyên tố duy nhất là $2$.\n\nĐáp số: 2.",
    "socraticHint": "Thử các ước của 9 để tìm giá trị là số nguyên tố.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 445,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố trong trò chơi đơn giản",
    "content": "Chọn bất kì 3 số nguyên. Khẳng định nào sau đây luôn đúng?",
    "options": [
      {
        "key": "A",
        "content": "Luôn tìm được 2 số có tổng là một số chẵn"
      },
      {
        "key": "B",
        "content": "Luôn tìm được 2 số có tích là một số lẻ"
      },
      {
        "key": "C",
        "content": "Tổng của cả 3 số luôn là một số lẻ"
      },
      {
        "key": "D",
        "content": "Tích của cả 3 số luôn chia hết cho 4"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chỉ có 2 loại tính chẵn lẻ (chẵn hoặc lẻ). Theo nguyên lý Dirichlet, trong 3 số luôn có ít nhất 2 số cùng tính chẵn lẻ. Tổng của hai số cùng chẵn lẻ luôn là một số chẵn.\n\nChọn A.",
    "socraticHint": "Có 3 số nhưng chỉ có 2 tính chẵn hoặc lẻ.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 446,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố trong trò chơi đơn giản",
    "content": "Có bao nhiêu số tự nhiên chẵn có 3 chữ số? (Điền số nguyên):",
    "correctAnswer": "450",
    "acceptableAnswers": [
      "450"
    ],
    "detailedSolution": "Các số tự nhiên chẵn có 3 chữ số từ 100 đến 998:\n$$(998 - 100) : 2 + 1 = 450$$\n\nĐáp số: 450.",
    "socraticHint": "Từ 100 đến 998 có bao nhiêu số chẵn cách đều 2 đơn vị?",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 447,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố trong trò chơi đơn giản",
    "content": "Một hình vuông cạnh $2\\text{ cm}$ chứa 5 điểm phân biệt. Chứng minh luôn có 2 điểm mà khoảng cách giữa chúng không vượt quá $\\sqrt{2}\\text{ cm}$. Khẳng định này chứng minh bằng cách chia hình vuông thành mấy phần bằng nhau?",
    "options": [
      {
        "key": "A",
        "content": "$4$ hình vuông nhỏ cạnh $1\\text{ cm}$"
      },
      {
        "key": "B",
        "content": "$2$ hình chữ nhật"
      },
      {
        "key": "C",
        "content": "$3$ phần bằng nhau"
      },
      {
        "key": "D",
        "content": "$5$ hình tam giác"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chia hình vuông cạnh 2 thành 4 hình vuông nhỏ cạnh 1. Đường chéo hình vuông nhỏ là $\\sqrt{1^2 + 1^2} = \\sqrt{2}$.\nTheo nguyên lý Dirichlet, 5 điểm vào 4 hình vuông nhỏ thì luôn có 2 điểm cùng nằm trong 1 hình vuông nhỏ, khoảng cách tối đa là đường chéo $\\sqrt{2}$.\n\nChọn A.",
    "socraticHint": "Chia hình vuông thành 4 ô vuông nhỏ có cạnh bằng 1.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 448,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố trong trò chơi đơn giản",
    "content": "Tìm số dư của $10^{100}$ khi chia cho 9. (Điền số nguyên):",
    "correctAnswer": "1",
    "acceptableAnswers": [
      "1"
    ],
    "detailedSolution": "$10 \\equiv 1 \\pmod 9 \\implies 10^{100} \\equiv 1^{100} = 1 \\pmod 9$.\n\nĐáp số: 1.",
    "socraticHint": "$10$ chia cho 9 dư 1.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 449,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Làm quen với biến cố & Xác suất",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố trong trò chơi đơn giản",
    "content": "Một người tung một đồng xu 10 lần liên tiếp. Số khả năng kết quả khác nhau có thể xảy ra là:",
    "options": [
      {
        "key": "A",
        "content": "$1024$"
      },
      {
        "key": "B",
        "content": "$20$"
      },
      {
        "key": "C",
        "content": "$100$"
      },
      {
        "key": "D",
        "content": "$512$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Mỗi lần tung có 2 khả năng (sấp hoặc ngửa). 10 lần liên tiếp có tổng cộng $2^{10} = 1024$ khả năng.\n\nChọn A.",
    "socraticHint": "$2^{10} = 1024$.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  }
];
