"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

export default function HorizontalScrollWave() {
	const polyRef = useRef<SVGPolylineElement>(null);
	const driftRef = useRef(0);
	const timelineRef = useRef<gsap.core.Timeline | null>(null);

	// Constants for the wave
	const width = 100;
	const frequency = 20;
	const demping = 20;
	const restY = 25;

	// Generate points for polyline
	const generatePoints = (amp = 0) => {
		const pts: number[] = [];
		let step = 0;

		for (let x = 0; x <= width; x++) {
			x < width / 2 ? step++ : step--;
			const yOffset =
				(step / demping) *
				amp *
				Math.sin(((x + driftRef.current) / demping) * frequency);
			pts.push(x, restY + yOffset);
		}

		return pts.join(" ");
	};

	// Set initial points before paint to prevent jump
	useLayoutEffect(() => {
		if (polyRef.current) {
			polyRef.current.setAttribute("points", generatePoints(0));
		}
	}, []);

	// GSAP animation & Observer
	useEffect(() => {
		gsap.registerPlugin(Observer);

		const updatePolyline = (amp = 0, duration = 0.3) => {
			if (!polyRef.current) return;
			gsap.to(polyRef.current, {
				attr: { points: generatePoints(amp) },
				duration,
				ease: "power2.out",
			});
		};

		const startReturnToRestAnimation = () => {
			if (!polyRef.current) return;
			if (timelineRef.current) timelineRef.current.kill();

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
		};

		const observer = Observer.create({
			type: "wheel,touch,scroll,pointer",
			onChangeY({ velocityY }) {
				driftRef.current += velocityY * 0.0002;
				updatePolyline(velocityY * 0.001);
				if (timelineRef.current) timelineRef.current.kill();
			},
			onStop: () => startReturnToRestAnimation(),
		});

		return () => {
			observer.kill();
			if (timelineRef.current) timelineRef.current.kill();
		};
	}, []);

	return (
		<svg
			className="lg:w-[calc(100%+3px)] w-full lg:h-12 h-12 lg:ml-6 ml-0"
			viewBox="0 0 100 50"
			preserveAspectRatio="none"
		>
			<g>
				<polyline
					ref={polyRef}
					stroke="var(--color-secondary-dark)"
					fill="none"
					strokeWidth="1"
				/>
			</g>
		</svg>
	);
}
