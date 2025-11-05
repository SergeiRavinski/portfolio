import { describe, it, expect } from "vitest";
import { capitalizeFirstLetter } from "@/helpers/capitalize-first-letter";

describe("capitalizeFirstLetter", () => {
	it("capitalizes the first letter of a lowercase word", () => {
		expect(capitalizeFirstLetter("hello")).toBe("Hello");
	});

	it("does not change the rest of the string", () => {
		expect(capitalizeFirstLetter("world")).toBe("World");
	});

	it("leaves an already capitalized first letter unchanged", () => {
		expect(capitalizeFirstLetter("Test")).toBe("Test");
	});

	it("returns an empty string when input is empty", () => {
		expect(capitalizeFirstLetter("")).toBe("");
	});

	it("works with single-character strings", () => {
		expect(capitalizeFirstLetter("a")).toBe("A");
		expect(capitalizeFirstLetter("Z")).toBe("Z");
	});
});
