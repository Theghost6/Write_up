# Phân tích và khai thác
Ở lab này ta thấy rằng ảnh web này load ảnh thông qua tham số `filename`![Pasted image 20250920145300.png](../../assets/portswigger/Pasted%20image%2020250920145300.png)
và khi truy cập đường dãn ảnh đó có thể ảnh này nó nằm ở đường dẫn `/var/www/html` trong linux
Vì vậy ta sẽ đổi tham số trong `filename` thành `../../../etc/passwd` để traver về thư mục gốc và truy cập file `/etc/passwd` 
![Pasted image 20250920145933.png](../../assets/portswigger/Pasted%20image%2020250920145933.png)
Ta đã đọc được file `/etc/passwd` thành công như vậy đã solve được lab này.