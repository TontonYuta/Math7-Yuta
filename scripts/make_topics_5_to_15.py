import os
import json

TARGET_DIR = "/home/tontonyuta/Math7-Yuta/src/data/toan7/topics/nangcao_15chuyende"
os.makedirs(TARGET_DIR, exist_ok=True)

modules = []

# ==========================================
# CHUYÊN ĐỀ 5: SỐ NGUYÊN TỐ, HỢP SỐ
# ==========================================
modules.append({
    "filename": "cd05_so_nguyen_to_hop_so.ts",
    "var_name": "HSG_CD05_SO_NGUYEN_TO_HOP_SO",
    "title": "Chủ đề 5: Số nguyên tố, hợp số",
    "chapterId": "chuong_10_hinh_khoi_trong_thuc_tien",
    "chapterName": "Chương 10: Hình khối trong thực tiễn",
    "topicId": "hinh_hop_chu_nhat_lap_phuong",
    "topicName": "Hình hộp chữ nhật & Hình lập phương",
    "questions": [
        {
            "id": 541,
            "type": "fill",
            "content": "Tìm số nguyên tố $p$ duy nhất sao cho $p + 2$ và $p + 4$ cũng là các số nguyên tố:",
            "correctAnswer": "3",
            "acceptableAnswers": ["3"],
            "detailedSolution": "- Với $p = 2$: $p + 2 = 4$ là hợp số (loại).\n- Với $p = 3$: $p + 2 = 5$ và $p + 4 = 7$ đều là số nguyên tố (thỏa mãn).\n- Với $p > 3$: Vì $p$ là số nguyên tố nên $p$ có dạng $3k + 1$ hoặc $3k + 2$ ($k \\in \\mathbb{N}^*$).\n  + Nếu $p = 3k + 1 \\implies p + 2 = 3k + 3 = 3(k + 1) > 3$ và chia hết cho 3 nên là hợp số.\n  + Nếu $p = 3k + 2 \\implies p + 4 = 3k + 6 = 3(k + 2) > 3$ và chia hết cho 3 nên là hợp số.\nVậy $p = 3$ là giá trị duy nhất thỏa mãn.\n\nĐáp số: 3.",
            "socraticHint": "Xét số dư của số nguyên tố $p$ khi chia cho 3.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 542,
            "type": "mcq",
            "content": "Cho $p$ là số nguyên tố lớn hơn 3. Khi chia $p^2$ cho 3, số dư nhận được luôn bằng bao nhiêu?",
            "options": [
                {"key": "A", "content": "1"},
                {"key": "B", "content": "2"},
                {"key": "C", "content": "0"},
                {"key": "D", "content": "Tùy thuộc vào giá trị của p"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Vì $p$ là số nguyên tố lớn hơn 3 nên $p$ không chia hết cho 3.\nDo đó $p = 3k \\pm 1$ ($k \\in \\mathbb{N}^*$).\nBình phương hai vế:\n$$p^2 = (3k \\pm 1)^2 = 9k^2 \\pm 6k + 1 = 3k(3k \\pm 2) + 1$$\nSố hạng đầu chia hết cho 3, do đó $p^2$ chia cho 3 luôn dư 1.\n\nChọn A.",
            "socraticHint": "Số nguyên tố lớn hơn 3 chỉ có thể có dạng $3k + 1$ hoặc $3k - 1$.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 543,
            "type": "fill",
            "content": "Tìm số nguyên tố $p$ sao cho $p + 10$ và $p + 14$ đều là các số nguyên tố:",
            "correctAnswer": "3",
            "acceptableAnswers": ["3"],
            "detailedSolution": "- Với $p = 2$: $p + 10 = 12$ là hợp số (loại).\n- Với $p = 3$: $p + 10 = 13$ và $p + 14 = 17$ đều là số nguyên tố (thỏa mãn).\n- Với $p > 3$: $p$ có dạng $3k + 1$ hoặc $3k + 2$.\n  + Nếu $p = 3k + 1 \\implies p + 14 = 3k + 15 = 3(k + 5) \\ \\vdots \\ 3$ (loại).\n  + Nếu $p = 3k + 2 \\implies p + 10 = 3k + 12 = 3(k + 4) \\ \\vdots \\ 3$ (loại).\nVậy $p = 3$.\n\nĐáp số: 3.",
            "socraticHint": "Xét các khả năng của $p$ khi chia cho 3.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 544,
            "type": "mcq",
            "content": "Hai số $2^n - 1$ và $2^n + 1$ (với số tự nhiên $n > 2$) có thể đồng thời là hai số nguyên tố được không?",
            "options": [
                {"key": "A", "content": "Không thể, vì trong ba số liên tiếp $2^n - 1, 2^n, 2^n + 1$ luôn có một số chia hết cho 3 và lớn hơn 3"},
                {"key": "B", "content": "Có thể, ví dụ với n = 3"},
                {"key": "C", "content": "Có thể, ví dụ với n = 4"},
                {"key": "D", "content": "Luôn đồng thời là số nguyên tố với mọi n lẻ"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Xét ba số tự nhiên liên tiếp: $2^n - 1, 2^n, 2^n + 1$.\nTrong 3 số tự nhiên liên tiếp luôn có đúng một số chia hết cho 3.\nMặt khác, $2^n$ không chia hết cho 3 (vì 2 không chia hết cho 3).\nDo đó một trong hai số $2^n - 1$ hoặc $2^n + 1$ phải chia hết cho 3.\nVới $n > 2$, ta có $2^n - 1 > 2^2 - 1 = 3$, nên số chia hết cho 3 đó luôn lớn hơn 3, tức nó là hợp số.\nVậy hai số trên không thể đồng thời là số nguyên tố.\n\nChọn A.",
            "socraticHint": "Xét tích hoặc tính chất chia hết cho 3 của 3 số tự nhiên liên tiếp.",
            "difficulty": "Vận dụng cao",
            "difficultyLevel": 5,
            "gameCategory": "word_problem",
            "track": "NANGCAO"
        },
        {
            "id": 545,
            "type": "fill",
            "content": "Tìm số nguyên tố $p$ nhỏ hơn 20 sao cho $p + 10$ chia hết cho 5:",
            "correctAnswer": "5",
            "acceptableAnswers": ["5"],
            "detailedSolution": "Để $p + 10$ chia hết cho 5 thì $p$ phải chia hết cho 5.\nMà $p$ là số nguyên tố, nên $p$ chỉ có thể bằng 5.\nKiểm tra: $5 + 10 = 15$ chia hết cho 5 (thỏa mãn).\n\nĐáp số: 5.",
            "socraticHint": "Nếu một tổng $p + 10$ chia hết cho 5 và 10 chia hết cho 5 thì $p$ cũng phải chia hết cho 5.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 546,
            "type": "mcq",
            "content": "Cho $p$ là số nguyên tố và một trong hai số $8p - 1$, $8p + 1$ là số nguyên tố. Khẳng định nào sau đây đúng về số còn lại khi $p > 3$?",
            "options": [
                {"key": "A", "content": "Số còn lại chắc chắn là hợp số vì tích $(8p - 1)8p(8p + 1)$ chia hết cho 3"},
                {"key": "B", "content": "Số còn lại luôn là số nguyên tố"},
                {"key": "C", "content": "Số còn lại luôn là số chính phương"},
                {"key": "D", "content": "Không thể xác định được"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Xét ba số liên tiếp: $8p - 1, 8p, 8p + 1$.\nTrong 3 số này luôn có một số chia hết cho 3.\nVì $p$ là số nguyên tố lớn hơn 3 nên $8p$ không chia hết cho 3.\nDo đó một trong hai số $8p - 1$ hoặc $8p + 1$ phải chia hết cho 3.\nVì $p > 3$ nên cả hai số đều lớn hơn 3, do đó số chia hết cho 3 chắc chắn là hợp số.\n\nChọn A.",
            "socraticHint": "Áp dụng định lý về ba số nguyên liên tiếp với bộ ba $8p-1, 8p, 8p+1$.",
            "difficulty": "Vận dụng cao",
            "difficultyLevel": 5,
            "gameCategory": "word_problem",
            "track": "NANGCAO"
        }
    ]
})

# ==========================================
# CHUYÊN ĐỀ 6: SỐ CHÍNH PHƯƠNG
# ==========================================
modules.append({
    "filename": "cd06_so_chinh_phuong.ts",
    "var_name": "HSG_CD06_SO_CHINH_PHUONG",
    "title": "Chủ đề 6: Các bài toán về số chính phương",
    "chapterId": "chuong_10_hinh_khoi_trong_thuc_tien",
    "chapterName": "Chương 10: Hình khối trong thực tiễn",
    "topicId": "hinh_lang_tru_dung",
    "topicName": "Hình lăng trụ đứng tam giác & tứ giác",
    "questions": [
        {
            "id": 551,
            "type": "mcq",
            "content": "Một số chính phương khi chia cho 3 có thể nhận những số dư nào?",
            "options": [
                {"key": "A", "content": "Chỉ có thể dư 0 hoặc 1"},
                {"key": "B", "content": "Chỉ có thể dư 1 hoặc 2"},
                {"key": "C", "content": "Có thể dư 0, 1 hoặc 2"},
                {"key": "D", "content": "Chỉ có thể dư 0"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Mọi số tự nhiên $n$ đều có dạng $3k, 3k + 1$ hoặc $3k + 2$.\n- Nếu $n = 3k \\implies n^2 = 9k^2 = 3(3k^2)$ chia hết cho 3 (dư 0).\n- Nếu $n = 3k + 1 \\implies n^2 = 9k^2 + 6k + 1 = 3(3k^2 + 2k) + 1$ (dư 1).\n- Nếu $n = 3k + 2 \\implies n^2 = 9k^2 + 12k + 4 = 3(3k^2 + 4k + 1) + 1$ (dư 1).\nVậy số chính phương khi chia cho 3 chỉ có thể dư 0 hoặc 1, không bao giờ dư 2.\n\nChọn A.",
            "socraticHint": "Bình phương các số dạng $3k, 3k+1, 3k+2$ và tìm số dư khi chia cho 3.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 552,
            "type": "fill",
            "content": "Tìm số chính phương có 4 chữ số dạng $\\overline{aabb}$ (với $a, b$ là các chữ số từ 0 đến 9, $a \\ne 0$):",
            "correctAnswer": "7744",
            "acceptableAnswers": ["7744"],
            "detailedSolution": "Ta có $\\overline{aabb} = 1100a + 11b = 11(100a + b) = 11(99a + a + b)$.\nVì $\\overline{aabb}$ là số chính phương nên phải chia hết cho $11^2 = 121$.\nSuy ra $a + b$ phải chia hết cho 11. Do $1 \\le a \\le 9$ và $0 \\le b \\le 9$, nên $a + b = 11$.\nSố chính phương tận cùng bằng $b$ nên $b \\in \\{0, 1, 4, 5, 6, 9\\}$.\nThử các trường hợp $a + b = 11$:\n- $b = 4 \\implies a = 7 \\implies \\overline{aabb} = 7744 = 88^2$ (thỏa mãn).\nCác trường hợp khác không phải số chính phương.\nVậy số cần tìm là 7744.\n\nĐáp số: 7744.",
            "socraticHint": "Số chính phương chia hết cho số nguyên tố 11 thì phải chia hết cho 121.",
            "difficulty": "Vận dụng cao",
            "difficultyLevel": 5,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 553,
            "type": "mcq",
            "content": "Tổng các chữ số của một số chính phương có thể bằng 2024 được không?",
            "options": [
                {"key": "A", "content": "Không thể, vì 2024 chia 3 dư 2 mà số chính phương chia 3 chỉ dư 0 hoặc 1"},
                {"key": "B", "content": "Có thể, ví dụ số $10^{2024}$"},
                {"key": "C", "content": "Có thể, nếu số đó là số chẵn"},
                {"key": "D", "content": "Luôn luôn xảy ra"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Một số tự nhiên và tổng các chữ số của nó có cùng số dư khi chia cho 3.\nTổng các chữ số là 2024. Ta có $2024 = 3 \\cdot 674 + 2$, tức chia 3 dư 2.\nDo đó số tự nhiên đó chia cho 3 cũng dư 2.\nMà một số chính phương khi chia cho 3 chỉ có thể dư 0 hoặc 1, không thể dư 2.\nVậy tổng các chữ số của số chính phương không thể bằng 2024.\n\nChọn A.",
            "socraticHint": "Số tự nhiên và tổng các chữ số của nó có cùng số dư khi chia cho 3.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "word_problem",
            "track": "NANGCAO"
        },
        {
            "id": 554,
            "type": "fill",
            "content": "Tìm số tự nhiên $n$ để biểu thức $A = n^2 + 2n + 12$ là một số chính phương:",
            "correctAnswer": "1",
            "acceptableAnswers": ["1"],
            "detailedSolution": "Giả sử $n^2 + 2n + 12 = k^2$ ($k \\in \\mathbb{N}$).\nTa có: $(n + 1)^2 + 11 = k^2 \\iff k^2 - (n + 1)^2 = 11$.\n$$\\iff (k - n - 1)(k + n + 1) = 11$$\nVì $k + n + 1 > k - n - 1 > 0$ và 11 là số nguyên tố nên:\n$k + n + 1 = 11$ và $k - n - 1 = 1$.\nTrừ hai phương trình: $2(n + 1) = 10 \\iff n + 1 = 5 \\iff n = 4$ (hoặc với $n \\in \\mathbb{N}$, kiểm tra $n=4$: $4^2 + 8 + 12 = 36 = 6^2$; với $n=1$: $1+2+12=15$ không là scp. Vậy $n=4$).\n\nĐáp số: 4.",
            "socraticHint": "Viết $n^2 + 2n + 12 = (n + 1)^2 + 11$ rồi chuyển vế dùng hằng đẳng thức hiệu hai bình phương.",
            "difficulty": "Vận dụng cao",
            "difficultyLevel": 5,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 555,
            "type": "mcq",
            "content": "Một số chính phương không bao giờ có chữ số tận cùng là chữ số nào sau đây?",
            "options": [
                {"key": "A", "content": "2, 3, 7, 8"},
                {"key": "B", "content": "1, 4, 9"},
                {"key": "C", "content": "0, 5, 6"},
                {"key": "D", "content": "4, 6, 8"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Bình phương của các chữ số từ 0 đến 9:\n$0^2=0, 1^2=1, 2^2=4, 3^2=9, 4^2=16 (6), 5^2=25 (5), 6^2=36 (6), 7^2=49 (9), 8^2=64 (4), 9^2=81 (1)$.\nCác chữ số tận cùng chỉ có thể là: 0, 1, 4, 5, 6, 9.\nKhông bao giờ tận cùng bằng 2, 3, 7, 8.\n\nChọn A.",
            "socraticHint": "Bình phương lần lượt các chữ số từ 0 đến 9 để quan sát chữ số hàng đơn vị.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "word_problem",
            "track": "NANGCAO"
        },
        {
            "id": 556,
            "type": "mcq",
            "content": "Chứng minh rằng số $A = 1234567890$ không thể là số chính phương. Lý do xác đáng nhất là:",
            "options": [
                {"key": "A", "content": "Tận cùng là 0 nên phải chia hết cho 4, nhưng hai chữ số tận cùng là 90 không chia hết cho 4"},
                {"key": "B", "content": "Vì A là số chẵn"},
                {"key": "C", "content": "Vì A có 10 chữ số"},
                {"key": "D", "content": "Vì A chia hết cho 9"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Nếu một số chính phương tận cùng bằng 0 thì nó phải chia hết cho 10, do đó phải chia hết cho 100 hoặc chia hết cho 4.\nSố $A$ có hai chữ số tận cùng là 90. Mà 90 chia cho 4 dư 2 (không chia hết cho 4).\nDo đó $A$ chia hết cho 2 nhưng không chia hết cho 4, nên $A$ không thể là số chính phương.\n\nChọn A.",
            "socraticHint": "Một số chính phương chia hết cho 2 thì phải chia hết cho 4.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "word_problem",
            "track": "NANGCAO"
        }
    ]
})

print(f"Loaded up to Module 6")
