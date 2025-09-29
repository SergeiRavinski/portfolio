import { type Template } from "sanity";
import { blockContentType } from "./modules/blockContentType";
import { projects } from "./documents/projects";
import { about } from "./documents/about";
import { portfolio } from "./documents/portfolio";
import { contact } from "./documents/contact";

// Define the singleton document types
const singletonTypes = new Set(["about"]);

export const schema = {
	types: [blockContentType, projects, portfolio, about, contact],

	// Filter out singleton types from the global “New document” menu options
	templates: (templates: Template[]) =>
		templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
};
