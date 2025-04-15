import { SanityLive } from "@/sanity/lib/live";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import Aside from "@/components/ui/Aside";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex flex-row min-h-screen bg-(--color-primary-light) text-[--color-primary-dark] lowercase font-(family-name:--font-space-mono) selection:bg-(--color-primary-dark) selection:text-(--color-primary-light)">
			<Aside />
			{children}
			<SanityLive />
			{(await draftMode()).isEnabled && (
				<>
					<DisableDraftMode />
					<VisualEditing />
				</>
			)}
		</div>
	);
}
