"use client";

import LandingPageFooter from "@/app/assets/svgs/landing-page-footer.svg";
import { useIsMobile } from "@/context/isMobileContext";
import { Separator } from "../../ui/Separator";
import { LandingPageLogo } from "./LandingPageLogo";
import { LandingPageSubtitle } from "./LandingPageSubtitle";

export const LandingPage = () => {
	const isMobile = useIsMobile();

	return (
		<div className="bg-primary w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
			<div className="w-full max-w-4xl flex flex-col items-center gap-4 mt-auto px-4 md:px-0">
				<LandingPageLogo isMobile={isMobile} />
				<Separator />
				<LandingPageSubtitle isMobile={isMobile} />
			</div>
			<LandingPageFooter className="mt-auto" />
		</div>
	);
};
