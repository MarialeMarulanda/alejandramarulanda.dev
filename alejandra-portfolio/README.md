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

## Componentes destacados

- **PageLoader** (`src/components/ui/PageLoader.tsx`): pantalla de carga animada
  ("AM" + anillo giratorio) que se muestra hasta que la página termina de cargar
  (evento `load` o un máximo de 2 s), respeta `prefers-reduced-motion`.
- **Background3D / WaveFieldCanvas**: fondo WebGL con densidad de partículas
  reducida automáticamente en pantallas < 768px para mantener fluidez en móviles.
- **Projects**: cada proyecto puede tener una galería de varias imágenes/video con
  scroll horizontal y snap, pensada para gestos táctiles.

## Contenido

- Los **textos** viven en `src/i18n/locales/es.json` y `en.json`.
- Los **datos no traducibles** (tecnologías, ids, contacto) viven en `src/data/`.
- Las **imágenes**: sube las tuyas a `public/images/` y actualiza las rutas en
  `src/data/images.ts` (instrucciones en `public/images/LEEME.txt`). Mientras tanto
  se muestran placeholders SVG.
- El **CV descargable** está en `public/docs/cv.pdf`.

## Despliegue

### Vercel

Pensado para [Vercel](https://vercel.com): importar el repositorio y desplegar sin configuración adicional.

### Docker

El proyecto incluye un `Dockerfile` multi-stage (deps → build → runner) que usa el
[output `standalone`](https://nextjs.org/docs/pages/api-reference/next-config-js/output)
de Next.js para generar una imagen mínima de producción.

```bash
# Construir y levantar con docker compose (recomendado)
docker compose up --build -d

# o manualmente con docker build/run
docker build -t alejandramarulanda-dev .
docker run --rm -p 3000:3000 alejandramarulanda-dev
```

La app queda disponible en `http://localhost:3000`. El contenedor corre como
usuario sin privilegios (`nextjs`, uid 1001), no reinstala dependencias de
desarrollo y solo copia `.next/standalone`, `.next/static` y `public` a la imagen
final.

Para detener el servicio:

```bash
docker compose down
```

## Acceso desde la red local (LAN)

`npm run dev` y `npm start` ya escuchan en `0.0.0.0:3000` (ver `scripts` en
`package.json`), así que el servidor acepta conexiones entrantes, no solo `localhost`.

Para que otros equipos en la misma Wi-Fi/LAN puedan abrir la página:

1. Averigua la IP de la máquina anfitriona (`ipconfig` → "Dirección IPv4", ej. `192.168.0.82`).
2. Si la IP cambia (otra red, otro router), actualiza `allowedDevOrigins` en
   `next.config.ts` con la IP nueva — solo aplica en `npm run dev`; ver más abajo.
3. Levanta el servidor:
   ```bash
   npm run dev     # desarrollo, con recarga en caliente
   # o para probar como en producción:
   npm run build
   npm start
   ```
4. Desde otro equipo en la misma red, abre `http://<IP-del-anfitrión>:3000` (ej.
   `http://192.168.0.82:3000`).
5. Si no conecta, revisa el Firewall de Windows: la primera vez que Node.js escucha
   en un puerto, Windows suele preguntar si permitir el acceso en redes **privadas**.
   Acepta esa red (o crea la regla manualmente en "Firewall de Windows Defender" →
   "Configuración avanzada" → reglas de entrada → permitir TCP 3000 en el perfil
   Privado).

### Causa raíz del problema original

Next.js bloquea por seguridad, en modo desarrollo, las peticiones cross-origin a
sus recursos internos (`/_next/*`, HMR por WebSocket) cuando vienen de un host
distinto al configurado. Sin `allowedDevOrigins` en `next.config.ts`, el HTML
inicial cargaba desde otros equipos, pero todos los JS/CSS y la recarga en
caliente devolvían `403 Unauthorized` — la página se veía rota o en blanco. Esto
solo afecta a `next dev`; `next start` (producción) no tiene esta restricción.

### Limitaciones residuales

- `allowedDevOrigins` está fijado a `192.168.0.82`; si la IP de la máquina cambia
  hay que actualizarla ahí (o añadir varias IPs conocidas al arreglo).
- El firewall de Windows puede requerir aprobación manual la primera vez que
  Node.js recibe conexiones entrantes.
