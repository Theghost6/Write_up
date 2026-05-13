# Phân tích và khai thác
Ở lab này ta load ảnh các post thông qua tham số `filename` ![Pasted image 20250920173642.png](../../assets/portswigger/Pasted%20image%2020250920173642.png)
Ta sẽ thử payload `../../../etc/passwd`
![Pasted image 20250920173959.png](../../assets/portswigger/Pasted%20image%2020250920173959.png)
Sau khi thử thì phần response nó trả về `no such file` như vậy ta bắt buộc phải dùng có đuôi ảnh `.jpg` nhưng trong pass thì không có ảnh nào cả vì vậy ta sẽ dùng null byte 
> Null byte là ký tự có giá trị bằng `0` (trong nhiều ngôn ngữ thì nó sẽ là `\0`) và khi encode bằng URL thì nó sẽ là `%00` nó cũng được hiểu là chuỗi ký tự kết thúc " end of string"

Vì vậy trong lab trên ta sẽ dùng payload `../../../etc/passwd%00.jpg` vì ta có dùng null byte ứng dụng nghĩ là ta có `.jpg`, OS thì dừng ở `%00` và mở file `/etc/passwd` ![Pasted image 20250920174925.png](../../assets/portswigger/Pasted%20image%2020250920174925.png)
