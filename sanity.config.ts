"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId, googleMaps } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";
import { presentationTool } from "sanity/presentation";
import { resolve } from "./src/sanity/presentation/resolve";
import { googleMapsInput } from "@sanity/google-maps-input";

// import { tags } from "sanity-plugin-tags";

// Define the actions that should be available for singleton documents
const singletonActions = new Set([
	"publish",
	"discardChanges",
	"restore",
	"schedule",
]);

// Define the singleton document types
const singletonTypes = new Set(["about"]);

export default defineConfig({
	basePath: "/studio",
	projectId,
	dataset,
	// Add and edit the content schema in the './sanity/schemaTypes' folder
	schema,
	plugins: [
		structureTool({ structure }),
		// Vision is for querying with GROQ from inside the Studio
		// https://www.sanity.io/docs/the-vision-plugin
		visionTool({ defaultApiVersion: apiVersion }),
		presentationTool({
			resolve,
			previewUrl: {
				previewMode: {
					enable: "/api/draft-mode/enable",
				},
			},
		}),
		googleMapsInput({
			apiKey: googleMaps,
		}),

		// tags({}),
	],

	document: {
		// For singleton types, filter out actions that are not explicitly included
		// in the `singletonActions` list defined above
		actions: (input, context) =>
			singletonTypes.has(context.schemaType)
				? input.filter(
						({ action }) => action && singletonActions.has(action)
					)
				: input,
	},
});
