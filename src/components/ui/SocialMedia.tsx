"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ArrowIcon from "../../../public/arrow-up-right";
import { LinkProps } from "@/types/portfolio-page";

export default function SocialMedia({ links }: LinkProps) {
	const pathname = usePathname();
	const isPortfolioPage = pathname === "/";
	const linkStyles = `flex flex-row items-center h-6 justify-between opacity-70 hover:font-bold hover:opacity-100 hover:text-(--color-tertiary-dark) transition-all group ${isPortfolioPage ? "" : "border-b-1 border-dashed"}`;
	const arrowStyles =
		"group-hover:rotate-45 transition-all duration-400 group-hover:text-(--color-tertiary-dark) h-full ml-1";

	return (
		<span
			className={`flex flex-col text-[0.8rem] w-full gap-y-10 ${isPortfolioPage ? "mb-6 pr-4 ml-6" : ""}`}
		>
			<section className="flex flex-col justify-center uppercase text-[0.8rem] gap-1">
				{links.map((link) => {
					return (
						<Link
							key={link._key}
							href={link.url}
							target="_blank"
							className={linkStyles}
						>
							<h2>{link.title}</h2>
							<ArrowIcon className={arrowStyles} />
						</Link>
					);
				})}
			</section>
		</span>
	);
}
