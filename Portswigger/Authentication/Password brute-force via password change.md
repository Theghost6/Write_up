# Phân tích và khai thác
Sau khi đăng nhập tài khoản winner được cấp thì ta sẽ thấy được có chức ănng `change password
![Pasted image 20250919172944.png](../../assets/portswigger/Pasted%20image%2020250919172944.png)
Ta sẽ thử đổi mật khẩu của bản thân thành 123 và bắt request trên burp![Pasted image 20250919173121.png](../../assets/portswigger/Pasted%20image%2020250919173121.png)
Trong request này ta thấy được tham số `username=winner`, chúng ta hoàn toàn có thể đổi thành user `carlos`. Nói chung là chức năng này cho phép ta đổi được cả username đổi cả pass mà không cần đăng nhập.

 Sau khi phân tích 1 chút với chức năng này thì ta có 2 điều kiện cần chú ý:
 - Nếu mà mật khẩu hiên tại sai và 2 `new password` giống nhau thì nó sẽ chuyển hướng mình sang trang đăng nhập luôn![Pasted image 20250919173641.png](../../assets/portswigger/Pasted%20image%2020250919173641.png)
 - Ta sẽ thử nhập sai mật khẩu hiện tại và cho 2 `new password` kia nó khác nhau thì nó sẽ báo![Pasted image 20250919173911.png](../../assets/portswigger/Pasted%20image%2020250919173911.png) như vậy ta đã thấy điểm có thể khai thác và nếu ta thử cho mật khẩu hiện tại đúng thì![Pasted image 20250919174027.png](../../assets/portswigger/Pasted%20image%2020250919174027.png) thì nó báo `new password do not match` như vậy nếu nhập đúng mật khẩu hiện tại thì nó sẽ báo lỗi khác với khi nhập sai mật khẩu hiện tại dựa vào đấy ta có thể brute-force
 -> Tóm lại nếu ở chỗ nhập mật khẩu mới ta sẽ không cho nó trùng khớp và thử mật khẩu hiện tại nếu mật khẩu hiện tại mà sai thì nó sẽ báo `incorrect` ,còn nếu nhập đúng mật khẩu hiện tại thì nó báo 2 mật khâu mới không khớp

Vậy ta sẽ brute-force mật khẩu như sau![Pasted image 20250919174544.png](../../assets/portswigger/Pasted%20image%2020250919174544.png)
Ta sẽ đổi username=weiner thành carlos vị trí sẽ là `current-password=123`. Như vậy ta sẽ thu được kết quả như sau:![Pasted image 20250919174801.png](../../assets/portswigger/Pasted%20image%2020250919174801.png)
với mật khẩu `mobilemail` đã trả về được kết quả mà ta mong muốn. Sử dụng mật khẩu đó đăng nhập carlos là ta đã hoàn thành xong lab

# Root cause
lab này đã rò rỉ thong tin qua phản hồi có thể phân biệt dữ liệu lấy từ client giúp cho phép brute-force
Do có sự khác biệt ở trạng thái current-password và new-password như trong lab trên nó sẽ hiện thông báo current password is incorrect vs new password do not match

# Khắc phục
1. Không tiết lộ thông tin thất bại như thông báo lỗi do mật khẩu hiện tại hay không khớp
2. Không hiện thông tin username mà hãy lấy từ phiên đăng nhập  session trên server
3. Hạn chế số lần thử nếu nhập sai nhiều lần sẽ bị lockout