import { Posts } from "@/components/pages/home-page/Posts";
import SplitText from "@/components/pages/portfolio/TitleAnimation";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function About() {
	const { data: posts } = await sanityFetch({
		query: POSTS_QUERY,
	});

	return (
		<>
			<div className="p-6 flex flex-row justify-between items-center">
				<SplitText text="About" />
			</div>

			<main className="container relative mx-auto w-full h-full overflow-scroll px-6 hide-scrollbar">
				<Posts posts={posts} />
			</main>
		</>
	);
}
