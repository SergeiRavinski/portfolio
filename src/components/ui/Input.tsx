import { Data } from "@/types/main-section";

export default function InputComponent({ projects }: { projects: Data[] }) {
	return (
		<div className="relative group flex h-full min-w-[30%]">
			<input
				type="text"
				className="border text-[0.8rem] border-solid border-(--color-secondary-dark) transition-border duration-300 hover:border-(--color-dark-hover) p-2 rounded-xs w-full focus:outline-none focus:border-(--color-dark-hover)"
				placeholder="Søk..."
			/>
			<div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-(--color-tertiary-dark) w-[1px] h-[40%] group-hover:h-[60%] group-focus:h-[60%] transition-all duration-300" />
			<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-(--color-tertiary-dark) w-[1px] h-[40%] group-hover:h-[60%] transition-all duration-300" />
		</div>
	);
}
