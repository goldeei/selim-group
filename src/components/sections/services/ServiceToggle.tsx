"use client";

import { Button } from "@/components/ui/button";

import { ServiceItem } from "./types";

interface ServiceToggleProps {
	service: ServiceItem;
	isActive: boolean;
	onClick: () => void;
}

export const ServiceToggle = ({
	service,
	isActive,
	onClick,
}: ServiceToggleProps) => {
	const { title } = service;

	return (
		<Button
			onClick={onClick}
			className={`flex flex-col gap-4 p-6 rounded-lg shadow-md transition-all duration-300 w-full text-left
				${isActive ? "bg-primary text-primary-foreground" : "bg-card text-primary"}`}
		>
			<h4 className="responsive">{title}</h4>
		</Button>
	);
};
