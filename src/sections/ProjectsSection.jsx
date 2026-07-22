import { useState } from "react";
import { SectionTitle, SectionDivider } from "../components/SectionTitle";
import { useLanguage } from "../context/LanguageContext";
import FadeIn from "../components/FadeIn";
import { FileText, Download, X } from "lucide-react";

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

export default function ProjectsSection() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState(t.projects.filters[0]);
  const [modal, setModal] = useState(null);
  const [selectedDoc, setSelectedDoc] = useState(null);

  const allLabel = t.projects.filters[0];
  const docsLabel = t.projects.filters[t.projects.filters.length - 1]; // "Documentación" / "Documentation"
  const isDocsView = activeFilter === docsLabel;

  const filtered = activeFilter === allLabel
    ? t.projects.items
    : t.projects.items.filter((p) => p.tags.includes(activeFilter));

  return (
    <section id="projects" className="px-10 py-16" style={{ background: "var(--color-bg-alt)" }}>
      <div className="grid grid-cols-2 items-center gap-8 mb-10">
        <FadeIn direction="left">
          <img src="../../public/images/Proyects.png" alt="Projects" className="max-w-[360px] w-full object-contain mx-auto" />
        </FadeIn>
        <FadeIn direction="right">
          <SectionTitle>{t.projects.title}</SectionTitle>
          <SectionDivider />
          <p className="text-center text-sm leading-relaxed max-w-sm mx-auto" style={{ color: "var(--color-light)" }}>
            {t.projects.description}
          </p>
        </FadeIn>
      </div>

      {/* Filtros */}
      <FadeIn>
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {t.projects.filters.map((tag) => (
            <button key={tag} onClick={() => setActiveFilter(tag)}
              className="px-4 py-1.5 rounded-full text-sm border-none cursor-pointer font-medium transition-all duration-200"
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
        <div className="grid grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <FadeIn key={project.title} delay={i * 60}>
              <div onClick={() => setModal(project)}
                className="rounded-2xl border p-5 flex flex-col gap-2 h-full cursor-pointer
                           transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                style={{ background: "var(--color-bg-project)", borderColor: "rgba(30,60,120,0.12)" }}>
                <div className="text-2xl mb-1">{project.icon}</div>
                <h4 className="text-sm font-semibold" style={{ color: "var(--color-navy)" }}>{project.title}</h4>
                <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--color-light)" }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[11px] px-2 py-0.5 rounded"
                      style={{ background: "rgba(30,60,120,0.10)", color: "var(--color-tag-text)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-xs mt-1" style={{ color: "var(--color-accent)" }}>{t.projects.viewMore}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      )}

      {/* Vista: Documentación (mismos diagramas, paleta consistente) */}
      {isDocsView && (
        <div className="max-w-4xl mx-auto flex flex-col gap-3">
          <FadeIn>
            <p className="text-center text-sm leading-relaxed mb-6" style={{ color: "var(--color-light)" }}>
              {t.diagrams.description.split("**").map((part, i) =>
                i % 2 === 1 ? <strong key={i} style={{ color: "var(--color-navy)" }}>{part}</strong> : part
              )}
            </p>
          </FadeIn>

          {t.diagrams.items.map((doc, i) => (
            <FadeIn key={doc.id} delay={i * 50}>
              <div
                onClick={() => setSelectedDoc(doc)}
                className="flex items-center gap-5 p-5 rounded-2xl border cursor-pointer
                           transition-all duration-200 hover:-translate-y-1 hover:shadow-lg group"
                style={{ background: "var(--color-bg-card)", borderColor: "var(--color-tag-bg)" }}
              >
                <div className="shrink-0 w-9 text-center">
                  <span className="text-xs font-mono" style={{ color: "var(--color-faint)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--color-tag-bg)" }}>
                  <FileText size={18} style={{ color: "var(--color-navy)" }} />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold mb-0.5" style={{ color: "var(--color-navy)" }}>
                    {doc.role}
                  </h4>
                  <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "var(--color-light)" }}>
                    {doc.summary}
                  </p>
                </div>

                <div className="shrink-0 text-right hidden md:block">
                  <p className="text-[11px]" style={{ color: "var(--color-faint)" }}>
                    {t.diagrams.toolLabel}: Lucidchart
                  </p>
                  <p className="text-[11px]" style={{ color: "var(--color-faint)" }}>{doc.date}</p>
                </div>

                <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm"
          style={{ background: "rgba(0,0,0,0.55)" }} onClick={() => setModal(null)}>
          <div className="rounded-2xl p-8 max-w-md w-[90%] shadow-2xl"
            style={{ background: "var(--color-bg-card)" }} onClick={(e) => e.stopPropagation()}>
            <div className="text-4xl mb-3">{modal.icon}</div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--color-navy)" }}>{modal.title}</h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-light)" }}>{modal.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {modal.tags.map((tag) => (
                <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full"
                  style={{ background: "var(--color-tag-bg)", color: "var(--color-tag-text)" }}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a href={modal.link} className="px-5 py-2 rounded-lg text-sm font-medium text-white"
                style={{ background: "var(--color-navy)" }}>
                {t.projects.viewProject}
              </a>
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
        <div className="fixed inset-0 flex items-center justify-center z-50 p-6"
          style={{ background: "rgba(0,0,0,0.6)" }} onClick={() => setSelectedDoc(null)}>
          <div className="rounded-2xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl"
            style={{ background: "var(--color-bg-card)" }} onClick={(e) => e.stopPropagation()}>

            <div className="flex items-center justify-between px-6 py-4 border-b"
              style={{ borderColor: "var(--color-tag-bg)" }}>
              <div>
                <h3 className="text-base font-semibold" style={{ color: "var(--color-navy)" }}>
                  {selectedDoc.role}
                </h3>
                <p className="text-xs" style={{ color: "var(--color-faint)" }}>
                  {t.diagrams.toolLabel}: Lucidchart · {t.diagrams.dateLabel}: {selectedDoc.date}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a href={PDF_MAP[selectedDoc.id]} download
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-200"
                  style={{ background: "var(--color-tag-bg)", color: "var(--color-navy)" }}>
                  <Download size={13} /> {t.diagrams.downloadPdf}
                </a>
                <button onClick={() => setSelectedDoc(null)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center border-none cursor-pointer"
                  style={{ background: "var(--color-tag-bg)", color: "var(--color-navy)" }}>
                  <X size={16} />
                </button>
              </div>
            </div>

            <div className="overflow-auto p-4" style={{ background: "var(--color-bg)" }}>
              <img src={IMAGE_MAP[selectedDoc.id]} alt={selectedDoc.role} className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
