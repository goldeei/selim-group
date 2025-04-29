"use client";

import { cn } from "@/lib/utils";
import { AnchorHTMLAttributes } from "react";

export const NavMenuItem = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
	const { id, className, children, href, ...rest } = props;

	return (
		<li>
			<a
				{...rest}
				id={id}
				className={cn("font-heading", className)}
				href={href}
				aria-current={href === window.location.hash ? "page" : undefined}
			>
				{children}
			</a>
			<div />
		</li>
	);
};
