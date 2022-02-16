import { InMemoryCache, defaultDataIdFromObject } from "apollo-cache-inmemory";

/**
 * Creates cache for Apollo client.
 */
export const createSaleorCache = () => {
  return new InMemoryCache({
    dataIdFromObject: obj => {
      // eslint-disable-next-line no-underscore-dangle
      if (obj.__typename === "Shop") {
        return "shop";
      }
      return defaultDataIdFromObject(obj);
    },
  });
};
