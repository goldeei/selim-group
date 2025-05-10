import LandingPageFooter from "@/app/assets/svgs/landing-page-footer.svg";
import { sanityFetch } from "@/sanity/live";
import { defineQuery } from "next-sanity";

import { Separator } from "../../ui/Separator";
import { LandingPageLogo } from "./LandingPageLogo";
import { LandingPageSubtitle } from "./LandingPageSubtitle";

const SUBTITLE_QUERY = defineQuery(`*[
  _type == "landingPage" 
  && defined(subtitle)
][0].subtitle`);

export const LandingPage = async () => {
	const { data: subtitle } = await sanityFetch({ query: SUBTITLE_QUERY });

	return (
		<div className="bg-primary h-screen flex flex-col justify-center items-center overflow-hidden">
			<div className="w-full max-w-4xl flex flex-col items-center gap-4 mt-auto px-4 md:px-0">
				<LandingPageLogo />
				<Separator />
				<LandingPageSubtitle subtitle={subtitle} />
			</div>
			<LandingPageFooter className="mt-auto translate-y-0.5" />
		</div>
	);
};
