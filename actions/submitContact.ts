"use server";

import { submitLead, type ContactFormState } from "@/lib/leads/submitLead";

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  return submitLead(formData);
}
