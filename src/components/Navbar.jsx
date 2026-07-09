// src/components/Navbar.jsx
import { PERSONAL, NAV_LINKS } from "../data/portfolioData";

export default function Navbar({ active, onNav, darkMode, toggleDark }) {
  return (
    <nav style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "1rem 2.5rem",
      background: "var(--color-bg)",
      borderBottom: "var(--border-card)",
      position: "sticky", top: 0, zIndex: 10,
      backdropFilter: "blur(8px)",
    }}>
      <div style={{ fontFamily: "var(--font-serif)", fontSize: 18, fontWeight: 500, color: "var(--color-navy)" }}>
        <span style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)", fontSize: 13 }}>{"< "}</span>
        {PERSONAL.name.split(" ")[0]}
        <span style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)", fontSize: 13 }}>{" />"}</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <ul style={{ display: "flex", gap: "1.75rem", listStyle: "none", margin: 0, padding: 0 }}>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button onClick={() => onNav(link)} style={{
                background: "none", border: "none",
                borderBottom: active === link ? "2px solid var(--color-navy)" : "2px solid transparent",
                padding: "2px 0", fontSize: 14,
                color: active === link ? "var(--color-navy)" : "var(--color-text-muted)",
                fontWeight: active === link ? 500 : 400,
                transition: "color var(--transition-fast)",
              }}>
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Dark mode toggle */}
        <button onClick={toggleDark} title="Toggle dark mode" style={{
          background: "var(--color-bg-card)", border: "var(--border-card)",
          borderRadius: 20, padding: "5px 12px", fontSize: 16,
          display: "flex", alignItems: "center", gap: 6,
          color: "var(--color-text-muted)", transition: "all var(--transition-fast)",
        }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--color-accent)"}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = ""}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
