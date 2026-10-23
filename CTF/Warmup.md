# Warmup — CTF Challenge

- **Target**: [https://pwnsec.ctf.ae/app/challenges/warmup](https://pwnsec.ctf.ae/app/challenges/warmup)
- **Vulnerabilities**: IDOR (Insecure Direct Object Reference) & SSRF (Server-Side Request Forgery)

---

## 1. Khai thác IDOR để chiếm quyền Admin

Ban đầu ta đăng nhập với thông tin tài khoản được cấp trong lab: `guest:guest123`.

![Screenshot 2025-11-16 230005.png](../assets/ctf/Screenshot%202025-11-16%20230005.png)

Khi nhấn vào `change password`, ta thấy tính năng đổi mật khẩu cho phép truyền tham số `ID`:

![Screenshot 2025-11-16 230143.png](../assets/ctf/Screenshot%202025-11-16%20230143.png)

Truy cập vào `profile`, ta thấy tài khoản `guest` hiện tại có `ID = 1`:

![Screenshot 2025-11-16 230026.png](../assets/ctf/Screenshot%202025-11-16%20230026.png)

Thử fuzzing danh sách ID từ 1 đến 20 bằng công cụ Intruder trong Burp Suite, thu được kết quả `ID = 17` phản hồi HTTP status `200`:

![Screenshot 2025-11-16 230118.png](../assets/ctf/Screenshot%202025-11-16%20230118.png)

Khi truy cập với `ID = 17`, thông tin hiển thị cho thấy `role = admin`. Để chiếm quyền tài khoản này, ta thực hiện đổi mật khẩu tại chức năng `change password` với `ID = 17`:

![Screenshot 2025-11-16 230228.png](../assets/ctf/Screenshot%202025-11-16%20230228.png)

Sau khi đổi mật khẩu thành công, ta đăng nhập vào tài khoản `admin`:

![Screenshot 2025-11-16 230309.png](../assets/ctf/Screenshot%202025-11-16%20230309.png)

---

## 2. Khai thác SSRF qua tính năng Crawler để lấy Flag

Truy cập vào `admin panel`, xuất hiện chức năng đáng chú ý là **Crawler**:

![Screenshot 2025-11-16 230323.png](../assets/ctf/Screenshot%202025-11-16%20230323.png)

Thử nhập một URL thông thường:

![Screenshot 2025-11-16 230346.png](../assets/ctf/Screenshot%202025-11-16%20230346.png)

Hệ thống phản hồi `200` và fetch dữ liệu từ URL về:

![Screenshot 2025-11-16 230409.png](../assets/ctf/Screenshot%202025-11-16%20230409.png)

Do hệ thống cho phép fetch URL từ phía server mà không có filter scheme, ta tiêm payload **SSRF** bằng cách dùng scheme `file://`:
```text
file:///flag.txt
```

![Screenshot 2025-11-16 230529.png](../assets/ctf/Screenshot%202025-11-16%20230529.png)

Hệ thống đọc và trả về nội dung file `/flag.txt`. Thử thách hoàn thành!