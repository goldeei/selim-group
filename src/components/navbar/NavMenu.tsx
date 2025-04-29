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

	return (
		<ul className="flex gap-4 items-center">
			{navMenuItems.map(({ name, title, href }) => (
				<NavMenuItem
					key={name}
					id={name}
					title={name}
					href={href}
					onPointerDown={() => handleNavItemClick(name)}
					isActive={name === activeMenuItem}
				>
					{title}
				</NavMenuItem>
			))}
		</ul>
	);
};
