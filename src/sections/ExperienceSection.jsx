// src/sections/ExperienceSection.jsx
import { SectionTitle, SectionDivider } from "../components/SectionTitle";
import { EXPERIENCE } from "../data/portfolioData";

export default function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: "4rem 2.5rem", background: "var(--color-bg)" }}>
      <SectionTitle>Experience</SectionTitle>
      <SectionDivider />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", alignItems: "flex-start", gap: "3rem" }}>
        {/* Ilustración */}
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "1rem" }}>
          <img
            src="../../public/Images/Experience.png"
            alt="Experience illustration"
            style={{ maxWidth: 300, width: "100%", objectFit: "contain" }}
          />
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Línea vertical */}
          <div
            style={{
              position: "absolute", left: 20, top: 0, bottom: 0,
              width: 2, background: "rgba(30,60,120,0.15)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {EXPERIENCE.map((exp) => (
              <div key={exp.role} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                {/* Dot */}
                <div
                  style={{
                    minWidth: 40, height: 40, borderRadius: "50%",
                    background: "var(--color-navy)", color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, zIndex: 1, boxShadow: "0 0 0 4px var(--color-bg)",
                  }}
                >
                  {exp.logo}
                </div>

                {/* Card */}
                <div
                  style={{
                    background: "var(--color-bg-card)",
                    borderRadius: "var(--radius-card)",
                    border: "var(--border-card)",
                    padding: "1.25rem 1.5rem",
                    flex: 1,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 4 }}>
                    <h4 style={{ fontSize: 15, fontWeight: 500, color: "var(--color-navy)" }}>{exp.role}</h4>
                    <span style={{ fontSize: 12, color: "var(--color-text-faint)" }}>{exp.period}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", margin: "2px 0 8px", flexWrap: "wrap" }}>
                    <p style={{ fontSize: 13, color: "var(--color-text-muted)", fontWeight: 500 }}>{exp.company}</p>
                    <p style={{ fontSize: 12, color: "var(--color-text-faint)" }}>{exp.location}</p>
                  </div>
                  <p style={{ fontSize: 13, color: "#4A5A82", lineHeight: 1.65 }}>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
