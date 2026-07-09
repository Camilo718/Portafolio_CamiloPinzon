import { SectionTitle, SectionDivider } from "../components/SectionTitle";
import { EXPERIENCE } from "../data/portfolioData";
import FadeIn from "../components/FadeIn";

export default function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: "4rem 2.5rem", background: "var(--color-bg)" }}>
      <SectionTitle>Experiencia</SectionTitle>
      <SectionDivider />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", alignItems: "flex-start", gap: "3rem" }}>
        <FadeIn direction="left">
          <div style={{ display: "flex", justifyContent: "center", paddingTop: "1rem" }}>
            <img src="../../public/Images/Experience.png" alt="Experience" style={{ maxWidth: 480, width: "100%", objectFit: "contain" }} />
          </div>
        </FadeIn>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 2, background: "var(--color-border)" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {EXPERIENCE.map((exp, i) => (
              <FadeIn key={exp.role} delay={i * 100} direction="right">
                <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                  <div style={{ minWidth: 40, height: 40, borderRadius: "50%", background: "var(--color-navy)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1, boxShadow: "0 0 0 4px var(--color-bg)" }}>
                    {exp.logo && <exp.logo style={{ fontSize: 18 }} />}
                  </div>
                  <div style={{ background: "var(--color-bg-card)", borderRadius: "var(--radius-card)", border: "var(--border-card)", padding: "1.25rem 1.5rem", flex: 1, boxShadow: "var(--shadow-card)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 4 }}>
                      <h4 style={{ fontSize: 15, fontWeight: 500, color: "var(--color-navy)" }}>{exp.role}</h4>
                      <span style={{ fontSize: 12, color: "var(--color-text-faint)" }}>{exp.period}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", margin: "2px 0 8px", flexWrap: "wrap" }}>
                      <p style={{ fontSize: 13, color: "var(--color-text-muted)", fontWeight: 500 }}>{exp.company}</p>
                      <p style={{ fontSize: 12, color: "var(--color-text-faint)" }}>{exp.location}</p>
                    </div>
                    <p style={{ fontSize: 13, color: "var(--color-text-light)", lineHeight: 1.65 }}>{exp.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
