"use client";

import { useStore } from "zustand";
import { toggleStore } from "@/stores/falling-words-store";

export default function HamburgerMenu() {
	const isOn = useStore(toggleStore, (state) => state.isOn);
	const toggle = useStore(toggleStore, (state) => state.toggle);

	return (
		<button
			className={`relative w-9 h-6 flex flex-col justify-center z-50 ${isOn ? "gap-1" : "gap-[0.4rem]"}`}
			onClick={() => toggle()}
			aria-label="Toggle menu"
		>
			<span
				className={`block self-end h-0.5 bg-(--color-primary-dark) transition-all duration-300 ease-in-out
          ${isOn ? "rotate-45 translate-y-1.5 w-full" : "w-[70%]"}`}
			/>
			<span
				className={`block w-full h-0.5 bg-(--color-primary-dark) transition-all duration-300 ease-in-out
          ${isOn ? "opacity-0" : ""}`}
			/>
			<span
				className={`block h-0.5 bg-(--color-primary-dark) transition-all duration-300 ease-in-out
          ${isOn ? "-rotate-45 -translate-y-1.5 w-full" : "w-[70%]"}`}
			/>
		</button>
	);
}
