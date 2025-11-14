import type { Metadata } from "next";
import ThemeProvider from "@/theme/theme-provider";
import { Geist, Geist_Mono, Space_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const spaceMono = Space_Mono({
	variable: "--font-space-mono",
	subsets: ["latin"],
	weight: "400",
});

export const metadata = {
	title: "Sergei Ravinski – Front-end / Full-stack Developer",
	description:
		"Portefølje og prosjekter utviklet av Sergei Ravinski – fullstack og frontend utvikler basert i Oslo.",
	creator: "Sergei Ravinski",
	openGraph: {
		siteName: "Sergei Ravinski Portfolio",
		locale: "no_NO",
		type: "website",
		url: "https://sergeiravinski.no",
	},
	robots: { index: true, follow: true },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${spaceMono.variable} antialiased bg-(--color-primary-light)`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<SpeedInsights />
					<Analytics />
				</ThemeProvider>
			</body>
		</html>
	);
}
