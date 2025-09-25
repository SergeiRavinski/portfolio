import { defineField } from "sanity";
import { imageMagazineObject } from "./magazine/imageMagazineObject";
import { promoBlockMagazineObject } from "./magazine/promoBlockMagazineObject";
import { textMagazineObject } from "./magazine/textMagazineObject";
import { mapMagazineObject } from "./magazine/mapMagazineObject";

export const magazineBuilder = defineField({
	name: "magazineComponents",
	title: "Magazine",
	type: "array",
	group: "magazineComponents",
	description:
		"Add various sections to build your magazine layout. Drag and drop to reorder.",
	of: [
		imageMagazineObject,
		promoBlockMagazineObject,
		textMagazineObject,
		mapMagazineObject,
	],
});
