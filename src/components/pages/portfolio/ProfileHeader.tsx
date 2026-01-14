import HorizontalScrollWave from "@/components/ui/HorizontalScrollWave";
import { ProfileHeaderProps } from "@/types/portfolio-page";

export default function ProfileHeader({ name, professionalTitle }: ProfileHeaderProps) {
	return (
		<section className="flex w-full flex-col">
			<div className="mt-2 ml-0 flex flex-col justify-between text-[0.7rem] uppercase lg:mt-8 lg:ml-6">
				{name && <h1 className="mb-1 text-[0.9rem] font-semibold md:text-xl">{name}</h1>}
				{professionalTitle && <h2 className="text-[0.8rem]">{professionalTitle}</h2>}
			</div>

			<HorizontalScrollWave />
		</section>
	);
}
