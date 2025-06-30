import { Posts } from "@/components/pages/home-page/Posts";
import SplitText from "@/components/pages/portfolio/SplitText";
import Magazine from "@/components/pages/about/Magazine";
import PromoBlock from "@/components/ui/PromoBlock";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import Map from "@/components/ui/Map";
import SplitTextYoyo from "@/components/ui/SplitTextYoyo";

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
				<SplitTextYoyo text={"About"} />
			</div>

			<Magazine />
			<PromoBlock
				title={
					"Sergei Ravinski Frontend / Fullstack Utvikler | Next.js | Sanity"
				}
				text={
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
				}
				layout={"imageRight"}
				background={"light"}
				button={{ type: "text", textButton: "Send en e-post" }}
				image={{ src: "/kristiania.png", alt: "Default icon" }}
			/>
			<Map lng={10.81278} lat={59.89595} />
		</>
	);
}
