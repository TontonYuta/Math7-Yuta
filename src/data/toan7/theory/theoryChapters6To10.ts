import { TheoryScroll } from './theoryTypes';

export const THEORY_CHAPTERS_6_TO_10: Record<string, TheoryScroll> = {
  chuong_6_ti_le_thuc_va_dai_luong_ti_le: {
    id: 'chuong_6_ti_le_thuc_va_dai_luong_ti_le',
    chapterId: 'chuong_6_ti_le_thuc_va_dai_luong_ti_le',
    chapterName: 'Chương 6: Tỉ lệ thức & Đại lượng tỉ lệ',
    title: 'Bí Kíp Dãy Tỉ Số Bằng Nhau',
    onePieceTheme: 'Ngục Đại Hải Trình • Impel Down',
    summary: 'Định nghĩa tỉ lệ thức, tích trung tỉ bằng tích ngoại tỉ, tính chất dãy tỉ số bằng nhau và đại lượng tỉ lệ.',
    coreFormulas: [
      {
        name: 'Tính chất cơ bản tỉ lệ thức',
        latex: '$$\\frac{a}{b} = \\frac{c}{d} \\iff a \\cdot d = b \\cdot c \\quad (b, d \\ne 0)$$',
      },
      {
        name: 'Tính chất dãy tỉ số bằng nhau',
        latex: '$$\\frac{a}{b} = \\frac{c}{d} = \\frac{e}{f} = \\frac{a + c + e}{b + d + f} = \\frac{a - c + e}{b - d + f}$$',
        explanation: 'Giả thiết các mẫu số và tổng các mẫu số đều khác 0.',
      },
      {
        name: 'Đại lượng tỉ lệ thuận & nghịch',
        latex: '$$y = kx \\ (\\text{thuận}), \\quad y = \\frac{a}{x} \\iff x \\cdot y = a \\ (\\text{nghịch})$$',
      },
    ],
    keyRules: [
      'Đặt ẩn phụ k: Khi gặp $\\frac{x}{a} = \\frac{y}{b} = \\frac{z}{c}$, đặt bằng $k$ để suy ra $x = ak, y = bk, z = ck$.',
      'Nếu $\\frac{a}{b} = \\frac{c}{d}$ thì $\\frac{a+b}{a-b} = \\frac{c+d}{c-d}$.',
    ],
    hsgProTips: [
      'Khi gặp dãy tỉ số có tử chứa tổng các biến: Cộng 1 hoặc trừ 1 vào mỗi tỉ số để xuất hiện nhân tử chung ở tử số.',
      'Nếu $\\frac{a}{b} = \\frac{b}{c} = \\frac{c}{d}$ thì $\\left(\\frac{a+b+c}{b+c+d}\\right)^3 = \\frac{a}{d}$.',
    ],
  },

  chuong_7_bieu_thuc_dai_so_va_da_thuc: {
    id: 'chuong_7_bieu_thuc_dai_so_va_da_thuc',
    chapterId: 'chuong_7_bieu_thuc_dai_so_va_da_thuc',
    chapterName: 'Chương 7: Biểu thức đại số & Đa thức một biến',
    title: 'Bí Kíp Đa Thức Một Biến & Nghiệm Đa Thức',
    onePieceTheme: 'Tổng Bộ Hải Quân • Marineford',
    summary: 'Thu gọn đơn thức/đa thức, cộng trừ nhân chia đa thức, định lý nghiệm và phương pháp hệ số bất định.',
    coreFormulas: [
      {
        name: 'Định nghĩa nghiệm của đa thức',
        latex: '$$x = a \\text{ là nghiệm của } P(x) \\iff P(a) = 0$$',
      },
      {
        name: 'Tổng hệ số của đa thức (Mẹo giải nhanh)',
        latex: '$$\\text{Tổng các hệ số của } P(x) = P(1)$$',
        explanation: 'Thay x = 1 vào đa thức để tính tổng tất cả các hệ số sau khi khai triển.',
      },
      {
        name: 'Hệ số tự do của đa thức',
        latex: '$$\\text{Hệ số tự do của } P(x) = P(0)$$',
      },
    ],
    keyRules: [
      'Bậc của đa thức là bậc của hạng tử có bậc cao nhất trong dạng thu gọn của đa thức đó.',
      'Đa thức bậc n có tối đa n nghiệm thực.',
    ],
    hsgProTips: [
      'Nếu đa thức $P(x)$ có tổng các hệ số bằng 0 thì $x = 1$ là một nghiệm.',
      'Nếu đa thức $P(x)$ có tổng hệ số bậc chẵn bằng tổng hệ số bậc lẻ thì $x = -1$ là một nghiệm.',
    ],
  },

  chuong_8_bien_co_va_xac_suat: {
    id: 'chuong_8_bien_co_va_xac_suat',
    chapterId: 'chuong_8_bien_co_va_xac_suat',
    chapterName: 'Chương 8: Biến cố & Xác suất',
    title: 'Bí Kíp Xác Suất & Số Học Đồng Dư',
    onePieceTheme: 'Đảo Người Cá • Fishman Island',
    summary: 'Phân loại biến cố, tính xác suất thực nghiệm/lý thuyết và ứng dụng đồng dư thức giải toán số học lớn.',
    coreFormulas: [
      {
        name: 'Xác suất của biến cố ngẫu nhiên đồng khả năng',
        latex: '$$P(A) = \\frac{\\text{Số kết quả thuận lợi}}{\\text{Tổng số kết quả có thể xảy ra}} = \\frac{n(A)}{n(\\Omega)}$$',
      },
      {
        name: 'Định nghĩa đồng dư thức (Bí kíp HSG)',
        latex: '$$a \\equiv b \\pmod m \\iff (a - b) \\ \\vdots \\ m$$',
        explanation: 'Hai số có cùng số dư khi chia cho m thì đồng dư với nhau theo modulo m.',
      },
    ],
    keyRules: [
      'Biến cố chắc chắn có xác suất bằng 1; Biến cố không thể có xác suất bằng 0. Mọi biến cố ngẫu nhiên có $0 \\le P(A) \\le 1$.',
      'Tính chất đồng dư: $a \\equiv b \\pmod m \\implies a^n \\equiv b^n \\pmod m$.',
    ],
    hsgProTips: [
      'Tìm chữ số tận cùng của $a^n$: Tìm số dư của $a^n$ khi chia cho 10 (1 chữ số tận cùng) hoặc chia cho 100 (2 chữ số tận cùng).',
      'Nhớ các chu kỳ tận cùng: $7^4 \\equiv 1 \\pmod{100}$, $2^4 \\equiv 6 \\pmod{10}$, $3^4 \\equiv 1 \\pmod{10}$.',
    ],
  },

  chuong_9_quan_he_trong_tam_giac_dong_quy: {
    id: 'chuong_9_quan_he_trong_tam_giac_dong_quy',
    chapterId: 'chuong_9_quan_he_trong_tam_giac_dong_quy',
    chapterName: 'Chương 9: Quan hệ trong tam giác & Sự đồng quy',
    title: 'Bí Kíp Bất Đẳng Thức Tam Giác & 4 Điểm Đồng Quy',
    onePieceTheme: 'Đất Nước Samurai • Wano Kuni',
    summary: 'Quan hệ góc - cạnh đối diện, đường vuông góc - đường xiên, bất đẳng thức tam giác và 4 đường đồng quy.',
    coreFormulas: [
      {
        name: 'Bất đẳng thức tam giác',
        latex: '$$|b - c| < a < b + c \\quad (\\text{với } a, b, c \\text{ là độ dài 3 cạnh})$$',
        explanation: 'Trong tam giác, độ dài một cạnh luôn lớn hơn hiệu và nhỏ hơn tổng hai cạnh còn lại.',
      },
      {
        name: 'Tính chất trọng tâm tam giác (G)',
        latex: '$$AG = \\frac{2}{3}AM, \\quad GM = \\frac{1}{3}AM, \\quad AG = 2GM$$',
        explanation: 'Giao điểm của ba đường trung tuyến là trọng tâm G.',
      },
      {
        name: '4 Điểm đồng quy trong tam giác đều',
        latex: '$$\\text{Trong } \\Delta \\text{ đều, Trọng tâm } G \\equiv \\text{Trực tâm } H \\equiv \\text{Tâm ngoại tiếp } O \\equiv \\text{Tâm nội tiếp } I$$',
      },
    ],
    keyRules: [
      'Trong tam giác, góc đối diện với cạnh lớn hơn là góc lớn hơn; cạnh đối diện với góc lớn hơn là cạnh lớn hơn.',
      'Giao điểm 3 đường trung trực cách đều 3 đỉnh; Giao điểm 3 đường phân giác cách đều 3 cạnh.',
    ],
    hsgProTips: [
      'Để kiểm tra 3 đoạn thẳng có tạo thành tam giác hay không: Chỉ cần kiểm tra tổng hai cạnh nhỏ nhất có lớn hơn cạnh lớn nhất không.',
      'Phương pháp dựng hình phụ: Kéo dài đường trung tuyến $AM$ lấy $MD = MA$ để tạo hình bình hành / tam giác bằng nhau.',
    ],
  },

  chuong_10_hinh_khoi_trong_thuc_tien: {
    id: 'chuong_10_hinh_khoi_trong_thuc_tien',
    chapterId: 'chuong_10_hinh_khoi_trong_thuc_tien',
    chapterName: 'Chương 10: Hình khối trong thực tiễn',
    title: 'Bí Kíp Thể Tích Khối Hình & Số Học Nâng Cao',
    onePieceTheme: 'Hòn Đảo Khởi Nguyên • Laugh Tale',
    summary: 'Diện tích xung quanh, thể tích hình hộp chữ nhật, lập phương, lăng trụ đứng và chuyên đề số chính phương.',
    coreFormulas: [
      {
        name: 'Hình hộp chữ nhật & Hình lập phương',
        latex: '$$V_{hcn} = a \\cdot b \\cdot c, \\quad S_{xq} = 2(a + b)c, \\quad V_{lp} = a^3, \\quad S_{xq} = 4a^2$$',
      },
      {
        name: 'Hình lăng trụ đứng tam giác / tứ giác',
        latex: '$$V = S_{\\text{đáy}} \\cdot h, \\quad S_{xq} = C_{\\text{đáy}} \\cdot h$$',
      },
      {
        name: 'Tính chất số chính phương (Bí kíp HSG)',
        latex: '$$n^2 \\equiv 0, 1 \\pmod 3, \\quad n^2 \\equiv 0, 1 \\pmod 4$$',
        explanation: 'Số chính phương khi chia cho 3 hoặc 4 không bao giờ dư 2 hoặc 3.',
      },
    ],
    keyRules: [
      'Số chính phương tận cùng chỉ có thể là: 0, 1, 4, 5, 6, 9 (không bao giờ tận cùng bằng 2, 3, 7, 8).',
      'Số chính phương chia hết cho số nguyên tố $p$ thì phải chia hết cho $p^2$.',
    ],
    hsgProTips: [
      'Kẹp giữa hai số chính phương liên tiếp: Nếu $k^2 < A < (k + 1)^2$ thì $A$ không thể là số chính phương.',
      'Tìm $n$ để $n^2 + 2n + 12$ là số chính phương: Viết $(n+1)^2 + 11 = k^2 \\iff k^2 - (n+1)^2 = 11$, đưa về tích.',
    ],
  },
};
