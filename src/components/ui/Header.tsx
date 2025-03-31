"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
	const path = usePathname();

	const styleActive = "border-b-2 font-bold border-[#29292B]";

	return (
		<header className="container mx-auto w-full p-6">
			<nav>
				<ul className="flex flex-row gap-3 justify-self-end border-b-2 border-[#D2D2D5] text-xl">
					{/* TODO: Add active class to the current page using ref */}
					<li
						className={`${path === "/portfolio" ? styleActive : ""}`}
					>
						<Link href="/portfolio">
							{path === "/portfolio" ? "." : ""}Portfolio
						</Link>
					</li>

					<li className={`${path === "/resume" ? styleActive : ""}`}>
						<Link href="/resume">
							{path === "/resume" ? "." : ""}Resume
						</Link>
					</li>

					<li className={` pb-2 ${path === "/" ? styleActive : ""}`}>
						<Link href="/">{path === "/" ? "." : ""}About</Link>
					</li>

					<li className={`${path === "/contact" ? styleActive : ""}`}>
						<Link href="/contact">
							{path === "/contact" ? "." : ""}Contact
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
