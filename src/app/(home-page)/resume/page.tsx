// import { sanityFetch } from "@/sanity/lib/live";
// import { POSTS_QUERY } from "@/sanity/lib/queries";

import SplitText from "@/components/pages/portfolio/TitleAnimation";

export default async function Resume() {
	// const { data: posts } = await sanityFetch({
	// 	query: POSTS_QUERY,
	// });

	return (
		<>
			<div className="p-6 flex flex-row justify-between items-center">
				<SplitText text="Resume" />
			</div>

			<main className="container relative mx-auto w-full h-full overflow-scroll px-6 hide-scrollbar">
				Content ...
			</main>
		</>
	);
}
