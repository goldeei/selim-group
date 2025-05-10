import { ServiceItem } from "./types";

interface ServiceProps {
	service: ServiceItem;
}

export const Service = ({ service }: ServiceProps) => {
	const { title, description } = service;

	return (
		<div className="flex flex-col gap-4 p-6 bg-card rounded-lg shadow-md">
			<h4 className="text-primary ">{title}</h4>
			<p className="text-muted-foreground">{description}</p>
		</div>
	);
};
