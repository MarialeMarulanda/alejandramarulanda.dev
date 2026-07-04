# 5 Pasos para Construir el Portafolio Profesional de Alejandra Marulanda

Este documento detalla el plan de acción estructurado en 5 fases principales para desarrollar la página web bilingüe con diseño premium.

## Paso 1: Configuración Inicial del Entorno (Scaffolding)
- **Objetivo:** Preparar la base técnica del proyecto.
- **Acciones:**
  - Inicializar el proyecto con Next.js usando `npx create-next-app@latest`.
  - Configurar TypeScript, ESLint y el App Router.
  - Instalar dependencias clave: `framer-motion` (animaciones), `three` y `@react-three/fiber` (fondo 3D), `next-intl` (bilingüismo).
  - Construir la arquitectura de carpetas descrita en el documento de arquitectura.

## Paso 2: Sistema de Diseño y Estilos Globales
- **Objetivo:** Establecer la identidad visual "Tech Premium".
- **Acciones:**
  - Configurar las variables CSS basadas en colores HSL (Dark Mode profundo, acentos cian y púrpura).
  - Definir las clases utilitarias para el efecto *Glassmorphism* en tarjetas y paneles.
  - Importar e integrar fuentes tipográficas (ej. Outfit para títulos, Inter para textos).
  - Crear componentes UI base reutilizables: Botones, tarjetas (GlassCards), e íconos.

## Paso 3: Integración del Bilingüismo (i18n)
- **Objetivo:** Asegurar que la web soporte Español e Inglés nativamente.
- **Acciones:**
  - Configurar middleware en Next.js para enrutar dinámicamente (`/es` o `/en`).
  - Crear diccionarios `es.json` y `en.json` con los textos estáticos.
  - Implementar el selector de idioma flotante en la barra de navegación.
  - Probar la conmutación de idioma sin recarga de página.

## Paso 4: Construcción de Secciones y Datos Dinámicos
- **Objetivo:** Desarrollar el contenido principal del portafolio.
- **Acciones:**
  - Crear la capa de datos en TypeScript (`projects.ts`, `experience.ts`).
  - Desarrollar la **Hero Section** resaltando "Ingeniera Telemática & Sistemas".
  - Construir la sección **Sobre Mí / Habilidades**.
  - Crear el componente **Timeline** para Experiencia Laboral y Educación.
  - Diseñar el **Grid de Proyectos** interactivo utilizando las GlassCards.

## Paso 5: Fondo 3D (WebGL), Animaciones y Optimización
- **Objetivo:** Dar vida a la web y prepararla para producción.
- **Acciones:**
  - Implementar la malla de nodos (simulando tráfico de red/datos) en el fondo usando React Three Fiber.
  - Añadir micro-interacciones y transiciones al hacer scroll (*Scroll Reveal*) a los componentes con Framer Motion.
  - Auditar el rendimiento (Lighthouse) asegurando alta velocidad y SEO.
  - Desplegar la aplicación final en Vercel.
