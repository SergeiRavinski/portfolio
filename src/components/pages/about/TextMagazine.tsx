import { RichTextComponents } from "@/components/sanity/RichText";
import { TextMagazineProps } from "@/types/about-page";
import { PortableText } from "next-sanity";

export default function TextMagazine(props: TextMagazineProps) {
	const { size, sectionTitle, text, theme } = props || {};
	const textTheme =
		theme === "dark"
			? "bg-(--color-primary-dark) text-(--color-primary-light)"
			: "bg-(--color-primary-light) text-(--color-primary-dark) border-1 border-solid border-(--color-secondary-dark) rounded-xs";
	const styles =
		size === "small"
			? `h-full w-full p-4 ${textTheme}`
			: `h-full w-full grid lg:col-span-2 col-span-1 lg:row-span-2 row-span-1 items-start content-start p-4 ${textTheme}`;

	return (
		<div className={styles}>
			{sectionTitle && (
				<h2 className="col-span-4 h-fit text-2xl font-bold pb-1 border-b-1 border-solid border-(--color-secondary-dark)">
					{sectionTitle}
				</h2>
			)}

			<div className="col-span-4">
				<PortableText value={text} components={RichTextComponents()} />
			</div>
		</div>
	);
}
