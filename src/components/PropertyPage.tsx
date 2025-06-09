import { sanityFetch } from "@/sanity/live";
import { PROPERTY_PAGE_QUERY, PROPERTY_PAGES_QUERY } from "@/sanity/queries";
import {
	PropertyPageQueryResult,
	PropertyPagesQueryResult,
} from "@/types/property";

import { PropertyShowcase } from "./property-showcase";

export const PropertyPage = async () => {
	const { data: propertyPages }: { data: PropertyPagesQueryResult } =
		await sanityFetch({
			query: PROPERTY_PAGES_QUERY,
		});

	const propertyPagesWithDetails: PropertyPageQueryResult[] = await Promise.all(
		propertyPages.map(async (page) => {
			const { data } = await sanityFetch({
				query: PROPERTY_PAGE_QUERY,
				params: { pageTitle: page.title },
			});
			return data;
		})
	);

	return (
		<>
			{propertyPagesWithDetails.map((propertyPage) => {
				const { _id, title, description, properties } = propertyPage;
				return (
					<section
						key={_id}
						id="renovations"
						className="h-screen min-h-fit flex flex-col bg-grey__darker"
					>
						<h2 className="responsive mb-4 text-grey__lightest">{title}</h2>
						{description && (
							<p className="responsive mb-4 text-grey__lightest">
								{description}
							</p>
						)}
						<PropertyShowcase properties={properties} />
					</section>
				);
			})}
		</>
	);
};
