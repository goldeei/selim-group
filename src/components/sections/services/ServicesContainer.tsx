"use client";

import { useIsMobile } from "@/context/isMobileContext";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

import { ServiceDescription } from "./ServiceDescription";
import { ServiceDescriptionContainer } from "./ServiceDescriptionContainer";
import { ServiceToggle } from "./ServiceToggle";
import { ServiceItem } from "./types";

interface ServicesContainerProps {
	services: ServiceItem[];
	defaultActiveService?: ServiceItem["id"];
}

const ServicesContainer = (props: ServicesContainerProps) => {
	const { services, defaultActiveService = "dumpster-rental" } = props;

	const isMobile = useIsMobile();

	const [activeServiceId, setActiveServiceId] = useState<
		ServiceItem["id"] | undefined
	>(isMobile ? undefined : defaultActiveService);

	const activeService = services.find(
		(service) => service.id === activeServiceId
	);

	useEffect(() => {
		if (isMobile) {
			setActiveServiceId(undefined);
		}
		if (!isMobile && !activeServiceId) {
			setActiveServiceId(defaultActiveService);
		}
	}, [activeServiceId, defaultActiveService, isMobile]);

	return (
		<div className="flex gap-8 ">
			<div className={cn("flex flex-col gap-6", isMobile && "flex-1")}>
				{services.map((service) => (
					<ServiceToggle
						key={service.id}
						service={service}
						isActive={activeServiceId === service.id}
						onClick={setActiveServiceId}
					/>
				))}
			</div>
			<AnimatePresence>
				{activeService && (
					<ServiceDescriptionContainer
						isMobile={isMobile}
						service={activeService}
						onDialogClose={() => setActiveServiceId(undefined)}
					>
						<ServiceDescription
							key={activeService.id}
							title={activeService.title}
							description={activeService.description}
							isMobile={isMobile}
						/>
					</ServiceDescriptionContainer>
				)}
			</AnimatePresence>
		</div>
	);
};

export { ServicesContainer };
