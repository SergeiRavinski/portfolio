import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { CardDefaultProps } from "@/types/main-section";
import GitHubButton from "@/components/ui/GitHubButton";
import SanityNextImage from "@/components/sanity/SanityNextImage";

export default function CardDefault({ index, item, technologies }: CardDefaultProps) {
	return (
		<section className="relative my-6 flex flex-col gap-4 p-4 md:flex-row" key={item._id}>
			<Link
				href={item.liveDemoLink ? item.liveDemoLink : ""}
				className={`${!item.liveDemoLink && "pointer-events-none"} w-full md:w-1/3`}
				target="_blank"
			>
				{item.imageObject && item.imageObject.image?.asset?._ref ? (
					<SanityNextImage
						className="float-left m-0 flex w-full"
						value={item.imageObject.image}
						lqip={
							(item.imageObject?.image &&
								item.imageObject?.image?.asset &&
								item.imageObject?.lqip) ||
							undefined
						}
					/>
				) : null}
			</Link>

			<div className="flex h-full w-full flex-col font-(family-name:--font-space-mono) md:w-2/3">
				<div>
					<div className="flex flex-row justify-between text-[0.8rem] md:text-[1rem]">
						{/* Project title */}
						<h2 className="font-bold text-(--color-primary-dark) uppercase">{item.title}</h2>

						{/* Project number */}
						<span className="font-light text-(--color-primary-dark)">
							{index <= 9 ? `.0${index + 1}` : `.${index + 1}`}
						</span>
					</div>

					{/* Projeckt description */}
					{item.description && (
						<>
							<hr className="my-2 border-(--color-secondary-dark)" />

							<p className="text-[0.8rem] leading-snug normal-case md:text-[0.9rem]">
								{item.description}
							</p>
						</>
					)}
				</div>

				{/* Technologies used */}
				{technologies?.length > 0 && (
					<div className="mt-4 font-(family-name:--font-space-mono) md:mt-8">
						<ul className="flex flex-wrap gap-1">
							<h2 className="text-[0.8rem] normal-case md:text-[0.9rem]"> Technologies:</h2>

							{technologies?.map(
								(tech, index) =>
									tech && (
										<li
											key={index}
											className="rounded-xs bg-(--color-primary-dark) p-0.5 text-[0.70rem] font-medium text-(--color-primary-light) md:p-1 md:text-[0.75rem]"
										>
											{tech}
										</li>
									),
							)}
						</ul>
					</div>
				)}

				{/* GitHub repo link */}
				{item.gitHubLink && <GitHubButton url={item.gitHubLink} />}
			</div>

			{/* Top-left & Bottom-right corners */}
			<div className="pointer-events-none absolute top-0 left-0 h-4 w-4 border-t-1 border-l-1 border-(--color-dark-hover)"></div>
			<div className="pointer-events-none absolute right-0 bottom-0 h-4 w-4 border-r-1 border-b-1 border-(--color-dark-hover)"></div>

			{/* Top-right & Bottom-left corners */}
			<div className="pointer-events-none absolute top-0 right-0 h-4 w-4 border-t-1 border-r-1 border-(--color-dark-hover)"></div>
			<div className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b-1 border-l-1 border-(--color-dark-hover)"></div>
		</section>
	);
}
