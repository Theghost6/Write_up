## Phân tích và exploit
Khi ta gửi request thì ta sẽ thấy được cookie `fehost` được refect trong fiel `frontend` trong biến `data` ![UasC0BP.png](../../assets/portswigger/UasC0BP.png)
Ta sẽ thử break lại và chèn xss
![1m6qsvd.png](../../assets/portswigger/1m6qsvd.png)
Ta sẽ thu được kết quả![iysqCsR.png](../../assets/portswigger/iysqCsR.png)
Đồng thời nó cũng hoàn thành lab