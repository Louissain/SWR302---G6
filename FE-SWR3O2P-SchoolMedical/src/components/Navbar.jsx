import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#1976d2", color: "#fff" }}>
      <Link to="/" style={{ marginRight: 10, color: "#fff" }}>
        Trang chủ
      </Link>
      <Link to="/about" style={{ marginRight: 10, color: "#fff" }}>
        Giới thiệu
      </Link>
      <Link to="/blog" style={{ marginRight: 10, color: "#fff" }}>
        Blog sức khỏe
      </Link>
      <Link to="/documents" style={{ marginRight: 10, color: "#fff" }}>
        Tài liệu học đường
      </Link>
      {/* Các liên kết từ nhánh feature/student-health-vaccine-checkup */}
      <Link to="/student-profile" style={{ marginRight: 10, color: "#fff" }}>
        Hồ sơ sức khỏe học sinh
      </Link>
      <Link to="/vaccination-management" style={{ marginRight: 10, color: "#fff" }}>
        Quản lý Tiêm chủng
      </Link>
      <Link to="/health-check-management" style={{ marginRight: 10, color: "#fff" }}>
        Kiểm tra sức khỏe định kỳ
      </Link>
      <Link to="/health-check-management" style={{ marginRight: 10, color: "#fff" }}>
        Kiểm tra sức khỏe định kỳ
      </Link>
      <Link to="/medical" style={{ marginRight: 10, color: "#fff" }}>
        Thuốc và vật tư y tế
      </Link>
    </nav>
  );
}