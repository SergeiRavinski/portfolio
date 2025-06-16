import { PromoBlockProps } from "@/types/about-page";
import Button from "./Button";
import Image from "next/image";

export default function PromoBlock(props: PromoBlockProps) {
	const { title, text, layout, background, button, image } = props || {};
	const { type, textButton } = button || {};
	const { src, alt } = image || {};
	const colorsClass =
		background === "dark"
			? "bg-(--color-primary-dark) text-(--color-primary-light)"
			: "bg-(--color-primary-light) text-(--color-primary-dark)";
	const layoutClass =
		layout === "imageLeft" ? "flex-row-reverse" : "flex-row";

	return (
		<>
			<section
				className={`${colorsClass} ${layoutClass} flex w-full h-100 mb-6`}
			>
				<div className="flex flex-col gap-4 justify-center w-1/2 h-full p-6">
					<h2 className="text-xl normal-case font-bold mb-4">
						{title}
					</h2>

					<p className="text-[0.8rem]">{text}</p>

					<section className="flex">
						<Button
							// clickEvent={sendEmail}
							type={type}
							text={textButton}
						/>
					</section>
				</div>

				<div className="flex w-1/2 h-full">
					<Image
						className="w-full object-cover"
						src={src}
						width={500}
						height={500}
						alt={alt}
					/>
				</div>
			</section>
		</>
	);
}
