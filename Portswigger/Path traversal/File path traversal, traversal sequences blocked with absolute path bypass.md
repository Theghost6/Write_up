# Phân tích và khai thác
Ở lab này load ảnh thônt qua thông số `filename` và ta lại khai thác lỗ hổng file path traversal ở tham số này. Và ta thử travesal bằng cách `../../../etc/passwd` thì nó bị trả về method `400` -> có thể nó đã bị chặn `../`
![Pasted image 20250920150546.png](../../assets/portswigger/Pasted%20image%2020250920150546.png)
Nhưng khi ta truy cập bằng đường dẫn tuyệt đối `/etc/passwd` thì server lại trả về thành công và hoàn thành lab![Pasted image 20250920150724.png](../../assets/portswigger/Pasted%20image%2020250920150724.png)
