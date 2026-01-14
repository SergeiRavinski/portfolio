import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { PortableTextReactComponents, PortableTextComponentProps } from "@portabletext/react";
import { LinkValue, SanityImageValue, YouTubeValue } from "@/types/about-page";
import Dropdown from "../pages/about/Dropdown";

export const RichTextComponents = (): Partial<PortableTextReactComponents> => ({
	types: {
		image: ({ value }: PortableTextComponentProps<SanityImageValue>) => (
			<Image
				className="my-12 w-full"
				src={urlFor(value).url()}
				alt={value.alt || " "}
				width={1000}
				height={500}
			/>
		),
		dropdown: ({ value }) => (
			<Dropdown label={value.label} content={value.content} isCollapsed={value.isCollapsed} />
		),
		youtube: ({ value }: PortableTextComponentProps<YouTubeValue>) => {
			const { url } = value;
			let videoId = url.split("/").pop() as string;

			if (videoId.includes("?")) {
				videoId = videoId.split("?")[1].split("v=")[1] || "";
			}
			return (
				<div className="relative h-0 w-full pb-[56.25%]">
					<iframe
						className="absolute top-0 left-0 h-full w-full"
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
			<h1 className="my-6 text-[1.75rem] font-bold md:text-[1.9rem]">{children}</h1>
		),
		h2: ({ children }: PortableTextComponentProps<unknown>) => (
			<h2 className="my-6 text-[1.5rem] font-semibold md:text-[1.75rem]">{children}</h2>
		),
		h3: ({ children }: PortableTextComponentProps<unknown>) => (
			<h3 className="my-6 text-[1.25rem] font-semibold md:text-[1.5rem]">{children}</h3>
		),
		h4: ({ children }: PortableTextComponentProps<unknown>) => (
			<h4 className="my-6 text-[1rem] font-medium md:text-[1.25rem]">{children}</h4>
		),

		blockquote: ({ children }: PortableTextComponentProps<unknown>) => (
			<blockquote className="my-8 border-l-4 border-(--color-tertiary-dark) pl-6 text-lg italic md:my-10">
				{children}
			</blockquote>
		),

		columns: ({ children }: PortableTextComponentProps<unknown>) => (
			<p className="text-[0.8rem] md:text-[1rem]">{children}</p>
		),

		normal: ({ children }: PortableTextComponentProps<unknown>) => (
			<p className="mb-4 text-[0.8rem] first:mt-4 last:mb-0 md:text-[1rem]">{children}</p>
		),
	},

	list: {
		bullet: ({ children }) => (
			<ul className="mb-4 list-disc space-y-2 pl-6 text-[0.8rem] first:mt-4 md:text-[1rem]">
				{children}
			</ul>
		),
		number: ({ children }) => (
			<ol className="mb-4 list-decimal space-y-2 pl-6 text-[0.8rem] first:mt-4 md:text-[1rem]">
				{children}
			</ol>
		),
	},

	marks: {
		highlight: ({ children }) => (
			<span className="rounded bg-gradient-to-r from-emerald-300 to-lime-200 px-1 py-0.5">
				{children}
			</span>
		),

		link: ({ children, value }: { children: React.ReactNode; value?: LinkValue }) => {
			if (!value?.href) return <>{children}</>;
			const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
			return (
				<Link
					href={value.href}
					rel={rel}
					target={value.blank ? "_blank" : undefined}
					className="border-b-[3px] border-(--color-tertiary-dark) no-underline hover:border-b-[5px]"
				>
					{children}
				</Link>
			);
		},
	},
});
