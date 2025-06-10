import { defineQuery } from "next-sanity";

const ALL_SERVICES_QUERY = defineQuery(`*[
  _type == "service"
] | order(orderRank asc)`);

export const SERVICES_QUERY = {
	all: ALL_SERVICES_QUERY,
};
