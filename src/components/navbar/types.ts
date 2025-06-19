import { AnchorHTMLAttributes } from "react";

import { NAV_MENU_ITEMS } from "./constants";

export type NavMenuItemProps = Pick<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	"title" | "href" | "id"
>;

export type NavMenuItemName = (typeof NAV_MENU_ITEMS)[number]["id"];
