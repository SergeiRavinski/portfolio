// src/sanity/presentation/resolve.ts

import {
	defineLocations,
	PresentationPluginOptions,
} from "sanity/presentation";

export const resolve: PresentationPluginOptions["resolve"] = {
	locations: {
		// Add more locations for other post types
		post: defineLocations({
			select: {
				title: "title",
				slug: "slug.current",
			},
			resolve: () => ({
				locations: [
					{ title: "Portfolio", href: `/` },
					{ title: "About", href: `/about` },
					{ title: "Contact", href: `/contact` },
				],
			}),
		}),
	},
};
