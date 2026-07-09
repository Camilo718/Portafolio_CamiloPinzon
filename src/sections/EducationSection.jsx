import { SectionTitle, SectionDivider } from "../components/SectionTitle";
import { EDUCATION } from "../data/portfolioData";
import FadeIn from "../components/FadeIn";

export default function EducationSection() {
  return (
    <section id="education" style={{ padding: "4rem 2.5rem", background: "var(--color-bg-alt)" }}>
      <SectionTitle>Educación</SectionTitle>
      <SectionDivider />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", alignItems: "center", gap: "3rem" }}>
        <FadeIn direction="left">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src="../../public/Images/educaciones.png" alt="Education" style={{ maxWidth: 280, width: "100%", objectFit: "contain" }} />
          </div>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
          {EDUCATION.map((edu, i) => (
            <FadeIn key={edu.title} delay={i * 80} direction="up">
              <div style={{ background: "var(--color-bg-card)", borderRadius: "var(--radius-card)", border: "var(--border-card)", padding: "1.4rem 1.6rem", display: "flex", flexDirection: "column", gap: 6, height: "100%", boxShadow: "var(--shadow-card)" }}>
                <span style={{ display: "inline-block", fontSize: 11, fontWeight: 500, background: "var(--color-tag-bg)", color: "var(--color-tag-text)", borderRadius: 6, padding: "3px 9px", width: "fit-content" }}>{edu.badge}</span>
                <h4 style={{ fontSize: 14, fontWeight: 500, color: "var(--color-navy)", lineHeight: 1.4 }}>{edu.title}</h4>
                <p style={{ fontSize: 13, color: "var(--color-text-muted)" }}>{edu.institution}</p>
                <p style={{ fontSize: 12, color: "var(--color-text-faint)" }}>{edu.year}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
