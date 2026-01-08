import { defineType, defineArrayMember } from "sanity";
import { ImageIcon, LinkIcon } from "@sanity/icons";
import { IoIosArrowDropdown } from "react-icons/io";

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export const blockContentType = defineType({
	title: "Block Content",
	name: "blockContent",
	type: "array",
	of: [
		defineArrayMember({
			type: "block",
			// Styles let you define what blocks can be marked up as. The default
			// set corresponds with HTML tags, but you can set any title or value
			// you want, and decide how you want to deal with it where you want to
			// use your content.
			styles: [
				{ title: "Normal", value: "normal" },
				{ title: "H1", value: "h1" },
				{ title: "H2", value: "h2" },
				{ title: "H3", value: "h3" },
				{ title: "H4", value: "h4" },
				{ title: "Quote", value: "blockquote" },
			],
			lists: [{ title: "Bullet", value: "bullet" }],
			// Marks let you mark up inline text in the Portable Text Editor
			marks: {
				// Decorators usually describe a single property – e.g. a typographic
				// preference or highlighting
				decorators: [
					{ title: "Strong", value: "strong" },
					{ title: "Emphasis", value: "em" },
				],
				// Annotations can be any object structure – e.g. a link or a footnote.
				annotations: [
					{
						name: "link",
						type: "object",
						title: "External link",
						icon: LinkIcon,
						fields: [
							{
								name: "href",
								type: "url",
								title: "URL",
								validation: (Rule) =>
									Rule.uri({
										scheme: [
											"http",
											"https",
											"mailto",
											"tel",
										],
									}),
							},
							{
								name: "blank",
								type: "boolean",
								title: "Open in new tab",
								initialValue: false,
							},
							{
								name: "title",
								type: "string",
								title: "Title",
								description:
									"Title attribute for the link (optional)",
							},
						],
					},
				],
			},
		}),
		// You can add additional types here. Note that you can't use
		// primitive types such as 'string' and 'number' in the same array
		// as a block type.
		defineArrayMember({
			type: "object",
			name: "dropdown",
			title: "Dropdown",
			icon: IoIosArrowDropdown,
			fields: [
				{
					name: "label",
					type: "string",
					title: "Button label",
					validation: (Rule) => Rule.required(),
				},
				{
					name: "content",
					type: "array",
					title: "Dropdown content",
					of: [{ type: "block" }],
				},
			],
		}),
		defineArrayMember({
			type: "image",
			icon: ImageIcon,
			options: { hotspot: true },
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alternative Text",
				},
			],
		}),
	],
});
