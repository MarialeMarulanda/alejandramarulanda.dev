/**
 * Rutas de las imágenes del sitio.
 *
 * Para usar tus imágenes reales: súbelas a `public/images/`
 * y cambia aquí la ruta, p. ej. "/images/perfil.jpg".
 * (Instrucciones completas en public/images/LEEME.txt)
 */
export const images = {
  profile: "/images/main_profile.jpeg",
  projects: {
    iot: [
      "/images/arquitecrutaprincipalhabitatiot.jpeg",
      "/images/iot_project.jpeg",
    ],
    antenna: [
      "/images/construyendoantena.mp4",
      "/images/antenabiquad.jpeg",
      "/images/antenadoblebiquadterminada.jpeg",
      "/images/cloverleaf.jpeg",
    ],
    thesis: [
      "/images/tesis1.jpeg",
      "/images/tesis2.jpeg",
      "/images/tesis3.jpeg",
    ],
  },
} as const;
