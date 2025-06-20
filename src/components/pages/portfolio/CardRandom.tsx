import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import { Data } from "@/types/main-section";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function CardRandom({
	index,
	item,
	// technologies,
	styles,
	container,
}: {
	index: number;
	item: Data;
	technologies: string[];
	styles: string;
	container: React.RefObject<HTMLDivElement | null>;
}) {
	const year = new Date(item.date).getFullYear();
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		container: container,
		target: targetRef,
		axis: "y",
		offset: ["end start", "start start"],
		layoutEffect: false,
	});

	return (
		<motion.div
			ref={targetRef}
			key={item._id}
			className={`h-fit ${styles} flex flex-col`}
			style={{
				opacity: scrollYProgress,
			}}
		>
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
		</motion.div>
	);
}

// const UseScrollWithContainer = () => {
// 	const containerRef = useRef(null);
// 	const targetRef = useRef(null);
// 	const { scrollXProgress } = useScroll({
// 		container: containerRef,
// 		target: targetRef,
// 		axis: "x",
// 		offset: ["end start", "start start"],
// 	});

// 	return (
// 		<div
// 			ref={containerRef}
// 			className="flex w-screen overflow-x-scroll bg-indigo-500/50 py-8"
// 		>
// 			<div className="w-screen shrink-0" />
// 			<motion.div
// 				ref={targetRef}
// 				style={{ opacity: scrollXProgress }}
// 				className="mx-auto size-48 shrink-0 bg-zinc-50"
// 			/>
// 			<div className="w-screen shrink-0" />
// 		</div>
// 	);
// };
