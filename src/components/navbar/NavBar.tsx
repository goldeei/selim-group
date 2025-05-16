"use client";

import { Brand } from "@/components/Brand";
import { AnchorHTMLAttributes, useState } from "react";

import { NavMenu } from "./NavMenu";
import { NavMenuContainer } from "./NavMenuContainer";

export type NavMenuItemProps = Pick<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	"title" | "href"
> & { name: string };

const navMenuItems: NavMenuItemProps[] = [
	{ name: "services", title: "Services", href: "#services" },
	{ name: "renovations", title: "Renovations", href: "#renovations" },
	{ name: "listings", title: "Listings", href: "#listings" },
	{ name: "about-us", title: "About Us", href: "#about-us" },
];

export type NavMenuItemName = (typeof navMenuItems)[number]["name"];

export const NavBar = () => {
	const [activeItem, setActiveItem] = useState<NavMenuItemName | undefined>(
		undefined
	);
	const handleNavItemClick = (name: NavMenuItemName | undefined) =>
		setActiveItem(name);

	return (
		<nav
			aria-label="Main nav"
			className="w-full fixed z-10 top-0 bg-background px-2 py-4"
		>
			<div className="max-content-width mx-auto flex justify-between items-center">
				<Brand
					className="w-20 h-fit"
					onPointerDown={() => handleNavItemClick(undefined)}
					href={"#"}
				/>
				<NavMenuContainer>
					<NavMenu
						navMenuItems={navMenuItems}
						onNavItemClick={handleNavItemClick}
						activeMenuItem={activeItem}
					/>
				</NavMenuContainer>
			</div>
		</nav>
	);
};
