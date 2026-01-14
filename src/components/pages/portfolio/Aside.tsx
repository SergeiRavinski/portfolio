import HamburgerMenu from "../../ui/HamburgerMenu";
import ThemeToggle from "@/theme/theme-toggle";
import ScatterText from "../../ui/ScatterText";
import SocialMedia from "../../ui/SocialMedia";
import { sanityFetch } from "@/sanity/lib/live";
import { PORTFOLIO_QUERY } from "@/sanity/lib/queries";
import ProfileHeader from "./ProfileHeader";

export default async function Aside() {
	try {
		const { data } = await sanityFetch({ query: PORTFOLIO_QUERY });
		const { name, professionalTitle, skills, links } = data || {};

		return (
			<aside className="sticky top-4 container m-4 hidden w-1/3 flex-col lg:flex">
				<div className="flex flex-col">
					<section className="flex flex-row items-center gap-6 p-6 text-xl tracking-tight">
						<HamburgerMenu />
						<ThemeToggle />
					</section>

					<ProfileHeader name={name} professionalTitle={professionalTitle} />
				</div>

				{skills && <ScatterText skills={skills} />}
				{links && <SocialMedia links={links} isPortfolioPage />}
			</aside>
		);
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}
