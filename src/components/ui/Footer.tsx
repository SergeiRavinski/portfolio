"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
	const pathname = usePathname();
	const isHomePage = pathname === "/";

	return (
		<footer
			className={`w-full normal-case flex mt-6 items-center h-fit border-t-solid border-t-1 border-t-(--color-secondary-dark) ${isHomePage ? "pt-4" : "py-4"}`}
		>
			<p className="text-sm flex h-fit items-center">
				© {new Date().getFullYear()} Sergei Ravinski
			</p>
		</footer>
	);
}
