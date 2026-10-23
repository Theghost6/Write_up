## Cách phát hiện
 - khi ta ấn stay logged in mà cookie nó có ở dạng mã hóa ví dụ trong lab này là base64 thì đó là dấu hiệu mà ta có thể tấn công khi ta decode ra nó có pattern : `username:hash` => dấu hiệu rõ ràng insecure persistent login cookie.
## Cách tấn công
Để giải lab này thi ta brute-force cookle để chiếm quyền tài khoản
Sau khi đăng nhập với tài khoản của attacker có tick stay loggin thì ta thấy được![Pasted image 20250906190858.png](../../assets/portswigger/Pasted%20image%2020250906190858.png)
Ta thấy được trong cookie có stay logged in là 1 đoạn đã được mã hóa vậy ta giải mã nó ra sẽ thu được![Pasted image 20250906191123.png](../../assets/portswigger/Pasted%20image%2020250906191123.png)
Và khi ta giải tiếp đoạn hash kia thì thu được ![Pasted image 20250906191416.png](../../assets/portswigger/Pasted%20image%2020250906191416.png)


Vậy ta có thể thấy được là cookie được xây dựng như sau:
`base64(username+':'+md5HashofPassword`
Vì vậy để chiếm được tài khoản victim thì ta sẽ đưa request kia vào intrucder -> trong phần payload processing ta sẽ add vào như sau:![Pasted image 20250906191810.png](../../assets/portswigger/Pasted%20image%2020250906191810.png)
Và vị trí để chạy payload ta sẽ cho vào như sau ![Pasted image 20250906191926.png](../../assets/portswigger/Pasted%20image%2020250906191926.png)
Xóa phàn session nếu có, và thay vì `/my-account?id=wiener` ta sẽ chuyển về như ảnh trên. Cuối cùng ta chỉ cần `start attack` ![Pasted image 20250906192146.png](../../assets/portswigger/Pasted%20image%2020250906192146.png)
sau khi chạy xong ta tìm status `200` => ta đã vào tài khoản của victim bằng cách thông qua stay logged in
## Phòng tránh
- không nên dùng password hash trực tiếp vào trong cookie
- Thay vào đó ta tạo ngẫu nhiên session token lưu mapping token trong user db