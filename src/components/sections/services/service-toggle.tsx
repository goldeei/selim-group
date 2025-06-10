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
	const { title, id, icon } = service;

	const handleClick = () => onClick(id);

	return (
		<Button
			onClick={handleClick}
			className={cn(
				"rounded transition-all font-heading text-xl flex items-center justify-between gap-6 h-fit py-2",
				isActive
					? "bg-primary__lighter text-primary !shadow-inner hover:bg-primary__lighter"
					: "bg-primary shadow"
			)}
		>
			{title}
			{icon && <div className="h-6 w-8 flex justify-center ">{icon}</div>}
		</Button>
	);
};
