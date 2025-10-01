import Link from "next/link";
import ArrowIcon from "../../../public/arrow-up-right";

export default function LinkDashed({ url }: { url: string }) {
	const arrowStyles =
		"group-hover/link:rotate-45 transition-all duration-400 group-hover/link:text-(--color-tertiary-dark) h-full ml-1";
	const linkStyles =
		"flex flex-row w-full items-center mt-2 h-6 t-4 justify-between opacity-70 hover:font-bold hover:opacity-100 hover:text-(--color-tertiary-dark) transition-all group/link border-b-1 border-dashed";

	return (
		<Link href={url} target="_blank" className={linkStyles}>
			<h2 className="text-[0.8rem] uppercase">{"GitHub repo"}</h2>
			<ArrowIcon className={arrowStyles} />
		</Link>
	);
}
