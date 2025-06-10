"use client";

import { Brand } from "@/components/Brand";
import { useState } from "react";

import { navMenuItems } from "./constants";
import { NavMenu } from "./nav-menu";
import { NavMenuContainer } from "./nav-menu-container";
import { NavMenuItemName } from "./types";

const styles = {
	container: "w-full fixed z-10 top-0 bg-background px-2 py-4",
	content: "max-content-width mx-auto flex justify-between items-center",
} as const;

export const NavBar = () => {
	const [activeItem, setActiveItem] = useState<NavMenuItemName | undefined>(
		undefined
	);
	const handleNavItemClick = (name: NavMenuItemName | undefined) =>
		setActiveItem(name);

	return (
		<nav aria-label="Main nav" className={styles.container}>
			<div className={styles.content}>
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
