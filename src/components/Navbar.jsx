export default function Navbar({ active, onNav, navLinks }) {
  return (
    <nav
      className="flex items-center justify-between px-10 py-3 sticky top-0 z-10 backdrop-blur-sm border-b"
      style={{ background: "var(--color-bg)", borderColor: "var(--color-tag-bg)" }}
    >
      <button
        onClick={() => onNav("Home")}
        className="flex items-center gap-1 bg-transparent border-none cursor-pointer p-0"
        aria-label="Ir al inicio"
      >
        <span className="font-mono text-sm" style={{ color: "var(--color-accent)" }}>{"<"}</span>
        <img src="../../public/Images/Firma.png" alt="Firma" className="inline-block max-h-10 w-auto object-contain" />
        <span className="font-mono text-sm" style={{ color: "var(--color-accent)" }}>{"/>"}</span>
      </button>

      <ul className="flex gap-6 list-none m-0 p-0">
        {navLinks.map((link) => (
          <li key={link}>
            <button
              onClick={() => onNav(link)}
              className="bg-transparent border-none text-sm cursor-pointer transition-colors duration-200 pb-0.5"
              style={{
                borderBottom: active === link ? "2px solid var(--color-navy)" : "2px solid transparent",
                color: active === link ? "var(--color-navy)" : "var(--color-muted)",
                fontWeight: active === link ? 500 : 400,
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
