import { PromoBlockProps } from "@/types/about-page";
import Button from "../../ui/Button";
import { RichTextComponents } from "@/components/sanity/RichText";
import { PortableText } from "next-sanity";
import SanityNextImage from "@/components/sanity/SanityNextImage";

export default function PromoBlock({ promoBlockData }: PromoBlockProps) {
	const { title, text, layout, background, button, imageObject } = promoBlockData || {};
	const { textButton, link } = button || {};

	const colorsClass =
		background === "dark"
			? "bg-(--color-primary-dark) text-(--color-primary-light)"
			: "bg-(--color-primary-light) text-(--color-primary-dark)";
	const layoutClass = layout === "imageLeft" ? "flex-row-reverse" : "flex-row";

	return (
		text &&
		imageObject && (
			<>
				<section className={`${colorsClass} ${layoutClass} mb-6 flex h-100 w-full normal-case`}>
					<div className="flex h-full w-1/2 flex-col justify-center gap-4 p-6">
						<h2 className="mb-4 text-xl font-bold normal-case">{title}</h2>

						<div className="text-[0.8rem]">
							<PortableText value={text} components={RichTextComponents()} />
						</div>

						<section className="flex">
							<Button type={"text"} text={textButton} link={link} />
						</section>
					</div>

					<div className="flex w-1/2">
						<SanityNextImage
							className="m-auto h-full object-cover"
							value={imageObject.image}
							lqip={
								(imageObject.image && imageObject.image?.asset && imageObject.lqip) ||
								undefined
							}
						/>
					</div>
				</section>
			</>
		)
	);
}
