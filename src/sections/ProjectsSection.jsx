import { useState } from "react";
import { SectionTitle, SectionDivider } from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";
import { TECH_ICON_MAP } from "../data/i18n";
import FadeIn from "../components/FadeIn";
import { FileText, Download, X, ExternalLink } from "lucide-react";

const IMAGE_MAP = {
  "site-director":       "/public/Images/diagrams/site-director.png",
  "supervisor-agent":    "/public/Images/diagrams/supervisor-agent.png",
  "coordinador":         "/public/Images/diagrams/coordinador.png",
  "qa":                  "/public/Images/diagrams/qa.png",
  "training":            "/public/Images/diagrams/training.png",
  "wf-analyst-rta":      "/public/Images/diagrams/wf-analyst-rta.png",
  "workforce-director":  "/public/Images/diagrams/workforce-director.png",
  "tickets":             "/public/Images/diagrams/tickets.png",
};

const PDF_MAP = {
  "site-director":       "/public/docs/payroll-Diagrams/Site-Director.pdf",
  "supervisor-agent":    "/public/docs/payroll-Diagrams/Supervisor-Agent.pdf",
  "coordinador":         "/public/docs/payroll-Diagrams/Coordinador.pdf",
  "qa":                  "/public/docs/payroll-Diagrams/QA.pdf",
  "training":            "/public/docs/payroll-Diagrams/Training.pdf",
  "wf-analyst-rta":      "/public/docs/payroll-Diagrams/WF-Analyst-RTA.pdf",
  "workforce-director":  "/public/docs/payroll-Diagrams/WorkForce-Director.pdf",
  "tickets":             "/public/docs/payroll-Diagrams/Tickets-System.pdf",
};

function TechTag({ tag }) {
  const mapped = TECH_ICON_MAP[tag];
  if (!mapped) {
    return (
      <span className="text-[11px] px-2 py-0.5 rounded"
        style={{ background: "rgba(30,60,120,0.10)", color: "var(--color-tag-text)" }}>
        {tag}
      </span>
    );
  }
  const { Icon, color } = mapped;
  return (
    <span title={tag}
      className="w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center border shrink-0"
      style={{ background: "var(--color-bg)", borderColor: "var(--color-tag-bg)" }}>
      <Icon size={13} color={color} />
    </span>
  );
}

