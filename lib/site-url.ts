/**
 * Canonical origin for metadata, sitemap, and robots.
 * Set NEXT_PUBLIC_SITE_URL to your production URL (e.g. https://www.example.com).
 */
export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}
