import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { AnchorHTMLAttributes, useState } from "react";

interface NavMenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	isActive: boolean;
}

export const NavMenuItem = (props: NavMenuItemProps) => {
	const { id, className, children, href, isActive, onPointerDown } = props;
	const [isHovered, setIsHovered] = useState(false);

	return (
		<li className="relative">
			<motion.a
				id={id}
				className={cn("font-heading block", isActive && "", className)}
				href={href}
				aria-current={href === window.location.hash ? "page" : undefined}
				onPointerEnter={() => setIsHovered(true)}
				onPointerLeave={() => setIsHovered(false)}
				animate={{
					y: isActive ? -2 : 0,
				}}
				transition={{
					type: "spring",
					stiffness: 500,
					damping: 30,
				}}
				onPointerDown={onPointerDown}
			>
				{children}
			</motion.a>
			{isActive && (
				<motion.div
					className="absolute bottom-0 left-0 w-full bg-secondary h-0.5 rounded"
					layoutId="navbar-underline"
				/>
			)}
			{!isActive && isHovered && (
				<motion.div
					className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 bg-secondary/50 h-0.5 rounded"
					initial={{ opacity: 0, scaleX: 0 }}
					animate={{ opacity: 1, scaleX: 1 }}
					exit={{ opacity: 0, scaleX: 0 }}
				/>
			)}
		</li>
	);
};
