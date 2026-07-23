import createImageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./client";

const imageBuilder = createImageUrlBuilder(sanityClient);

export function urlForImage(source: Parameters<typeof imageBuilder.image>[0]) {
  if (!source) return null;
  return imageBuilder.image(source);
}
