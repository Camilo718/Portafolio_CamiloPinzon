// // src/sections/WhatIDoSection.jsx
import { SectionTitle, SectionDivider } from "../components/SectionTitle";
import { SKILLS } from "../data/portfolioData";

export default function WhatIDoSection() {
  return (
    <section id="whatido" style={{ padding: "4rem 2.5rem", background: "var(--color-bg)" }}>
      <SectionTitle>What I Do?</SectionTitle>
      <SectionDivider />

      <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
        {SKILLS.map((skill, i) => (
          <div
            key={skill.title}
            style={{
              display: "grid",
              gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
              alignItems: "center",
              gap: "3rem",
              direction: i % 2 === 0 ? "ltr" : "rtl",
            }}
          >
            {/* Ilustración */}
            <div style={{ display: "flex", justifyContent: "center", direction: "ltr" }}>
              <img
                src={skill.image} 
                alt={`Illustration for ${skill.title}`} 
                style={{ maxWidth: 360, width: "100%", objectFit: "contain" }}
              />
            </div>

            {/* Contenido */}
            <div style={{ direction: "ltr" }}>
              <h3 style={{ fontSize: 26, fontWeight: 500, color: "var(--color-navy)", marginBottom: "1rem" }}>
                {skill.icon} {skill.title}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "1.25rem" }}>
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "var(--color-tag-bg)",
                      color: "var(--color-tag-text)",
                      fontSize: 12,
                      fontWeight: 500,
                      padding: "4px 12px",
                      borderRadius: 6,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ul style={{ padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {skill.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: 14,
                      color: "#4A5A82",
                      lineHeight: 1.6,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                    }}
                  >
                    <span style={{ color: "#f52323", marginTop: 2 }}>⚡</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}