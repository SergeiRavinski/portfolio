import Image from "next/image";
import { ImageMagazineProps } from "@/types/about-page";
import SanityNextImage from "@/components/sanity/SanityNextImage";

export default function ImageMagazine(props: ImageMagazineProps) {
	const { imageObject, size, hoverElement, hoverText } = props || {};
	const hoverElementStyles =
		hoverElement &&
		"relative group transition-all duration-300 ease-in-out overflow-hidden";
	const styles =
		size === "small"
			? `h-full border-1 border-solid border-(--color-secondary-dark) rounded-xs ${hoverElementStyles}`
			: `h-full grid lg:col-span-2 bg-red-200 col-span-1 lg:row-span-2 row-span-1 border-1 border-solid border-(--color-secondary-dark) rounded-xs ${hoverElementStyles}`;

	return (
		<div className={styles}>
			<SanityNextImage
				className="flex xl:w-full xl:h-full h-full w-full object-cover group-hover:scale-104 group-hover:opacity-90 transition-all duration-300 ease-in-out"
				value={imageObject.image}
				lqip={
					(imageObject.image &&
						imageObject.image?.asset &&
						imageObject.lqip) ||
					undefined
				}
			/>

			{/* Hover text element */}
			{hoverElement && (
				<div className="group-hover:opacity-80 flex h-full w-full text-(--color-primary-light) p-6 absolute top-0 left-0 bg-(--color-primary-dark) opacity-0 transition-all duration-300 ease-in-out">
					{hoverText}
				</div>
			)}
		</div>
	);
}
