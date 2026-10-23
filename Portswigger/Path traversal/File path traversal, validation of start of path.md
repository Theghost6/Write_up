# Phân tích và khai thác
Ở lab này web load ảnh của các post thông qua tham số `filename` với đường dẫn tuyệt đối la: `/var/www/images/<file anh>.jpg` ![Pasted image 20250920172613.png](../../assets/portswigger/Pasted%20image%2020250920172613.png)
Ta thử truyền giá trị `/etc/passwd` thì nó không thành công. Theo như mô tả thì server sẽ validate `filename` phải bắt đầu bằng `/var/www/images/`![Pasted image 20250920172931.png](../../assets/portswigger/Pasted%20image%2020250920172931.png)
Như vậy ta chỉ cần bypass bằng cách traverse dựa trên folder `/var/www/html` với payload là: `/var/www/images/../../../etc/passwd` thì ta sẽ solve được lab này![Pasted image 20250920173400.png](../../assets/portswigger/Pasted%20image%2020250920173400.png)
