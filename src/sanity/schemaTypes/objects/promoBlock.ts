import { defineField } from "sanity";

export const promoBlock = defineField({
	name: "promoBlock",
	title: "Promo Block",
	type: "object",
	group: "promoBlock",
	description: "A promotional block with image, text, and button",
	options: {
		collapsible: true,
		collapsed: true,
	},
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),

		defineField({
			name: "text",
			title: "Text",
			type: "blockContent",
		}),

		defineField({
			name: "layout",
			title: "Layout",
			type: "string",
			initialValue: "imageLeft",
			options: {
				list: [
					{ title: "Image Left", value: "imageLeft" },
					{ title: "Image Right", value: "imageRight" },
				],
				layout: "radio",
				direction: "horizontal",
			},
		}),

		defineField({
			name: "background",
			title: "Background",
			type: "string",
			initialValue: "light",
			options: {
				list: [
					{ title: "Light", value: "light" },
					{ title: "Dark", value: "dark" },
				],
				layout: "radio",
				direction: "horizontal",
			},
		}),

		defineField({
			name: "button",
			title: "Button",
			type: "object",
			fields: [
				defineField({
					name: "type",
					title: "Button Type",
					type: "string",
					initialValue: "text",
					options: {
						list: [
							{ title: "Text Button", value: "text" },
							{
								title: "Outlined Button",
								value: "outlined",
							},
						],
						layout: "radio",
						direction: "horizontal",
					},
				}),

				defineField({
					name: "textButton",
					title: "Button Text",
					type: "string",
				}),

				defineField({
					name: "link",
					title: "Button Link",
					type: "url",
					validation: (Rule) =>
						Rule.uri({
							allowRelative: true,
							scheme: ["http", "https", "mailto", "tel"],
						}),
				}),
			],
		}),

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
	],
});
