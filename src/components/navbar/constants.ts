import { NavMenuItemProps } from "./types";

export const navMenuItems: NavMenuItemProps[] = [
	{ name: "services", title: "Services", href: "#services" },
	{ name: "renovations", title: "Renovations", href: "#renovations" },
	{ name: "listings", title: "Listings", href: "#listings" },
	{ name: "about-us", title: "About Us", href: "#about-us" },
] as const;
