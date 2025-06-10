"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { AnchorHTMLAttributes, useState } from "react";

const transition = {
	type: "spring",
	stiffness: 500,
	damping: 30,
};

interface NavMenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	isActive: boolean;
	isMobile: boolean;
}

const styles = {
	container: "relative flex items-center",
	link: "font-heading block leading-8",
	activeIndicator: "absolute bg-secondary rounded opacity-0",
} as const;

const variants = (isMobile: boolean, isActive: boolean) => {
	const props: Variants = {};
	props.animate = { opacity: isActive ? 1 : 0.5 };

	if (isMobile) {
		props.initial = { height: "1rem" };
		props.animate = { ...props.animate, height: isActive ? "100%" : "1rem" };
	} else {
		props.initial = { width: "1rem", opacity: 0 };
		props.animate = { ...props.animate, width: isActive ? "100%" : "1rem" };
	}
	return props;
};

export const NavMenuItem = (props: NavMenuItemProps) => {
	const { id, className, children, href, isActive, onPointerDown, isMobile } =
		props;
	const [isHovered, setIsHovered] = useState(false);

	return (
		<li className={styles.container}>
			<motion.a
				id={`${id}-link`}
				className={cn(styles.link, isMobile && "ms-2", className)}
				href={href}
				aria-current={href === window.location.hash ? "page" : undefined}
				onPointerEnter={() => setIsHovered(true)}
				onPointerLeave={() => setIsHovered(false)}
				animate={{
					y: !isMobile && isActive ? -2 : 0,
				}}
				transition={transition}
				onPointerDown={onPointerDown}
			>
				{children}
			</motion.a>
			{isActive || isHovered ? (
				<motion.div
					className={cn(
						styles.activeIndicator,
						isMobile
							? "left-0 w-0.5"
							: "bottom-0 -translate-x-1/2 h-0.5 left-1/2"
					)}
					variants={variants(isMobile, isActive)}
					initial="initial"
					animate="animate"
					transition={transition}
				/>
			) : null}
		</li>
	);
};
