import { useState } from "react";
import "./styles/global.css";
import Navbar          from "./components/Navbar";
import HomeSection     from "./sections/HomeSection";
import WhatIDoSection  from "./sections/WhatIDoSection";
import EducationSection from "./sections/EducationSection";
import ProjectsSection from "./sections/ProjectsSection";

export default function App() {
  const [active, setActive] = useState("Home");

  return (
    <div style={{ background: "var(--color-bg)" }}>
      <Navbar active={active} onNav={setActive} />
      <HomeSection />
      <WhatIDoSection />
      <EducationSection />
      <ProjectsSection />
    </div>
  );
}
