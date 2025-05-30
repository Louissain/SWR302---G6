import { useState, useEffect } from "react";
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
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Apply dark mode class to document root when state changes
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }

    // Add loaded class to body after components mount
    setLoaded(true);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/*" element={<Blog />} />
          <Route path="/documents" element={<Documents />} />
          {/* Thêm routes từ nhánh feature/student-health-vaccine-checkup */}
          <Route path="/student-profile" element={<StudentProfile />} />
          <Route path="/vaccination-management" element={<VaccinationManagement />} />
          <Route path="/health-check-management" element={<HealthCheckManagement />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;