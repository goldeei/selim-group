import { cn } from "@/lib/utils";
import { AnchorHTMLAttributes, useState } from "react";

interface NavMenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	isActive: boolean;
}
export const NavMenuItem = (props: NavMenuItemProps) => {
	const { id, className, children, href, isActive, ...rest } = props;

	const [isHovered, setIsHovered] = useState(false);

	return (
		<li className="relative">
			<a
				{...rest}
				id={id}
				className={cn("font-heading", isActive && "", className)}
				href={href}
				aria-current={href === window.location.hash ? "page" : undefined}
				onPointerEnter={() => setIsHovered(true)}
				onPointerLeave={() => setIsHovered(false)}
			>
				{children}
			</a>
			{isActive && <div className="w-full bg-secondary h-0.5 rounded" />}
			{!isActive && isHovered && (
				<div className="mx-auto w-4 bg-secondary/50 h-0.5 rounded" />
			)}
		</li>
	);
};
