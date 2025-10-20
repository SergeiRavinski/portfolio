"use client";

import ThemeToggle from "@/theme/theme-toggle";
import FlipLink from "../pages/portfolio/FlipLink";
import { usePathname } from "next/navigation";

export default function Header() {
	const path = usePathname();
	const isPortfolioPage = path === "/";

	return (
		<header
			className={`mx-auto w-full items-center py-6 flex ${isPortfolioPage ? "justify-between lg:justify-end" : "justify-between"}`}
		>
			{/* {path !== "/" && ( */}
			<section
				className={`${isPortfolioPage ? "flex lg:hidden" : "flex"} flex-row items-center text-xl tracking-tight gap-6`}
			>
				<ThemeToggle />
			</section>
			{/* )} */}

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
