import Magazine from "@/components/pages/about/Magazine";
import PromoBlock from "@/components/pages/about/PromoBlock";
import SplitTextYoyo from "@/components/ui/SplitTextYoyo";
import { sanityFetch } from "@/sanity/lib/live";
import { ABOUT_QUERY } from "@/sanity/lib/queries";

export default async function About() {
	const { data } = await sanityFetch({ query: ABOUT_QUERY });
	const {
		// _id,
		title,
		// name,
		magazineComponents,
		promoBlock,
		// phone,
		// email,
		// links,
		// cv,
		// location,
	} = data || {};

	try {
		if (!data) {
			throw new Error("No data found");
		}

		return (
			<>
				<div className="p-6 flex flex-row justify-between items-center">
					<SplitTextYoyo text={title} />
				</div>

				<Magazine magazineData={magazineComponents} />
				<PromoBlock promoBlockData={promoBlock} />
			</>
		);
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}
