import { Question } from '../../../../types/exam';

export const CHUONG_2_SO_THUC_ARITHMETIC_QUESTIONS: Question[] = [
  {
    "id": 46,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "so_vo_ti_can_bac_hai",
    "topicName": "Số vô tỉ & Căn bậc hai số học",
    "content": "Căn bậc hai số học của $144$ là:",
    "options": [
      {
        "key": "A",
        "content": "$12$"
      },
      {
        "key": "B",
        "content": "$-12$"
      },
      {
        "key": "C",
        "content": "$\\pm 12$"
      },
      {
        "key": "D",
        "content": "$72$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Căn bậc hai số học của số không âm $a$ là số không âm $x$ sao cho $x^2 = a$. $\\sqrt{144} = 12$.\n\nChọn A.",
    "socraticHint": "Căn bậc hai số học luôn không âm.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  },
  {
    "id": 47,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "so_vo_ti_can_bac_hai",
    "topicName": "Số vô tỉ & Căn bậc hai số học",
    "content": "Trong các số sau, số nào là số vô tỉ?",
    "options": [
      {
        "key": "A",
        "content": "$\\sqrt{4}$"
      },
      {
        "key": "B",
        "content": "$\\sqrt{5}$"
      },
      {
        "key": "C",
        "content": "$\\frac{3}{7}$"
      },
      {
        "key": "D",
        "content": "$0{,}(3)$"
      }
    ],
    "correctAnswer": "B",
    "detailedSolution": "$\\sqrt{5} \\approx 2{,}236...$ là số thập phân vô hạn không tuần hoàn nên là số vô tỉ.\n\nChọn B.",
    "socraticHint": "Số vô tỉ viết được dưới dạng thập phân vô hạn không tuần hoàn.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  },
  {
    "id": 48,
    "type": "fill",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Tính giá trị biểu thức: $B = |-\\sqrt{25}| + |3 - 7|$. (Điền số nguyên):",
    "correctAnswer": "9",
    "acceptableAnswers": [
      "9",
      "9.0"
    ],
    "detailedSolution": "$\\sqrt{25} = 5 \\implies |-5| = 5$. $|3 - 7| = |-4| = 4$. Do đó $B = 5 + 4 = 9$.\n\nĐáp số: 9.",
    "socraticHint": "Tính căn trước rồi lấy trị tuyệt đối.",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  },
  {
    "id": 49,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Tất cả các giá trị của $x$ thỏa mãn $|x - 1{,}5| = 2$ là:",
    "options": [
      {
        "key": "A",
        "content": "$x = 3{,}5$"
      },
      {
        "key": "B",
        "content": "$x = -0{,}5$"
      },
      {
        "key": "C",
        "content": "$x = 3{,}5$ hoặc $x = -0{,}5$"
      },
      {
        "key": "D",
        "content": "$x = 3{,}5$ hoặc $x = 0{,}5$"
      }
    ],
    "correctAnswer": "C",
    "detailedSolution": "TH1: $x - 1{,}5 = 2 \\implies x = 3{,}5$. TH2: $x - 1{,}5 = -2 \\implies x = -0{,}5$.\n\nChọn C.",
    "socraticHint": "$|A| = m$ ($m > 0$) thì $A = m$ hoặc $A = -m$.",
    "difficulty": "Vận dụng",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  },
  {
    "id": 50,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "lam_tron_va_uoc_luong",
    "topicName": "Làm tròn số & Ước lượng kết quả",
    "content": "Làm tròn số $3{,}14159$ đến hàng phần trăm được kết quả là:",
    "options": [
      {
        "key": "A",
        "content": "$3{,}14$"
      },
      {
        "key": "B",
        "content": "$3{,}15$"
      },
      {
        "key": "C",
        "content": "$3{,}1$"
      },
      {
        "key": "D",
        "content": "$3{,}142$"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Chữ số ngay sau hàng phần trăm là $1 < 5$, ta giữ nguyên: $3{,}14159 \\approx 3{,}14$.\n\nChọn A.",
    "socraticHint": "Chữ số sau hàng phần trăm nhỏ hơn 5 thì giữ nguyên.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  },
  {
    "id": 51,
    "type": "fill",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "so_vo_ti_can_bac_hai",
    "topicName": "Số vô tỉ & Căn bậc hai số học",
    "content": "Tính giá trị của biểu thức: $\\sqrt{49} - \\sqrt{16} + \\sqrt{0}$. (Điền số nguyên):",
    "correctAnswer": "3",
    "acceptableAnswers": [
      "3",
      "3.0"
    ],
    "detailedSolution": "$\\sqrt{49} = 7, \\sqrt{16} = 4, \\sqrt{0} = 0$. Biểu thức bằng $7 - 4 + 0 = 3$.\n\nĐáp số: 3.",
    "socraticHint": "Khai căn từng số hạng rồi tính toán.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  },
  {
    "id": 52,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "tap_hop_so_thuc",
    "topicName": "Tập hợp số thực & Trục số thực",
    "content": "Tập hợp số thực $\\mathbb{R}$ bao gồm các tập hợp số nào?",
    "options": [
      {
        "key": "A",
        "content": "Số hữu tỉ và số vô tỉ"
      },
      {
        "key": "B",
        "content": "Số tự nhiên và số nguyên"
      },
      {
        "key": "C",
        "content": "Số nguyên và phân số"
      },
      {
        "key": "D",
        "content": "Chỉ gồm các số thập phân"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Tập hợp số thực $\\mathbb{R}$ gồm tập hợp số hữu tỉ $\\mathbb{Q}$ và tập hợp số vô tỉ $\\mathbb{I}$.\n\nChọn A.",
    "socraticHint": "Số thực bao gồm tất cả các số hữu tỉ và vô tỉ.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  },
  {
    "id": 53,
    "type": "fill",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Giá trị của $|-2026|$ bằng bao nhiêu? (Điền số nguyên):",
    "correctAnswer": "2026",
    "acceptableAnswers": [
      "2026"
    ],
    "detailedSolution": "Giá trị tuyệt đối của một số âm là số đối của nó: $|-2026| = 2026$.\n\nĐáp số: 2026.",
    "socraticHint": "Giá trị tuyệt đối luôn không âm.",
    "difficulty": "Nhận biết",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  },
  {
    "id": 54,
    "type": "mcq",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "content": "Số nghiệm thực của phương trình $|x| = -5$ là:",
    "options": [
      {
        "key": "A",
        "content": "$0$"
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
        "content": "Vô số"
      }
    ],
    "correctAnswer": "A",
    "detailedSolution": "Vì $|x| \\ge 0$ với mọi $x \\in \\mathbb{R}$, mà $-5 < 0$ nên phương trình vô nghiệm (có 0 nghiệm).\n\nChọn A.",
    "socraticHint": "Giá trị tuyệt đối có thể nhận giá trị âm không?",
    "difficulty": "Thông hiểu",
    "latexVerified": true,
    "answerVerified": true,
    "track": "PHOTHONG",
    "gameCategory": "arithmetic"
  }
];
