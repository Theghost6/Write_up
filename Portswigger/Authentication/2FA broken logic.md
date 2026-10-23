## Cách khai thác
1. Đăng nhập bằng tài khoản attacker 
2. Quan sát request `POST /login2`:
![Pasted image 20250902232945.png](../../assets/portswigger/Pasted%20image%2020250902232945.png)
	- Có tham số `verity` = username.
	- Có tham số `mfa-code` = OTP
3. Thấy rằng `verify`  **có thể chỉnh sửa**  để chỉ định user khác

-> Logic sai: OTP được xác minh dựa trên giá trị `vertify` do client gửi, **không cố định theo session** 

4. log out tài khoản attacker.
5. Gửi `POST /login2` với `verify=victim` để hệ thống sinh ra otp cho victim:![Pasted image 20250902233051.png](../../assets/portswigger/Pasted%20image%2020250902233051.png)
6. Brute-force giá trị `mfa-code` với dưới tên victim ở 5.![Pasted image 20250902233146.png](../../assets/portswigger/Pasted%20image%2020250902233146.png) ![Pasted image 20250902233224.png](../../assets/portswigger/Pasted%20image%2020250902233224.png)-> khi đúng sẽ nhận được `302 redirect` trong phần reponse đó sẽ có `session` dựa vào đó để truy cập vào tài khoản

##  Root Cause
- Hệ thống **tin tưởng input từ client** (`verify`) để xác định user cần xác minh OTP.  
- Không ràng buộc OTP với **session đang đăng nhập**.  
- Cho phép attacker ép server tạo OTP cho victim.

##  Biện pháp khắc phục
- Ràng buộc OTP với **session login** (không cho client gửi username).  
- Trên server: xác định user từ session chứ không từ tham số trong request.  
- Rate limit brute-force OTP.  