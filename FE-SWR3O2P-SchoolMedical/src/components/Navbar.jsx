import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Trang chủ", icon: "home" },
    { path: "/about", label: "Giới thiệu", icon: "info" },
    { path: "/blog", label: "Blog sức khỏe", icon: "book" },
    { path: "/documents", label: "Tài liệu học đường", icon: "document" },
    { path: "/student-profile", label: "Hồ sơ sức khỏe học sinh", icon: "user" },
    { path: "/vaccination-management", label: "Quản lý Tiêm chủng", icon: "vaccine" },
    { path: "/health-check-management", label: "Kiểm tra sức khỏe định kỳ", icon: "calendar" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case "home":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        );
      case "info":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        );
      case "book":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
          </svg>
        );
      case "document":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        );
      case "user":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        );
      case "vaccine":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        );
      case "calendar":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
        );
      default:
        return null;
    }
  };

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
      <Link to="/login" style={{ marginRight: 30,color: "#fff" }}>
        Đăng nhập
      </Link>
    </nav>
  );
}