import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import { Data } from "@/types/main-section";
import { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import HoverElement from "@/components/ui/HoverElement";

export default function CardRandom({
	item,
	styles,
	container,
}: {
	index: number;
	item: Data;
	technologies: string[];
	styles: string;
	container: React.RefObject<HTMLDivElement | null>;
}) {
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
	const technologies: string[] = item?.frontendTechnologies?.concat(
		item?.backendTechnologies,
		item?.tools
	);

	return (
		<motion.div
			ref={targetRef}
			key={item._id}
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}
			className={`h-fit ${styles} flex flex-col group scroll-none`}
			style={{
				opacity: scrollYProgress,
			}}
		>
			<Link
				href={item.link ? item.link : ""}
				className={`${!item.link && "pointer-events-none"} flex relative`}
				target="_blank"
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

				<HoverElement visible={visible} technologies={technologies} />
			</Link>

			<span className="flex flex-col justify-between py-2 uppercase text-[0.8rem] w-full">
				<h2 className="font-semibold">{item.title}</h2>

				<div className="flex flex-row justify-between text-[0.7rem]">
					<p>{item.short_description}.</p>
					<span>{year}</span>
				</div>
			</span>
		</motion.div>
	);
}
