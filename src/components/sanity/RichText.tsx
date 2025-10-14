import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import {
	LinkValue,
	PortableTextBlockValue,
	SanityImageValue,
	YouTubeValue,
} from "@/types/about-page";

export const RichTextComponents = () => ({
	types: {
		image: ({ value }: SanityImageValue) => {
			return (
				<Image
					className="w-full my-12"
					src={urlFor(value).url()}
					alt={value.alt || " "}
					width={1000}
					height={500}
				/>
			);
		},

		youtube: ({ value }: YouTubeValue) => {
			const { url } = value;
			let videoId = url.split("/").pop() as string;

			if (videoId.includes("?")) {
				videoId = videoId.split("?")[1] as string;
				videoId = videoId.split("v=")[1] as string;
			}

			return (
				<div
					className="relative w-full h-0"
					style={{ paddingBottom: "56.25%" }}
				>
					<iframe
						className="absolute top-0 left-0 w-full h-full"
						src={`https://www.youtube.com/embed/${videoId}`}
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</div>
			);
		},
	},

	list: {
		bullet: ({ children }: PortableTextBlockValue) => (
			<ul className="list-disc pl-6 space-y-2 mb-4 md:text-[1rem] text-[0.8rem] leading-snug first:mt-4">
				{children}
			</ul>
		),
		number: ({ children }: PortableTextBlockValue) => (
			<ol className="list-decimal pl-6 space-y-2 mb-4 md:text-[1rem] text-[0.8rem] leading-snug first:mt-4">
				{children}
			</ol>
		),
	},

	block: {
		h1: ({ children }: PortableTextBlockValue) => (
			<h1 className="md:text-[1.9] text-[1.75rem] font-bold my-6 leading-snug">
				{children}
			</h1>
		),
		h2: ({ children }: PortableTextBlockValue) => (
			<h2 className="md:text-[1.75] text-[1.5rem] font-semibold my-6 leading-snug">
				{children}
			</h2>
		),
		h3: ({ children }: PortableTextBlockValue) => (
			<h3 className="md:text-[1.5] text-[1.25rem] font-semibold my-6 leading-snug">
				{children}
			</h3>
		),

		h4: ({ children }: PortableTextBlockValue) => (
			<h4 className="md:text-[1.25] text-[1rem] font-medium my-6 leading-snug">
				{children}
			</h4>
		),

		blockquote: ({ children }: PortableTextBlockValue) => (
			<blockquote className="border-l-4 border-(--color-tertiary-dark) pl-6 italic text-lg my-8 md:my-10">
				{children}
			</blockquote>
		),
		columns: ({ children }: PortableTextBlockValue) => (
			<p className="md:text-[1rem] text-[0.8rem]">{children}</p>
		),

		normal: ({ children }: PortableTextBlockValue) => (
			<p className="md:text-[1rem] text-[0.8rem] leading-snug mb-4 first:mt-4 last:mb-0">
				{children}
			</p>
		),
	},
	marks: {
		highlight: ({ children }: PortableTextBlockValue) => (
			<span className="bg-gradient-to-r from-emerald-300 to-lime-200 px-1 py-0.5 rounded">
				{children}
			</span>
		),

		link: ({ children, value }: LinkValue) => {
			if (!value.href) return children;
			const rel =
				value.href && !value.href.startsWith("/")
					? "noreferrer noopener"
					: undefined;
			return (
				<Link
					href={value.href}
					rel={rel}
					className={`border-(--color-tertiary-dark) no-underline border-b-[3px] hover:border-b-[5px]`}
					target={value.blank ? "_blank" : undefined}
				>
					{children}
				</Link>
			);
		},
	},
});
