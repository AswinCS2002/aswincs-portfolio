import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Internship from "./Components/Internship";
import InternshipDetails from "./Components/InternshipDetails";
import Projects from "./Components/Projects";
import ProjectDetails from "./Components/ProjectDetails";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  // ===== BACK TO TOP BUTTON BEHAVIOUR =====
  useEffect(() => {
    let hideTimer;
    const btn = document.getElementById("backToTop");

    const showButton = () => {
      btn.classList.add("show");

      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => {
        btn.classList.remove("show");
      }, 5000);
    };

    const handleMouseMove = () => showButton();
    const handleScroll = () => {
      if (window.scrollY > 150) showButton();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />

      {/* BACK TO TOP BUTTON */}
      <div
        id="backToTop"
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="hero">
                <Hero />
              </section>

              <section id="about">
                <About />
              </section>

              <section id="education">
                <Education />
              </section>

              <section id="skills">
                <Skills />
              </section>

              <section id="internship">
                <Internship />
              </section>

              <section id="projects">
                <Projects />
              </section>

              <section id="contact">
                <Contact />
              </section>

              <section id="footer">
                <Footer />
              </section>
            </>
          }
        />

        <Route path="/internship/:id" element={<InternshipDetails />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </>
  );
}

export default App;
