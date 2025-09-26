import MainSection from "@/components/pages/portfolio/MainSection";
import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { algoliasearch } from "algoliasearch";

export default async function Page() {
	const { data } = await sanityFetch({ query: PROJECTS_QUERY });

	try {
		if (!data) {
			throw new Error("No data found");
		}

		return <MainSection data={data} />;
	} catch (error) {
		console.error("Error fetching data:", error);
	}

	const client = algoliasearch(
		process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string,
		process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY as string
	);

	// Fetch and index objects in Algolia
	const processRecords = async () => {
		return await client.saveObjects({
			indexName: "movies_index",
			objects: data,
		});
	};

	processRecords()
		.then(() => console.log("Successfully indexed objects!"))
		.catch((err) => console.error(err));
}
