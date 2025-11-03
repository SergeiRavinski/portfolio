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
import type { Metadata, ResolvingMetadata } from "next";
import { METADATA_QUERY } from "@/sanity/lib/queries";

export async function generateMetadata(
	parent: ResolvingMetadata
): Promise<Metadata> {
	const { data } = await sanityFetch({ query: METADATA_QUERY });
	const { seoTitle, seoDescription, seoKeywords, seoImage } =
		data.metadata ?? {};

	return {
		title: seoTitle ?? "Sergei Ravinski – Full-stack Developer",
		description: seoDescription ?? "",
		keywords: seoKeywords ?? [],
		openGraph: seoImage
			? {
					images: [
						seoImage,
						...((await parent).openGraph?.images || []),
					],
				}
			: {},
	};
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
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
	);
}
