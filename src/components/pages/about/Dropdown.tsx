"use client";

import { RichTextComponents } from "@/components/sanity/RichText";
import { DropdownProps } from "@/types/about-page";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Dropdown({
	label,
	content,
	isCollapsed,
}: DropdownProps) {
	const [isOpen, setIsOpen] = useState(isCollapsed ? false : true);
	const contentRef = useRef<HTMLDivElement>(null);

	return (
		<div className="relative flex flex-col h-full">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex text-start justify-between w-full items-center mt-6 list-disc space-y-2 md:text-[1rem] text-[0.8rem] first:mt-4 font-bold"
			>
				{label}
				<Image
					className={`dark:invert ml-4 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"} `}
					src={"/plus.svg"}
					width={35}
					height={35}
					alt="Default icon"
				/>
			</button>

			<div
				ref={contentRef}
				style={{
					maxHeight: isOpen
						? `${contentRef.current?.scrollHeight}px`
						: "0px",
				}}
				className="overflow-hidden transition-all pb-3 duration-300 border-b border-solid border-(--color-primary-dark)"
			>
				<PortableText
					value={content}
					components={RichTextComponents()}
				/>
			</div>
		</div>
	);
}
