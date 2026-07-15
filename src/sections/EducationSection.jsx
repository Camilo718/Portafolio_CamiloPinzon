import { SectionTitle, SectionDivider } from "../components/SectionTitle";
import { EDUCATION } from "../data/portfolioData";
import FadeIn from "../components/FadeIn";

export default function EducationSection() {
  return (
    <section id="education" className="px-10 py-16" style={{ background: "var(--color-bg-alt)" }}>
      <SectionTitle>Educación</SectionTitle>
      <SectionDivider />

      <div className="grid grid-cols-[1fr_2fr] items-center gap-12">
        <FadeIn direction="left">
          <div className="flex justify-center">
            <img src="../../public/images/educaciones.png" alt="Education" className="max-w-[420px] w-full object-cover" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 gap-4">
          {EDUCATION.map((edu, i) => (
            <FadeIn key={edu.title} delay={i * 80} direction="up">
              <div
                className="rounded-2xl border p-5 flex flex-col gap-1.5 h-full shadow-sm
                           transition-transform duration-200 hover:-translate-y-1"
                style={{ background: "var(--color-bg-card)", borderColor: "var(--color-tag-bg)" }}
              >
                <span
                  className="text-[11px] font-medium px-2.5 py-0.5 rounded-md w-fit"
                  style={{ background: "var(--color-tag-bg)", color: "var(--color-tag-text)" }}
                >
                  {edu.badge}
                </span>
                <h4 className="text-sm font-medium leading-snug" style={{ color: "var(--color-navy)" }}>
                  {edu.title}
                </h4>
                <p className="text-xs" style={{ color: "var(--color-muted)" }}>{edu.institution}</p>
                <p className="text-xs" style={{ color: "var(--color-faint)" }}>{edu.year}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
