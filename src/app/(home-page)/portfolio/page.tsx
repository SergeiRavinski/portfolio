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
								frontendTechnologies: string[];
								backendTechnologies: string[];
								tools: string[];
							}) => {
								const technologies: string[] =
									item?.frontendTechnologies?.concat(
										item?.backendTechnologies,
										item?.tools
									);

								return (
									<section
										className="p-[2rem] m-2 relative group bg-[#ccc8c433]"
										key={item._id}
									>
										<div className="absolute spacing-hover w-full h-full border-1 z-[-10] group-hover:z-0 border-[#2d3fe3] border-solid pointer-events-none"></div>

										<Link href={item.link}>
											{item?.image?.asset?._ref ? (
												<Image
													className="float-left m-0 w-1/3 mr-4 border-1 border-[#18161333] border-solid"
													src={urlFor(
														item?.image?.asset?._ref
													)
														// .width(600)
														// .height(600)
														.url()}
													width={600}
													height={600}
													alt={item?.title || ""}
												/>
											) : null}
										</Link>

										<div className="flex flex-col h-full justify-between">
											<div>
												<h2 className="font-bold text-[#020a51] text-xl uppercase">
													{item.title}
												</h2>

												{item.description && (
													<>
														<hr className="my-2 border-[#18161333]" />
														<p>
															{item.description}
														</p>
													</>
												)}
											</div>

											{technologies?.length > 0 && (
												<div className="mt-4">
													<ul className="flex flex-wrap gap-1">
														<h2 className="font-semibold">
															Technologies:
														</h2>

														{technologies?.map(
															(tech, index) => (
																<li
																	key={index}
																	className="p-1 bg-[#2d3fe3] text-white font-medium text-xs rounded-xs"
																>
																	{tech}
																</li>
															)
														)}
													</ul>
												</div>
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
