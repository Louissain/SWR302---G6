import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Documents from "./pages/Documents";
import Medical from "./pages/Medical"; // Import trang Medical

// Import các component từ nhánh feature/student-health-vaccine-checkup
import StudentProfile from "./components/student/StudentProfile"; 
import VaccinationManagement from "./pages/VaccinationManagement";
import HealthCheckManagement from "./pages/HealthCheckManagement";  

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/*" element={<Blog />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/medical" element={<Medical />} /> {/* Thêm route cho trang Medical */}
          
          {/* Thêm routes từ nhánh feature/student-health-vaccine-checkup */}
          <Route path="/student-profile" element={<StudentProfile />} />
          <Route path="/vaccination-management" element={<VaccinationManagement />} />
          <Route path="/health-check-management" element={<HealthCheckManagement />} />
          <Route path="/medical" element={<Medical />} /> {/* Route fallback cho các đường dẫn không hợp lệ */}
           
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;