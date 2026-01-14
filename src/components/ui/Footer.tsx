"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
	const pathname = usePathname();
	const isHomePage = pathname === "/";

	return (
		<footer
			className={`border-t-solid mt-6 flex h-[2.5rem] w-full items-center border-t-1 border-t-(--color-secondary-dark) normal-case ${isHomePage ? "pt-4" : "py-4"}`}
		>
			<p className="flex h-fit items-center text-sm">
				© {new Date().getFullYear()} Sergei Ravinski
			</p>
		</footer>
	);
}
