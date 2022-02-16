import React, { useState, useEffect } from "react";

import { ApolloProvider } from "react-apollo";
import {
  createSaleorCache,
  createSaleorClient,
  createSaleorLinks,
  SaleorManager,
} from "../../..";
import { SaleorContext, SaleorContextType } from "../../context";

import { IProps } from "./types";

const SaleorProvider: React.FC<IProps> = ({
  apolloConfig,
  config,
  children,
}: IProps) => {
  const { cache, links, client, options } = apolloConfig || {};
  const [tokenRefreshing, setTokenRefreshing] = useState(false);
  const [context, setContext] = useState<SaleorContextType | null>(null);

  const tokenExpirationCallback = async () => {
    if (!tokenRefreshing) {
      setTokenRefreshing(true);

      const tokenRefreshResult = await context?.api?.auth.refreshSignInToken();
      if (!tokenRefreshResult?.data?.token || tokenRefreshResult?.dataError) {
        await context?.api?.auth.signOut();
      }

      setTokenRefreshing(false);
    }
  };

  const saleorCache = !client && cache ? cache : createSaleorCache();
  const saleorLinks =
    !client && links
      ? links
      : createSaleorLinks({
          apiUrl: config.apiUrl,
          tokenExpirationCallback,
        });
  const apolloClient =
    client || createSaleorClient(saleorCache, saleorLinks, options);

  const getSaleorApiAndClient = (manager: SaleorManager) => {
    const api = manager.connect(apolloClient, saleorAPI => {
      if (saleorAPI) {
        setContext({ api: saleorAPI, config });
      }
    });
    setContext({ api, config });
  };

  useEffect(() => {
    const manager = new SaleorManager(config);

    getSaleorApiAndClient(manager);
  }, []);

  return (
    <SaleorContext.Provider value={context}>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </SaleorContext.Provider>
  );
};

SaleorProvider.displayName = "SaleorProvider";
export { SaleorProvider };
