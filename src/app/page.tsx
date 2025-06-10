import { LandingPage } from "@/components/sections/landing-page";
import { Renovations } from "@/components/sections/renovations";
import { Services } from "@/components/sections/services";

export default function Home() {
	return (
		<div>
			<LandingPage />
			<Services />
			<Renovations />
		</div>
	);
}
