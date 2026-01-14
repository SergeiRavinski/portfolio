import Image from "next/image";
import Link from "next/link";

export default function Button({
	clickEvent,
	type,
	text,
	color,
	changeStyling,
	link,
	target,
}: {
	clickEvent?: () => void;
	type?: string;
	text?: string;
	color?: string;
	changeStyling?: boolean;
	link?: string;
	target?: boolean;
}) {
	const buttonType = () => {
		switch (type) {
			case "styling":
				return getIcon();
			case "text":
				return <h3>{text}</h3>;
			default:
				return null;
		}
	};

	const getIcon = () => {
		return changeStyling ? (
			<Image
				className="dark:invert"
				src={"/grid-default.svg"}
				width={35}
				height={35}
				alt="Default icon"
			/>
		) : (
			<Image
				className="dark:invert"
				src={"/grid-random.svg"}
				width={35}
				height={35}
				alt="Random icon"
			/>
		);
	};

	return link ? (
		<Link href={link} target={target ? "_blank" : ""}>
			<button
				type="submit"
				onClick={clickEvent}
				className={`group group transition-border relative flex items-center justify-center rounded-xs border-1 border-solid p-2 normal-case duration-300 ${color === "dark" ? "border-white bg-(--color-primary-dark) text-(--color-primary-light) hover:border-(--color-dark-hover)" : "border-(--color-secondary-dark) hover:border-(--color-dark-hover)"} ${type === "styling" ? "h-[2.5rem] w-[2.5rem]" : ""}`}
			>
				{buttonType()}

				<div className="absolute top-1/2 left-0 h-[40%] w-[1px] -translate-x-2/4 -translate-y-2/4 bg-(--color-tertiary-dark) group-hover:h-[60%]"></div>
				<div className="transition-h absolute top-1/2 right-0 h-[40%] w-[1px] translate-x-2/4 -translate-y-2/4 bg-(--color-tertiary-dark) duration-300 group-hover:h-[60%]"></div>
			</button>
		</Link>
	) : (
		<button
			type="submit"
			onClick={clickEvent}
			className={`group group transition-border relative flex items-center justify-center rounded-xs border-1 border-solid p-2 normal-case duration-300 ${color === "dark" ? "border-white bg-(--color-primary-dark) text-(--color-primary-light) hover:border-(--color-dark-hover)" : "border-(--color-secondary-dark) hover:border-(--color-dark-hover)"} ${type === "styling" ? "h-[2.5rem] w-[2.5rem]" : ""}`}
		>
			{buttonType()}

			<div className="absolute top-1/2 left-0 h-[40%] w-[1px] -translate-x-2/4 -translate-y-2/4 bg-(--color-tertiary-dark) group-hover:h-[60%]"></div>
			<div className="transition-h absolute top-1/2 right-0 h-[40%] w-[1px] translate-x-2/4 -translate-y-2/4 bg-(--color-tertiary-dark) duration-300 group-hover:h-[60%]"></div>
		</button>
	);
}
