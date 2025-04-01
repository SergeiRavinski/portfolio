import MainSection from "@/components/ui/MainSection";
import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
	const { data } = await sanityFetch({ query: PROJECTS_QUERY });

	return <MainSection data={data} />;
}
