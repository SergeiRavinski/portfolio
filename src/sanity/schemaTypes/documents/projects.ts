import { AIInput } from "@/sanity/customComponents/AIInput";
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
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			title: "Image",
			name: "image",
			type: "image",
			validation: (Rule) => Rule.required(),
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alternativ tekst (bildebeskrivelse)",
				},
			],
			options: {
				hotspot: true,
			},
		}),

		defineField({
			title: "Date",
			name: "date",
			type: "date",
			options: {
				dateFormat: "YYYY-MM-DD",
			},
		}),

		defineField({
			title: "Project description",
			name: "description",
			type: "text",
			components: {
				input: AIInput,
			},
		}),

		defineField({
			title: "Short description",
			name: "short_description",
			type: "text",
			rows: 2,
		}),

		defineField({
			title: "Links",
			name: "links",
			type: "object",
			options: {
				collapsible: true,
				collapsed: false,
			},
			fields: [
				{
					title: "Live demo",
					name: "liveDemo",
					type: "url",
				},
				{
					title: "GitHub",
					name: "github",
					type: "url",
				},
			],
		}),

		defineField({
			name: "techStack",
			title: "Tech Stack",
			type: "array",
			of: [{ type: "string" }],
		}),
	],
});
