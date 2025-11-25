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
			<aside className="container w-1/3 sticky top-4 m-4 lg:flex hidden flex-col">
				<div className="flex flex-col">
					<section className="flex flex-row p-6 items-center text-xl tracking-tight gap-6">
						<HamburgerMenu />
						<ThemeToggle />
					</section>

					<ProfileHeader
						name={name}
						professionalTitle={professionalTitle}
					/>
				</div>

				{skills && <ScatterText skills={skills} />}
				{links && <SocialMedia links={links} isPortfolioPage />}
			</aside>
		);
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}
