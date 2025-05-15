"use client";

import { motion, useScroll } from "motion/react";
// import Header from "@/components/ui/Header";
import Button from "./Button";
import { Data } from "@/types/main-section";
import { useRef, useState } from "react";
import { gridStyles } from "@/helpers/grid-styles";
import CardDefault from "../pages/portfolio/CardDefault";
import CardRandom from "../pages/portfolio/CardRandom";
import SplitText from "../pages/portfolio/TitleAnimation";
import InputComponent from "./Input";
// import MainContentWrapper from "../global/MainContentWrapper";

export default function MainSection({ data }: { data: Data[] }) {
	const [styling, setStyling] = useState(true);
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		container: containerRef, // track scroll of the main element
	});

	const changeStyling = () => {
		return styling ? setStyling(false) : setStyling(true);
	};

	return (
		<>
			<div className="p-6 flex flex-row justify-between items-center gap-4">
				<SplitText text="Prosjektene jeg har jobbet med" />
				<InputComponent projects={data} />
				<Button
					clickEvent={changeStyling}
					styles={styling}
					type={"styling"}
				/>
			</div>

			<main
				ref={containerRef}
				className="container relative mx-auto w-full h-full overflow-scroll px-6 hide-scrollbar"
			>
				{/* Scroll indicator */}
				<motion.div
					id="scroll-indicator"
					style={{
						scaleX: scrollYProgress,
						position: "sticky",
						top: 0,
						left: 0,
						right: 0,
						height: 2,
						originX: 0,
						zIndex: 10,
						backgroundColor: "var(--color-tertiary-dark)",
					}}
				/>

				{data && (
					<section
						className={`${styling ? "grid grid-cols-10 gap-5 grid-flow-col relative" : "flex flex-col"}`}
					>
						{data?.map((item: Data, index) => {
							const technologies: string[] =
								item?.frontendTechnologies?.concat(
									item?.backendTechnologies,
									item?.tools
								);

							const position =
								gridStyles[index % gridStyles.length];
							const {
								color,
								gridColumnStart,
								gridColumnEnd,
								size,
							} = position;
							const styles = `${color} ${gridColumnStart} ${gridColumnEnd} ${size}`;

							return !styling ? (
								<CardDefault
									key={item._id}
									index={index}
									item={item}
									technologies={technologies}
								/>
							) : (
								<CardRandom
									key={item._id}
									index={index}
									item={item}
									technologies={technologies}
									styles={styles}
								/>
							);
						})}
					</section>
				)}
			</main>
		</>
	);
}
