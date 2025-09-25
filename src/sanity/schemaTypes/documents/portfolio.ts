import { defineField, defineType } from "sanity";
import { RiPagesLine } from "react-icons/ri";
import { links } from "../objects/links";

export const portfolio = defineType({
	name: "portfolio",
	title: "Portfolio",
	type: "document",
	icon: RiPagesLine,
	fields: [
		// Full name
		defineField({
			name: "name",
			title: "Full name",
			type: "string",
		}),

		// Professional title
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			description: "Short professional title or tagline",
			validation: (Rule) =>
				Rule.max(100).warning("Should be under 100 characters"),
		}),

		// Skills
		defineField({
			name: "skills",
			title: "Skills",
			type: "object",
			description: "List of skills categorized by type",
			options: {
				collapsible: true,
				collapsed: false,
			},
			fields: [
				// Frontend
				defineField({
					name: "frontendTech",
					title: "Frontend Technologies",
					type: "array",
					of: [{ type: "string" }],
				}),

				// Backend
				defineField({
					name: "backendTech",
					title: "Backend Technologies",
					type: "array",
					of: [{ type: "string" }],
				}),

				// Tools
				defineField({
					name: "tools",
					title: "Tools",
					type: "array",
					of: [{ type: "string" }],
				}),

				// Hosting Platforms
				defineField({
					name: "hostingPlatforms",
					title: "Hosting Platforms",
					type: "array",
					of: [{ type: "string" }],
				}),

				// Animation Libraries
				defineField({
					name: "animationLibraries",
					title: "Animation Libraries",
					type: "array",
					of: [{ type: "string" }],
				}),

				// Design
				defineField({
					name: "design",
					title: "Design",
					type: "array",
					of: [{ type: "string" }],
				}),

				// Methodologies
				defineField({
					name: "methodologies",
					title: "Methodologies",
					type: "array",
					of: [{ type: "string" }],
				}),
			],
		}),

		// Profile links (e.g., LinkedIn, GitHub, Twitter)
		links,
	],
	preview: {
		select: {
			title: "name",
			subtitle: "title",
		},
		prepare({ title, subtitle }) {
			return {
				title: title || "No name",
				subtitle: subtitle || "No title",
				media: RiPagesLine,
			};
		},
	},
});
