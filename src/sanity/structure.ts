import type { StructureResolver } from "sanity/structure";
import { GrProjects } from "react-icons/gr";
import { SiReaddotcv } from "react-icons/si";
import { RiPagesLine } from "react-icons/ri";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
	S.list()
		.title("Portfolio")
		.items([
			S.documentTypeListItem("projects")
				.title("Projects")
				.icon(GrProjects),

			S.divider(),

			// Our singleton type has a list item with a custom child
			S.listItem()
				.title("Portfolio")
				.id("portfolio")
				.icon(RiPagesLine)
				.child(
					// Instead of rendering a list of documents, we render a single
					// document, specifying the `documentId` manually to ensure
					// that we're editing the single instance of the document
					S.document().schemaType("portfolio").documentId("portfolio")
				),

			// Our singleton type has a list item with a custom child
			S.listItem().title("About").id("about").icon(SiReaddotcv).child(
				// Instead of rendering a list of documents, we render a single
				// document, specifying the `documentId` manually to ensure
				// that we're editing the single instance of the document
				S.document().schemaType("about").documentId("about")
			),

			...S.documentTypeListItems().filter(
				(item) =>
					item.getId() &&
					!["projects", "portfolio", "about"].includes(item.getId()!)
			),
		]);
