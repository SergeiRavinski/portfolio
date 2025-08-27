"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ArrowIcon from "../../../public/arrow-up-right";

export default function SocialMedia() {
	const pathname = usePathname();
	const isPortfolioPage = pathname === "/";
	const linkStyles = `flex flex-row items-center h-6 justify-between opacity-70 hover:font-bold hover:opacity-100 hover:text-(--color-tertiary-dark) transition-all group ${isPortfolioPage ? "" : "border-b-1 border-dashed"}`;
	const arrowStyles =
		"group-hover:rotate-45 transition-all duration-400 group-hover:text-(--color-tertiary-dark) h-full ml-1";

	return (
		<span
			className={`flex flex-col text-[0.8rem] w-full gap-y-10 ${isPortfolioPage ? "mb-6 pr-4 ml-6" : ""}`}
		>
			<section className="flex flex-col justify-center uppercase text-[0.8rem] gap-1 ">
				<Link
					href={"https://github.com/SergeiRavinski"}
					target="_blank"
					className={linkStyles}
				>
					<h2>github</h2>
					<ArrowIcon className={arrowStyles} />
				</Link>

				<Link
					href={"https://www.linkedin.com/in/sergeiravinski/"}
					target="_blank"
					className={linkStyles}
				>
					<h2>linkedin</h2>
					<ArrowIcon className={arrowStyles} />
				</Link>

				<Link
					href={"https://www.instagram.com/sergeythedor/"}
					target="_blank"
					className={linkStyles}
				>
					<h2>instagram</h2>
					<ArrowIcon className={arrowStyles} />
				</Link>
			</section>
		</span>

		// Original version with icons
		// <span className="flex flex-col text-[0.8rem] w-full gap-y-10 mb-10 mt-auto">
		// 	<section className="flex flex-row justify-center items-center">
		// 		<Link
		// 			href={"https://github.com/SergeiRavinski"}
		// 			target="_blank"
		// 			className="mx-1"
		// 		>
		// 			<Image
		// 				className="dark:invert"
		// 				src={"/github-svg.svg"}
		// 				width={25}
		// 				height={25}
		// 				alt="GitHub"
		// 			/>
		// 		</Link>

		// 		<Link
		// 			href={"https://www.linkedin.com/in/sergeiravinski/"}
		// 			target="_blank"
		// 			className="mx-1"
		// 		>
		// 			<Image
		// 				className="dark:invert"
		// 				src={"/linkedin-svg.svg"}
		// 				width={25}
		// 				height={25}
		// 				alt="LinkedIn"
		// 			/>
		// 		</Link>

		// 		<Link
		// 			href={"https://www.instagram.com/sergeythedor/"}
		// 			target="_blank"
		// 			className="mx-1"
		// 		>
		// 			<Image
		// 				className="dark:invert"
		// 				src={"/instagram-svg.svg"}
		// 				width={25}
		// 				height={25}
		// 				alt="Instagram"
		// 			/>
		// 		</Link>
		// 	</section>
		// </span>
	);
}
