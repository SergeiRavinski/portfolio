"use client";

import { useScroll } from "motion/react";
import Button from "../../ui/Button";
import { MainSectorData } from "@/types/main-section";
import { useRef, useState } from "react";
import { gridStyles } from "@/helpers/grid-styles";
import CardDefault from "./CardDefault";
import CardRandom from "./CardRandom";
import InputComponent from "../../ui/Input";
import Footer from "../../ui/Footer";
import SplitTextYoyo from "../../ui/SplitTextYoyo";
import ScrollIndicator from "../../ui/ScrollIndicator";
import { Project } from "@/types/main-section";
import SocialMedia from "@/components/ui/SocialMedia";
import ProfileHeader from "./ProfileHeader";

export default function MainSection({ data }: { data: MainSectorData }) {
	const { projects, links, name, professionalTitle } = data || {};
	const [styling, setStyling] = useState(true);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const mainRef = useRef<HTMLDivElement | null>(null);
	const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
	const { scrollYProgress } = useScroll({
		container: containerRef, // track scroll of the main element
	});
	const changeStyling = () => {
		return styling ? setStyling(false) : setStyling(true);
	};

	return (
		<>
			<section className="flex lg:hidden">
				<ProfileHeader name={name} professionalTitle={professionalTitle} />
			</section>

			<div className="flex flex-col items-center justify-between gap-[1rem] pt-0 pb-4 md:flex-row md:gap-6 md:py-6">
				<SplitTextYoyo text={data.title} />

				<div className="flex h-[2.5rem] w-full flex-row items-center justify-end gap-4 md:min-w-[30%]">
					<InputComponent projects={projects} setFilteredProjects={setFilteredProjects} />
					<Button clickEvent={changeStyling} type={"styling"} changeStyling={styling} />
				</div>
			</div>

			<main
				ref={containerRef}
				className="hide-scrollbar relative container mx-auto h-full w-full overflow-y-scroll"
			>
				<ScrollIndicator scrollY={scrollYProgress} />
				{filteredProjects.length > 0 ? (
					<section
						ref={mainRef}
						className={`${styling ? "relative grid min-h-[calc(100%-4rem)] grid-flow-col grid-cols-1 gap-5 md:grid-cols-10" : "flex flex-col"}`}
					>
						{filteredProjects?.map((item: Project, index) => {
							const technologies: string[] = item?.techStack;
							const position = gridStyles[index % gridStyles.length];
							const { color, gridColumnStart, gridColumnEnd, size } = position;
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
									container={mainRef}
								/>
							);
						})}
					</section>
				) : (
					<p className="flex min-h-[calc(100%-4rem)] w-full pt-10 text-center normal-case">
						No projects match your search.
					</p>
				)}

				<section className="flex md:hidden">
					{links && <SocialMedia links={links} isDashed={true} isPortfolioPage />}
				</section>
				<Footer />
			</main>
		</>
	);
}
