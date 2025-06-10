import { PropertyShowcase } from "@/components/property-showcase";
import { sanityFetch } from "@/sanity/live";
import { PROPERTIES_QUERY } from "@/sanity/queries";
import { Property } from "@/types/property";

export const Renovations = async () => {
	const { data }: { data: Property[] } = await sanityFetch({
		query: PROPERTIES_QUERY,
	});

	return (
		<section
			id="renovations"
			className="h-screen min-h-fit flex flex-col bg-grey__darker"
		>
			<h2 className="responsive mb-4 text-grey__lightest">Renovations</h2>
			<PropertyShowcase properties={data} />
		</section>
	);
};
