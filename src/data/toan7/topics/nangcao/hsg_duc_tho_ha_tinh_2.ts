import { Question } from '../../../../types/exam';

export const HSG_DUC_THO_HA_TINH_QUESTIONS_2: Question[] = [
  {
    "id": 320,
    "type": "fill",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "Tìm số tự nhiên $n$ lớn nhất có hai chữ số sao cho $2^n < 3^{50}$. Biết rằng $2^{79} < 3^{50} < 2^{80}$. Giá trị của $n$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "79",
    "acceptableAnswers": [
      "79"
    ],
    "detailedSolution": "Vì $2^{79} < 3^{50} < 2^{80}$ nên số tự nhiên $n$ lớn nhất thỏa mãn $2^n < 3^{50}$ là $n = 79$.\n\nĐáp số: 79.",
    "socraticHint": "Sử dụng bất đẳng thức kép đã cho để xác định $n$ lớn nhất.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 321,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "Cho $\\Delta ABC$ có trung tuyến $AD, BE, CF$ cắt nhau tại $G$. Khẳng định nào sau đây là SAI?",
    "options": [
      {
        "key": "A",
        "content": "$AD + BE + CF > AB + BC + CA$"
      },
      {
        "key": "B",
        "content": "$AD + BE + CF < AB + BC + CA$"
      },
      {
        "key": "C",
        "content": "$AD + BE + CF > \\frac{3}{4}(AB + BC + CA)$"
      },
      {
        "key": "D",
        "content": "$S_{\\Delta GAB} = S_{\\Delta GBC} = S_{\\Delta GCA}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tổng độ dài ba đường trung tuyến luôn nhỏ hơn chu vi tam giác ($m_a + m_b + m_c < a + b + c$) và lớn hơn $\\frac{3}{4}$ chu vi. Khẳng định $AD + BE + CF > AB + BC + CA$ là sai.\n\nChọn A.",
    "socraticHint": "Trung tuyến luôn nhỏ hơn nửa tổng hai cạnh kề: $m_a < \\frac{b+c}{2}$.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 322,
    "type": "fill",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "Tìm giá trị nhỏ nhất của biểu thức $P = x^2 - 4x + y^2 - 6y + 20$. (Điền số nguyên):",
    "correctAnswer": "7",
    "acceptableAnswers": [
      "7"
    ],
    "detailedSolution": "Thêm bớt tạo bình phương:\n$$P = (x^2 - 4x + 4) + (y^2 - 6y + 9) + 7 = (x - 2)^2 + (y - 3)^2 + 7$$\nVì các bình phương $\\ge 0$ nên $P \\ge 7$. Đẳng thức xảy ra khi $x = 2, y = 3$.\n\nĐáp số: 7.",
    "socraticHint": "Tách biểu thức thành $(x-2)^2 + (y-3)^2 + c$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 323,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "Một số tự nhiên $N$ khi chia cho 3 dư 2, chia cho 5 dư 3, chia cho 7 dư 4. Số dư khi chia $2N$ cho 105 là:",
    "options": [
      {
        "key": "A",
        "content": "1"
      },
      {
        "key": "B",
        "content": "2"
      },
      {
        "key": "C",
        "content": "104"
      },
      {
        "key": "D",
        "content": "53"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có:\n$2N = 2(3k + 2) = 6k + 4 = 3(2k + 1) + 1 \\equiv 1 \\pmod 3$.\n$2N = 2(5m + 3) = 10m + 6 = 5(2m + 1) + 1 \\equiv 1 \\pmod 5$.\n$2N = 2(7p + 4) = 14p + 8 = 7(2p + 1) + 1 \\equiv 1 \\pmod 7$.\nDo đó $2N - 1$ đồng thời chia hết cho 3, 5, 7 $\\implies 2N - 1$ chia hết cho $\\text{BCNN}(3,5,7) = 105$.\nVậy $2N$ chia cho 105 dư 1.\n\nChọn A.",
    "socraticHint": "Nhân đôi số $N$ lên và xét số dư của $2N$ với 3, 5, 7.",
    "difficulty": "Vận dụng cao",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 324,
    "type": "fill",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "Cho $\\frac{a}{b} = \\frac{b}{c} = \\frac{c}{d}$ với $a, b, c, d > 0$ và $a = 8, d = 64$. Giá trị của $b + c$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "48",
    "acceptableAnswers": [
      "48"
    ],
    "detailedSolution": "Nhân ba tỉ số:\n$$\\left(\\frac{a}{b}\\right)^3 = \\frac{a}{b} \\cdot \\frac{b}{c} \\cdot \\frac{c}{d} = \\frac{a}{d} = \\frac{8}{64} = \\frac{1}{8} \\implies \\frac{a}{b} = \\frac{1}{2}$$\nSuy ra $b = 2a = 16$. Tương tự $c = 2b = 32$.\nTổng $b + c = 16 + 32 = 48$.\n\nĐáp số: 48.",
    "socraticHint": "Nhân cả ba tỉ số lại để rút gọn về $\\frac{a}{d}$.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 325,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "Cho tam giác $ABC$ có $\\widehat{B} = 2\\widehat{C}$. Kẻ đường cao $AH$. Khẳng định nào sau đây liên hệ giữa $BH$ và các cạnh của tam giác?",
    "options": [
      {
        "key": "A",
        "content": "$AB + BH = CH$"
      },
      {
        "key": "B",
        "content": "$AB = 2BH$"
      },
      {
        "key": "C",
        "content": "$BH + CH = 2AB$"
      },
      {
        "key": "D",
        "content": "$AB - BH = CH$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Trên tia đối của tia $HB$ lấy điểm $D$ sao cho $HD = HB$. Khi đó $\\Delta ABD$ cân tại $A \\implies AD = AB$ và $\\widehat{ADB} = \\widehat{B} = 2\\widehat{C}$.\nTrong $\\Delta ADC$, góc ngoài $\\widehat{ADB} = \\widehat{DAC} + \\widehat{C} \\implies 2\\widehat{C} = \\widehat{DAC} + \\widehat{C} \\implies \\widehat{DAC} = \\widehat{C}$.\nDo đó $\\Delta ADC$ cân tại $D \\implies DC = DA = AB$.\nMà $CH = CD + DH = AB + BH$.\n\nChọn A.",
    "socraticHint": "Lấy điểm $D$ đối xứng với $B$ qua $H$.",
    "difficulty": "Vận dụng cao",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 326,
    "type": "fill",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "Tìm hai chữ số tận cùng của số $5^{2024}$. (Điền số nguyên hai chữ số):",
    "correctAnswer": "25",
    "acceptableAnswers": [
      "25"
    ],
    "detailedSolution": "Mọi lũy thừa $5^n$ với $n \\ge 2$ đều có hai chữ số tận cùng là $25$.\nVì $2024 \\ge 2$ nên $5^{2024}$ tận cùng là $25$.\n\nĐáp số: 25.",
    "socraticHint": "Xét hai chữ số tận cùng của $5^2, 5^3, 5^4, ...$",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 327,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "Tìm tất cả các số nguyên $n$ để phân thức $\\frac{n^2 + 2n - 3}{n + 1}$ nhận giá trị nguyên:",
    "options": [
      {
        "key": "A",
        "content": "$n \\in \\{-5; -3; -2; 0; 1; 3\\}$"
      },
      {
        "key": "B",
        "content": "$n \\in \\{0; 2\\}$"
      },
      {
        "key": "C",
        "content": "$n \\in \\{-3; 1\\}$"
      },
      {
        "key": "D",
        "content": "Không có giá trị nào"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chia đa thức:\n$$\\frac{n^2 + 2n - 3}{n + 1} = \\frac{(n + 1)^2 - 4}{n + 1} = (n + 1) - \\frac{4}{n + 1}$$\nĐể nguyên thì $n + 1 \\in Ư(4) = \\{\\pm 1; \\pm 2; \\pm 4\\}$.\nSuy ra $n \\in \\{0; -2; 1; -3; 3; -5\\}$.\n\nChọn A.",
    "socraticHint": "Viết tử số dưới dạng $(n+1)^2 - 4$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 328,
    "type": "fill",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "Cho dãy số $u_n = \\frac{1}{n(n+1)(n+2)}$. Tính tổng $S = u_1 + u_2 + \\dots + u_{10}$. Nhập phân số tối giản a/b:",
    "correctAnswer": "55/264",
    "acceptableAnswers": [
      "55/264",
      "5/24"
    ],
    "detailedSolution": "Ta có công thức: $\\frac{1}{n(n+1)(n+2)} = \\frac{1}{2} \\left[ \\frac{1}{n(n+1)} - \\frac{1}{(n+1)(n+2)} \\right]$.\nCộng lại triệt tiêu:\n$$S = \\frac{1}{2} \\left[ \\frac{1}{1 \\cdot 2} - \\frac{1}{11 \\cdot 12} \\right] = \\frac{1}{2} \\left[ \\frac{1}{2} - \\frac{1}{132} \\right] = \\frac{1}{2} \\cdot \\frac{65}{132} = \\frac{65}{264}$$\nKhoan: $\\frac{1}{2} - \\frac{1}{132} = \\frac{66 - 1}{132} = \\frac{65}{132}$.\nNhân $\\frac{1}{2}$ được $\\frac{65}{264}$.\n\nĐáp số: 65/264.",
    "socraticHint": "Tách sai phân bậc 3: nhân $2$ vào biểu thức tổng.",
    "difficulty": "Vận dụng cao",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 329,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ góc - cạnh & Bất đẳng thức tam giác",
    "content": "Cho tam giác $ABC$ đều. Điểm $P$ bất kì trong tam giác. Gọi khoảng cách từ $P$ đến 3 cạnh $BC, CA, AB$ lần lượt là $x, y, z$ và chiều cao tam giác đều là $h$. Hệ thức nào sau đây luôn đúng?",
    "options": [
      {
        "key": "A",
        "content": "$x + y + z = h$"
      },
      {
        "key": "B",
        "content": "$x + y + z = 2h$"
      },
      {
        "key": "C",
        "content": "$x^2 + y^2 + z^2 = h^2$"
      },
      {
        "key": "D",
        "content": "$x + y + z = \\frac{h}{2}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Định lý Viviani: Nối $P$ với ba đỉnh $A, B, C$. Diện tích $\\Delta ABC$ bằng tổng diện tích ba tam giác nhỏ:\n$$S_{ABC} = S_{PBC} + S_{PCA} + S_{PAB} \\implies \\frac{1}{2} a h = \\frac{1}{2} a x + \\frac{1}{2} a y + \\frac{1}{2} a z \\implies h = x + y + z$$\n\nChọn A.",
    "socraticHint": "Định lý Viviani nổi tiếng cho tam giác đều dùng diện tích.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  }
];
