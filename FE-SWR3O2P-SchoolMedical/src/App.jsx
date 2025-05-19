import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Documents from "./pages/Documents";

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
