import { useLanguage } from "../context/LanguageContext";

export default function Navbar({ active, onNav, navLinks }) {
  const { lang, toggleLang } = useLanguage();

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

      <div className="flex items-center gap-6">
        <ul className="flex gap-6 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.key}>
              <button
                onClick={() => onNav(link.key)}
                className="bg-transparent border-none text-sm cursor-pointer transition-colors duration-200 pb-0.5"
                style={{
                  borderBottom: active === link.key ? "2px solid var(--color-navy)" : "2px solid transparent",
                  color: active === link.key ? "var(--color-navy)" : "var(--color-muted)",
                  fontWeight: active === link.key ? 500 : 400,
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Toggle ES / EN */}
        <button
          onClick={toggleLang}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold border
                     transition-all duration-200"
          style={{ background: "var(--color-bg-card)", borderColor: "var(--color-tag-bg)", color: "var(--color-navy)" }}
          aria-label="Cambiar idioma"
        >
          <span style={{ opacity: lang === "es" ? 1 : 0.4 }}>ES</span>
          <span style={{ color: "var(--color-faint)" }}>/</span>
          <span style={{ opacity: lang === "en" ? 1 : 0.4 }}>EN</span>
        </button>
      </div>
    </nav>
  );
}
