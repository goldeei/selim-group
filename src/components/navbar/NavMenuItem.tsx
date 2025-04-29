import { cn } from "@/lib/utils";
import { AnchorHTMLAttributes } from "react";

interface NavMenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	isActive: boolean;
}
export const NavMenuItem = (props: NavMenuItemProps) => {
	const { id, className, children, href, isActive, ...rest } = props;

	return (
		<li>
			<a
				{...rest}
				id={id}
				className={cn("font-heading", isActive && "", className)}
				href={href}
				aria-current={href === window.location.hash ? "page" : undefined}
			>
				{children}
			</a>
			<div />
		</li>
	);
};
