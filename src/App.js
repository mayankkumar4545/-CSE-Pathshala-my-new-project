import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import theme from "./theme";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import FAQ from "./pages/FAQ";
import CourseDetail from "./pages/CourseDetail";
import Contact from "./pages/Contact";
import CourseDetails from "./pages/CourseDetails";

function App() {
  // Initialize AOS
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/tutorials" element={<Courses />} />
            <Route path="/courses/non-tech" element={<Courses />} />
            <Route path="/courses/tech" element={<Courses />} />
            <Route path="/course/:courseSlug" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/course/:courseName" element={<CourseDetail />} />
            <Route path="/course/:courseId" element={<CourseDetails />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
