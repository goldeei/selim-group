import LandingPageFooter from "@/app/assets/svgs/landing-page-footer.svg";
import { Separator } from "@/components/common";
import { sanityFetch } from "@/sanity/live";
import { LANDING_PAGE_QUERY } from "@/sanity/queries";

import { LandingPageLogo } from "./landing-page-logo";
import { LandingPageSubtitle } from "./landing-page-subtitle";

const styles = {
	container:
		"relative -z-10 bg-primary h-screen flex flex-col justify-center items-center overflow-hidden",
	content:
		"fixed w-full max-w-4xl flex flex-col items-center gap-4 mt-auto px-4 md:px-0",
} as const;

export const LandingPage = async () => {
	const { data: subtitle } = await sanityFetch({
		query: LANDING_PAGE_QUERY.subtitle,
	});

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<LandingPageLogo />
				<Separator />
				<LandingPageSubtitle subtitle={subtitle} />
			</div>
			<LandingPageFooter className="mt-auto translate-y-0.5" />
		</div>
	);
};
