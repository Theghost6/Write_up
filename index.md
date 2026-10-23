# Security Research Notes

Chào mừng bạn đến với kho tài liệu nghiên cứu bảo mật và tổng hợp lời giải chi tiết các thử thách CTF và bài lab thực chiến **PortSwigger Web Security Academy**.

Kho tài liệu được tổ chức theo cấu trúc wiki kỹ thuật (chuẩn phong cách HackTricks / GitBook), tập trung vào phân tích luồng khai thác, tái hiện mã độc, nguyên nhân gốc rễ (Root Cause) và các biện pháp khắc phục chuẩn lập trình an toàn.

---

## Danh mục tài liệu nhanh

Dưới đây là thống kê các chủ đề nghiên cứu hiện có trong kho lưu trữ:

| Chuyên đề | Số lượng | Các kỹ thuật & Lỗ hổng trọng tâm | Truy cập |
| :--- | :---: | :--- | :--- |
| **CTF Challenges** | **6 bài** | IDOR, SSRF, Stored XSS, PIN Brute-force, MalDoc Macro, Steganography | [Xem mục CTF](/CTF/Warmup) |
| **Authentication** | **7 bài** | 2FA Broken Logic, Brute-force OTP, Stay-logged-in Cookie, Password Reset Poisoning | [Xem mục Auth](/Portswigger/Authentication/2FA%20broken%20logic) |
| **Path Traversal** | **6 bài** | Absolute Path, Non-recursive Strip, Double URL-decode, Null Byte Truncation | [Xem mục Traversal](/Portswigger/Path%20traversal/File%20path%20traversal,%20simple%20case) |
| **JSON Web Token** | **2 bài** | Bypass chữ ký thuật toán sai lệch, bỏ qua bước kiểm tra Signature | [Xem mục JWT](/Portswigger/JWT/JWT%20authentication%20bypass%20via%20flawed%20signature%20verification) |
| **Web Cache Poisoning**| **2 bài** | Đầu độc bộ nhớ đệm qua Unkeyed Cookie và Unkeyed HTTP Header | [Xem mục Cache](/Portswigger/Web%20Cache%20Poisoning/Web%20cache%20poisoning%20with%20an%20unkeyed%20cookie) |

---

## Danh sách các thử thách CTF

1. [**Warmup**](/CTF/Warmup): Khai thác IDOR đổi mật khẩu tài khoản Admin, leo thang SSRF qua module crawler để đọc file `/flag.txt`.
2. [**Vulnerable Bank**](/CTF/Vulnerable Bank): Khai thác Stored XSS trong tính năng chuyển tiền đánh cắp Cookie phiên Admin qua Webhook, sau đó vét cạn mã PIN 4 chữ số.
3. [**Tháp Khởi Nguyên**](/CTF/THAP%20KHOI%20NGUYEN): Dịch ngược mã nguồn JavaScript `game.js`, giải mã thuật toán AES-256 từ mảng các màn chơi `STAGES` bằng khóa SHA256.
4. [**NovaMart**](/CTF/NovaMart): Khai thác lỗ hổng Race Condition khi áp mã giảm giá trong hệ thống thương mại điện tử, gửi đồng thời request để trừ tiền nhiều lần.
5. [**CV tiềm năng**](/CTF/CV%20tiem%20nang): Phân tích file Word Macro `.docm` độc hại bằng `olevba`, bóc tách mã VBA và giải mã chuỗi XOR với key `Zer0D`.
6. [**Ex-lover chat**](/CTF/Ex-lover%20chat): Phân tích Steganography trên ảnh PNG bằng Stegsolve Bit Plane Slicing (Red plane 0) để trích xuất mã QR ẩn.

---

## Danh sách bài Lab PortSwigger Academy

::: tip CÁC BÀI LAB BẢO MẬT WEB THỰC CHIẾN
Toàn bộ các bài lab đều đi kèm ảnh chụp màn hình Burp Suite, phân tích request/response và hướng dẫn sửa lỗi chi tiết.
:::

