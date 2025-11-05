import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
	stega: { studioUrl: "http://localhost:3000/studio" },
});

// import { createClient } from "next-sanity";

// export const client = createClient({
// 	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
// 	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
// 	//   apiVersion: "2024-12-01",
// 	apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
// 	useCdn: true,
// 	token: process.env.SANITY_VIEWER_TOKEN,
// 	stega: {
// 		// studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
// 		studioUrl: "http://localhost:3000/studio",
// 	},
// });
