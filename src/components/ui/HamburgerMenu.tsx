"use client";

import { useStore } from "zustand";
import { toggleStore } from "@/stores/falling-words-store";

export default function HamburgerMenu() {
	const isOn = useStore(toggleStore, (state) => state.isOn);
	const toggle = useStore(toggleStore, (state) => state.toggle);

	return (
		<button
			className={`group relative z-50 flex h-6 w-9 flex-col justify-center ${isOn ? "gap-1" : "gap-[0.4rem]"}`}
			onClick={() => toggle()}
			aria-label="Toggle menu"
		>
			<span
				className={`block h-0.5 self-end bg-(--color-primary-dark) transition-all duration-300 ease-in-out ${isOn ? "w-full translate-y-1.5 rotate-45" : "w-[70%] group-hover:w-full"}`}
			/>
			<span
				className={`block h-0.5 w-full bg-(--color-primary-dark) transition-all duration-300 ease-in-out ${isOn ? "opacity-0" : "group-hover:w-[70%]"}`}
			/>
			<span
				className={`block h-0.5 bg-(--color-primary-dark) transition-all duration-300 ease-in-out ${isOn ? "w-full -translate-y-1.5 -rotate-45" : "w-[70%] group-hover:w-full"}`}
			/>
		</button>
	);
}
