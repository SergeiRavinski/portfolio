import { Posts } from "@/components/pages/home-page/Posts";
import SplitText from "@/components/pages/portfolio/TitleAnimation";
import Button from "@/components/ui/Button";
import Magazine from "@/components/ui/Magazine";
import PromoBlock from "@/components/ui/PromoBlock";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";

export default async function About() {
	// const { data: posts } = await sanityFetch({
	// 	query: POSTS_QUERY,
	// });
	const sendEmail = () => {
		return console.log("Send email");
	};

	return (
		<>
			<div className="p-6 flex flex-row justify-between items-center">
				<SplitText text="About" />
			</div>

			<Magazine />
			<PromoBlock />
		</>
	);
}
