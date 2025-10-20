import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import { CardRandomProps } from "@/types/main-section";
import { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import HoverElement from "@/components/ui/HoverElement";
import LinkComponent from "@/components/ui/LinkComponent";

export default function CardRandom({
	item,
	styles,
	container,
}: CardRandomProps) {
	const [visible, setVisible] = useState(false);

	const year = new Date(item.date).getFullYear();
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		container: container,
		target: targetRef,
		axis: "y",
		offset: ["end start", "start start"],
		// layoutEffect: false,
	});
	const technologies: string[] = item?.techStack || ([] as string[]);

	return (
		<motion.div
			ref={targetRef}
			key={item._id}
			className={`h-fit ${styles} flex flex-col group scroll-none`}
			style={{
				opacity: scrollYProgress,
			}}
		>
			{item.liveDemoLink ? (
				<Link
					href={item.liveDemoLink}
					className={`${!item.liveDemoLink && "pointer-events-none"} flex relative`}
					target="_blank"
				>
					{item?.image?.asset?._ref ? (
						<Image
							className="m-0 w-full object-cover"
							src={urlFor(item?.image?.asset?._ref)
								// .width(1000)
								// .height(1000)
								.url()}
							width={1000}
							height={1000}
							alt={item?.title || ""}
							onMouseEnter={() => setVisible(true)}
							onMouseLeave={() => setVisible(false)}
						/>
					) : null}

					<HoverElement
						visible={visible}
						technologies={technologies}
					/>
				</Link>
			) : (
				<div className="flex relative">
					{item?.image?.asset?._ref ? (
						<Image
							className="m-0 w-full object-cover"
							src={urlFor(item?.image?.asset?._ref)
								// .width(1000)
								// .height(1000)
								.url()}
							width={1000}
							height={1000}
							alt={item?.title || ""}
							onMouseEnter={() => setVisible(true)}
							onMouseLeave={() => setVisible(false)}
						/>
					) : null}

					<HoverElement
						visible={visible}
						technologies={technologies}
					/>
				</div>
			)}

			{/* // Title and description */}
			<span className="flex flex-col justify-between py-2 uppercase md:text-[0.8rem] text-[0.7rem] w-full">
				<h2 className="font-semibold">{item.title}</h2>

				<div className="flex flex-row justify-between md:text-[0.7rem] text-[0.6rem] leading-snug mt-1">
					<p className="w-full text-justify">
						{item.short_description}
					</p>
					<span className="ml-2 self-end">.{year}</span>
				</div>

				{item.gitHubLink && <LinkComponent url={item.gitHubLink} />}
			</span>
		</motion.div>
	);
}
