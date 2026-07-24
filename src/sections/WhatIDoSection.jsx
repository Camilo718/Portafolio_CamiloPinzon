import { SectionTitle, SectionDivider } from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";
import FadeIn from "../components/FadeIn";

export default function WhatIDoSection() {
  const { t } = useLanguage();

  return (
    <section id="whatido" className="px-4 sm:px-6 md:px-10 py-12 md:py-16" style={{ background: "var(--color-bg)" }}>
      <SectionTitle>{t.whatido.title}</SectionTitle>
      <SectionDivider />

      <div className="flex flex-col gap-14 md:gap-20">
        {t.whatido.skills.map((skill, i) => {
          const SkillIcon = skill.icon;
          return (
            <div key={skill.title} className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
              <FadeIn direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`flex justify-center ${i % 2 !== 0 ? "md:order-last" : ""}`}>
                  <img src={skill.image} alt={skill.title} className="max-w-[240px] sm:max-w-[280px] md:max-w-[420px] w-full object-contain" />
                </div>
              </FadeIn>

              <FadeIn direction={i % 2 === 0 ? "right" : "left"} delay={100}>
                <div className={i % 2 !== 0 ? "md:order-first" : ""}>
                  <h3 className="text-xl md:text-2xl font-medium mb-4 flex items-center gap-2 justify-center md:justify-start text-center md:text-left"
                    style={{ color: "var(--color-navy)" }}>
                    {SkillIcon && <SkillIcon size={20} />} {skill.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-5 justify-center md:justify-start">
                    {skill.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium px-3 py-1 rounded-md"
                        style={{ background: "var(--color-tag-bg)", color: "var(--color-tag-text)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ul className="flex flex-col gap-2 p-0 list-none">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm leading-relaxed"
                        style={{ color: "var(--color-light)" }}>
                        <span className="mt-0.5 text-yellow-500 shrink-0">⚡</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          );
        })}
      </div>
    </section>
  );
}
