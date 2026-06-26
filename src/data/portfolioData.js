// ─────────────────────────────────────────────
//  portfolioData.js
//  Edita este archivo para actualizar tu info
//  sin tocar ningún componente.
// ─────────────────────────────────────────────

export const PERSONAL = {
  name: "Camilo Andres Pinzon",
  alias: "your_alias",
  bio: "A passionate designer who crafts beautiful, user-centered digital experiences that solve real problems and create lasting impact.",
  ctaLabel: "⭐ View My Work",
};

export const NAV_LINKS = ["Home", "Education", "Projects", "Contact Me"];

export const SOCIALS = [
  { label: "GitHub",   icon: "⌨️", href: "https://github.com/Camilo718" },
  { label: "LinkedIn", icon: "💼", href: "https://www.linkedin.com/in/camilo-andres-pinzon-melendrez-27a7b3319/" },
  { label: "Email",    icon: "✉️", href: "mailto:camilopinzon275@gmail.com" },
];

export const SKILLS = [
  {
    icon: "🎨",
    title: "UI/UX Design",
    image: "../../public/images/develop.png",
    tags: ["Figma", "Adobe XD", "Illustrator", "Sketch"],
    items: [
      "Designing highly attractive interfaces for mobile and web apps",
      "Customizing and building logos from scratch",
      "Creating application flows to optimize user experience",
    ],
  },
  {
    icon: "🔬",
    title: "Prototyping & Research",
    image: "../../public/images/graficas.png",
    tags: ["Wireframing", "User Testing", "Prototypes"],
    items: [
      "Building interactive prototypes for stakeholder validation",
      "Conducting usability tests and synthesizing findings",
      "Creating design systems and component libraries",
    ],
  },
];

export const EDUCATION = [
  {
    badge: "Degree",
    title: "Bachelor in Graphic & Digital Design",
    institution: "Universidad Placeholder",
    year: "2018 – 2022",
  },
  {
    badge: "Certification",
    title: "Google UX Design Professional Certificate",
    institution: "Coursera / Google",
    year: "2022",
  },
  {
    badge: "Certification",
    title: "Figma Advanced Components & Auto Layout",
    institution: "Figma Community / Platzi",
    year: "2023",
  },
  {
    badge: "Certification",
    title: "Adobe XD Masterclass",
    institution: "Udemy",
    year: "2021",
  },
];

export const PROJECTS = [
  {
    icon: "📊",
    title: "Dashboard Redesign",
    description:
      "Complete visual overhaul of a SaaS analytics dashboard, improving task completion by 40%.",
    tags: ["Figma", "UI/UX", "SaaS"],
    link: "#",
  },
  {
    icon: "📱",
    title: "Mobile Banking App",
    description:
      "End-to-end design for a fintech app targeting young adults, from research to high-fidelity prototype.",
    tags: ["Mobile", "Fintech", "Research"],
    link: "#",
  },
  {
    icon: "🧩",
    title: "Design System",
    description:
      "Built a scalable component library and design token system for a mid-size product team.",
    tags: ["Design System", "Tokens", "Figma"],
    link: "#",
  },
  {
    icon: "🛒",
    title: "E-Commerce UX",
    description:
      "Redesigned checkout flow reducing cart abandonment by 25%.",
    tags: ["E-Commerce", "UX", "A/B Test"],
    link: "#",
  },
  {
    icon: "🎯",
    title: "Brand Identity Kit",
    description:
      "Logo, color palette, typography and usage guidelines for a sustainability startup.",
    tags: ["Branding", "Illustrator", "Identity"],
    link: "#",
  },
  {
    icon: "♿",
    title: "Accessibility Audit",
    description:
      "Full WCAG 2.1 audit and redesign recommendations for a government web portal.",
    tags: ["A11y", "WCAG", "Research"],
    link: "#",
  },
];
