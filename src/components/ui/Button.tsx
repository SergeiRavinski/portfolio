import Image from "next/image";

export default function Button({
	clickEvent,
	styles,
	type,
	text,
}: {
	clickEvent?: () => void;
	styles?: boolean;
	type?: string;
	text?: string;
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
		return styles ? (
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

	return (
		<button
			onClick={clickEvent}
			className="flex h-full lowercase items-center relative border-1 group border-solid border-(--color-secondary-dark) transition-border duration-300 hover:border-(--color-dark-hover) p-2 rounded-xs"
		>
			{buttonType()}

			<div className="absolute left-0 top-1/2 -translate-y-2/4 -translate-x-2/4 bg-(--color-tertiary-dark) w-[1px] h-[40%] group-hover:h-[60%]"></div>
			<div className="absolute right-0 top-1/2 -translate-y-2/4 translate-x-2/4 bg-(--color-tertiary-dark) w-[1px] h-[40%] group-hover:h-[60%] transition-h duration-300"></div>
		</button>
	);
}
