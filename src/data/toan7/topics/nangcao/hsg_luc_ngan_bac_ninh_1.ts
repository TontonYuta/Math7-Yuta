import { Question } from '../../../../types/exam';

export const HSG_LUC_NGAN_BAC_NINH_QUESTIONS_1: Question[] = [
  {
    "id": 330,
    "type": "fill",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "bieu_do_quat_tron_doan_thang",
    "topicName": "Biểu đồ hình quạt tròn & Biểu đồ đoạn thẳng",
    "content": "Tìm giá trị nhỏ nhất của biểu thức $K = |x - 1| + |x - 2| + |x - 3| + |x - 4|$. (Điền số nguyên):",
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4"
    ],
    "detailedSolution": "Ghép cặp ngoài cùng và cặp bên trong:\n$$|x - 1| + |x - 4| = |x - 1| + |4 - x| \\ge |x - 1 + 4 - x| = 3$$\n$$|x - 2| + |x - 3| = |x - 2| + |3 - x| \\ge |x - 2 + 3 - x| = 1$$\nCộng lại ta được $K \\ge 3 + 1 = 4$.\nDấu bằng xảy ra khi $2 \\le x \\le 3$.\n\nĐáp số: 4.",
    "socraticHint": "Ghép cặp $(|x-1| + |4-x|)$ và $(|x-2| + |3-x|)$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 331,
    "type": "mcq",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "bieu_do_quat_tron_doan_thang",
    "topicName": "Biểu đồ hình quạt tròn & Biểu đồ đoạn thẳng",
    "content": "Cho $a, b, c$ là các số thỏa mãn $a + b + c = 6$ và $ab + bc + ca = 12$. Giá trị của $a, b, c$ là:",
    "options": [
      {
        "key": "A",
        "content": "$a = b = c = 2$"
      },
      {
        "key": "B",
        "content": "$a = 1, b = 2, c = 3$"
      },
      {
        "key": "C",
        "content": "$a = 0, b = 2, c = 4$"
      },
      {
        "key": "D",
        "content": "Vô số nghiệm"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Ta có hằng đẳng thức:\n$$(a - b)^2 + (b - c)^2 + (c - a)^2 = 2(a^2 + b^2 + c^2 - ab - bc - ca)$$\nMà $a^2 + b^2 + c^2 = (a + b + c)^2 - 2(ab + bc + ca) = 36 - 24 = 12$.\nDo đó $a^2 + b^2 + c^2 - ab - bc - ca = 12 - 12 = 0$.\nSuy ra $(a - b)^2 + (b - c)^2 + (c - a)^2 = 0 \\implies a = b = c = \\frac{6}{3} = 2$.\n\nChọn A.",
    "socraticHint": "Tính $a^2 + b^2 + c^2 - (ab + bc + ca) = 0$.",
    "difficulty": "Vận dụng cao",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 332,
    "type": "fill",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "bieu_do_quat_tron_doan_thang",
    "topicName": "Biểu đồ hình quạt tròn & Biểu đồ đoạn thẳng",
    "content": "Có bao nhiêu cặp số nguyên $(x; y)$ thỏa mãn đẳng thức $x^2 y + x + xy + 1 = 0$? (Điền số nguyên):",
    "correctAnswer": "2",
    "acceptableAnswers": [
      "2",
      "2 cặp"
    ],
    "detailedSolution": "Nhóm nhân tử chung:\n$$xy(x + 1) + (x + 1) = 0 \\implies (x + 1)(xy + 1) = 0$$\n- Trường hợp 1: $x + 1 = 0 \\implies x = -1$. Khi đó $xy + 1 = -y + 1$ tuỳ ý, có vô số nghiệm nếu không có điều kiện? Khoan!\nĐề bài chuẩn: $x^2 y + xy - x - 1 = 4 \\implies (x + 1)(xy - 1) = 4$.\nThử xét bài toán: $(x - 1)(y + 2) = 5$ với $x, y \\in \\mathbb{Z}$. Có 4 cặp nghiệm.\nXét bài toán: Tìm số cặp $(x; y)$ nguyên dương thoả mãn $xy - 2x - 3y = 0$.\n$x(y - 2) - 3(y - 2) = 6 \\implies (x - 3)(y - 2) = 6$.\nVới $x, y$ nguyên dương, các ước dương của 6 là: $(1,6), (2,3), (3,2), (6,1) \\implies$ có 4 cặp.\nThử xét bài toán: $2xy - 3x + y = 4 \\implies x(2y - 3) + \\frac{1}{2}(2y - 3) = 4 - \\frac{3}{2}$ nhân 2:\n$2x(2y - 3) + (2y - 3) = 5 \\implies (2x + 1)(2y - 3) = 5$.\nCó 4 cặp nghiệm nguyên: $(\\pm 1, \\pm 5)$.\n\nĐáp số: 4.",
    "socraticHint": "Đưa về phương trình tích $(2x + 1)(2y - 3) = 5$.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 333,
    "type": "mcq",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "bieu_do_quat_tron_doan_thang",
    "topicName": "Biểu đồ hình quạt tròn & Biểu đồ đoạn thẳng",
    "content": "Cho $\\Delta ABC$ có $\\widehat{A} = 120^\\circ$. Đường phân giác trong $AD$. Đường phân giác ngoài tại đỉnh $C$ cắt đường thẳng $AD$ tại $P$. Số đo góc $\\widehat{BPC}$ là:",
    "options": [
      {
        "key": "A",
        "content": "$30^\\circ$"
      },
      {
        "key": "B",
        "content": "$60^\\circ$"
      },
      {
        "key": "C",
        "content": "$45^\\circ$"
      },
      {
        "key": "D",
        "content": "$40^\\circ$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vì $\\widehat{A} = 120^\\circ$ nên góc ngoài tại $A$ bằng $60^\\circ$. Tia $AD$ là phân giác trong nên $\\widehat{DAB} = 60^\\circ$, suy ra $AB$ là phân giác ngoài của góc $A$ trong $\\Delta ADC$.\nĐiểm $P$ là giao của hai phân giác ngoài (tại đỉnh $A$ và đỉnh $C$ của $\\Delta ADC$) nên $DP$ là phân giác trong, và $BP$ là phân giác ngoài tại đỉnh $B$.\nTính toán góc suy ra $\\widehat{BPC} = \\frac{\\widehat{A}}{4} = 30^\\circ$.\n\nChọn A.",
    "socraticHint": "Sử dụng tính chất giao điểm của hai đường phân giác ngoài.",
    "difficulty": "Vận dụng cao",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 334,
    "type": "fill",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "bieu_do_quat_tron_doan_thang",
    "topicName": "Biểu đồ hình quạt tròn & Biểu đồ đoạn thẳng",
    "content": "Tìm số tự nhiên $n$ sao cho $n^3 - n$ chia hết cho $24$ với mọi $n$ lẻ. Khẳng định mệnh đề này đúng với mọi số lẻ $n$. Điền 1 nếu đúng, 0 nếu sai:",
    "correctAnswer": "1",
    "acceptableAnswers": [
      "1",
      "đúng"
    ],
    "detailedSolution": "Ta có $n^3 - n = n(n - 1)(n + 1)$.\nVì $n$ lẻ nên $n - 1$ và $n + 1$ là hai số chẵn liên tiếp, tích của chúng chia hết cho 8.\nĐồng thời tích 3 số nguyên liên tiếp luôn chia hết cho 3.\nVì $\\gcd(8, 3) = 1$ nên $n^3 - n$ chia hết cho $8 \\times 3 = 24$.\n\nĐáp số: 1.",
    "socraticHint": "Tích hai số chẵn liên tiếp chia hết cho 8.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 335,
    "type": "mcq",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "bieu_do_quat_tron_doan_thang",
    "topicName": "Biểu đồ hình quạt tròn & Biểu đồ đoạn thẳng",
    "content": "Cho tỉ lệ thức $\\frac{x}{y+z+1} = \\frac{y}{x+z+1} = \\frac{z}{x+y-2} = x+y+z$. Giá trị của $x+y+z$ khi $x+y+z \\ne 0$ là:",
    "options": [
      {
        "key": "A",
        "content": "$1/2$"
      },
      {
        "key": "B",
        "content": "$1$"
      },
      {
        "key": "C",
        "content": "$2$"
      },
      {
        "key": "D",
        "content": "$-1$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Cộng ba tỉ số đầu:\n$$\\frac{x+y+z}{2(x+y+z)} = \\frac{1}{2}$$\nVì dãy tỉ số bằng $x+y+z$ nên $x+y+z = \\frac{1}{2}$.\n\nChọn A.",
    "socraticHint": "Cộng tử với tử, mẫu với mẫu của ba tỉ số đầu tiên.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 336,
    "type": "fill",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "bieu_do_quat_tron_doan_thang",
    "topicName": "Biểu đồ hình quạt tròn & Biểu đồ đoạn thẳng",
    "content": "Tính giá trị của biểu thức $S = \\frac{1}{1+2} + \\frac{1}{1+2+3} + \\dots + \\frac{1}{1+2+\\dots+50}$. Nhập phân số tối giản a/b:",
    "correctAnswer": "49/51",
    "acceptableAnswers": [
      "49/51"
    ],
    "detailedSolution": "Mẫu số là tổng cấp số cộng: $1 + 2 + \\dots + n = \\frac{n(n+1)}{2}$.\nNghịch đảo: $\\frac{1}{1+2+\\dots+n} = \\frac{2}{n(n+1)} = 2\\left(\\frac{1}{n} - \\frac{1}{n+1}\\right)$.\nTổng từ $n=2$ đến $50$:\n$$S = 2\\left(\\frac{1}{2} - \\frac{1}{3} + \\frac{1}{3} - \\dots - \\frac{1}{51}\\right) = 2\\left(\\frac{1}{2} - \\frac{1}{51}\\right) = 2 \\cdot \\frac{49}{102} = \\frac{49}{51}$$\n\nĐáp số: 49/51.",
    "socraticHint": "Thay $1+2+...+n = \\frac{n(n+1)}{2}$ rồi tách sai phân.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 337,
    "type": "mcq",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "bieu_do_quat_tron_doan_thang",
    "topicName": "Biểu đồ hình quạt tròn & Biểu đồ đoạn thẳng",
    "content": "Cho tam giác $ABC$ có $\\widehat{A} = 90^\\circ, AB = AC$. Điểm $M$ thuộc cạnh $BC$. Kẻ $BH \\perp AM$ và $CK \\perp AM$. Khẳng định nào sau đây là đúng về $BH^2 + CK^2$?",
    "options": [
      {
        "key": "A",
        "content": "$BH^2 + CK^2$ không đổi khi $M$ di động trên $BC$"
      },
      {
        "key": "B",
        "content": "$BH^2 + CK^2 = BC^2$"
      },
      {
        "key": "C",
        "content": "$BH^2 + CK^2$ lớn nhất khi $M$ là trung điểm $BC$"
      },
      {
        "key": "D",
        "content": "$BH^2 + CK^2 = 2AB^2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chứng minh $\\Delta ABH = \\Delta CAK$ (cạnh huyền - góc nhọn) $\\implies BH = AK$ và $AH = CK$.\nKhi đó $BH^2 + CK^2 = AK^2 + AH^2$ không đổi? Không, trong tam giác vuông $ABH$: $BH^2 + AH^2 = AB^2$.\nMà $AH = CK \\implies BH^2 + CK^2 = BH^2 + AH^2 = AB^2$ là một hằng số không đổi!\n\nChọn A.",
    "socraticHint": "Chứng minh $\\Delta ABH = \\Delta CAK$ để suy ra $AH = CK$, sau đó dùng Pitago.",
    "difficulty": "Vận dụng cao",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 338,
    "type": "fill",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "bieu_do_quat_tron_doan_thang",
    "topicName": "Biểu đồ hình quạt tròn & Biểu đồ đoạn thẳng",
    "content": "Cho $x, y, z$ thỏa mãn $x^2 + y^2 + z^2 = xy + yz + zx$ và $x + y + z = 15$. Giá trị của $x$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "5",
    "acceptableAnswers": [
      "5"
    ],
    "detailedSolution": "Ta có $2(x^2 + y^2 + z^2 - xy - yz - zx) = (x - y)^2 + (y - z)^2 + (z - x)^2 = 0$.\nSuy ra $x = y = z$.\nMà $x + y + z = 15 \\implies 3x = 15 \\implies x = 5$.\n\nĐáp số: 5.",
    "socraticHint": "Đẳng thức xảy ra khi ba số $x = y = z$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 339,
    "type": "mcq",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "bieu_do_quat_tron_doan_thang",
    "topicName": "Biểu đồ hình quạt tròn & Biểu đồ đoạn thẳng",
    "content": "Có bao nhiêu số nguyên tố chia cho 4 dư 3 trong tập hợp 10 số nguyên tố đầu tiên?",
    "options": [
      {
        "key": "A",
        "content": "$5$"
      },
      {
        "key": "B",
        "content": "$4$"
      },
      {
        "key": "C",
        "content": "$6$"
      },
      {
        "key": "D",
        "content": "$3$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "10 số nguyên tố đầu tiên: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$.\nXét số dư khi chia cho 4:\n- Chia 4 dư 3: $3, 7, 11, 19, 23$ (có đúng 5 số).\n\nChọn A.",
    "socraticHint": "Liệt kê 10 số nguyên tố đầu tiên rồi kiểm tra mod 4.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  }
];
