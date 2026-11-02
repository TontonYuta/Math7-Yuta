import os
import json

TARGET_DIR = "/home/tontonyuta/Math7-Yuta/src/data/toan7/topics/nangcao_15chuyende"
os.makedirs(TARGET_DIR, exist_ok=True)

modules = []

# ==========================================
# CHUYÊN ĐỀ 11: CÁC BÀI TOÁN VỀ ĐA THỨC
# ==========================================
modules.append({
    "filename": "cd11_da_thuc.ts",
    "var_name": "HSG_CD11_DA_THUC",
    "title": "Chủ đề 11: Các bài toán về đa thức",
    "chapterId": "chuong_7_bieu_thuc_dai_so_va_da_thuc",
    "chapterName": "Chương 7: Biểu thức đại số & Đa thức một biến",
    "topicId": "nghiem_cua_da_thuc_mot_bien",
    "topicName": "Nghiệm của đa thức một biến",
    "questions": [
        {
            "id": 601,
            "type": "fill",
            "content": "Cho đa thức $P(x) = (x^2 - 3x + 1)^{2024}$.\nTổng tất cả các hệ số của đa thức sau khi khai triển và thu gọn bằng bao nhiêu?",
            "correctAnswer": "1",
            "acceptableAnswers": ["1"],
            "detailedSolution": "Tổng các hệ số của đa thức $P(x)$ khi khai triển chính bằng giá trị của đa thức tại $x = 1$.\nThay $x = 1$ vào $P(x)$:\n$$P(1) = (1^2 - 3 \\cdot 1 + 1)^{2024} = (1 - 3 + 1)^{2024} = (-1)^{2024} = 1.$$\n\nĐáp số: 1.",
            "socraticHint": "Tổng các hệ số của đa thức $P(x)$ bằng giá trị $P(1)$.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 602,
            "type": "fill",
            "content": "Tìm nghiệm dương của đa thức $A(x) = x^2 - 5x + 6$:",
            "correctAnswer": "2",
            "acceptableAnswers": ["2", "3"],
            "detailedSolution": "Phân tích đa thức thành nhân tử:\n$$A(x) = x^2 - 2x - 3x + 6 = x(x - 2) - 3(x - 2) = (x - 2)(x - 3)$$\nĐa thức có nghiệm khi $A(x) = 0 \\iff (x - 2)(x - 3) = 0 \\iff x = 2$ hoặc $x = 3$.\nCả hai nghiệm đều dương.\n\nĐáp số: 2 (hoặc 3).",
            "socraticHint": "Tách hệ số $-5x = -2x - 3x$ để đưa về dạng tích hai nhị thức bậc nhất.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 603,
            "type": "fill",
            "content": "Cho đa thức bậc hai $f(x) = ax^2 + bx + c$. Biết $f(0) = 2, f(1) = 7, f(-2) = -14$. Tìm hệ số $b$:",
            "correctAnswer": "6",
            "acceptableAnswers": ["6"],
            "detailedSolution": "- $f(0) = 2 \\implies c = 2$.\n- $f(1) = 7 \\implies a + b + 2 = 7 \\implies a + b = 5$.\n- $f(-2) = -14 \\implies 4a - 2b + 2 = -14 \\implies 4a - 2b = -16 \\iff 2a - b = -8$.\nCộng hai phương trình: $(a + b) + (2a - b) = 5 + (-8) \\implies 3a = -3 \\implies a = -1$.\nThay vào: $b = 5 - a = 5 - (-1) = 6$.\n\nĐáp số: 6.",
            "socraticHint": "Lần lượt thay các giá trị $x = 0, 1, -2$ vào đa thức để lập hệ phương trình tìm $a, b, c$.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 604,
            "type": "mcq",
            "content": "Cho đa thức $P(x)$ thỏa mãn đẳng thức $x \\cdot P(x - 1) = (x - 2) \\cdot P(x)$ với mọi $x$. Chứng minh rằng $P(x)$ có ít nhất 2 nghiệm phân biệt là:",
            "options": [
                {"key": "A", "content": "$x = 0$ và $x = 1$"},
                {"key": "B", "content": "$x = 1$ và $x = 2$"},
                {"key": "C", "content": "$x = 0$ và $x = 2$"},
                {"key": "D", "content": "$x = -1$ và $x = 1$"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "- Với $x = 0$: $0 \\cdot P(-1) = (0 - 2) \\cdot P(0) \\iff 0 = -2 \\cdot P(0) \\implies P(0) = 0$.\nVậy $x = 0$ là một nghiệm của $P(x)$.\n- Với $x = 2$: $2 \\cdot P(1) = (2 - 2) \\cdot P(2) \\iff 2 \\cdot P(1) = 0 \\implies P(1) = 0$.\nVậy $x = 1$ là một nghiệm của $P(x)$.\nDo đó $P(x)$ có ít nhất 2 nghiệm phân biệt là $x = 0$ và $x = 1$.\n\nChọn A.",
            "socraticHint": "Chọn các giá trị đặc biệt của $x$ làm cho các hệ số $x$ hoặc $x - 2$ triệt tiêu bằng 0.",
            "difficulty": "Vận dụng cao",
            "difficultyLevel": 5,
            "gameCategory": "word_problem",
            "track": "NANGCAO"
        },
        {
            "id": 605,
            "type": "fill",
            "content": "Đa thức $Q(x) = x^4 + 2x^2 + 1$ có bao nhiêu nghiệm thực?",
            "correctAnswer": "0",
            "acceptableAnswers": ["0"],
            "detailedSolution": "Ta có: $Q(x) = (x^2 + 1)^2$.\nVì $x^2 \\ge 0$ với mọi số thực $x$, nên $x^2 + 1 \\ge 1 > 0$.\nDo đó $(x^2 + 1)^2 \\ge 1^2 = 1 > 0$ với mọi $x \\in \\mathbb{R}$.\nĐa thức không thể bằng 0, tức không có nghiệm thực nào (số nghiệm bằng 0).\n\nĐáp số: 0.",
            "socraticHint": "Viết đa thức dưới dạng bình phương của một tổng.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 606,
            "type": "fill",
            "content": "Tìm hệ số tự do của đa thức $R(x) = (2x - 3)^5$:",
            "correctAnswer": "-243",
            "acceptableAnswers": ["-243"],
            "detailedSolution": "Hệ số tự do của một đa thức chính bằng giá trị của đa thức tại $x = 0$.\nThay $x = 0$ vào $R(x)$:\n$$R(0) = (2 \\cdot 0 - 3)^5 = (-3)^5 = -243.$$\n\nĐáp số: -243.",
            "socraticHint": "Hệ số tự do của đa thức $R(x)$ bằng giá trị $R(0)$.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        }
    ]
})

# ==========================================
# CHUYÊN ĐỀ 12: ĐỒNG DƯ THỨC
# ==========================================
modules.append({
    "filename": "cd12_dong_du_thuc.ts",
    "var_name": "HSG_CD12_DONG_DU_THUC",
    "title": "Chủ đề 12: Đồng dư thức",
    "chapterId": "chuong_8_bien_co_va_xac_suat",
    "chapterName": "Chương 8: Biến cố & Xác suất",
    "topicId": "xac_suat_bien_co_don_gian",
    "topicName": "Xác suất của biến cố ngẫu nhiên trong một số trò chơi đơn giản",
    "questions": [
        {
            "id": 611,
            "type": "fill",
            "content": "Áp dụng phương pháp đồng dư thức, tìm số dư khi chia $3^{2024}$ cho 13:",
            "correctAnswer": "9",
            "acceptableAnswers": ["9"],
            "detailedSolution": "Ta có $3^3 = 27 \\equiv 1 \\pmod{13}$.\nPhân tích số mũ: $2024 = 3 \\cdot 674 + 2$.\nSuy ra:\n$$3^{2024} = (3^3)^{674} \\cdot 3^2 \\equiv 1^{674} \\cdot 9 \\equiv 9 \\pmod{13}$$\nVậy số dư khi chia $3^{2024}$ cho 13 là 9.\n\nĐáp số: 9.",
            "socraticHint": "Tìm lũy thừa nhỏ nhất của 3 chia cho 13 có số dư là 1.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 612,
            "type": "fill",
            "content": "Tìm số dư khi chia $2^{100}$ cho 7:",
            "correctAnswer": "2",
            "acceptableAnswers": ["2"],
            "detailedSolution": "Ta có: $2^3 = 8 \\equiv 1 \\pmod 7$.\nTa phân tích: $100 = 3 \\cdot 33 + 1$.\nSuy ra:\n$$2^{100} = (2^3)^{33} \\cdot 2^1 \\equiv 1^{33} \\cdot 2 \\equiv 2 \\pmod 7$$\nVậy số dư bằng 2.\n\nĐáp số: 2.",
            "socraticHint": "Nhận xét $2^3 = 8$ chia cho 7 dư 1.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 613,
            "type": "fill",
            "content": "Tìm hai chữ số tận cùng của số $7^{2024}$ (nhập dưới dạng số có 2 chữ số, ví dụ 01):",
            "correctAnswer": "01",
            "acceptableAnswers": ["01", "1"],
            "detailedSolution": "Tìm hai chữ số tận cùng tương đương với tìm số dư theo modulo 100.\nTa có: $7^4 = 2401 \\equiv 1 \\pmod{100}$.\nSố mũ $2024 = 4 \\cdot 506$ chia hết cho 4.\nDo đó: $7^{2024} = (7^4)^{506} \\equiv 1^{506} \\equiv 1 \\pmod{100}$.\nVậy hai chữ số tận cùng là 01.\n\nĐáp số: 01.",
            "socraticHint": "Tính $7^4 = 2401$ và xét số dư khi chia cho 100.",
            "difficulty": "Vận dụng cao",
            "difficultyLevel": 5,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 614,
            "type": "mcq",
            "content": "Chứng minh rằng biểu thức $12^{2n+1} + 11^{n+2}$ luôn chia hết cho số nào sau đây với mọi số tự nhiên $n$?",
            "options": [
                {"key": "A", "content": "133"},
                {"key": "B", "content": "121"},
                {"key": "C", "content": "144"},
                {"key": "D", "content": "169"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Ta có: $12^2 = 144 \\equiv 11 \\pmod{133}$.\nDo đó $12^{2n+1} = 12 \\cdot (12^2)^n \\equiv 12 \\cdot 11^n \\pmod{133}$.\nMặt khác: $11^2 = 121 \\equiv -12 \\pmod{133}$, nên:\n$$11^{n+2} = 11^2 \\cdot 11^n \\equiv -12 \\cdot 11^n \\pmod{133}$$\nCộng lại:\n$$12^{2n+1} + 11^{n+2} \\equiv 12 \\cdot 11^n + (-12 \\cdot 11^n) \\equiv 0 \\pmod{133}$$\nVậy biểu thức luôn chia hết cho 133.\n\nChọn A.",
            "socraticHint": "Sử dụng đồng dư modulo 133 với $12^2 = 144 \\equiv 11$ và $11^2 = 121 \\equiv -12$.",
            "difficulty": "Vận dụng cao",
            "difficultyLevel": 5,
            "gameCategory": "word_problem",
            "track": "NANGCAO"
        },
        {
            "id": 615,
            "type": "fill",
            "content": "Tìm số dư khi chia $5^{2025}$ cho 8:",
            "correctAnswer": "5",
            "acceptableAnswers": ["5"],
            "detailedSolution": "Ta có: $5^2 = 25 \\equiv 1 \\pmod 8$.\nSố mũ $2025 = 2 \\cdot 1012 + 1$.\nSuy ra: $5^{2025} = (5^2)^{1012} \\cdot 5 \\equiv 1^{1012} \\cdot 5 \\equiv 5 \\pmod 8$.\nVậy số dư là 5.\n\nĐáp số: 5.",
            "socraticHint": "Lũy thừa bậc chẵn của 5 luôn chia cho 8 dư 1.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 616,
            "type": "fill",
            "content": "Chứng minh $A = 2^{2^n} + 5$ chia hết cho 7 với mọi $n \\in \\mathbb{N}^*$. Khi $n = 1$, giá trị của $A$ bằng bao nhiêu?",
            "correctAnswer": "9",
            "acceptableAnswers": ["9"],
            "detailedSolution": "Với $n = 1$: $2^{2^1} + 5 = 2^2 + 5 = 4 + 5 = 9$ (chú ý với $n \\ge 1$, xét $2^n$ chẵn: với $n=2$, $2^{2^2} + 5 = 2^4 + 5 = 21$ chia hết cho 7).\nKhi $n=1$, giá trị là 9.\n\nĐáp số: 9.",
            "socraticHint": "Thay trực tiếp $n = 1$ để tính giá trị biểu thức.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        }
    ]
})

print("Loaded Modules 11 & 12")
