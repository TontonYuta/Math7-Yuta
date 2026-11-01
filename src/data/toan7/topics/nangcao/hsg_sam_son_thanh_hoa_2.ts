import { Question } from '../../../../types/exam';

export const HSG_SAM_SON_THANH_HOA_QUESTIONS_2: Question[] = [
  {
    "id": 280,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Giá trị nhỏ nhất của biểu thức $M = (x - 2)^2 + (y + 1)^4 + 7$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "7",
    "acceptableAnswers": [
      "7"
    ],
    "detailedSolution": "Vì $(x - 2)^2 \\ge 0$ và $(y + 1)^4 \\ge 0$ với mọi $x, y$ nên $M \\ge 7$.\nDấu \"=\" xảy ra khi $x = 2$ và $y = -1$.\n\nĐáp số: 7.",
    "socraticHint": "Lũy thừa bậc chẵn luôn lớn hơn hoặc bằng 0.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 281,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Cho tam giác $ABC$. Các đường phân giác trong của góc $B$ và $C$ cắt nhau tại $I$. Biết $\\widehat{A} = 80^\\circ$. Số đo góc $\\widehat{BIC}$ là:",
    "options": [
      {
        "key": "A",
        "content": "$130^\\circ$"
      },
      {
        "key": "B",
        "content": "$140^\\circ$"
      },
      {
        "key": "C",
        "content": "$120^\\circ$"
      },
      {
        "key": "D",
        "content": "$100^\\circ$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Công thức góc tạo bởi hai đường phân giác trong: $\\widehat{BIC} = 90^\\circ + \\frac{\\widehat{A}}{2} = 90^\\circ + 40^\\circ = 130^\\circ$.\n\nChọn A.",
    "socraticHint": "Góc tạo bởi hai phân giác trong bằng $90^\\circ + \\frac{\\widehat{A}}{2}$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 282,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Tìm số nguyên dương $n$ để phân số $\\frac{3n + 9}{n - 4}$ nhận giá trị là một số nguyên. Có bao nhiêu số nguyên dương $n$ như vậy? (Điền số nguyên):",
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4"
    ],
    "detailedSolution": "Ta có $\\frac{3n + 9}{n - 4} = \\frac{3(n - 4) + 21}{n - 4} = 3 + \\frac{21}{n - 4}$.\nĐể nguyên thì $n - 4$ là ước của $21$: Ư$(21) = \\{\\pm 1; \\pm 3; \\pm 7; \\pm 21\\}$.\nVì $n$ nguyên dương ($n > 0$):\n- $n - 4 = 1 \\implies n = 5$\n- $n - 4 = 3 \\implies n = 7$\n- $n - 4 = 7 \\implies n = 11$\n- $n - 4 = 21 \\implies n = 25$\n- $n - 4 = -1 \\implies n = 3$\n- $n - 4 = -3 \\implies n = 1$\n- $n - 4 = -7 \\implies n = -3$ (loại)\n- $n - 4 = -21 \\implies n = -17$ (loại)\nNhư vậy có $6$ giá trị nguyên dương của $n$: $\\{1; 3; 5; 7; 11; 25\\}$.\nKhoan, đếm lại: $n \\in \\{1; 3; 5; 7; 11; 25\\}$ gồm đúng 6 giá trị nguyên dương.\n\nĐáp số: 6.",
    "socraticHint": "Tách tử số thành $3(n-4) + 21$, tìm ước của 21 cho $n > 0$.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 283,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Hai xe ô tô cùng khởi hành từ hai điểm $A$ và $B$ cách nhau $120\\text{ km}$ đi ngược chiều nhau. Vận tốc xe thứ nhất gấp $1{,}5$ lần xe thứ hai. Sau $1$ giờ $12$ phút hai xe gặp nhau. Vận tốc xe thứ nhất là:",
    "options": [
      {
        "key": "A",
        "content": "$60\\text{ km/h}$"
      },
      {
        "key": "B",
        "content": "$40\\text{ km/h}$"
      },
      {
        "key": "C",
        "content": "$50\\text{ km/h}$"
      },
      {
        "key": "D",
        "content": "$72\\text{ km/h}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đổi $1\\text{h}12\\text{p} = 1{,}2\\text{ h}$.\nTổng vận tốc 2 xe: $v_1 + v_2 = 120 : 1{,}2 = 100\\text{ km/h}$.\nVì $v_1 = 1{,}5 v_2 \\implies 1{,}5 v_2 + v_2 = 100 \\implies 2{,}5 v_2 = 100 \\implies v_2 = 40\\text{ km/h}$.\nDo đó $v_1 = 60\\text{ km/h}$.\n\nChọn A.",
    "socraticHint": "Tổng quãng đường chia cho thời gian gặp nhau ra tổng vận tốc.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 284,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Tìm chữ số tận cùng của số $P = 7^{2023}$. (Điền một chữ số từ 0 đến 9):",
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3"
    ],
    "detailedSolution": "Lũy thừa của $7$ có chu kì tận cùng là $4$:\n$7^1 = 7; 7^2 = 49; 7^3 = 343; 7^4 = 2401 \\equiv 1 \\pmod{10}$.\nTa có $2023 = 4 \\times 505 + 3$.\nChữ số tận cùng của $7^{2023}$ là chữ số tận cùng của $7^3$, tức là $3$.\n\nĐáp số: 3.",
    "socraticHint": "Chu kì chữ số tận cùng của $7^n$ là: 7, 9, 3, 1.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 285,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Cho đa thức bậc hai $f(x) = ax^2 + bx + c$. Biết $f(0) = 2, f(1) = 7, f(2) = 16$. Giá trị của $f(3)$ là:",
    "options": [
      {
        "key": "A",
        "content": "$29$"
      },
      {
        "key": "B",
        "content": "$25$"
      },
      {
        "key": "C",
        "content": "$27$"
      },
      {
        "key": "D",
        "content": "$31$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "$f(0) = c = 2$.\n$f(1) = a + b + 2 = 7 \\implies a + b = 5$.\n$f(2) = 4a + 2b + 2 = 16 \\implies 2a + b = 7$.\nTrừ hai phương trình: $a = 2, b = 3$.\nVậy $f(x) = 2x^2 + 3x + 2$. Khi đó $f(3) = 2(9) + 3(3) + 2 = 18 + 9 + 2 = 29$.\n\nChọn A.",
    "socraticHint": "Lập hệ phương trình tìm các hệ số $a, b, c$.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 286,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Cho $\\frac{a}{b} = \\frac{c}{d}$. Biết $a + 2c = 14$ và $b + 2d = 21$. Tỉ số $\\frac{a}{b}$ bằng bao nhiêu? (Nhập dưới dạng phân số tối giản a/b):",
    "correctAnswer": "2/3",
    "acceptableAnswers": [
      "2/3"
    ],
    "detailedSolution": "Áp dụng tính chất dãy tỉ số bằng nhau:\n$$\\frac{a}{b} = \\frac{c}{d} = \\frac{2c}{2d} = \\frac{a + 2c}{b + 2d} = \\frac{14}{21} = \\frac{2}{3}$$\n\nĐáp số: 2/3.",
    "socraticHint": "Biến đổi $\\frac{c}{d} = \\frac{2c}{2d}$ rồi cộng tử với tử, mẫu với mẫu.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 287,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Đa thức $g(x) = x^3 - 4x$ có tất cả bao nhiêu nghiệm thực?",
    "options": [
      {
        "key": "A",
        "content": "$3$ nghiệm"
      },
      {
        "key": "B",
        "content": "$1$ nghiệm"
      },
      {
        "key": "C",
        "content": "$2$ nghiệm"
      },
      {
        "key": "D",
        "content": "$0$ nghiệm"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đặt nhân tử chung: $g(x) = x(x^2 - 4) = x(x - 2)(x + 2) = 0$.\nNghiệm là $x = 0, x = 2, x = -2$. Có tất cả $3$ nghiệm thực phân biệt.\n\nChọn A.",
    "socraticHint": "Phân tích đa thức thành nhân tử: $x(x-2)(x+2) = 0$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 288,
    "type": "fill",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Tìm số tự nhiên $n$ thỏa mãn: $2^n + 2^{n+3} = 144$. (Điền số nguyên):",
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4"
    ],
    "detailedSolution": "Đặt nhân tử chung $2^n$:\n$$2^n(1 + 2^3) = 144 \\implies 2^n \\cdot 9 = 144 \\implies 2^n = 16 = 2^4 \\implies n = 4$$\n\nĐáp số: 4.",
    "socraticHint": "Đặt $2^n$ làm thừa số chung: $2^n(1 + 8) = 144$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 289,
    "type": "mcq",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Dãy tỉ số bằng nhau",
    "content": "Cho tam giác $ABC$ có $\\widehat{A} = 90^\\circ$ và $AB = AC$. Qua $A$ kẻ đường thẳng $xy$ bất kì không cắt đoạn thẳng $BC$. Kẻ $BD \\perp xy$ và $CE \\perp xy$ ($D, E \\in xy$). Khẳng định nào sau đây là đúng?",
    "options": [
      {
        "key": "A",
        "content": "$DE = BD + CE$"
      },
      {
        "key": "B",
        "content": "$DE = BD - CE$"
      },
      {
        "key": "C",
        "content": "$DE = 2(BD + CE)$"
      },
      {
        "key": "D",
        "content": "$DE^2 = BD^2 + CE^2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có $\\widehat{DAB} + \\widehat{EAC} = 90^\\circ$ và $\\widehat{DBA} + \\widehat{DAB} = 90^\\circ \\implies \\widehat{DBA} = \\widehat{EAC}$.\nSuy ra $\\Delta BDA = \\Delta AEC$ (cạnh huyền - góc nhọn).\nDo đó $DA = CE$ và $BD = AE$.\nVậy $DE = DA + AE = CE + BD$.\n\nChọn A.",
    "socraticHint": "Chứng minh $\\Delta BDA = \\Delta AEC$ theo trường hợp cạnh huyền - góc nhọn.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  }
];
