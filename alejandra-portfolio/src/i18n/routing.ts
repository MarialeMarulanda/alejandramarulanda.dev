import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  // Spanish (default) has clean URLs without prefix: /sobre-mi
  // English is prefixed and translated: /en/about
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/sobre-mi": {
      es: "/sobre-mi",
      en: "/about",
    },
    "/experiencia": {
      es: "/experiencia",
      en: "/experience",
    },
    "/proyectos": {
      es: "/proyectos",
      en: "/projects",
    },
    "/educacion": {
      es: "/educacion",
      en: "/education",
    },
    "/contacto": {
      es: "/contacto",
      en: "/contact",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export type AppPathname = keyof typeof routing.pathnames;
