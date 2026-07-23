import { defineType, defineField } from "sanity";

export const landingPage = defineType({
  name: "landingPage",
  title: "Landing Page Content",
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
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({ name: "kicker", title: "Kicker / Tag", type: "string" }),
        defineField({ name: "title", title: "Hero Title", type: "string" }),
        defineField({ name: "subtitle", title: "Subtitle / Intro Paragraph", type: "text" }),
        defineField({ name: "primaryCta", title: "Primary Button Text", type: "string" }),
        defineField({ name: "secondaryCta", title: "Secondary Button Text", type: "string" }),
        defineField({
          name: "badges",
          title: "Badges",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "heroImage",
          title: "Hero Main Image",
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt Text", type: "string" }),
          ],
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
      title: "Team & Staff Photos",
      type: "object",
      fields: [
        defineField({
          name: "oleksandrPhoto",
          title: "Oleksandr Photo (Олександр)",
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt Text", type: "string" }),
            defineField({ name: "caption", title: "Caption", type: "string" }),
          ],
        }),
        defineField({
          name: "gallery",
          title: "Trust / Work Gallery",
          type: "array",
          of: [
            {
              type: "image",
              options: { hotspot: true },
              fields: [
                defineField({ name: "alt", title: "Alt Text", type: "string" }),
                defineField({ name: "title", title: "Title", type: "string" }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
});
