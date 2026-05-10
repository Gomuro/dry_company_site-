const PHONE_RAW = process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(/\D/g, "");

export function hasWhatsApp(): boolean {
  return Boolean(PHONE_RAW && PHONE_RAW.length >= 8);
}

/** wa.me URL with optional pre-filled message */
export function getWhatsAppHref(prefill?: string): string {
  const phone = PHONE_RAW ?? "";
  const base = `https://wa.me/${phone}`;
  if (!prefill?.trim()) return base;
  const params = new URLSearchParams({
    text: prefill.trim(),
  });
  return `${base}?${params.toString()}`;
}

export function getInstagramHref(): string | undefined {
  const url = process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM?.trim();
  return url || undefined;
}

export function getFacebookHref(): string | undefined {
  const url = process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK?.trim();
  return url || undefined;
}
