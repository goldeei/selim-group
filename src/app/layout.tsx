import { NavBar } from "@/components/navbar/NavBar";
import { AppProviders } from "@/context/AppProviders";
import { SanityLive } from "@/sanity/live";
import { Bebas_Neue, Oswald } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

import type { Metadata } from "next";
// Configure the Oswald font
const oswald = Oswald({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-oswald",
});

// Configure the Bebas Neue font
const bebasNeue = Bebas_Neue({
	weight: "400", // Bebas Neue is typically only available in 400 weight
	subsets: ["latin"],
	display: "swap",
	variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
	title: "The Selim Group",
	description:
		"The Selim Group offers comprehensive property services including licensed real estate, investment opportunities, interior demolition, home renovation, and dumpster rental. Our experienced team delivers exceptional service for all your property needs in New Jersey.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="size-full scroll-smooth">
			<head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
			</head>
			<body className={`${oswald.variable} ${bebasNeue.variable} antialiased`}>
				<AppProviders fallback={<div>...loading</div>}>
					<Suspense fallback={<div>...loading</div>}>
						<SanityLive />
						<NavBar />
						{children}
					</Suspense>
				</AppProviders>
			</body>
		</html>
	);
}
