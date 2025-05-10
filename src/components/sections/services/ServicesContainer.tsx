"use client";

import { AnimatePresence } from "motion/react";
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
		<div className="relative flex gap-8">
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
			<div className="relative flex-1 bg-white border-s-12 border-primary rounded-xs">
				<AnimatePresence mode="wait">
					{activeService && (
						<ServiceDescription
							key={activeService.id}
							title={activeService.title}
							description={activeService.description}
						/>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export { ServicesContainer };
