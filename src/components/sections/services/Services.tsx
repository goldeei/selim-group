import {
	Dumpster,
	InteriorDemolition,
	InteriorRenovation,
	LicensedRealtors,
	RealEstateInvestment,
} from "@/app/assets/svgs";
import { sanityFetch } from "@/sanity/live";
import { defineQuery } from "next-sanity";

import { ServicesContainer } from "./ServicesContainer";
import { ServiceItem } from "./types";

type IconKey = keyof typeof iconMap;

const iconMap = {
	Dumpster: <Dumpster />,
	LicensedRealtors: <LicensedRealtors />,
	RealEstateInvestment: <RealEstateInvestment />,
	InteriorDemolition: <InteriorDemolition />,
	InteriorRenovation: <InteriorRenovation />,
} as const;

const SERVICES_QUERY = defineQuery(`*[
  _type == "service"
] | order(orderRank asc)`);

export const Services = async () => {
	const { data } = await sanityFetch({ query: SERVICES_QUERY });

	const services = data.map((service: ServiceItem) => ({
		id: service.id,
		title: service.title,
		description: service.description,
		icon: service.icon ? iconMap[service.icon as IconKey] : undefined,
	}));

	return (
		<section id="services" className="p-12 bg-background">
			<h2 className="responsive mb-4">Services</h2>
			<ServicesContainer services={services} />
		</section>
	);
};
