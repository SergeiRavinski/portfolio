"use client";

import { useState } from "react";

export default function HamburgerMenu() {
	const [open, setOpen] = useState(false);

	return (
		<button
			className={`relative w-9 h-8 flex flex-col justify-center z-50 ${open ? "gap-1" : "gap-[0.4rem]"}`}
			onClick={() => setOpen(!open)}
			aria-label="Toggle menu"
		>
			<span
				className={`block self-end h-0.5 bg-(--color-primary-dark) transition-all duration-300 ease-in-out
          ${open ? "rotate-45 translate-y-1.5 w-full" : "w-[70%]"}`}
			/>
			<span
				className={`block w-full h-0.5 bg-(--color-primary-dark) transition-all duration-300 ease-in-out
          ${open ? "opacity-0" : ""}`}
			/>
			<span
				className={`block h-0.5 bg-(--color-primary-dark) transition-all duration-300 ease-in-out
          ${open ? "-rotate-45 -translate-y-1.5 w-full" : "w-[70%]"}`}
			/>
		</button>
	);
}
