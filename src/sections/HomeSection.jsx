import { PERSONAL, SOCIALS, STATS } from "../data/portfolioData";
import TypingEffect from "../components/TypingEffect";
import AnimatedCounter from "../components/AnimatedCounter";
import FadeIn from "../components/FadeIn";

export default function HomeSection() {
  return (
    <section id="home" style={{ background: "var(--color-bg)" }}>
      {/* Hero */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        alignItems: "center", gap: "2rem",
        padding: "3.5rem 2.5rem 2rem",
        minHeight: 420,
      }}>
        <FadeIn direction="left">
          <p style={{ fontSize: 14, color: "var(--color-accent)", fontWeight: 500, marginBottom: 8, letterSpacing: 1 }}>
            HOLA, SOY
          </p>
          <h1 style={{ fontSize: 40, fontWeight: 600, color: "var(--color-navy)", lineHeight: 1.12, marginBottom: 10 }}>
            {PERSONAL.name}
          </h1>
          <p style={{ fontSize: 18, color: "var(--color-text-muted)", marginBottom: "1rem", minHeight: 28 }}>
            <TypingEffect />
          </p>
          <p style={{ fontSize: 14, color: "var(--color-text-light)", lineHeight: 1.8, maxWidth: 400, marginBottom: "1.5rem" }}>
            {PERSONAL.bio}
          </p>

          <div style={{ display: "flex", gap: 10, marginBottom: "1.5rem" }}>
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <a key={s.label} href={s.href} aria-label={s.label} style={{
                  width: 38, height: 38, borderRadius: "50%",
                  background: "var(--color-navy)", color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16, transition: "transform var(--transition-fast)",
                }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.12)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <button style={{
              background: "var(--color-navy)", color: "#fff", border: "none",
              padding: "10px 22px", borderRadius: "var(--radius-btn)",
              fontSize: 14, fontWeight: 500,
              transition: "background var(--transition-fast)",
            }}
              onMouseEnter={(e) => e.currentTarget.style.background = "var(--color-navy-light)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "var(--color-navy)"}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              {PERSONAL.ctaLabel}
            </button>
            <a href={PERSONAL.cvFile} download style={{
              background: "transparent", color: "var(--color-navy)",
              border: "1.5px solid var(--color-navy)",
              padding: "10px 22px", borderRadius: "var(--radius-btn)",
              fontSize: 14, fontWeight: 500,
              transition: "all var(--transition-fast)",
              display: "inline-flex", alignItems: "center", gap: 6,
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--color-navy)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--color-navy)"; }}
            >
              ⬇ Descargar CV
            </a>
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={150}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src="../../public/Images/home.png" alt="Hero" style={{ maxWidth: 520, width: "100%", objectFit: "cover" }} />
          </div>
        </FadeIn>
      </div>

      {/* Stats */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
        gap: "1rem", padding: "1.5rem 2.5rem 3rem",
      }}>
        {STATS.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 80}>
            <div style={{
              background: "var(--color-bg-card)", borderRadius: "var(--radius-card)",
              border: "var(--border-card)", padding: "1.25rem",
              textAlign: "center", boxShadow: "var(--shadow-card)",
            }}>
              <p style={{ fontSize: 32, fontWeight: 700, color: "var(--color-navy)" }}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p style={{ fontSize: 13, color: "var(--color-text-muted)", marginTop: 4 }}>{stat.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
