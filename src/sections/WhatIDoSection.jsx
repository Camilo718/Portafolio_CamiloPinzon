import { SectionTitle, SectionDivider } from "../components/SectionTitle";
import { SKILLS } from "../data/portfolioData";
import FadeIn from "../components/FadeIn";
import { HiOutlineLightningBolt } from "react-icons/hi"; // ✅ Nombre correcto

export default function WhatIDoSection() {
  return (
    <section id="whatido" className="px-10 py-16" style={{ background: "var(--color-bg)" }}>
      <SectionTitle>What I Do</SectionTitle>
      <SectionDivider />

      <div className="flex flex-col gap-20">
        {SKILLS.map((skill, i) => (
          <div key={skill.title} className="grid grid-cols-2 items-center gap-12">
            <FadeIn direction={i % 2 === 0 ? "left" : "right"}>
              <div className={`flex justify-center ${i % 2 !== 0 ? "order-last" : ""}`}>
                <img src={skill.image} alt={skill.title} className="max-w-[370px] w-full object-contain" />
              </div>
            </FadeIn>

            <FadeIn direction={i % 2 === 0 ? "right" : "left"} delay={100}>
              <div className={i % 2 !== 0 ? "order-first" : ""}>
                <h3 className="text-2xl font-medium mb-4 flex items-center gap-3" style={{ color: "var(--color-navy)" }}>
                  <skill.icon size={28} className="text-blue-600" />
                  {skill.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-5">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-md"
                      style={{ background: "var(--color-tag-bg)", color: "var(--color-tag-text)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="flex flex-col gap-2 p-0 list-none">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-relaxed"
                      style={{ color: "var(--color-light)" }}>
                      {/* ✅ Icono corregido */}
                      <HiOutlineLightningBolt className="mt-0.5 text-yellow-500 shrink-0" size={16} />
                      <span>{item}</span>
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