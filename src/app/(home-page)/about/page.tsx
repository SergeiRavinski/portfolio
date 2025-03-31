import { Posts } from "@/components/pages/home-page/Posts";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import Header from "@/components/ui/Header";

export default async function About() {
	const { data: posts } = await sanityFetch({
		query: POSTS_QUERY,
	});

	return (
		<section className="flex flex-col min-h-screen w-full">
			<Header />

			<main className="container mx-auto p-6 w-full h-full">
				<Posts posts={posts} />
			</main>
		</section>
	);
}
