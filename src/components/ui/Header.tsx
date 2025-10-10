"use client";

import ThemeToggle from "@/theme/theme-toggle";
import FlipLink from "../pages/portfolio/FlipLink";
import HamburgerMenu from "./HamburgerMenu";
import { usePathname } from "next/navigation";

export default function Header() {
	const path = usePathname();

	return (
		<header
			className={`mx-auto w-full items-center py-6 flex ${path !== "/" ? "justify-between" : "justify-end"}`}
		>
			{path !== "/" && (
				<section className="flex flex-row items-center text-xl tracking-tight gap-6">
					{path === "/" && <HamburgerMenu />}
					<ThemeToggle />
				</section>
			)}

			<nav className="justify-center h-fit">
				<ul className="flex flex-row md:gap-5 gap-3 align-middle items-center justify-self-end border-(--color-secondary-dark) md:text-xl text-[1rem] tracking-tight">
					<FlipLink href="/" path="/">
						Portfolio
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
