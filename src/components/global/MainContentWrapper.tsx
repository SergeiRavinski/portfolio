"use client";

export default function MainContentWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section
			className={`flex flex-col relative md:top-4 top-2 right-0 w-full border-(--color-secondary-dark) md:mx-10 mx-4 md:h-[calc(100vh-2rem)] h-full`}
		>
			{children}
		</section>
	);
}
