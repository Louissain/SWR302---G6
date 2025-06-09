// Mock data cho tài khoản người dùng
export const mockUsers = [
  // Tài khoản cho Hiệu trường
  {
    id: 1,
    name: "Nguyễn Văn Minh",
    email: "hieutruong@truonghoc.edu.vn",
    password: "123456789",
    role: "principal",
    school: "Trường THCS Nguyễn Du",
    phone: "0901234567",
    address: "123 Nguyễn Du, Quận 1, TP.HCM"
  },
  
  // Tài khoản cho Y tá trường học
  {
    id: 2,
    name: "Trần Thị Hương",
    email: "yta@truonghoc.edu.vn",
    password: "123456789",
    role: "nurse",
    school: "Trường THCS Nguyễn Du",
    phone: "0901234568",
    address: "456 Lê Lợi, Quận 1, TP.HCM"
  },
  
  // Tài khoản cho Giáo viên
  {
    id: 3,
    name: "Lê Văn Thành",
    email: "giaovien@truonghoc.edu.vn",
    password: "123456789",
    role: "teacher",
    school: "Trường THCS Nguyễn Du",
    phone: "0901234569",
    address: "789 Trần Hưng Đạo, Quận 1, TP.HCM",
    class: "7A1"
  },
  
  // Tài khoản cho Phụ huynh
  {
    id: 4,
    name: "Phạm Thị Lan",
    email: "phuhuynh@gmail.com",
    password: "123456789",
    role: "parent",
    phone: "0901234570",
    address: "321 Võ Văn Tần, Quận 3, TP.HCM",
    children: [
      {
        name: "Phạm Minh Khang",
        class: "7A1",
        studentId: "HS001"
      }
    ]
  },
  
  // Tài khoản cho Bác sĩ đơn vị y tế
  {
    id: 5,
    name: "Bác sĩ Nguyễn Thị Mai",
    email: "bacsi@ttytquan1.gov.vn",
    password: "123456789",
    role: "doctor",
    organization: "Trung tâm Y tế Quận 1",
    phone: "0901234571",
    address: "654 Nguyễn Thị Minh Khai, Quận 1, TP.HCM",
    specialization: "Nhi khoa"
  },
  
  // Tài khoản cho Quản trị viên hệ thống
  {
    id: 6,
    name: "Admin System",
    email: "admin@schoolmedical.com",
    password: "admin123456",
    role: "admin",
    phone: "0901234572",
    permissions: ["full_access"]
  }
];

// Dữ liệu mẫu cho đăng ký nhanh
export const quickRegisterData = {
  // Dữ liệu cho Hiệu trường
  principal: {
    name: "Nguyễn Văn Minh",
    email: "hieutruong@truonghoc.edu.vn",
    password: "123456789",
    confirmPassword: "123456789"
  },
  
  // Dữ liệu cho Y tá
  nurse: {
    name: "Trần Thị Hương",
    email: "yta@truonghoc.edu.vn",
    password: "123456789",
    confirmPassword: "123456789"
  },
  
  // Dữ liệu cho Giáo viên
  teacher: {
    name: "Lê Văn Thành",
    email: "giaovien@truonghoc.edu.vn",
    password: "123456789",
    confirmPassword: "123456789"
  },
  
  // Dữ liệu cho Phụ huynh
  parent: {
    name: "Phạm Thị Lan",
    email: "phuhuynh@gmail.com",
    password: "123456789",
    confirmPassword: "123456789"
  },
  
  // Dữ liệu cho Bác sĩ
  doctor: {
    name: "Bác sĩ Nguyễn Thị Mai",
    email: "bacsi@ttytquan1.gov.vn",
    password: "123456789",
    confirmPassword: "123456789"
  }
};

// Dữ liệu mẫu cho đăng nhập nhanh
export const quickLoginData = {
  // Đăng nhập Hiệu trường
  principal: {
    email: "hieutruong@truonghoc.edu.vn",
    password: "123456789"
  },
  
  // Đăng nhập Y tá
  nurse: {
    email: "yta@truonghoc.edu.vn",
    password: "123456789"
  },
  
  // Đăng nhập Giáo viên
  teacher: {
    email: "giaovien@truonghoc.edu.vn",
    password: "123456789"
  },
  
  // Đăng nhập Phụ huynh
  parent: {
    email: "phuhuynh@gmail.com",
    password: "123456789"
  },
  
  // Đăng nhập Bác sĩ
  doctor: {
    email: "bacsi@ttytquan1.gov.vn",
    password: "123456789"
  },
  
  // Đăng nhập Admin
  admin: {
    email: "admin@schoolmedical.com",
    password: "admin123456"
  }
};

// Hàm tiện ích để validate đăng nhập
export const validateLogin = (email, password) => {
  const user = mockUsers.find(user => 
    user.email === email && user.password === password
  );
  return user ? { success: true, user } : { success: false, message: "Email hoặc mật khẩu không đúng" };
};

// Hàm tiện ích để đăng ký tài khoản mới
export const registerUser = (userData) => {
  const existingUser = mockUsers.find(user => user.email === userData.email);
  if (existingUser) {
    return { success: false, message: "Email đã được sử dụng" };
  }
  
  const newUser = {
    id: mockUsers.length + 1,
    ...userData,
    role: "user" // role mặc định
  };
  
  mockUsers.push(newUser);
  return { success: true, user: newUser };
};
