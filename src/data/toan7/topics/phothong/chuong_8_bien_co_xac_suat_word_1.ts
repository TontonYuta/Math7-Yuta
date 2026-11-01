import { Question } from '../../../../types/exam';

export const CHUONG_8_BIEN_CO_XAC_SUAT_WORD_QUESTIONS_1: Question[] = [
  {
    "id": 166,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "khai_niem_bien_co_ngau_nhien",
    "topicName": "Khái niệm biến cố",
    "content": "Gieo một con xúc xắc 6 mặt cân đối. Biến cố nào sau đây là \"Biến cố chắc chắn\"?",
    "options": [
      {
        "key": "A",
        "content": "Mặt xuất hiện có số chấm là số chẵn"
      },
      {
        "key": "B",
        "content": "Mặt xuất hiện có số chấm lớn hơn 0 và nhỏ hơn 7"
      },
      {
        "key": "C",
        "content": "Mặt xuất hiện có số chấm chia hết cho 5"
      },
      {
        "key": "D",
        "content": "Mặt xuất hiện có số chấm bằng 8"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Các mặt của xúc xắc có số chấm là $\\{1, 2, 3, 4, 5, 6\\}$, tất cả đều lớn hơn 0 và nhỏ hơn 7, do đó biến cố này luôn luôn xảy ra (biến cố chắc chắn).\n\nChọn B.",
    "socraticHint": "Biến cố chắc chắn là biến cố luôn luôn xảy ra trong mọi trường hợp.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 167,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "khai_niem_bien_co_ngau_nhien",
    "topicName": "Khái niệm biến cố",
    "content": "Tung một đồng xu một lần. Biến cố nào sau đây là \"Biến cố không thể\"?",
    "options": [
      {
        "key": "A",
        "content": "Đồng xu xuất hiện mặt ngửa"
      },
      {
        "key": "B",
        "content": "Đồng xu xuất hiện mặt sấp"
      },
      {
        "key": "C",
        "content": "Đồng xu xuất hiện cả mặt sấp và mặt ngửa cùng lúc"
      },
      {
        "key": "D",
        "content": "Đồng xu rơi xuống sàn"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Một đồng xu rơi xuống chỉ có thể ngửa hoặc sấp, không thể đồng thời xuất hiện cả hai mặt.\n\nChọn C.",
    "socraticHint": "Biến cố không bao giờ có thể xảy ra gọi là biến cố không thể.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 168,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố",
    "content": "Gieo ngẫu nhiên một con xúc xắc 6 mặt đồng chất. Xác suất xuất hiện mặt có số chấm là số nguyên tố là:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{1}{2}$"
      },
      {
        "key": "B",
        "content": "$\\frac{1}{3}$"
      },
      {
        "key": "C",
        "content": "$\\frac{2}{3}$"
      },
      {
        "key": "D",
        "content": "$\\frac{1}{6}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Có 6 kết quả có thể: $\\{1; 2; 3; 4; 5; 6\\}$. Các số nguyên tố là $\\{2; 3; 5\\}$ (3 kết quả thuận lợi). Xác suất là $\\frac{3}{6} = \\frac{1}{2}$.\n\nChọn A.",
    "socraticHint": "Các số nguyên tố từ 1 đến 6 là 2, 3, 5.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 169,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố",
    "content": "Một hộp có $5$ viên bi xanh và $15$ viên bi đỏ có cùng kích thước. Lấy ngẫu nhiên $1$ viên bi. Xác suất để lấy được viên bi màu xanh là bao nhiêu? (Nhập dưới dạng phân số tối giản a/b hoặc số thập phân):",
    "correctAnswer": "1/4",
    "acceptableAnswers": [
      "1/4",
      "0.25",
      "0,25"
    ],
    "detailedSolution": "Tổng số bi là $5 + 15 = 20$. Xác suất lấy bi xanh là $\\frac{5}{20} = \\frac{1}{4} = 0{,}25$.\n\nĐáp số: 1/4.",
    "socraticHint": "Lấy số bi xanh chia cho tổng số bi trong hộp.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 170,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố",
    "content": "Xác suất của biến cố chắc chắn luôn luôn bằng bao nhiêu?",
    "options": [
      {
        "key": "A",
        "content": "$0$"
      },
      {
        "key": "B",
        "content": "$0{,}5$"
      },
      {
        "key": "C",
        "content": "$1$"
      },
      {
        "key": "D",
        "content": "$100$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Theo định nghĩa xác suất, biến cố chắc chắn có xác suất bằng $1$, biến cố không thể có xác suất bằng $0$.\n\nChọn C.",
    "socraticHint": "Biến cố luôn xảy ra có tỉ lệ xảy ra là 100%, tức 1.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 171,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố",
    "content": "Một túi đựng các tấm thẻ được đánh số từ $1$ đến $10$. Rút ngẫu nhiên một tấm thẻ. Xác suất rút được tấm thẻ ghi số chia hết cho $3$ là bao nhiêu? (Nhập phân số tối giản a/b hoặc số thập phân):",
    "correctAnswer": "3/10",
    "acceptableAnswers": [
      "3/10",
      "0.3",
      "0,3"
    ],
    "detailedSolution": "Các số từ 1 đến 10 chia hết cho 3 là: $\\{3; 6; 9\\}$ (có 3 kết quả thuận lợi). Xác suất là $\\frac{3}{10} = 0{,}3$.\n\nĐáp số: 3/10.",
    "socraticHint": "Có 3 số chia hết cho 3 trong 10 số.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 172,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất thực nghiệm",
    "content": "Một xạ thủ bắn $100$ viên đạn vào bia, trong đó có $82$ viên trúng vòng 10. Xác suất thực nghiệm bắn trúng vòng 10 của xạ thủ đó là:",
    "options": [
      {
        "key": "A",
        "content": "$0{,}82$"
      },
      {
        "key": "B",
        "content": "$0{,}18$"
      },
      {
        "key": "C",
        "content": "$82$"
      },
      {
        "key": "D",
        "content": "$100$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Xác suất thực nghiệm bằng số lần biến cố xảy ra chia cho tổng số lần thử: $\\frac{82}{100} = 0{,}82$.\n\nChọn A.",
    "socraticHint": "Lấy số phát trúng chia cho tổng số phát bắn.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 173,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất thực nghiệm",
    "content": "Tung một đồng xu $50$ lần thì thấy có $27$ lần xuất hiện mặt ngửa. Xác suất thực nghiệm xuất hiện mặt sấp là bao nhiêu? (Nhập phân số tối giản a/b hoặc số thập phân):",
    "correctAnswer": "23/50",
    "acceptableAnswers": [
      "23/50",
      "0.46",
      "0,46"
    ],
    "detailedSolution": "Số lần xuất hiện mặt sấp là: $50 - 27 = 23$ lần. Xác suất thực nghiệm mặt sấp là $\\frac{23}{50} = 0{,}46$.\n\nĐáp số: 23/50.",
    "socraticHint": "Tính số lần xuất hiện mặt sấp trước: $50 - 27$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 174,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "khai_niem_bien_co_ngau_nhien",
    "topicName": "Khái niệm biến cố",
    "content": "Trong các sự kiện sau, sự kiện nào là biến cố ngẫu nhiên?",
    "options": [
      {
        "key": "A",
        "content": "Ngày mai mặt trời mọc ở hướng Đông"
      },
      {
        "key": "B",
        "content": "Gieo con xúc xắc được mặt 7 chấm"
      },
      {
        "key": "C",
        "content": "Ngày mai trời có mưa tại Hà Nội"
      },
      {
        "key": "D",
        "content": "Nước đóng băng ở 100 độ C ở áp suất tiêu chuẩn"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Ngày mai có mưa hay không là biến cố chưa biết chắc chắn, có thể xảy ra hoặc không xảy ra nên là biến cố ngẫu nhiên.\n\nChọn C.",
    "socraticHint": "Biến cố ngẫu nhiên có thể xảy ra hoặc không xảy ra tùy thuộc vào yếu tố ngẫu nhiên.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  }
];
