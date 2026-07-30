# 🐢 Portafolio Personal — Camilo Andrés Pinzón

Portafolio web personal construido con **React + Vite + Tailwind CSS**, con soporte bilingüe (ES/EN), integración de EmailJS, WhatsApp, GitHub API en vivo y documentación técnica de proyectos reales.

**🔗 Demo en vivo:** [portafolio-camilo-pinzon.vercel.app](https://portafolio-camilo-pinzon-gu1pnjxom-andrees-s-projects-12d8b8ab.vercel.app/)

---

## 📸 Vista previa

![Home del portafolio](/public/images/preview-home.png)

---

## ✨ Características

- 🌐 **Bilingüe (ES/EN)** — sistema de traducción con Context API de React
- 📱 **100% Responsive** — optimizado para móvil, tablet y escritorio
- ✉️ **Formulario de contacto real** — integrado con EmailJS
- 💬 **Contacto directo por WhatsApp** — con mensaje predefinido
- 🐙 **Sección GitHub en vivo** — consume la API pública de GitHub para mostrar repositorios actualizados automáticamente
- 🏅 **Credenciales verificables** — badges oficiales de IBM SkillsBuild conectados a Credly
- 📊 **Documentación técnica** — diagramas de flujo (Lucidchart) de proyectos reales, integrados como filtro dentro de Proyectos
- 🎬 **Animaciones al hacer scroll** — con Intersection Observer
- 🔔 **Notificaciones (toasts)** — con Sonner
- ⚡ **Carrusel de tecnologías** — infinito y pausable al pasar el mouse

---

## 🛠️ Stack Tecnológico

| Categoría | Tecnología |
|---|---|
| Framework | React 18 |
| Build tool | Vite |
| Estilos | Tailwind CSS v4 |
| Íconos | Lucide React, React Icons |
| Notificaciones | Sonner |
| Envío de emails | EmailJS |
| Deploy | Vercel |

---

## 📂 Estructura del proyecto

```
portfolio/
├── public/
│   ├── images/              # Ilustraciones, badges IBM, diagramas
│   ├── docs/                # PDFs de documentación técnica
│   └── cv.pdf               # CV descargable
├── src/
│   ├── components/          # Navbar, FadeIn, TypingEffect, etc.
│   ├── sections/            # Home, Education, Experience, Projects...
│   ├── context/             # LanguageContext (ES/EN)
│   ├── data/                # i18n.js y portfolioData.js
│   └── styles/              # global.css (Tailwind + variables de tema)
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Cómo correrlo localmente

```bash
# Clonar el repositorio
git clone https://github.com/Camilo718/tu-repo.git
cd tu-repo

# Instalar dependencias
npm install

# Correr en modo desarrollo
npm run dev

# Generar build de producción
npm run build
```

---

## ⚙️ Variables / configuración

El formulario de contacto usa EmailJS. Si vas a clonar este proyecto, reemplaza estos valores en `src/sections/ContactSection.jsx`:

```js
const SERVICE_ID  = "tu_service_id";
const TEMPLATE_ID = "tu_template_id";
const PUBLIC_KEY  = "tu_public_key";
```

Y el número de WhatsApp:

```js
const WA_NUMBER = "57XXXXXXXXXX";
```

---

## 🎓 Sobre las credenciales

Las 7 credenciales digitales mostradas están certificadas por **IBM SkillsBuild** y son verificables públicamente en [Credly](https://www.credly.com/).

## 📊 Sobre la documentación técnica

Los diagramas de flujo incluidos documentan el análisis funcional de un sistema de nómina (Payroll) por roles, realizado durante mi etapa productiva del SENA, usando **Lucidchart**.

---

## 📬 Contacto

- **Portafolio:** [Ver sitio](https://portafolio-camilo-pinzon-gu1pnjxom-andrees-s-projects-12d8b8ab.vercel.app/)
- **GitHub:** [@Camilo718](https://github.com/Camilo718)
- **LinkedIn:** [Camilo Pinzón](https://www.linkedin.com/in/camilo-andres-pinzon-melendrez-27a7b3319/)
- **Email:** camiloandrespinzonmelendrez@gmail.com

---

<p align="center">Hecho con 🐢 y mucho amor por Camilo Pinzón</p>
