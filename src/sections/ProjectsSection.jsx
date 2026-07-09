// src/sections/ProjectsSection.jsx
import { useState } from "react";
import { SectionTitle, SectionDivider } from "../components/SectionTitle";
import { PROJECTS, FILTER_TAGS } from "../data/portfolioData";
import FadeIn from "../components/FadeIn";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [modalProject, setModalProject] = useState(null);

  const filtered = activeFilter === "Todos"
    ? PROJECTS
    : PROJECTS.filter((p) => p.tags.includes(activeFilter));

  return (
    <section id="projects" style={{ padding: "4rem 2.5rem", background: "var(--color-bg-alt)" }}>
      {/* Header */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: "2rem", marginBottom: "2.5rem" }}>
        <FadeIn direction="left">
          <img src="../../public/Images/Proyects.png" alt="Projects" style={{ maxWidth: 660, width: "100%", objectFit: "contain" }} />
        </FadeIn>
        <FadeIn direction="right">
          <SectionTitle>Proyectos</SectionTitle>
          <SectionDivider />
          <p style={{ textAlign: "center", fontSize: 14, color: "var(--color-text-light)", maxWidth: 360, margin: "0 auto", lineHeight: 1.7 }}>
            Proyectos desarrollados con diversas tecnologías, desde Frontend con React hasta análisis de datos con Python.
          </p>
        </FadeIn>
      </div>

      {/* Filtros */}
      <FadeIn>
        <div style={{ display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {FILTER_TAGS.map((tag) => (
            <button key={tag} onClick={() => setActiveFilter(tag)} style={{
              padding: "6px 16px", borderRadius: 20, fontSize: 13, border: "none",
              background: activeFilter === tag ? "var(--color-navy)" : "var(--color-tag-bg)",
              color: activeFilter === tag ? "#fff" : "var(--color-tag-text)",
              fontWeight: activeFilter === tag ? 500 : 400,
              cursor: "pointer", transition: "all var(--transition-fast)",
            }}>
              {tag}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
        {filtered.map((project, i) => (
          <FadeIn key={project.title} delay={i * 60}>
            <div
              onClick={() => setModalProject(project)}
              style={{
                background: "var(--color-bg-project)", borderRadius: "var(--radius-card)",
                border: "0.5px solid rgba(30,60,120,0.12)", padding: "1.4rem 1.5rem",
                display: "flex", flexDirection: "column", gap: 8,
                cursor: "pointer", transition: "transform var(--transition-fast), box-shadow var(--transition-fast)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "var(--shadow-card)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ marginBottom: 4 }}>
                {project.icon && <project.icon style={{ fontSize: 24, color: "var(--color-accent)" }} />}
              </div>
              <h4 style={{ fontSize: 15, fontWeight: 500, color: "var(--color-navy)" }}>{project.title}</h4>
              <p style={{ fontSize: 13, color: "var(--color-text-light)", lineHeight: 1.6, flexGrow: 1 }}>{project.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
                {project.tags.map((tag) => (
                  <span key={tag} style={{
                    fontSize: 11, background: "rgba(30,60,120,0.1)",
                    color: "var(--color-tag-text)", padding: "3px 8px", borderRadius: 5,
                  }}>{tag}</span>
                ))}
              </div>
              <p style={{ fontSize: 12, color: "var(--color-accent)", marginTop: 4 }}>Click para ver más →</p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Modal */}
      {modalProject && (
        <div
          onClick={() => setModalProject(null)}
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)",
            display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200,
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "var(--color-bg-card)", borderRadius: 18,
              padding: "2rem", maxWidth: 480, width: "90%",
              boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
            }}
          >
            <div style={{ marginBottom: "0.75rem" }}>
              {modalProject.icon && <modalProject.icon style={{ fontSize: 36, color: "var(--color-accent)" }} />}
            </div>
            <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--color-navy)", marginBottom: 8 }}>{modalProject.title}</h3>
            <p style={{ fontSize: 14, color: "var(--color-text-light)", lineHeight: 1.7, marginBottom: "1.25rem" }}>{modalProject.description}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "1.5rem" }}>
              {modalProject.tags.map((tag) => (
                <span key={tag} style={{
                  background: "var(--color-tag-bg)", color: "var(--color-tag-text)",
                  fontSize: 12, padding: "4px 12px", borderRadius: 20, fontWeight: 500,
                }}>{tag}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <a href={modalProject.link} style={{
                background: "var(--color-navy)", color: "#fff",
                padding: "9px 20px", borderRadius: "var(--radius-btn)", fontSize: 13, fontWeight: 500,
              }}>Ver proyecto →</a>
              <button onClick={() => setModalProject(null)} style={{
                background: "var(--color-tag-bg)", color: "var(--color-text-muted)",
                border: "none", padding: "9px 20px", borderRadius: "var(--radius-btn)", fontSize: 13,
              }}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
