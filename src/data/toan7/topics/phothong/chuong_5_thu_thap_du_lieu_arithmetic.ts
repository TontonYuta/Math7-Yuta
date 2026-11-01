import { Question } from '../../../../types/exam';

export const CHUONG_5_THU_THAP_DU_LIEU_ARITHMETIC_QUESTIONS: Question[] = [
  {
    "id": 106,
    "type": "mcq",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập và biểu diễn dữ liệu",
    "topicId": "thu_thap_phan_loai_du_lieu",
    "topicName": "Thu thập và phân loại dữ liệu",
    "content": "Dãy dữ liệu nào sau đây là dãy số liệu (dữ liệu định lượng)?",
    "options": [
      {
        "key": "A",
        "content": "Màu sắc yêu thích của học sinh: Xanh, Đỏ, Vàng, Tím"
      },
      {
        "key": "B",
        "content": "Điểm kiểm tra môn Toán của 5 bạn: $8; 9; 7; 10; 8$"
      },
      {
        "key": "C",
        "content": "Xếp loại học lực cuối kì: Giỏi, Khá, Đạt, Chưa đạt"
      },
      {
        "key": "D",
        "content": "Nơi sinh của các thành viên trong tổ: Hà Nội, Huế, Đà Nẵng"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Dãy số liệu (dữ liệu định lượng) là dữ liệu nhận giá trị là các con số thực: $8; 9; 7; 10; 8$.\n\nChọn B.",
    "socraticHint": "Dữ liệu số liệu luôn là các con số đo lường hoặc đếm được.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  },
  {
    "id": 112,
    "type": "mcq",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập và biểu diễn dữ liệu",
    "topicId": "thu_thap_phan_loai_du_lieu",
    "topicName": "Thu thập và phân loại dữ liệu",
    "content": "Trong các dữ liệu sau, dữ liệu nào là dữ liệu không phải là số và không thể sắp thứ tự?",
    "options": [
      {
        "key": "A",
        "content": "Số huy chương vàng của các đoàn: $10; 8; 5$"
      },
      {
        "key": "B",
        "content": "Trình độ tiếng Anh: Sơ cấp, Trung cấp, Cao cấp"
      },
      {
        "key": "C",
        "content": "Môn thể thao yêu thích: Bóng đá, Bóng chuyền, Cầu lông"
      },
      {
        "key": "D",
        "content": "Độ dài đường chạy: $100\\text{m}, 200\\text{m}, 400\\text{m}$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "Môn thể thao là dữ liệu định tính không thể sắp xếp thứ tự logic tự nhiên lớn hơn hay nhỏ hơn.\n\nChọn C.",
    "socraticHint": "Không thể so sánh bóng đá lớn hơn hay nhỏ hơn cầu lông.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  },
  {
    "id": 125,
    "type": "fill",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập và biểu diễn dữ liệu",
    "topicId": "bieu_do_quat_tron_doan_thang",
    "topicName": "Biểu đồ đoạn thẳng",
    "content": "Lượng mưa tại một trạm đo trong $3$ tháng hè lần lượt là: Tháng 6 ($150\\text{mm}$), Tháng 7 ($220\\text{mm}$), Tháng 8 ($230\\text{mm}$). Lượng mưa trung bình của $3$ tháng đó là bao nhiêu mm? (Điền số nguyên):",
    "correctAnswer": "200",
    "acceptableAnswers": [
      "200"
    ],
    "detailedSolution": "Lượng mưa trung bình là:\n$$\\frac{150 + 220 + 230}{3} = \\frac{600}{3} = 200\\text{mm}$$\n\nĐáp số: 200.",
    "socraticHint": "Cộng ba tháng lại rồi chia 3.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  }
];
