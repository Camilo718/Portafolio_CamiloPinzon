// src/components/ScrollProgress.jsx
import { useEffect } from "react";

export default function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById("scroll-progress");
    const btn = document.getElementById("back-to-top");

    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      if (bar) bar.style.width = `${(scrolled / total) * 100}%`;
      if (btn) btn.classList.toggle("visible", scrolled > 300);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div id="scroll-progress" />
      <button id="back-to-top" onClick={scrollTop} aria-label="Volver arriba">↑</button>
    </>
  );
}
