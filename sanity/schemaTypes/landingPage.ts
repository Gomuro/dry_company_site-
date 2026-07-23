import { defineType, defineField } from "sanity";

export const landingPage = defineType({
  name: "landingPage",
  title: "Landing Page Content & Photos",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Document Title",
      type: "string",
      initialValue: "Main Landing Page",
      validation: (Rule) => Rule.required(),
    }),

    // --- HERO SECTION ---
    defineField({
      name: "hero",
      title: "Hero Section (Головний екран)",
      type: "object",
      fields: [
        defineField({ name: "kicker", title: "Kicker / Tagline (наприклад, Málaga · Costa del Sol)", type: "string" }),
        defineField({ name: "title", title: "Hero Title (Головний заголовок)", type: "string" }),
        defineField({ name: "subtitle", title: "Subtitle / Intro Paragraph (Вступний опис)", type: "text" }),
        defineField({ name: "primaryCta", title: "Primary Button Text (Текст першої кнопки)", type: "string" }),
        defineField({ name: "secondaryCta", title: "Secondary Button Text (Текст другої кнопки)", type: "string" }),
        defineField({
          name: "badges",
          title: "Badges (Бейджі під кнопками)",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "heroImage",
          title: "Hero Main Background Image (Головна фонова картинка)",
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt Text (Опис для SEO)", type: "string" }),
          ],
        }),
      ],
    }),

    // --- SERVICES SECTION ---
    defineField({
      name: "servicesSection",
      title: "Services Cards & Images (Секція Послуг та Фото)",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading (Заголовок секції)", type: "string" }),
        defineField({ name: "intro", title: "Intro Text (Вступний текст)", type: "text" }),
        defineField({ name: "emergencyCardTitle", title: "Emergency Card Title (Заголовок першої послуги)", type: "string" }),
        defineField({ name: "emergencyCardBody", title: "Emergency Card Body (Опис першої послуги)", type: "text" }),
        defineField({
          name: "emergencyCardImage",
          title: "Emergency Service Image (Фото для першої послуги)",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({ name: "dryingCardTitle", title: "Drying Card Title (Заголовок другої послуги)", type: "string" }),
        defineField({ name: "dryingCardBody", title: "Drying Card Body (Опис другої послуги)", type: "text" }),
        defineField({
          name: "dryingCardImage",
          title: "Industrial Drying Image (Фото для другої послуги)",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),

    // --- WHEN DRYING IS NEEDED ---
    defineField({
      name: "whenNeededSection",
      title: "Section: Коли потрібне осушення (When Drying Needed)",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "intro", title: "Intro Text", type: "text" }),
        defineField({
          name: "items",
          title: "Use Cases / Items",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "title", title: "Item Title", type: "string" }),
                defineField({ name: "description", title: "Description", type: "text" }),
              ],
            },
          ],
        }),
      ],
    }),

    // --- WHY DRYING IS CRITICAL ---
    defineField({
      name: "whyCriticalSection",
      title: "Section: Чому осушення критично важливе (Why Drying is Critical)",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "intro", title: "Intro Paragraph", type: "text" }),
        defineField({
          name: "points",
          title: "Critical Risks & Points",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({ name: "warningNote", title: "Warning / Summary Note", type: "text" }),
      ],
    }),

    // --- HOW WE WORK ---
    defineField({
      name: "howWeWorkSection",
      title: "Section: Як ми працюємо (How We Work)",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "intro", title: "Intro Text", type: "text" }),
        defineField({
          name: "features",
          title: "Process Features",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({ name: "equipmentNote", title: "Equipment Selection Note", type: "text" }),
      ],
    }),

    // --- WHY IT IS BENEFICIAL ---
    defineField({
      name: "whyBeneficialSection",
      title: "Section: Чому це вигідно (Why Beneficial)",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "benefits",
          title: "Benefits List",
          type: "array",
          of: [{ type: "string" }],
        }),
      ],
    }),

    // --- RESULT ---
    defineField({
      name: "resultSection",
      title: "Section: Результат (Result)",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "text", title: "Result Statement", type: "text" }),
      ],
    }),

    // --- TEAM & STAFF PHOTOS ---
    defineField({
      name: "teamSection",
      title: "Team & Staff Photos (Фото команди та об'єктів)",
      type: "object",
      fields: [
        defineField({
          name: "oleksandrPhoto",
          title: "Oleksandr Photo (Олександр - Фото та статус)",
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt Text", type: "string" }),
            defineField({ name: "caption", title: "Caption (Підпис під фото)", type: "string" }),
          ],
        }),
        defineField({
          name: "gallery",
          title: "Trust / Work Gallery (Галерея виконаних робіт та обладнання)",
          type: "array",
          of: [
            {
              type: "image",
              options: { hotspot: true },
              fields: [
                defineField({ name: "alt", title: "Alt Text", type: "string" }),
                defineField({ name: "title", title: "Title (Назва зображення)", type: "string" }),
              ],
            },
          ],
        }),
      ],
    }),

    // --- CONTACT SECTION ---
    defineField({
      name: "contactSection",
      title: "Contact Info & Form (Контакти та телефон)",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading (Заголовок секції)", type: "string" }),
        defineField({ name: "intro", title: "Intro Text (Підзаголовок)", type: "text" }),
        defineField({ name: "phone", title: "Phone Number (Телефон)", type: "string" }),
        defineField({ name: "whatsapp", title: "WhatsApp Number (Ватсап номер)", type: "string" }),
        defineField({ name: "email", title: "Email Address", type: "string" }),
      ],
    }),
  ],
});
