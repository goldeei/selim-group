import { NAV_MENU_ITEMS } from "./constants";

export type NavMenuItemProps = {
	name: string;
	title: string;
	href: string;
};

export type NavMenuItemName = (typeof NAV_MENU_ITEMS)[number]["name"];
