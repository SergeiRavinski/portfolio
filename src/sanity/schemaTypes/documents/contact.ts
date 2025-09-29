import { defineField, defineType } from "sanity";
import { RiContactsBook3Line } from "react-icons/ri";
import { links } from "../objects/links";

export const contact = defineType({
	name: "contact",
	title: "Contact",
	type: "document",
	fieldsets: [
		{
			name: "locationInfo",
			title: "Location Info",
			description: "Geographical location information",
			options: { collapsible: true, collapsed: false },
		},
	],
	icon: RiContactsBook3Line,
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),

		links,

		defineField({
			name: "location",
			title: "Location",
			type: "geopoint",
			fieldset: "locationInfo",
		}),

		defineField({
			name: "mapStyle",
			title: "Map Style",
			type: "string",
			fieldset: "locationInfo",
			initialValue: "light",
			options: {
				list: [
					{ title: "Light", value: "light" },
					{ title: "Streets V12", value: "streetsv12" },
				],
				layout: "radio",
			},
			validation: (Rule) => Rule.required(),
		}),
	],
	preview: {
		select: {
			title: "title" || "No title",
		},
	},
});
