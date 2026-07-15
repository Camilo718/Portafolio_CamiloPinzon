import { SectionTitle, SectionDivider } from "../components/SectionTitle";
import { EXPERIENCE } from "../data/portfolioData";
import FadeIn from "../components/FadeIn";

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-10 py-16" style={{ background: "var(--color-bg)" }}>
      <SectionTitle>Experiencia</SectionTitle>
      <SectionDivider />

      <div className="grid grid-cols-[1fr_2fr] items-start gap-12">
        <FadeIn direction="left">
          <div className="flex justify-center pt-4">
            <img src="../../public/images/Experience.png" alt="Experience" className="max-w-[280px] w-full object-contain" />
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute left-5 top-0 bottom-0 w-0.5"
            style={{ background: "var(--color-tag-bg)" }}
          />
          <div className="flex flex-col gap-7">
            {EXPERIENCE.map((exp, i) => (
              <FadeIn key={exp.role} delay={i * 100} direction="right">
                <div className="flex gap-6 items-start">
                  {/* Dot */}
                  <div
                    className="min-w-[40px] h-10 rounded-full flex items-center justify-center
                               text-lg text-white z-10 shrink-0"
                    style={{
                      background: "var(--color-navy)",
                      boxShadow: "0 0 0 4px var(--color-bg)",
                    }}
                  >
                    {exp.logo}
                  </div>

                  {/* Card */}
                  <div
                    className="rounded-2xl border p-5 flex-1 shadow-sm
                               transition-transform duration-200 hover:-translate-y-1"
                    style={{ background: "var(--color-bg-card)", borderColor: "var(--color-tag-bg)" }}
                  >
                    <div className="flex justify-between flex-wrap gap-1 mb-1">
                      <h4 className="text-sm font-semibold" style={{ color: "var(--color-navy)" }}>
                        {exp.role}
                      </h4>
                      <span className="text-xs" style={{ color: "var(--color-faint)" }}>{exp.period}</span>
                    </div>
                    <div className="flex justify-between flex-wrap mb-2">
                      <p className="text-xs font-medium" style={{ color: "var(--color-muted)" }}>{exp.company}</p>
                      <p className="text-xs" style={{ color: "var(--color-faint)" }}>{exp.location}</p>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--color-light)" }}>
                      {exp.description}
                    </p>
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
