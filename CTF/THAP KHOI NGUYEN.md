# Tháp Khởi Nguyên — Cryptography & Game Reversing

- **Challenge**: Tháp Khởi Nguyên - Trận Đồ Lưỡng Cực
- **Category**: MISC / Cryptography
- **Goal**: Tìm Flag từ logic mã hóa của game

---

## 1. Phân tích mã nguồn Client-side

Mở Developer Tools và kiểm tra tệp `game.js`, ta phát hiện chuỗi Flag đã được mã hóa sẵn trong source code:

```javascript
const ENCRYPTED_FLAG = "U2FsdGVkX1+15wuYxUNL6gkIXkaGn9i4EnwEkc2hgmo6UKWqpaABg5DmKNwyZ5yp";
```

### Cơ chế giải mã của game:
Tại hàm `triggerEnding()`:

```javascript
const hashInput = _actionHistory.join('|');
const keyHex = CryptoJS.SHA256(hashInput).toString(CryptoJS.enc.Hex);
const bytes = CryptoJS.AES.decrypt(ENCRYPTED_FLAG, keyHex);
```

- Chuỗi đầu vào giải mã được tạo từ mảng `_actionHistory` nối lại bằng ký tự phân cách `|`.
- Thuật toán băm `SHA256(hashInput)` được dùng làm khóa bí mật `keyHex` để giải mã chuỗi `ENCRYPTED_FLAG` bằng thuật toán AES.

---

## 2. Trích xuất đáp án từ cấu trúc dữ liệu

Quan sát mảng `STAGES` trong `game.js`, ta có toàn bộ danh sách các bước đi chính xác qua 12 màn chơi:

```javascript
const STAGES = [
    // Màn 1: D2 + 3,5
    // Màn 2: D3 + 1,4
    // Màn 3: D5 + 8,9
    // Màn 4: D4 + 6,7
    // Màn 5: D1 + 0,3
    // Màn 6: D2 + 5,8,9
    // Màn 7: D3 + 0,1,2
    // Màn 8: D5 + 2,4,7
    // Màn 9: D4 + 3,6,9
    // Màn 10: D1 + 1,4,5
    // Boss Màn 11: D2+5,8,9 | D5+0,1,2 | D4+2,4,7
    // Boss Màn 12: D3+3,6,9 | D1+1,4,5 | D2+3,5
];
```

---

## 3. Khai thác & Giải mã Flag trực tiếp

Thay vì phải chơi thủ công toàn bộ trò chơi, ta mở Console của trình duyệt và thực thi đoạn script sau để giải mã cờ:

```javascript
(() => {
    const ENCRYPTED_FLAG = "U2FsdGVkX1+15wuYxUNL6gkIXkaGn9i4EnwEkc2hgmo6UKWqpaABg5DmKNwyZ5yp";
    const answers = [
        "D2","3,5","D3","1,4","D5","8,9",
        "D4","6,7","D1","0,3","D2","5,8,9",
        "D3","0,1,2","D5","2,4,7","D4","3,6,9",
        "D1","1,4,5","D2","5,8,9","D5","0,1,2",
        "D4","2,4,7","D3","3,6,9","D1","1,4,5",
        "D2","3,5"
    ];
    const hashInput = answers.join('|');
    const keyHex = CryptoJS.SHA256(hashInput).toString(CryptoJS.enc.Hex);
    const bytes = CryptoJS.AES.decrypt(ENCRYPTED_FLAG, keyHex);
    console.log("FLAG:", bytes.toString(CryptoJS.enc.Utf8));
})();
```

Chạy script trên Console và thu được Flag thành công.
