# Portafolio — Alejandra Marulanda

Portafolio profesional bilingüe (ES/EN) de Alejandra Marulanda, Ingeniera en Telemática y Sistemas Computacionales.

## Stack

- **Next.js 16** (App Router, Turbopack, React Compiler, SSG)
- **TypeScript** (strict)
- **next-intl** — i18n con rutas localizadas: español sin prefijo (`/sobre-mi`) e inglés traducido (`/en/about`)
- **React Three Fiber + Three.js** — fondo 3D "campo de ondas de señal" que ondula con el cursor
- **Framer Motion** — scroll reveal y micro-interacciones
- **CSS Modules + Custom Properties** — sistema de diseño claro "Rosa & Crema" con glassmorphism
- **Lucide React** — iconografía

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción (SSG)
npm start
```

## Páginas

| Español (default) | English |
| --- | --- |
| `/` | `/en` |
| `/sobre-mi` | `/en/about` |
| `/experiencia` | `/en/experience` |
| `/proyectos` | `/en/projects` |
| `/educacion` | `/en/education` |
| `/contacto` | `/en/contact` |

## Estructura

```
src/
├── app/[locale]/        # Layout raíz (fondo 3D, nav, footer) + una carpeta por página
├── proxy.ts             # Enrutamiento de idioma (next-intl)
├── i18n/                # routing (pathnames localizados), request config y diccionarios
├── data/                # Capa de datos tipada (experiencia, proyectos, educación, imágenes)
├── components/
│   ├── 3d/              # Fondo WebGL (carga dinámica, respeta prefers-reduced-motion)
│   ├── layout/          # Navigation (páginas + selector de idioma) y Footer
│   └── ui/              # Reveal, SectionHeader
└── features/            # hero, home, about, experience, portfolio, education, contact
```

## Contenido

- Los **textos** viven en `src/i18n/locales/es.json` y `en.json`.
- Los **datos no traducibles** (tecnologías, ids, contacto) viven en `src/data/`.
- Las **imágenes**: sube las tuyas a `public/images/` y actualiza las rutas en
  `src/data/images.ts` (instrucciones en `public/images/LEEME.txt`). Mientras tanto
  se muestran placeholders SVG.
- El **CV descargable** está en `public/docs/cv.pdf`.

## Despliegue

Pensado para [Vercel](https://vercel.com): importar el repositorio y desplegar sin configuración adicional.
