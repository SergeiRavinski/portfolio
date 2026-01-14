"use client";

import { usePathname } from "next/navigation";
import { LinkProps } from "@/types/portfolio-page";
import LinkComponent from "./LinkComponent";

export default function SocialMedia({ links, isDashed, isPortfolioPage }: LinkProps) {
	const pathname = usePathname();
	const isContactPage = pathname === "/contact";

	return (
		<span
			className={`w-full flex-col gap-y-10 text-[0.8rem] ${isPortfolioPage ? "mt-4 mb-6 ml-0 pr-0 md:mt-0 md:ml-6 md:pr-4" : ""}`}
		>
			<section className="flex flex-col justify-center gap-1 text-[0.8rem] uppercase">
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
