import { PropertyCarousel } from "@/components/property-carousel/PropertyCarousel";

export const Renovations = () => {
	return (
		<section
			id="renovations"
			className="h-screen flex flex-col bg-grey__darker"
		>
			<h2 className="responsive mb-4 text-grey__lightest">Renovations</h2>
			<PropertyCarousel />
		</section>
	);
};
