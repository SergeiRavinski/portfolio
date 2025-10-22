import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import {
	PortableTextReactComponents,
	PortableTextComponentProps,
} from "@portabletext/react";
import { LinkValue, SanityImageValue, YouTubeValue } from "@/types/about-page";

export const RichTextComponents = (): Partial<PortableTextReactComponents> => ({
	types: {
		image: ({ value }: PortableTextComponentProps<SanityImageValue>) => (
			<Image
				className="w-full my-12"
				src={urlFor(value).url()}
				alt={value.alt || " "}
				width={1000}
				height={500}
			/>
		),

		youtube: ({ value }: PortableTextComponentProps<YouTubeValue>) => {
			const { url } = value;
			let videoId = url.split("/").pop() as string;

			if (videoId.includes("?")) {
				videoId = videoId.split("?")[1].split("v=")[1] || "";
			}
			return (
				<div className="relative w-full h-0 pb-[56.25%]">
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

	block: {
		h1: ({ children }: PortableTextComponentProps<unknown>) => (
			<h1 className="md:text-[1.9rem] text-[1.75rem] font-bold my-6 leading-snug">
				{children}
			</h1>
		),
		h2: ({ children }: PortableTextComponentProps<unknown>) => (
			<h2 className="md:text-[1.75rem] text-[1.5rem] font-semibold my-6 leading-snug">
				{children}
			</h2>
		),
		h3: ({ children }: PortableTextComponentProps<unknown>) => (
			<h3 className="md:text-[1.5rem] text-[1.25rem] font-semibold my-6 leading-snug">
				{children}
			</h3>
		),
		h4: ({ children }: PortableTextComponentProps<unknown>) => (
			<h4 className="md:text-[1.25rem] text-[1rem] font-medium my-6 leading-snug">
				{children}
			</h4>
		),

		blockquote: ({ children }: PortableTextComponentProps<unknown>) => (
			<blockquote className="border-l-4 border-(--color-tertiary-dark) pl-6 italic text-lg my-8 md:my-10">
				{children}
			</blockquote>
		),

		columns: ({ children }: PortableTextComponentProps<unknown>) => (
			<p className="md:text-[1rem] text-[0.8rem]">{children}</p>
		),

		normal: ({ children }: PortableTextComponentProps<unknown>) => (
			<p className="md:text-[1rem] text-[0.8rem] leading-snug mb-4 first:mt-4 last:mb-0">
				{children}
			</p>
		),
	},

	list: {
		bullet: ({ children }) => (
			<ul className="list-disc pl-6 space-y-2 mb-4 md:text-[1rem] text-[0.8rem] leading-snug first:mt-4">
				{children}
			</ul>
		),
		number: ({ children }) => (
			<ol className="list-decimal pl-6 space-y-2 mb-4 md:text-[1rem] text-[0.8rem] leading-snug first:mt-4">
				{children}
			</ol>
		),
	},

	marks: {
		highlight: ({ children }) => (
			<span className="bg-gradient-to-r from-emerald-300 to-lime-200 px-1 py-0.5 rounded">
				{children}
			</span>
		),

		link: ({
			children,
			value,
		}: {
			children: React.ReactNode;
			value?: LinkValue;
		}) => {
			if (!value?.href) return <>{children}</>;
			const rel = !value.href.startsWith("/")
				? "noreferrer noopener"
				: undefined;
			return (
				<Link
					href={value.href}
					rel={rel}
					target={value.blank ? "_blank" : undefined}
					className="border-(--color-tertiary-dark) no-underline border-b-[3px] hover:border-b-[5px]"
				>
					{children}
				</Link>
			);
		},
	},
});
