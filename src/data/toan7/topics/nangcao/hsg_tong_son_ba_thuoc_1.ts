import { Question } from '../../../../types/exam';

export const HSG_TONG_SON_BA_THUOC_QUESTIONS_1: Question[] = [
  {
    "id": 350,
    "type": "fill",
    "chapterId": "chuong_3_goc_va_duong_thang_song_song",
    "chapterName": "Chương 3: Góc & Đường thẳng song song",
    "topicId": "goc_doi_dinh_ke_bu_phan_giac",
    "topicName": "Góc ở vị trí đặc biệt & Tia phân giác",
    "content": "Cho 2024 số nguyên dương có tổng bằng 2025. Tích của 2024 số nguyên dương này bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "2",
    "acceptableAnswers": [
      "2"
    ],
    "detailedSolution": "Vì tổng của 2024 số nguyên dương bằng 2025 nên bắt buộc phải có 2023 số bằng 1 và đúng 1 số bằng 2 ($2023 \\times 1 + 2 = 2025$).\nTích của 2024 số đó là $1^{2023} \\times 2 = 2$.\n\nĐáp số: 2.",
    "socraticHint": "Số nhỏ nhất là 1, tổng 2024 số là 2025 nên chỉ có thể có một số 2.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 351,
    "type": "mcq",
    "chapterId": "chuong_3_goc_va_duong_thang_song_song",
    "chapterName": "Chương 3: Góc & Đường thẳng song song",
    "topicId": "goc_doi_dinh_ke_bu_phan_giac",
    "topicName": "Góc ở vị trí đặc biệt & Tia phân giác",
    "content": "Cho tam giác $ABC$ có $\\widehat{A} = 100^\\circ$. Các tia phân giác trong của góc $B$ và $C$ cắt nhau tại $I$. Các tia phân giác ngoài của góc $B$ và $C$ cắt nhau tại $K$. Số đo góc $\\widehat{BKC}$ là:",
    "options": [
      {
        "key": "A",
        "content": "$40^\\circ$"
      },
      {
        "key": "B",
        "content": "$50^\\circ$"
      },
      {
        "key": "C",
        "content": "$60^\\circ$"
      },
      {
        "key": "D",
        "content": "$80^\\circ$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Công thức góc tạo bởi hai tia phân giác ngoài: $\\widehat{BKC} = 90^\\circ - \\frac{\\widehat{A}}{2} = 90^\\circ - 50^\\circ = 40^\\circ$.\n\nChọn A.",
    "socraticHint": "Góc tạo bởi hai phân giác ngoài bằng $90^\\circ - \\frac{\\widehat{A}}{2}$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 352,
    "type": "fill",
    "chapterId": "chuong_3_goc_va_duong_thang_song_song",
    "chapterName": "Chương 3: Góc & Đường thẳng song song",
    "topicId": "goc_doi_dinh_ke_bu_phan_giac",
    "topicName": "Góc ở vị trí đặc biệt & Tia phân giác",
    "content": "Tính giá trị biểu thức $A = \\left(\\frac{1}{2} - 1\\right)\\left(\\frac{1}{3} - 1\\right)\\left(\\frac{1}{4} - 1\\right)\\dots\\left(\\frac{1}{100} - 1\\right)$. Nhập phân số tối giản a/b:",
    "correctAnswer": "-1/100",
    "acceptableAnswers": [
      "-1/100"
    ],
    "detailedSolution": "Ta tính từng thừa số:\n$$A = \\left(-\\frac{1}{2}\\right)\\left(-\\frac{2}{3}\\right)\\left(-\\frac{3}{4}\\right)\\dots\\left(-\\frac{99}{100}\\right)$$\nCó $99$ thừa số âm (từ 2 đến 100 có 99 số) nên tích mang dấu âm.\nRút gọn chéo các số liên tiếp: $A = -\\frac{1}{100}$.\n\nĐáp số: -1/100.",
    "socraticHint": "Đếm số dấu âm lẻ và rút gọn chéo các tử - mẫu kế tiếp.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 353,
    "type": "mcq",
    "chapterId": "chuong_3_goc_va_duong_thang_song_song",
    "chapterName": "Chương 3: Góc & Đường thẳng song song",
    "topicId": "goc_doi_dinh_ke_bu_phan_giac",
    "topicName": "Góc ở vị trí đặc biệt & Tia phân giác",
    "content": "Đa thức nào sau đây không thể có nghiệm thực?",
    "options": [
      {
        "key": "A",
        "content": "$x^4 + 3x^2 + 2$"
      },
      {
        "key": "B",
        "content": "$x^3 - 8$"
      },
      {
        "key": "C",
        "content": "$x^2 - 2x$"
      },
      {
        "key": "D",
        "content": "$x^5 + 1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vì $x^4 \\ge 0$ và $3x^2 \\ge 0$ nên $x^4 + 3x^2 + 2 \\ge 2 > 0$ với mọi $x$. Đa thức luôn dương nên vô nghiệm.\n\nChọn A.",
    "socraticHint": "Tổng các lũy thừa chẵn cộng với số dương luôn lớn hơn 0.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 354,
    "type": "fill",
    "chapterId": "chuong_3_goc_va_duong_thang_song_song",
    "chapterName": "Chương 3: Góc & Đường thẳng song song",
    "topicId": "goc_doi_dinh_ke_bu_phan_giac",
    "topicName": "Góc ở vị trí đặc biệt & Tia phân giác",
    "content": "Cho $x, y$ là hai số thực thỏa mãn $x^2 + y^2 - 2x + 4y + 5 = 0$. Giá trị của $2x + y$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "0",
    "acceptableAnswers": [
      "0"
    ],
    "detailedSolution": "Thêm bớt hằng đẳng thức:\n$$(x^2 - 2x + 1) + (y^2 + 4y + 4) = 0 \\implies (x - 1)^2 + (y + 2)^2 = 0$$\nSuy ra $x = 1$ và $y = -2$.\nDo đó $2x + y = 2(1) + (-2) = 0$.\n\nĐáp số: 0.",
    "socraticHint": "Tách biểu thức thành $(x-1)^2 + (y+2)^2 = 0$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 355,
    "type": "mcq",
    "chapterId": "chuong_3_goc_va_duong_thang_song_song",
    "chapterName": "Chương 3: Góc & Đường thẳng song song",
    "topicId": "goc_doi_dinh_ke_bu_phan_giac",
    "topicName": "Góc ở vị trí đặc biệt & Tia phân giác",
    "content": "Trong một buổi giao lưu gồm 15 học sinh, chứng minh rằng luôn có ít nhất 2 học sinh có cùng số lượng người quen trong nhóm (quen là quan hệ hai chiều). Khẳng định này dựa vào nguyên lý nào?",
    "options": [
      {
        "key": "A",
        "content": "Nguyên lý Dirichlet (nguyên lý lồng chim)"
      },
      {
        "key": "B",
        "content": "Định lý Thales"
      },
      {
        "key": "C",
        "content": "Định lý Pythagore"
      },
      {
        "key": "D",
        "content": "Bất đẳng thức Cauchy"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Số người quen của mỗi người thuộc tập $\\{0, 1, ..., 14\\}$. Nếu có người quen 0 người thì không có người quen 14 người và ngược lại. Do đó chỉ có tối đa 14 giá trị số người quen cho 15 học sinh. Theo nguyên lý Dirichlet tồn tại ít nhất 2 bạn có cùng số người quen.\n\nChọn A.",
    "socraticHint": "Có 15 người nhưng chỉ có tối đa 14 khả năng khác nhau.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 356,
    "type": "fill",
    "chapterId": "chuong_3_goc_va_duong_thang_song_song",
    "chapterName": "Chương 3: Góc & Đường thẳng song song",
    "topicId": "goc_doi_dinh_ke_bu_phan_giac",
    "topicName": "Góc ở vị trí đặc biệt & Tia phân giác",
    "content": "Tìm số nguyên dương $n$ nhỏ nhất sao cho $n!$ có tận cùng là 2 chữ số 0. (Điền số nguyên):",
    "correctAnswer": "10",
    "acceptableAnswers": [
      "10"
    ],
    "detailedSolution": "Số chữ số 0 tận cùng của $n!$ phụ thuộc vào số thừa số 5 trong tích $1 \\times 2 \\times \\dots \\times n$.\n- $5!$ đến $9!$ có 1 thừa số 5 $\\implies$ 1 chữ số 0.\n- $10!$ có thêm thừa số 10 (chứa 5) nên có 2 thừa số 5 $\\implies$ 2 chữ số 0 tận cùng.\nVậy số nguyên dương nhỏ nhất là $10$.\n\nĐáp số: 10.",
    "socraticHint": "Đếm số thừa số 5 trong phân tích $n!$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 357,
    "type": "mcq",
    "chapterId": "chuong_3_goc_va_duong_thang_song_song",
    "chapterName": "Chương 3: Góc & Đường thẳng song song",
    "topicId": "goc_doi_dinh_ke_bu_phan_giac",
    "topicName": "Góc ở vị trí đặc biệt & Tia phân giác",
    "content": "Cho $\\Delta ABC$ có $\\widehat{A} = 60^\\circ$. Hai tia phân giác trong của góc $B$ và $C$ cắt nhau tại $I$. Khẳng định nào sau đây là đúng về tam giác $IBC$?",
    "options": [
      {
        "key": "A",
        "content": "$\\widehat{BIC} = 120^\\circ$"
      },
      {
        "key": "B",
        "content": "$\\widehat{BIC} = 150^\\circ$"
      },
      {
        "key": "C",
        "content": "$\\widehat{BIC} = 90^\\circ$"
      },
      {
        "key": "D",
        "content": "$\\widehat{BIC} = 135^\\circ$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có $\\widehat{BIC} = 90^\\circ + \\frac{\\widehat{A}}{2} = 90^\\circ + 30^\\circ = 120^\\circ$.\n\nChọn A.",
    "socraticHint": "Áp dụng công thức góc phân giác $\\widehat{BIC} = 90^\\circ + \\frac{\\widehat{A}}{2}$.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 358,
    "type": "fill",
    "chapterId": "chuong_3_goc_va_duong_thang_song_song",
    "chapterName": "Chương 3: Góc & Đường thẳng song song",
    "topicId": "goc_doi_dinh_ke_bu_phan_giac",
    "topicName": "Góc ở vị trí đặc biệt & Tia phân giác",
    "content": "Cho biểu thức $P = \\frac{x}{x+y+z} + \\frac{y}{x+y+t} + \\frac{z}{y+z+t} + \\frac{t}{x+z+t}$ với $x, y, z, t > 0$. Phần nguyên $[P]$ bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "1",
    "acceptableAnswers": [
      "1"
    ],
    "detailedSolution": "Ta chứng minh được $1 < P < 2$:\nVì $\\frac{x}{x+y+z+t} < \\frac{x}{x+y+z} < \\frac{x+t}{x+y+z+t}$.\nThiết lập 4 BĐT tương tự cộng lại ta được $1 < P < 2$.\nDo đó phần nguyên $[P] = 1$.\n\nĐáp số: 1.",
    "socraticHint": "Đánh giá bất đẳng thức kép: $1 < P < 2$.",
    "difficulty": "Vận dụng cao",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 359,
    "type": "mcq",
    "chapterId": "chuong_3_goc_va_duong_thang_song_song",
    "chapterName": "Chương 3: Góc & Đường thẳng song song",
    "topicId": "goc_doi_dinh_ke_bu_phan_giac",
    "topicName": "Góc ở vị trí đặc biệt & Tia phân giác",
    "content": "Số chính phương có thể có chữ số tận cùng là chữ số nào sau đây?",
    "options": [
      {
        "key": "A",
        "content": "$6$"
      },
      {
        "key": "B",
        "content": "$2$"
      },
      {
        "key": "C",
        "content": "$3$"
      },
      {
        "key": "D",
        "content": "$7$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Bình phương của một số tự nhiên chỉ có thể tận cùng bằng các chữ số: $0, 1, 4, 5, 6, 9$. Không bao giờ tận cùng bằng $2, 3, 7, 8$.\n\nChọn A.",
    "socraticHint": "Số chính phương không bao giờ tận cùng bằng 2, 3, 7, 8.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  }
];
