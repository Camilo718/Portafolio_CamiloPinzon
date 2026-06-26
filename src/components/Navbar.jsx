import { PERSONAL, NAV_LINKS } from "../data/portfolioData";

export default function Navbar({ active, onNav }) {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.1rem 2.5rem",
        background: "var(--color-bg)",
        borderBottom: "var(--border-card)",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      {/* Logo / firma */}
      <div
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 19,
          fontWeight: 500,
          color: "var(--color-navy)",
          letterSpacing: -0.5,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--color-accent)",
            fontSize: 14,
          }}
        >
          {"< "}
        </span>
        {PERSONAL.name}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--color-accent)",
            fontSize: 14,
          }}
        >
          {" />"}
        </span>
      </div>

      {/* Links */}
      <ul
        style={{
          display: "flex",
          gap: "2rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <button
              onClick={() => onNav(link)}
              style={{
                background: "none",
                border: "none",
                borderBottom:
                  active === link
                    ? "2px solid var(--color-navy)"
                    : "2px solid transparent",
                padding: "2px 0",
                fontSize: 14,
                color:
                  active === link
                    ? "var(--color-navy)"
                    : "var(--color-text-muted)",
                fontWeight: active === link ? 500 : 400,
                transition: "color var(--transition-fast)",
              }}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
