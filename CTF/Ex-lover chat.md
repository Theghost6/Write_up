# Ex-lover chat — Steganography Analysis

- **Category**: Digital Forensics / Steganography
- **Target**: Tệp hình ảnh nghi vấn chứa dữ liệu ẩn

---

## 1. Giai đoạn Phân tích Tĩnh (Static & Structure Analysis)

Tiến hành kiểm tra cấu trúc cơ bản của tệp hình ảnh bằng các công cụ chuyên dụng:

- **Exiftool**: Các thông số kỹ thuật chuẩn, không phát hiện trường metadata nào chứa văn bản hay đường dẫn ẩn.
- **Binwalk & Pngcheck**: Cấu trúc các khối chunk PNG nguyên vẹn, không có tệp nén (ZIP/Zlib) hay tệp thực thi nào được nối (appended) vào đuôi tệp.
- **Quét LSB dạng Text (zsteg)**: Quét các kênh LSB trả về phần lớn là dữ liệu ngẫu nhiên (False Positives). Thử nghiệm trích xuất một luồng zlib nghi ngờ nhưng thất bại do lỗi cấu trúc (`zlib.error: Error 2`), xác nhận Flag không được giấu dưới dạng văn bản (Plain Text) hay tệp nén thông thường.

---

## 2. Giai đoạn Phân tích Trực quan (Visual Steganography)

- **Công cụ sử dụng**: Stegsolve 1.3
- **Kỹ thuật áp dụng**: Cắt lớp bit màu (Bit Plane Slicing) để tìm kiếm các điểm ảnh bị thay đổi giá trị siêu nhỏ.
- **Kết quả**: Lướt qua các bộ lọc kênh màu. Khi chuyển đến bộ lọc **Red plane 0** (đại diện cho bit số 0 của kênh màu Đỏ), sự chênh lệch 1 bit được khuếch đại thành màu Đen/Trắng, làm lộ ra một hình ảnh **Mã QR (QR Code)** hoàn chỉnh được vẽ chìm ẩn dưới lớp nền.

![Mã QR ẩn lộ ra tại Red Plane 0](../assets/ctf/Pasted%20image%2020260721161939.png)

Tiến hành quét mã QR này để lấy Flag của bài thi.
