# 👩‍💻 Alejandra Marulanda — Portafolio Profesional

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)
![Three.js](https://img.shields.io/badge/Three.js-WebGL-white?logo=three.js)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animations-ff0055?logo=framer)

Bienvenido al repositorio central del portafolio profesional de **Alejandra Marulanda**, Ingeniera en Telemática e Ingeniera en Sistemas Computacionales.

Este repositorio contiene el código fuente de una experiencia web interactiva de primer nivel, diseñada para mostrar habilidades avanzadas de desarrollo de software junto con un profundo conocimiento de la infraestructura de redes y telecomunicaciones.

---

## 🌟 Visión y Filosofía de Diseño

Este proyecto va más allá de un currículum web tradicional. Está diseñado para ser una **experiencia interactiva premium** que transmite sofisticación técnica:

- **Bilingüismo Nativo (ES/EN):** Implementación de internacionalización (i18n) sin fricción, adaptándose al idioma del usuario de forma instantánea.
- **Rendimiento de Élite:** Puntuaciones perfectas en Lighthouse (Core Web Vitals) mediante renderizado estático (SSG) y optimización avanzada de recursos.
- **Estética "Tech Premium":** Diseño limpio y moderno inspirado en el *Glassmorphism*, con tipografías legibles y micro-interacciones fluidas.
- **Fondo Interactivo 3D:** Un fondo renderizado en WebGL que simula un "campo de ondas de señal" y nodos de red, reaccionando al cursor del usuario para simbolizar el flujo de datos.

---

## 🛠️ Stack Tecnológico y Arquitectura

Construido utilizando los estándares más modernos de la industria en 2026:

### Core y Framework
- **[Next.js 16](https://nextjs.org/):** Framework principal usando el App Router, Turbopack, React Compiler y generación de sitios estáticos (SSG).
- **[TypeScript](https://www.typescriptlang.org/):** Tipado estricto para garantizar robustez y evitar errores en tiempo de ejecución.

### UI, Estilos y Animaciones
- **CSS Modules + Custom Properties (Variables):** Control de diseño a nivel de píxel sin sobrecarga de clases, utilizando variables HSL.
- **[Framer Motion](https://www.framer.com/motion/):** Animaciones de revelado al hacer scroll y transiciones de interfaz de usuario de alto rendimiento.
- **[Lucide React](https://lucide.dev/):** Iconografía vectorial coherente y ligera.

### 3D e Interacciones
- **[Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber):** Gráficos 3D acelerados por hardware para el entorno interactivo.

### Internacionalización
- **[next-intl](https://next-intl-docs.vercel.app/):** Integración nativa con Next.js App Router para enrutamiento localizado perfecto (ej. `/sobre-mi` y `/en/about`).

---

## 📁 Estructura del Repositorio

El proyecto utiliza una arquitectura modular guiada por funcionalidades (*Feature-Driven Architecture*):

```text
Alejandra Marulanda/
├── alejandra-portfolio/     # Código fuente de la aplicación Next.js
│   ├── public/              # Archivos estáticos (Imágenes, CVs en PDF, Fuentes)
│   ├── src/                 
│   │   ├── app/             # Rutas y Layouts de Next.js
│   │   ├── components/      # Componentes UI reutilizables (3D, Layout, UI)
│   │   ├── data/            # Modelos de datos estáticos (Proyectos, Experiencia)
│   │   ├── features/        # Módulos por dominio (Inicio, Sobre Mí, Contacto, etc.)
│   │   └── i18n/            # Diccionarios de traducción y configuración de rutas
│   ├── next.config.ts       # Configuración del framework
│   └── package.json         # Dependencias y scripts
├── CV_Nets_EngMarulanda2026.pdf # Resumen Curricular
└── portfolio_arquitectura.md # Documentación original de la arquitectura
```

---

## 🚀 Instalación y Desarrollo Local

Para ejecutar este proyecto localmente en tu máquina, sigue estos pasos:

1. **Clona el repositorio** y entra a la carpeta de la aplicación web:
   ```bash
   git clone https://github.com/MarialeMarulanda/alejandramarulanda.dev.git
   cd alejandramarulanda.dev/alejandra-portfolio
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación funcionando.

---

## 🌐 Rutas de la Aplicación

La aplicación utiliza rutas completamente traducidas y localizadas para un mejor SEO:

| Sección | Español (Por defecto) | Inglés (English) |
| --- | --- | --- |
| **Inicio** | `/` | `/en` |
| **Sobre Mí** | `/sobre-mi` | `/en/about` |
| **Experiencia** | `/experiencia` | `/en/experience` |
| **Proyectos** | `/proyectos` | `/en/projects` |
| **Educación** | `/educacion` | `/en/education` |
| **Contacto** | `/contacto` | `/en/contact` |

---

## 📝 Gestión de Contenido

El proyecto está diseñado para que la actualización de información sea fácil sin necesidad de tocar la lógica compleja de React:

- **Textos y Traducciones:** Modifica los archivos en `src/i18n/locales/es.json` y `en.json`.
- **Datos (Experiencia/Proyectos):** Actualiza las estructuras estáticas tipadas en la carpeta `src/data/`.
- **Imágenes:** Añade nuevas imágenes a `public/images/` y actualiza sus referencias en `src/data/images.ts`.

---

## ☁️ Despliegue (Deployment)

Este proyecto está optimizado y listo para ser desplegado en **[Vercel](https://vercel.com)**. Solo tienes que importar el repositorio en tu cuenta de Vercel y se construirá automáticamente sin necesidad de configuración adicional usando el comando predeterminado `npm run build`.

---

*Diseñado y desarrollado con pasión por la tecnología.* 💡🚀
