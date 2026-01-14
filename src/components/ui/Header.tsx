"use client";

import ThemeToggle from "@/theme/theme-toggle";
import FlipLink from "../pages/portfolio/FlipLink";
import { usePathname } from "next/navigation";

export default function Header() {
	const path = usePathname();
	const isPortfolioPage = path === "/";

	return (
		<header
			className={`mx-auto flex w-full items-center py-6 ${isPortfolioPage ? "justify-between lg:justify-end" : "justify-between"}`}
		>
			<section
				className={`${isPortfolioPage ? "flex lg:hidden" : "flex"} flex-row items-center gap-6 text-xl tracking-tight`}
			>
				<ThemeToggle />
			</section>

			<nav className="flex h-6 h-fit items-center justify-center md:h-7">
				<ul className="flex flex-row items-center gap-3 justify-self-end border-(--color-secondary-dark) align-middle text-[1rem] tracking-tight md:gap-5 md:text-xl">
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
