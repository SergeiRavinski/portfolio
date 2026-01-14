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
			const matchesTech = technologies.some((tech) => tech?.toLowerCase().includes(lower));

			return matchesTitle || matchesTech;
		});

		setFilteredProjects(filtered);
	}, [debouncedSearch, projects, setFilteredProjects]);

	return (
		<div className="group relative flex h-full w-full">
			<label htmlFor="search" className="sr-only">
				Search projects
			</label>

			<input
				id="search"
				type="text"
				placeholder="Search…"
				className="transition-border w-full rounded-xs border border-solid border-(--color-secondary-dark) p-2 pl-10 text-[0.8rem] duration-300 hover:border-(--color-dark-hover) focus:border-(--color-dark-hover) focus:outline-none"
				aria-label="Search"
				aria-describedby="search"
				autoComplete="off"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<div className="absolute top-0 left-0 flex h-full w-10 items-center justify-center">
				<IoSearch className="text-(--color-primary-dark)" />
			</div>

			<div className="absolute top-1/2 left-0 h-[40%] w-[1px] -translate-x-1/2 -translate-y-1/2 bg-(--color-tertiary-dark) transition-all duration-300 group-hover:h-[60%] group-focus:h-[60%]" />
			<div className="absolute top-1/2 right-0 h-[40%] w-[1px] translate-x-1/2 -translate-y-1/2 bg-(--color-tertiary-dark) transition-all duration-300 group-hover:h-[60%]" />
		</div>
	);
}
