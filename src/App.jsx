import { useState, useEffect } from "react";
import "./styles/global.css";

import Navbar            from "./components/Navbar";
import ScrollProgress    from "./components/ScrollProgress";
import HomeSection       from "./sections/HomeSection";
import WhatIDoSection    from "./sections/WhatIDoSection";
import EducationSection  from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection   from "./sections/ProjectsSection";
import GitHubSection     from "./sections/GitHubSection";
import ContactSection    from "./sections/ContactSection";

const NAV_LINKS = ["Home", "Education", "Experience", "Projects", "GitHub", "Contact Me"];

const SECTION_MAP = {
  home: "Home", whatido: "Home", education: "Education",
  experience: "Experience", projects: "Projects",
  github: "GitHub", contact: "Contact Me",
};

const NAV_ID_MAP = {
  "Home": "home", "Education": "education", "Experience": "experience",
  "Projects": "projects", "GitHub": "github", "Contact Me": "contact",
};

export default function App() {
  const [active, setActive]     = useState("Home");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) setActive(SECTION_MAP[e.target.id] || "Home");
      }),
      { threshold: 0.3 }
    );
    Object.keys(SECTION_MAP).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (link) => {
    setActive(link);
    document.getElementById(NAV_ID_MAP[link])?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ background: "var(--color-bg)" }}>
      <ScrollProgress />
      <Navbar
        active={active} onNav={handleNav}
        darkMode={darkMode} toggleDark={() => setDarkMode(!darkMode)}
        navLinks={NAV_LINKS}
      />
      <HomeSection />
      <WhatIDoSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <GitHubSection />
      <ContactSection />
    </div>
  );
}
