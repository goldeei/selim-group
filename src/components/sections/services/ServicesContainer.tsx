import { Service } from "./Service";
import { ServiceItem } from "./types";

interface ServicesContainerProps {
	services: ServiceItem[];
}

const ServicesContainer = (props: ServicesContainerProps) => {
	const { services } = props;

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{services.map((service) => (
				<Service key={service.title} service={service} />
			))}
		</div>
	);
};

export { ServicesContainer };
