import { getTranslations } from "next-intl/server";

import {
  getFacebookHref,
  getInstagramHref,
  getWhatsAppHref,
  hasWhatsApp,
} from "@/lib/social";

type SocialLinksProps = {
  className?: string;
};

export async function SocialLinks({ className = "" }: SocialLinksProps) {
  const t = await getTranslations("social");
  const tRoot = await getTranslations();
  const instagram = getInstagramHref();
  const facebook = getFacebookHref();
  const wa = hasWhatsApp()
    ? getWhatsAppHref(tRoot("whatsappPrefill"))
    : null;

  if (!wa && !instagram && !facebook) {
    return null;
  }

  return (
    <ul
      className={`flex flex-wrap items-center gap-4 text-sm font-medium text-slate-700 ${className}`}
    >
      {wa ? (
        <li>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-700"
            aria-label={t("whatsapp")}
          >
            {t("whatsapp")}
          </a>
        </li>
      ) : null}
      {instagram ? (
        <li>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-700"
            aria-label={t("instagram")}
          >
            {t("instagram")}
          </a>
        </li>
      ) : null}
      {facebook ? (
        <li>
          <a
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-700"
            aria-label={t("facebook")}
          >
            {t("facebook")}
          </a>
        </li>
      ) : null}
    </ul>
  );
}
