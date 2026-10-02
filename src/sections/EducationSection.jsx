import { useState } from "react";
import { Eye, ShieldCheck, X } from "lucide-react";
import { SectionTitle, SectionDivider } from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";
import FadeIn from "../components/FadeIn";
import Educacion from "../../public/Images/educaciones.png";

const DIPLOMA_MAP = {
  "tecnologo en analisis y desarrollo de software": "/Images/diplomas/tecnologo.png",
  "technologist in software analysis and development": "/Images/diplomas/tecnologo.png",
  "tecnico en programacion de software": "/Images/diplomas/tecnico.png",
  "software programming technician": "/Images/diplomas/tecnico.png",
};

const normalizeTitle = (title) =>
  title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();

export default function EducationSection() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(null);

  return (
    <section id="education" className="px-4 sm:px-6 md:px-10 py-12 md:py-16" style={{ background: "var(--color-bg-alt)" }}>
      <SectionTitle>{t.education.title}</SectionTitle>
      <SectionDivider />

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] items-center gap-8 md:gap-12">
        <FadeIn direction="left">
          <div className="flex justify-center">
            <img src={Educacion} alt="Education" className="max-w-[200px] sm:max-w-[240px] md:max-w-[380px] w-full object-contain" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {t.education.items.map((edu, i) => {
            const diplomaSrc = DIPLOMA_MAP[normalizeTitle(edu.title)];
            return (
              <FadeIn key={edu.title} delay={i * 80} direction="up">
                <div
                  onClick={() => diplomaSrc && setSelected({ ...edu, src: diplomaSrc })}
                  className={`rounded-2xl border p-5 flex flex-col gap-1.5 h-full shadow-sm
                             transition-transform duration-200 hover:-translate-y-1 ${diplomaSrc ? "cursor-pointer" : ""}`}
                  style={{ background: "var(--color-bg-card)", borderColor: "var(--color-tag-bg)" }}>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-md w-fit"
                      style={{ background: "var(--color-tag-bg)", color: "var(--color-tag-text)" }}>
                      {edu.badge}
                    </span>
                    {diplomaSrc && (
                      <span className="flex items-center gap-1 text-[10px] font-medium" style={{ color: "var(--color-accent)" }}>
                        <Eye size={11} /> {t.education.diplomasLabel}
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-medium leading-snug" style={{ color: "var(--color-navy)" }}>
                    {edu.title}
                  </h4>
                  <p className="text-xs" style={{ color: "var(--color-muted)" }}>{edu.institution}</p>
                  <p className="text-xs" style={{ color: "var(--color-faint)" }}>{edu.year}</p>
                </div>
              </FadeIn>
          );
          })}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-3 md:p-6"
          style={{ background: "rgba(0,0,0,0.65)" }}
          onClick={() => setSelected(null)}
        >
          <div
            className="rounded-2xl overflow-hidden max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl"
            style={{ background: "var(--color-bg-card)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b"
              style={{ borderColor: "var(--color-tag-bg)" }}>
              <div className="flex items-center gap-2 min-w-0">
                <ShieldCheck size={16} style={{ color: "var(--color-navy)" }} className="shrink-0" />
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold truncate" style={{ color: "var(--color-navy)" }}>
                    {selected.title}
                  </h3>
                  <p className="text-[11px]" style={{ color: "var(--color-faint)" }}>
                    {t.education.diplomaModalNote}
                  </p>
                </div>
              </div>
              <button onClick={() => setSelected(null)}
                className="w-8 h-8 rounded-lg flex items-center justify-center border-none cursor-pointer shrink-0"
                style={{ background: "var(--color-tag-bg)", color: "var(--color-navy)" }}>
                <X size={16} />
              </button>
            </div>

            <div
              className="overflow-auto p-4 flex justify-center"
              style={{ background: "var(--color-bg)" }}
              onContextMenu={(e) => e.preventDefault()}
            >
              <img
                src={selected.src}
                alt={selected.title}
                draggable={false}
                className="w-full h-auto rounded-lg select-none"
                style={{ userSelect: "none", pointerEvents: "none" }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
