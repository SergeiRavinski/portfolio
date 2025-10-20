import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import { CardDefaultProps } from "@/types/main-section";
import GitHubButton from "@/components/ui/GitHubButton";

export default function CardDefault({
	index,
	item,
	technologies,
}: CardDefaultProps) {
	return (
		<section
			className="flex md:flex-row flex-col my-6 gap-4 p-4 relative"
			key={item._id}
		>
			<Link
				href={item.liveDemoLink ? item.liveDemoLink : ""}
				className={`${!item.liveDemoLink && "pointer-events-none"} md:w-1/3 w-full`}
				target="_blank"
			>
				{item?.image?.asset?._ref ? (
					<Image
						className="float-left m-0 w-full flex"
						src={urlFor(item?.image?.asset?._ref).url()}
						width={600}
						height={600}
						alt={item?.title || ""}
					/>
				) : null}
			</Link>

			<div className="flex flex-col md:w-2/3 w-full h-full font-(family-name:--font-space-mono)">
				<div>
					<div className="flex flex-row justify-between md:text-[1rem] text-[0.8rem]">
						{/* Project title */}
						<h2 className="font-bold text-(--color-primary-dark) uppercase">
							{item.title}
						</h2>

						{/* Project number */}
						<span className="text-(--color-primary-dark) font-light">
							{index <= 9 ? `.0${index + 1}` : `.${index + 1}`}
						</span>
					</div>

					{/* Projeckt description */}
					{item.description && (
						<>
							<hr className="my-2 border-(--color-secondary-dark)" />

							<p className="md:text-[0.9rem] text-[0.8rem] leading-snug normal-case">
								{item.description}
							</p>
						</>
					)}
				</div>

				{/* Technologies used */}
				{technologies?.length > 0 && (
					<div className="md:mt-8 mt-4 font-(family-name:--font-space-mono)">
						<ul className="flex flex-wrap gap-1">
							<h2 className="normal-case md:text-[0.9rem] text-[0.8rem]">
								{" "}
								Technologies:
							</h2>

							{technologies?.map(
								(tech, index) =>
									tech && (
										<li
											key={index}
											className="md:p-1 p-0.5 bg-(--color-primary-dark) text-(--color-primary-light) font-medium md:text-[0.75rem] text-[0.70rem] rounded-xs"
										>
											{tech}
										</li>
									)
							)}
						</ul>
					</div>
				)}

				{/* GitHub repo link */}
				{item.gitHubLink && <GitHubButton url={item.gitHubLink} />}
			</div>

			{/* Top-left & Bottom-right corners */}
			<div className="absolute top-0 left-0 pointer-events-none w-4 h-4 border-t-1 border-l-1 border-(--color-dark-hover)"></div>
			<div className="absolute bottom-0 right-0 w-4 h-4 pointer-events-none border-b-1 border-r-1 border-(--color-dark-hover)"></div>

			{/* Top-right & Bottom-left corners */}
			<div className="absolute top-0 right-0 w-4 h-4 pointer-events-none border-t-1 border-r-1 border-(--color-dark-hover)"></div>
			<div className="absolute bottom-0 left-0 w-4 h-4 pointer-events-none border-b-1 border-l-1 border-(--color-dark-hover)"></div>
		</section>
	);
}
