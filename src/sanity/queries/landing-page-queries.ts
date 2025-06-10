import { defineQuery } from "next-sanity";

const SUBTITLE_QUERY = defineQuery(`*[
  _type == "landingPage" 
  && defined(subtitle)
][0].subtitle`);

export const LANDING_PAGE_QUERY = {
	subtitle: SUBTITLE_QUERY,
};
