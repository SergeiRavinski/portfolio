import { type Template } from "sanity";
import { blockContentType } from "./modules/blockContentType";
import { categoryType } from "./documents/categoryType";
import { postType } from "./documents/postType";
import { projects } from "./documents/projects";
import { authorType } from "./documents/authorType";
import { about } from "./documents/about";
import { portfolio } from "./documents/portfolio";

// Define the singleton document types
const singletonTypes = new Set(["about"]);

export const schema = {
	types: [
		blockContentType,
		categoryType,
		postType,
		authorType,
		projects,
		portfolio,
		about,
	],

	// Filter out singleton types from the global “New document” menu options
	templates: (templates: Template[]) =>
		templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
};
