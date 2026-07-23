import { getSiteUrl } from "@/lib/site-url";

const SITE_IMAGE_BASE = "/images/site";

export const HERO_IMAGE = {
  src: `${SITE_IMAGE_BASE}/hero.jpg`,
  width: 1920,
  height: 2560,
} as const;

export const SERVICE_IMAGES = {
  emergency: {
    src: `${SITE_IMAGE_BASE}/service-emergency.jpg`,
  },
  drying: {
    src: `${SITE_IMAGE_BASE}/service-drying.jpg`,
  },
} as const;

export const TRUST_GALLERY_IMAGES = [
  `${SITE_IMAGE_BASE}/trust-01.jpg`,
  `${SITE_IMAGE_BASE}/trust-02.jpg`,
  `${SITE_IMAGE_BASE}/trust-03.jpg`,
  `${SITE_IMAGE_BASE}/trust-04.jpg`,
  `${SITE_IMAGE_BASE}/trust-05.jpg`,
  `${SITE_IMAGE_BASE}/trust-06.jpg`,
] as const;

export function absoluteImageUrl(path: string): string {
  const base = getSiteUrl().replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
