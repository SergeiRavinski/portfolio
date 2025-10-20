"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

export default function VerticalScrollWave() {
	const polyRef = useRef<SVGPolylineElement>(null);
	const driftRef = useRef(0);
	const resetTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		gsap.registerPlugin(Observer);

		const height = 100;
		const freq = 20;
		const damp = 20;
		let points: number[] = [];

		function setPoints(amp = 0) {
			let step: number = 0;
			points = [];

			for (let y = 0; y <= height; y++) {
				// eslint-disable-next-line @typescript-eslint/no-unused-expressions
				y < height / 2 ? step++ : step--;

				const x =
					(step / damp) *
					amp *
					Math.sin(((y + driftRef.current) / damp) * freq);
				points.push(x, y);
			}

			return points.join(" ");
		}

		function updatePolylinePoints(amp = 0, duration = 0.3) {
			if (!polyRef.current) return;
			const pts = setPoints(amp);
			gsap.to(polyRef.current, {
				attr: { points: pts },
				duration,
				ease: "power2.out",
			});
		}

		// initial state
		updatePolylinePoints();

		const observer = Observer.create({
			type: "wheel,touch,scroll,pointer",
			onChangeY({ velocityY }) {
				driftRef.current += velocityY * 0.0002;
				updatePolylinePoints(velocityY * 0.001);

				if (resetTimeout.current) clearTimeout(resetTimeout.current);

				// set a new reset timer
				resetTimeout.current = setTimeout(() => {
					updatePolylinePoints(0, 0.6); // smooth return
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
			className="lg:flex hidden w-[2rem] my-4 text-(--color-secondary-dark)"
			viewBox="0 0 50 100"
			preserveAspectRatio="none"
		>
			<g transform="translate(25, 0)">
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
