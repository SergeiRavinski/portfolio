"use client";

import { usePathname } from "next/navigation";

export default function MainContentWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const isHomePage = pathname === "/";

	return (
		<section
			className={`flex flex-col sticky top-4 right-0  w-full border-(--color-secondary-dark) mx-10 ${isHomePage ? "h-[calc(100vh-2rem)]" : "h-full"}`}
		>
			{children}
		</section>
	);
}
