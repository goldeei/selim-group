import { NavMenuItem } from "./NavMenuItem";

const navMenuItems = [
	{ name: "services", title: "Services" },
	{ name: "renovations", title: "Renovations" },
	{ name: "listings", title: "Listings" },
	{ name: "about-us", title: "About Us" },
];

export const NavMenu = () => {
	return (
		<ul className="flex gap-4 items-center">
			{navMenuItems.map(({ name, title }) => (
				<NavMenuItem key={name} title={name}>
					{title}
				</NavMenuItem>
			))}
		</ul>
	);
};
