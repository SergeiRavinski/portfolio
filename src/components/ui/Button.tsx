export default function Button({
	clickEvent,
	type,
}: {
	clickEvent: () => void;
	type: boolean;
}) {
	return (
		<button
			onClick={clickEvent}
			className="lowercase relative border-1 group border-solid border-[#D2D2D5] transition-border duration-300 hover:border-[#969697] p-2 rounded-xs"
		>
			{type ? "Default" : "Random"}
			<div className="absolute left-0 top-1/2 -translate-y-2/4 -translate-x-2/4 bg-red-500 w-[1px] h-4 group-hover:h-6"></div>
			<div className="absolute right-0 top-1/2 -translate-y-2/4 translate-x-2/4 bg-red-500 w-[1px] h-4 group-hover:h-6 transition-h duration-300"></div>
		</button>
	);
}
