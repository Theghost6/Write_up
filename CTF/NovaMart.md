# NovaMart — Race Condition Coupon Exploit

- **Category**: Web Exploitation / Business Logic
- **Target**: Chức năng thanh toán & áp dụng mã giảm giá

---

## 1. Phân tích lỗ hổng nghiệp vụ

Trong bài lab, tài khoản người chơi có số dư không đủ để mua vật phẩm chứa Flag. Ta tiến hành tìm kiếm mã giảm giá trong hệ thống:

![Tìm kiếm mã giảm giá](../assets/ctf/Pasted%20image%2020260721202113.png)

Hệ thống cung cấp một mã giảm giá, nhưng quy định chỉ được áp dụng 1 lần với giá trị giảm tối đa là $99:

![Áp mã giảm giá $99](../assets/ctf/Pasted%20image%2020260721202301.png)

---

## 2. Khai thác Race Condition

Do backend không sử dụng cơ chế khóa tài nguyên (Database Locking / Atomic Transaction) trước khi kiểm tra trạng thái sử dụng của mã coupon, tồn tại một khoảng thời gian trễ (Time-of-Check to Time-of-Use — TOCTOU) giữa lúc kiểm tra mã và lúc trừ tiền.

Sử dụng Burp Suite Repeater hoặc Turbo Intruder để gửi song song hàng loạt request áp mã coupon trong cùng một mili-giây:

![Khai thác Race Condition](../assets/ctf/Pasted%20image%2020260721200046.png)

Mã giảm giá được áp dụng nhiều lần liên tiếp trước khi trạng thái "Đã sử dụng" được ghi vào cơ sở dữ liệu, giúp trừ số tiền về mức đủ để thanh toán và nhận Flag.
