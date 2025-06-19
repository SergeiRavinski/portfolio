"use client";

export default function MainContentWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section
			className={`flex flex-col relative top-4 right-0 w-full border-(--color-secondary-dark) mx-10 h-[calc(100vh-2rem)]`}
		>
			{children}
		</section>
	);
}
