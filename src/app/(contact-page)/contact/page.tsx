import SplitText from "@/components/pages/portfolio/TitleAnimation";
// import { sanityFetch } from "@/sanity/lib/live";
// import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Contact() {
	// const { data: posts } = await sanityFetch({
	// 	query: POSTS_QUERY,
	// });

	return (
		<>
			<div className="p-6 flex flex-row justify-between items-center">
				<SplitText text="Contact" />
			</div>

			<main className="container relative mx-auto w-full h-full overflow-scroll px-6 hide-scrollbar">
				<section className="flex w-full h-full bg-(--color-primary-dark)">
					<div className="flex flex-col w-full h-full p-6">
						<div className="flex flex-col w-full h-full">
							<h1 className="text-4xl font-bold text-white">
								Contact Me
							</h1>
							<p className="text-lg text-gray-300 mt-2">
								I am always open to discussing new projects,
								creative ideas, or opportunities to be part of
								your vision.
							</p>
						</div>
					</div>
					<div className="flex flex-col w-full h-full p-6">
						<form className="flex flex-col w-full h-full">
							<label className="text-lg text-gray-300 mt-2">
								Name
							</label>
							<input
								type="text"
								className="p-2 rounded-md bg-gray-800 text-white"
							/>
							<label className="text-lg text-gray-300 mt-2">
								Email
							</label>
							<input
								type="email"
								className="p-2 rounded-md bg-gray-800 text-white"
							/>
							<label className="text-lg text-gray-300 mt-2">
								Message
							</label>
							<textarea
								className="p-2 rounded-md bg-gray-800 text-white"
								rows={4}
							></textarea>
							<button className="mt-4 p-2 rounded-md bg-blue-600 text-white">
								Send Message
							</button>
						</form>
					</div>
					<div className="flex flex-col w-full h-full p-6">
						<h2 className="text-2xl font-bold text-white">
							Follow Me
						</h2>
						<p className="text-lg text-gray-300 mt-2">
							Stay connected through my social media channels.
						</p>
						<ul className="flex space-x-4 mt-4">
							<li>
								<a
									href="#"
									className="text-blue-600 hover:underline"
								>
									LinkedIn
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-blue-600 hover:underline"
								>
									GitHub
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-blue-600 hover:underline"
								>
									Twitter
								</a>
							</li>
						</ul>
					</div>
					<div className="flex flex-col w-full h-full p-6">
						<h2 className="text-2xl font-bold text-white">
							Location
						</h2>
						<p className="text-lg text-gray-300 mt-2">
							I am currently based in [Your Location].
						</p>
						{/* Add a map or location details here */}
						<div className="mt-4">
							{/* <MapComponent /> */}
							{/* Example: <MapComponent /> */}
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
