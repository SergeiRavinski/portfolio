import type { StructureResolver } from "sanity/structure";
import { GrProjects } from "react-icons/gr";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
	S.list()
		.title("Portfolio")
		.items([
			S.documentTypeListItem("projects")
				.title("Projects")
				.icon(GrProjects),

			S.divider(),

			S.documentTypeListItem("post").title("Posts"),
			S.documentTypeListItem("category").title("Categories"),
			S.documentTypeListItem("author").title("Authors"),

			S.divider(),

			...S.documentTypeListItems().filter(
				(item) =>
					item.getId() &&
					!["post", "category", "author", "projects"].includes(
						item.getId()!
					)
			),
		]);
