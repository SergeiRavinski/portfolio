"use client";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

export default function SplitText() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		document.fonts.ready.then(() => {
			if (!containerRef.current) return;

			// Hide the container until the fonts are loaded
			containerRef.current.style.visibility = "visible";

			const { words } = splitText(
				containerRef.current.querySelector(".word")!
			);

			// Animate the words in the h1
			animate(
				words,
				{ opacity: [0, 1], y: [10, 0] },
				{
					type: "spring",
					duration: 2,
					bounce: 0,
					delay: stagger(0.05),
				}
			);
		});
	}, []);

	return (
		<div className="container" ref={containerRef}>
			<h2 className="text-[1.2rem] uppercase word">
				Prosjektene jeg har jobbet med
			</h2>
		</div>
	);
}