### 1. Authentication
- [2FA broken logic](/Portswigger/Authentication/2FA%20broken%20logic): Bypass cơ chế xác thực 2FA do server kiểm tra mã OTP dựa trên tham số verify do client gửi lên.
- [2FA bypass using a brute-force attack](/Portswigger/Authentication/2FA%20bypass%20using%20a%20brute-force%20attack): Khai thác thiếu sót rate-limit trong tính năng nhập mã 2FA bằng Burp Intruder.
- [Brute-forcing a stay-logged-in cookie](/Portswigger/Authentication/Brute-forcing%20a%20stay-logged-in%20cookie): Bẻ khóa cookie ghi nhớ phiên đăng nhập (username:md5(password)).
- [Offline password cracking](/Portswigger/Authentication/Offline%20password%20cracking): Trích xuất mã băm mật khẩu và bẻ khóa offline bằng wordlist.
- [Password brute-force via password change](/Portswigger/Authentication/Password%20brute-force%20via%20password%20change): Lợi dụng sự khác biệt trong phản hồi khi đổi mật khẩu để xác định mật khẩu hiện tại.
- [Password reset broken logic](/Portswigger/Authentication/Password%20reset%20broken%20logic): Đặt lại mật khẩu không xác minh token bí mật với tài khoản người dùng tương ứng.
- [Password reset poisoning via middleware](/Portswigger/Authentication/Password%20reset%20poisoning%20via%20middleware): Thao túng header `X-Forwarded-Host` để đầu độc URL đặt lại mật khẩu.

### 2. Path Traversal
- [File path traversal, simple case](/Portswigger/Path%20traversal/File%20path%20traversal,%20simple%20case): Đọc file `/etc/passwd` qua tham số filename không có bộ lọc.
- [File path traversal, traversal sequences blocked with absolute path bypass](/Portswigger/Path%20traversal/File%20path%20traversal,%20traversal%20sequences%20blocked%20with%20absolute%20path%20bypass): Truyền trực tiếp đường dẫn tuyệt đối `/etc/passwd`.
- [File path traversal, traversal sequences stripped non-recursively](/Portswigger/Path%20traversal/File%20path%20traversal,%20traversal%20sequences%20stripped%20non-recursively): Lồng ghép chuỗi `....//....//` để vượt qua bộ lọc xóa một lần.
- [File path traversal, traversal sequences stripped with superfluous URL-decode](/Portswigger/Path%20traversal/File%20path%20traversal,%20traversal%20sequences%20stripped%20with%20superfluous%20URL-decode): Kỹ thuật mã hóa URL hai lần `%252e%252e%252f`.
- [File path traversal, validation of file extension with null byte bypass](/Portswigger/Path%20traversal/File%20path%20traversal,%20validation%20of%20file%20extension%20with%20null%20byte%20bypas): Kỹ thuật Null Byte `%00.png` để qua mặt kiểm tra đuôi mở rộng.
- [File path traversal, validation of start of path](/Portswigger/Path%20traversal/File%20path%20traversal,%20validation%20of%20start%20of%20path): Bắt đầu bằng thư mục hình ảnh hợp lệ rồi lùi về gốc.

### 3. JSON Web Token (JWT)
- [JWT authentication bypass via flawed signature verification](/Portswigger/JWT/JWT%20authentication%20bypass%20via%20flawed%20signature%20verification): Sửa payload role=admin mà không cần chữ ký hợp lệ.
- [JWT authentication bypass via unverified signature](/Portswigger/JWT/JWT%20authentication%20bypass%20via%20unverified%20signature): Bỏ qua bước kiểm tra chữ ký Signature trong token.

### 4. Web Cache Poisoning
- [Web cache poisoning with an unkeyed cookie](/Portswigger/Web%20Cache%20Poisoning/Web%20cache%20poisoning%20with%20an%20unkeyed%20cookie): Đầu độc cache thông qua cookie `fe-session` unkeyed.
- [Web cache poisoning with an unkeyed header](/Portswigger/Web%20Cache%20Poisoning/Web%20cache%20poisoning%20with%20an%20unkeyed%20header): Đầu độc cache thông qua header `X-Forwarded-Host`.

---

## Quy chuẩn nghiên cứu (Methodology)

Mỗi bài viết đều tuân theo chu trình 3 bước chuẩn:

1. **Phát hiện & Tái hiện (Recon & PoC)**: Sử dụng Burp Suite quan sát luồng HTTP request, bắt gói tin và xác định các điểm yếu trong tham số đầu vào.
2. **Phân tích bản chất (Root Cause Analysis)**: Mổ xẻ nguyên nhân kỹ thuật gây ra lỗ hổng ở tầng kiến trúc ứng dụng, logic code hoặc cấu hình máy chủ.
3. **Giải pháp khắc phục (Remediation)**: Hướng dẫn biện pháp sửa chữa an toàn và nguyên tắc Secure Coding để ngăn chặn lỗ hổng tái diễn.
