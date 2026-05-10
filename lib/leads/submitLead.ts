import { ZodError } from "zod";
import { getTranslations } from "next-intl/server";

import { createContactSchema } from "@/lib/validation/contactSchema";

export type ContactFormState =
  | { ok: false; errors?: Record<string, string[]>; message?: string }
  | { ok: true; message: string };

function formDataToRecord(formData: FormData): Record<string, unknown> {
  return {
    name: String(formData.get("name") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    city: String(formData.get("city") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
    consent: formData.get("consent") === "on",
  };
}

function flattenIssues(error: ZodError): Record<string, string[]> {
  const errors: Record<string, string[]> = {};
  for (const issue of error.issues) {
    const key = issue.path.length ? issue.path.join(".") : "_root";
    if (!errors[key]) errors[key] = [];
    errors[key].push(issue.message);
  }
  return errors;
}

/** Validates and accepts a lead. MVP: log only; swap adapter for email/webhook later. */
export async function submitLead(
  formData: FormData,
): Promise<ContactFormState> {
  const validationT = await getTranslations("Validation");
  const contactSchema = createContactSchema((key) => validationT(key));

  const parsed = contactSchema.safeParse(formDataToRecord(formData));

  if (!parsed.success) {
    return { ok: false, errors: flattenIssues(parsed.error) };
  }

  if (process.env.NODE_ENV === "development") {
    console.info("[lead]", parsed.data);
  }

  // TODO: plug Resend, webhook, or CRM here — keep this function as the single entry point.

  const t = await getTranslations();
  return {
    ok: true,
    message: t("successMessage"),
  };
}
