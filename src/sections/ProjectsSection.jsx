import { useState } from "react";
import { SectionTitle, SectionDivider } from "../components/SectionTitle";
import { PROJECTS, FILTER_TAGS } from "../data/portfolioData";
import FadeIn from "../components/FadeIn";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [modal, setModal] = useState(null);

  const filtered = activeFilter === "Todos"
    ? PROJECTS
    : PROJECTS.filter((p) => p.tags.includes(activeFilter));

  return (
    <section id="projects" className="px-10 py-16" style={{ background: "var(--color-bg-alt)" }}>
      {/* Header */}
      <div className="grid grid-cols-2 items-center gap-8 mb-10">
        <FadeIn direction="left">
          <img src="../../public/images/Proyects.png" alt="Projects" className="max-w-[360px] w-full object-cover mx-auto" />
        </FadeIn>
        <FadeIn direction="right">
          <SectionTitle>Proyectos</SectionTitle>
          <SectionDivider />
          <p className="text-center text-sm leading-relaxed max-w-sm mx-auto" style={{ color: "var(--color-light)" }}>
            Proyectos con React, Vite, Python y más. Click en cada card para ver detalles.
          </p>
        </FadeIn>
      </div>

      {/* Filtros */}
      <FadeIn>
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {FILTER_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className="px-4 py-1.5 rounded-full text-sm border-none cursor-pointer font-medium transition-all duration-200"
              style={{
                background: activeFilter === tag ? "var(--color-navy)" : "var(--color-tag-bg)",
                color: activeFilter === tag ? "#fff" : "var(--color-tag-text)",
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-5">
        {filtered.map((project, i) => (
          <FadeIn key={project.title} delay={i * 60}>
            <div
              onClick={() => setModal(project)}
              className="rounded-2xl border p-5 flex flex-col gap-2 h-full cursor-pointer
                         transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              style={{ background: "var(--color-bg-project)", borderColor: "rgba(30,60,120,0.12)" }}
            >
              <div className="text-2xl mb-1">{project.icon}</div>
              <h4 className="text-sm font-semibold" style={{ color: "var(--color-navy)" }}>{project.title}</h4>
              <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--color-light)" }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2 py-0.5 rounded"
                    style={{ background: "rgba(30,60,120,0.10)", color: "var(--color-tag-text)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs mt-1" style={{ color: "var(--color-accent)" }}>Ver más →</p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm"
          style={{ background: "rgba(0,0,0,0.55)" }}
          onClick={() => setModal(null)}
        >
          <div
            className="rounded-2xl p-8 max-w-md w-[90%] shadow-2xl"
            style={{ background: "var(--color-bg-card)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-4xl mb-3">{modal.icon}</div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--color-navy)" }}>{modal.title}</h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-light)" }}>{modal.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {modal.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={{ background: "var(--color-tag-bg)", color: "var(--color-tag-text)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href={modal.link}
                className="px-5 py-2 rounded-lg text-sm font-medium text-white"
                style={{ background: "var(--color-navy)" }}
              >
                Ver proyecto →
              </a>
              <button
                onClick={() => setModal(null)}
                className="px-5 py-2 rounded-lg text-sm border-none cursor-pointer"
                style={{ background: "var(--color-tag-bg)", color: "var(--color-muted)" }}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
