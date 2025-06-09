# 🔐 Dữ liệu mẫu cho tài khoản

## 📋 Tổng quan
File này chứa các tài khoản mẫu để test các tính năng đăng nhập và đăng ký của hệ thống Quản lý Y tế Học đường.

## 🚀 Cách sử dụng

### Phương pháp 1: Sử dụng giao diện helper
1. Truy cập: `http://localhost:5173/sample-data`
2. Chọn loại tài khoản muốn test
3. Nhấn nút copy để sao chép thông tin
4. Paste vào form đăng nhập/đăng ký

### Phương pháp 2: Copy trực tiếp từ đây

## 🔑 Tài khoản đăng nhập

### 👨‍💼 Hiệu trường
- **Email**: `hieutruong@truonghoc.edu.vn`
- **Mật khẩu**: `123456789`

### 👩‍⚕️ Y tá trường học
- **Email**: `yta@truonghoc.edu.vn`
- **Mật khẩu**: `123456789`

### 👨‍🏫 Giáo viên
- **Email**: `giaovien@truonghoc.edu.vn`
- **Mật khẩu**: `123456789`

### 👨‍👩‍👧‍👦 Phụ huynh
- **Email**: `phuhuynh@gmail.com`
- **Mật khẩu**: `123456789`

### 👨‍⚕️ Bác sĩ
- **Email**: `bacsi@ttytquan1.gov.vn`
- **Mật khẩu**: `123456789`

### 🔧 Quản trị viên
- **Email**: `admin@schoolmedical.com`
- **Mật khẩu**: `admin123456`

## ✍️ Dữ liệu đăng ký mẫu

### Hiệu trường
```
Họ và tên: Nguyễn Văn Minh
Email: hieutruong@truonghoc.edu.vn
Mật khẩu: 123456789
Xác nhận mật khẩu: 123456789
```

### Y tá trường học
```
Họ và tên: Trần Thị Hương
Email: yta@truonghoc.edu.vn
Mật khẩu: 123456789
Xác nhận mật khẩu: 123456789
```

### Giáo viên
```
Họ và tên: Lê Văn Thành
Email: giaovien@truonghoc.edu.vn
Mật khẩu: 123456789
Xác nhận mật khẩu: 123456789
```

### Phụ huynh
```
Họ và tên: Phạm Thị Lan
Email: phuhuynh@gmail.com
Mật khẩu: 123456789
Xác nhận mật khẩu: 123456789
```

### Bác sĩ
```
Họ và tên: Bác sĩ Nguyễn Thị Mai
Email: bacsi@ttytquan1.gov.vn
Mật khẩu: 123456789
Xác nhận mật khẩu: 123456789
```

## 🛠️ Sử dụng trong code

### Import dữ liệu
```javascript
import { mockUsers, quickLoginData, quickRegisterData, validateLogin, registerUser } from './data/mockData';
```

### Validate đăng nhập
```javascript
const result = validateLogin(email, password);
if (result.success) {
  console.log('Đăng nhập thành công:', result.user);
} else {
  console.log('Lỗi:', result.message);
}
```

### Đăng ký tài khoản mới
```javascript
const newUser = {
  name: "Tên người dùng",
  email: "user@example.com",
  password: "password123"
};

const result = registerUser(newUser);
if (result.success) {
  console.log('Đăng ký thành công:', result.user);
} else {
  console.log('Lỗi:', result.message);
}
```

## 📝 Ghi chú quan trọng

1. **Mật khẩu mặc định**: Tất cả tài khoản đều sử dụng mật khẩu `123456789` (trừ Admin: `admin123456`)
2. **Email duy nhất**: Mỗi email chỉ có thể đăng ký một lần
3. **Vai trò**: Mỗi tài khoản có vai trò khác nhau (principal, nurse, teacher, parent, doctor, admin)
4. **Dữ liệu tạm thời**: Dữ liệu chỉ lưu trong session, sẽ mất khi refresh trang

## 🔄 Cập nhật dữ liệu

Để thêm/sửa tài khoản mẫu, chỉnh sửa file:
`src/data/mockData.js`

## 🌐 Truy cập Helper

Giao diện helper có thể truy cập qua:
- URL: `http://localhost:5173/sample-data`
- Hoặc thêm link vào navigation của bạn
