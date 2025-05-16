import { LandingPage } from "@/components/sections/landing-page/LandingPage";
import { Renovations } from "@/components/sections/renovations/Renovations";
import { Services } from "@/components/sections/services/Services";

export default function Home() {
	return (
		<div>
			<LandingPage />
			<Services />
			<Renovations />
		</div>
	);
}
