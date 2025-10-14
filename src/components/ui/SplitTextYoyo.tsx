"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";

export default function SplitTextYoyo({
	text,
	aside,
	isNotFound,
}: {
	text: string;
	aside?: boolean;
	isNotFound?: boolean;
}) {
	const containerRef = useRef<HTMLDivElement>(null);
	const styles = isNotFound
		? "mb-4 text-8xl font-extrabold tracking-tight sm:text-9xl"
		: "md:text-[1.2rem] text-[1rem] uppercase word";

	useEffect(() => {
		gsap.registerPlugin(SplitText);

		const el = containerRef.current;
		if (!el) return;

		// Split the text
		const split = new SplitText(el, {
			type: "chars, words",
		});

		// Animate the characters
		gsap.from(split.chars, {
			yPercent: () => gsap.utils.random(-100, 100),
			rotation: () => gsap.utils.random(-30, 30),
			autoAlpha: 0,
			ease: "back.out",
			yoyo: true,
			stagger: {
				amount: 0.3,
				from: "random",
			},
		});
	}, []);

	return aside ? (
		<div
			ref={containerRef}
			className="relative m-6 h-full normal-case flex overflow-hidden text-(--color-primary-dark)"
		>
			<p className="fall-text text-md absolute text">{text}</p>
		</div>
	) : (
		<div className="container" ref={containerRef}>
			<h2 className={styles}>{text}</h2>
		</div>
	);
}
