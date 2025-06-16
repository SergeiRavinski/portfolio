import { TextMagazineProps } from "@/types/about-page";

export default function TextMagazine(props: TextMagazineProps) {
	const { text, size } = props || {};
	const styles =
		size === "small"
			? "h-full bg-(--color-primary-dark) text-(--color-primary-light) p-4 h-full"
			: "h-full grid col-span-2 row-span-2 bg-(--color-primary-dark) text-(--color-primary-light) p-4 h-full";

	return (
		<div className={styles}>
			<p>{text}</p>
		</div>
	);
}
