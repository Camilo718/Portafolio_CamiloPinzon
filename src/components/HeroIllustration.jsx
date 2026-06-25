// src/components/HeroIllustration.jsx
// ─────────────────────────────────────────────────────────────────
//  Reemplaza este SVG con tu imagen cuando la tengas:
//
//  import heroPic from "../assets/hero.png";
//  export default function HeroIllustration() {
//    return <img src={heroPic} alt="Hero" style={{ maxWidth: 340 }} />;
//  }
// ─────────────────────────────────────────────────────────────────

export default function HeroIllustration() {
  return (
    <svg
      width="320"
      height="270"
      viewBox="0 0 300 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Monitor */}
      <rect
        x="40" y="30" width="220" height="150" rx="12"
        fill="#fff" stroke="rgba(30,60,120,0.15)" strokeWidth="1"
      />
      {/* Barra superior */}
      <rect x="40" y="30" width="220" height="28" rx="12" fill="#1B2A5C" />
      <rect x="40" y="42" width="220" height="16" fill="#1B2A5C" />
      {/* Botones semáforo */}
      <circle cx="58" cy="44" r="5" fill="#FF5F57" />
      <circle cx="74" cy="44" r="5" fill="#FFBD2E" />
      <circle cx="90" cy="44" r="5" fill="#28CA41" />
      {/* Líneas de "código" */}
      <rect x="60" y="70"  width="180" height="10" rx="4" fill="#D8E8F4" />
      <rect x="60" y="88"  width="130" height="10" rx="4" fill="#B5D4F4" />
      <rect x="60" y="106" width="155" height="10" rx="4" fill="#D8E8F4" />
      <rect x="60" y="124" width="100" height="10" rx="4" fill="#B5D4F4" />
      <rect x="60" y="142" width="140" height="10" rx="4" fill="#D8E8F4" />
      {/* Tarjeta inferior */}
      <rect
        x="80" y="195" width="140" height="55" rx="10"
        fill="#fff" stroke="rgba(30,60,120,0.15)" strokeWidth="1"
      />
      <rect x="100" y="210" width="100" height="8" rx="3" fill="#D8E8F4" />
      <rect x="110" y="225" width="80"  height="6" rx="3" fill="#E8EEF8" />
      <rect x="120" y="237" width="60"  height="6" rx="3" fill="#E8EEF8" />
      {/* Figura persona */}
      <circle cx="50" cy="215" r="20" fill="#1B2A5C" opacity="0.08" />
      <circle cx="50" cy="205" r="12" fill="#2A3F80" />
      <rect x="36" y="220" width="28" height="22" rx="8" fill="#1B2A5C" />
    </svg>
  );
}
