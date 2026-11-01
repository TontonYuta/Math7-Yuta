import { Question } from '../../../../types/exam';

export const CHUONG_2_SO_THUC_WORD_QUESTIONS_2: Question[] = [
  {
    "id": 60,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Biểu thức nào sau đây luôn có giá trị không âm với mọi số thực $x$?",
    "options": [
      {
        "key": "A",
        "content": "$|x| + 1$"
      },
      {
        "key": "B",
        "content": "$x - 1$"
      },
      {
        "key": "C",
        "content": "$-|x|$"
      },
      {
        "key": "D",
        "content": "$x$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vì $|x| \\ge 0$ nên $|x| + 1 \\ge 1 > 0$ với mọi $x$.\n\nChọn A.",
    "socraticHint": "Trị tuyệt đối luôn lớn hơn hoặc bằng 0.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 61,
    "type": "fill",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "so_vo_ti_can_bac_hai",
    "topicName": "Số vô tỉ & Căn bậc hai số học",
    "content": "Tính giá trị của biểu thức $P = \\sqrt{100} : \\sqrt{25}$. (Điền số nguyên):",
    "correctAnswer": "2",
    "acceptableAnswers": [
      "2",
      "2.0"
    ],
    "detailedSolution": "$\\sqrt{100} = 10, \\sqrt{25} = 5 \\implies P = 10 : 5 = 2$.\n\nĐáp số: 2.",
    "socraticHint": "Khai căn 100 và 25.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 62,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "lam_tron_va_uoc_luong",
    "topicName": "Làm tròn số & Ước lượng kết quả",
    "content": "Làm tròn số $9{,}876$ với độ chính xác $0{,}05$ (đến hàng phần mười) ta được:",
    "options": [
      {
        "key": "A",
        "content": "$9{,}9$"
      },
      {
        "key": "B",
        "content": "$9{,}8$"
      },
      {
        "key": "C",
        "content": "$10$"
      },
      {
        "key": "D",
        "content": "$9{,}88$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chữ số hàng phần trăm là $7 \\ge 5$, tăng 1 ở hàng phần mười: $9{,}876 \\approx 9{,}9$.\n\nChọn A.",
    "socraticHint": "Xét chữ số ngay sau hàng phần mười.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 63,
    "type": "fill",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Tìm $x$ biết $|x| = 0$. (Điền số nguyên):",
    "correctAnswer": "0",
    "acceptableAnswers": [
      "0"
    ],
    "detailedSolution": "Chỉ có số $0$ có giá trị tuyệt đối bằng $0$: $x = 0$.\n\nĐáp số: 0.",
    "socraticHint": "Số nào có khoảng cách đến gốc 0 bằng 0?",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 64,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "tap_hop_so_thuc",
    "topicName": "Tập hợp số thực & Trục số thực",
    "content": "Trên trục số thực, giữa hai số hữu tỉ bất kì luôn có:",
    "options": [
      {
        "key": "A",
        "content": "Vô số số thực"
      },
      {
        "key": "B",
        "content": "Chỉ có một số thực"
      },
      {
        "key": "C",
        "content": "Không có số thực nào"
      },
      {
        "key": "D",
        "content": "Chỉ có đúng hai số thực"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Trục số thực lấp đầy liên tục, giữa hai số hữu tỉ bất kì có vô số số thực.\n\nChọn A.",
    "socraticHint": "Tập số thực có tính trù mật.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 65,
    "type": "fill",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "so_vo_ti_can_bac_hai",
    "topicName": "Số vô tỉ & Căn bậc hai số học",
    "content": "Tính giá trị của biểu thức $M = \\sqrt{81} - 3 \\cdot \\sqrt{4}$. (Điền số nguyên):",
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3"
    ],
    "detailedSolution": "$\\sqrt{81} = 9, \\sqrt{4} = 2$. Do đó $M = 9 - 3 \\cdot 2 = 9 - 6 = 3$.\n\nĐáp số: 3.",
    "socraticHint": "Nhân chia trước, cộng trừ sau.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  }
];
