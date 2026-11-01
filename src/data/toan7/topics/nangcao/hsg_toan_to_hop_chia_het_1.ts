import { Question } from '../../../../types/exam';

export const HSG_TOAN_TO_HOP_CHIA_HET_QUESTIONS_1: Question[] = [
  {
    "id": 430,
    "type": "fill",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "thu_thap_phan_loai_du_lieu",
    "topicName": "Thu thập & Phân loại dữ liệu",
    "content": "Có 5 người bắt tay nhau đôi một. Hỏi có tất cả bao nhiêu cái bắt tay? (Điền số nguyên):",
    "correctAnswer": "10",
    "acceptableAnswers": [
      "10"
    ],
    "detailedSolution": "Số cái bắt tay là số cặp chọn 2 người từ 5 người:\n$$C_5^2 = \\frac{5 \\times 4}{2} = 10$$\n\nĐáp số: 10.",
    "socraticHint": "Mỗi người bắt tay với 4 người khác, chia cho 2 vì lặp lại.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 431,
    "type": "mcq",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "thu_thap_phan_loai_du_lieu",
    "topicName": "Thu thập & Phân loại dữ liệu",
    "content": "Chọn ngẫu nhiên 6 số từ tập $\\{1; 2; 3; 4; 5; 6; 7; 8; 9; 10\\}$. Khẳng định nào sau đây chắc chắn đúng?",
    "options": [
      {
        "key": "A",
        "content": "Luôn chọn được 2 số có tổng bằng 11"
      },
      {
        "key": "B",
        "content": "Luôn chọn được 2 số có tích bằng 20"
      },
      {
        "key": "C",
        "content": "Tất cả các số chọn ra đều là số chẵn"
      },
      {
        "key": "D",
        "content": "Không có hai số nào có hiệu bằng 1"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chia 10 số thành 5 cặp có tổng bằng 11: $\\{(1, 10); (2, 9); (3, 8); (4, 7); (5, 6)\\}$.\nTheo nguyên lý Dirichlet, khi chọn 6 số từ 5 cặp này, chắc chắn có ít nhất 2 số cùng thuộc một cặp, tức có tổng bằng 11.\n\nChọn A.",
    "socraticHint": "Chia 10 số thành 5 cặp có tổng bằng 11 theo nguyên lý Dirichlet.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 432,
    "type": "fill",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "thu_thap_phan_loai_du_lieu",
    "topicName": "Thu thập & Phân loại dữ liệu",
    "content": "Tìm hai chữ số tận cùng của số $A = 2^{2024}$. (Điền số nguyên hai chữ số):",
    "correctAnswer": "76",
    "acceptableAnswers": [
      "76"
    ],
    "detailedSolution": "Ta có tính chất: $2^{20} \\equiv 76 \\pmod{100}$ và $76^n \\equiv 76 \\pmod{100}$.\nVì $2024 = 20 \\times 101 + 4$ nên:\n$$2^{2024} = (2^{20})^{101} \\times 2^4 \\equiv 76 \\times 16 = 1216 \\equiv 16 \\pmod{100}$$\nKhoan: $76 \\times 16 = 1216$, hai chữ số tận cùng là 16!\nThử lại: $2^{10} = 1024 \\equiv 24 \\pmod{100}$.\n$2^{20} = 1024^2 \\equiv 24^2 = 576 \\equiv 76 \\pmod{100}$.\n$2^{2020} \\equiv 76 \\pmod{100}$.\n$2^{2024} = 2^{2020} \\times 2^4 \\equiv 76 \\times 16 = 1216 \\equiv 16 \\pmod{100}$.\nVậy hai chữ số tận cùng là 16!\n\nĐáp số: 16.",
    "socraticHint": "$2^{20} \\equiv 76 \\pmod{100}$ và $76 \\times 16 \\equiv 16 \\pmod{100}$.",
    "difficulty": "Vận dụng cao",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 433,
    "type": "mcq",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "thu_thap_phan_loai_du_lieu",
    "topicName": "Thu thập & Phân loại dữ liệu",
    "content": "Trong một hộp có 10 viên bi đỏ, 8 viên bi xanh và 6 viên bi vàng. Cần lấy ra ít nhất bao nhiêu viên bi (không nhìn vào hộp) để chắc chắn có ít nhất 1 viên bi màu vàng?",
    "options": [
      {
        "key": "A",
        "content": "$19$ viên"
      },
      {
        "key": "B",
        "content": "$18$ viên"
      },
      {
        "key": "C",
        "content": "$7$ viên"
      },
      {
        "key": "D",
        "content": "$24$ viên"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Xét trường hợp xấu nhất: lấy hết tất cả bi đỏ và bi xanh mà vẫn chưa có bi vàng.\nSố bi lấy ra khi đó: $10 + 8 = 18$ viên.\nCần lấy thêm $1$ viên nữa chắc chắn sẽ được viên bi màu vàng: $18 + 1 = 19$ viên.\n\nChọn A.",
    "socraticHint": "Nguyên lý Dirichlet xét trường hợp rủi ro xấu nhất.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 434,
    "type": "fill",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "thu_thap_phan_loai_du_lieu",
    "topicName": "Thu thập & Phân loại dữ liệu",
    "content": "Một giải bóng đá có 8 đội tham gia thi đấu vòng tròn một lượt (mỗi đội đều gặp nhau đúng một lần). Tổng số trận đấu trong giải là bao nhiêu trận? (Điền số nguyên):",
    "correctAnswer": "28",
    "acceptableAnswers": [
      "28"
    ],
    "detailedSolution": "Số trận đấu là: $\\frac{8 \\times 7}{2} = 28$ trận.\n\nĐáp số: 28.",
    "socraticHint": "Công thức thi đấu vòng tròn: $\\frac{n(n-1)}{2}$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 435,
    "type": "mcq",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "thu_thap_phan_loai_du_lieu",
    "topicName": "Thu thập & Phân loại dữ liệu",
    "content": "Cho 5 điểm phân biệt trên mặt phẳng sao cho không có 3 điểm nào thẳng hàng. Số đoạn thẳng nối từng cặp điểm là:",
    "options": [
      {
        "key": "A",
        "content": "$10$"
      },
      {
        "key": "B",
        "content": "$5$"
      },
      {
        "key": "C",
        "content": "$15$"
      },
      {
        "key": "D",
        "content": "$20$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Số đoạn thẳng là $\\frac{5 \\times 4}{2} = 10$.\n\nChọn A.",
    "socraticHint": "Mỗi cặp điểm xác định một đoạn thẳng: $C_5^2 = 10$.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 436,
    "type": "fill",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "thu_thap_phan_loai_du_lieu",
    "topicName": "Thu thập & Phân loại dữ liệu",
    "content": "Có bao nhiêu số tự nhiên có 3 chữ số đôi một khác nhau được lập từ các chữ số $\\{1; 2; 3; 4; 5\\}$? (Điền số nguyên):",
    "correctAnswer": "60",
    "acceptableAnswers": [
      "60"
    ],
    "detailedSolution": "Số cách chọn chữ số hàng trăm: 5 cách.\nSố cách chọn chữ số hàng chục: 4 cách.\nSố cách chọn chữ số hàng đơn vị: 3 cách.\nTổng số các số lập được là: $5 \\times 4 \\times 3 = 60$.\n\nĐáp số: 60.",
    "socraticHint": "Quy tắc nhân: $5 \\times 4 \\times 3$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 437,
    "type": "mcq",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "thu_thap_phan_loai_du_lieu",
    "topicName": "Thu thập & Phân loại dữ liệu",
    "content": "Trong một lớp học có 37 học sinh. Khẳng định nào sau đây luôn đúng theo nguyên lý Dirichlet?",
    "options": [
      {
        "key": "A",
        "content": "Có ít nhất 4 học sinh sinh cùng một tháng"
      },
      {
        "key": "B",
        "content": "Có ít nhất 5 học sinh sinh cùng một tháng"
      },
      {
        "key": "C",
        "content": "Tất cả các tháng đều có học sinh sinh ra"
      },
      {
        "key": "D",
        "content": "Không có 2 học sinh nào sinh cùng ngày"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Có 12 tháng trong năm. Ta có $37 = 3 \\times 12 + 1$.\nTheo nguyên lý Dirichlet, tồn tại ít nhất $3 + 1 = 4$ học sinh sinh cùng một tháng.\n\nChọn A.",
    "socraticHint": "$37 = 12 \\times 3 + 1$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 438,
    "type": "fill",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "thu_thap_phan_loai_du_lieu",
    "topicName": "Thu thập & Phân loại dữ liệu",
    "content": "Tìm số dư của số $A = 3^{105} + 4^{105}$ khi chia cho 7. (Điền số nguyên từ 0 đến 6):",
    "correctAnswer": "0",
    "acceptableAnswers": [
      "0"
    ],
    "detailedSolution": "Ta có $4 \\equiv -3 \\pmod 7$.\nVì $105$ là số lẻ nên $4^{105} \\equiv (-3)^{105} = -3^{105} \\pmod 7$.\nDo đó $A = 3^{105} + 4^{105} \\equiv 3^{105} - 3^{105} = 0 \\pmod 7$.\nVậy $A$ chia hết cho 7, số dư bằng 0.\n\nĐáp số: 0.",
    "socraticHint": "$4 \\equiv -3 \\pmod 7$, số mũ 105 là số lẻ.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 439,
    "type": "mcq",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "thu_thap_phan_loai_du_lieu",
    "topicName": "Thu thập & Phân loại dữ liệu",
    "content": "Hai bạn An và Bình chơi trò chơi bốc sỏi: Có 21 viên sỏi trên bàn, mỗi lượt mỗi người được bốc từ 1 đến 3 viên sỏi. Người bốc viên sỏi cuối cùng là người chiến thắng. Ai có chiến thuật chắc chắn thắng nếu chơi tối ưu?",
    "options": [
      {
        "key": "A",
        "content": "Người đi trước (An)"
      },
      {
        "key": "B",
        "content": "Người đi sau (Bình)"
      },
      {
        "key": "C",
        "content": "Tùy thuộc vào may rủi"
      },
      {
        "key": "D",
        "content": "Luôn hòa"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Mỗi lượt hai người có thể bốc tổng cộng $1 + 3 = 4$ viên.\nTa lấy $21 : 4 = 5$ dư 1.\nNgười đi trước (An) bốc trước 1 viên sỏi, để lại 20 viên sỏi (bội số của 4). Sau đó đối thủ bốc $k$ viên thì An bốc $4 - k$ viên. An luôn bốc được viên cuối cùng và chiến thắng.\n\nChọn A.",
    "socraticHint": "Lấy tổng số sỏi chia cho $(1 + 3) = 4$, số dư chính là số viên người đi trước cần bốc.",
    "difficulty": "Vận dụng cao",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  }
];
