import { useIsMobile } from "@/context/isMobileContext";
import { cn } from "@/lib/utils";

import { NavMenuItemName, NavMenuItemProps } from "./NavBar";
import { NavMenuItem } from "./NavMenuItem";

interface NavMenuProps {
	navMenuItems: NavMenuItemProps[];
	activeMenuItem?: NavMenuItemName;
	onNavItemClick?: (name: NavMenuItemName) => void;
}
export const NavMenu = (props: NavMenuProps) => {
	const { navMenuItems, activeMenuItem, onNavItemClick } = props;
	const handleNavItemClick = (name: NavMenuItemName) =>
		onNavItemClick && onNavItemClick(name);

	const isMobile = useIsMobile();

	return (
		<ul
			className={cn(
				"flex",
				isMobile ? "flex-col gap-4 text-xl  leading-none" : "flex-row gap-4"
			)}
		>
			{navMenuItems.map(({ name, title, href }) => (
				<NavMenuItem
					key={name}
					id={name}
					title={name}
					href={href}
					onPointerDown={() => handleNavItemClick(name)}
					isActive={name === activeMenuItem}
					isMobile={isMobile}
				>
					{title}
				</NavMenuItem>
			))}
		</ul>
	);
};
