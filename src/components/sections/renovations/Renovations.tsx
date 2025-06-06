import { PropertyShowcase } from "@/components/property-showcase";
import { Property } from "@/components/property-showcase/types";
import { sanityFetch } from "@/sanity/live";
import { PROPERTIES_QUERY, PropertyQueryResult } from "@/sanity/queries";

export const Renovations = async () => {
	const { data } = await sanityFetch({ query: PROPERTIES_QUERY });

	const properties: Property[] = data.map((property: PropertyQueryResult) => ({
		id: property._id,
		srcPath: property.imageUrl,
		altText: property.altText,
		name: property.title,
		description: property.description,
		width: property.imageMetadata?.dimensions?.width ?? 800,
		height: property.imageMetadata?.dimensions?.height ?? 600,
	}));

	return (
		<section
			id="renovations"
			className="h-screen min-h-fit flex flex-col bg-grey__darker"
		>
			<h2 className="responsive mb-4 text-grey__lightest">Renovations</h2>
			<PropertyShowcase properties={properties} />
		</section>
	);
};
