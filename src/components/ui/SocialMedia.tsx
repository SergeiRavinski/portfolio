"use client";

import { usePathname } from "next/navigation";
import { LinkProps } from "@/types/portfolio-page";
import LinkComponent from "./LinkComponent";

export default function SocialMedia({
	links,
	isDashed,
	isPortfolioPage,
}: LinkProps) {
	const pathname = usePathname();
	const isContactPage = pathname === "/contact";

	return (
		<span
			className={`flex flex-col text-[0.8rem] w-full gap-y-10 ${isPortfolioPage ? "mb-6 md:pr-4 pr-0 md:ml-6 ml-0 md:mt-0 mt-4" : ""}`}
		>
			<section className="flex flex-col justify-center uppercase text-[0.8rem] gap-1">
				{links.map((link) => {
					return (
						<LinkComponent
							key={link._key}
							url={link.url}
							title={link.title}
							isDashed={isContactPage || isDashed ? true : false}
						/>
					);
				})}
			</section>
		</span>
	);
}
