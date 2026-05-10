import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/services/emergency-response": {
      es: "/servicios/intervencion-urgente",
      en: "/services/emergency-response",
    },
    "/services/industrial-drying": {
      es: "/servicios/deshumidificacion-industrial",
      en: "/services/industrial-drying",
    },
  },
});
