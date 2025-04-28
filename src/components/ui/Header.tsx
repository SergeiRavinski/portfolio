"use client";

import FlipLink from "../pages/portfolio/FlipLink";

export default function Header() {
	return (
		<header className="container mx-auto w-full p-6">
			<nav>
				<ul className="flex flex-row gap-4 justify-self-end border-(--color-secondary-dark) text-xl tracking-tight">
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
