import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Menu, X } from "lucide-react";

export default function Navbar({ active, onNav, navLinks }) {
  const { lang, toggleLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (key) => {
    onNav(key);
    setMobileOpen(false);
  };

  return (
    <nav
      className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 sticky top-0 z-20 backdrop-blur-sm border-b"
      style={{ background: "var(--color-bg)", borderColor: "var(--color-tag-bg)" }}
    >
      {/* Firma / logo con su respectiva estilos y response a la ves*/}
      <button
        onClick={() => handleNavClick("home")}
        className="flex items-center gap-3 bg-transparent border-none cursor-pointer p-0 shrink-10"
        aria-label="Ir al inicio"
      >
        <span className="font-mono text-xs sm:text-sm" style={{ color: "var(--color-accent)" }}>{"<"}</span>
        <img
          src="/images/Firma.png"
          alt="Firma de Camilo Pinzón"
          className="h-9 sm:h-8 md:h-10 w-auto object-contain"
          style={{ filter: "brightness(0) saturate(100%) invert(13%) sepia(28%) saturate(2400%) hue-rotate(200deg) brightness(90%)" }}
        />
        <span className="font-mono text-xs sm:text-sm" style={{ color: "var(--color-accent)" }}>{"/>"}</span>
      </button>

      {/* Nav links — desktop */}
      <div className="hidden md:flex items-center gap-6">
        <ul className="flex gap-6 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.key}>
              <button
                onClick={() => handleNavClick(link.key)}
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

        <button
          onClick={toggleLang}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200"
          style={{ background: "var(--color-bg-card)", borderColor: "var(--color-tag-bg)", color: "var(--color-navy)" }}
          aria-label="Cambiar idioma"
        >
          <span style={{ opacity: lang === "es" ? 1 : 0.4 }}>ES</span>
          <span style={{ color: "var(--color-faint)" }}>/</span>
          <span style={{ opacity: lang === "en" ? 1 : 0.4 }}>EN</span>
        </button>
      </div>

      {/* Controles móvil: idioma + hamburguesa */}
      <div className="flex md:hidden items-center gap-2">
        <button
          onClick={toggleLang}
          className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold border"
          style={{ background: "var(--color-bg-card)", borderColor: "var(--color-tag-bg)", color: "var(--color-navy)" }}
          aria-label="Cambiar idioma"
        >
          <span style={{ opacity: lang === "es" ? 1 : 0.4 }}>ES</span>
          <span style={{ color: "var(--color-faint)" }}>/</span>
          <span style={{ opacity: lang === "en" ? 1 : 0.4 }}>EN</span>
        </button>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-9 h-9 rounded-lg flex items-center justify-center border-none"
          style={{ background: "var(--color-tag-bg)", color: "var(--color-navy)" }}
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {mobileOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 border-b shadow-lg flex flex-col py-2"
          style={{ background: "var(--color-bg)", borderColor: "var(--color-tag-bg)" }}
        >
          {navLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => handleNavClick(link.key)}
              className="text-left px-6 py-3 text-sm border-none bg-transparent cursor-pointer"
              style={{
                color: active === link.key ? "var(--color-navy)" : "var(--color-muted)",
                fontWeight: active === link.key ? 600 : 400,
                background: active === link.key ? "var(--color-bg-alt)" : "transparent",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
