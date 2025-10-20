import HorizontalScrollWave from "@/components/ui/HorizontalScrollWave";
import { ProfileHeaderProps } from "@/types/portfolio-page";

export default function ProfileHeader({
	name,
	professionalTitle,
}: ProfileHeaderProps) {
	return (
		<section className="flex flex-col w-full">
			<div className="flex flex-col justify-between text-[0.7rem] uppercase lg:ml-6 ml-0 lg:mt-8 mt-2">
				{name && (
					<h1 className="font-semibold md:text-xl text-[0.9rem] mb-1">
						{name}
					</h1>
				)}
				{professionalTitle && (
					<h2 className="text-[0.8rem]">{professionalTitle}</h2>
				)}
			</div>

			<HorizontalScrollWave />
		</section>
	);
}
