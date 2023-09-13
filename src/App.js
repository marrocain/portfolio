import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import ProjectDetail1 from './components/Projects/ProjectDetail1'; // Import your project detail components
import ProjectDetail2 from './components/Projects/ProjectDetail2'; // Import your project detail components
import ProjectDetail3 from './components/Projects/ProjectDetail3'; // Import your project detail components
import ProjectDetail4 from './components/Projects/ProjectDetail4'; // Import your project detail components
import ProjectDetail5 from './components/Projects/ProjectDetail5'; // Import your project detail components
import ProjectDetail6 from './components/Projects/ProjectDetail6'; // Import your project detail components
import ProjectDetail7 from './components/Projects/ProjectDetail7'; // Import your project detail components
import ProjectDetail8 from './components/Projects/ProjectDetail8'; // Import your project detail components

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
          <Route path="/project1" element={<ProjectDetail1 />} />
          <Route path="/project2" element={<ProjectDetail2 />} />
          <Route path="/project3" element={<ProjectDetail3 />} />
          <Route path="/project4" element={<ProjectDetail4 />} />
          <Route path="/project5" element={<ProjectDetail5 />} />
          <Route path="/project6" element={<ProjectDetail6 />} />
          <Route path="/project7" element={<ProjectDetail7 />} />
          <Route path="/project8" element={<ProjectDetail8 />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
