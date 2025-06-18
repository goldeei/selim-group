"use client";

import { Brand } from "@/components/common";
import { LAYOUT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useState } from "react";

import { navMenuItems } from "./constants";
import { NavMenu } from "./nav-menu";
import { NavMenuContainer } from "./nav-menu-container";
import { NavMenuItemName } from "./types";

const styles = {
	container: `h-[${LAYOUT.NAVBAR_HEIGHT}] w-full fixed z-40 top-0 bg-background gutter`,
	content: "h-full max-content-width mx-auto flex justify-between items-center",
} as const;

export const NavBar = () => {
	const [activeItem, setActiveItem] = useState<NavMenuItemName | undefined>(
		undefined
	);
	const handleNavItemClick = (
		event: React.PointerEvent<HTMLAnchorElement>,
		name: NavMenuItemName | undefined
	) => {
		event.preventDefault();

		const { href } = event.currentTarget;
		const hash = new URL(href).hash;

		setActiveItem(name);
		const element = document.querySelector(hash);
		if (!element) return;

		// Account for navbar height in scroll position
		const elementPosition =
			element.getBoundingClientRect().top + window.scrollY;
		const offsetPosition = elementPosition - LAYOUT.NAVBAR_HEIGHT_PX;

		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth",
		});
	};

	const handleBrandClick = () => setActiveItem(undefined);

	return (
		<nav aria-label="Main nav" className={cn(styles.container)}>
			<div className={styles.content}>
				<Brand
					className="size-16"
					onPointerDown={handleBrandClick}
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
