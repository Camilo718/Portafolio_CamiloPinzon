import { FaChartLine, FaPalette, FaBox, FaShoppingCart, FaGlobe, FaMobileAlt, FaPython, FaPaintBrush, FaChartBar, FaClipboardList } from "react-icons/fa";

export const PERSONAL = {
  name:     "Camilo Andrés Pinzón",
  alias:    "camilo_dev",
  bio:      "Soy una persona organizada y responsable, con habilidades en Design Thinking, programación Frontend y análisis de datos. Me destaco por mi integridad, trabajo en equipo y disposición para crear soluciones innovadoras.",
  ctaLabel: "Ver mis proyectos",
  email:    "camiloandrespinzonmelendrez@gmail.com",
  phone:    "315-8094-952",
  location: "Carrera 87#131-06",
  cvFile:   "/cv.pdf",
};

export const NAV_LINKS = ["Home", "Education", "Experience", "Projects", "Contact Me"];
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi"; // Feather: limpio y ligero

export const SOCIALS = [
 { label: "GitHub",    icon: SiGithub,   href: "https://github.com/Camilo718" },
  { label: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/camilo-andres-pinzon-melendrez-27a7b3319/" },
  { label: "X",        icon: SiX,        href: "https://x.com/tu-usuario" },
  { label: "Email",    icon: FiMail,     href: `mailto:camiloandrespinzonmelendrez@gmail.com` },
];

export const STATS = [
  { value: 3,  suffix: "+", label: "Años estudiando" },
  { value: 10, suffix: "+", label: "Proyectos" },
  { value: 5,  suffix: "",  label: "Tecnologías" },
  { value: 2,  suffix: "",  label: "Certificaciones" },
];

export const SKILLS = [
  {
    icon: FaChartLine,
    title: "Frontend Development",
    image: "/images/Develop.png",
    tags: ["React", "JavaScript", "TypeScript", "HTML/CSS"],
    items: [
      "Desarrollo de interfaces responsivas con React",
      "Manejo de TypeScript y JavaScript moderno",
      "Habilidades en diseño y maquetación Frontend",
    ],
  },
  {
    icon: FaPalette,
    title: "Diseño & Datos",
    image: "/images/Graficas.png",
    tags: ["Python", "Diseño UI", "Design Thinking", "Análisis de datos"],
    items: [
      "Pensamiento de diseño para soluciones innovadoras",
      "Análisis de datos con Python",
      "Gestión del tiempo y trabajo colaborativo en equipo",
    ],
  },
];

export const EDUCATION = [
  {
    badge: "Técnico",
    title: "Técnico en Programación de Software",
    institution: "SENA",
    year: "En curso",
  },
  {
    badge: "Formación",
    title: "Formación P-Tech",
    institution: "IBM – SkillsBuild",
    year: "Completado",
  },
  {
    badge: "Bachiller",
    title: "Bachiller Académico",
    institution: "Colegio Gerardo Paredes",
    year: "Graduado",
  },
  {
    badge: "Habilidad",
    title: "Design Thinking & Mindfulness",
    institution: "Autodidacta",
    year: "Continuo",
  },
];

export const EXPERIENCE = [
  {
    role: "Auxiliar de Bodega",
    company: "Grupo Éxito / Coordinadora",
    period: "Experiencia previa",
    location: "Colombia",
    description:
      "Operador logístico de almacén de cadena, manipulación higiénica de alimentos y trabajo en empaquetado. Desarrollé habilidades de organización, responsabilidad y trabajo en equipo.",
    logo: FaBox,
  },
  {
    role: "Ventas & Comercio",
    company: "Experiencia en comercio",
    period: "Experiencia previa",
    location: "Colombia",
    description:
      "Conocimiento en ventas, comunicación efectiva, gestión en inventario y logística. Capacidad de relacionamiento con clientes y resolución de problemas.",
    logo: FaShoppingCart,
  },
];

export const PROJECTS = [
  {
    icon: FaGlobe,
    title: "Portafolio Personal",
    description: "Portafolio web construido con React + Vite. Incluye dark mode, animaciones y secciones dinámicas.",
    tags: ["React", "Vite", "CSS"],
    link: "#",
  },
  {
    icon: FaMobileAlt,
    title: "App Frontend React",
    description: "Aplicación web responsiva desarrollada con React y buenas prácticas de componentes.",
    tags: ["React", "JavaScript", "UI"],
    link: "#",
  },
  {
    icon: FaPython,
    title: "Análisis de Datos Python",
    description: "Proyecto de análisis y visualización de datos usando Python.",
    tags: ["Python", "Datos", "Análisis"],
    link: "#",
  },
  {
    icon: FaPaintBrush,
    title: "Diseño UI/UX",
    description: "Propuesta de diseño de interfaz aplicando principios de Design Thinking y UX.",
    tags: ["Design Thinking", "UI", "UX"],
    link: "#",
  },
  {
    icon: FaClipboardList,
    title: "Gestión de Inventario",
    description: "Sistema básico de gestión de inventario desarrollado durante formación técnica.",
    tags: ["JavaScript", "Lógica", "SENA"],
    link: "#",
  },
  {
    icon: FaChartBar,
    title: "Dashboard Analítico",
    description: "Dashboard de visualización de métricas con componentes React reutilizables.",
    tags: ["React", "TypeScript", "Charts"],
    link: "#",
  },
];

export const FILTER_TAGS = ["Todos", "React", "Python", "UI/UX", "JavaScript", "TypeScript"];
