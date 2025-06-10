import { useIsMobile } from "@/context/isMobileContext";
import { cn } from "@/lib/utils";

import { NavMenuItem } from "./nav-menu-item";
import { NavMenuItemName, NavMenuItemProps } from "./types";

interface NavMenuProps {
	navMenuItems: NavMenuItemProps[];
	activeMenuItem?: NavMenuItemName;
	onNavItemClick?: (name: NavMenuItemName) => void;
}

const styles = {
	container: "flex",
	desktop: "flex-row gap-4",
	mobile: "flex-col gap-4 text-xl leading-none",
} as const;

export const NavMenu = (props: NavMenuProps) => {
	const { navMenuItems, activeMenuItem, onNavItemClick } = props;
	const handleNavItemClick = (name: NavMenuItemName) =>
		onNavItemClick && onNavItemClick(name);

	const isMobile = useIsMobile();

	return (
		<ul
			className={cn(
				styles.container,
				isMobile ? styles.mobile : styles.desktop
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
