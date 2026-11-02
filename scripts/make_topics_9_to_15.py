import os
import json

TARGET_DIR = "/home/tontonyuta/Math7-Yuta/src/data/toan7/topics/nangcao_15chuyende"
os.makedirs(TARGET_DIR, exist_ok=True)

modules = []

# ==========================================
# CHUYÊN ĐỀ 9: TỶ LỆ THỨC VÀ DÃY TỈ SỐ BẰNG NHAU
# ==========================================
modules.append({
    "filename": "cd09_ti_le_thuc_day_ti_so.ts",
    "var_name": "HSG_CD09_TI_LE_THUC_DAY_TI_SO",
    "title": "Chủ đề 9: Tỷ lệ thức và dãy tỉ số bằng nhau",
    "chapterId": "chuong_6_ti_le_thuc_va_dai_luong_ti_le",
    "chapterName": "Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ",
    "topicId": "ti_le_thuc_day_ti_so_bang_nhau",
    "topicName": "Tỉ lệ thức & Tính chất của dãy tỉ số bằng nhau",
    "questions": [
        {
            "id": 581,
            "type": "fill",
            "content": "Cho dãy tỉ số bằng nhau $\\frac{x}{2} = \\frac{y}{3} = \\frac{z}{5}$ và $x + y + z = 30$. Tính giá trị của tích $x \\cdot y \\cdot z$:",
            "correctAnswer": "810",
            "acceptableAnswers": ["810"],
            "detailedSolution": "Áp dụng tính chất của dãy tỉ số bằng nhau:\n$$\\frac{x}{2} = \\frac{y}{3} = \\frac{z}{5} = \\frac{x + y + z}{2 + 3 + 5} = \\frac{30}{10} = 3$$\nSuy ra: $x = 2 \\cdot 3 = 6$, $y = 3 \\cdot 3 = 9$, $z = 5 \\cdot 3 = 15$.\nTích $x \\cdot y \\cdot z = 6 \\cdot 9 \\cdot 15 = 810$.\n\nĐáp số: 810.",
            "socraticHint": "Áp dụng công thức $\\frac{x}{a} = \\frac{y}{b} = \\frac{z}{c} = \\frac{x+y+z}{a+b+c}$.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 582,
            "type": "mcq",
            "content": "Cho tỉ lệ thức $\\frac{a}{b} = \\frac{c}{d}$ (với $a, b, c, d \\ne 0, a \\ne c, b \\ne \\pm d$). Đẳng thức nào sau đây luôn đúng?",
            "options": [
                {"key": "A", "content": "$\\frac{a + b}{a - b} = \\frac{c + d}{c - d}$"},
                {"key": "B", "content": "$\\frac{a - b}{c - d} = \\frac{c}{a}$"},
                {"key": "C", "content": "$\\frac{a + c}{b + d} = \\frac{ab}{cd}$"},
                {"key": "D", "content": "$\\frac{a}{d} = \\frac{b}{c}$"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Đặt $\\frac{a}{b} = \\frac{c}{d} = k \\implies a = kb, c = kd$.\nThay vào vế trái:\n$$\\frac{a + b}{a - b} = \\frac{kb + b}{kb - b} = \\frac{b(k + 1)}{b(k - 1)} = \\frac{k + 1}{k - 1}$$\nThay vào vế phải:\n$$\\frac{c + d}{c - d} = \\frac{kd + d}{kd - d} = \\frac{d(k + 1)}{d(k - 1)} = \\frac{k + 1}{k - 1}$$\nDo đó hai vế luôn bằng nhau.\n\nChọn A.",
            "socraticHint": "Sử dụng phương pháp đặt ẩn phụ $k = a/b = c/d$.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 583,
            "type": "fill",
            "content": "Cho dãy tỉ số bằng nhau: $\\frac{2a+b+c+d}{a} = \\frac{a+2b+c+d}{b} = \\frac{a+b+2c+d}{c} = \\frac{a+b+c+2d}{d}$.\nTính giá trị biểu thức $P = \\frac{a+b}{c+d} + \\frac{b+c}{d+a} + \\frac{c+d}{a+b} + \\frac{d+a}{b+c}$ khi $a+b+c+d \\ne 0$:",
            "correctAnswer": "4",
            "acceptableAnswers": ["4"],
            "detailedSolution": "Trừ 1 vào mỗi tỉ số trong dãy:\n$$\\frac{2a+b+c+d}{a} - 1 = \\frac{a+b+c+d}{a}$$\nTương tự cho các tỉ số còn lại:\n$$\\frac{a+b+c+d}{a} = \\frac{a+b+c+d}{b} = \\frac{a+b+c+d}{c} = \\frac{a+b+c+d}{d}$$\nVì $a+b+c+d \\ne 0$ nên $a = b = c = d$.\nKhi đó:\n$$P = \\frac{2a}{2a} + \\frac{2a}{2a} + \\frac{2a}{2a} + \\frac{2a}{2a} = 1 + 1 + 1 + 1 = 4.$$\n\nĐáp số: 4.",
            "socraticHint": "Trừ 1 vào mỗi tỉ số để xuất hiện tử số chung $a+b+c+d$.",
            "difficulty": "Vận dụng cao",
            "difficultyLevel": 5,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 584,
            "type": "fill",
            "content": "Cho $\\frac{x}{3} = \\frac{y}{4}$ và $x^2 + y^2 = 100$. Tìm tích $x \\cdot y$ biết $x, y > 0$:",
            "correctAnswer": "48",
            "acceptableAnswers": ["48"],
            "detailedSolution": "Đặt $\\frac{x}{3} = \\frac{y}{4} = k$ ($k > 0$ do $x, y > 0$).\nSuy ra: $x = 3k, y = 4k$.\nThay vào biểu thức: $(3k)^2 + (4k)^2 = 9k^2 + 16k^2 = 25k^2 = 100 \\implies k^2 = 4 \\implies k = 2$.\nKhi đó: $x = 3 \\cdot 2 = 6$ và $y = 4 \\cdot 2 = 8$.\nTích $x \\cdot y = 6 \\cdot 8 = 48$.\n\nĐáp số: 48.",
            "socraticHint": "Đặt hệ số tỉ lệ $k$ rồi biểu diễn $x, y$ theo $k$.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 585,
            "type": "fill",
            "content": "Tìm ba số $x, y, z$ biết $2x = 3y = 5z$ và $x + y - z = 95$. Giá trị của $x$ bằng bao nhiêu?",
            "correctAnswer": "75",
            "acceptableAnswers": ["75"],
            "detailedSolution": "Chia các vế cho BCNN(2, 3, 5) = 30:\n$$\\frac{2x}{30} = \\frac{3y}{30} = \\frac{5z}{30} \\iff \\frac{x}{15} = \\frac{y}{10} = \\frac{z}{6}$$\nÁp dụng tính chất dãy tỉ số bằng nhau:\n$$\\frac{x}{15} = \\frac{y}{10} = \\frac{z}{6} = \\frac{x + y - z}{15 + 10 - 6} = \\frac{95}{19} = 5$$\nSuy ra $x = 15 \\cdot 5 = 75$, $y = 10 \\cdot 5 = 50$, $z = 6 \\cdot 5 = 30$.\n\nĐáp số: 75.",
            "socraticHint": "Chia cả ba biểu thức cho BCNN(2, 3, 5) = 30 để đưa về dãy tỉ số bằng nhau.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 586,
            "type": "mcq",
            "content": "Cho $\\frac{a}{b} = \\frac{b}{c} = \\frac{c}{d}$. Đẳng thức nào sau đây luôn đúng?",
            "options": [
                {"key": "A", "content": "$\\left(\\frac{a + b + c}{b + c + d}\\right)^3 = \\frac{a}{d}$"},
                {"key": "B", "content": "$\\frac{a + b + c}{b + c + d} = \\frac{a}{d}$"},
                {"key": "C", "content": "$\\left(\\frac{a + b + c}{b + c + d}\\right)^2 = \\frac{a}{d}$"},
                {"key": "D", "content": "$\\frac{a + b + c}{b + c + d} = \\frac{a^3}{d^3}$"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Áp dụng tính chất dãy tỉ số bằng nhau:\n$$\\frac{a}{b} = \\frac{b}{c} = \\frac{c}{d} = \\frac{a + b + c}{b + c + d}$$\nLập phương cả hai vế:\n$$\\left(\\frac{a + b + c}{b + c + d}\\right)^3 = \\left(\\frac{a}{b}\\right)^3 = \\frac{a}{b} \\cdot \\frac{b}{c} \\cdot \\frac{c}{d} = \\frac{a}{d}.$$\n\nChọn A.",
            "socraticHint": "Tách $(a/b)^3 = (a/b) \\cdot (b/c) \\cdot (c/d)$ rồi rút gọn liên tiếp.",
            "difficulty": "Vận dụng cao",
            "difficultyLevel": 5,
            "gameCategory": "word_problem",
            "track": "NANGCAO"
        }
    ]
})

# ==========================================
# CHUYÊN ĐỀ 10: CÁC BÀI TOÁN VỀ TRỊ TUYỆT ĐỐI
# ==========================================
modules.append({
    "filename": "cd10_tri_tuyet_doi.ts",
    "var_name": "HSG_CD10_TRI_TUYET_DOI",
    "title": "Chủ đề 10: Các bài toán về trị tuyệt đối",
    "chapterId": "chuong_2_so_thuc",
    "chapterName": "Chương 2: Số thực & Căn bậc hai",
    "topicId": "gia_tri_tuyet_doi_so_thuc",
    "topicName": "Giá trị tuyệt đối của một số thực",
    "questions": [
        {
            "id": 591,
            "type": "fill",
            "content": "Tìm số nghiệm của phương trình $|3x - 1| = |x + 5|$:",
            "correctAnswer": "2",
            "acceptableAnswers": ["2"],
            "detailedSolution": "Phương trình $|A| = |B| \\iff A = B$ hoặc $A = -B$.\n- Trường hợp 1: $3x - 1 = x + 5 \\iff 2x = 6 \\iff x = 3$.\n- Trường hợp 2: $3x - 1 = -(x + 5) \\iff 4x = -4 \\iff x = -1$.\nVậy phương trình có đúng 2 nghiệm là $x = 3$ và $x = -1$.\n\nĐáp số: 2.",
            "socraticHint": "Phương trình $|A| = |B|$ tương đương với hai trường hợp $A = B$ hoặc $A = -B$.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 592,
            "type": "mcq",
            "content": "Giải phương trình: $|x - 2| + |x - 4| = 2$. Tập hợp nghiệm của phương trình là:",
            "options": [
                {"key": "A", "content": "$2 \\le x \\le 4$"},
                {"key": "B", "content": "$x = 2$ hoặc $x = 4$"},
                {"key": "C", "content": "$x \\ge 4$"},
                {"key": "D", "content": "$x \\le 2$"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Ta có: $|x - 2| + |x - 4| = |x - 2| + |4 - x| \\ge |(x - 2) + (4 - x)| = 2$.\nDấu \"=\" xảy ra khi và chỉ khi $(x - 2)(4 - x) \\ge 0 \\iff 2 \\le x \\le 4$.\nDo đó phương trình có vô số nghiệm thỏa mãn $2 \\le x \\le 4$.\n\nChọn A.",
            "socraticHint": "Biến đổi $|x - 4| = |4 - x|$ rồi áp dụng bất đẳng thức $|a| + |b| \\ge |a + b|$.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 593,
            "type": "fill",
            "content": "Có bao nhiêu số nguyên $x$ thỏa mãn bất phương trình $|x - 1| + |x - 5| \\le 4$?",
            "correctAnswer": "5",
            "acceptableAnswers": ["5"],
            "detailedSolution": "Ta có $|x - 1| + |x - 5| = |x - 1| + |5 - x| \\ge |x - 1 + 5 - x| = 4$.\nDo đó bất phương trình $|x - 1| + |x - 5| \\le 4$ chỉ có thể đạt được dấu đẳng thức:\n$|x - 1| + |x - 5| = 4 \\iff 1 \\le x \\le 5$.\nCác giá trị nguyên của $x$ thỏa mãn là: $1, 2, 3, 4, 5$ (gồm 5 số nguyên).\n\nĐáp số: 5.",
            "socraticHint": "Bất đẳng thức luôn lớn hơn hoặc bằng 4, do đó dấu $\\le 4$ chỉ xảy ra khi đẳng thức bằng 4.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 594,
            "type": "mcq",
            "content": "Tìm $x$ biết: $|2x - 3| = 3 - 2x$. Điều kiện cần và đủ của $x$ là:",
            "options": [
                {"key": "A", "content": "$x \\le \\frac{3}{2}$"},
                {"key": "B", "content": "$x \\ge \\frac{3}{2}$"},
                {"key": "C", "content": "$x = \\frac{3}{2}$"},
                {"key": "D", "content": "$x < 0$"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Theo định nghĩa giá trị tuyệt đối, $|A| = -A \\iff A \\le 0$.\nỞ đây: $|2x - 3| = -(2x - 3) = 3 - 2x$.\nĐiều này xảy ra khi và chỉ khi $2x - 3 \\le 0 \\iff 2x \\le 3 \\iff x \\le \\frac{3}{2}$.\n\nChọn A.",
            "socraticHint": "Trị tuyệt đối của một biểu thức bằng chính đối của nó khi và chỉ khi biểu thức đó nhỏ hơn hoặc bằng 0.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "word_problem",
            "track": "NANGCAO"
        },
        {
            "id": 595,
            "type": "fill",
            "content": "Số nghiệm của phương trình $|x| + |x + 2| = 0$ là:",
            "correctAnswer": "0",
            "acceptableAnswers": ["0"],
            "detailedSolution": "Vì $|x| \\ge 0$ và $|x + 2| \\ge 0$ với mọi $x$.\nNên tổng của chúng bằng 0 khi và chỉ khi:\n$|x| = 0$ và $|x + 2| = 0 \\iff x = 0$ và $x = -2$ (điều này mâu thuẫn).\nVậy phương trình vô nghiệm (số nghiệm bằng 0).\n\nĐáp số: 0.",
            "socraticHint": "Tổng hai số không âm bằng 0 khi và chỉ khi cả hai số đồng thời bằng 0.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 596,
            "type": "fill",
            "content": "Tìm $x$ biết $2|3x - 1| + 1 = 5$. Nghiệm dương của phương trình là (nhập số nguyên hoặc phân số a/b):",
            "correctAnswer": "1",
            "acceptableAnswers": ["1"],
            "detailedSolution": "Ta có: $2|3x - 1| = 5 - 1 = 4 \\iff |3x - 1| = 2$.\n- $3x - 1 = 2 \\iff 3x = 3 \\iff x = 1$.\n- $3x - 1 = -2 \\iff 3x = -1 \\iff x = -1/3$.\nNghiệm dương là $x = 1$.\n\nĐáp số: 1.",
            "socraticHint": "Chuyển vế tìm giá trị của $|3x - 1| = 2$ rồi giải hai trường hợp.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        }
    ]
})

print("Loaded Modules 9 & 10")
