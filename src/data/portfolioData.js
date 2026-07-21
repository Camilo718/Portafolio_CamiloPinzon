import {
  SiWhatsapp,
  SiGithub,      
  SiX,           
  SiGmail,       
  SiReact,       
  SiFigma,     
  SiDhl,         
  SiShopify,     
  SiVite,       
  SiPython,      
  SiGrafana     
} from "react-icons/si";
import { HiOutlineBriefcase } from "react-icons/hi";

export const PERSONAL = {
  name:     "Camilo Andrés Pinzón",
  alias:    "camilo_dev",
  bio:      "I am an organized and responsible individual with strong skills in Design Thinking, Frontend development, and data analysis. I stand out for my integrity, teamwork, and readiness to build innovative solutions.",
  ctaLabel: "View my projects", 
  email:    "camiloandrespinzonmelendrez@gmail.com",
  phone:    "315-8094-952",
  location: "Carrera 87#131-06",
  cvFile:   "/cv.pdf",
};

export const NAV_LINKS = ["Home", "Education", "Experience", "Projects", "Contact Me"];

export const SOCIALS = [
  { label: "GitHub",   icon: SiGithub, href: "#" },   
  { label: "LinkedIn", icon: HiOutlineBriefcase, href: "#" }, 
  { label: "Twitter",  icon: SiX, href: "#" },        
  { label: "Email",    icon: SiGmail, href: `mailto:camiloandrespinzonmelendrez@gmail.com` }, 
  { label: "WhatsApp", icon: SiWhatsapp, href: "https://wa.me/573158094952" },
];

export const STATS = [
  { value: 3,  suffix: "+", label: "Years studying" },
  { value: 10, suffix: "+", label: "Projects" },
  { value: 7,  suffix: "",       label: "Credenciales IBM" },
  { value: 5,  suffix: "",  label: "Technologies" },
  { value: 2,  suffix: "",  label: "Certifications" },
];

export const SKILLS = [
  {
    icon: SiReact,
    title: "Frontend Development",
    image: "../../public/images/Develop.png",
    tags: ["React", "JavaScript", "TypeScript", "HTML/CSS"],
    items: [
      "Developing responsive user interfaces with React",
      "Handling TypeScript and modern JavaScript",
      "Strong skills in Frontend design and layout",
    ],
  },
  {
    icon: SiFigma,
    title: "Design & Data",
    image: "../../public/images/Graficas.png",
    tags: ["Python", "UI Design", "Design Thinking", "Data Analysis"],
    items: [
      "Applying design thinking to create innovative solutions",
      "Data analysis utilizing Python",
      "Effective time management and collaborative teamwork",
    ],
  },
];

export const EDUCATION = [
  {
    badge: "Technical",
    title: "Software Programming Technician",
    institution: "SENA",
    year: "In Progress",
  },
  {
    badge: "Training",
    title: "P-Tech Program",
    institution: "IBM – SkillsBuild",
    year: "Completed",
  },
  {
    badge: "High School",
    title: "Academic Baccalaureate",
    institution: "Colegio Gerardo Paredes",
    year: "Graduated",
  },
  {
    badge: "Skill",
    title: "Design Thinking & Mindfulness",
    institution: "Self-taught",
    year: "Ongoing",
  },
];

export const EXPERIENCE = [
  {
    role: "Warehouse Assistant",
    company: "Grupo Éxito / Coordinadora",
    period: "Prior Experience",
    location: "Colombia",
    description:
      "Logistics operator for a major retail chain, handling hygienic food management and packaging operations. Developed strong organizational, accountability, and teamwork skills.",
    logo: SiDhl, // Based on 📦 (Logistics/Parcel)
  },
  {
    role: "Sales & Commerce",
    company: "Retail Experience",
    period: "Prior Experience",
    location: "Colombia",
    description:
      "Gained expertise in retail sales, effective communication, inventory management, and logistics. Strong capability in customer relations and problem-solving.",
    logo: SiShopify, // Based on 🛒 (Commerce/Sales)
  },
];

