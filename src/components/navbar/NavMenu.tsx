import { NavMenuItem } from "./NavMenuItem";

const navMenuItems = [
	{ name: "services", title: "Services", href: "#services" },
	{ name: "renovations", title: "Renovations", href: "#renovations" },
	{ name: "listings", title: "Listings", href: "#listings" },
	{ name: "about-us", title: "About Us", href: "#about-us" },
];

export const NavMenu = () => {
	return (
		<ul className="flex gap-4 items-center">
			{navMenuItems.map(({ name, title, href }) => (
				<NavMenuItem key={name} id={name} title={name} href={href}>
					{title}
				</NavMenuItem>
			))}
		</ul>
	);
};
