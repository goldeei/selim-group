"use client";

import { useIsMobile } from "@/context/isMobileContext";

const classes = "text-primary__lighter tracking-widest responsive";

interface LandingPageSubtitle {
	subtitle: string;
}
export const LandingPageSubtitle = (props: LandingPageSubtitle) => {
	const { subtitle } = props;

	const isMobile = useIsMobile();
	return isMobile ? (
		<h4 className={classes}>{subtitle}</h4>
	) : (
		<h2 className={classes}>{subtitle}</h2>
	);
};
