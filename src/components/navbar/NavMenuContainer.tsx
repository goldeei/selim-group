import { useIsMobile } from "@/context/isMobileContext";

import { MobileNavMenu } from "./MobileNavMenu";

interface NavMenuContainerProps {
	children: React.ReactNode;
}
export const NavMenuContainer = (props: NavMenuContainerProps) => {
	const { children } = props;

	const isMobile = useIsMobile();

	if (isMobile) return <MobileNavMenu>{children}</MobileNavMenu>;
	return <>{children}</>;
};
