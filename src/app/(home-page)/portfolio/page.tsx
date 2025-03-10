import Header from "@/components/ui/Header";
import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";

export default async function Portfolio() {
	const data = await sanityFetch({ query: PROJECTS_QUERY });

	return (
		<section className="flex flex-col min-h-screen w-full">
			<Header />

			<main className="container mx-auto bg-green-200 p-6 w-full h-full">
				{data?.data?.map((item: { _id: number; title: string }) => {
					return <h1 key={item._id}>{item.title}</h1>;
				})}
			</main>
		</section>
	);
}
