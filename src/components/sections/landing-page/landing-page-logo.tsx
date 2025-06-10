"use client";

import { SVGProps, useMemo } from "react";

import DesktopSVG from "@/app/assets/svgs/landing-page__desktop.svg";
import MobileSVG from "@/app/assets/svgs/landing-page__mobile.svg";
import { useIsMobile } from "@/context/isMobileContext";
import { cn } from "@/lib/utils";

export const LandingPageLogo = (props: SVGProps<SVGSVGElement>) => {
	const isMobile = useIsMobile();
	const logoProps = useMemo(
		() => ({
			className: cn("h-fit w-full max-w-xl", isMobile && "w-4/5"),
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
