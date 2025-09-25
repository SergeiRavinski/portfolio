import { ImageIcon } from "@sanity/icons";
import { defineField } from "sanity";

export const imageMagazineObject = defineField({
	title: "Image",
	name: "imageObject",
	type: "object",
	icon: ImageIcon,
	fields: [
		defineField({
			name: "image",
			type: "image",
			description: "Profile image",
			options: {
				hotspot: true,
				collapsible: true,
				collapsed: false,
				// aiAssist: {
				// imageDescriptionField: 'alt',
				// },
			},
			fields: [
				defineField({
					name: "attribution",
					title: "Image attribution",
					type: "string",
				}),
			],
		}),

		defineField({
			name: "size",
			title: "Size",
			type: "string",
			options: {
				list: [
					{ title: "Small", value: "small" },
					{ title: "Large", value: "large" },
				],
				layout: "radio",
			},
			initialValue: "small",
		}),

		defineField({
			name: "hoverElement",
			title: "Hover element",
			type: "boolean",
			description: "Show hover element over the image",
			initialValue: false,
		}),

		defineField({
			name: "hoverText",
			title: "Hover text",
			type: "string",
			description: "Text to show on hover over the image",
			hidden: ({ parent }) => !parent?.hoverElement,
			validation: (Rule) => Rule.max(100).warning("Max 100 characters"),
		}),
	],

	preview: {
		select: {
			media: "image",
			alt: "image.attribution",
		},
		prepare({ media, alt }) {
			return {
				title: alt || "Image",
				subtitle: "Image component",
				media: media,
			};
		},
	},
});
