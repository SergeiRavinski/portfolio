import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ErrorMessage from "@/components/ui/ErrorMessage";

describe("ErrorMessage", () => {
	it("renders the provided message", () => {
		render(<ErrorMessage message="This is an error" />);
		const message = screen.getByText("This is an error");
		expect(message).toBeInTheDocument();
	});

	it("renders default message when message is empty", () => {
		// @ts-ignore: testing default fallback
		render(<ErrorMessage message={undefined} />);
		const defaultMessage = screen.getByText("An error occurred.");
		expect(defaultMessage).toBeInTheDocument();
	});
});
