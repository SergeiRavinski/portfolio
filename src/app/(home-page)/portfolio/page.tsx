import Header from "@/components/ui/Header";
import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default async function Portfolio() {
	const { data } = await sanityFetch({ query: PROJECTS_QUERY });

	return (
		<section className="flex flex-col min-h-screen w-full">
			<Header />

			<main className="container mx-auto p-6 w-full h-full">
				{data && (
					<section className="flex flex-col">
						{data?.map(
							(item: {
								image: { asset: { _ref: string } };
								link: string;
								_id: number;
								title: string;
								description: string;
							}) => {
								return (
									<section
										className="p-[2rem] relative group"
										key={item._id}
									>
										<div className="absolute spacing-hover w-full h-full border-2 z-[-10] group-hover:z-0 border-[#18161333] border-solid pointer-events-none"></div>

										<Link href={item.link}>
											{item?.image?.asset?._ref ? (
												<div className="">
													<Image
														className="float-left m-0 w-1/3 mr-4 border-1 border-[#18161333] border-solid"
														src={urlFor(
															item?.image?.asset
																?._ref
														)
															// .width(600)
															// .height(600)
															.url()}
														width={600}
														height={600}
														alt={item?.title || ""}
													/>
												</div>
											) : null}
										</Link>

										<div>
											<h2 className="font-bold text-xl uppercase">
												{item.title}
											</h2>

											{item.description && (
												<>
													<hr className="my-2 border-[#18161333]" />
													<p>{item.description}</p>
												</>
											)}
										</div>
									</section>
								);
							}
						)}
					</section>
				)}
			</main>
		</section>
	);
}
