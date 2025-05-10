"use client";

import { useState } from "react";

import { ServiceDescription } from "./ServiceDescription";
import { ServiceToggle } from "./ServiceToggle";
import { ServiceItem } from "./types";

interface ServicesContainerProps {
	services: ServiceItem[];
	defaultActiveService?: ServiceItem["id"];
}

const ServicesContainer = (props: ServicesContainerProps) => {
	const { services, defaultActiveService = "dumpster-rental" } = props;

	const [activeServiceId, setActiveServiceId] =
		useState<ServiceItem["id"]>(defaultActiveService);

	const activeService = services.find(
		(service) => service.id === activeServiceId
	);

	return (
		<div className="flex gap-8">
			<div className="flex flex-col gap-2 justify-between">
				{services.map((service) => (
					<ServiceToggle
						key={service.id}
						service={service}
						isActive={activeServiceId === service.id}
						onClick={setActiveServiceId}
					/>
				))}
			</div>
			{activeService && (
				<ServiceDescription
					title={activeService.title}
					description={activeService.description}
				/>
			)}
		</div>
	);
};

export { ServicesContainer };
