import Link from "next/link";
import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";
import ScatterText from "./ScatterText";
import ThemeToggle from "@/theme/theme-toggle";

export default function Aside() {
	return (
		<aside className="container h-[calc(100vh-2rem)] w-1/3 sticky top-4 m-4 flex flex-col border-r-1 border-r-solid border-r-(--color-secondary-dark)">
			<div>
				<section className="flex flex-row p-6 items-center text-xl tracking-tight gap-6">
					<HamburgerMenu />
					<ThemeToggle />
				</section>

				<div className="flex flex-col justify-between text-[0.7rem] uppercase m-6 mt-8 mr-0 pb-6.5 border-b-solid border-b-1 border-(--color-secondary-dark)">
					<h1 className="font-semibold text-xl">Sergei Ravinski</h1>
					<h2 className="text-[0.8rem]">
						Frontend / Fullstack Utvikler | Next.js | Sanity
					</h2>
				</div>
			</div>

			<ScatterText />

			<span className="flex flex-col text-[0.8rem] w-full gap-y-10 mb-10 mt-auto">
				<section className="flex flex-row justify-center items-center">
					<Link
						href={"https://github.com/SergeiRavinski"}
						target="_blank"
						className="mx-1"
					>
						<Image
							src={"/github-svg.svg"}
							width={25}
							height={25}
							alt="GitHub"
						/>
					</Link>

					<Link
						href={"https://www.linkedin.com/in/sergeiravinski/"}
						target="_blank"
						className="mx-1"
					>
						<Image
							src={"/linkedin-svg.svg"}
							width={25}
							height={25}
							alt="LinkedIn"
						/>
					</Link>

					<Link
						href={"https://www.instagram.com/sergeythedor/"}
						target="_blank"
						className="mx-1"
					>
						<Image
							src={"/instagram-svg.svg"}
							width={25}
							height={25}
							alt="Instagram"
						/>
					</Link>
				</section>

				{/* <div className="flex flex-col justify-between text-[0.7rem]">
					<h1 className="font-semibold">Sergei Ravinski</h1>
					<h2>Frontend / Fullstack Utvikler | Next.js | Sanity</h2>
				</div> */}
			</span>
		</aside>
	);
}
