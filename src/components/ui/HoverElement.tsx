"use client";

import { useEffect, useState } from "react";
import { HoverElementProps } from "@/types/portfolio-page";

export default function HoverElement({ visible, technologies }: HoverElementProps) {
	const [position, setPosition] = useState<NonNullable<HoverElementProps["position"]>>({
		x: 0,
		y: 0,
	});

	const handleMouseMove = (event: MouseEvent) => {
		setPosition({ x: event.clientX + 10, y: event.clientY + 10 });
	};

	useEffect(() => {
		if (visible) {
			window.addEventListener("mousemove", handleMouseMove);

			return () => {
				window.removeEventListener("mousemove", handleMouseMove);
			};
		}
	}, [visible]);

	return (
		<ul
			style={{
				left: position.x,
				top: position.y,
				display:
					visible && technologies && position.x !== 0 && position.y !== 0 ? "flex" : "none",
			}}
			className="fixed bottom-0 left-0 z-10 hidden h-fit w-50 flex-wrap gap-1 bg-(--color-primary-dark) p-2 leading-snug group-hover:flex"
		>
			<h2 className="font-semibold text-(--color-primary-light) normal-case">Technologies:</h2>

			{technologies?.map(
				(tech, index) =>
					tech && (
						<li
							key={index}
							className="rounded-xs p-1 text-xs font-medium text-(--color-primary-light)"
						>
							{tech},
						</li>
					),
			)}
		</ul>
	);
}
