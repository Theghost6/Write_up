Ta sẽ login và thông tin account được cung cấp, ta thấy được web trả về jwt![Pasted image 20251115171532.png](../../assets/portswigger/Pasted%20image%2020251115171532.png)
Ta tìm thấy giá trị `sub` có giá trị là tên người dùng vì vậy ta sẽ đổi thành `administrator`
![Pasted image 20251115171706.png](../../assets/portswigger/Pasted%20image%2020251115171706.png)
Ta sẽ đổi `alg` với giá trị là `none` đồng thời xóa hết chữ ký số ở đằng sau và chú ý rằng để lại dấu `.` ![Pasted image 20251115171927.png](../../assets/portswigger/Pasted%20image%2020251115171927.png)
Sau đó ta chỉ việc xóa người dùng là hoàn thành bài lab![Pasted image 20251115172011.png](../../assets/portswigger/Pasted%20image%2020251115172011.png)
