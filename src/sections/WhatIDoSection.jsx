// src/sections/WhatIDoSection.jsx
import { SectionTitle, SectionDivider } from "../components/SectionTitle";
import { SKILLS } from "../data/portfolioData";

export default function WhatIDoSection() {
  return (
    <section
      id="whatido"
      style={{
        padding: "4rem 2.5rem",
        background: "var(--color-bg)",
      }}
    >
      <SectionTitle>What I Do?</SectionTitle>
      <SectionDivider />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.5rem",
        }}
      >
        {SKILLS.map((skill) => (
          <div
            key={skill.title}
            style={{
              background: "var(--color-bg-card)",
              borderRadius: "var(--radius-card)",
              border: "var(--border-card)",
              padding: "1.5rem 1.75rem",
            }}
          >
            <h3
              style={{
                fontSize: 17,
                fontWeight: 500,
                color: "var(--color-navy)",
                marginBottom: "0.75rem",
              }}
            >
              {skill.icon} {skill.title}
            </h3>

            {/* Tags de herramientas */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginBottom: "1rem",
              }}
            >
              {skill.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "var(--color-tag-bg)",
                    color: "var(--color-tag-text)",
                    fontSize: 12,
                    fontWeight: 500,
                    padding: "4px 10px",
                    borderRadius: 6,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Lista de capacidades */}
            <ul style={{ padding: 0 }}>
              {skill.items.map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: 13,
                    color: "#4A5A82",
                    padding: "4px 0",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 8,
                  }}
                >
                  <span>⚡</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
