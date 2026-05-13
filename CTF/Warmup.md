https://pwnsec.ctf.ae/app/challenges/warmup

Ban đầu ta login `guest:guest123` đã cấp trong lab
![Screenshot 2025-11-16 230005.png](../assets/ctf/Screenshot%202025-11-16%20230005.png)
Ta chú ý thấy được khi ấn vào `change password` thấy đổi mật khẩu bằng `ID` 

![Screenshot 2025-11-16 230143.png](../assets/ctf/Screenshot%202025-11-16%20230143.png)

Và khi truy cập vào `profile` ta thấy rằng tài khoản hiện tại đang là `ID = 1` 

![Screenshot 2025-11-16 230026.png](../assets/ctf/Screenshot%202025-11-16%20230026.png)

Vậy ta sẽ thử test từ id 1 đến 20 xem thế nào bằng intruder trong burp và thu được có `id = 17` phản hồi `200`

![Screenshot 2025-11-16 230118.png](../assets/ctf/Screenshot%202025-11-16%20230118.png)
Khi ta truy cập với id là 17 thì ta thấy rằng `role = admin` để ta truy cập tài khoản này ta sẽ đổi mật khẩu chỗ `change password` với id là 17
![Screenshot 2025-11-16 230228.png](../assets/ctf/Screenshot%202025-11-16%20230228.png)
Khi đổi xong ta sẽ truy cập được vào tài khoản `admin` 
![Screenshot 2025-11-16 230309.png](../assets/ctf/Screenshot%202025-11-16%20230309.png)

Ta truy cập `admin panel` sẽ thấy 1 lựa chọn đáng chú ý là crawler
![Screenshot 2025-11-16 230323.png](../assets/ctf/Screenshot%202025-11-16%20230323.png)
Và khi ta thử nhập 1 url
![Screenshot 2025-11-16 230346.png](../assets/ctf/Screenshot%202025-11-16%20230346.png)
Nó phản hồi `200`
![Screenshot 2025-11-16 230409.png](../assets/ctf/Screenshot%202025-11-16%20230409.png)
Nếu nó có đường dẫn url thìta sẽ thử tiêm payload SSRF xem bằng cách nhập `file:///flag.txt` 
![Screenshot 2025-11-16 230529.png](../assets/ctf/Screenshot%202025-11-16%20230529.png)
Như vậy ta đã tìm được flag của lab ctf này.
[https://pwnsec.ctf.ae/app/challenges/warmup](https://pwnsec.ctf.ae/app/challenges/warmup)

Ban đầu ta login `guest:guest123` đã cấp trong lab ![](../assets/ctf/<Screenshot%202025-11-16%20230005.png) Ta chú ý thấy được khi ấn vào `change password` thấy đổi mật khẩu bằng `ID`

![](../assets/ctf/<Screenshot%202025-11-16%20230143.png)

Và khi truy cập vào `profile` ta thấy rằng tài khoản hiện tại đang là `ID = 1`

![](../assets/ctf/<Screenshot%202025-11-16%20230026.png)

Vậy ta sẽ thử test từ id 1 đến 20 xem thế nào bằng intruder trong burp và thu được có `id = 17` phản hồi `200`

![](../assets/ctf/<Screenshot%202025-11-16%20230118.png) Khi ta truy cập với id là 17 thì ta thấy rằng `role = admin` để ta truy cập tài khoản này ta sẽ đổi mật khẩu chỗ `change password` với id là 17 ![](../assets/ctf/<Screenshot%202025-11-16%20230228.png) Khi đổi xong ta sẽ truy cập được vào tài khoản `admin` ![](../assets/ctf/<Screenshot%202025-11-16%20230309.png)

Ta truy cập `admin panel` sẽ thấy 1 lựa chọn đáng chú ý là crawler ![](../assets/ctf/<Screenshot%202025-11-16%20230323.png) Và khi ta thử nhập 1 url ![](../assets/ctf/<Screenshot%202025-11-16%20230346.png) Nó phản hồi `200` ![](../assets/ctf/<Screenshot%202025-11-16%20230409.png) Nếu nó có đường dẫn url thìta sẽ thử tiêm payload SSRF xem bằng cách nhập `file:///flag.txt` ![](../assets/ctf/<Screenshot%202025-11-16%20230529.png) Như vậy ta đã tìm được flag của lab ctf này.