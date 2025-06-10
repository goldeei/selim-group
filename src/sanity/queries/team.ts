import { defineQuery } from "next-sanity";

const ALL_TEAM_MEMBERS_QUERY = defineQuery(`*[
  _type == "teamMember"
] | order(orderRank asc)`);

export const TEAM_QUERY = {
	all: ALL_TEAM_MEMBERS_QUERY,
};
