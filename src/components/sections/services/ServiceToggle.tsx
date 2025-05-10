import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { ServiceItem } from "./types";

interface ServiceToggleProps {
	service: ServiceItem;
	isActive: boolean;
	onClick: (id: ServiceItem["id"]) => void;
}

export const ServiceToggle = ({
	service,
	isActive,
	onClick,
}: ServiceToggleProps) => {
	const { title, id } = service;

	const handleClick = () => onClick(id);

	return (
		<Button
			onClick={handleClick}
			className={cn(
				"rounded shadow transition-all font-heading",
				isActive
					? "bg-primary__lighter text-primary shadow-inner hover:bg-primary__lighter"
					: "bg-primary"
			)}
		>
			{title}
		</Button>
	);
};
