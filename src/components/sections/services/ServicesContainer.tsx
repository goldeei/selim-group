"use client";

import { useState } from "react";

import { ServiceToggle } from "./ServiceToggle";
import { ServiceItem } from "./types";

interface ServicesContainerProps {
	services: ServiceItem[];
	defaultActiveService?: ServiceItem["id"];
}

const ServicesContainer = (props: ServicesContainerProps) => {
	const { services, defaultActiveService = "dumpster-rental" } = props;

	const [activeService, setActiveService] = useState<
		ServiceItem["title"] | null
	>(defaultActiveService);

	return (
		<div className="flex flex-col gap-4">
			{services.map((service) => (
				<ServiceToggle
					key={service.title}
					service={service}
					isActive={activeService === service.id}
					onClick={setActiveService}
				/>
			))}
		</div>
	);
};

export { ServicesContainer };
