// src/sections/ProjectsSection.jsx
import { SectionTitle, SectionDivider } from "../components/SectionTitle";
import { PROJECTS } from "../data/portfolioData";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        padding: "4rem 2.5rem",
        background: "var(--color-bg)",
      }}
    >
      <SectionTitle>Projects</SectionTitle>
      <SectionDivider />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.25rem",
        }}
      >
        {PROJECTS.map((project) => (
          <a
            key={project.title}
            href={project.link}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                background: "var(--color-bg-project)",
                borderRadius: "var(--radius-card)",
                border: "0.5px solid rgba(30,60,120,0.12)",
                padding: "1.4rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                height: "100%",
                transition: "transform var(--transition-fast)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-4px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div
                style={{
                  fontSize: 24,
                  color: "var(--color-navy)",
                  marginBottom: 4,
                }}
              >
                {project.icon}
              </div>

              <h4
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: "var(--color-navy)",
                }}
              >
                {project.title}
              </h4>

              <p
                style={{
                  fontSize: 13,
                  color: "#4A5A82",
                  lineHeight: 1.6,
                  flexGrow: 1,
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  marginTop: "auto",
                }}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 11,
                      background: "rgba(30,60,120,0.1)",
                      color: "var(--color-tag-text)",
                      padding: "3px 8px",
                      borderRadius: 5,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
