import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import HamburgerMenu from "@/components/ui/HamburgerMenu";
import { toggleStore } from "@/stores/falling-words-store";

// Reset Zustand store before each test
beforeEach(() => {
	toggleStore.setState({ isOn: false });
});

describe("HamburgerMenu", () => {
	it("renders the button", () => {
		render(<HamburgerMenu />);
		const button = screen.getByRole("button", { name: /toggle menu/i });
		expect(button).toBeInTheDocument();
	});

	it("toggles the state when clicked", () => {
		render(<HamburgerMenu />);
		const button = screen.getByRole("button", { name: /toggle menu/i });

		// Initially off
		expect(toggleStore.getState().isOn).toBe(false);

		fireEvent.click(button);
		expect(toggleStore.getState().isOn).toBe(true);

		fireEvent.click(button);
		expect(toggleStore.getState().isOn).toBe(false);
	});
});
