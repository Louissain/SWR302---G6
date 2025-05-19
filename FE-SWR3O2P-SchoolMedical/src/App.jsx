import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import StudentProfile from "./components/student/StudentProfile"; 
import VaccinationManagement from "./pages/VaccinationManagement";
import HealthCheckManagement from "./pages/HealthCheckManagement";

function App() {
  return (
    <Router>
      <nav style={{ padding: 10, borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ marginRight: 10 }}>
          Trang chủ
        </Link>
        <Link to="/student-profile" style={{ marginRight: 10 }}>
          Hồ sơ sức khỏe học sinh
        </Link>
        <Link to="/vaccination-management" style={{ marginRight: 10 }}>
          Quản lý Tiêm chủng
        </Link>
        <Link to="/health-check-management" style={{ marginRight: 10 }}>
          Kiểm tra sức khỏe định kỳ
        </Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<h1>Phần mềm quản lý y tế học đường</h1>}
        />
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/vaccination-management" element={<VaccinationManagement />} />
        <Route path="/health-check-management" element={<HealthCheckManagement />} />
        {/* Nếu muốn, bạn có thể thêm route NotFound hoặc các route khác sau */}
      </Routes>
    </Router>
  );
}

export default App;
