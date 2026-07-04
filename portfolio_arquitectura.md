# Arquitectura y Diseño Exhaustivo: Portafolio Profesional de Alejandra Marulanda

## 1. Visión General, Objetivos y Posicionamiento

Este documento establece la arquitectura definitiva, profunda y detallada para el desarrollo de un portafolio web de clase mundial. Está diseñado específicamente para posicionar a Alejandra Marulanda como una ingeniera de alto calibre, destacando su doble titulación en **Ingeniería Telemática e Ingeniería en Sistemas**.

El objetivo no es crear una "página de currículum", sino una **experiencia interactiva premium**. La web debe transmitir sofisticación técnica, dominio del desarrollo de software y comprensión de la infraestructura de redes (Telemática), utilizando metáforas visuales de vanguardia.

**Pilares del Proyecto:**
1.  **Bilingüismo Nativo y Sin Fricción:** Implementación de i18n (internacionalización) donde el usuario o el navegador decidan el idioma de forma instantánea.
2.  **Rendimiento y SEO (Core Web Vitals):** Puntuaciones de 99-100 en Lighthouse mediante renderizado en el servidor (SSR) y optimización de assets.
3.  **Estética "Tech Premium":** Diseño inspirado en empresas como Vercel, Stripe o Apple, combinando modo oscuro, tipografía pulida, *Glassmorphism* y micro-interacciones.
4.  **Fondo Generativo/Interactivo (WebGL):** Un elemento 3D en el fondo que responda al usuario, simbolizando el flujo de datos y las telecomunicaciones.

---

## 2. Stack Tecnológico Detallado y Justificación

Para cumplir con los estándares de la industria en 2026, la pila tecnológica elegida es:

### Core / Framework
- **Framework:** `Next.js` (usando el App Router `app/`).
  - *Justificación:* Next.js maneja el enrutamiento complejo y la internacionalización nativamente. Permite pre-renderizar las páginas estáticas (SSG) para que el portafolio cargue en milisegundos, crucial para reclutadores que evalúan la velocidad de tus desarrollos.
- **Lenguaje:** `TypeScript` (Strict Mode).
  - *Justificación:* Muestra profesionalidad. Evitará errores en tiempo de ejecución al tipar estrictamente los datos de proyectos y experiencia.

### Estilos y Diseño (CSS)
- **Vanilla CSS (CSS Modules) con Custom Properties (Variables).**
  - *Justificación:* Proporciona control total a nivel de píxel. Evita la sobrecarga de clases HTML de Tailwind y permite usar variables dinámicas `hsl()` para cálculos de color, degradados fluidos y transiciones puras.
- **Sistema de Íconos:** `Lucide-React` o `Phosphor Icons` (vectores ligeros, limpios y consistentes).

### Interacciones y 3D
- **Animaciones UI:** `Framer Motion`.
  - *Justificación:* El estándar de oro para animar componentes en React. Se usará para revelar elementos al hacer scroll (*Scroll Reveal*), animar la entrada de la página y transiciones de los modales.
- **Fondo Interactivo (Background):** `Three.js` encapsulado en `React Three Fiber` (@react-three/fiber).
  - *Justificación:* Permite renderizar gráficos 3D acelerados por hardware en el navegador.

### Internacionalización
- **Librería i18n:** `next-intl`.
  - *Justificación:* Se integra perfectamente con el App Router de Next.js y los Server Components.

---

## 3. Topología del Proyecto y Estructura de Archivos

Una estructura modular y escalable (Feature-Driven Architecture):

```text
alejandra-portfolio/
├── public/                 
│   ├── images/             # Capturas de proyectos (webp/avif)
│   ├── docs/               # CVs en PDF (cv_en.pdf, cv_es.pdf)
│   └── fonts/              # Fuentes tipográficas locales
├── src/
│   ├── app/                # Enrutamiento de Next.js
│   │   ├── [locale]/       # Carpeta dinámica de idioma
│   │   │   ├── layout.tsx  # Layout global (inyecta navbar, footer)
│   │   │   ├── page.tsx    # Página principal ensamblada
│   │   │   └── globals.css # CSS Reset y variables HSL
│   ├── components/         
│   │   ├── 3d/             # Componentes de Three.js (Background)
│   │   │   ├── NetworkNodes.tsx 
│   │   │   └── CanvasContainer.tsx
│   │   ├── ui/             # Componentes visuales genéricos
│   │   │   ├── Button.tsx
│   │   │   ├── GlassCard.tsx
│   │   │   └── SectionHeader.tsx
│   │   └── layout/         # Componentes de estructura
│   │       ├── Navigation.tsx
│   │       └── Footer.tsx
│   ├── features/           # Dominios lógicos de la web
│   │   ├── hero/           # Inicio
│   │   ├── about/          # Perfil profesional
│   │   ├── experience/     # Timeline de trabajo
│   │   ├── education/      # Títulos y certificaciones
│   │   └── portfolio/      # Proyectos y Casos de estudio
│   ├── data/               # "Base de datos" estática (Modelos de datos)
│   │   ├── projects.ts     # Tipado y datos de proyectos
│   │   └── experience.ts   
│   ├── i18n/               # Internacionalización
│   │   ├── request.ts      # Config de next-intl
│   │   ├── locales/
│   │   │   ├── en.json
│   │   │   └── es.json
│   └── lib/                # Utilidades
│       └── utils.ts        # Funciones auxiliares (ej. concatenar clases CSS)
├── next.config.mjs         # Configuración del framework
└── tsconfig.json           # Reglas de TypeScript
```

