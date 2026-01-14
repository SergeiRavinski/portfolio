"use client";

import { RichTextComponents } from "@/components/sanity/RichText";
import { DropdownProps } from "@/types/about-page";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Dropdown({ label, content, isCollapsed }: DropdownProps) {
	const [isOpen, setIsOpen] = useState(isCollapsed ? false : true);
	const contentRef = useRef<HTMLDivElement>(null);

	return (
		<div className="relative flex h-full flex-col">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="mt-6 flex w-full list-disc items-center justify-between space-y-2 text-start text-[0.8rem] font-bold first:mt-4 md:text-[1rem]"
			>
				{label}
				<Image
					className={`ml-4 transition-transform duration-300 dark:invert ${isOpen ? "rotate-45" : "rotate-0"} `}
					src={"/plus.svg"}
					width={35}
					height={35}
					alt="Default icon"
				/>
			</button>

			<div
				ref={contentRef}
				style={{
					maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
				}}
				className="overflow-hidden border-b border-solid border-(--color-primary-dark) pb-3 transition-all duration-300"
			>
				<PortableText value={content} components={RichTextComponents()} />
			</div>
		</div>
	);
}
