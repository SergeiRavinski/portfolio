import MainSection from "@/components/pages/portfolio/MainSection";
import { sanityFetch } from "@/sanity/lib/live";
import { PORTFOLIO_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
	const { data } = await sanityFetch({ query: PORTFOLIO_QUERY });

	try {
		if (!data) {
			throw new Error("No data found");
		}

		return <MainSection data={data} />;
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}
