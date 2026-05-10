import { z } from "zod";

/** Build localized Zod schema from Validation message getter (next-intl). */
export function createContactSchema(
  t: (key: string, values?: Record<string, string>) => string,
) {
  return z.object({
    name: z
      .string({ required_error: t("nameRequired") })
      .min(2, t("nameMin"))
      .max(120, t("nameMax")),
    phone: z
      .string({ required_error: t("phoneRequired") })
      .min(9, t("phoneMin"))
      .max(32, t("phoneMax")),
    email: z
      .string({ required_error: t("emailRequired") })
      .email(t("emailInvalid"))
      .max(254, t("emailMax")),
    city: z
      .string({ required_error: t("cityRequired") })
      .min(2, t("cityMin"))
      .max(120, t("cityMax")),
    message: z
      .string({ required_error: t("messageRequired") })
      .min(10, t("messageMin"))
      .max(4000, t("messageMax")),
    consent: z.boolean().refine((value) => value === true, {
      message: t("consentRequired"),
    }),
  });
}
