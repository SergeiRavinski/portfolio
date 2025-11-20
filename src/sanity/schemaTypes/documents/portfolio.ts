import { defineField, defineType } from "sanity";
import { RiPagesLine } from "react-icons/ri";
import { links } from "../objects/links";
import { FaStackOverflow } from "react-icons/fa";

export const portfolio = defineType({
	name: "portfolio",
	title: "Portfolio",
	type: "document",
	icon: RiPagesLine,
	fields: [
		// Title
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),

		// Full name
		defineField({
			name: "name",
			title: "Full name",
			type: "string",
		}),

		// Professional title
		defineField({
			name: "professionalTitle",
			title: "Professional Title",
			type: "string",
			description: "Short professional title or tagline",
			validation: (Rule) =>
				Rule.max(100).warning("Should be under 100 characters"),
		}),

		// Projects (References to project documents)
		defineField({
			name: "projects",
			title: "Projects",
			type: "array",
			of: [{ type: "reference", to: [{ type: "projects" }] }],
			description: "Select projects to feature in your portfolio",
			validation: (Rule) => Rule.unique().error("Duplicate projects"),
		}),

		// Skills
		defineField({
			name: "skills",
			title: "Skills",
			description: "List of skills categorized by type",
			type: "array",
			of: [
				defineField({
					name: "categorisedSkills",
					title: "Categorised Skills",
					type: "object",
					icon: FaStackOverflow,
					fields: [
						defineField({
							name: "title",
							title: "Title",
							type: "string",
						}),

						defineField({
							name: "technologies",
							title: "Technologies",
							type: "array",
							of: [{ type: "string" }],
						}),
					],

					preview: {
						select: { title: "title", categories: "technologies" },
						prepare({ title, categories }) {
							return {
								title: title || "New Skills Group",
								subtitle: categories?.join(", ") || "",
							};
						},
					},
				}),
			],
		}),

		// Profile links (e.g., LinkedIn, GitHub, Twitter)
		links,

		// SEO Metadata
		defineField({
			name: "metadata",
			title: "Metadata",
			type: "object",
			description: "SEO metadata for the portfolio page",
			options: {
				collapsible: true,
				collapsed: true,
			},
			fields: [
				// SEO Title
				defineField({
					name: "seoTitle",
					title: "SEO Title",
					type: "string",
					description:
						"Title for SEO purposes. If not set, the main title will be used.",
				}),

				// SEO Description
				defineField({
					name: "seoDescription",
					title: "SEO Description",
					type: "text",
					rows: 4,
					description:
						"Description for SEO purposes. Summarize your portfolio in a few sentences.",
				}),

				// SEO Keywords
				defineField({
					name: "seoKeywords",
					title: "SEO Keywords",
					type: "array",
					of: [{ type: "string" }],
					description:
						"Keywords for SEO purposes. Separate keywords with commas.",
				}),

				// Open Graph Image
				defineField({
					name: "seoImage",
					title: "Open Graph Image",
					type: "image",
					description:
						"Image used for social sharing (Open Graph). Recommended size: 1200x630 pixels.",
					options: {
						hotspot: true,
					},
				}),

				// Profile Links
				links,
			],
		}),
	],

	preview: {
		select: {
			title: "title",
		},
		prepare({ title }) {
			return {
				title: title || "No title",
				media: RiPagesLine,
			};
		},
	},
});
