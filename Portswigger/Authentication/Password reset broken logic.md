## Cách phân tích và khai thác
Khi sử dụng chức năng /forgit-password email ta sẽ có 1 đường link trả về trong email đường link đó sẽ đổi mật khẩu. Sau đó điền form  đổi mật khẩu mới. Lúc này ta sẽ bắt request và thu được ảnh như sau:![Pasted image 20250908165433.png](../../assets/portswigger/Pasted%20image%2020250908165433.png)
Lúc này ta thấy nó hiện đầy đủ các thông tin như token .tên.mâkj khẩu mới lúc này ta chỉ cần đổi tên tài khoản victim là hoàn thành lab

## Cách fix
Ở lab này server nó không kiểm tra token mà dựa vào username để đổi mật khẩu vì vậy ta cần phải được quản lý nghiêm ngặt như:
	1.Token này được lưu trong database gắn chặt với tài khoản đó
	2. khi user gửi form đặt lại mật khẩu thì server phải kiểm tra xem:
			- token này có tồn tại không?
			- token có còn hạn không?
			- token có đúng với tài khoản cần đổi mật khẩu không
	3. Không dùng username trong request để đổi mật khẩu:
		- server chỉ cần nhận token với mật khẩu cần đổi
		- Từ token tự tìm ra user trong database
		- Không để client gửi `username` hoặc bất kì tin định dạng nào khác