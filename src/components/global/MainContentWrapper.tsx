export default function MainContentWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col sticky top-4 right-0 h-[calc(100vh-2rem)] w-full border-(--color-secondary-dark) mx-10">
			{children}
		</section>
	);
}
