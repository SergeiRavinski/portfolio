"use client";

import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { Project } from "@/types/main-section";
import { useDebounce } from "@/hooks/use-debounce";

export default function InputComponent({
	projects,
	setFilteredProjects,
}: {
	projects: Project[];
	setFilteredProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}) {
	const [searchTerm, setSearchTerm] = useState("");
	const debouncedSearch = useDebounce(searchTerm);

	useEffect(() => {
		if (!debouncedSearch) {
			setFilteredProjects(projects);

			return;
		}

		const lower = debouncedSearch.toLowerCase();
		const filtered = projects?.filter((project) => {
			const technologies = [...(project?.techStack ?? [])];
			const matchesTitle = project?.title?.toLowerCase().includes(lower);
			const matchesTech = technologies.some((tech) =>
				tech?.toLowerCase().includes(lower)
			);

			return matchesTitle || matchesTech;
		});

		setFilteredProjects(filtered);
	}, [debouncedSearch, projects, setFilteredProjects]);

	return (
		<div className="relative group flex h-full min-w-[30%]">
			<label htmlFor="search" className="sr-only">
				Search projects
			</label>

			<input
				id="search"
				type="text"
				placeholder="Search…"
				className="border pl-10 text-[0.8rem] border-solid border-(--color-secondary-dark) transition-border duration-300 hover:border-(--color-dark-hover) p-2 rounded-xs w-full focus:outline-none focus:border-(--color-dark-hover)"
				aria-label="Search"
				aria-describedby="search"
				autoComplete="off"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<div className="absolute top-0 left-0 h-full w-10 flex justify-center items-center">
				<IoSearch className="text-(--color-primary-dark)" />
			</div>

			<div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-(--color-tertiary-dark) w-[1px] h-[40%] group-hover:h-[60%] group-focus:h-[60%] transition-all duration-300" />
			<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-(--color-tertiary-dark) w-[1px] h-[40%] group-hover:h-[60%] transition-all duration-300" />
		</div>
	);
}
