import { defineType, defineField } from "sanity";

export const localeString = defineType({
  name: "localeString",
  title: "Localized String",
  type: "object",
  fields: [
    defineField({ name: "es", title: "🇪🇸 Іспанська (Español)", type: "string" }),
    defineField({ name: "en", title: "🇬🇧 Англійська (English)", type: "string" }),
  ],
});

export const localeText = defineType({
  name: "localeText",
  title: "Localized Text",
  type: "object",
  fields: [
    defineField({ name: "es", title: "🇪🇸 Іспанська (Español)", type: "text" }),
    defineField({ name: "en", title: "🇬🇧 Англійська (English)", type: "text" }),
  ],
});
