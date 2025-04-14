import type { Metadata } from "next";
import { Bebas_Neue, Oswald } from "next/font/google";
import "./globals.css";

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
		<html lang="en" className="size-full">
			<body
				className={`${oswald.variable} ${bebasNeue.variable} antialiased size-full`}
			>
				{children}
			</body>
		</html>
	);
}
