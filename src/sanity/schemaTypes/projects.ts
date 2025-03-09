import { defineField, defineType } from "sanity";

const frontend = [
	{ title: "HTML & CSS", value: "HTML & CSS" },
	{ title: "JavaScript", value: "JavaScript" },
	{ title: "TypeScript", value: "TypeScript" },
	{ title: "Next.js", value: "Next.js" },
	{ title: "React.js", value: "React.js" },
	{ title: "Vue.js", value: "Vue.js" },
	{ title: "Tailwind", value: "Tailwind" },
	{ title: "MUI", value: "MUI" },
	{ title: "Zustand", value: "Zustand" },
	{ title: "Responsivt webdesign", value: "Responsivt webdesign" },
	{ title: "Styled Components", value: "Styled Components" },
	{ title: "Universell utforming (UU)", value: "Universell utforming (UU)" },
];

const backend = [
	{ title: "Sanity", value: "Sanity" },
	{ title: "Node.js", value: "Node.js" },
	{ title: "Express.js", value: "Express.js" },
	{ title: "MongoDB", value: "MongoDB" },
	{ title: "REST API", value: "REST API" },
	{ title: "Firebase", value: "Firebase" },
	{ title: "GROQ", value: "GROQ" },
	{ title: "SEO", value: "SEO" },
];

const tools = [
	{ title: "Git", value: "Git" },
	{ title: "Github", value: "Github" },
	{ title: "VS Code", value: "VS Code" },
	{ title: "Postman", value: "Postman" },
	{ title: "Chrome DevTools", value: "Chrome DevTools" },
	{ title: "Trello", value: "Trello" },
];

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
			title: "Frontend teknologier",
			name: "frontendTechnologies",
			type: "array",
			of: [{ type: "string" }],
			options: {
				list: frontend,
			},
		}),

		defineField({
			title: "Backend teknologier",
			name: "backendTechnologies",
			type: "array",
			of: [{ type: "string" }],
			options: {
				list: backend,
			},
		}),

		defineField({
			title: "Verktøy",
			name: "tools",
			type: "array",
			of: [{ type: "string" }],
			options: {
				list: tools,
			},
		}),
	],
});
