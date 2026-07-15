export default function Navbar({ active, onNav, darkMode, toggleDark, navLinks }) {
  return (
    <nav
      className="flex items-center justify-between px-10 py-4 sticky top-0 z-10 backdrop-blur-sm border-b"
      style={{ background: "var(--color-bg)", borderColor: "var(--color-tag-bg)" }}
    >
      <div className="font-serif text-lg font-medium" style={{ color: "var(--color-navy)" }}>
        <span className="font-mono text-sm" style={{ color: "var(--color-accent)" }}>{"< "}</span>
        <img src="../../public/Images/Firma.png" alt="Firma" className="inline-block max-h-10 w-auto object-contain" />
        <span className="font-mono text-sm" style={{ color: "var(--color-accent)" }}>{" />"}</span>
      </div>

      <div className="flex items-center gap-8">
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

        <button
          onClick={toggleDark}
          className="flex items-center px-3 py-1.5 rounded-full text-base border transition-all duration-200"
          style={{ background: "var(--color-bg-card)", borderColor: "var(--color-tag-bg)", color: "var(--color-muted)" }}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
