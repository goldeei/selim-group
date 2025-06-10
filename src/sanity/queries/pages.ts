import { groq } from "next-sanity";

/**
 * Gets a singleton page by its schema type name
 * @param pageType - The schema type name (e.g., 'aboutUsPage', 'landingPage')
 * @returns GROQ query string
 */
export const getPageByType = (pageType: string) => groq`
  *[_type == "${pageType}"][0]{
    ...,
    teamMembers[]->{
      _id,
      name,
      description,
      certifications,
      image,
      "imageUrl": image.asset->url
    }
  }
`;
