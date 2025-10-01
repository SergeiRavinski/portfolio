import HamburgerMenu from "../../ui/HamburgerMenu";
import ThemeToggle from "@/theme/theme-toggle";
import HoriontalScrollWave from "../../ui/HorizontalScrollWave";
import ScatterText from "../../ui/ScatterText";
import SocialMedia from "../../ui/SocialMedia";
import { sanityFetch } from "@/sanity/lib/live";
import { PORTFOLIO_QUERY } from "@/sanity/lib/queries";

export default async function Aside() {
	try {
		const { data } = await sanityFetch({ query: PORTFOLIO_QUERY });
		const {
			name,
			professionalTitle,
			frontendTech,
			backendTech,
			tools,
			hostingPlatforms,
			animationLibraries,
			design,
			methodologies,
			links,
		} = data || {};
		const skills = {
			frontendTech,
			backendTech,
			tools,
			hostingPlatforms,
			animationLibraries,
			design,
			methodologies,
		};

		return (
			<aside className="container w-1/3 sticky top-4 m-4 flex flex-col">
				<div className="flex flex-col">
					<section className="flex flex-row p-6 items-center text-xl tracking-tight gap-6">
						<HamburgerMenu />
						<ThemeToggle />
					</section>

					<div className="flex flex-col justify-between text-[0.7rem] uppercase ml-6 mt-8">
						{name && (
							<h1 className="font-semibold text-xl mb-1">
								{name}
							</h1>
						)}
						{professionalTitle && (
							<h2 className="text-[0.8rem]">
								{professionalTitle}
							</h2>
						)}
					</div>

					<HoriontalScrollWave />
				</div>

				{skills && <ScatterText skills={skills} />}
				{links && <SocialMedia links={links} />}
			</aside>
		);
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}
