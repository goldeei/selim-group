export const IMAGE_FRAGMENT = `image {
      _type,
      asset-> {
        _id,
        _type,
        url,
        metadata {
          dimensions,
          lqip,
          blurHash
        }
      },
      hotspot, 
      crop 
    }` as const;
