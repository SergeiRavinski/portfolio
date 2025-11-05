import { describe, it, expect } from "vitest";
import { gridStyles } from "@/helpers/grid-styles";

describe("gridStyles", () => {
	it("should be an array with 6 items", () => {
		expect(gridStyles).toHaveLength(6);
	});

	it("each item should have the correct keys", () => {
		gridStyles.forEach((item) => {
			expect(item).toHaveProperty("gridColumnStart");
			expect(item).toHaveProperty("gridColumnEnd");
			expect(item).toHaveProperty("size");
		});
	});

	it("all values should be strings", () => {
		gridStyles.forEach((item) => {
			expect(typeof item.gridColumnStart).toBe("string");
			expect(typeof item.gridColumnEnd).toBe("string");
			expect(typeof item.size).toBe("string");
		});
	});
});
