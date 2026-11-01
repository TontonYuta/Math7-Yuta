import { Question } from '../../../../types/exam';

export const CHUONG_8_BIEN_CO_XAC_SUAT_WORD_QUESTIONS_2: Question[] = [
  {
    "id": 176,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố",
    "content": "Một lớp có $20$ bạn nam và $20$ bạn nữ. Chọn ngẫu nhiên $1$ bạn làm lớp trưởng. Xác suất chọn được bạn nữ là:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{1}{2}$"
      },
      {
        "key": "B",
        "content": "$\\frac{1}{4}$"
      },
      {
        "key": "C",
        "content": "$\\frac{1}{20}$"
      },
      {
        "key": "D",
        "content": "$1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tổng số học sinh là $40$. Xác suất chọn bạn nữ là $\\frac{20}{40} = \\frac{1}{2}$.\n\nChọn A.",
    "socraticHint": "Số nam và nữ bằng nhau nên cơ hội là 50%.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 177,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố",
    "content": "Chọn ngẫu nhiên một số tự nhiên có một chữ số (từ $0$ đến $9$). Xác suất để chọn được số chẵn là bao nhiêu? (Nhập phân số tối giản a/b hoặc số thập phân):",
    "correctAnswer": "1/2",
    "acceptableAnswers": [
      "1/2",
      "0.5",
      "0,5"
    ],
    "detailedSolution": "Có 10 số tự nhiên có một chữ số: $\\{0; 1; 2; ... ; 9\\}$. Các số chẵn là $\\{0; 2; 4; 6; 8\\}$ (5 số). Xác suất là $\\frac{5}{10} = \\frac{1}{2}$.\n\nĐáp số: 1/2.",
    "socraticHint": "Lưu ý số 0 cũng là một số chẵn.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 178,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố",
    "content": "Biết xác suất của biến cố $A$ là $P(A) = 0{,}35$. Xác suất của biến cố không xảy ra $A$ (biến cố đối) là:",
    "options": [
      {
        "key": "A",
        "content": "$0{,}65$"
      },
      {
        "key": "B",
        "content": "$0{,}35$"
      },
      {
        "key": "C",
        "content": "$0$"
      },
      {
        "key": "D",
        "content": "$1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tổng xác suất của biến cố và biến cố đối luôn bằng $1$. Do đó xác suất cần tìm là $1 - 0{,}35 = 0{,}65$.\n\nChọn A.",
    "socraticHint": "Lấy $1$ trừ đi xác suất của biến cố $A$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 179,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố",
    "content": "Một hộp đựng $3$ quả cầu đỏ, $4$ quả cầu xanh và $5$ quả cầu vàng có kích thước như nhau. Lấy ngẫu nhiên $1$ quả. Xác suất lấy được quả cầu không phải màu đỏ là bao nhiêu? (Nhập phân số tối giản a/b hoặc số thập phân):",
    "correctAnswer": "3/4",
    "acceptableAnswers": [
      "3/4",
      "0.75",
      "0,75"
    ],
    "detailedSolution": "Tổng số quả cầu là $3 + 4 + 5 = 12$. Quả cầu không phải màu đỏ là xanh hoặc vàng ($4 + 5 = 9$ quả). Xác suất là $\\frac{9}{12} = \\frac{3}{4} = 0{,}75$.\n\nĐáp số: 3/4.",
    "socraticHint": "Có 9 quả bóng màu xanh hoặc vàng trong tổng số 12 quả.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 180,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "khai_niem_bien_co_ngau_nhien",
    "topicName": "Khái niệm biến cố",
    "content": "Khi gieo một con xúc xắc 6 mặt, biến cố nào sau đây có xác suất bằng 0?",
    "options": [
      {
        "key": "A",
        "content": "Xuất hiện mặt có số chấm chia hết cho 7"
      },
      {
        "key": "B",
        "content": "Xuất hiện mặt có số chấm là số lẻ"
      },
      {
        "key": "C",
        "content": "Xuất hiện mặt 6 chấm"
      },
      {
        "key": "D",
        "content": "Xuất hiện mặt có số chấm nhỏ hơn 5"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Số chấm trên các mặt là $\\{1, 2, 3, 4, 5, 6\\}$, không có số nào chia hết cho 7 nên biến cố này là không thể, xác suất bằng 0.\n\nChọn A.",
    "socraticHint": "Biến cố không thể xảy ra luôn có xác suất bằng 0.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 181,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố",
    "content": "Gieo một con xúc xắc 6 mặt cân đối. Xác suất xuất hiện mặt có số chấm là ước của 6 là bao nhiêu? (Nhập phân số tối giản a/b hoặc số thập phân):",
    "correctAnswer": "2/3",
    "acceptableAnswers": [
      "2/3"
    ],
    "detailedSolution": "Các ước của 6 trong tập $\\{1; 2; 3; 4; 5; 6\\}$ là: $\\{1; 2; 3; 6\\}$ (4 kết quả thuận lợi). Xác suất là $\\frac{4}{6} = \\frac{2}{3}$.\n\nĐáp số: 2/3.",
    "socraticHint": "Liệt kê các số từ 1 đến 6 mà 6 chia hết cho nó.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 182,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất thực nghiệm",
    "content": "Thực hiện quay một tấm bia tròn chia 4 phần bằng nhau $200$ lần, mũi tên dừng lại ở ô vàng $48$ lần. Xác suất thực nghiệm để mũi tên dừng ở ô vàng là:",
    "options": [
      {
        "key": "A",
        "content": "$0{,}24$"
      },
      {
        "key": "B",
        "content": "$0{,}48$"
      },
      {
        "key": "C",
        "content": "$0{,}25$"
      },
      {
        "key": "D",
        "content": "$0{,}5$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Xác suất thực nghiệm là $\\frac{48}{200} = \\frac{24}{100} = 0{,}24$.\n\nChọn A.",
    "socraticHint": "Lấy 48 chia cho 200.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 183,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố",
    "content": "Một hộp có chứa $20$ chiếc thẻ ghi các số tự nhiên từ $1$ đến $20$. Rút ngẫu nhiên một thẻ, xác suất để rút được thẻ ghi số chính phương là bao nhiêu? (Nhập phân số tối giản a/b hoặc số thập phân):",
    "correctAnswer": "1/5",
    "acceptableAnswers": [
      "1/5",
      "0.2",
      "0,2"
    ],
    "detailedSolution": "Các số chính phương từ 1 đến 20 là: $\\{1; 4; 9; 16\\}$ (4 số). Xác suất là $\\frac{4}{20} = \\frac{1}{5} = 0{,}2$.\n\nĐáp số: 1/5.",
    "socraticHint": "Số chính phương là bình phương của số tự nhiên: 1, 4, 9, 16.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 184,
    "type": "mcq",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố",
    "content": "Khi số lần thực nghiệm ngày càng lớn thì xác suất thực nghiệm của một biến cố sẽ có xu hướng thế nào?",
    "options": [
      {
        "key": "A",
        "content": "Ngày càng gần với xác suất lý thuyết của biến cố đó"
      },
      {
        "key": "B",
        "content": "Luôn luôn giảm dần về 0"
      },
      {
        "key": "C",
        "content": "Luôn luôn tăng dần lên 1"
      },
      {
        "key": "D",
        "content": "Dao động ngẫu nhiên không có quy luật"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Theo luật số lớn trong xác suất thống kê, khi số phép thử đủ lớn, xác suất thực nghiệm sẽ hội tụ và xấp xỉ xác suất lý thuyết.\n\nChọn A.",
    "socraticHint": "Càng thử nhiều lần thì kết quả thực tế càng sát với lý thuyết.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 185,
    "type": "fill",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố và xác suất của biến cố",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố",
    "content": "Gieo đồng thời hai đồng xu cân đối và đồng chất. Xác suất để cả hai đồng xu cùng xuất hiện mặt ngửa là bao nhiêu? (Nhập phân số tối giản a/b hoặc số thập phân):",
    "correctAnswer": "1/4",
    "acceptableAnswers": [
      "1/4",
      "0.25",
      "0,25"
    ],
    "detailedSolution": "Có 4 kết quả đồng khả năng: $\\{(S,S); (S,N); (N,S); (N,N)\\}$. Kết quả cùng ngửa là $(N,N)$ (1 kết quả). Xác suất là $\\frac{1}{4} = 0{,}25$.\n\nĐáp số: 1/4.",
    "socraticHint": "Tổng số kết quả là $2 \\times 2 = 4$.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  }
];
