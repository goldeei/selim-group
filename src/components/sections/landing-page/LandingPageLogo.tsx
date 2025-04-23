import dynamic from "next/dynamic";
import { ComponentType, SVGProps } from "react";

type LogoSize = "mobile" | "desktop";

const Logos: Record<LogoSize, ComponentType<SVGProps<SVGSVGElement>>> = {
	mobile: dynamic(() => import("@/app/assets/svgs/landing-page__mobile.svg")),
	desktop: dynamic(() => import("@/app/assets/svgs/landing-page__desktop.svg")),
};

interface LandingPageLogoProps extends SVGProps<SVGSVGElement> {
	size?: LogoSize;
}
export const LandingPageLogo = (props: LandingPageLogoProps) => {
	const { size = "desktop", ...rest } = props;
	const Component = Logos[size];
	return <Component {...rest} />;
};
