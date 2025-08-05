"use client";

import { animate } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";
import { useStore } from "zustand";
import { toggleStore } from "@/stores/falling-words-store";

export default function ScatterText() {
	const containerRef = useRef<HTMLDivElement>(null);

	const isOn = useStore(toggleStore, (state) => state.isOn);
	const toggle = useStore(toggleStore, (state) => state.toggle);

	useEffect(() => {
		if (!containerRef.current) return;

		const timeout = setTimeout(() => {
			toggle();
		}, 50);

		const container = containerRef.current;
		const textElement = container.querySelector(
			".fall-text"
		) as HTMLElement;

		const lineHeight = parseFloat(getComputedStyle(textElement).lineHeight);
		const height = textElement.offsetHeight;
		const numberOfLines = Math.ceil(height / lineHeight);

		const { chars } = splitText(textElement);
		const containerHeight = container.offsetHeight;
		const shuffledChars = chars.sort(() => Math.random() - 0.5);

		shuffledChars.forEach((word, i) => {
			const gap = container.offsetWidth / (chars.length + 1);
			word.style.left = `${(i + 1) * gap - word.offsetWidth / 2}px`;

			const distance = containerHeight - lineHeight * numberOfLines;
			const fallDistance =
				distance > containerHeight ? containerHeight : distance;
			const randomRotation = Math.random() * 360 - 180;
			const randomDuration = 2 + Math.random() * 1.5;
			const delay = i * 0.2;

			animate(
				word,
				{ y: fallDistance, rotate: [0, randomRotation] },
				{
					duration: randomDuration,
					easing: "ease-out",
					delay: delay,
				}
			);
		});

		return () => clearTimeout(timeout);
	}, [toggle]);

	return (
		<div
			ref={containerRef}
			className="relative ml-6 mb-6 h-full flex text-(--color-primary-dark) overflow-visible"
		>
			<p className="fall-text text-3xl font-bold absolute">
				Teknologies: bla bla bla bla bla bla bla bla bla bla bla bla bla
				bla bla bla
			</p>
		</div>
	);
}
