import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Documents from "./pages/Documents";
import Medical from "./pages/Medical";
import Loginn from "./pages/Login";
import Profile from "./pages/Profile";
// Import new DocumentDetail component
import DocumentDetail from "./pages/DocumentDetail";
// Import SubmitMedicationForm component
import SubmitMedicationForm from "./pages/SubmitMedicationForm";
// Import SampleDataHelper component
import SampleDataHelper from "./components/SampleDataHelper";
// Import MedicineDetails component
import MedicineDetails from "./Components/MedicineDetails";

// Import các component từ nhánh feature/student-health-vaccine-checkup
import StudentProfile from "./components/student/StudentProfile"; 
import VaccinationManagement from "./pages/VaccinationManagement";
import HealthCheckManagement from "./pages/HealthCheckManagement";  
import EventPage from "./pages/EventPage";

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
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/*" element={<Blog />} />
          <Route path="/documents" element={<Documents />} />
          {/* New route for document detail page */}          <Route path="/documents/:id" element={<DocumentDetail />} />
          {/* Routes từ nhánh feature/student-health-vaccine-checkup */}
          <Route path="/student-profile" element={<StudentProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/vaccination-management" element={<VaccinationManagement />} />          <Route path="/health-check-management" element={<HealthCheckManagement />} />
          <Route path="/medical" element={<Medical />} /> {/* Route fallback cho các đường dẫn không hợp lệ */}
          <Route path="/login" element={<Loginn />} />
          <Route path="/sample-data" element={<SampleDataHelper />} />
        
          {/* Route từ nhánh feature/medicine-dashboard-report */}
          <Route path="/medical" element={<Medical />} />
          {/* New route for submit medication form */}
          <Route path="/submit-medication" element={<SubmitMedicationForm />} />
          <Route path="/event-management" element={<EventPage />} />
          {/* New route for medicine details */}
          <Route path="/medicine-details/:id" element={<MedicineDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;