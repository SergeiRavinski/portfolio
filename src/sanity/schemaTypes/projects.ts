import { defineField, defineType } from "sanity";

export const projects = defineType({
	name: "projects",
	title: "Projects",
	type: "document",
	fields: [
		defineField({
			title: "Tittel",
			name: "title",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			title: "Bilde",
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
			title: "Dato",
			name: "date",
			type: "date",
			options: {
				dateFormat: "YYYY-MM-DD",
			},
		}),

		defineField({
			title: "Prosjekt beskrivelse",
			name: "description",
			type: "text",
		}),

		defineField({
			title: "Lenke",
			name: "link",
			type: "string",
		}),

		defineField({
			name: "technologies",
			title: "Teknologier",
			type: "tags",
			options: {
				includeFromRelated: "technologies",
			},
		}),

		// defineField({
		// 	name: "tags",
		// 	title: "Emner / Tags",
		// 	group: "meta",
		// 	type: "tags",
		// 	options: {
		// 		//includeFromRelated: 'tags',
		// 		onCreate: (value) => ({
		// 			label: value,
		// 			value: value.toLowerCase().replace(/\W/g, "-"),
		// 		}),
		// 	},
		// }),
	],
});
