import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { Image } from "sanity";

import { dataset, projectId } from "../env";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource) => {
	return builder.image(source);
};

export function urlForOpenGraphImage(image: Image | undefined) {
	return image ? urlFor(image).width(1200).height(627).fit("crop").url() : undefined;
}
