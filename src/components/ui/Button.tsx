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
				className={`flex justify-center group normal-case p-2 items-center relative border-1 group border-solid transition-border duration-300 rounded-xs ${color === "dark" ? "bg-(--color-primary-dark) text-(--color-primary-light) border-white hover:border-(--color-dark-hover)" : "border-(--color-secondary-dark) hover:border-(--color-dark-hover)"} `}
			>
				{buttonType()}

				<div className="absolute left-0 top-1/2 -translate-y-2/4 -translate-x-2/4 bg-(--color-tertiary-dark) w-[1px] h-[40%] group-hover:h-[60%]"></div>
				<div className="absolute right-0 top-1/2 -translate-y-2/4 translate-x-2/4 bg-(--color-tertiary-dark) w-[1px] h-[40%] group-hover:h-[60%] transition-h duration-300"></div>
			</button>
		</Link>
	) : (
		<button
			type="submit"
			onClick={clickEvent}
			className={`flex justify-center group normal-case p-2 items-center relative border-1 group border-solid transition-border duration-300 rounded-xs ${color === "dark" ? "bg-(--color-primary-dark) text-(--color-primary-light) border-white hover:border-(--color-dark-hover)" : "border-(--color-secondary-dark) hover:border-(--color-dark-hover)"} `}
		>
			{buttonType()}

			<div className="absolute left-0 top-1/2 -translate-y-2/4 -translate-x-2/4 bg-(--color-tertiary-dark) w-[1px] h-[40%] group-hover:h-[60%]"></div>
			<div className="absolute right-0 top-1/2 -translate-y-2/4 translate-x-2/4 bg-(--color-tertiary-dark) w-[1px] h-[40%] group-hover:h-[60%] transition-h duration-300"></div>
		</button>
	);
}
