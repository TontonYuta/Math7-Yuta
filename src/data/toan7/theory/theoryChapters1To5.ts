import { TheoryScroll } from './theoryTypes';

export const THEORY_CHAPTERS_1_TO_5: Record<string, TheoryScroll> = {
  chuong_1_so_huu_ti: {
    id: 'chuong_1_so_huu_ti',
    chapterId: 'chuong_1_so_huu_ti',
    chapterName: 'Chương 1: Số hữu tỉ',
    title: 'Bí Kíp Số Hữu Tỉ & Lũy Thừa Tự Nhiên',
    onePieceTheme: 'Hải Trình Biển Đông • East Blue',
    summary: 'Nắm vững định nghĩa số hữu tỉ a/b, 4 phép tính, quy tắc dấu ngoặc, chuyển vế và công thức lũy thừa nâng cao.',
    coreFormulas: [
      {
        name: 'Định nghĩa số hữu tỉ',
        latex: '$$x = \\frac{a}{b} \\quad (a, b \\in \\mathbb{Z}, b \\ne 0)$$',
        explanation: 'Mọi số hữu tỉ đều viết được dưới dạng phân số tối giản a/b.',
      },
      {
        name: 'Nhân & Chia hai lũy thừa cùng cơ số',
        latex: '$$x^m \\cdot x^n = x^{m+n}, \\quad x^m : x^n = x^{m-n} \\ (x \\ne 0, m \\ge n)$$',
      },
      {
        name: 'Lũy thừa của lũy thừa & một tích, một thương',
        latex: '$$(x^m)^n = x^{m \\cdot n}, \\quad (x \\cdot y)^n = x^n \\cdot y^n, \\quad \\left(\\frac{x}{y}\\right)^n = \\frac{x^n}{y^n}$$',
      },
      {
        name: 'Công thức tách dãy phân số vi phân (Bí kíp HSG)',
        latex: '$$\\frac{k}{n(n+k)} = \\frac{1}{n} - \\frac{1}{n+k}$$',
        explanation: 'Áp dụng tính nhanh tổng dãy phân số có khoảng cách ở mẫu bằng tử số.',
      },
    ],
    keyRules: [
      'Quy tắc chuyển vế: Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải đổi dấu số hạng đó (+ thành -, - thành +).',
      'Quy tắc bỏ dấu ngoặc: Đằng trước có dấu "+" giữ nguyên dấu các số hạng trong ngoặc; đằng trước có dấu "-" đổi dấu tất cả số hạng (+ thành -, - thành +).',
      'Thứ tự thực hiện: Lũy thừa -> Nhân & Chia -> Cộng & Trừ; Trong ngoặc tròn () -> Ngoặc vuông [] -> Ngoặc nhọn {}.',
    ],
    hsgProTips: [
      'Để so sánh hai lũy thừa lớn, hãy đưa về cùng cơ số (phân tích ra thừa số nguyên tố) hoặc cùng số mũ (tìm ƯCLN của các số mũ).',
      'Tính tổng dãy lũy thừa $S = 1 + a + a^2 + \\dots + a^n$: Hãy nhân cả hai vế với cơ số $a$ rồi tính hiệu $aS - S = a^{n+1} - 1$.',
    ],
  },

  chuong_2_so_thuc: {
    id: 'chuong_2_so_thuc',
    chapterId: 'chuong_2_so_thuc',
    chapterName: 'Chương 2: Số thực & Căn bậc hai',
    title: 'Bí Kíp Số Thực & Giá Trị Tuyệt Đối',
    onePieceTheme: 'Vương Quốc Sa Mạc • Alabasta',
    summary: 'Bản chất số vô tỉ, căn bậc hai số học và các bất đẳng thức kinh điển liên quan đến giá trị tuyệt đối.',
    coreFormulas: [
      {
        name: 'Căn bậc hai số học',
        latex: '$$\\sqrt{a} = x \\iff x \\ge 0 \\ \\text{và} \\ x^2 = a \\quad (a \\ge 0)$$',
        explanation: 'Số âm không có căn bậc hai số học.',
      },
      {
        name: 'Tính chất giá trị tuyệt đối',
        latex: '$$|x| \\ge 0, \\quad |-x| = |x|, \\quad |x|^2 = x^2, \\quad |x| \\ge x$$',
      },
      {
        name: 'Bất đẳng thức trị tuyệt đối (Tam giác đại số)',
        latex: '$$|a| + |b| \\ge |a + b| \\quad (\\text{Dấu \"=\" xảy ra} \\iff a \\cdot b \\ge 0)$$',
        explanation: 'Cực kỳ lợi hại khi tìm giá trị nhỏ nhất của biểu thức chứa x.',
      },
      {
        name: 'Tìm x trong trị tuyệt đối',
        latex: '$$|A| = B \\ (B \\ge 0) \\iff A = B \\ \\text{hoặc} \\ A = -B$$',
      },
    ],
    keyRules: [
      'Tập số thực R = Q (hữu tỉ) hợp I (vô tỉ). Số vô tỉ viết được dưới dạng số thập phân vô hạn không tuần hoàn.',
      'Quy tắc làm tròn: Nếu chữ số đầu tiên bỏ đi < 5 thì giữ nguyên; nếu >= 5 thì cộng thêm 1 vào chữ số cuối cùng giữ lại.',
    ],
    hsgProTips: [
      'Phương trình $|x - a| + |x - b| = b - a$ (với $a < b$): Luôn có tập nghiệm là đoạn thẳng $a \\le x \\le b$.',
      'Tìm GTNN của $P = |x - a| + |x - b|$: Đổi dấu $|x - b| = |b - x|$ để triệt tiêu biến $x$, suy ra $P \\ge b - a$.',
    ],
  },

  chuong_3_goc_va_duong_thang_song_song: {
    id: 'chuong_3_goc_va_duong_thang_song_song',
    chapterId: 'chuong_3_goc_va_duong_thang_song_song',
    chapterName: 'Chương 3: Góc & Đường thẳng song song',
    title: 'Bí Kíp Góc & Định Lý Song Song',
    onePieceTheme: 'Đảo Trên Trời • Skypiea',
    summary: 'Quan hệ góc đối đỉnh, kề bù, phân giác và các dấu hiệu nhận biết hai đường thẳng song song qua tiên đề Euclid.',
    coreFormulas: [
      {
        name: 'Hai góc đối đỉnh & Kề bù',
        latex: '$$\\widehat{O_1} = \\widehat{O_2} \\ (\\text{đối đỉnh}), \\quad \\widehat{A_1} + \\widehat{A_2} = 180^\\circ \\ (\\text{kề bù})$$',
      },
      {
        name: 'Tính chất hai đường thẳng song song',
        latex: '$$a // b \\implies \\widehat{A_1} = \\widehat{B_1} \\ (\\text{so le}), \\quad \\widehat{A_1} = \\widehat{B_2} \\ (\\text{đồng vị}), \\quad \\widehat{A_1} + \\widehat{B_3} = 180^\\circ \\ (\\text{trong cùng phía})$$',
      },
      {
        name: 'Góc tạo bởi hai tia phân giác kề bù',
        latex: '$$\\text{Tia phân giác của 2 góc kề bù luôn vuông góc}: \\widehat{xOz} = 90^\\circ$$',
      },
    ],
    keyRules: [
      'Tiên đề Euclid: Qua một điểm ở ngoài một đường thẳng chỉ có một đường thẳng song song với đường thẳng đó.',
      'Từ vuông góc đến song song: Hai đường thẳng phân biệt cùng vuông góc với đường thẳng thứ ba thì chúng song song với nhau.',
    ],
    hsgProTips: [
      'Phương pháp kẻ đường phụ: Khi tính góc nhọn/tù bị gãy khúc giữa hai đường thẳng song song, hãy kẻ thêm đường thẳng phụ đi qua đỉnh góc và song song với hai đường đã cho.',
    ],
  },

  chuong_4_tam_giac_bang_nhau: {
    id: 'chuong_4_tam_giac_bang_nhau',
    chapterId: 'chuong_4_tam_giac_bang_nhau',
    chapterName: 'Chương 4: Tam giác bằng nhau',
    title: 'Bí Kíp Các Trường Hợp Tam Giác Bằng Nhau',
    onePieceTheme: 'Tòa Án Tư Pháp • Enies Lobby',
    summary: 'Hệ thống 3 trường hợp bằng nhau tam giác thường và 4 trường hợp đặc biệt tam giác vuông, tam giác cân, đều.',
    coreFormulas: [
      {
        name: 'Tổng ba góc của một tam giác',
        latex: '$$\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ$$',
        explanation: 'Góc ngoài tại một đỉnh bằng tổng hai góc trong không kề với nó.',
      },
      {
        name: 'Tam giác vuông góc 30 độ (Định lý vàng)',
        latex: '$$\\text{Trong } \\Delta ABC \\ (\\widehat{A} = 90^\\circ, \\widehat{B} = 30^\\circ) \\implies AC = \\frac{BC}{2}$$',
        explanation: 'Cạnh góc vuông đối diện góc 30 độ luôn bằng nửa cạnh huyền.',
      },
      {
        name: 'Góc đáy tam giác cân',
        latex: '$$\\widehat{B} = \\widehat{C} = \\frac{180^\\circ - \\widehat{A}}{2}, \\quad \\widehat{A} = 180^\\circ - 2\\widehat{B}$$',
      },
    ],
    keyRules: [
      '3 trường hợp tam giác thường: Cạnh - Cạnh - Cạnh (c-c-c), Cạnh - Góc - Cạnh (c-g-c, góc xen giữa), Góc - Cạnh - Góc (g-c-g, cạnh xen giữa).',
      'Tam giác vuông: Cạnh huyền - Góc nhọn, Cạnh huyền - Cạnh góc vuông, Hai cạnh góc vuông.',
      'Trong tam giác cân: Đường phân giác, đường trung tuyến, đường cao và trung trực kẻ từ đỉnh trùng nhau.',
    ],
    hsgProTips: [
      'Kẻ đường phụ dựng tam giác đều: Với bài toán có góc 20 độ hoặc 80 độ cân, dựng thêm một tam giác đều phụ trên cạnh đáy để tạo ra các tam giác bằng nhau.',
    ],
  },

  chuong_5_thong_ke_thu_thap_du_lieu: {
    id: 'chuong_5_thong_ke_thu_thap_du_lieu',
    chapterId: 'chuong_5_thong_ke_thu_thap_du_lieu',
    chapterName: 'Chương 5: Thu thập & Biểu diễn dữ liệu',
    title: 'Bí Kíp Thống Kê & Nguyên Lý Dirichlet',
    onePieceTheme: 'Quần Đảo Bong Bóng • Sabaody',
    summary: 'Phân tích bảng tần số, biểu đồ hình quạt tròn, biểu đồ đoạn thẳng và tuyệt kỹ logic nguyên lý Dirichlet.',
    coreFormulas: [
      {
        name: 'Tỉ lệ góc trên biểu đồ hình quạt tròn',
        latex: '$$\\text{Số đo góc} = \\frac{p\\%}{100\\%} \\cdot 360^\\circ$$',
        explanation: 'Toàn bộ hình tròn biểu thị 100% tương ứng với 360 độ.',
      },
      {
        name: 'Nguyên lý Dirichlet (Nguyên lý chuồng bồ câu)',
        latex: '$$\\text{Nhốt } m \\text{ thỏ vào } k \\text{ lồng } (m > k) \\implies \\exists \\ge 1 \\text{ lồng chứa } \\ge \\left\\lceil \\frac{m}{k} \\right\\rceil \\text{ thỏ}$$',
      },
    ],
    keyRules: [
      'Dữ liệu số (định lượng): Chiều cao, cân nặng, điểm số, nhiệt độ. Dữ liệu không là số (định tính): Màu sắc, xếp loại, sở thích.',
      'Tính hợp lý của dữ liệu: Tỉ lệ phần trăm tổng các thành phần phải bằng đúng 100%.',
    ],
    hsgProTips: [
      'Trong $n + 1$ số tự nhiên bất kỳ luôn tìm được ít nhất 2 số có cùng số dư khi chia cho $n$, tức hiệu của chúng chia hết cho $n$.',
    ],
  },
};
