import { PERSONAL, SOCIALS, STATS } from "../data/portfolioData";
import TypingEffect from "../components/TypingEffect";
import AnimatedCounter from "../components/AnimatedCounter";
import FadeIn from "../components/FadeIn";
import TechCarousel from "../components/TechCarousel";
import { SiGithub, SiX, SiDribbble } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Download, Eye } from "lucide-react";

const SOCIAL_ICONS = {
  GitHub:   { Icon: SiGithub,   color: "#181717" },
  LinkedIn: { Icon: FaLinkedin, color: "#0A66C2" },
  Twitter:  { Icon: SiX,        color: "#000000" },
  Dribbble: { Icon: SiDribbble, color: "#EA4C89" },
  Email:    { Icon: MdEmail,    color: "#EA4335" },
};

export default function HomeSection() {
  return (
    <section id="home" style={{ background: "var(--color-bg)" }}>
      <div className="grid grid-cols-2 items-center gap-8 px-10 pt-14 pb-8 min-h-[420px]">
        <FadeIn direction="left">
          <p className="text-sm font-medium tracking-widest mb-2" style={{ color: "var(--color-accent)" }}>
            HOLA, SOY
          </p>
          <h1 className="text-5xl font-semibold leading-tight mb-3" style={{ color: "var(--color-navy)" }}>
            {PERSONAL.name}
          </h1>
          <p className="text-lg mb-4 min-h-[28px]" style={{ color: "var(--color-muted)" }}>
            <TypingEffect />
          </p>
          <p className="text-sm leading-relaxed max-w-md mb-6" style={{ color: "var(--color-light)" }}>
            {PERSONAL.bio}
          </p>

          <div className="flex gap-2.5 mb-6">
            {SOCIALS.map((s) => {
              const si = SOCIAL_ICONS[s.label];
              if (!si) return null;
              const { Icon, color } = si;
              return (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center border
                             transition-transform duration-200 hover:scale-110 hover:shadow-md"
                  style={{ background: "var(--color-bg-card)", borderColor: "var(--color-tag-bg)" }}>
                  <Icon size={16} color={color} />
                </a>
              );
            })}
          </div>

          <div className="flex gap-3">
            <button
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium text-white
                         border-none cursor-pointer transition-colors duration-200"
              style={{ background: "var(--color-navy)" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "var(--color-navy-light)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "var(--color-navy)"}
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                toast.info("¡Revisa mis proyectos!", { description: "Bajando a la sección" });
              }}
            >
              <Eye size={15} /> {PERSONAL.ctaLabel}
            </button>
            <a
              href={PERSONAL.cvFile} download
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium border-[1.5px]
                         transition-all duration-200"
              style={{ color: "var(--color-navy)", borderColor: "var(--color-navy)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--color-navy)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--color-navy)"; }}
              onClick={() => toast.success("Descargando CV", { description: "El archivo se guardará en tus descargas" })}
            >
              <Download size={15} /> Descargar CV
            </a>
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={150}>
          <div className="flex justify-center">
            <img src="../../public/images/home.png" alt="Hero" className="max-w-[420px] w-full object-contain" />
          </div>
        </FadeIn>
      </div>

      <div className="grid grid-cols-4 gap-4 px-10 pb-6">
        {STATS.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 80}>
            <div className="rounded-2xl border p-5 text-center shadow-sm"
              style={{ background: "var(--color-bg-card)", borderColor: "var(--color-tag-bg)" }}>
              <p className="text-4xl font-bold" style={{ color: "var(--color-navy)" }}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--color-muted)" }}>{stat.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>
      <TechCarousel />
    </section>
  );
}
