import Header from "@/components/ui/Header";
import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default async function MainSection() {
	const { data } = await sanityFetch({ query: PROJECTS_QUERY });

	return (
		<section className="flex flex-col sticky top-4 right-0 h-[calc(100vh-2rem)] w-full border-1 border-solid border-[#D2D2D5] m-4">
			<Header />

			<div className="p-6 flex flex-row justify-between">
				<h2 className="font-extrabold text-[2rem] normal-case">
					Prosjekter jeg har jobbet med
				</h2>

				<button className="lowercase relative border-1 group border-solid border-[#D2D2D5] transition-border duration-300 hover:border-[#969697] p-2 h-fit rounded-xs">
					Change styling
					<div className="absolute left-0 top-1/2 -translate-y-2/4 -translate-x-2/4 bg-red-500 w-[1px] h-4 group-hover:h-6"></div>
					<div className="absolute right-0 top-1/2 -translate-y-2/4 translate-x-2/4 bg-red-500 w-[1px] h-4 group-hover:h-6 transition-h duration-300"></div>
				</button>
			</div>

			<main className="container mx-auto w-full h-full overflow-scroll">
				{data && (
					<section className="flex flex-col">
						{data?.map(
							(
								item: {
									image: { asset: { _ref: string } };
									link: string;
									_id: number;
									title: string;
									description: string;
									frontendTechnologies: string[];
									backendTechnologies: string[];
									tools: string[];
								},
								index
							) => {
								const technologies: string[] =
									item?.frontendTechnologies?.concat(
										item?.backendTechnologies,
										item?.tools
									);

								return (
									<section
										className="m-6 p-4 relative transition-shadow duration-300 hover:shadow-lg group"
										key={item._id}
									>
										<Link
											href={item.link ? item.link : ""}
											className={`${!item.link && "pointer-events-none"}`}
										>
											{item?.image?.asset?._ref ? (
												<Image
													className="float-left m-0 w-1/3 mr-4 border-1 border-[#D2D2D5] border-solid"
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

										<div className="flex flex-col h-full justify-between font-(family-name:--font-space-mono)">
											<div>
												<div className="flex flex-row justify-between">
													<h2 className="font-bold text-[#29292B] text-2xl">
														{item.title}
													</h2>

													<span className="text-[#29292B] font-light">
														{index <= 9
															? `.0${index + 1}`
															: `.${index + 1}`}
													</span>
												</div>

												{item.description && (
													<>
														<hr className="my-2 border-[#D2D2D5]" />

														<p className="text-[1rem] leading-tight">
															{item.description}
														</p>
													</>
												)}
											</div>

											{technologies?.length > 0 && (
												<div className="mt-8 font-(family-name:--font-space-mono)">
													<ul className="flex flex-wrap gap-1">
														<h2 className="font-semibold">
															Teknologier:
														</h2>

														{technologies?.map(
															(tech, index) => (
																<li
																	key={index}
																	className="p-1 bg-[#29292B] text-white font-medium text-xs rounded-xs"
																>
																	{tech}
																</li>
															)
														)}
													</ul>
												</div>
											)}
										</div>

										{/* Top-left & Bottom-right corners */}
										<div className="absolute top-0 left-0 w-4 h-4 group-hover:w-6 group-hover:h-6 transition-all duration-300 border-t-1 border-l-1 border-[#29292b] rounded-xs"></div>
										<div className="absolute bottom-0 right-0 w-4 h-4 border-b-1 border-r-1 border-[#29292b] group-hover:w-6 group-hover:h-6 transition-all duration-300 rounded-xs"></div>

										{/* Top-right & Bottom-left corners */}
										<div className="absolute top-0 right-0 w-4 h-4 border-t-1 border-r-1 border-[#29292b] group-hover:w-6 group-hover:h-6 transition-all duration-300 rounded-xs"></div>
										<div className="absolute bottom-0 left-0 w-4 h-4 border-b-1 border-l-1 border-[#29292b] group-hover:w-6 group-hover:h-6 transition-all duration-300 rounded-xs"></div>
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
