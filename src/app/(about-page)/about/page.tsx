import Magazine from "@/components/pages/about/Magazine";
import PromoBlock from "@/components/pages/about/PromoBlock";
import SplitTextYoyo from "@/components/ui/SplitTextYoyo";
import { sanityFetch } from "@/sanity/lib/live";
import { ABOUT_QUERY } from "@/sanity/lib/queries";

export default async function About() {
	const { data } = await sanityFetch({ query: ABOUT_QUERY });
	const { title, magazineComponents, promoBlock } = data ?? {};

	try {
		if (!data) {
			throw new Error("No data found");
		}

		return (
			<section className="flex flex-col">
				<h2 className=" md:text-[1.25rem] uppercase text-[1rem] mb-4">
					<SplitTextYoyo text={title} />
				</h2>

				<Magazine magazineData={magazineComponents} />
				<PromoBlock promoBlockData={promoBlock} />
			</section>
		);
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}
