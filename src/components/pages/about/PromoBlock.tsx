import { PromoBlockProps } from "@/types/about-page";
import Button from "../../ui/Button";
import Image from "next/image";
import { RichTextComponents } from "@/components/sanity/RichText";
import { PortableText } from "next-sanity";

export default function PromoBlock({ promoBlockData }: PromoBlockProps) {
	const {
		title,
		text,
		layout,
		background,
		button,
		// image,
		imageUrl,
		imageAlt,
	} = promoBlockData || {};
	const { textButton, link } = button || {};

	const colorsClass =
		background === "dark"
			? "bg-(--color-primary-dark) text-(--color-primary-light)"
			: "bg-(--color-primary-light) text-(--color-primary-dark)";
	const layoutClass =
		layout === "imageLeft" ? "flex-row-reverse" : "flex-row";

	return (
		text &&
		imageUrl && (
			<>
				<section
					className={`${colorsClass} ${layoutClass} flex w-full h-100 mb-6 normal-case`}
				>
					<div className="flex flex-col gap-4 justify-center w-1/2 h-full p-6">
						<h2 className="text-xl normal-case font-bold mb-4">
							{title}
						</h2>

						<div className="text-[0.8rem]">
							<PortableText
								value={text}
								components={RichTextComponents()}
							/>
						</div>

						<section className="flex">
							<Button
								type={"text"}
								text={textButton}
								link={link}
							/>
						</section>
					</div>

					<div className="flex w-1/2">
						<Image
							className="h-full object-cover m-auto"
							src={imageUrl}
							width={500}
							height={500}
							alt={imageAlt}
						/>
					</div>
				</section>
			</>
		)
	);
}
