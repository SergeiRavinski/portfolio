"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

export default function HorizontalScrollWave() {
	const polyRef = useRef<SVGPolylineElement>(null);
	const driftRef = useRef(0);
	const timelineRef = useRef<gsap.core.Timeline | null>(null);

	useEffect(() => {
		gsap.registerPlugin(Observer);

		const width = 100;
		const freq = 20;
		const damp = 20;

		function setPoints(amp = 0) {
			const pts: number[] = [];
			let step = 0;

			for (let x = 0; x <= width; x++) {
				// eslint-disable-next-line @typescript-eslint/no-unused-expressions
				x < width / 2 ? step++ : step--;

				const yOffset =
					(step / damp) *
					amp *
					Math.sin(((x + driftRef.current) / damp) * freq);
				pts.push(x, 25 + yOffset);
			}

			return pts.join(" ");
		}

		function updatePolyline(amp = 0, duration = 0.3) {
			if (!polyRef.current) return;
			const points = setPoints(amp);
			gsap.to(polyRef.current, {
				attr: { points },
				duration,
				ease: "power2.out",
			});
		}

		function startReturnToRestAnimation() {
			if (!polyRef.current) return;

			// Stop any existing timeline
			if (timelineRef.current) {
				timelineRef.current.kill();
			}

			const amps = [0.3, -0.2, 0.1, 0];
			const tl = gsap.timeline();

			amps.forEach((amp) => {
				tl.to(
					{},
					{
						duration: 0.3,
						onUpdate: () => updatePolyline(amp, 0.3),
					}
				);
			});

			timelineRef.current = tl;
		}

		// Initielt
		updatePolyline();

		const observer = Observer.create({
			type: "wheel,touch,scroll,pointer",
			onChangeY({ velocityY }) {
				driftRef.current += velocityY * 0.0002;
				updatePolyline(velocityY * 0.001);

				// Stopp eventuell retur-animasjon
				if (timelineRef.current) timelineRef.current.kill();
			},
			onStop: () => {
				startReturnToRestAnimation();
			},
		});

		return () => {
			observer.kill();
			if (timelineRef.current) timelineRef.current.kill();
		};
	}, []);

	return (
		<svg
			className="w-[calc(100%+3px)] h-12 ml-6"
			viewBox="0 0 100 50"
			preserveAspectRatio="none"
		>
			<g transform="translate(0, 0)">
				<polyline
					ref={polyRef}
					points=""
					stroke="var(--color-secondary-dark)"
					fill="none"
					strokeWidth="1"
				/>
			</g>
		</svg>
	);
}
