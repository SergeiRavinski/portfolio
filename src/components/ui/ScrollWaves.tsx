"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

export default function VerticalScrollWaves() {
	const polyRef = useRef<SVGPolylineElement>(null);

	useEffect(() => {
		gsap.registerPlugin(Observer);

		const height = 100;
		const freq = 20;
		const damp = 20;
		let drift = 0;
		let points: number[] = [];

		function setPoints(amp = 0) {
			let step: number = 0;
			points = [];

			for (let y = 0; y <= height; y++) {
				// eslint-disable-next-line @typescript-eslint/no-unused-expressions
				y < height / 2 ? step++ : step--;
				const x =
					(step / damp) * amp * Math.sin(((y + drift) / damp) * freq);
				points.push(x, y);
			}

			return points.join(" ");
		}

		function updatePolylinePoints(amp = 0) {
			if (!polyRef.current) return;
			const pts = setPoints(amp);
			gsap.to(polyRef.current, {
				attr: { points: pts },
				duration: 0.3,
				ease: "power2.out",
			});
		}

		updatePolylinePoints();

		const observer = Observer.create({
			type: "wheel,touch,scroll,pointer",
			onChangeY({ velocityY }) {
				drift += velocityY * 0.0002;
				updatePolylinePoints(velocityY * 0.001);
			},
		});

		return () => observer.kill();
	}, []);

	return (
		<svg
			className="flex w-[2rem] my-4 text-(--color-secondary-dark)"
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