---

## 4. Guía de Diseño de Interfaz (UI) y Experiencia (UX)

### 4.1 Paleta de Colores (Basada en HSL)
Los colores deben sentirse de "alta tecnología", profundos y brillantes.
- **Background Principal:** Oscuro infinito (`hsl(220, 20%, 4%)`) a un tono ligeramente más claro (`hsl(220, 20%, 8%)`).
- **Acento Primario (Telemática/Sistemas):** Cian Eléctrico (`hsl(190, 100%, 50%)`) — representa datos, luz óptica, conexiones.
- **Acento Secundario:** Púrpura Neón (`hsl(270, 100%, 60%)`) — usado en gradientes junto al cian para dar un look "futurista".
- **Texto Principal:** Blanco roto (`hsl(0, 0%, 95%)`).
- **Texto Secundario:** Gris metálico (`hsl(220, 10%, 60%)`).

### 4.2 Tipografía
- **Headers (H1, H2, H3):** `Outfit` o `Space Grotesk`. (Fuentes geométricas y modernas).
- **Body (Párrafos):** `Inter`. (Máxima legibilidad).
- **Código / Tags Tech:** `Fira Code` o `JetBrains Mono` (Para listar tecnologías como "React", "Python", "Cisco", etc.).

### 4.3 Sistema de Glassmorphism (Efecto Cristal)
Las tarjetas (para proyectos o educación) no tendrán fondos sólidos. Flotarán sobre el fondo 3D usando este patrón CSS:
```css
.glass-card {
  background: hsla(0, 0%, 100%, 0.03); /* Blanco hiper-transparente */
  backdrop-filter: blur(12px); /* Desenfoca lo que está detrás (el fondo 3D) */
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid hsla(0, 0%, 100%, 0.08); /* Borde sutil iluminado */
  border-radius: 16px;
  box-shadow: 0 8px 32px 0 hsla(0, 0%, 0%, 0.3);
  transition: transform 0.3s ease, border-color 0.3s ease;
}
.glass-card:hover {
  transform: translateY(-5px);
  border-color: hsla(190, 100%, 50%, 0.4); /* Brilla en cian al hacer hover */
}
```

---

## 5. Arquitectura del Fondo Interactivo (Three.js / WebGL)

Para destacar tu perfil, el fondo será una simulación de partículas/nodos (Network Constellation).
- **Concepto:** Cientos de pequeños puntos (nodos) moviéndose lentamente en el fondo.
- **Interacción (Telemática):** Cuando el usuario mueve el cursor, se trazan líneas (conexiones de red) entre el cursor y los nodos más cercanos, simulando una red de telecomunicaciones o el flujo de datos de un sistema.
- **Implementación técnica:** Un componente `<Canvas>` de React Three Fiber situado en posición `fixed`, `z-index: -1`, ocupando el `100vw` y `100vh`.

---

## 6. Modelo de Datos Estático (Data Layer)

Para mantener el código limpio, los datos (experiencia, estudios) se extraerán de objetos de TypeScript, lo que facilita modificarlos en el futuro sin tocar la UI.

```typescript
// src/data/experience.ts
export type ExperienceItem = {
  id: string;
  roleId: string; // Referencia a la key en es.json/en.json (ej: "experience.role1")
  company: string;
  startDate: string;
  endDate: string | "Present";
  technologies: string[];
};

export const experiences: ExperienceItem[] = [
  {
    id: "1",
    roleId: "exp_telematics_engineer", 
    company: "Empresa XYZ",
    startDate: "2024",
    endDate: "Present",
    technologies: ["Python", "AWS", "Cisco", "Docker"]
  }
];
```
*Nota: Los textos descriptivos largos vivirán en los archivos JSON de Next-Intl usando el `roleId` para traducirlos.*

---

## 7. Plan de Ejecución y Siguientes Pasos

Ya que vas a utilizar un entorno de desarrollo asistido por IA (Fable 5 de Claude o yo mismo, Gemini), te recomiendo esta secuencia de trabajo:

1. **Fase 1: Scaffold e Infraestructura**
   - Ejecutar la inicialización del proyecto de Next.js.
   - Configurar Tailwind (si decides usarlo como atajo para el CSS) o el archivo `globals.css` con las variables HSL.
   - Instalar dependencias críticas (`framer-motion`, `next-intl`, `three`, `@react-three/fiber`).
2. **Fase 2: Internacionalización Base**
   - Configurar el enrutador `[locale]` y crear los archivos `en.json` y `es.json` con la estructura de objetos (Header, Hero, About, etc.).
3. **Fase 3: Fondo 3D y Layout**
   - Desarrollar el componente WebGL del fondo y asegurar que no haya problemas de rendimiento.
   - Construir la barra de navegación (Navbar) flotante con selector de idiomas y el pie de página (Footer).
4. **Fase 4: Construcción de Secciones (Features)**
   - **Hero:** Texto grande y dinámico.
   - **Timeline:** Para Experiencia y Educación.
   - **Bento Grid / Cards:** Para los Proyectos del portafolio.
5. **Fase 5: Pulido (Micro-interacciones)**
   - Agregar Framer Motion a todos los componentes para que aparezcan suavemente mientras el usuario hace scroll hacia abajo.

**¿Qué sigue?**
Si este nivel de detalle es exactamente lo que buscabas, el siguiente paso práctico es abrir la terminal e inicializar el repositorio de Next.js para empezar a traducir esta arquitectura en código.
