"use client";

import DesktopSVG from "@/app/assets/svgs/landing-page__desktop.svg";
import MobileSVG from "@/app/assets/svgs/landing-page__mobile.svg";
import { useIsMobile } from "@/context/isMobileContext";
import { cn } from "@/lib/utils";
import { SVGProps, useMemo } from "react";

const styles = {
	logo: {
		base: "h-fit w-full max-w-xl",
		mobile: "w-4/5",
	},
} as const;

export const LandingPageLogo = (props: SVGProps<SVGSVGElement>) => {
	const isMobile = useIsMobile();
	const logoProps = useMemo(
		() => ({
			className: cn(styles.logo.base, isMobile && styles.logo.mobile),
			preserveAspectRatio: "xMidYMid meet",
			...props,
		}),
		[props, isMobile]
	);

	return isMobile ? (
		<MobileSVG {...logoProps} />
	) : (
		<DesktopSVG {...logoProps} />
	);
};
