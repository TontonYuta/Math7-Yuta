import os
import json

TARGET_DIR = "/home/tontonyuta/Math7-Yuta/src/data/toan7/topics/nangcao_15chuyende"
os.makedirs(TARGET_DIR, exist_ok=True)

modules = []

# ==========================================
# CHUYÊN ĐỀ 3: TÌM ẨN CHƯA BIẾT
# ==========================================
modules.append({
    "filename": "cd03_tim_an_chua_biet.ts",
    "var_name": "HSG_CD03_TIM_AN_CHUA_BIET",
    "title": "Chủ đề 3: Tìm ẩn chưa biết",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "tap_hop_so_thuc",
    "topicName": "Tập hợp số thực & Trục số thực",
    "questions": [
        {
            "id": 521,
            "type": "fill",
            "content": "Tìm số cặp số nguyên $(x, y)$ thỏa mãn đẳng thức:\n$$xy + 2x - 3y = 11$$",
            "correctAnswer": "4",
            "acceptableAnswers": ["4"],
            "detailedSolution": "Biến đổi vế trái về dạng tích:\n$$x(y + 2) - 3(y + 2) - 6 = 11 \\iff (x - 3)(y + 2) = 5$$\nVì $x, y \\in \\mathbb{Z}$ nên $x - 3$ và $y + 2$ là các ước của 5: $\\{\\pm 1, \\pm 5\\}$.\n- $x - 3 = 1 \\implies x = 4, y + 2 = 5 \\implies y = 3$\n- $x - 3 = -1 \\implies x = 2, y + 2 = -5 \\implies y = -7$\n- $x - 3 = 5 \\implies x = 8, y + 2 = 1 \\implies y = -1$\n- $x - 3 = -5 \\implies x = -2, y + 2 = -1 \\implies y = -3$\nVậy có đúng 4 cặp số nguyên $(x, y)$ thỏa mãn.\n\nĐáp số: 4.",
            "socraticHint": "Đưa phương trình về dạng tích $(x - a)(y - b) = k$ rồi xét ước của $k$.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 522,
            "type": "fill",
            "content": "Tìm số các giá trị nguyên của $x$ để phân thức sau nhận giá trị nguyên:\n$$P = \\frac{2x + 7}{x + 1}$$",
            "correctAnswer": "4",
            "acceptableAnswers": ["4"],
            "detailedSolution": "Tách phần nguyên:\n$$P = \\frac{2(x + 1) + 5}{x + 1} = 2 + \\frac{5}{x + 1}$$\nĐể $P \\in \\mathbb{Z}$ thì $5 \\ \vdots \\ (x + 1)$, suy ra $x + 1 \\in \\text{Ư}(5) = \\{\\pm 1, \\pm 5\\}$.\n- $x + 1 = 1 \\implies x = 0$\n- $x + 1 = -1 \\implies x = -2$\n- $x + 1 = 5 \\implies x = 4$\n- $x + 1 = -5 \\implies x = -6$\nVậy có 4 giá trị nguyên của $x$.\n\nĐáp số: 4.",
            "socraticHint": "Chia đa thức tử số cho mẫu số để tách thành phần nguyên cộng với một phân số có tử là hằng số.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 523,
            "type": "mcq",
            "content": "Tìm giá trị của $x$ thỏa mãn phương trình:\n$$\\frac{x - 1}{2023} + \\frac{x - 2}{2022} = \\frac{x - 3}{2021} + \\frac{x - 4}{2020}$$",
            "options": [
                {"key": "A", "content": "$x = 2024$"},
                {"key": "B", "content": "$x = 2023$"},
                {"key": "C", "content": "$x = 2022$"},
                {"key": "D", "content": "$x = 2025$"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Trừ 1 vào mỗi phân thức ở cả hai vế (hoặc cộng thêm $-1$):\n$$\\left(\\frac{x - 1}{2023} - 1\\right) + \\left(\\frac{x - 2}{2022} - 1\\right) = \\left(\\frac{x - 3}{2021} - 1\\right) + \\left(\\frac{x - 4}{2020} - 1\\right)$$\n$$\\iff \\frac{x - 2024}{2023} + \\frac{x - 2024}{2022} - \\frac{x - 2024}{2021} - \\frac{x - 2024}{2020} = 0$$\n$$\\iff (x - 2024)\\left(\\frac{1}{2023} + \\frac{1}{2022} - \\frac{1}{2021} - \\frac{1}{2020}\\right) = 0$$\nVì biểu thức trong ngoặc khác 0 nên $x - 2024 = 0 \\iff x = 2024$.\n\nChọn A.",
            "socraticHint": "Nhận xét tổng của tử và mẫu ở mỗi phân thức khi trừ 1 đều xuất hiện thừa số chung $x - 2024$.",
            "difficulty": "Vận dụng cao",
            "difficultyLevel": 5,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 524,
            "type": "fill",
            "content": "Tìm nghiệm $x$ của phương trình: $6(x + 11) - 7(2 - x) = 26$.",
            "correctAnswer": "-2",
            "acceptableAnswers": ["-2"],
            "detailedSolution": "Khai triển vế trái:\n$$6x + 66 - 14 + 7x = 26$$\n$$13x + 52 = 26$$\n$$13x = 26 - 52 = -26 \\iff x = -2.$$\n\nĐáp số: -2.",
            "socraticHint": "Áp dụng quy tắc nhân đơn thức với đa thức và quy tắc chuyển vế đổi dấu.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 525,
            "type": "fill",
            "content": "Tìm $x$ biết: $(2x - 3)^3 = -27$:",
            "correctAnswer": "0",
            "acceptableAnswers": ["0"],
            "detailedSolution": "Ta có: $-27 = (-3)^3$.\nDo đó: $2x - 3 = -3 \\iff 2x = 0 \\iff x = 0$.\n\nĐáp số: 0.",
            "socraticHint": "Viết -27 dưới dạng lũy thừa bậc 3 của một số nguyên.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 526,
            "type": "mcq",
            "content": "Cho biểu thức $A = |x - 1| + |x - 5|$. Với giá trị nào của $x$ thì $A = 4$?",
            "options": [
                {"key": "A", "content": "$1 \\le x \\le 5$"},
                {"key": "B", "content": "$x = 1$ hoặc $x = 5$"},
                {"key": "C", "content": "$x > 5$"},
                {"key": "D", "content": "$x < 1$"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Ta có bất đẳng thức: $|x - 1| + |x - 5| = |x - 1| + |5 - x| \\ge |(x - 1) + (5 - x)| = 4$.\nDấu đẳng thức xảy ra khi $(x - 1)(5 - x) \\ge 0 \\iff 1 \\le x \\le 5$.\n\nChọn A.",
            "socraticHint": "Áp dụng bất đẳng thức $|a| + |b| \\ge |a + b|$ với $a = x - 1$ và $b = 5 - x$.",
            "difficulty": "Vận dụng cao",
            "difficultyLevel": 5,
            "gameCategory": "word_problem",
            "track": "NANGCAO"
        }
    ]
})

# ==========================================
# CHUYÊN ĐỀ 4: CHỨNG MINH CHIA HẾT
# ==========================================
modules.append({
    "filename": "cd04_chung_minh_chia_het.ts",
    "var_name": "HSG_CD04_CHUNG_MINH_CHIA_HET",
    "title": "Chủ đề 4: Các dạng toán và phương pháp chứng minh chia hết",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố & Xác suất",
    "topicId": "khai_niem_bien_co_ngau_nhien",
    "topicName": "Khái niệm biến cố ngẫu nhiên & Xác suất",
    "questions": [
        {
            "id": 531,
            "type": "mcq",
            "content": "Cho $n$ là số nguyên. Tích $A = n(n + 1)(2n + 1)$ luôn chia hết cho số nào sau đây với mọi $n \\in \\mathbb{Z}$?",
            "options": [
                {"key": "A", "content": "6"},
                {"key": "B", "content": "12"},
                {"key": "C", "content": "9"},
                {"key": "D", "content": "8"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Ta có:\n- Trong hai số tự nhiên liên tiếp $n, n+1$ luôn có 1 số chẵn $\\implies A \\ \\vdots \\ 2$.\n- Tách $2n + 1 = (n - 1) + (n + 2)$, ta có:\n$$A = n(n + 1)[(n - 1) + (n + 2)] = (n - 1)n(n + 1) + n(n + 1)(n + 2)$$\nMỗi số hạng là tích của 3 số nguyên liên tiếp nên đều chia hết cho 3 $\\implies A \\ \\vdots \\ 3$.\nVì $\\text{ƯCLN}(2, 3) = 1$ nên $A$ luôn chia hết cho $2 \\cdot 3 = 6$.\n\nChọn A.",
            "socraticHint": "Tách $2n+1 = (n-1) + (n+2)$ để đưa về tổng của hai tích 3 số nguyên liên tiếp.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 532,
            "type": "mcq",
            "content": "Chứng minh rằng số tự nhiên có 6 chữ số dạng $\\overline{abcabc}$ luôn chia hết cho ít nhất bao nhiêu số nguyên tố sau: 7, 11, 13?",
            "options": [
                {"key": "A", "content": "Cả ba số 7, 11, 13"},
                {"key": "B", "content": "Chỉ chia hết cho 7"},
                {"key": "C", "content": "Chỉ chia hết cho 11"},
                {"key": "D", "content": "Chỉ chia hết cho 13"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Ta phân tích cấu tạo số:\n$$\\overline{abcabc} = \\overline{abc} \\cdot 1000 + \\overline{abc} = \\overline{abc} \\cdot 1001$$\nNhận thấy: $1001 = 7 \\cdot 11 \\cdot 13$.\nDo đó $\\overline{abcabc} = \\overline{abc} \\cdot 7 \\cdot 11 \\cdot 13$ luôn chia hết cho cả 7, 11 và 13.\n\nChọn A.",
            "socraticHint": "Phân tích $\\overline{abcabc} = \\overline{abc} \\cdot 1001$ và phân tích 1001 ra thừa số nguyên tố.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "word_problem",
            "track": "NANGCAO"
        },
        {
            "id": 533,
            "type": "fill",
            "content": "Cho tổng $S = 3^1 + 3^2 + 3^3 + \\dots + 3^{60}$. Khi chia $S$ cho 13, số dư nhận được bằng bao nhiêu?",
            "correctAnswer": "0",
            "acceptableAnswers": ["0"],
            "detailedSolution": "Nhóm mỗi 3 số hạng liên tiếp lại với nhau:\n$$S = (3^1 + 3^2 + 3^3) + (3^4 + 3^5 + 3^6) + \\dots + (3^{58} + 3^{59} + 3^{60})$$\n$$S = 3(1 + 3 + 9) + 3^4(1 + 3 + 9) + \\dots + 3^{58}(1 + 3 + 9)$$\n$$S = 13 \\cdot (3 + 3^4 + \\dots + 3^{58})$$\nVì tổng chia hết cho 13 nên số dư bằng 0.\n\nĐáp số: 0.",
            "socraticHint": "Tính tổng của 3 lũy thừa đầu tiên: $3 + 9 + 27 = 39 = 3 \\cdot 13$.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 534,
            "type": "fill",
            "content": "Với mọi số tự nhiên lẻ $n$, biểu thức $n^2 - 1$ luôn chia hết cho số tự nhiên lớn nhất nào sau đây?",
            "correctAnswer": "8",
            "acceptableAnswers": ["8"],
            "detailedSolution": "Vì $n$ là số tự nhiên lẻ nên đặt $n = 2k + 1$ ($k \\in \\mathbb{N}$).\nKhi đó:\n$$n^2 - 1 = (n - 1)(n + 1) = (2k)(2k + 2) = 4k(k + 1)$$\nVì $k$ và $k + 1$ là hai số tự nhiên liên tiếp nên tích $k(k + 1)$ chia hết cho 2.\nDo đó $4k(k + 1)$ chia hết cho $4 \\cdot 2 = 8$.\n\nĐáp số: 8.",
            "socraticHint": "Biểu diễn $n = 2k + 1$ rồi phân tích $n^2 - 1$ thành tích.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "word_problem",
            "track": "NANGCAO"
        },
        {
            "id": 535,
            "type": "mcq",
            "content": "Chứng minh rằng biểu thức $B = n^3 - n$ luôn chia hết cho 6 với mọi số nguyên $n$. Khẳng định này:",
            "options": [
                {"key": "A", "content": "Luôn đúng vì $n^3 - n = (n-1)n(n+1)$ là tích 3 số nguyên liên tiếp"},
                {"key": "B", "content": "Chỉ đúng khi $n$ là số chẵn"},
                {"key": "C", "content": "Chỉ đúng khi $n$ chia hết cho 3"},
                {"key": "D", "content": "Sai với mọi $n$ âm"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Ta phân tích nhân tử: $n^3 - n = n(n^2 - 1) = (n - 1)n(n + 1)$.\nĐây là tích của 3 số nguyên liên tiếp, trong đó luôn có ít nhất một số chẵn (chia hết cho 2) và một số chia hết cho 3. Vì $\\text{ƯCLN}(2, 3) = 1$ nên tích luôn chia hết cho 6.\n\nChọn A.",
            "socraticHint": "Tích của 3 số nguyên liên tiếp luôn chia hết cho cả 2 và 3.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "word_problem",
            "track": "NANGCAO"
        },
        {
            "id": 536,
            "type": "fill",
            "content": "Tìm chữ số tận cùng của hiệu $H = n^5 - n$ với mọi số nguyên dương $n$:",
            "correctAnswer": "0",
            "acceptableAnswers": ["0"],
            "detailedSolution": "Ta có $n^5 - n = n(n^4 - 1) = n(n - 1)(n + 1)(n^2 + 1)$.\n- Vì chứa tích $(n - 1)n(n + 1)$ nên chia hết cho 2 và 3, suy ra chia hết cho 6.\n- Mặt khác $n^2 + 1 = (n^2 - 4) + 5 = (n - 2)(n + 2) + 5$, nên:\n$$n^5 - n = (n - 2)(n - 1)n(n + 1)(n + 2) + 5n(n - 1)(n + 1)$$\nTích của 5 số nguyên liên tiếp luôn chia hết cho 5, và số hạng thứ hai có thừa số 5 nên cũng chia hết cho 5.\nSuy ra $n^5 - n$ chia hết cho cả 2 và 5, tức chia hết cho 10.\nVậy chữ số tận cùng luôn là 0.\n\nĐáp số: 0.",
            "socraticHint": "Chứng minh biểu thức vừa chia hết cho 2 vừa chia hết cho 5, tức là chia hết cho 10.",
            "difficulty": "Vận dụng cao",
            "difficultyLevel": 5,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        }
    ]
})

print(f"Loaded {len(modules)} modules in append script")
