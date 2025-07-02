"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

export default function HorizontalScrollWaves() {
	const polyRef = useRef<SVGPolylineElement>(null);

	useEffect(() => {
		gsap.registerPlugin(Observer);

		const width = 100;
		const freq = 20;
		const damp = 20;
		let drift = 0;

		function setPoints(amp = 0) {
			const pts: number[] = [];
			let step = 0;

			for (let x = 0; x <= width; x++) {
				// eslint-disable-next-line @typescript-eslint/no-unused-expressions
				x < width / 2 ? step++ : step--;
				const yOffset =
					(step / damp) * amp * Math.sin(((x + drift) / damp) * freq);
				pts.push(x, 25 + yOffset);
			}

			return pts.join(" ");
		}

		function updatePolyline(amp = 0) {
			if (!polyRef.current) return;
			const points = setPoints(amp);
			gsap.to(polyRef.current, {
				attr: { points },
				duration: 0.3,
				ease: "power2.out",
			});
		}

		// Initial draw with no amplitude
		updatePolyline();

		const observer = Observer.create({
			type: "wheel,touch,scroll,pointer",
			onChangeY({ velocityY }) {
				drift += velocityY * 0.0002;
				updatePolyline(velocityY * 0.001);
			},
		});

		return () => observer.kill();
	}, []);

	return (
		<svg
			className="w-full h-12 ml-6"
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
