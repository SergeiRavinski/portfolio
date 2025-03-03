import Header from "@/components/ui/Header";
// import { sanityFetch } from "@/sanity/lib/live";
// import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function MainSection() {
	// const { data: posts } = await sanityFetch({
	// 	query: POSTS_QUERY,
	// });

	return (
		<section className="flex flex-col min-h-screen w-full">
			<Header />

			<main className="container mx-auto bg-green-200 p-6 w-full h-full">
				<h1>Add my projects here ...</h1>
			</main>
		</section>
	);
}
