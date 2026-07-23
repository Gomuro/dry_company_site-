import { sanityClient } from "./client";

export async function getLandingPageData() {
  try {
    const data = await sanityClient.fetch(
      `*[_type == "landingPage"][0] {
        ...,
        hero {
          ...,
          "heroImageUrl": heroImage.asset->url
        },
        teamSection {
          ...,
          "oleksandrPhotoUrl": oleksandrPhoto.asset->url,
          gallery[] {
            ...,
            "url": asset->url
          }
        },
        servicesSection {
          ...,
          "emergencyImageUrl": emergencyCardImage.asset->url,
          "dryingImageUrl": dryingCardImage.asset->url
        }
      }`
    );
    return data;
  } catch (error) {
    console.error("Error fetching Sanity landing page data:", error);
    return null;
  }
}
