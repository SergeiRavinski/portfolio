"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

export default function VerticalScrollWave() {
	const polyRef = useRef<SVGPolylineElement>(null);
	const driftRef = useRef(0);
	const resetTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

	// Wave constants
	const height = 100;
	const frequency = 20;
	const damping = 20;
	const restX = 0;

	// Generate points for vertical polyline
	const generatePoints = (amplitude = 0) => {
		const points: number[] = [];
		let step = 0;

		for (let y = 0; y <= height; y++) {
			y < height / 2 ? step++ : step--;
			const x =
				(step / damping) *
				amplitude *
				Math.sin(((y + driftRef.current) / damping) * frequency);
			points.push(restX + x, y);
		}

		return points.join(" ");
	};

	// Set initial points before paint
	useLayoutEffect(() => {
		if (polyRef.current) {
			polyRef.current.setAttribute("points", generatePoints(0));
		}
	}, []);

	// GSAP animation & Observer
	useEffect(() => {
		gsap.registerPlugin(Observer);

		const updatePolylinePoints = (amplitude = 0, duration = 0.3) => {
			if (!polyRef.current) return;
			gsap.to(polyRef.current, {
				attr: { points: generatePoints(amplitude) },
				duration,
				ease: "power2.out",
			});
		};

		const observer = Observer.create({
			type: "wheel,touch,scroll,pointer",
			onChangeY({ velocityY }) {
				driftRef.current += velocityY * 0.0002;
				updatePolylinePoints(velocityY * 0.001);

				if (resetTimeout.current) clearTimeout(resetTimeout.current);

				// Smooth return to rest
				resetTimeout.current = setTimeout(() => {
					updatePolylinePoints(0, 0.6);
				}, 150);
			},
		});

		return () => {
			observer.kill();
			if (resetTimeout.current) clearTimeout(resetTimeout.current);
		};
	}, []);

	return (
		<svg
			className="lg:flex hidden w-8 my-4 text-(--color-secondary-dark)"
			viewBox="0 0 50 100"
			preserveAspectRatio="none"
		>
			<g transform="translate(25, 0)">
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
