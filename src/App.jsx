import { useState, useEffect } from "react";
import "./styles/global.css";
import { useLanguage } from "./context/LanguageContext";
import Navbar             from "./components/Navbar";
import ScrollProgress     from "./components/ScrollProgress";
import HomeSection        from "./sections/HomeSection";
import WhatIDoSection     from "./sections/WhatIDoSection";
import EducationSection   from "./sections/EducationSection";
import CredentialsSection from "./sections/CredentialsSection";
import ExperienceSection  from "./sections/ExperienceSection";
import ProjectsSection    from "./sections/ProjectsSection";
import GitHubSection      from "./sections/GitHubSection";
import ContactSection     from "./sections/ContactSection";

const SECTION_MAP = {
  home: "home", whatido: "home", education: "education", credentials: "education",
  experience: "experience", projects: "projects",
  github: "github", contact: "contact",
};

export default function App() {
  const { t } = useLanguage();
  const [active, setActive] = useState("home");

  const navLinks = [
    { key: "home",       label: t.nav.home },
    { key: "education",  label: t.nav.education },
    { key: "experience", label: t.nav.experience },
    { key: "projects",   label: t.nav.projects },
    { key: "github",     label: t.nav.github },
    { key: "contact",    label: t.nav.contact },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) setActive(SECTION_MAP[e.target.id] || "home");
      }),
      { threshold: 0.3 }
    );
    Object.keys(SECTION_MAP).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (key) => {
    setActive(key);
    document.getElementById(key)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "var(--color-bg)" }}>
      <ScrollProgress />
      <Navbar active={active} onNav={handleNav} navLinks={navLinks} />
      <HomeSection />
      <WhatIDoSection />
      <EducationSection />
      <CredentialsSection />
      <ExperienceSection />
      <ProjectsSection />
      <GitHubSection />
      <ContactSection />
    </div>
  );
}
