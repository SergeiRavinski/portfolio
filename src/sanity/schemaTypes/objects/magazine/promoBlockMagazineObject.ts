import { defineField } from "sanity";
import { CiCreditCard1 } from "react-icons/ci";

export const promoBlockMagazineObject = defineField({
	name: "promoBlockMagazineObject",
	title: "Promo Block Magazine",
	icon: CiCreditCard1,
	type: "object",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			description: "Title for the promo block section",
		}),

		defineField({
			name: "sectionTitle",
			title: "Section Title",
			type: "string",
			description: "Title for the promo block section",
		}),

		defineField({
			name: "image",
			type: "image",
			description: "Image",
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
			description: "Select the size of the image",
		}),

		defineField({
			name: "text",
			title: "Text",
			type: "blockContent",
			description: "Text for the promo block section",
		}),
	],

	preview: {
		select: {
			media: "image",
			alt: "image.attribution",
		},
		prepare({ media, alt }) {
			return {
				title: alt || "No title",
				subtitle: "Promo Block component",
				media: media,
			};
		},
	},
});
