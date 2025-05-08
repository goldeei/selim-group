import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { AnchorHTMLAttributes, useState } from "react";

const transition = {
	type: "spring",
	stiffness: 500,
	damping: 30,
};

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
				transition={transition}
				onPointerDown={onPointerDown}
			>
				{children}
			</motion.a>
			{isActive || isHovered ? (
				<motion.div
					className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-secondary h-0.5 rounded"
					initial={{ width: "1rem", opacity: 0 }}
					animate={{
						width: isActive ? "100%" : "1rem",
						opacity: isActive ? 1 : 0.5,
					}}
					transition={transition}
				/>
			) : null}
		</li>
	);
};
