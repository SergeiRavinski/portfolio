import Link from "next/link";
import ArrowIcon from "../../../public/arrow-up-right";
import { LinkComponentProps } from "@/types/main-section";

export default function LinkComponent({
	url,
	title,
	isDashed,
}: LinkComponentProps) {
	const arrowStyles =
		"group-hover/link:rotate-45 transition-all duration-400 group-hover/link:text-(--color-tertiary-dark) h-full ml-1";
	const linkStyles = `${!title ? "mt-2" : ""} ${isDashed ? "border-b-1 border-dashed" : ""} flex flex-row w-full items-center h-6 t-4 justify-between opacity-70 hover:font-bold hover:opacity-100 hover:text-(--color-tertiary-dark) transition-all group/link`;

	return (
		<Link href={url} target="_blank" className={linkStyles}>
			<h2 className="md:text-[0.8rem] text-[0.7rem] uppercase">
				{title ? title : "GitHub repo"}
			</h2>
			<ArrowIcon className={arrowStyles} />
		</Link>
	);
}
