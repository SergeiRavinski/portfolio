"use client";

import { animate } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

export default function FallingWords() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!containerRef.current) return;

		const container = containerRef.current;
		const { chars } = splitText(container.querySelector(".fall-text")!);

		const containerHeight = container.offsetHeight - 100;
		const shuffledChars = chars.sort(() => Math.random() - 0.5);

		shuffledChars.forEach((word, i) => {
			// word.style.position = "absolute";
			// word.style.top = "0";
			// word.style.left = "0";
			// word.style.whiteSpace = "nowrap";

			// Horizontal spacing
			const gap = container.offsetWidth / (chars.length + 1);
			word.style.left = `${(i + 1) * gap - word.offsetWidth / 2}px`;

			// Compute fall distance so it lands at the bottom
			const wordHeight = word.offsetHeight;
			const fallDistance = containerHeight - wordHeight;
			const randomRotation = Math.random() * 360 - 180;
			const randomDuration = 2 + Math.random() * 1.5;

			animate(
				word,
				{ y: fallDistance, rotate: [0, randomRotation] },
				{
					duration: randomDuration,
					easing: "ease-out",
					delay: i * 0.05,
				}
			);
		});
	}, []);

	return (
		<div
			ref={containerRef}
			className="relative m-6 h-full flex overflow-hidden text-(--color-primary-dark)"
		>
			<p className="fall-text text-3xl font-bold absolute">
				Teknologies: React, Next.js, TypeScript, Tailwind CSS,
				Sanity.io!
			</p>
		</div>
	);
}
