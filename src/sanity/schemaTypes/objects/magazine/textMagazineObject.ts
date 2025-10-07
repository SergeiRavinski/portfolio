import { defineField } from "sanity";
import { BsJournalText } from "react-icons/bs";

export const textMagazineObject = defineField({
	name: "textMagazineObject",
	title: "Text Magazine",
	icon: BsJournalText,
	type: "object",
	fields: [
		defineField({
			name: "sectionTitle",
			title: "Section Title",
			type: "string",
			description: "Title for the promo block section",
		}),

		defineField({
			name: "text",
			title: "Text",
			type: "blockContent",
			description: "Text for the promo block section",
		}),

		defineField({
			name: "size",
			title: "Size",
			type: "string",
			initialValue: "small",
			options: {
				list: [
					{ title: "Small", value: "small" },
					{ title: "Large", value: "large" },
				],
				layout: "radio",
			},
		}),

		defineField({
			name: "theme",
			title: "Theme",
			type: "string",
			initialValue: "light",
			options: {
				list: [
					{ title: "Light", value: "light" },
					{ title: "Dark", value: "dark" },
				],
				layout: "radio",
			},
		}),
	],

	preview: {
		select: {
			text: "text",
		},
		prepare({ text }) {
			const block = (text || []).find(
				(block: { _type: string }) => block._type === "block"
			);

			return {
				title: block
					? block.children
							.filter(
								(child: { _type: string }) =>
									child._type === "span"
							)
							.map((span: { text: unknown }) => span.text)
							.join("")
					: "No title",
				subtitle: "Text component",
				media: BsJournalText,
			};
		},
	},
});
