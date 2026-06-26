// src/sections/HomeSection.jsx
import { PERSONAL, SOCIALS } from "../data/portfolioData";

export default function HomeSection() {
  return (
    <section
      id="home"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        gap: "2rem",
        padding: "3.5rem 2.5rem 2.5rem",
        background: "var(--color-bg)",
        minHeight: 420,
      }}
    >
      {/* Texto */}
      <div>
        <h1 style={{ fontSize: 38, fontWeight: 500, color: "var(--color-navy)", lineHeight: 1.15 }}>
          {PERSONAL.name}
        </h1>
        <p style={{ fontSize: 17, fontStyle: "italic", color: "var(--color-text-muted)", margin: "0.5rem 0 1rem" }}>
          ( {PERSONAL.alias} )
        </p>
        <p style={{ fontSize: 14, color: "var(--color-text-light)", lineHeight: 1.75, maxWidth: 380 }}>
          {PERSONAL.bio}
        </p>

        <div style={{ display: "flex", gap: 10, margin: "1.4rem 0 1.6rem" }}>
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "var(--color-navy)", color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, transition: "transform var(--transition-fast)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.12)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              {s.icon}
            </a>
          ))}
        </div>

        <button
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "var(--color-navy)", color: "#fff", border: "none",
            padding: "10px 22px", borderRadius: "var(--radius-btn)",
            fontSize: 14, fontWeight: 500, cursor: "pointer",
            transition: "background var(--transition-fast)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-navy-light)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-navy)")}
        >
          {PERSONAL.ctaLabel}
        </button>
      </div>

      {/* Ilustración */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="../../public/Images/home.png"
          alt="Hero illustration"
          style={{ maxWidth: 420, width: "100%", objectFit: "contain" }}
        />
      </div>
    </section>
  );
}
