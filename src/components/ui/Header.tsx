"use client";

import ThemeToggle from "@/theme/theme-toggle";
import FlipLink from "../pages/portfolio/FlipLink";
import HamburgerMenu from "./HamburgerMenu";
import { usePathname } from "next/navigation";

export default function Header() {
	const path = usePathname();

	return (
		<header
			className={`mx-auto w-full py-6 flex ${path !== "/" ? "justify-between" : "justify-end"}`}
		>
			{path !== "/" && (
				<section className="flex flex-row items-center text-xl tracking-tight gap-6">
					{path === "/" && <HamburgerMenu />}
					<ThemeToggle />
				</section>
			)}

			<nav className="justify-center h-fit">
				<ul className="flex flex-row gap-4 align-middle items-center justify-self-end border-(--color-secondary-dark) text-xl tracking-tight">
					{/* TODO: Add active class to the current page using ref */}
					<FlipLink href="/" path="/">
						Portfolio
					</FlipLink>

					<FlipLink href="/resume" path="/resume">
						Resume
					</FlipLink>

					<FlipLink href="/about" path="/about">
						About
					</FlipLink>

					<FlipLink href="/contact" path="/contact">
						Contact
					</FlipLink>
				</ul>
			</nav>
		</header>
	);
}
