"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useStore } from "zustand";
import { toggleStore } from "@/stores/falling-words-store";
import { ScatterChar } from "../pages/portfolio/ScatterChar";
import { SkillsProps } from "@/types/portfolio-page";

export default function ScatterText({
	skills: {
		frontendTech,
		backendTech,
		tools,
		hostingPlatforms,
		animationLibraries,
		design,
		methodologies,
	},
}: SkillsProps) {
	const charRefs = useRef<(HTMLSpanElement | null)[]>([]);
	const [fallDistances, setFallDistances] = useState<number[]>([]);

	const containerRef = useRef<HTMLDivElement>(null);
	const paragraphRef = useRef<HTMLParagraphElement>(null);
	const isOn = useStore(toggleStore, (state) => state.isOn);

	// Build the text block
	const rawText = useMemo(
		() =>
			[
				`Frontend: ${frontendTech?.join(", ")}`,
				"",
				`Backend: ${backendTech?.join(", ")}`,
				"",
				`Tools: ${tools?.join(", ")}`,
				"",
				`Hosting: ${hostingPlatforms?.join(", ")}`,
				"",
				`Animation: ${animationLibraries?.join(", ")}`,
				"",
				`Design: ${design?.join(", ")}`,
				"",
				`Methodology: ${methodologies?.join(", ")}`,
			].join("\n"),
		[
			frontendTech,
			backendTech,
			tools,
			hostingPlatforms,
			animationLibraries,
			design,
			methodologies,
		]
	);

	const sections = useMemo(
		() => [
			{ label: "Frontend:" },
			{ label: "Backend:" },
			{ label: "Tools:" },
			{ label: "Hosting:" },
			{ label: "Animation:" },
			{ label: "Design:" },
			{ label: "Methodology:" },
		],
		[]
	);

	// Split into characters
	const chars = useMemo(() => Array.from(rawText), [rawText]);
	// Generate shuffled indexes
	const shuffledIndexes = useMemo(() => {
		const indexes = Array.from({ length: chars.length }, (_, i) => i);

		return indexes.sort(() => Math.random() - 0.5);
	}, [chars]);

	useEffect(() => {
		const container = containerRef.current;
		const paragraph = paragraphRef.current;

		if (!container || !paragraph) return;

		const prev = paragraph.style.transform;
		const containerHeight = container.clientHeight || 0;
		const distances = charRefs?.current.map((charEl, index) => {
			if (!charEl) return 0;
			const charTop = charEl.offsetTop;
			return containerHeight - charTop - index * 0.1;
		});

		paragraph.style.transform = "none";
		paragraph.style.transform = prev;

		setFallDistances(distances);
	}, [rawText, chars]);

	const textClasses =
		"scatter-text normal-case text-[0.8rem] absolute leading-relaxed";

	return (
		<div
			ref={containerRef}
			className="relative ml-6 mb-6 h-full flex text-(--color-primary-dark) overflow-visible"
		>
			<p
				ref={paragraphRef}
				className={textClasses}
				style={{ whiteSpace: "pre-wrap" }}
			>
				{chars.map((char, i) => {
					if (char === "\n") return <br key={`br-${i}`} />;

					return (
						<ScatterChar
							key={i}
							char={char}
							i={i}
							isOn={isOn}
							shuffledIndexes={shuffledIndexes}
							fallDistances={fallDistances}
							charRefs={charRefs}
							rawText={rawText}
							sections={sections}
						/>
					);
				})}
			</p>
		</div>
	);
}
