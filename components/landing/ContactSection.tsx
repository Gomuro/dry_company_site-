import { contactContent } from "@/lib/content/site";

import { ContactCard } from "@/components/landing/ContactCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function ContactSection() {
  return (
    <Section id={contactContent.id} className="bg-slate-50">
      <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
        <Reveal className="lg:col-span-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {contactContent.heading}
            </h2>
            <p className="text-lg text-slate-600">{contactContent.intro}</p>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>• Sin spam: solo seguimiento comercial de esta petición.</li>
              <li>• Si es urgente, indica si hay riesgo eléctrico o goteras activas.</li>
            </ul>
          </div>
        </Reveal>

        <Reveal delayMs={120} className="lg:col-span-3">
          <ContactCard />
        </Reveal>
      </div>
    </Section>
  );
}