export const PROJECTS = [
  {
    icon: SiVite, // Based on 🌐 (Web Project)
    title: "Personal Portfolio",
    description: "A web portfolio built using React + Vite. Features dark mode, smooth animations, and dynamic sections.",
    tags: ["React", "Vite", "CSS"],
    link: "#",
  },
  {
    icon: SiReact, // Based on 📱 (Frontend App)
    title: "React Frontend App",
    description: "Responsive web application developed with React applying best practices for reusable components.",
    tags: ["React", "JavaScript", "UI"],
    link: "#",
  },
  {
    icon: SiPython, // Based on 🐍
    title: "Python Data Analysis",
    description: "Data analysis and visualization project using Python.",
    tags: ["Python", "Data", "Analysis"],
    link: "#",
  },
  {
    icon: SiFigma, // Based on 🎨
    title: "UI/UX Design",
    description: "Interface design proposal applying Design Thinking and UX principles.",
    tags: ["Design Thinking", "UI", "UX"],
    link: "#",
  },
  {
    icon: SiShopify, // Based on 🛒 (Management/Inventory System)
    title: "Inventory Management",
    description: "A basic inventory management system developed during my technical software training.",
    tags: ["JavaScript", "Logic", "SENA"],
    link: "#",
  },
  {
    icon: SiGrafana, // Based on 📊 (Analytical Dashboard / Metrics)
    title: "Analytical Dashboard",
    description: "Metrics visualization dashboard built with reusable React components.",
    tags: ["React", "TypeScript", "Charts"],
    link: "#",
  },
];

export const FILTER_TAGS = ["All", "React", "Python", "UI/UX", "JavaScript", "TypeScript"];

export const IBM_CREDENTIALS = [
  {
    name: "AI Literacy",
    issued: "Jun 2026",
    image: "https://images.credly.com/images/bc70837c-99ae-499d-a31d-2a7be79095e6/linkedin_thumb_BadgeEmblem_AILiteracy.png",
    url: "https://www.credly.com/badges/aa91c0bc-1629-4cb9-afb7-37d0a8a30262/public_url",
  },
  {
    name: "Data Fundamentals",
    issued: "May 2026",
    image: "https://images.credly.com/images/edaf0f19-2df0-4759-8871-7b1b44687f53/linkedin_thumb_image.png",
    url: "https://www.credly.com/badges/9f2ca338-e8cd-4956-b311-d42cf07b1bb8/public_url",
  },
  {
    name: "Agile Explorer",
    issued: "Mar 2026",
    image: "https://images.credly.com/images/3b7846e2-bdbd-4ed6-8543-182f47502190/linkedin_thumb_image.png",
    url: "https://www.credly.com/badges/43320d12-7297-41a6-8dd4-21b657041304/public_url",
  },
  {
    name: "Artificial Intelligence Fundamentals",
    issued: "Feb 2025",
    image: "https://images.credly.com/images/82b908e1-fdcd-4785-9d32-97f11ccbcf08/linkedin_thumb_image.png",
    url: "https://www.credly.com/badges/b2873d77-78a6-4ed2-9878-f9cee3c727ba/public_url",
  },
  {
    name: "Working in a Digital World: Professional Skills",
    issued: "Jun 2024",
    image: "https://images.credly.com/images/4f76c627-c180-49ae-a5a0-742885eef581/linkedin_thumb_Working_in_a_Digital_World-_Professional_Skills.png",
    url: "https://www.credly.com/badges/e04a1b30-b088-41a9-bb5f-f0cb7e7f1f13/public_url",
  },
  {
    name: "Explorations into Mindfulness",
    issued: "Abr 2024",
    image: "https://images.credly.com/images/7aa8da9f-3580-4f1d-b604-faecad98e7c5/linkedin_thumb_blob",
    url: "https://www.credly.com/badges/34250858-22ce-443e-b2bf-1e84dde92a2a/public_url",
  },
  {
    name: "Basic Principles of Design",
    issued: "Nov 2022",
    image: "https://images.credly.com/images/13ba6d71-e938-4fc0-a341-b0c7df45c095/linkedin_thumb_Basic_Principles_of_Design.png",
    url: "https://www.credly.com/badges/6df514e4-da7f-4989-82b0-c55303fc95ee/public_url",
  },
];