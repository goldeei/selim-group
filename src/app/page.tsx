import { PropertyPage } from "@/components/PropertyPage";
import { LandingPage } from "@/components/sections/landing-page/LandingPage";
import { Services } from "@/components/sections/services/Services";

export default function Home() {
	return (
		<div>
			<LandingPage />
			<Services />
			<PropertyPage />
		</div>
	);
}
