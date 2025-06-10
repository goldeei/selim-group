import { AnchorHTMLAttributes } from "react";

import { navMenuItems } from "./constants";

export type NavMenuItemProps = Pick<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	"title" | "href"
> & { name: string };

export type NavMenuItemName = (typeof navMenuItems)[number]["name"];
