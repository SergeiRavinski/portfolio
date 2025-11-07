import { SanityLive, sanityFetch } from "@/sanity/lib/live";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { VisualEditing } from "next-sanity/visual-editing";
import { draftMode } from "next/headers";
import Aside from "@/components/pages/portfolio/Aside";
import MainContentWrapper from "@/components/global/MainContentWrapper";
import Header from "@/components/ui/Header";
import RootWrapper from "@/components/global/RootWrapper";
import Alert from "@/components/ui/Alert";
import VerticalScrollWave from "@/components/ui/VerticalScrollWave";
import { Suspense } from "react";
import type { Metadata } from "next";
import { METADATA_QUERY } from "@/sanity/lib/queries";

export async function generateMetadata(): Promise<Metadata> {
	const { data } = await sanityFetch({ query: METADATA_QUERY });
	const { seoTitle, seoDescription, seoKeywords, seoImage } =
		data?.metadata ?? {};

	return {
		title: seoTitle ?? "Sergei Ravinski – Full-stack Developer",
		description: seoDescription ?? "",
		keywords: seoKeywords ?? [],
		openGraph: seoImage
			? {
					images: [seoImage],
				}
			: {},
	};
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { data } = await sanityFetch({ query: METADATA_QUERY });
	const { seoTitle, seoDescription, seoImage } = data?.metadata ?? {};

	const JsonLD = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: seoTitle ?? "Portefølje – Sergei Ravinski",
		description: seoDescription ?? "",
		url: "https://sergeiravinski.no/",
		image: seoImage ?? "",
		author: {
			"@type": "Person",
			name: "Sergei Ravinski",
			url: "https://sergeiravinski.no",
		},
		publisher: {
			"@type": "Person",
			name: "Sergei Ravinski",
		},
		sameAs:
			data?.links && data.links.length > 0
				? data.links.map((link: { url: string }) => link.url)
				: [
						"https://github.com/sergeiravinski",
						"https://www.linkedin.com/in/sergeiravinski",
					],
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(JsonLD),
				}}
			/>

			<RootWrapper>
				<Aside />
				<VerticalScrollWave />
				<MainContentWrapper>
					<Suspense fallback={<>...</>}>
						<Header />
						{children}
						<Alert />
					</Suspense>
				</MainContentWrapper>
				<SanityLive />

				{(await draftMode()).isEnabled && (
					<>
						<DisableDraftMode />
						<VisualEditing />
					</>
				)}
			</RootWrapper>
		</>
	);
}
