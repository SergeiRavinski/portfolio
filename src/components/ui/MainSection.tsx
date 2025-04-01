"use client";

import Header from "@/components/ui/Header";
import Button from "./Button";
import { Data } from "@/types/main-section";
import { useState } from "react";
import { gridStyles } from "@/helpers/grid-styles";
import CardDefault from "../pages/portfolio/card-default";
import CardRandom from "../pages/portfolio/card-random";

export default function MainSection({ data }: { data: Data[] }) {
	const [styling, setStyling] = useState(false);

	const changeStyling = () => {
		return styling ? setStyling(false) : setStyling(true);
	};

	return (
		<section className="flex flex-col sticky top-4 right-0 h-[calc(100vh-2rem)] w-full border-1 border-solid border-[#D2D2D5] m-4">
			<Header />

			<div className="p-6 flex flex-row justify-between items-center">
				<h2 className="text-[1.2rem] uppercase">
					Prosjekter jeg har jobbet med
				</h2>

				<Button clickEvent={changeStyling} type={styling} />
			</div>

			<main className="container mx-auto w-full h-full overflow-scroll">
				{data && (
					<section
						className={`${styling ? "grid grid-cols-10 gap-5 grid-flow-col" : "flex flex-col"}`}
					>
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
							}
						)}
					</section>
				)}
			</main>
		</section>
	);
}
