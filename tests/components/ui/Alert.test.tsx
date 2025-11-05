import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Alert from "@/components/ui/Alert";

// Mock Next.js hooks
const mockReplace = vi.fn();

vi.mock("next/navigation", () => ({
	useRouter: () => ({
		replace: mockReplace,
	}),
	useSearchParams: () => ({
		get: (key: string) => (key === "submitted" ? "true" : null),
	}),
}));

describe("Alert", () => {
	it("renders the message and hides after 3 seconds", async () => {
		render(<Alert />);

		const message = screen.getByText("Message sent successfully!");

		expect(message).toBeInTheDocument();
		expect(mockReplace).toHaveBeenCalledWith("/");

		// Wait for the timeout to hide the alert
		await waitFor(
			() => {
				expect(message).toHaveClass("opacity-0");
			},
			{ timeout: 3100 }
		);
	});
});
