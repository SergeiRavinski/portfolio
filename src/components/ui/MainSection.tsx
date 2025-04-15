"use client";

import Header from "@/components/ui/Header";
import Button from "./Button";
import { Data } from "@/types/main-section";
import { useState } from "react";
import { gridStyles } from "@/helpers/grid-styles";
import CardDefault from "../pages/portfolio/CardDefault";
import CardRandom from "../pages/portfolio/CardRandom";
import SplitText from "../pages/portfolio/TitleAnimation";

export default function MainSection({ data }: { data: Data[] }) {
	const [styling, setStyling] = useState(false);

	const changeStyling = () => {
		return styling ? setStyling(false) : setStyling(true);
	};

	return (
		<section className="flex flex-col sticky top-4 right-0 h-[calc(100vh-2rem)] w-full border-1 border-solid border-(--color-secondary-dark) m-4">
			<Header />

			<div className="p-6 flex flex-row justify-between items-center">
				<SplitText />

				<Button clickEvent={changeStyling} type={styling} />
			</div>

			<main className="container mx-auto w-full h-full overflow-scroll px-6">
				{data && (
					<section
						className={`${styling ? "grid grid-cols-10 gap-5 grid-flow-col relative" : "flex flex-col"}`}
					>
						{/* <div className="absolute h-full w-full left-0 -z-10 grid grid-cols-10 gap-5 grid-flow-col">
							<div className="h-full w-[0.1rem] col-end-7 -z-10 bg-(--color-secondary-dark)"></div>
						</div> */}

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
		</section>
	);
}
