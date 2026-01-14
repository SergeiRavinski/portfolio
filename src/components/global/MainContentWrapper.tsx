"use client";

import { usePathname } from "next/navigation";

export default function MainContentWrapper({ children }: { children: React.ReactNode }) {
	const isContactPage = usePathname() === "/contact";

	return (
		<section
			className={`relative top-2 right-0 mx-4 flex w-full flex-col border-(--color-secondary-dark) md:top-4 md:mx-10 ${!isContactPage ? "h-[calc(100vh-2rem)]" : "h-full md:h-[calc(100vh-2rem)]"} `}
		>
			{children}
		</section>
	);
}
