import { getTranslations } from "next-intl/server";

import { getWhatsAppHref, hasWhatsApp } from "@/lib/social";

import { ContactCard } from "@/components/landing/ContactCard";
import { SocialLinks } from "@/components/landing/SocialLinks";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export async function ContactSection() {
  const t = await getTranslations("contact");
  const tRoot = await getTranslations();
  const contactId = t("id");

  const wa =
    hasWhatsApp() ?
      getWhatsAppHref(tRoot("whatsappPrefill"))
    : null;

  return (
    <Section id={contactId} className="bg-slate-50">
      <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
        <Reveal className="lg:col-span-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {t("heading")}
            </h2>
            <p className="text-lg text-slate-600">{t("intro")}</p>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>• {t("bullet1")}</li>
              <li>• {t("bullet2")}</li>
            </ul>

            <div className="space-y-3 pt-2">
              <p className="text-sm font-semibold text-slate-900">
                {t("channelsIntro")}
              </p>
              <SocialLinks />
            </div>

            {wa ?
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-emerald-500"
              >
                {t("whatsappCta")}
              </a>
            : null}
          </div>
        </Reveal>

        <Reveal delayMs={120} className="lg:col-span-3">
          <ContactCard />
        </Reveal>
      </div>
    </Section>
  );
}
