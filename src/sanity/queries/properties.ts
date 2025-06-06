import { defineQuery } from "next-sanity";

import { SanityTypes } from "./index";

type PropertyQueryResult = Pick<
	SanityTypes.Property,
	"_id" | "title" | "description" | "altText"
> & {
	imageUrl: string;
	imageMetadata: {
		dimensions: {
			width: number;
			height: number;
		};
	} | null;
};

const PROPERTIES_QUERY = defineQuery(`
  *[_type == "property"] {
    _id,
    title,
    description,
    altText,
    "imageUrl": image.asset->url,
    "imageMetadata": image.asset->metadata
  }
`);

export { PROPERTIES_QUERY, type PropertyQueryResult };
