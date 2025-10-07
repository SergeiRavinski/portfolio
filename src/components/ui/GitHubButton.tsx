import Link from "next/link";

export default function GitHubButton({ url }: { url: string }) {
	return (
		<Link
			href={url}
			target="_blank"
			className="flex align-bottom flex-row mt-4 w-fit border-1 p-2 group border-solid transition-border duration-300 border-(--color-secondary-dark) rounded-xs hover:border-(--color-tertiary-dark) items-center h-6 t-4 justify-between opacity-70 hover:font-bold hover:opacity-100 hover:text-(--color-tertiary-dark) transition-all group/link"
		>
			<h2 className="text-[0.8rem] uppercase">{"GitHub repo"}</h2>
		</Link>
	);
}
