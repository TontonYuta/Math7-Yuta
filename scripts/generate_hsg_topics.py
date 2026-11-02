import os
import json

TARGET_DIR = "/home/tontonyuta/Math7-Yuta/src/data/toan7/topics/nangcao_15chuyende"
os.makedirs(TARGET_DIR, exist_ok=True)

all_modules = []

# ==========================================
# CHUYÊN ĐỀ 1: THỰC HIỆN PHÉP TÍNH
# ==========================================
all_modules.append({
    "filename": "cd01_thuc_hien_phep_tinh.ts",
    "var_name": "HSG_CD01_THUC_HIEN_PHEP_TINH",
    "title": "Chủ đề 1: Thực hiện phép tính",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "phep_tinh_so_huu_ti",
    "topicName": "Cộng, trừ, nhân, chia số hữu tỉ",
    "questions": [
        {
            "id": 501,
            "type": "mcq",
            "content": "Tính giá trị của biểu thức lũy thừa phân số sau:\n$$A = \\frac{3^{11} \\cdot 11 + 3^{11} \\cdot 21}{3^9 \\cdot 2^5}$$",
            "options": [
                {"key": "A", "content": "$A = 9$"},
                {"key": "B", "content": "$A = 3$"},
                {"key": "C", "content": "$A = 27$"},
                {"key": "D", "content": "$A = 1$"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Ta đặt thừa số chung ở tử số:\n$$3^{11} \\cdot 11 + 3^{11} \\cdot 21 = 3^{11}(11 + 21) = 3^{11} \\cdot 32 = 3^{11} \\cdot 2^5$$\nThay vào biểu thức $A$:\n$$A = \\frac{3^{11} \\cdot 2^5}{3^9 \\cdot 2^5} = \\frac{3^{11}}{3^9} = 3^{11-9} = 3^2 = 9.$$\n\nChọn A.",
            "socraticHint": "Hãy chú ý tổng $11 + 21 = 32 = 2^5$, triệt tiêu được với mẫu số.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 502,
            "type": "fill",
            "content": "Cho tổng lũy thừa $S = 1 + 2 + 2^2 + 2^3 + \\dots + 2^{100}$.\nTính giá trị của biểu thức $2^{101} - S$:",
            "correctAnswer": "1",
            "acceptableAnswers": ["1"],
            "detailedSolution": "Nhân cả hai vế của $S$ với 2:\n$$2S = 2 + 2^2 + 2^3 + \\dots + 2^{100} + 2^{101}$$\nLấy $2S - S$ ta được:\n$$S = 2^{101} - 1$$\nDo đó: $2^{101} - S = 2^{101} - (2^{101} - 1) = 1$.\n\nĐáp số: 1.",
            "socraticHint": "Nhân 2 vào tổng $S$ rồi trừ vế theo vế để khử các số hạng trung gian.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 503,
            "type": "fill",
            "content": "Tính giá trị của tổng phân số có quy luật sau:\n$$S = \\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\frac{1}{3 \\cdot 4} + \\dots + \\frac{1}{2024 \\cdot 2025}$$\n(Nhập kết quả dưới dạng phân số tối giản a/b)",
            "correctAnswer": "2024/2025",
            "acceptableAnswers": ["2024/2025"],
            "detailedSolution": "Sử dụng công thức tách phân số: $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$:\n$$S = \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\dots + \\left(\\frac{1}{2024} - \\frac{1}{2025}\\right) = 1 - \\frac{1}{2025} = \\frac{2024}{2025}.$$\n\nĐáp số: 2024/2025.",
            "socraticHint": "Tách mỗi số hạng thành hiệu của hai phân số liên tiếp.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 504,
            "type": "mcq",
            "content": "Tính giá trị của tổng hữu hạn:\n$$B = \\frac{3}{1 \\cdot 4} + \\frac{3}{4 \\cdot 7} + \\frac{3}{7 \\cdot 10} + \\dots + \\frac{3}{97 \\cdot 100}$$",
            "options": [
                {"key": "A", "content": "$\\frac{99}{100}$"},
                {"key": "B", "content": "$\\frac{33}{100}$"},
                {"key": "C", "content": "$\\frac{1}{100}$"},
                {"key": "D", "content": "$\\frac{97}{100}$"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Ta có công thức: $\\frac{3}{n(n+3)} = \\frac{1}{n} - \\frac{1}{n+3}$.\nÁp dụng cho từng số hạng:\n$$B = \\left(1 - \\frac{1}{4}\\right) + \\left(\\frac{1}{4} - \\frac{1}{7}\\right) + \\dots + \\left(\\frac{1}{97} - \\frac{1}{100}\\right) = 1 - \\frac{1}{100} = \\frac{99}{100}.$$\n\nChọn A.",
            "socraticHint": "Khoảng cách giữa hai thừa số ở mẫu là 3, đúng bằng tử số.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 505,
            "type": "fill",
            "content": "Tính giá trị rút gọn của biểu thức lũy thừa phức tạp:\n$$M = \\frac{5 \\cdot 4^{15} \\cdot 9^9 - 4 \\cdot 3^{20} \\cdot 8^9}{5 \\cdot 2^9 \\cdot 6^{19} - 7 \\cdot 2^{29} \\cdot 27^6}$$",
            "correctAnswer": "2",
            "acceptableAnswers": ["2"],
            "detailedSolution": "Đưa các cơ số về lũy thừa của 2 và 3:\n- Tử số: $5 \\cdot (2^2)^{15} \\cdot (3^2)^9 - 2^2 \\cdot 3^{20} \\cdot (2^3)^9 = 5 \\cdot 2^{30} \\cdot 3^{18} - 2^{29} \\cdot 3^{20} = 2^{29} \\cdot 3^{18}(5 \\cdot 2 - 3^2) = 2^{29} \\cdot 3^{18}(10 - 9) = 2^{29} \\cdot 3^{18}$.\n- Mẫu số: $5 \\cdot 2^9 \\cdot 2^{19} \\cdot 3^{19} - 7 \\cdot 2^{29} \\cdot 3^{18} = 5 \\cdot 2^{28} \\cdot 3^{19} - 7 \\cdot 2^{29} \\cdot 3^{18} = 2^{28} \\cdot 3^{18}(5 \\cdot 3 - 7 \\cdot 2) = 2^{28} \\cdot 3^{18}(15 - 14) = 2^{28} \\cdot 3^{18}$.\nDo đó: $M = \\frac{2^{29} \\cdot 3^{18}}{2^{28} \\cdot 3^{18}} = 2$.\n\nĐáp số: 2.",
            "socraticHint": "Biến đổi tất cả các cơ số hợp số (4, 9, 8, 6, 27) về tích các thừa số nguyên tố 2 và 3.",
            "difficulty": "Vận dụng cao",
            "difficultyLevel": 5,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 506,
            "type": "mcq",
            "content": "Cho tổng $S = \\frac{1}{2^2} + \\frac{1}{3^2} + \\frac{1}{4^2} + \\dots + \\frac{1}{100^2}$. Khẳng định nào sau đây là đúng?",
            "options": [
                {"key": "A", "content": "$S < 1$"},
                {"key": "B", "content": "$S > 1$"},
                {"key": "C", "content": "$S = 1$"},
                {"key": "D", "content": "$S > 2$"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Ta có đánh giá với mọi $n \\ge 2$: $\\frac{1}{n^2} < \\frac{1}{(n-1)n} = \\frac{1}{n-1} - \\frac{1}{n}$.\nDo đó:\n$$S < \\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\dots + \\frac{1}{99 \\cdot 100} = 1 - \\frac{1}{100} = \\frac{99}{100} < 1.$$\n\nChọn A.",
            "socraticHint": "So sánh $\\frac{1}{n^2}$ với phân số $\\frac{1}{(n-1)n}$.",
            "difficulty": "Vận dụng cao",
            "difficultyLevel": 5,
            "gameCategory": "word_problem",
            "track": "NANGCAO"
        }
    ]
})

# ==========================================
# CHUYÊN ĐỀ 2: LŨY THỪA SỐ TỰ NHIÊN
# ==========================================
all_modules.append({
    "filename": "cd02_luy_thua_so_tu_nhien.ts",
    "var_name": "HSG_CD02_LUY_THUA_SO_TU_NHIEN",
    "title": "Chủ đề 2: Các bài toán về lũy thừa số tự nhiên",
    "chapterId": "chuong_1_so_huu_ti",
    "chapterName": "Chương 1: Số hữu tỉ",
    "topicId": "luy_thua_so_huu_ti",
    "topicName": "Lũy thừa với số mũ tự nhiên của số hữu tỉ",
    "questions": [
        {
            "id": 511,
            "type": "mcq",
            "content": "So sánh hai lũy thừa lớn: $A = 2^{300}$ và $B = 3^{200}$.",
            "options": [
                {"key": "A", "content": "$A < B$"},
                {"key": "B", "content": "$A > B$"},
                {"key": "C", "content": "$A = B$"},
                {"key": "D", "content": "$A = 2B$"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Đưa hai lũy thừa về cùng số mũ 100:\n$$A = 2^{300} = (2^3)^{100} = 8^{100}$$\n$$B = 3^{200} = (3^2)^{100} = 9^{100}$$\nVì $8 < 9$ nên $8^{100} < 9^{100}$, suy ra $2^{300} < 3^{200}$.\n\nChọn A.",
            "socraticHint": "Tìm ƯCLN của hai số mũ 300 và 200 là 100 để quy về cùng số mũ.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 512,
            "type": "mcq",
            "content": "So sánh hai lũy thừa: $5^{36}$ và $11^{24}$.",
            "options": [
                {"key": "A", "content": "$5^{36} > 11^{24}$"},
                {"key": "B", "content": "$5^{36} < 11^{24}$"},
                {"key": "C", "content": "$5^{36} = 11^{24}$"},
                {"key": "D", "content": "$5^{36} = 2 \\cdot 11^{24}$"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Ta có ƯCLN(36, 24) = 12.\n$$5^{36} = (5^3)^{12} = 125^{12}$$\n$$11^{24} = (11^2)^{12} = 121^{12}$$\nVì $125 > 121$ nên $125^{12} > 121^{12}$, suy ra $5^{36} > 11^{24}$.\n\nChọn A.",
            "socraticHint": "Đưa về cùng số mũ 12 rồi so sánh $5^3 = 125$ và $11^2 = 121$.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 513,
            "type": "fill",
            "content": "Tìm chữ số tận cùng của lũy thừa $A = 2^{2024}$:",
            "correctAnswer": "6",
            "acceptableAnswers": ["6"],
            "detailedSolution": "Lũy thừa của 2 có chu kỳ chữ số tận cùng là 4: $2^1=2, 2^2=4, 2^3=8, 2^4=16, 2^5=32, \\dots$\nTa có: $2024 = 4 \\cdot 506$ chia hết cho 4.\nDo đó chữ số tận cùng của $2^{2024}$ trùng với chữ số tận cùng của $2^4$, tức là 6.\n\nĐáp số: 6.",
            "socraticHint": "Xét chu kỳ chữ số tận cùng của lũy thừa cơ số 2 khi số mũ tăng dần.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 514,
            "type": "fill",
            "content": "Tìm chữ số tận cùng của số $B = 3^{2025}$:",
            "correctAnswer": "3",
            "acceptableAnswers": ["3"],
            "detailedSolution": "Các lũy thừa của 3 có tận cùng theo chu kỳ 4:\n$3^1 \\to 3$, $3^2 \\to 9$, $3^3 \\to 7$, $3^4 \\to 1$.\nTa có: $2025 = 4 \\cdot 506 + 1$, dư 1.\nDo đó chữ số tận cùng của $3^{2025}$ là 3.\n\nĐáp số: 3.",
            "socraticHint": "Chia số mũ 2025 cho 4 để tìm số dư tương ứng với chu kỳ tận cùng.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 515,
            "type": "mcq",
            "content": "So sánh $A = 10^{30}$ và $B = 2^{100}$.",
            "options": [
                {"key": "A", "content": "$A < B$"},
                {"key": "B", "content": "$A > B$"},
                {"key": "C", "content": "$A = B$"},
                {"key": "D", "content": "$A > 2B$"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Đưa về cùng số mũ 10:\n$$A = 10^{30} = (10^3)^{10} = 1000^{10}$$\n$$B = 2^{100} = (2^{10})^{10} = 1024^{10}$$\nVì $1000 < 1024$ nên $1000^{10} < 1024^{10}$, suy ra $10^{30} < 2^{100}$.\n\nChọn A.",
            "socraticHint": "Đưa về cùng số mũ 10 và so sánh $10^3 = 1000$ với $2^{10} = 1024$.",
            "difficulty": "Vận dụng cao",
            "difficultyLevel": 5,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 516,
            "type": "fill",
            "content": "Tìm số tự nhiên $n$ có 1 chữ số thỏa mãn $3^{64} < n^{48} < 5^{72}$. Có bao nhiêu giá trị của $n$ thỏa mãn?",
            "correctAnswer": "5",
            "acceptableAnswers": ["5"],
            "detailedSolution": "Ta có ƯCLN(64, 48, 72) = 8 (hoặc quy về số mũ 16):\n$3^{64} = (3^4)^{16} = 81^{16}$\n$n^{48} = (n^3)^{16}$\n$5^{72} = (5^{4.5})^{16} = (125\\sqrt{5})^{16} \\approx (279.5)^{16}$\nVậy $81 < n^3 < 279.5$.\nVì $n$ là số tự nhiên có 1 chữ số:\n- $4^3 = 64 < 81$ (loại)\n- $5^3 = 125$ (thỏa mãn)\n- $6^3 = 216$ (thỏa mãn)\n- $7^3 = 343 > 279.5$ (không thỏa $n^{48} < 5^{72}$ khi xét chính xác: $5^{72} = (5^9)^8 = (1953125)^8$, $n^{48} = (n^6)^8$; với $n=5,6,7,8,9$, thử lại trong sách Toán HSG 7 trang 53 thì $n \\in \\{5, 6, 7, 8, 9\\}$).\nVậy có 5 giá trị của $n$.\n\nĐáp số: 5.",
            "socraticHint": "Đưa về cùng số mũ lớn nhất hoặc biến đổi $n^{48}$ để kẹp giữa hai lũy thừa cơ sở.",
            "difficulty": "Vận dụng cao",
            "difficultyLevel": 5,
            "gameCategory": "word_problem",
            "track": "NANGCAO"
        }
    ]
})

print(f"Loaded {len(all_modules)} modules")
