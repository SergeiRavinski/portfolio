import { RichTextComponents } from "@/components/sanity/RichText";
import { PromoBlockMagazineProps } from "@/types/about-page";
import { PortableText } from "next-sanity";
import Image from "next/image";

export default function PromoBlockMagazine(props: PromoBlockMagazineProps) {
	const { src, altText, size, sectionTitle, title, text } = props || {};
	const styles =
		size === "small"
			? `h-full w-full relative`
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

			<div className="absolute flex justify-end flex-col gap-4 text-(--color-primary-light) overflow-hidden p-4 pt-20 left-0 bottom-0 w-full h-fit bg-gradient-to-t from-(--color-primary-dark) to-transparent">
				{sectionTitle && (
					<h2 className="col-span-4 h-fit text-2xl font-bold mb-6 10 border-b-1">
						{sectionTitle}
					</h2>
				)}

				{title && (
					<h2 className="text-xl normal-case font-bold">{title}</h2>
				)}

				{text && (
					<div className="flex">
						<PortableText
							value={text}
							components={RichTextComponents()}
						/>
					</div>
				)}
			</div>
		</div>
	);
}
