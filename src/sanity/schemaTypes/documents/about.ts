import { defineField, defineType } from "sanity";
import { SiReaddotcv } from "react-icons/si";
import { magazineBuilder } from "../objects/magazineBuilder";
import { promoBlock } from "../objects/promoBlock";
import { IoLinkOutline } from "react-icons/io5";

export const about = defineType({
	name: "about",
	title: "About",
	type: "document",
	groups: [
		{
			name: "magazineComponents",
			title: "Magazine",
		},
		{
			name: "promoBlock",
			title: "Promo Block",
		},
	],
	icon: SiReaddotcv,
	fields: [
		// Full name
		defineField({
			name: "name",
			title: "Full name",
			type: "string",
		}),

		magazineBuilder,
		promoBlock,

		// Phone number
		defineField({
			name: "phone",
			title: "Phone",
			type: "string",
			validation: (Rule) =>
				Rule.regex(/^\+?[0-9\s\-()]{7,}$/, {
					name: "phone",
					invert: false,
				}).error("Invalid phone number"),
		}),

		// Email
		defineField({
			name: "email",
			title: "Email",
			type: "string",
			validation: (Rule) =>
				Rule.regex(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, {
					name: "email",
					invert: false,
				}).error("Invalid email address"),
		}),

		// Profile links (e.g., LinkedIn, GitHub, Twitter)
		defineField({
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
		}),

		// CV upload
		defineField({
			name: "cv",
			title: "CV",
			type: "file",
			options: {
				accept: ".pdf,.doc,.docx",
			},
		}),

		// Location
		defineField({
			name: "location",
			title: "Location",
			type: "geopoint",
		}),
	],
});
