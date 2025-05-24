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

			{/* Magazine */}
			<section className="grid grid-cols-4 gap-3 grid-flow-row mb-6">
				<div className="h-full grid col-span-2 row-span-2">
					<Image
						className="w-full h-full object-cover"
						src={"/kristiania.png"}
						width={250}
						height={250}
						alt="Default icon"
					/>
				</div>

				<div className="h-full">
					<Image
						className="w-full h-full object-cover"
						src={"/audi.png"}
						width={250}
						height={250}
						alt="Default icon"
					/>
				</div>

				<div className="bg-(--color-primary-dark) text-(--color-primary-light) p-4 h-full">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</div>

				<div className="h-full grid col-span-2 row-span-2">
					<Image
						className="w-full h-full object-cover"
						src={"/audi.png"}
						width={250}
						height={250}
						alt="Default icon"
					/>
				</div>

				<div className="h-full">
					<Image
						className="w-full h-full object-cover"
						src={"/kristiania.png"}
						width={250}
						height={250}
						alt="Default icon"
					/>
				</div>

				<div className="h-full">
					<Image
						className="w-full h-full object-cover"
						src={"/audi.png"}
						width={250}
						height={250}
						alt="Default icon"
					/>
				</div>

				<div className="h-full col-span-2 row-span-2">
					<div className="bg-(--color-primary-dark) text-(--color-primary-light) p-4 h-full">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Lorem ipsum dolor sit
							amet consectetur adipisicing elit.
						</p>
					</div>
				</div>

				<div className="h-full">
					<Image
						className="w-full h-full object-cover"
						src={"/kristiania.png"}
						width={250}
						height={250}
						alt="Default icon"
					/>
				</div>

				<div className="h-full">
					<Image
						className="w-full h-full object-cover"
						src={"/audi.png"}
						width={250}
						height={250}
						alt="Default icon"
					/>
				</div>

				<div className="h-full col-span-2 row-span-2">
					<Image
						className="w-full h-full object-cover"
						src={"/kristiania.png"}
						width={250}
						height={250}
						alt="Default icon"
					/>
				</div>

				<div className="h-full">
					<Image
						className="w-full h-full object-cover"
						src={"/kristiania.png"}
						width={250}
						height={250}
						alt="Default icon"
					/>
				</div>

				<div className="h-full">
					<Image
						className="w-full h-full object-cover"
						src={"/audi.png"}
						width={250}
						height={250}
						alt="Default icon"
					/>
				</div>
			</section>

			<section className="flex flex-row w-full text-(--color-primary-light) h-100 bg-(--color-primary-dark) mb-6">
				<div className="flex flex-col gap-6 justify-center w-1/2 h-full p-6">
					<h1 className="text-[1rem] uppercase">
						Sergei Ravinski Frontend / Fullstack Utvikler | Next.js
						| Sanity
					</h1>

					<p className="text-[0.8rem]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam, voluptatibus. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Quisquam, voluptatibus.
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam, voluptatibus.
					</p>

					<section className="flex">
						<Button
							// clickEvent={sendEmail}
							type={"text"}
							text={"Send en e-post"}
						/>
					</section>
				</div>

				<div className="flex w-1/2 h-full">
					<Image
						className="w-full object-cover"
						src={"/kristiania.png"}
						width={250}
						height={250}
						alt="Default icon"
					/>
				</div>
			</section>
			<section className="flex flex-row w-full h-100 mb-6">
				<div className="flex w-1/2 h-full">
					<Image
						className="w-full object-cover"
						src={"/kristiania.png"}
						width={250}
						height={250}
						alt="Default icon"
					/>
				</div>

				<div className="flex flex-col gap-6 justify-center w-1/2 h-full p-6">
					<h1 className="text-[1rem] uppercase">
						Sergei Ravinski Frontend / Fullstack Utvikler | Next.js
						| Sanity
					</h1>

					<p className="text-[0.8rem]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam, voluptatibus. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Quisquam, voluptatibus.
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam, voluptatibus.
					</p>

					<section className="flex">
						<Button
							// clickEvent={sendEmail}
							type={"text"}
							text={"Send en e-post"}
						/>
					</section>
				</div>
			</section>
		</>
	);
}
