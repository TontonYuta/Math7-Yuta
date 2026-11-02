import os
import json

TARGET_DIR = "/home/tontonyuta/Math7-Yuta/src/data/toan7/topics/nangcao_15chuyende"
os.makedirs(TARGET_DIR, exist_ok=True)

modules = []

# ==========================================
# CHUYÊN ĐỀ 13: NGUYÊN LÝ DIRICHLET
# ==========================================
modules.append({
    "filename": "cd13_nguyen_ly_dirichlet.ts",
    "var_name": "HSG_CD13_NGUYEN_LY_DIRICHLET",
    "title": "Chủ đề 13: Nguyên lý Dirichlet",
    "chapterId": "chuong_5_thong_ke_thu_thap_du_lieu",
    "chapterName": "Chương 5: Thu thập & Biểu diễn dữ liệu",
    "topicId": "thu_thap_phan_loai_du_lieu",
    "topicName": "Thu thập và phân loại dữ liệu",
    "questions": [
        {
            "id": 621,
            "type": "fill",
            "content": "Nhốt 10 con thỏ vào 3 cái chuồng. Theo nguyên lý Dirichlet, chắc chắn có ít nhất một chuồng chứa không ít hơn bao nhiêu con thỏ?",
            "correctAnswer": "4",
            "acceptableAnswers": ["4"],
            "detailedSolution": "Ta có phép chia: $10 = 3 \\cdot 3 + 1$.\nNếu mỗi chuồng chứa nhiều nhất 3 con thỏ thì tổng số thỏ trong 3 chuồng nhiều nhất là $3 \\cdot 3 = 9 < 10$ con (mâu thuẫn).\nDo đó theo nguyên lý Dirichlet, luôn tồn tại ít nhất một chuồng chứa từ $3 + 1 = 4$ con thỏ trở lên.\n\nĐáp số: 4.",
            "socraticHint": "Lấy 10 chia cho 3 được thương là 3 và dư 1.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "word_problem",
            "track": "NANGCAO"
        },
        {
            "id": 622,
            "type": "fill",
            "content": "Chọn ngẫu nhiên $n$ số tự nhiên bất kỳ. Để chắc chắn luôn tìm được 2 số có cùng số dư khi chia cho 7, giá trị nhỏ nhất của $n$ là bao nhiêu?",
            "correctAnswer": "8",
            "acceptableAnswers": ["8"],
            "detailedSolution": "Khi chia một số tự nhiên cho 7, chỉ có thể nhận 7 số dư khác nhau là $0, 1, 2, 3, 4, 5, 6$ (tương ứng với 7 lồng).\nMỗi số tự nhiên được xem là một \"con thỏ\".\nTheo nguyên lý Dirichlet, để có ít nhất 2 số rơi vào cùng một số dư (cùng 1 lồng), số phần tử cần chọn tối thiểu phải là $7 + 1 = 8$.\n\nĐáp số: 8.",
            "socraticHint": "Có 7 số dư có thể xảy ra khi chia cho 7, số phần tử cần chọn phải nhiều hơn số lồng.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "word_problem",
            "track": "NANGCAO"
        },
        {
            "id": 623,
            "type": "fill",
            "content": "Một lớp học có 40 học sinh. Chắc chắn có ít nhất bao nhiêu học sinh có cùng tháng sinh?",
            "correctAnswer": "4",
            "acceptableAnswers": ["4"],
            "detailedSolution": "Một năm có 12 tháng (tương ứng 12 lồng).\nSố học sinh là 40 (tương ứng 40 con thỏ).\nTa có: $40 = 3 \\cdot 12 + 4$.\nTheo nguyên lý Dirichlet, luôn tồn tại ít nhất một tháng có không ít hơn $3 + 1 = 4$ học sinh có cùng tháng sinh.\n\nĐáp số: 4.",
            "socraticHint": "Chia 40 học sinh cho 12 tháng trong một năm.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "word_problem",
            "track": "NANGCAO"
        },
        {
            "id": 624,
            "type": "mcq",
            "content": "Cho 5 số tự nhiên bất kỳ. Khẳng định nào sau đây luôn đúng theo nguyên lý Dirichlet?",
            "options": [
                {"key": "A", "content": "Luôn tồn tại hai số có hiệu chia hết cho 4"},
                {"key": "B", "content": "Luôn tồn tại hai số có tổng chia hết cho 5"},
                {"key": "C", "content": "Tất cả 5 số đều là số lẻ"},
                {"key": "D", "content": "Tích của 5 số luôn chia hết cho 10"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Khi chia một số cho 4, chỉ có 4 khả năng số dư là 0, 1, 2, 3.\nCó 5 số tự nhiên mà chỉ có 4 số dư khác nhau, theo nguyên lý Dirichlet luôn tồn tại ít nhất hai số có cùng số dư khi chia cho 4.\nHiệu của hai số có cùng số dư khi chia cho 4 luôn chia hết cho 4.\n\nChọn A.",
            "socraticHint": "Xét các số dư khi chia cho 4 (có 4 số dư) và số lượng số được chọn (5 số).",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "word_problem",
            "track": "NANGCAO"
        },
        {
            "id": 625,
            "type": "fill",
            "content": "Lấy 5 điểm bất kỳ bên trong một tam giác đều có cạnh bằng 1. Theo nguyên lý Dirichlet, luôn tồn tại 2 điểm có khoảng cách không vượt quá bao nhiêu? (Nhập số thập phân, ví dụ 0.5):",
            "correctAnswer": "0.5",
            "acceptableAnswers": ["0.5", "1/2"],
            "detailedSolution": "Nối trung điểm các cạnh của tam giác đều, tam giác ban đầu được chia thành 4 tam giác đều nhỏ bằng nhau, mỗi tam giác có cạnh bằng $1/2 = 0.5$.\nCó 5 điểm đặt vào 4 tam giác nhỏ, theo nguyên lý Dirichlet luôn có ít nhất 2 điểm cùng nằm trong (hoặc trên cạnh) của cùng một tam giác nhỏ.\nKhoảng cách giữa hai điểm bất kỳ trong tam giác đều cạnh 0.5 không vượt quá độ dài cạnh của nó, tức là không vượt quá 0.5.\n\nĐáp số: 0.5.",
            "socraticHint": "Chia tam giác đều cạnh 1 thành 4 tam giác đều nhỏ bằng cách nối trung điểm các cạnh.",
            "difficulty": "Vận dụng cao",
            "difficultyLevel": 5,
            "gameCategory": "word_problem",
            "track": "NANGCAO"
        },
        {
            "id": 626,
            "type": "mcq",
            "content": "Trong một hội nghị có 10 người tham dự, mỗi người đều bắt tay với một số người khác. Khẳng định nào sau đây luôn đúng?",
            "options": [
                {"key": "A", "content": "Luôn tồn tại ít nhất 2 người có số cái bắt tay bằng nhau"},
                {"key": "B", "content": "Mọi người đều có số cái bắt tay khác nhau"},
                {"key": "C", "content": "Tất cả mọi người đều bắt tay đúng 9 lần"},
                {"key": "D", "content": "Tổng số cái bắt tay là số lẻ"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Mỗi người có thể bắt tay từ 0 đến 9 người khác (có 10 khả năng: $0, 1, \\dots, 9$).\nTuy nhiên không thể đồng thời có người bắt tay 0 người (chưa bắt tay ai) và người bắt tay 9 người (đã bắt tay tất cả mọi người).\nDo đó chỉ có thể có tối đa 9 khả năng số cái bắt tay.\nCó 10 người mà chỉ có 9 giá trị, theo nguyên lý Dirichlet luôn có ít nhất 2 người có cùng số cái bắt tay.\n\nChọn A.",
            "socraticHint": "Người bắt tay 0 người và người bắt tay 9 người không thể cùng tồn tại.",
            "difficulty": "Vận dụng cao",
            "difficultyLevel": 5,
            "gameCategory": "word_problem",
            "track": "NANGCAO"
        }
    ]
})

# ==========================================
# CHUYÊN ĐỀ 14: CÁC CHUYÊN ĐỀ HÌNH HỌC NÂNG CAO
# ==========================================
modules.append({
    "filename": "cd14_hinh_hoc_nang_cao.ts",
    "var_name": "HSG_CD14_HINH_HOC_NANG_CAO",
    "title": "Chủ đề 14: Các chuyên đề hình học nâng cao",
    "chapterId": "chuong_3_goc_va_duong_thang_song_song",
    "chapterName": "Chương 3: Góc & Đường thẳng song song",
    "topicId": "goc_doi_dinh_ke_bu_phan_giac",
    "topicName": "Góc ở vị trí đặc biệt & Tia phân giác của một góc",
    "questions": [
        {
            "id": 631,
            "type": "fill",
            "content": "Cho tam giác $ABC$ có $\\widehat{A} = 60^\\circ$. Hai tia phân giác của góc $B$ và góc $C$ cắt nhau tại điểm $I$. Tính số đo của góc $\\widehat{BIC}$ (độ):",
            "correctAnswer": "120",
            "acceptableAnswers": ["120"],
            "detailedSolution": "Trong tam giác $ABC$, ta có:\n$$\\widehat{B} + \\widehat{C} = 180^\\circ - \\widehat{A} = 180^\\circ - 60^\\circ = 120^\\circ$$\nVì $BI$ và $CI$ là các tia phân giác nên:\n$$\\widehat{IBC} + \\widehat{ICB} = \\frac{\\widehat{B} + \\widehat{C}}{2} = \\frac{120^\\circ}{2} = 60^\\circ$$\nTrong tam giác $IBC$:\n$$\\widehat{BIC} = 180^\\circ - (\\widehat{IBC} + \\widehat{ICB}) = 180^\\circ - 60^\\circ = 120^\\circ.$$\n\nĐáp số: 120.",
            "socraticHint": "Sử dụng công thức tính góc tạo bởi hai phân giác trong: $\\widehat{BIC} = 90^\\circ + \\frac{\\widehat{A}}{2}$.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 632,
            "type": "fill",
            "content": "Cho hai đường thẳng song song $Ax$ và $By$. Điểm $C$ nằm giữa hai đường thẳng sao cho tia $Ax$ và $By$ cùng hướng về bên phải. Biết $\\widehat{xAC} = 30^\\circ$ và $\\widehat{yBC} = 40^\\circ$. Tính số đo của góc $\\widehat{ACB}$ (độ):",
            "correctAnswer": "70",
            "acceptableAnswers": ["70"],
            "detailedSolution": "Qua điểm $C$ kẻ tia $Cz // Ax // By$ hướng về bên phải.\n- Vì $Cz // Ax$ nên $\\widehat{ACz} = \\widehat{xAC} = 30^\\circ$ (hai góc so le trong).\n- Vì $Cz // By$ nên $\\widehat{BCz} = \\widehat{yBC} = 40^\\circ$ (hai góc so le trong).\nTia $Cz$ nằm giữa hai tia $CA$ và $CB$, do đó:\n$$\\widehat{ACB} = \\widehat{ACz} + \\widehat{BCz} = 30^\\circ + 40^\\circ = 70^\\circ.$$\n\nĐáp số: 70.",
            "socraticHint": "Kẻ đường phụ qua $C$ song song với $Ax$ và $By$ rồi áp dụng tính chất so le trong.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "word_problem",
            "track": "NANGCAO"
        },
        {
            "id": 633,
            "type": "fill",
            "content": "Cho tam giác vuông $ABC$ vuông tại $A$ có $\\widehat{B} = 30^\\circ$ và cạnh huyền $BC = 12\\text{ cm}$. Độ dài cạnh góc vuông $AC$ bằng bao nhiêu cm?",
            "correctAnswer": "6",
            "acceptableAnswers": ["6"],
            "detailedSolution": "Trong một tam giác vuông, cạnh đối diện với góc $30^\\circ$ luôn có độ dài bằng một nửa độ dài cạnh huyền.\nỞ đây cạnh $AC$ đối diện với góc $\\widehat{B} = 30^\\circ$, nên:\n$$AC = \\frac{BC}{2} = \\frac{12}{2} = 6\\text{ cm}.$$\n\nĐáp số: 6.",
            "socraticHint": "Góc $30^\\circ$ trong tam giác vuông có tính chất đặc biệt: cạnh đối diện bằng nửa cạnh huyền.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 634,
            "type": "fill",
            "content": "Cho tam giác $ABC$ có $\\widehat{A} = 80^\\circ$. Hai tia phân giác ngoài tại đỉnh $B$ và đỉnh $C$ cắt nhau tại điểm $K$. Tính số đo của góc $\\widehat{BKC}$ (độ):",
            "correctAnswer": "50",
            "acceptableAnswers": ["50"],
            "detailedSolution": "Góc tạo bởi hai tia phân giác ngoài tại hai đỉnh $B$ và $C$ được tính bằng công thức:\n$$\\widehat{BKC} = 90^\\circ - \\frac{\\widehat{A}}{2}$$\nThay số: $\\widehat{BKC} = 90^\\circ - \\frac{80^\\circ}{2} = 90^\\circ - 40^\\circ = 50^\\circ$.\n\nĐáp số: 50.",
            "socraticHint": "Công thức góc tạo bởi hai tia phân giác của hai góc ngoài: $\\widehat{BKC} = 90^\\circ - \\frac{\\widehat{A}}{2}$.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 635,
            "type": "mcq",
            "content": "Cho tam giác $ABC$ cân tại $A$. Khẳng định nào sau đây luôn đúng?",
            "options": [
                {"key": "A", "content": "Đường trung tuyến xuất phát từ đỉnh A đồng thời là đường cao, đường phân giác và đường trung trực"},
                {"key": "B", "content": "Cả ba góc của tam giác luôn bằng $60^\\circ$"},
                {"key": "C", "content": "Độ dài ba cạnh luôn bằng nhau"},
                {"key": "D", "content": "Trực tâm luôn nằm ngoài tam giác"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Trong tam giác cân, đường phân giác, đường trung tuyến, đường cao và đường trung trực xuất phát từ đỉnh đối diện với cạnh đáy trùng nhau.\n\nChọn A.",
            "socraticHint": "Đặc trưng hình học của đường xuất phát từ đỉnh của tam giác cân.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "word_problem",
            "track": "NANGCAO"
        },
        {
            "id": 636,
            "type": "fill",
            "content": "Cho tam giác $ABC$ vuông cân tại $A$. Độ lớn của góc nhọn $\\widehat{B}$ bằng bao nhiêu độ?",
            "correctAnswer": "45",
            "acceptableAnswers": ["45"],
            "detailedSolution": "Vì tam giác $ABC$ vuông cân tại $A$ nên $\\widehat{A} = 90^\\circ$ và hai góc đáy bằng nhau:\n$$\\widehat{B} = \\widehat{C} = \\frac{180^\\circ - 90^\\circ}{2} = 45^\\circ.$$\n\nĐáp số: 45.",
            "socraticHint": "Tam giác vuông cân có hai góc đáy nhọn bằng nhau.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        }
    ]
})

# ==========================================
# CHUYÊN ĐỀ 15: HÌNH HỌC TỪ ĐỀ HỌC SINH GIỎI
# ==========================================
modules.append({
    "filename": "cd15_hinh_hoc_de_hsg.ts",
    "var_name": "HSG_CD15_HINH_HOC_DE_HSG",
    "title": "Chủ đề 15: Các bài toán nâng cao hình học từ đề học sinh giỏi",
    "chapterId": "chuong_9_quan_he_trong_tam_giac_dong_quy",
    "chapterName": "Chương 9: Quan hệ trong tam giác & Sự đồng quy",
    "topicId": "bon_duong_dong_quy_trong_tam_giac",
    "topicName": "Sự đồng quy của các đường trong tam giác",
    "questions": [
        {
            "id": 641,
            "type": "fill",
            "content": "Cho tam giác $ABC$ có $AB = 3\\text{ cm}$ và $AC = 7\\text{ cm}$. Biết độ dài cạnh $BC$ là một số nguyên (cm). Hỏi cạnh $BC$ có thể nhận bao nhiêu giá trị nguyên khác nhau?",
            "correctAnswer": "5",
            "acceptableAnswers": ["5"],
            "detailedSolution": "Theo bất đẳng thức tam giác, độ dài cạnh $BC$ thỏa mãn:\n$$AC - AB < BC < AC + AB \\iff 7 - 3 < BC < 7 + 3 \\iff 4 < BC < 10$$\nVì $BC$ là số nguyên nên $BC \\in \\{5, 6, 7, 8, 9\\}$.\nVậy có đúng 5 giá trị nguyên của $BC$.\n\nĐáp số: 5.",
            "socraticHint": "Bất đẳng thức tam giác: Hiệu hai cạnh < cạnh thứ ba < Tổng hai cạnh.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 642,
            "type": "mcq",
            "content": "Cho tam giác $ABC$ có ba đường trung tuyến $AM, BN, CP$ cắt nhau tại trọng tâm $G$. Khẳng định nào sau đây về tỉ lệ đoạn thẳng là chính xác?",
            "options": [
                {"key": "A", "content": "$AG = \\frac{2}{3}AM$ và $GM = \\frac{1}{3}AM$"},
                {"key": "B", "content": "$AG = \\frac{1}{2}AM$"},
                {"key": "C", "content": "$GM = \\frac{2}{3}AM$"},
                {"key": "D", "content": "$AG = 2GM$ và $AM = 4GM$"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Theo tính chất ba đường trung tuyến của tam giác, trọng tâm $G$ cách mỗi đỉnh một khoảng bằng $2/3$ độ dài đường trung tuyến đi qua đỉnh đó:\n$$AG = \\frac{2}{3}AM, \\quad GM = \\frac{1}{3}AM, \\quad AG = 2GM.$$\n\nChọn A.",
            "socraticHint": "Trọng tâm chia mỗi đường trung tuyến theo tỉ lệ 2 : 1 tính từ đỉnh.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "word_problem",
            "track": "NANGCAO"
        },
        {
            "id": 643,
            "type": "fill",
            "content": "Cho tam giác đều $ABC$ cạnh bằng 6 cm. Gọi $O$ là giao điểm ba đường trung trực và $H$ là trực tâm của tam giác. Khoảng cách giữa điểm $O$ và điểm $H$ bằng bao nhiêu cm?",
            "correctAnswer": "0",
            "acceptableAnswers": ["0"],
            "detailedSolution": "Trong tam giác đều, bốn điểm đặc biệt gồm: trọng tâm, trực tâm, điểm cách đều ba đỉnh (giao ba đường trung trực) và tâm đường tròn nội tiếp (giao ba đường phân giác) trùng nhau tại một điểm.\nDo đó điểm $O$ trùng với điểm $H$, khoảng cách giữa chúng bằng 0 cm.\n\nĐáp số: 0.",
            "socraticHint": "Trong tam giác đều, trực tâm và giao điểm ba đường trung trực có vị trí như thế nào?",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "arithmetic",
            "track": "NANGCAO"
        },
        {
            "id": 644,
            "type": "fill",
            "content": "Cho tam giác $ABC$ cân tại $A$ có $\\widehat{A} = 20^\\circ$. Trên cạnh $AC$ lấy điểm $D$ sao cho $AD = BC$. Dựng tam giác đều phụ $BCE$ sao cho $E$ và $A$ cùng phía đối với $BC$. Tính số đo của góc $\\widehat{BDC}$ (độ):",
            "correctAnswer": "30",
            "acceptableAnswers": ["30"],
            "detailedSolution": "Dựng tam giác đều $BCE$ ($E$ và $A$ cùng phía đối với $BC$).\nKhi đó $BE = CE = BC = AD$, và $\\widehat{EBC} = 60^\\circ$.\nVì tam giác $ABC$ cân tại $A$ có $\\widehat{A} = 20^\\circ$ nên $\\widehat{ABC} = \\widehat{ACB} = 80^\\circ$.\nSuy ra $\\widehat{ABE} = 80^\\circ - 60^\\circ = 20^\\circ = \\widehat{A}$.\nChứng minh $\\Delta ABE = \\Delta ACE$ (c-c-c) $\\implies \\widehat{BAE} = \\widehat{CAE} = 10^\\circ$, và $\\Delta BAD = \\Delta EBA$ (c-g-c).\nTừ đó suy ra $\\widehat{BDA} = 150^\\circ \\implies \\widehat{BDC} = 180^\\circ - 150^\\circ = 30^\\circ$.\n\nĐáp số: 30.",
            "socraticHint": "Phương pháp kẻ đường phụ: Dựng tam giác đều phụ trên cạnh $BC$.",
            "difficulty": "Vận dụng cao",
            "difficultyLevel": 5,
            "gameCategory": "word_problem",
            "track": "NANGCAO"
        },
        {
            "id": 645,
            "type": "mcq",
            "content": "Điểm cách đều ba cạnh của một tam giác là giao điểm của ba đường nào sau đây?",
            "options": [
                {"key": "A", "content": "Ba đường phân giác trong"},
                {"key": "B", "content": "Ba đường trung trực"},
                {"key": "C", "content": "Ba đường trung tuyến"},
                {"key": "D", "content": "Ba đường cao"}
            ],
            "correctAnswer": "A",
            "detailedSolution": "Giao điểm của ba đường phân giác trong của tam giác có tính chất cách đều ba cạnh của tam giác đó (tâm đường tròn nội tiếp).\n\nChọn A.",
            "socraticHint": "Điểm nằm trên tia phân giác của một góc thì cách đều hai cạnh của góc đó.",
            "difficulty": "Vận dụng",
            "difficultyLevel": 4,
            "gameCategory": "word_problem",
            "track": "NANGCAO"
        },
        {
            "id": 646,
            "type": "fill",
            "content": "Cho tam giác $ABC$ vuông cân tại $A$. Điểm $M$ nằm trong tam giác sao cho $MA = 2\\text{ cm}, MB = 1\\text{ cm}, \\widehat{AMB} = 135^\\circ$. Bằng phương pháp vẽ tam giác vuông cân phụ $AMN$ vuông cân tại $A$, tính độ dài cạnh $MC$ (cm):",
            "correctAnswer": "3",
            "acceptableAnswers": ["3"],
            "detailedSolution": "Dựng tam giác $AMN$ vuông cân tại $A$ ($N$ khác phía với $B$ qua $AM$).\nKhi đó $AN = AM = 2\\text{ cm}$, và $MN = \\sqrt{2^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}\\text{ cm}$.\nTa có $\\Delta ABM = \\Delta ACN$ (c-g-c) $\\implies CN = BM = 1\\text{ cm}$.\nTa có $\\widehat{ANM} = 45^\\circ$ và $\\widehat{ANC} = \\widehat{AMB} = 135^\\circ$.\nSuy ra $\\widehat{MNC} = \\widehat{ANC} - \\widehat{ANM} = 135^\\circ - 45^\\circ = 90^\\circ$.\nÁp dụng định lý Pythagore trong tam giác vuông $MNC$:\n$$MC = \\sqrt{MN^2 + NC^2} = \\sqrt{8 + 1^2} = \\sqrt{9} = 3\\text{ cm}.$$\n\nĐáp số: 3.",
            "socraticHint": "Dựng tam giác vuông cân phụ $AMN$ vuông tại $A$ để sử dụng định lý Pythagore.",
            "difficulty": "Vận dụng cao",
            "difficultyLevel": 5,
            "gameCategory": "word_problem",
            "track": "NANGCAO"
        }
    ]
})

print("Loaded Modules 13, 14, 15")
