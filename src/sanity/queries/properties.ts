import { defineQuery } from "next-sanity";

import { IMAGE_FRAGMENT } from "./fragments";

// Base query for all properties with complete image data
const PROPERTIES_QUERY = defineQuery(`
  *[_type == "property"] | order(_createdAt desc) {
    _id,
    title,
    description,
    altText,
    ${IMAGE_FRAGMENT}
  }
`);

// Search query for properties with complete image data
const PROPERTIES_SEARCH_QUERY = defineQuery(`
  *[_type == "property" && (
    title match $searchTerm + "*" ||
    description match $searchTerm + "*" ||
    altText match $searchTerm + "*"
  )] | order(_createdAt desc) {
    _id,
    title,
    description,
    altText,
    ${IMAGE_FRAGMENT}
  }
`);

// Single property query with complete image data
const PROPERTY_BY_ID_QUERY = defineQuery(`
  *[_type == "property" && _id == $id][0] {
    _id,
    title,
    description,
    altText,
    ${IMAGE_FRAGMENT}
  }
`);

const PROPERTY_PAGE_QUERY = defineQuery(`
  *[_type == "propertyPage" && title == $pageTitle][0] {
    _id,
    title,
    description,
    properties[]-> {
      _id,
      title,
      description,
      altText,
     ${IMAGE_FRAGMENT}
    }
  }
`);

// Get all property pages (for navigation/listing)
const PROPERTY_PAGES_QUERY = defineQuery(`
  *[_type == "propertyPage"] | order(title asc) {
    _id,
    title,
    description,
    "propertyCount": count(properties)
  }
`);

export {
	PROPERTIES_QUERY,
	PROPERTIES_SEARCH_QUERY,
	PROPERTY_BY_ID_QUERY,
	PROPERTY_PAGE_QUERY,
	PROPERTY_PAGES_QUERY,
};
