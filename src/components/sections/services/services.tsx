import {
	Dumpster,
	InteriorDemolition,
	InteriorRenovation,
	LicensedRealtors,
	RealEstateInvestment,
} from "@/app/assets/svgs";
import { Section } from "@/components/common/section";
import { MAIN_PAGE_SECTIONS } from "@/lib/constants";
import { sanityFetch } from "@/sanity/live";
import { SERVICES_QUERY } from "@/sanity/queries";

import { ServicesContainer } from "./services-container";
import { ServiceItem } from "./types";

type IconKey = keyof typeof iconMap;

const iconMap = {
	Dumpster: <Dumpster />,
	LicensedRealtors: <LicensedRealtors />,
	RealEstateInvestment: <RealEstateInvestment />,
	InteriorDemolition: <InteriorDemolition />,
	InteriorRenovation: <InteriorRenovation />,
} as const;

export const Services = async () => {
	const { data } = await sanityFetch({ query: SERVICES_QUERY.all });

	const services = data.map((service: ServiceItem) => ({
		id: service.id,
		title: service.title,
		description: service.description,
		icon: service.icon ? iconMap[service.icon as IconKey] : undefined,
	}));

	return (
		<Section id={MAIN_PAGE_SECTIONS.services.id} className="bg-background">
			<h2 className="responsive mb-4">{MAIN_PAGE_SECTIONS.services.title}</h2>
			<ServicesContainer services={services} />
		</Section>
	);
};
