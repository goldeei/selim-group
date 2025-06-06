export const IMAGE_FRAGMENT = `image {
      _type,
      asset {
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
        _type,
        x,
        y,
        height,
        width
      },
      crop {
        _type,
        top,
        bottom,
        left,
        right
      }
    }`;
