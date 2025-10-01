import { sanityFetch } from "@/sanity/lib/live";
import { CONTACT_QUERY } from "@/sanity/lib/queries";
import ContactPage from "@/components/pages/contact/ContactPage";

export default async function Page() {
	const { data } = await sanityFetch({ query: CONTACT_QUERY });

	try {
		if (!data) {
			throw new Error("No data found");
		}

		return <ContactPage data={data} />;
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}
