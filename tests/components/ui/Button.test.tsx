import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Button from "@/components/ui/Button";

describe("Button", () => {
	it("renders a text button correctly", () => {
		render(<Button type="text" text="Click me" />);
		const heading = screen.getByText("Click me");
		expect(heading).toBeInTheDocument();
	});

	it("renders a styling button with default icon", () => {
		render(<Button type="styling" changeStyling={false} />);
		const icon = screen.getByAltText("Random icon");
		expect(icon).toBeInTheDocument();
	});

	it("renders a styling button with default-changed icon", () => {
		render(<Button type="styling" changeStyling={true} />);
		const icon = screen.getByAltText("Default icon");
		expect(icon).toBeInTheDocument();
	});

	it("calls clickEvent when button is clicked", () => {
		const handleClick = vi.fn();
		render(<Button type="text" text="Click me" clickEvent={handleClick} />);
		const button = screen.getByText("Click me").closest("button");
		expect(button).toBeInTheDocument();

		if (button) fireEvent.click(button);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it("renders as a link if link prop is provided", () => {
		render(<Button type="text" text="Go" link="/test" target />);
		const link = screen.getByRole("link");
		expect(link).toHaveAttribute("href", "/test");
		expect(link).toHaveAttribute("target", "_blank");
	});
});
