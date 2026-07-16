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
    icon: SiFigma, // Based on 🎨
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