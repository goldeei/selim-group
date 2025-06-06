import { defineQuery } from "next-sanity";

import { SanityTypes } from "./index";

type PropertyQueryResult = {
	_id: string;
	title: string | null;
	description: string | null;
	altText: string | null;
	image: {
		asset: {
			_id: string;
			url: string;
			metadata: {
				dimensions: {
					width: number;
					height: number;
				} | null;
			} | null;
		} | null;
		hotspot: SanityTypes.SanityImageHotspot | null;
		crop: SanityTypes.SanityImageCrop | null;
	} | null;
};

const PROPERTIES_QUERY = defineQuery(`
  *[_type == "property"] {
    _id,
    title,
    description,
    altText,
    image {
      _type,
      asset-> {
        _id,
        _type,
        url,
        metadata {
          dimensions {
            width,
            height
          },
          lqip,
          blurHash
        }
      },
      hotspot {
        x,
        y,
        height,
        width
      },
      crop {
        top,
        bottom,
        left,
        right
      }
    }
  }
`);

export { PROPERTIES_QUERY, type PropertyQueryResult };
