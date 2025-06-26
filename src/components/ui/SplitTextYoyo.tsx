"use client";

import { useEffect, useRef } from "react";
import { useStore } from "zustand";
import { toggleStore } from "@/stores/falling-words-store";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";

export default function SplitTextYoyo({
	text,
	aside,
}: {
	text: string;
	aside?: boolean;
}) {
	const containerRef = useRef<HTMLDivElement>(null);

	// const isOn = useStore(toggleStore, (state) => state.isOn);
	// const toggle = useStore(toggleStore, (state) => state.toggle);

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
			className="relative m-6 h-full flex overflow-hidden text-(--color-primary-dark)"
		>
			<p className="fall-text text-3xl font-bold absolute text">{text}</p>
		</div>
	) : (
		<div className="container" ref={containerRef}>
			<h2 className="text-[1.2rem] uppercase word">{text}</h2>
		</div>
	);
}