export default function ProjectsSection() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState(t.projects.filters[0]);
  const [modal, setModal] = useState(null);
  const [selectedDoc, setSelectedDoc] = useState(null);

  const allLabel = t.projects.filters[0];
  const docsLabel = t.projects.filters[t.projects.filters.length - 1];
  const isDocsView = activeFilter === docsLabel;

  const filtered = activeFilter === allLabel
    ? t.projects.items
    : t.projects.items.filter((p) => p.tags.includes(activeFilter));

  return (
    <section id="projects" className="px-4 sm:px-6 md:px-10 py-12 md:py-16" style={{ background: "var(--color-bg-alt)" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-8 mb-8 md:mb-10">
        <FadeIn direction="left">
          <img src="/images/Proyects.png" alt="Projects" className="max-w-[240px] sm:max-w-[300px] md:max-w-[360px] w-full object-contain mx-auto" />
        </FadeIn>
        <FadeIn direction="right">
          <SectionTitle>{t.projects.title}</SectionTitle>
          <SectionDivider />
          <p className="text-center text-sm leading-relaxed max-w-sm mx-auto px-2" style={{ color: "var(--color-light)" }}>
            {t.projects.description}
          </p>
        </FadeIn>
      </div>

      {/* Filtros — scroll horizontal en móvil */}
      <FadeIn>
        <div className="flex md:justify-center flex-nowrap md:flex-wrap gap-2 mb-8 overflow-x-auto md:overflow-visible pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {t.projects.filters.map((tag) => (
            <button key={tag} onClick={() => setActiveFilter(tag)}
              className="shrink-0 px-4 py-1.5 rounded-full text-xs sm:text-sm border-none cursor-pointer font-medium transition-all duration-200 whitespace-nowrap"
              style={{
                background: activeFilter === tag ? "var(--color-navy)" : "var(--color-tag-bg)",
                color: activeFilter === tag ? "#fff" : "var(--color-tag-text)",
              }}>
              {tag}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Vista: Grid de proyectos */}
      {!isDocsView && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {filtered.map((project, i) => {
            const ProjectIcon = project.icon;
            return (
              <FadeIn key={project.title} delay={i * 60}>
                <div onClick={() => setModal(project)}
                  className="rounded-2xl border p-5 flex flex-col gap-2 h-full cursor-pointer
                             transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                  style={{ background: "var(--color-bg-project)", borderColor: "rgba(30,60,120,0.12)" }}>
                  <div className="text-2xl mb-1">
                    {ProjectIcon && <ProjectIcon size={24} style={{ color: "var(--color-navy)" }} />}
                  </div>
                  <h4 className="text-sm font-semibold" style={{ color: "var(--color-navy)" }}>{project.title}</h4>
                  <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--color-light)" }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto items-center">
                    {project.tags.map((tag) => <TechTag key={tag} tag={tag} />)}
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs" style={{ color: "var(--color-accent)" }}>{t.projects.viewMore}</p>
                    {project.link && project.link !== "#" && (
                      <ExternalLink size={13} style={{ color: "var(--color-accent)" }} />
                    )}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      )}

      {/* Vista: Documentación / Análisis de Procesos */}
      {isDocsView && (
        <div className="max-w-4xl mx-auto flex flex-col gap-3">
          <FadeIn>
            <p className="text-center text-sm leading-relaxed mb-6 px-2" style={{ color: "var(--color-light)" }}>
              {t.diagrams.description.split("**").map((part, i) =>
                i % 2 === 1 ? <strong key={i} style={{ color: "var(--color-navy)" }}>{part}</strong> : part
              )}
            </p>
          </FadeIn>

          {t.diagrams.items.map((doc, i) => (
            <FadeIn key={doc.id} delay={i * 50}>
              <div
                onClick={() => setSelectedDoc(doc)}
                className="flex items-center gap-3 md:gap-5 p-4 md:p-5 rounded-2xl border cursor-pointer
                           transition-all duration-200 hover:-translate-y-1 hover:shadow-lg group"
                style={{ background: "var(--color-bg-card)", borderColor: "var(--color-tag-bg)" }}
              >
                <div className="shrink-0 w-7 md:w-9 text-center hidden sm:block">
                  <span className="text-xs font-mono" style={{ color: "var(--color-faint)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--color-tag-bg)" }}>
                  <FileText size={16} style={{ color: "var(--color-navy)" }} />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-semibold mb-0.5" style={{ color: "var(--color-navy)" }}>
                    {doc.role}
                  </h4>
                  <p className="text-[11px] sm:text-xs leading-relaxed line-clamp-2" style={{ color: "var(--color-light)" }}>
                    {doc.summary}
                  </p>
                </div>

                <div className="shrink-0 text-right hidden lg:block">
                  <p className="text-[11px]" style={{ color: "var(--color-faint)" }}>
                    {t.diagrams.toolLabel}: Lucidchart
                  </p>
                  <p className="text-[11px]" style={{ color: "var(--color-faint)" }}>{doc.date}</p>
                </div>

                <div className="shrink-0 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-xs font-medium" style={{ color: "var(--color-accent)" }}>
                    {t.diagrams.viewFull} →
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      )}

      {/* Modal: detalle de proyecto */}
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm p-4"
          style={{ background: "rgba(0,0,0,0.55)" }} onClick={() => setModal(null)}>
          <div className="rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl max-h-[85vh] overflow-y-auto"
            style={{ background: "var(--color-bg-card)" }} onClick={(e) => e.stopPropagation()}>
            <div className="mb-3">
              {modal.icon && <modal.icon size={32} style={{ color: "var(--color-navy)" }} />}
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2" style={{ color: "var(--color-navy)" }}>{modal.title}</h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-light)" }}>{modal.description}</p>
            <div className="flex flex-wrap gap-2 mb-6 items-center">
              {modal.tags.map((tag) => <TechTag key={tag} tag={tag} />)}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              {modal.link && modal.link !== "#" ? (
                <a href={modal.link} target="_blank" rel="noreferrer"
                  className="px-5 py-2 rounded-lg text-sm font-medium text-white flex items-center justify-center gap-1.5"
                  style={{ background: "var(--color-navy)" }}>
                  {t.projects.viewProject} <ExternalLink size={13} />
                </a>
              ) : (
                <span className="px-5 py-2 rounded-lg text-sm font-medium text-center"
                  style={{ background: "var(--color-tag-bg)", color: "var(--color-faint)" }}>
                  {t.projects.viewProject}
                </span>
              )}
              <button onClick={() => setModal(null)}
                className="px-5 py-2 rounded-lg text-sm border-none cursor-pointer"
                style={{ background: "var(--color-tag-bg)", color: "var(--color-muted)" }}>
                {t.projects.close}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: visor de diagrama */}
      {selectedDoc && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-3 md:p-6"
          style={{ background: "rgba(0,0,0,0.6)" }} onClick={() => setSelectedDoc(null)}>
          <div className="rounded-2xl overflow-hidden max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl"
            style={{ background: "var(--color-bg-card)" }} onClick={(e) => e.stopPropagation()}>

            <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b gap-2"
              style={{ borderColor: "var(--color-tag-bg)" }}>
              <div className="min-w-0">
                <h3 className="text-sm md:text-base font-semibold truncate" style={{ color: "var(--color-navy)" }}>
                  {selectedDoc.role}
                </h3>
                <p className="text-[11px] md:text-xs truncate" style={{ color: "var(--color-faint)" }}>
                  Lucidchart · {selectedDoc.date}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a href={PDF_MAP[selectedDoc.id]} download
                  className="flex items-center gap-1.5 px-2.5 md:px-3 py-1.5 rounded-lg text-[11px] md:text-xs font-medium transition-colors duration-200"
                  style={{ background: "var(--color-tag-bg)", color: "var(--color-navy)" }}>
                  <Download size={13} /> <span className="hidden sm:inline">{t.diagrams.downloadPdf}</span>
                </a>
                <button onClick={() => setSelectedDoc(null)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center border-none cursor-pointer shrink-0"
                  style={{ background: "var(--color-tag-bg)", color: "var(--color-navy)" }}>
                  <X size={16} />
                </button>
              </div>
            </div>

            <div className="overflow-auto p-2 md:p-4" style={{ background: "var(--color-bg)" }}>
              <img src={IMAGE_MAP[selectedDoc.id]} alt={selectedDoc.role} className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
