import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export const RichTextComponents = (internalLink?: any, externalLink?: any) => ({
	types: {
		image: ({ value }: any) => {
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

		youtube: ({ value }: any) => {
			const { url } = value;
			let videoId = url.split("/").pop() as string;

			if (videoId.includes("?")) {
				// videoId = videoId.split('?').shift() as string;
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
		bullet: ({ children }: any) => (
			<ul className="rich-text-li m-0 text-base md:text-lg ml-[1.25rem] md:mb-6 mb-4 list-disc space-y-1 md:space-y-1">
				{children}
			</ul>
		),
		number: ({ children }: any) => (
			<ol className="m-0 text-base md:text-lg md:mt-6 pl-5 mb-6 leading-7 list-decimal numbered-list">
				{children}
			</ol>
		),
	},

	block: {
		h1: ({ children }: any) => (
			<h1 className="text-4.5xl font-bold">{children}</h1>
		),
		h2: ({ children }: any) => <h2 id={children}>{children}</h2>,
		h3: ({ children }: any) => <h3>{children}</h3>,
		// h3: ({ children }: any) => (
		//   <h3 className="text-lg md:text-xl font-bold">{children}</h3>
		// ),
		h4: ({ children }: any) => <h4 className="font-medium">{children}</h4>,
		h5: ({ children }: any) => (
			<h5 className="text-base font-bold">{children}</h5>
		),
		h6: ({ children }: any) => (
			<h6 className="text-sm font-bold">{children}</h6>
		),
		blockquote: ({ children }: any) => (
			<blockquote className="mt-8 mb-10 md:mt-10 md:mb-16 leading-snug mx-auto">
				{children}
			</blockquote>
		),
		columns: ({ children }: any) => (
			<p className="text-base md:text-lg">{children}</p>
		),

		normal: ({ children }: any) => <p className="last:mb-0">{children}</p>,
	},
	marks: {
		highlight: ({ children }: any) => (
			<span className="bg-custom-gradient h-64 w-64">{children}</span>
		),

		link: ({ children, value }: any) => {
			if (!value.href) return children;
			const rel =
				value.href && !value.href.startsWith("/")
					? "noreferrer noopener"
					: undefined;
			return (
				<Link
					href={value.href}
					rel={rel}
					style={{
						borderColor: "#ff552e",
					}}
					className={`text-[#111820] no-underline border-b-[3px] hover:border-b-[5px]`}
					target={value.blank ? "_blank" : undefined}
				>
					{children}
				</Link>
			);
		},

		internalLink: ({ children, value }: any) => {
			if (!value?.slug) return children;
			const rel = undefined;

			return (
				<Link
					href={value?.slug}
					rel={rel}
					style={{
						borderColor: "#ff552e",
					}}
					className={`text-[#111820] no-underline border-b-[3px] hover:border-b-[5px]`}
				>
					{children}
				</Link>
			);
		},
	},
});
