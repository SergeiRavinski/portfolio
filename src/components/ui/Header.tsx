"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
	const path = usePathname();

	return (
		<header className="container mx-auto w-full p-6">
			<ul className="flex flex-row gap-3 justify-self-end border-b-2 border-[#18161333] uppercase">
				<li
					className={`${path === "/portfolio" ? "border-b-2 border-black" : ""}`}
				>
					<Link href="/portfolio">Portfolio</Link>
				</li>

				<li
					className={`${path === "/resume" ? "border-b-2 border-black" : ""}`}
				>
					<Link href="/resume">Resume</Link>
				</li>

				<li
					className={` pb-2 ${path === "/" ? "border-b-2 border-black" : ""}`}
				>
					<Link href="/">About</Link>
				</li>

				<li
					className={`${path === "/contact" ? "border-b-2 border-black" : ""}`}
				>
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
		</header>
	);
}
