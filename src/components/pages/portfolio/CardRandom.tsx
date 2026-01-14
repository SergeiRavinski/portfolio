import Link from "next/link";
import { CardRandomProps } from "@/types/main-section";
import { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import HoverElement from "@/components/ui/HoverElement";
import LinkComponent from "@/components/ui/LinkComponent";
import SanityNextImage from "@/components/sanity/SanityNextImage";

export default function CardRandom({ item, styles, container }: CardRandomProps) {
	const [visible, setVisible] = useState(false);

	const year = new Date(item.date).getFullYear();
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		container: container,
		target: targetRef,
		axis: "y",
		offset: ["end start", "start start"],
	});
	const technologies: string[] = item?.techStack || ([] as string[]);

	return (
		<motion.div
			ref={targetRef}
			key={item._id}
			className={`h-fit ${styles} group scroll-none flex flex-col`}
			style={{
				opacity: scrollYProgress,
			}}
		>
			{item.liveDemoLink ? (
				<Link
					href={item.liveDemoLink}
					className={`${!item.liveDemoLink && "pointer-events-none"} relative flex`}
					target="_blank"
				>
					{item.imageObject && item.imageObject.image?.asset?._ref ? (
						<SanityNextImage
							className="m-0 w-full object-cover"
							value={item.imageObject.image}
							lqip={
								(item.imageObject?.image &&
									item.imageObject?.image?.asset &&
									item.imageObject?.lqip) ||
								undefined
							}
							onMouseEnter={() => setVisible(true)}
							onMouseLeave={() => setVisible(false)}
						/>
					) : null}

					<HoverElement visible={visible} technologies={technologies} />
				</Link>
			) : (
				<div className="relative flex">
					{item.imageObject && item.imageObject.image?.asset?._ref ? (
						<SanityNextImage
							className="m-0 w-full object-cover"
							value={item.imageObject.image}
							lqip={
								(item.imageObject?.image &&
									item.imageObject?.image?.asset &&
									item.imageObject?.lqip) ||
								undefined
							}
							onMouseEnter={() => setVisible(true)}
							onMouseLeave={() => setVisible(false)}
						/>
					) : null}

					<HoverElement visible={visible} technologies={technologies} />
				</div>
			)}

			{/* // Title and description */}
			<span className="flex w-full flex-col justify-between py-2 text-[0.7rem] uppercase md:text-[0.8rem]">
				<h2 className="font-semibold">{item.title}</h2>

				<div className="mt-1 flex flex-row justify-between text-[0.6rem] leading-snug md:text-[0.7rem]">
					<p className="w-full text-justify">{item.short_description}</p>
					<span className="ml-2 self-end">.{year}</span>
				</div>

				{item.gitHubLink && <LinkComponent url={item.gitHubLink} />}
			</span>
		</motion.div>
	);
}
