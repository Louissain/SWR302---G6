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
      <Link to="/documents" style={{ color: "#fff" }}>
        Tài liệu học đường
      </Link>
    </nav>
  );
}
