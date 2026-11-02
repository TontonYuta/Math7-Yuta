import os
import json

TARGET_DIR = "/home/tontonyuta/Math7-Yuta/src/data/toan7/topics/nangcao_15chuyende"
os.makedirs(TARGET_DIR, exist_ok=True)

modules = []

# ==========================================
# CHUYÊN ĐỀ 7: CÁC DẠNG TOÁN VỀ PHÂN SỐ
# ==========================================
modules.append({
    "filename": "cd07_cac_dang_toan_phan_so.ts",
    "var_name": "HSG_CD07_CAC_DANG_TOAN_PHAN_SO",
    "title": "Chủ đề 7: Các dạng toán về phân số",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "tap_hop_so_huu_ti",
    "topicName": "Tập hợp các số hữu tỉ & Biểu diễn trên trục số",
    "questions": [
        {
            "id": 561,
            "type": "mcq",
            "content": "Chứng minh rằng phân số $P = \\frac{12n + 1}{30n + 2}$ là phân số tối giản với mọi $n \\in \\mathbb{N}$. Ước chung lớn nhất của tử và mẫu bằng bao nhiêu?",
            "options": [
                {"key": "A", "content": "1"},
                {"key": "B", "content": "2"},
                {"key": "C", "content": "3"},
                {"key": "D", "content": "6"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Gọi $d = \\text{ƯCLN}(12n + 1, 30n + 2)$ với $d \\in \\mathbb{N}^*$.\nTa có: $(12n + 1) \\ \\vdots \\ d$ và $(30n + 2) \\ \\vdots \\ d$.\nSuy ra: $5(12n + 1) \\ \\vdots \\ d$ và $2(30n + 2) \\ \\vdots \\ d$.\nDo đó: $[2(30n + 2) - 5(12n + 1)] \\ \\vdots \\ d$\n$$\\iff (60n + 4 - 60n - 5) \\ \\vdots \\ d \\iff -1 \\ \\vdots \\ d$$\nVì $d \\in \\mathbb{N}^*$ nên $d = 1$.\nVậy phân số tối giản với mọi số tự nhiên $n$.\n\nChọn A.",
            "socraticHint": "Nhân tử số với 5 và mẫu số với 2 để triệt tiêu biến $n$ khi trừ hai biểu thức.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 562,
            "type": "fill",
            "content": "Tính giá trị của tích phân số nhiều thừa số sau:\n$$P = \\left(1 - \\frac{1}{2}\\right)\\left(1 - \\frac{1}{3}\\right)\\left(1 - \\frac{1}{4}\\right) \\dots \\left(1 - \\frac{1}{100}\\right)$$\n(Nhập kết quả dưới dạng phân số tối giản a/b)",
            "correctAnswer": "1/100",
            "acceptableAnswers": ["1/100"],
            "detailedSolution": "Quy đồng từng thừa số:\n$$P = \\frac{1}{2} \\cdot \\frac{2}{3} \\cdot \\frac{3}{4} \\dots \\frac{99}{100}$$\nTriệt tiêu liên tiếp tử số của phân số sau với mẫu số của phân số trước:\n$$P = \\frac{1}{100}.$$\n\nĐáp số: 1/100.",
            "socraticHint": "Tính giá trị trong từng ngoặc rồi rút gọn chéo các thừa số liên tiếp.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 563,
            "type": "fill",
            "content": "Tính giá trị tích: $Q = \\left(1 - \\frac{1}{2^2}\\right)\\left(1 - \\frac{1}{3^2}\\right)\\left(1 - \\frac{1}{4^2}\\right) \\dots \\left(1 - \\frac{1}{10^2}\\right)$ (Nhập phân số tối giản a/b):",
            "correctAnswer": "11/20",
            "acceptableAnswers": ["11/20"],
            "detailedSolution": "Ta có $1 - \\frac{1}{n^2} = \\frac{n^2 - 1}{n^2} = \\frac{(n - 1)(n + 1)}{n^2}$.\nTách tích thành hai dãy phân số:\n$$Q = \\left(\\frac{1 \\cdot 3}{2^2}\\right) \\cdot \\left(\\frac{2 \\cdot 4}{3^2}\\right) \\cdot \\left(\\frac{3 \\cdot 5}{4^2}\\right) \\dots \\left(\\frac{9 \\cdot 11}{10^2}\\right)$$\n$$Q = \\left(\\frac{1 \\cdot 2 \\cdot 3 \\dots 9}{2 \\cdot 3 \\cdot 4 \\dots 10}\\right) \\cdot \\left(\\frac{3 \\cdot 4 \\cdot 5 \\dots 11}{2 \\cdot 3 \\cdot 4 \\dots 10}\\right) = \\frac{1}{10} \\cdot \\frac{11}{2} = \\frac{11}{20}.$$\n\nĐáp số: 11/20.",
            "socraticHint": "Sử dụng hằng đẳng thức $n^2 - 1 = (n - 1)(n + 1)$ rồi tách thành tích hai dãy.",
            "difficulty": "Vận dụng cao",
            "difficultyLevel": 5,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 564,
            "type": "fill",
            "content": "Tìm số tự nhiên $n$ để phân số $\\frac{n + 3}{n - 2}$ nhận giá trị là một số nguyên. Có bao nhiêu số tự nhiên $n$ thỏa mãn?",
            "correctAnswer": "2",
            "acceptableAnswers": ["2"],
            "detailedSolution": "Tách phần nguyên:\n$$\\frac{n + 3}{n - 2} = \\frac{(n - 2) + 5}{n - 2} = 1 + \\frac{5}{n - 2}$$\nĐể phân thức nguyên thì $n - 2 \\in \\text{Ư}(5) = \\{\\pm 1, \\pm 5\\}$.\n- $n - 2 = 1 \\implies n = 3$\n- $n - 2 = -1 \\implies n = 1$\n- $n - 2 = 5 \\implies n = 7$\n- $n - 2 = -5 \\implies n = -3$ (loại vì $n \\in \\mathbb{N}$).\nKiểm tra $n=1$: $\\frac{4}{-1} = -4 \\in \\mathbb{Z}$; $n=3$: $\\frac{6}{1} = 6 \\in \\mathbb{Z}$; $n=7$: $\\frac{10}{5} = 2 \\in \\mathbb{Z}$.\nVậy có 3 giá trị tự nhiên của $n$ là 1, 3, 7.\n\nĐáp số: 3.",
            "socraticHint": "Chia tử số cho mẫu số để tìm điều kiện $n - 2$ là ước nguyên của 5.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 565,
            "type": "mcq",
            "content": "So sánh hai phân số lớn: $A = \\frac{2023^{2023} + 1}{2023^{2024} + 1}$ và $B = \\frac{2023^{2022} + 1}{2023^{2023} + 1}$.",
            "options": [
                {"key": "A", "content": "$A < B$"},
                {"key": "B", "content": "$A > B$"},
                {"key": "C", "content": "$A = B$"},
                {"key": "D", "content": "$A = 2023B$"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Nhân cả hai phân số với 2023:\n$$2023A = \\frac{2023^{2024} + 2023}{2023^{2024} + 1} = 1 + \\frac{2022}{2023^{2024} + 1}$$\n$$2023B = \\frac{2023^{2023} + 2023}{2023^{2023} + 1} = 1 + \\frac{2022}{2023^{2023} + 1}$$\nVì $2023^{2024} + 1 > 2023^{2023} + 1$ nên $\\frac{2022}{2023^{2024} + 1} < \\frac{2022}{2023^{2023} + 1}$.\nDo đó $2023A < 2023B \\implies A < B$.\n\nChọn A.",
            "socraticHint": "Nhân cả $A$ và $B$ với cơ số 2023 rồi so sánh phần hơn so với 1.",
            "difficulty": "Vận dụng cao",
            "difficultyLevel": 5,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 566,
            "type": "mcq",
            "content": "Chứng minh phân số $\\frac{2n + 1}{3n + 2}$ tối giản với mọi $n \\in \\mathbb{N}$. Phép biến đổi nào sau đây chứng minh trực tiếp?",
            "options": [
                {"key": "A", "content": "$2(3n + 2) - 3(2n + 1) = 1$ nên ƯCLN bằng 1"},
                {"key": "B", "content": "$3n + 2 > 2n + 1$"},
                {"key": "C", "content": "$2n + 1$ luôn là số lẻ"},
                {"key": "D", "content": "Tử và mẫu không cùng chia hết cho 2"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Gọi $d = \\text{ƯCLN}(2n + 1, 3n + 2)$.\nTa có: $2(3n + 2) - 3(2n + 1) = (6n + 4) - (6n + 3) = 1$.\nVì $1 \\ \\vdots \\ d$ nên $d = 1$.\nVậy phân số luôn tối giản.\n\nChọn A.",
            "socraticHint": "Nhân chéo hệ số của $n$ để triệt tiêu biến $n$.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "word_problem",
            "track": "NANGCAO"
        }
    ]
})

# ==========================================
# CHUYÊN ĐỀ 8: BẤT ĐẲNG THỨC & GTLN, GTNN
# ==========================================
modules.append({
    "filename": "cd08_bat_dang_thuc_gtln_gtnn.ts",
    "var_name": "HSG_CD08_BAT_DANG_THUC_GTLN_GTNN",
    "title": "Chủ đề 8: Chứng minh bất đẳng thức và tìm GTLN, GTNN",
    "chapterId": "chuong_10_hinh_khoi_trong_thuc_tien",
    "chapterName": "Chương 10: Hình khối trong thực tiễn",
    "topicId": "hinh_hop_chu_nhat_lap_phuong",
    "topicName": "Hình hộp chữ nhật & Hình lập phương",
    "questions": [
        {
            "id": 571,
            "type": "fill",
            "content": "Tìm giá trị nhỏ nhất của biểu thức $A = |x - 2| + |x - 7|$:",
            "correctAnswer": "5",
            "acceptableAnswers": ["5"],
            "detailedSolution": "Áp dụng bất đẳng thức $|a| + |b| \\ge |a + b|$:\n$$A = |x - 2| + |7 - x| \\ge |(x - 2) + (7 - x)| = |5| = 5$$\nDấu \"=\" xảy ra khi $(x - 2)(7 - x) \\ge 0 \\iff 2 \\le x \\le 7$.\nVậy giá trị nhỏ nhất của $A$ là 5.\n\nĐáp số: 5.",
            "socraticHint": "Đổi dấu $|x - 7| = |7 - x|$ rồi áp dụng bất đẳng thức trị tuyệt đối.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 572,
            "type": "fill",
            "content": "Tìm giá trị nhỏ nhất của biểu thức $B = |x - 1| + |x - 3| + |x - 5|$:",
            "correctAnswer": "4",
            "acceptableAnswers": ["4"],
            "detailedSolution": "Ta ghép cặp hạng tử thứ nhất và thứ ba:\n$$|x - 1| + |x - 5| = |x - 1| + |5 - x| \\ge |(x - 1) + (5 - x)| = 4$$\nMặt khác $|x - 3| \\ge 0$.\nDo đó: $B \\ge 4 + 0 = 4$.\nDấu \"=\" xảy ra khi $x - 3 = 0 \\iff x = 3$ (thỏa mãn $1 \\le x \\le 5$).\nVậy GTNN của $B$ bằng 4.\n\nĐáp số: 4.",
            "socraticHint": "Ghép hai hạng tử ngoài cùng $|x - 1| + |5 - x|$ để triệt tiêu $x$, hạng tử ở giữa đạt GTNN bằng 0.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 573,
            "type": "fill",
            "content": "Tìm giá trị lớn nhất của biểu thức $M = \\frac{6}{|x| + 2}$:",
            "correctAnswer": "3",
            "acceptableAnswers": ["3"],
            "detailedSolution": "Vì $|x| \\ge 0$ với mọi $x \\in \\mathbb{R}$ nên $|x| + 2 \\ge 2$.\nDo đó: $M = \\frac{6}{|x| + 2} \\le \\frac{6}{2} = 3$.\nDấu \"=\" xảy ra khi $x = 0$.\nVậy giá trị lớn nhất của $M$ là 3.\n\nĐáp số: 3.",
            "socraticHint": "Phân số có tử dương không đổi đạt giá trị lớn nhất khi mẫu số dương đạt giá trị nhỏ nhất.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 574,
            "type": "fill",
            "content": "Cho phân số $P = \\frac{2024}{x - 2023}$ với $x$ là số nguyên. Tìm giá trị lớn nhất của $P$:",
            "correctAnswer": "2024",
            "acceptableAnswers": ["2024"],
            "detailedSolution": "- Nếu $x < 2023 \\implies x - 2023 < 0 \\implies P < 0$.\n- Nếu $x > 2023 \\implies x - 2023 > 0 \\implies P > 0$.\nĐể $P$ đạt giá trị lớn nhất thì $x - 2023$ phải là số nguyên dương nhỏ nhất, tức $x - 2023 = 1 \\implies x = 2024$.\nKhi đó: $P = \\frac{2024}{1} = 2024$.\n\nĐáp số: 2024.",
            "socraticHint": "Xét dấu của mẫu số và tìm số nguyên dương nhỏ nhất của mẫu số.",
            "difficulty": "Vận dụng cao",
            "difficultyLevel": 5,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 575,
            "type": "fill",
            "content": "Tìm giá trị nhỏ nhất của biểu thức $K = (x - 1)^2 + (y + 2)^2 + 2024$:",
            "correctAnswer": "2024",
            "acceptableAnswers": ["2024"],
            "detailedSolution": "Ta có: $(x - 1)^2 \\ge 0$ với mọi $x$, và $(y + 2)^2 \\ge 0$ với mọi $y$.\nSuy ra: $K \\ge 0 + 0 + 2024 = 2024$.\nDấu \"=\" xảy ra khi $x - 1 = 0 \\iff x = 1$ và $y + 2 = 0 \\iff y = -2$.\nVậy GTNN của $K$ là 2024.\n\nĐáp số: 2024.",
            "socraticHint": "Bình phương của mọi số thực luôn không âm.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 576,
            "type": "mcq",
            "content": "Cho ba số thực $a, b, c$. Bất đẳng thức nào sau đây luôn đúng với mọi $a, b$?",
            "options": [
                {"key": "A", "content": "$|a| + |b| \\ge |a + b|$"},
                {"key": "B", "content": "$|a| + |b| < |a + b|$"},
                {"key": "C", "content": "$|a| - |b| \\ge |a + b|$"},
                {"key": "D", "content": "$|a| + |b| = |a + b|$ với mọi $a, b$"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Đây là bất đẳng thức tam giác / bất đẳng thức giá trị tuyệt đối cơ bản:\n$$|a| + |b| \\ge |a + b|$$\nDấu \"=\" xảy ra khi và chỉ khi $a$ và $b$ cùng dấu (tức $ab \\ge 0$).\n\nChọn A.",
            "socraticHint": "Bất đẳng thức về tổng hai cạnh trong hình học tương đương với bất đẳng thức trị tuyệt đối.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "word_problem",
            "track": "NANGCAO"
        }
    ]
})

print(f"Loaded up to Module 8")
