import { cn } from "@/lib/utils";
import { AnchorHTMLAttributes } from "react";

export const NavMenuItem = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
	const { className, children, ...rest } = props;

	return (
		<li>
			<a {...rest} className={cn("font-heading", className)}>
				{children}
			</a>
			<div />
		</li>
	);
};
