import { Question } from '../../../../types/exam';

export const CHUONG_9_QUAN_HE_TAM_GIAC_WORD_QUESTIONS_1A: Question[] = [
  {
    "id": 186,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ giữa các yếu tố trong một tam giác",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ giữa góc và cạnh đối diện",
    "content": "Trong một tam giác, góc đối diện với cạnh lớn hơn là:",
    "options": [
      {
        "key": "A",
        "content": "Góc lớn hơn"
      },
      {
        "key": "B",
        "content": "Góc nhỏ hơn"
      },
      {
        "key": "C",
        "content": "Góc vuông"
      },
      {
        "key": "D",
        "content": "Góc tù"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Theo định lý trong tam giác: Cạnh đối diện với góc lớn hơn là cạnh lớn hơn, và ngược lại góc đối diện với cạnh lớn hơn là góc lớn hơn.\n\nChọn A.",
    "socraticHint": "Cạnh càng dài thì góc nhìn căng mở ra càng lớn.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 187,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ giữa các yếu tố trong một tam giác",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Quan hệ giữa góc và cạnh đối diện",
    "content": "Cho $\\Delta ABC$ có $AB = 5\\text{ cm}, BC = 7\\text{ cm}, AC = 6\\text{ cm}$. Khẳng định nào sau đây là đúng về các góc của tam giác?",
    "options": [
      {
        "key": "A",
        "content": "$\\widehat{A} > \\widehat{B} > \\widehat{C}$"
      },
      {
        "key": "B",
        "content": "$\\widehat{C} > \\widehat{B} > \\widehat{A}$"
      },
      {
        "key": "C",
        "content": "$\\widehat{A} > \\widehat{C} > \\widehat{B}$"
      },
      {
        "key": "D",
        "content": "$\\widehat{B} > \\widehat{C} > \\widehat{A}$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vì $BC > AC > AB$ ($7 > 6 > 5$) nên các góc đối diện tương ứng thoả mãn $\\widehat{A} > \\widehat{B} > \\widehat{C}$.\n\nChọn A.",
    "socraticHint": "Cạnh $BC$ đối diện góc $A$, $AC$ đối diện góc $B$, $AB$ đối diện góc $C$.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 188,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ giữa các yếu tố trong một tam giác",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Bất đẳng thức tam giác",
    "content": "Bộ ba độ dài đoạn thẳng nào sau đây CÓ THỂ là độ dài ba cạnh của một tam giác?",
    "options": [
      {
        "key": "A",
        "content": "$2\\text{ cm}, 3\\text{ cm}, 6\\text{ cm}$"
      },
      {
        "key": "B",
        "content": "$3\\text{ cm}, 4\\text{ cm}, 5\\text{ cm}$"
      },
      {
        "key": "C",
        "content": "$1\\text{ cm}, 2\\text{ cm}, 3\\text{ cm}$"
      },
      {
        "key": "D",
        "content": "$4\\text{ cm}, 5\\text{ cm}, 10\\text{ cm}$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "Theo bất đẳng thức tam giác, tổng hai cạnh bất kì luôn lớn hơn cạnh còn lại: $3 + 4 = 7 > 5$. Các bộ khác đều có tổng hai cạnh nhỏ hơn hoặc bằng cạnh thứ ba.\n\nChọn B.",
    "socraticHint": "Kiểm tra tổng hai cạnh ngắn nhất có lớn hơn cạnh dài nhất không.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 189,
    "type": "fill",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ giữa các yếu tố trong một tam giác",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Bất đẳng thức tam giác",
    "content": "Một tam giác cân có độ dài hai cạnh là $4\\text{ cm}$ và $9\\text{ cm}$. Độ dài cạnh thứ ba của tam giác đó là bao nhiêu cm? (Điền số nguyên):",
    "correctAnswer": "9",
    "acceptableAnswers": [
      "9",
      "9cm"
    ],
    "detailedSolution": "Nếu cạnh thứ ba là $4\\text{ cm}$ thì $4 + 4 = 8 < 9$ (loại vì vi phạm BĐT tam giác). Vậy cạnh thứ ba phải là $9\\text{ cm}$ ($4 + 9 > 9$ thoả mãn).\n\nĐáp số: 9.",
    "socraticHint": "Tam giác cân có 2 cạnh bằng nhau, thử cả 2 trường hợp 4 và 9.",
    "difficulty": "Thông hiểu",
    "difficultyLevel": 2,
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  },
  {
    "id": 190,
    "type": "mcq",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ giữa các yếu tố trong một tam giác",
    "topicId": "quan_he_goc_canh_bdt_tam_giac",
    "topicName": "Đường vuông góc và đường xiên",
    "content": "Từ một điểm $A$ nằm ngoài đường thẳng $d$, kẻ đường vuông góc $AH$ và đường xiên $AM$ đến $d$. Khẳng định nào sau đây là đúng?",
    "options": [
      {
        "key": "A",
        "content": "$AH < AM$"
      },
      {
        "key": "B",
        "content": "$AH > AM$"
      },
      {
        "key": "C",
        "content": "$AH = AM$"
      },
      {
        "key": "D",
        "content": "$AH \\ge AM$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Trong các đường kẻ từ một điểm nằm ngoài một đường thẳng đến đường thẳng đó, đường vuông góc là đường ngắn nhất: $AH < AM$.\n\nChọn A.",
    "socraticHint": "Cạnh góc vuông luôn nhỏ hơn cạnh huyền.",
    "difficulty": "Nhận biết",
    "difficultyLevel": 1,
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "word_problem"
  }
];
