import { Question } from '../../../../types/exam';

export const CHUONG_2_SO_THUC_WORD_QUESTIONS_1: Question[] = [
  {
    "id": 59,
    "type": "fill",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "so_vo_ti_can_bac_hai",
    "topicName": "Số vô tỉ & Căn bậc hai số học",
    "content": "Một mảnh đất hình vuông có diện tích $64\\text{ m}^2$. Độ dài cạnh của mảnh đất là bao nhiêu mét? (Điền số nguyên):",
    "correctAnswer": "8",
    "acceptableAnswers": [
      "8",
      "8m"
    ],
    "detailedSolution": "Cạnh hình vuông bằng $\\sqrt{S} = \\sqrt{64} = 8\\text{ m}$.\n\nĐáp số: 8.",
    "socraticHint": "Cạnh hình vuông bằng căn bậc hai của diện tích.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "isPracticalMath": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 55,
    "type": "fill",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "so_vo_ti_can_bac_hai",
    "topicName": "Số vô tỉ & Căn bậc hai số học",
    "content": "Tìm số thực dương $x$ thỏa mãn $\\sqrt{x} = 9$. (Điền số nguyên):",
    "correctAnswer": "81",
    "acceptableAnswers": [
      "81"
    ],
    "detailedSolution": "Bình phương hai vế: $(\\sqrt{x})^2 = 9^2 \\implies x = 81$.\n\nĐáp số: 81.",
    "socraticHint": "Bình phương số 9 lên.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 56,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "lam_tron_va_uoc_luong",
    "topicName": "Làm tròn số & Ước lượng kết quả",
    "content": "Làm tròn số $4567$ đến hàng trăm ta được:",
    "options": [
      {
        "key": "A",
        "content": "$4600$"
      },
      {
        "key": "B",
        "content": "$4500$"
      },
      {
        "key": "C",
        "content": "$4570$"
      },
      {
        "key": "D",
        "content": "$5000$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chữ số hàng chục là $6 \\ge 5$, ta cộng thêm 1 vào hàng trăm: $4567 \\approx 4600$.\n\nChọn A.",
    "socraticHint": "Chữ số hàng chục lớn hơn hoặc bằng 5 thì tăng 1 ở hàng trăm.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 57,
    "type": "fill",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Tính giá trị biểu thức: $C = |2 - 5| + |-3| \\cdot 2$. (Điền số nguyên):",
    "correctAnswer": "9",
    "acceptableAnswers": [
      "9",
      "9.0"
    ],
    "detailedSolution": "$|2 - 5| = |-3| = 3$. $|-3| \\cdot 2 = 3 \\cdot 2 = 6$. Tổng $C = 3 + 6 = 9$.\n\nĐáp số: 9.",
    "socraticHint": "Thực hiện phép tính trong trị tuyệt đối trước.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 58,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "tap_hop_so_thuc",
    "topicName": "Tập hợp số thực & Trục số thực",
    "content": "Khẳng định nào sau đây là sai?",
    "options": [
      {
        "key": "A",
        "content": "$\\sqrt{2} \\in \\mathbb{Q}$"
      },
      {
        "key": "B",
        "content": "$\\sqrt{2} \\in \\mathbb{R}$"
      },
      {
        "key": "C",
        "content": "$-3 \\in \\mathbb{R}$"
      },
      {
        "key": "D",
        "content": "$\\frac{1}{2} \\in \\mathbb{R}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "$\\sqrt{2}$ là số vô tỉ, không thuộc $\\mathbb{Q}$. Do đó khẳng định A sai.\n\nChọn A.",
    "socraticHint": "$\\sqrt{2}$ có phải là số hữu tỉ không?",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  }
];
