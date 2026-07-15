import { useEffect, useRef } from "react";
import {
  SiJavascript, SiTypescript, SiPython, SiHtml5,
  SiReact, SiNodedotjs, SiBootstrap, SiNpm,
  SiMysql, SiMongodb, SiGit, SiGithub, SiJira,
  SiFigma, SiDiscord, SiCss
} from "react-icons/si";
import { FaMicrosoft, FaSlack } from "react-icons/fa";

const TECHS = [
  // Languages
  { icon: SiJavascript, name: "JavaScript",  color: "#F7DF1E", bg: "#FEFCE8" },
  { icon: SiTypescript, name: "TypeScript",  color: "#3178C6", bg: "#EFF6FF" },
  { icon: SiPython,     name: "Python",      color: "#3572A5", bg: "#EFF6FF" },
  { icon: SiHtml5,      name: "HTML5",       color: "#E34C26", bg: "#FEF2F2" },
  { icon: SiCss,        name: "CSS3",        color: "#563D7C", bg: "#FAF5FF" },
  // Frameworks
  { icon: SiReact,      name: "React",       color: "#61DAFB", bg: "#ECFEFF" },
  { icon: SiNodedotjs,  name: "Node.js",     color: "#339933", bg: "#F0FDF4" },
  { icon: SiBootstrap,  name: "Bootstrap",   color: "#7952B3", bg: "#FAF5FF" },
  { icon: SiNpm,        name: "npm",         color: "#CB3837", bg: "#FEF2F2" },
  // Databases
  { icon: SiMysql,      name: "MySQL",       color: "#4479A1", bg: "#EFF6FF" },
  { icon: SiMongodb,    name: "MongoDB",     color: "#47A248", bg: "#F0FDF4" },
  // Tools
  { icon: SiGit,        name: "Git",         color: "#F05032", bg: "#FEF2F2" },
  { icon: SiGithub,     name: "GitHub",      color: "#181717", bg: "#F8FAFC" },
  { icon: SiJira,       name: "Jira",        color: "#0052CC", bg: "#EFF6FF" },
  { icon: FaMicrosoft,  name: "VS Code", color: "#007ACC", bg: "#EFF6FF" },
  { icon: SiFigma,      name: "Figma",       color: "#f2251e", bg: "#FEF2F2" },
  { icon: SiDiscord,    name: "Discord",     color: "#5865F2", bg: "#EEF2FF" },
  { icon: FaSlack,      name: "Slack",       color: "#4A154B", bg: "#FAF5FF" },
];

// Duplicamos para el loop infinito
const ITEMS = [...TECHS, ...TECHS];

export default function TechCarousel() {
  const trackRef = useRef(null);
  const animRef  = useRef(null);
  const posRef   = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const totalWidth = track.scrollWidth / 2;

    const animate = () => {
      if (!pausedRef.current) {
        posRef.current += 0.5;
        if (posRef.current >= totalWidth) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div className="py-10 overflow-hidden" style={{ background: "var(--color-bg)" }}>
      <p className="text-center text-xs font-medium tracking-widest mb-6 uppercase"
        style={{ color: "var(--color-muted)" }}>
        Tecnologías que manejo
      </p>
      <div className="relative overflow-hidden">
        {/* Fade left */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--color-bg), transparent)" }} />
        {/* Fade right */}
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--color-bg), transparent)" }} />

        <div
          ref={trackRef}
          className="flex gap-3 w-max"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          {ITEMS.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div
                key={i}
                title={tech.name}
                className="flex flex-col items-center gap-1.5 px-4 py-3 rounded-2xl border
                           cursor-default transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
                style={{
                  background: tech.bg,
                  borderColor: `${tech.color}30`,
                  minWidth: 72,
                }}
              >
                <Icon size={28} color={tech.color} />
                <span className="text-[10px] font-medium whitespace-nowrap"
                  style={{ color: tech.color }}>
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
