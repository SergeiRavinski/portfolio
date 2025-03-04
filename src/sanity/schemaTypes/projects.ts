import { defineField, defineType } from "sanity";

export const projects = defineType({
	name: "projects",
	title: "Projects",
	type: "document",
	fields: [
		defineField({
			title: "Title",
			name: "title",
			type: "string",
		}),

		defineField({
			title: "Description",
			name: "description",
			type: "text",
		}),

		defineField({
			title: "Link",
			name: "link",
			type: "string",
		}),
	],
});
