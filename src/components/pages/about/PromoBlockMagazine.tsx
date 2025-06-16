import { PromoBlockMagazineProps } from "@/types/about-page";
import Image from "next/image";

export default function PromoBlockMagazine(props: PromoBlockMagazineProps) {
	const { src, altText, size, title, text } = props || {};
	const styles =
		size === "small"
			? `h-full relative`
			: `h-full grid col-span-2 row-span-2 relative`;

	return (
		<div className={styles}>
			<Image
				className="w-full h-full object-cover"
				src={src}
				width={500}
				height={500}
				alt={altText ? altText : "Image"}
			/>

			<div className="absolute flex flex-col gap-4 text-(--color-primary-light) overflow-hidden p-4 left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-(--color-primary-dark) to-transparent">
				<h2 className="text-xl normal-case font-bold">{title}</h2>
				<p>{text}</p>
			</div>
		</div>
	);
}
