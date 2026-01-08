"use client";

import { RichTextComponents } from "@/components/sanity/RichText";
import { DropdownProps } from "@/types/about-page";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Dropdown({ label, content }: DropdownProps) {
	const [isOpen, setIsOpen] = useState(false);
	const contentRef = useRef<HTMLDivElement>(null);

	return (
		<div className="relative flex flex-col h-full">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex text-start w-full items-center md:text-[1.5rem] text-[1.25rem] font-semibold mt-6"
			>
				{label}
				<Image
					className={`dark:invert ml-2 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"} `}
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
					borderBottomColor: "var(--color-primary-dark)",
				}}
				className="overflow-hidden transition-all pb-3 duration-300 border-b-[0.1rem] border-b-(--color-primary-dark)"
			>
				<PortableText
					value={content}
					components={RichTextComponents()}
				/>
			</div>
		</div>
	);
}
