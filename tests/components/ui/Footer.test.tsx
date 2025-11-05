import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, Mock } from "vitest";
import Footer from "@/components/ui/Footer";
import { usePathname } from "next/navigation";

// Mock next/navigation
vi.mock("next/navigation", () => ({
	usePathname: vi.fn(),
}));

describe("Footer", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("renders the copyright text", () => {
		(usePathname as Mock).mockReturnValue("/");

		render(<Footer />);
		expect(
			screen.getByText(/© \d{4} Sergei Ravinski/)
		).toBeInTheDocument();
	});

	it("applies correct padding for home page", () => {
		(usePathname as Mock).mockReturnValue("/");

		const { container } = render(<Footer />);
		expect(container.querySelector("footer")).toHaveClass("pt-4");
	});

	it("applies correct padding for non-home page", () => {
		(usePathname as Mock).mockReturnValue("/about");

		const { container } = render(<Footer />);
		expect(container.querySelector("footer")).toHaveClass("py-4");
	});
});
