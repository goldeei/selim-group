import { ServiceItem } from "./types";

interface ServiceDescriptionProps {
	title: ServiceItem["title"];
	description: ServiceItem["description"];
}

export const ServiceDescription = (props: ServiceDescriptionProps) => {
	const { description, title } = props;

	return (
		<div className="bg-white border-s-12 border-primary rounded-xs p-4">
			<h4>{title}</h4>
			<p className="text-xl">{description}</p>
		</div>
	);
};
