import { TextMagazineProps } from "@/types/about-page";
import { PortableText } from "next-sanity";

export default function TextMagazine(props: TextMagazineProps) {
	const { size, sectionTitle, text } = props || {};
	const styles =
		size === "small"
			? "h-full bg-(--color-primary-dark) text-(--color-primary-light) p-4"
			: "h-full grid col-span-2 row-span-2 bg-(--color-primary-dark) text-(--color-primary-light) p-4";

	return (
		<div className={styles}>
			{sectionTitle && (
				<h2 className="col-span-4 h-fit text-2xl font-bold mb-6 pb-1 border-b-1">
					{sectionTitle}
				</h2>
			)}

			<div className="col-span-4">
				<p>{text}</p>
				{/* <PortableText value={elem.text} components={RichTextComponents()} /> */}
			</div>
		</div>
	);
}
