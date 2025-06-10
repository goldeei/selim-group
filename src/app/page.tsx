import { AboutUs, LandingPage, Renovations, Services } from "@/components/sections";

export default function Home() {
	return (
		<div>
			<LandingPage />
			<Services />
			<Renovations />
			<AboutUs />
		</div>
	);
}
