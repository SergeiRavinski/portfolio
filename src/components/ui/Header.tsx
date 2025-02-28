import Link from "next/link";

export default function Header() {
	return (
		<header className="container mx-auto  bg-red-200 p-6 w-full ">
			<ul className="flex flex-row gap-3 justify-self-end">
				<li>
					<Link href="/">About</Link>
				</li>

				<li>
					<Link href="/resume">Resume</Link>
				</li>

				<li>
					<Link href="/portfolio">Portfolio</Link>
				</li>

				<li>
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
		</header>
	);
}
