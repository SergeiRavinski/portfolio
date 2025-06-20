import Image from "next/image";
import { ImageMagazineProps } from "@/types/about-page";

export default function ImageMagazine(props: ImageMagazineProps) {
	const { src, altText, size, hoverElement, hoverText } = props || {};
	const hoverElementStyles =
		hoverElement &&
		"relative group transition-all duration-300 ease-in-out group overflow-hidden";
	const styles =
		size === "small"
			? `h-full ${hoverElementStyles}`
			: `h-full grid col-span-2 row-span-2 ${hoverElementStyles}`;

	return (
		<div className={styles}>
			<Image
				className="w-full h-full object-cover group-hover:scale-104 group-hover:opacity-90 transition-all duration-300 ease-in-out"
				src={src}
				width={500}
				height={500}
				alt={altText ? altText : "Image"}
			/>

			{/* Hover text element */}
			{hoverElement && (
				<div className="hidden group-hover:flex h-full w-full text-(--color-primary-light) p-6 absolute top-0 left-0 bg-(--color-primary-dark) opacity-80 transition-all duration-300 ease-in-out">
					{hoverText}
				</div>
			)}
		</div>
	);
}
