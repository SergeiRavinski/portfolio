import { IoLinkOutline } from "react-icons/io5";
import { defineField } from "sanity";

export const links = defineField({
	name: "links",
	title: "Profile Links (e.g., LinkedIn, GitHub, Twitter)",
	type: "array",
	icon: IoLinkOutline,
	of: [
		defineField({
			name: "link",
			title: "Link",
			type: "object",
			fields: [
				defineField({
					name: "title",
					title: "Title",
					type: "string",
				}),
				defineField({
					name: "url",
					title: "URL",
					type: "url",
					validation: (Rule) =>
						Rule.uri({
							allowRelative: false,
							scheme: ["http", "https", "mailto", "tel"],
						}),
				}),
			],
			preview: {
				select: {
					title: "title",
					subtitle: "url",
				},

				prepare({ title, subtitle }) {
					return {
						title: title || "No title",
						subtitle: subtitle || "",
						media: IoLinkOutline,
					};
				},
			},
		}),
	],
});
