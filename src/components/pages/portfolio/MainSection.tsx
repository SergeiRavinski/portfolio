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
	const [filteredProjects, setFilteredProjects] =
		useState<Project[]>(projects);
	const { scrollYProgress } = useScroll({
		container: containerRef, // track scroll of the main element
	});
	const changeStyling = () => {
		return styling ? setStyling(false) : setStyling(true);
	};

	return (
		<>
			<section className="lg:hidden flex">
				<ProfileHeader
					name={name}
					professionalTitle={professionalTitle}
				/>
			</section>

			<div className="md:py-6 pb-4 pt-0 flex md:flex-row flex-col justify-between items-center md:gap-6 gap-[1rem]">
				<SplitTextYoyo text={data.title} />

				<div className="flex flex-row justify-end gap-4 items-center h-[2.5rem] md:min-w-[30%] w-full">
					<InputComponent
						projects={projects}
						setFilteredProjects={setFilteredProjects}
					/>
					<Button
						clickEvent={changeStyling}
						type={"styling"}
						changeStyling={styling}
					/>
				</div>
			</div>

			<main
				ref={containerRef}
				className="container relative mx-auto w-full h-full overflow-y-scroll hide-scrollbar"
			>
				<ScrollIndicator scrollY={scrollYProgress} />
				{filteredProjects.length > 0 ? (
					<section
						ref={mainRef}
						className={`${styling ? "grid md:grid-cols-10 grid-cols-1 gap-5 grid-flow-col relative min-h-[calc(100%-4rem)]" : "flex flex-col"}`}
					>
						{filteredProjects?.map((item: Project, index) => {
							const technologies: string[] = item?.techStack;
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
									container={mainRef}
								/>
							);
						})}
					</section>
				) : (
					<p className="flex w-full text-center min-h-[calc(100%-4rem)] normal-case pt-10">
						No projects match your search.
					</p>
				)}

				<section className="md:hidden flex">
					{links && (
						<SocialMedia
							links={links}
							isDashed={true}
							isPortfolioPage
						/>
					)}
				</section>
				<Footer />
			</main>
		</>
	);
}
