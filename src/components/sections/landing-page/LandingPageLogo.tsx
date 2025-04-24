import { SVGProps, useMemo } from "react";

import DesktopSVG from "@/app/assets/svgs/landing-page__desktop.svg";
import MobileSVG from "@/app/assets/svgs/landing-page__mobile.svg";
import { cn } from "@/lib/utils";

interface LandingPageLogoProps extends SVGProps<SVGSVGElement> {
	isMobile: boolean;
}
export const LandingPageLogo = (props: LandingPageLogoProps) => {
	const { isMobile, ...rest } = props;
	const logoProps = useMemo(
		() => ({
			className: cn("h-fit w-full max-w-xl", isMobile && "w-4/5"),
			preserveAspectRatio: "xMidYMid meet",
			...rest,
		}),
		[rest, isMobile]
	);

	return isMobile ? (
		<MobileSVG {...logoProps} />
	) : (
		<DesktopSVG {...logoProps} />
	);
};
