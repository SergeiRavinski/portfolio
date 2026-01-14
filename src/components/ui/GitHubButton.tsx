import Link from "next/link";

export default function GitHubButton({ url }: { url: string }) {
	return (
		<Link
			href={url}
			target="_blank"
			className="group transition-border t-4 group/link mt-4 flex h-6 w-fit flex-row items-center justify-between rounded-xs border-1 border-solid border-(--color-secondary-dark) p-2 align-bottom opacity-70 transition-all duration-300 hover:border-(--color-tertiary-dark) hover:font-bold hover:text-(--color-tertiary-dark) hover:opacity-100"
		>
			<h2 className="text-[0.7rem] uppercase md:text-[0.8rem]">{"GitHub repo"}</h2>
		</Link>
	);
}
