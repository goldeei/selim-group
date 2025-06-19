"use client";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import React, { useState } from "react";

import { NavMenuItemProps } from "./types";

interface MobileNavMenuProps {
	children: React.ReactNode;
}

const styles = {
	trigger: {
		base: "hover:bg-transparent hover:text-primary-light",
		open: "bg-primary shadow-inner text-primary-lighter",
	},
	content:
		"w-screen bg-background flex-col gap-4 rounded py-4 focus:bg-background hover:bg-background",
	item: "flex items-center justify-start p-0 hover:bg-transparent focus:bg-transparent",
} as const;

export const MobileNavMenu = (props: MobileNavMenuProps) => {
	const { children } = props;

	const [isOpen, setIsOpen] = useState(false);
	return (
		<DropdownMenu onOpenChange={setIsOpen}>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className={cn(styles.trigger.base, isOpen && styles.trigger.open)}
				>
					<MenuIcon className="size-6" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className={styles.content} sideOffset={20}>
				{React.Children.map(children, (child) => {
					if (React.isValidElement<NavMenuItemProps>(child)) {
						return (
							<DropdownMenuItem
								key={child.props.name}
								className={styles.item}
								onSelect={(e) => e.preventDefault()}
							>
								{child}
							</DropdownMenuItem>
						);
					}
					return null;
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
