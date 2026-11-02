# AGENTS & WORKFLOW GUIDELINES

Quy định bắt buộc cho tất cả các tác tử AI và Pair Programmer làm việc trên repository này:

---

## 1. Phương Pháp Luận Superpowers (obra/superpowers)
- **TDD & Kiểm thử tự động**: Viết test và chạy kiểm thử tự động trước khi kết luận hoàn thành tác vụ.
- **Xác thực trước khi bàn giao (Verification Before Completion)**:
  1. `npm run validate:latex`: 100% câu hỏi đạt 0 lỗi cú pháp KaTeX.
  2. `npm run lint` (`tsc --noEmit`): 0 lỗi TypeScript.
  3. `npm run build`: Bản build Vite production thành công 0 lỗi.
  4. Playwright E2E: Kịch bản kiểm thử giao diện chạy thành công.
- **Tự động Commit & Push**: Mỗi lần hoàn thành sửa đổi, tự động commit và push ngay lên remote GitHub.

---

## 2. Tiêu Chuẩn Unslop (unslop)
- **Loại bỏ từ vựng và cấu trúc AI**:
  - Không dùng các từ sáo rỗng: "toàn diện", "vượt trội", "kỳ thú", "tapestry", "crucial", "enhance".
  - Dùng từ ngữ trực diện, giản dị, đúng trọng tâm hành động của học sinh lớp 7.
- **Loại bỏ emoji trang trí**: Không lạm dụng emoji vào tiêu đề và danh sách trừ khi là icon chức năng hoặc vật phẩm game.
- **Nói về hành động, không nói về cảm xúc**: Hướng dẫn rõ ràng thao tác người học cần làm thay vì mô tả cảm xúc trừu tượng.

---

## 3. Quy Chuẩn UI/UX (Justin Hartman UI/UX Design Library)
- **Công thái học cảm ứng (Touch Ergonomics)**:
  - Mọi nút bấm, ô gõ số, mảnh ghép tương tác tối thiểu $44 \times 44\text{px}$.
  - Khoảng cách tối thiểu giữa các phần tử có thể click là $8\text{px}$.
- **Hệ thống phân cấp thị giác (Visual Hierarchy) & Khoảng trắng (White Space)**:
  - Đóng gói nội dung trong các thẻ (cards) rõ ràng với viền tương phản.
  - Mỗi màn hình chỉ có 1 điểm nhấn chính (Primary Focal Point).
- **Tương phản chuẩn WCAG 2.2 AAA**:
  - Nền tối tương phản cao với chữ vàng/trắng (`text-stone-100`, `text-amber-100`).
  - Số liệu bộ đếm dùng phông đơn cách `font-mono`.

---

## 4. Giới Hạn Tệp Nghiêm Ngặt (< 300 Dòng)
- Mọi tệp mã nguồn (logic, hooks, state, components) bắt buộc **dưới 300 dòng**.
- Khi một file tiệm cận hoặc vượt 300 dòng, chủ động phân rã thành các sub-components hoặc helper độc lập.
