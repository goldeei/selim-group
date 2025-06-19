import { MAIN_PAGE_SECTIONS } from "@/lib/constants";

import { NavMenuItemProps } from "./types";

export const NAV_MENU_ITEMS: NavMenuItemProps[] = Object.values(
	MAIN_PAGE_SECTIONS
).map((section) => ({
	name: section.id,
	title: section.title,
	href: section.href,
}));
