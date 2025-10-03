"use client";

import { usePathname } from "next/navigation";
import { LinkProps } from "@/types/portfolio-page";
import LinkComponent from "./LinkComponent";

export default function SocialMedia({ links }: LinkProps) {
	const pathname = usePathname();
	const isPortfolioPage = pathname === "/";
	const isContactPage = pathname === "/contact";

	return (
		<span
			className={`flex flex-col text-[0.8rem] w-full gap-y-10 ${isPortfolioPage ? "mb-6 pr-4 ml-6" : ""}`}
		>
			<section className="flex flex-col justify-center uppercase text-[0.8rem] gap-1">
				{links.map((link) => {
					return (
						<LinkComponent
							key={link._key}
							url={link.url}
							title={link.title}
							isDashed={isContactPage ? true : false}
						/>
					);
				})}
			</section>
		</span>
	);
}
