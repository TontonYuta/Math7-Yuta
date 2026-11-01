import { Question } from '../../../../types/exam';

export const HSG_HOA_LOC_THANH_HOA_QUESTIONS_2: Question[] = [
  {
    "id": 300,
    "type": "fill",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Tìm số tự nhiên $n$ sao cho $2^n + 1$ chia hết cho $3$. Biết $n$ là số tự nhiên lẻ có hai chữ số nhỏ nhất. Giá trị của $n$ là bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "11",
    "acceptableAnswers": [
      "11"
    ],
    "detailedSolution": "Ta có $2 \\equiv -1 \\pmod 3 \\implies 2^n \\equiv (-1)^n \\pmod 3$.\nĐể $2^n + 1 \\equiv 0 \\pmod 3$ thì $(-1)^n + 1 = 0 \\implies n$ phải là số lẻ.\nSố tự nhiên lẻ có hai chữ số nhỏ nhất là $11$.\n\nĐáp số: 11.",
    "socraticHint": "Số dư của $2^n$ khi chia cho 3 phụ thuộc vào tính chẵn lẻ của $n$.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 301,
    "type": "mcq",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Cho tam giác $ABC$ vuông tại $A$. Đường phân giác $BD$ ($D \\in AC$). Kẻ $DE \\perp BC$ ($E \\in BC$). Khẳng định nào sau đây là SAI?",
    "options": [
      {
        "key": "A",
        "content": "$AD > DE$"
      },
      {
        "key": "B",
        "content": "$AD = DE$"
      },
      {
        "key": "C",
        "content": "$BA = BE$"
      },
      {
        "key": "D",
        "content": "$BD$ là đường trung trực của đoạn thẳng $AE$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Hai tam giác vuông $\\Delta ABD = \\Delta EBD$ (cạnh huyền - góc nhọn) nên $AD = DE$ và $BA = BE$. Khẳng định $AD > DE$ là sai.\n\nChọn A.",
    "socraticHint": "Điểm trên tia phân giác cách đều hai cạnh của góc.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 302,
    "type": "fill",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Tìm giá trị của $x$ thỏa mãn đẳng thức: $\\frac{x + 1}{65} + \\frac{x + 3}{63} = \\frac{x + 5}{61} + \\frac{x + 7}{59}$. (Điền số nguyên âm):",
    "correctAnswer": "-66",
    "acceptableAnswers": [
      "-66"
    ],
    "detailedSolution": "Cộng thêm 1 vào mỗi phân số ở cả hai vế:\n$$\\frac{x + 66}{65} + \\frac{x + 66}{63} = \\frac{x + 66}{61} + \\frac{x + 66}{59}$$\n$$(x + 66)\\left(\\frac{1}{65} + \\frac{1}{63} - \\frac{1}{61} - \\frac{1}{59}\\right) = 0 \\implies x + 66 = 0 \\implies x = -66$$\n\nĐáp số: -66.",
    "socraticHint": "Nhận thấy $1 + 65 = 3 + 63 = 5 + 61 = 7 + 59 = 66$.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 303,
    "type": "mcq",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Cho $a, b, c$ là ba số thỏa mãn $ab = 1, bc = 2, ca = 8$ và $a, b, c > 0$. Giá trị của biểu thức $a + b + c$ là:",
    "options": [
      {
        "key": "A",
        "content": "$\\frac{13}{2}$"
      },
      {
        "key": "B",
        "content": "$7$"
      },
      {
        "key": "C",
        "content": "$6$"
      },
      {
        "key": "D",
        "content": "$\\frac{15}{2}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Nhân ba vế: $(abc)^2 = 1 \\times 2 \\times 8 = 16 \\implies abc = 4$.\nSuy ra:\n$c = \\frac{abc}{ab} = \\frac{4}{1} = 4$.\n$a = \\frac{abc}{bc} = \\frac{4}{2} = 2$.\n$b = \\frac{abc}{ca} = \\frac{4}{8} = \\frac{1}{2}$.\nTổng $a + b + c = 2 + \\frac{1}{2} + 4 = \\frac{13}{2}$.\n\nChọn A.",
    "socraticHint": "Nhân cả ba đẳng thức lại để tìm tích $abc$.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 304,
    "type": "fill",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Tính tổng tất cả các nghiệm nguyên của phương trình: $(x^2 - 4)(x^2 - 9) = 0$. (Điền số nguyên):",
    "correctAnswer": "0",
    "acceptableAnswers": [
      "0"
    ],
    "detailedSolution": "Các nghiệm là $x = \\pm 2, x = \\pm 3$.\nTổng các nghiệm là $2 + (-2) + 3 + (-3) = 0$.\n\nĐáp số: 0.",
    "socraticHint": "Các nghiệm đối xứng từng đôi một qua gốc toạ độ.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 305,
    "type": "mcq",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Cho $\\Delta ABC$ có trung tuyến $AM$. Gọi $G$ là trọng tâm. Khẳng định nào sau đây luôn đúng?",
    "options": [
      {
        "key": "A",
        "content": "$S_{\\Delta ABM} = S_{\\Delta ACM}$"
      },
      {
        "key": "B",
        "content": "$AB = AC$"
      },
      {
        "key": "C",
        "content": "$AM \\perp BC$"
      },
      {
        "key": "D",
        "content": "$AM = \\frac{1}{2} BC$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Hai tam giác $ABM$ và $ACM$ có chung đường cao hạ từ $A$ xuống $BC$ và hai đáy bằng nhau ($BM = MC$) nên diện tích của chúng luôn bằng nhau.\n\nChọn A.",
    "socraticHint": "Đường trung tuyến luôn chia tam giác thành hai phần có diện tích bằng nhau.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 306,
    "type": "fill",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Tìm số tự nhiên $x$ biết $5^x + 5^{x+2} = 650$. (Điền số nguyên):",
    "correctAnswer": "2",
    "acceptableAnswers": [
      "2"
    ],
    "detailedSolution": "Đặt nhân tử chung: $5^x(1 + 5^2) = 650 \\implies 5^x \\cdot 26 = 650 \\implies 5^x = 25 = 5^2 \\implies x = 2$.\n\nĐáp số: 2.",
    "socraticHint": "Đặt $5^x$ ra ngoài: $5^x(1 + 25) = 650$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 307,
    "type": "mcq",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Cho đa thức $P(x) = (x - 1)(x - 2)(x - 3) + 2024$. Số dư khi chia $P(x)$ cho $x - 2$ là:",
    "options": [
      {
        "key": "A",
        "content": "$2024$"
      },
      {
        "key": "B",
        "content": "$0$"
      },
      {
        "key": "C",
        "content": "$-2024$"
      },
      {
        "key": "D",
        "content": "$2$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Theo định lý Bézout, số dư khi chia $P(x)$ cho $x - 2$ chính là $P(2)$.\nTa có $P(2) = (2 - 1)(2 - 2)(2 - 3) + 2024 = 0 + 2024 = 2024$.\n\nChọn A.",
    "socraticHint": "Định lý Bézout: số dư khi chia cho $x - a$ là $P(a)$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 308,
    "type": "fill",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Cho góc bẹt $\\widehat{xOy}$. Trên cùng một nửa mặt phẳng bờ $xy$, vẽ hai tia $Oz, Ot$ sao cho $\\widehat{xOz} = 40^\\circ$ và $\\widehat{yOt} = 60^\\circ$. Số đo của góc $\\widehat{zOt}$ bằng bao nhiêu độ? (Điền số nguyên):",
    "correctAnswer": "80",
    "acceptableAnswers": [
      "80",
      "80 độ"
    ],
    "detailedSolution": "Vì góc $\\widehat{xOy}$ là góc bẹt ($180^\\circ$) và hai tia $Oz, Ot$ nằm giữa hai tia $Ox, Oy$:\n$$\\widehat{zOt} = 180^\\circ - (\\widehat{xOz} + \\widehat{yOt}) = 180^\\circ - (40^\\circ + 60^\\circ) = 80^\\circ$$\n\nĐáp số: 80.",
    "socraticHint": "Lấy $180^\\circ$ trừ đi tổng hai góc hai bên.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 309,
    "type": "mcq",
    "chapterId": "chuong_4_tam_giac_bang_nhau",
    "chapterName": "Chương 4: Tam giác bằng nhau",
    "topicId": "tam_giac_can_duong_trung_truc",
    "topicName": "Tam giác cân & Đường trung trực của đoạn thẳng",
    "content": "Cho $\\frac{x}{a} = \\frac{y}{b} = \\frac{z}{c}$. Biểu thức nào sau đây bằng với $\\frac{x^2 + y^2 + z^2}{a^2 + b^2 + c^2}$?",
    "options": [
      {
        "key": "A",
        "content": "$\\left(\\frac{x + y + z}{a + b + c}\\right)^2$"
      },
      {
        "key": "B",
        "content": "$\\frac{x + y + z}{a + b + c}$"
      },
      {
        "key": "C",
        "content": "$\\left(\\frac{x + y + z}{a + b + c}\\right)^3$"
      },
      {
        "key": "D",
        "content": "$\\frac{xyz}{abc}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Đặt $\\frac{x}{a} = \\frac{y}{b} = \\frac{z}{c} = k$.\nKhi đó $\\frac{x^2 + y^2 + z^2}{a^2 + b^2 + c^2} = \\frac{k^2(a^2 + b^2 + c^2)}{a^2 + b^2 + c^2} = k^2$.\nMà $\\frac{x+y+z}{a+b+c} = k \\implies \\left(\\frac{x+y+z}{a+b+c}\\right)^2 = k^2$.\n\nChọn A.",
    "socraticHint": "Cả hai biểu thức đều có giá trị bằng $k^2$.",
    "difficulty": "Vận dụng",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  }
];
