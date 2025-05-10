import { ServicesContainer } from "./ServicesContainer";
import { ServiceItem } from "./types";

const services: ServiceItem[] = [
	{
		title: "Dumpster Rental",
		description:
			"Convenient and reliable dumpster rental services for construction, renovation, and cleanup projects of any size.",
	},
	{
		title: "Licensed Realtors",
		description:
			"Expert real estate agents helping you buy, sell, or rent properties with professional guidance every step of the way.",
	},
	{
		title: "Real Estate Investors",
		description:
			"Strategic property investment services focused on identifying opportunities and maximizing returns in the real estate market.",
	},
	{
		title: "Interior Demolition",
		description:
			"Professional interior demolition services for residential and commercial properties, ensuring safe and efficient removal.",
	},
	{
		title: "Home Renovation",
		description:
			"Complete home renovation services from concept to completion, transforming your space with quality craftsmanship.",
	},
];

export const Services = () => {
	return (
		<div className="p-12 bg-background">
			<h2 className="responsive">Services</h2>
			<ServicesContainer services={services} />
		</div>
	);
};
