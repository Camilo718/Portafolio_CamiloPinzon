import { FaBolt } from "react-icons/fa";
import { SectionTitle, SectionDivider } from "../components/SectionTitle";
import { SKILLS } from "../data/portfolioData";
import FadeIn from "../components/FadeIn";

export default function WhatIDoSection() {
  return (
    <section id="whatido" style={{ padding: "4rem 2.5rem", background: "var(--color-bg)" }}>
      <SectionTitle>Lo que hago</SectionTitle>
      <SectionDivider />
      <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
        {SKILLS.map((skill, i) => (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: "3rem" }}>
            <FadeIn direction={i % 2 === 0 ? "left" : "right"}>
              <div style={{ display: "flex", justifyContent: "center", order: i % 2 === 0 ? 0 : 1 }}>
                <img src="../../public/Images/develop.png" style={{ maxWidth: 340, width: "100%", objectFit: "contain" }} />
              </div>
            </FadeIn>
            <FadeIn direction={i % 2 === 0 ? "right" : "left"} delay={100}>
              <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                <h3 style={{ fontSize: 24, fontWeight: 500, color: "var(--color-navy)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: 10 }}>
                  {skill.icon && <skill.icon style={{ fontSize: 22, color: "var(--color-accent)" }} />}
                  <span>{skill.title}</span>
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "1.25rem" }}>
                  {skill.tags.map((tag) => (
                    <span key={tag} style={{ background: "var(--color-tag-bg)", color: "var(--color-tag-text)", fontSize: 12, fontWeight: 500, padding: "4px 12px", borderRadius: 6 }}>{tag}</span>
                  ))}
                </div>
                <ul style={{ padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {skill.items.map((item) => (
                    <li key={item} style={{ fontSize: 14, color: "var(--color-text-light)", lineHeight: 1.6, display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <span style={{ color: "#F5A623", marginTop: 2 }}><FaBolt /></span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        ))}
      </div>
    </section>
  );
}
