import { client } from "@/sanity/client";
import { defineLive } from "next-sanity";

export const { sanityFetch, SanityLive } = defineLive({
	client: client.withConfig({ apiVersion: "vX" }),
});
