import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import { Data } from "@/types/main-section";

export default function CardRandom({
	// index,
	item,
	// technologies,
	styles,
}: {
	index: number;
	item: Data;
	technologies: string[];
	styles: string;
}) {
	const year = new Date(item.date).getFullYear();

	return (
		<section className={`h-fit ${styles} flex flex-col`} key={item._id}>
			<Link
				href={item.link ? item.link : ""}
				className={`${!item.link && "pointer-events-none"} flex`}
			>
				{item?.image?.asset?._ref ? (
					<Image
						className=" m-0 w-full object-cover"
						src={urlFor(item?.image?.asset?._ref)
							// .width(1000)
							// .height(1000)
							.url()}
						width={1000}
						height={1000}
						alt={item?.title || ""}
					/>
				) : null}
			</Link>

			<span className="flex flex-col justify-between my-2 uppercase text-[0.8rem] w-full">
				<h2 className="font-semibold">{item.title}</h2>

				<div className="flex flex-row justify-between text-[0.7rem]">
					<p>{item.short_description}.</p>
					<span>{year}</span>
				</div>
			</span>

			{/* <div className="flex flex-col h-full justify-between font-(family-name:--font-space-mono)">
				<div>
					<div className="flex flex-row justify-between">
						<h2 className="font-bold text-[#29292B] text-2xl">
							{item.title}
						</h2>

						<span className="text-[#29292B] font-light">
							{index <= 9 ? `.0${index + 1}` : `.${index + 1}`}
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
							<h2 className="font-semibold">Teknologier:</h2>

							{technologies?.map((tech, index) => (
								<li
									key={index}
									className="p-1 bg-[#29292B] text-white font-medium text-xs rounded-xs"
								>
									{tech}
								</li>
							))}
						</ul>
					</div>
				)}
			</div> */}
		</section>
	);
}
