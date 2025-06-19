import { Section } from "@/components/common/section";
import { PropertyShowcase } from "@/components/property-showcase";
import { MAIN_PAGE_SECTIONS } from "@/lib/constants";
import { sanityFetch } from "@/sanity/live";
import { PROPERTIES_QUERY } from "@/sanity/queries";
import { Property } from "@/types/property";

export const Renovations = async () => {
	const { data }: { data: Property[] } = await sanityFetch({
		query: PROPERTIES_QUERY,
	});

	return (
		<Section
			id={MAIN_PAGE_SECTIONS.renovations.id}
			className="flex flex-col bg-grey-darker h-screen"
		>
			<h2 className="responsive mb-4 text-grey-lightest">
				{MAIN_PAGE_SECTIONS.renovations.title}
			</h2>
			<PropertyShowcase properties={data} />
		</Section>
	);
};
