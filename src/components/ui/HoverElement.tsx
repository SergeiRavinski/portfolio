"use client";

import { useEffect, useState } from "react";
import { HoverElementProps } from "@/types/portfolio-page";

export default function HoverElement({
	visible,
	technologies,
}: HoverElementProps) {
	const [position, setPosition] = useState<
		NonNullable<HoverElementProps["position"]>
	>({
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
					visible &&
					technologies &&
					position.x !== 0 &&
					position.y !== 0
						? "flex"
						: "none",
			}}
			className="group-hover:flex hidden fixed h-fit w-50 left-0 bottom-0 flex-wrap gap-1 bg-(--color-primary-dark) p-2 z-10 leading-snug"
		>
			<h2 className="font-semibold normal-case text-(--color-primary-light)">
				Technologies:
			</h2>

			{technologies?.map(
				(tech, index) =>
					tech && (
						<li
							key={index}
							className="p-1 text-(--color-primary-light) font-medium text-xs rounded-xs"
						>
							{tech},
						</li>
					)
			)}
		</ul>
	);
}
