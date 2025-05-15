import { Posts } from "@/components/pages/home-page/Posts";
import SplitText from "@/components/pages/portfolio/TitleAnimation";
import Button from "@/components/ui/Button";
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

			<section className="flex flex-row w-full text-(--color-primary-light) h-100 bg-(--color-primary-dark)">
				<div className="flex flex-col justify-center w-1/2 h-full p-6">
					<h1>
						Sergei Ravinski Frontend / Fullstack Utvikler | Next.js
						| Sanity
					</h1>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam, voluptatibus. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Quisquam, voluptatibus.
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam, voluptatibus.
					</p>

					<section className="flex mt-6">
						<Button
							// clickEvent={sendEmail}
							type={"text"}
							text={"Send en e-post"}
						/>
					</section>
				</div>

				<div className="flex w-1/2 h-full">
					<Image
						className="dark:invert w-full object-cover"
						src={"/kristiania.png"}
						width={250}
						height={250}
						alt="Default icon"
					/>
				</div>
			</section>
		</>
	);
}
