// src/App.jsx
import { useState, useEffect } from "react";
import "./styles/global.css";

import Navbar            from "./components/Navbar";
import ScrollProgress    from "./components/ScrollProgress";
import HomeSection       from "./sections/HomeSection";
import WhatIDoSection    from "./sections/WhatIDoSection";
import EducationSection  from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection   from "./sections/ProjectsSection";
import ContactSection    from "./sections/ContactSection";

export default function App() {
  const [active, setActive]     = useState("Home");
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode to <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Update active nav on scroll
  useEffect(() => {
    const sectionMap = {
      home: "Home", whatido: "Home", education: "Education",
      experience: "Experience", projects: "Projects", contact: "Contact Me",
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActive(sectionMap[e.target.id] || "Home");
      });
    }, { threshold: 0.4 });

    Object.keys(sectionMap).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (link) => {
    setActive(link);
    const idMap = { "Home": "home", "Education": "education", "Experience": "experience", "Projects": "projects", "Contact Me": "contact" };
    const el = document.getElementById(idMap[link]);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <ScrollProgress />
      <Navbar active={active} onNav={handleNav} darkMode={darkMode} toggleDark={() => setDarkMode(!darkMode)} />
      <HomeSection />
      <WhatIDoSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
