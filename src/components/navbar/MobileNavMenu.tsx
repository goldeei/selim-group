import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import React, { useState } from "react";

import { Button } from "../ui/button";
import { NavMenuItemProps } from "./NavBar";

interface MobileNavMenuProps {
	children: React.ReactNode;
}

export const MobileNavMenu = (props: MobileNavMenuProps) => {
	const { children } = props;

	const [isOpen, setIsOpen] = useState(false);
	return (
		<DropdownMenu onOpenChange={setIsOpen}>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className={cn(
						"hover:bg-transparent hover:text-primary__light",
						isOpen && "bg-primary shadow-inner text-primary__lighter"
					)}
				>
					<MenuIcon className="size-6" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="w-screen bg-background flex-col gap-4 rounded py-4 focus:bg-background hover:bg-background"
				sideOffset={20}
			>
				{React.Children.map(children, (child) => {
					if (React.isValidElement<NavMenuItemProps>(child)) {
						return (
							<DropdownMenuItem
								key={child.props.name}
								className="flex items-center justify-start p-0 hover:bg-transparent focus:bg-transparent"
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
