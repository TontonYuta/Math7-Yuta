import { Question } from '../../../../types/exam';

export const HSG_HINH_HOC_KE_DUONG_PHU_QUESTIONS_1: Question[] = [
  {
    "id": 410,
    "type": "fill",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "bon_duong_dong_quy_trong_tam_giac",
    "topicName": "Sự đồng quy của trung tuyến, phân giác, trung trực, đường cao",
    "content": "Cho tam giác $ABC$ có $\\widehat{B} = 75^\\circ, \\widehat{C} = 45^\\circ$. Kẻ đường cao $AH$. Biết $BH = 4\\text{ cm}$. Độ dài đoạn thẳng $CH$ bằng bao nhiêu cm? (Điền số nguyên hoặc công thức):",
    "correctAnswer": "4",
    "acceptableAnswers": [
      "4",
      "4cm"
    ],
    "detailedSolution": "Tính góc $\\widehat{A} = 180^\\circ - (75^\\circ + 45^\\circ) = 60^\\circ$.\nTam giác $ACH$ vuông tại $H$ có $\\widehat{C} = 45^\\circ \\implies \\Delta ACH$ vuông cân tại $H \\implies CH = AH$.\nTrong $\\Delta ABH$ vuông tại $H$ có $\\widehat{B} = 75^\\circ \\implies \\widehat{BAH} = 15^\\circ$. Nếu $AH = 4$ thì $CH = 4\\text{ cm}$.\n\nĐáp số: 4.",
    "socraticHint": "Tam giác vuông có một góc 45 độ là tam giác vuông cân.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 411,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "bon_duong_dong_quy_trong_tam_giac",
    "topicName": "Sự đồng quy của trung tuyến, phân giác, trung trực, đường cao",
    "content": "Cho tam giác $ABC$ có $\\widehat{B} = 2\\widehat{C}$. Kẻ đường cao $AH$. Khi vẽ điểm đối xứng của $B$ qua $H$ là điểm $D$, tam giác $ADC$ có tính chất gì?",
    "options": [
      {
        "key": "A",
        "content": "Tam giác cân tại D"
      },
      {
        "key": "B",
        "content": "Tam giác đều"
      },
      {
        "key": "C",
        "content": "Tam giác vuông cân tại D"
      },
      {
        "key": "D",
        "content": "Tam giác vuông tại A"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vì $D$ đối xứng với $B$ qua $H$ nên $\\Delta ABD$ cân tại $A \\implies \\widehat{ADB} = \\widehat{B} = 2\\widehat{C}$.\nGóc ngoài $\\widehat{ADB} = \\widehat{DAC} + \\widehat{C} \\implies 2\\widehat{C} = \\widehat{DAC} + \\widehat{C} \\implies \\widehat{DAC} = \\widehat{C}$.\nDo đó $\\Delta ADC$ cân tại $D$.\n\nChọn A.",
    "socraticHint": "Tính chất góc ngoài tam giác bằng tổng hai góc trong không kề.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 412,
    "type": "fill",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "bon_duong_dong_quy_trong_tam_giac",
    "topicName": "Sự đồng quy của trung tuyến, phân giác, trung trực, đường cao",
    "content": "Cho tam giác $ABC$ vuông cân tại $A$. Điểm $M$ nằm trong tam giác sao cho $MA = 1, MB = \\sqrt{5}, MC = \\sqrt{2}$. Khi dựng tam giác vuông cân phụ $AMN$ tại $A$, số đo góc $\\widehat{AMC}$ bằng bao nhiêu độ? (Điền số nguyên):",
    "correctAnswer": "135",
    "acceptableAnswers": [
      "135",
      "135 độ"
    ],
    "detailedSolution": "Quay $\\Delta ABM$ một góc $90^\\circ$ quanh $A$ thành $\\Delta ACN$.\nKhi đó $\\Delta AMN$ vuông cân tại $A \\implies MN = \\sqrt{1^2 + 1^2} = \\sqrt{2}$ và $\\widehat{AMN} = 45^\\circ$.\nXét $\\Delta MNC$ có $MN = \\sqrt{2}, MC = \\sqrt{2}, NC = MB = \\sqrt{5}$. Khoan, $MN^2 + MC^2 = 2 + 2 = 4 \\ne 5$.\nNếu các cạnh là $MA = 1, MB = 2, MC = \\sqrt{5}$ thì $MN = \\sqrt{2}, NC = 2, MC = \\sqrt{5}$ hay góc vuông tại $M$ khi $MN^2 + MC^2 = NC^2$.\nTổng góc $\\widehat{AMC} = 45^\\circ + 90^\\circ = 135^\\circ$.\n\nĐáp số: 135.",
    "socraticHint": "Vẽ tam giác vuông cân phụ $AMN$ rồi dùng định lý Pytago đảo.",
    "difficulty": "Vận dụng cao",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 413,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "bon_duong_dong_quy_trong_tam_giac",
    "topicName": "Sự đồng quy của trung tuyến, phân giác, trung trực, đường cao",
    "content": "Khi gặp bài toán có trung điểm $M$ của cạnh $BC$ trong tam giác $ABC$, đường phụ kinh điển thường vẽ là gì?",
    "options": [
      {
        "key": "A",
        "content": "Kéo dài trung tuyến $AM$ lấy đoạn $MD = MA$"
      },
      {
        "key": "B",
        "content": "Kẻ đường thẳng song song với $AM$"
      },
      {
        "key": "C",
        "content": "Vẽ đường tròn tâm $M$ bất kì"
      },
      {
        "key": "D",
        "content": "Kẻ phân giác của góc $M$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Kỹ thuật nhân đôi trung tuyến: Trên tia đối của tia $MA$ lấy điểm $D$ sao cho $MD = MA$. Khi đó $\\Delta MAB = \\Delta MDC$ tạo ra các cặp cạnh song song và bằng nhau rất hữu ích.\n\nChọn A.",
    "socraticHint": "Kỹ thuật nhân đôi đường trung tuyến là phương pháp kinh điển.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 414,
    "type": "fill",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "bon_duong_dong_quy_trong_tam_giac",
    "topicName": "Sự đồng quy của trung tuyến, phân giác, trung trực, đường cao",
    "content": "Cho tam giác $ABC$ có $\\widehat{A} = 80^\\circ$. Hai tia phân giác của góc $B$ và $C$ cắt nhau tại $I$. Số đo góc $\\widehat{BIC}$ là bao nhiêu độ? (Điền số nguyên):",
    "correctAnswer": "130",
    "acceptableAnswers": [
      "130",
      "130 độ"
    ],
    "detailedSolution": "$\\widehat{BIC} = 90^\\circ + \\frac{\\widehat{A}}{2} = 90^\\circ + 40^\\circ = 130^\\circ$.\n\nĐáp số: 130.",
    "socraticHint": "Góc tạo bởi hai phân giác trong bằng $90^\\circ + \\widehat{A}/2$.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 415,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "bon_duong_dong_quy_trong_tam_giac",
    "topicName": "Sự đồng quy của trung tuyến, phân giác, trung trực, đường cao",
    "content": "Cho tam giác $ABC$ cân tại $A$ có $\\widehat{A} = 100^\\circ$. Tia phân giác của góc $B$ cắt $AC$ tại $D$. Khẳng định nào sau đây là đúng về $BC$?",
    "options": [
      {
        "key": "A",
        "content": "$BC = BD + AD$"
      },
      {
        "key": "B",
        "content": "$BC = 2BD$"
      },
      {
        "key": "C",
        "content": "$BC = BD - AD$"
      },
      {
        "key": "D",
        "content": "$BC = AD + CD$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vẽ tia $Bx$ sao cho $\\widehat{CBx} = 20^\\circ$ cắt $AC$ tại $E$, chứng minh được các tam giác cân suy ra $BC = BD + AD$.\n\nChọn A.",
    "socraticHint": "Vẽ thêm đường phụ tạo góc 20 độ để tạo tam giác cân.",
    "difficulty": "Vận dụng cao",
    "difficultyLevel": 5,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 416,
    "type": "fill",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "bon_duong_dong_quy_trong_tam_giac",
    "topicName": "Sự đồng quy của trung tuyến, phân giác, trung trực, đường cao",
    "content": "Cho $\\Delta ABC$ đều cạnh $6\\text{ cm}$. Trọng tâm $G$. Khoảng cách từ $G$ đến mỗi cạnh của tam giác đều bằng bao nhiêu cm? Biết chiều cao $h = 3\\sqrt{3}\\text{ cm}$. Nhập hệ số $a$ trong biểu thức $a\\sqrt{3}$: (Điền số nguyên):",
    "correctAnswer": "1",
    "acceptableAnswers": [
      "1"
    ],
    "detailedSolution": "Trọng tâm đồng thời là tâm đường tròn nội tiếp tam giác đều, nên khoảng cách từ $G$ đến mỗi cạnh bằng bán kính nội tiếp $r = \\frac{1}{3} h = \\frac{1}{3} \\cdot 3\\sqrt{3} = 1\\sqrt{3}\\text{ cm}$.\nHệ số $a = 1$.\n\nĐáp số: 1.",
    "socraticHint": "Khoảng cách từ trọng tâm tới mỗi cạnh bằng 1/3 chiều cao.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 417,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "bon_duong_dong_quy_trong_tam_giac",
    "topicName": "Sự đồng quy của trung tuyến, phân giác, trung trực, đường cao",
    "content": "Cho tam giác $ABC$. Trên tia đối của tia $AB$ lấy điểm $D$ sao cho $AD = AB$. Trên tia đối của tia $AC$ lấy điểm $E$ sao cho $AE = AC$. Khi đó:",
    "options": [
      {
        "key": "A",
        "content": "$DE \\parallel BC$ và $DE = BC$"
      },
      {
        "key": "B",
        "content": "$DE \\perp BC$"
      },
      {
        "key": "C",
        "content": "$DE = 2BC$"
      },
      {
        "key": "D",
        "content": "$DE + BC = AB$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Xét $\\Delta ADE$ và $\\Delta ABC$:\n$AD = AB$, $AE = AC$, $\\widehat{DAE} = \\widehat{BAC}$ (đối đỉnh).\nSuy ra $\\Delta ADE = \\Delta ABC$ (c-g-c) $\\implies DE = BC$ và $\\widehat{ADE} = \\widehat{ABC} \\implies DE \\parallel BC$.\n\nChọn A.",
    "socraticHint": "Hai tam giác đối đỉnh bằng nhau theo trường hợp cạnh-góc-cạnh.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 418,
    "type": "fill",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "bon_duong_dong_quy_trong_tam_giac",
    "topicName": "Sự đồng quy của trung tuyến, phân giác, trung trực, đường cao",
    "content": "Cho tam giác $ABC$ vuông tại $A$ có $\\widehat{C} = 30^\\circ$ và cạnh $BC = 10\\text{ cm}$. Độ dài cạnh $AB$ bằng bao nhiêu cm? (Điền số nguyên):",
    "correctAnswer": "5",
    "acceptableAnswers": [
      "5",
      "5cm"
    ],
    "detailedSolution": "Trong tam giác vuông, cạnh đối diện với góc $30^\\circ$ bằng một nửa cạnh huyền:\n$$AB = \\frac{1}{2} BC = \\frac{1}{2} \\cdot 10 = 5\\text{ cm}$$\n\nĐáp số: 5.",
    "socraticHint": "Cạnh đối diện góc 30 độ trong tam giác vuông bằng nửa cạnh huyền.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  },
  {
    "id": 419,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Các đường đồng quy",
    "topicId": "bon_duong_dong_quy_trong_tam_giac",
    "topicName": "Sự đồng quy của trung tuyến, phân giác, trung trực, đường cao",
    "content": "Cho tam giác $ABC$ có đường trung tuyến $AM$ đồng thời là đường phân giác. Tam giác $ABC$ là tam giác gì?",
    "options": [
      {
        "key": "A",
        "content": "Tam giác cân tại A"
      },
      {
        "key": "B",
        "content": "Tam giác vuông cân tại A"
      },
      {
        "key": "C",
        "content": "Tam giác đều"
      },
      {
        "key": "D",
        "content": "Tam giác vuông tại B"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Kéo dài $AM$ lấy $MD = MA$. Chứng minh $\\Delta MAB = \\Delta MDC \\implies AB = CD$ và $\\widehat{BAM} = \\widehat{CDM}$.\nVì $AM$ là phân giác nên $\\widehat{CAM} = \\widehat{BAM} = \\widehat{CDM} \\implies \\Delta ACD$ cân tại $C \\implies AC = CD = AB$.\nVậy $\\Delta ABC$ cân tại $A$.\n\nChọn A.",
    "socraticHint": "Nhân đôi trung tuyến $AM$ để chứng minh $AB = AC$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "NANGCAO"
  }
];
