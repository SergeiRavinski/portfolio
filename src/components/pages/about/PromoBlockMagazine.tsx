import { RichTextComponents } from "@/components/sanity/RichText";
import SanityNextImage from "@/components/sanity/SanityNextImage";
import { PromoBlockMagazineProps } from "@/types/about-page";
import { PortableText } from "next-sanity";

export default function PromoBlockMagazine(props: PromoBlockMagazineProps) {
	const { imageObject, size, sectionTitle, title, text } = props || {};
	const styles =
		size === "small"
			? `h-full w-full relative border-1 border-solid border-(--color-secondary-dark) rounded-xs`
			: `h-full grid lg:col-span-2 lg:row-span-2 col-span-1 row-span-1 relative border-1 border-solid border-(--color-secondary-dark) rounded-xs`;

	return (
		<div className={styles}>
			{imageObject?.image?.asset && (
				<SanityNextImage
					className="h-full w-full object-cover"
					value={imageObject.image}
					lqip={imageObject?.image?.asset && imageObject.lqip ? imageObject.lqip : undefined}
				/>
			)}

			<div className="absolute bottom-0 left-0 flex h-fit w-full flex-col justify-end gap-4 overflow-hidden bg-gradient-to-t from-(--color-primary-dark) to-transparent p-4 pt-20 text-(--color-primary-light)">
				{sectionTitle && (
					<h2 className="col-span-4 h-fit border-b-1 text-2xl font-bold">{sectionTitle}</h2>
				)}

				{title && <h2 className="text-xl font-bold normal-case">{title}</h2>}

				{text && (
					<div className="flex">
						<PortableText value={text} components={RichTextComponents()} />
					</div>
				)}
			</div>
		</div>
	);
}
