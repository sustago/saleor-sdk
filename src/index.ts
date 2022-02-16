import { ApolloClient } from "apollo-client";

import { SaleorAPI } from "./api";
import { Config, ConfigInput, ApolloConfigInput } from "./types";
import APIProxy from "./api/APIProxy";
import { createSaleorLinks } from "./links";
import { createSaleorClient } from "./client";
import { createSaleorCache } from "./cache";
import { defaultConfig } from "./config";

interface CreateAPIResult {
  api: SaleorAPI;
  apiProxy: APIProxy;
  apolloClient: ApolloClient<any>;
}

export class SaleorManager {
  public config: Config;

  private apolloConfig: ApolloConfigInput;

  private apiProxy?: APIProxy;

  private api?: SaleorAPI;

  private apolloClient?: ApolloClient<any>;

  private tokenRefreshing: boolean = false;

  private apiChangeListener?: (api?: SaleorAPI) => any;

  constructor(config: ConfigInput, apolloConfig?: ApolloConfigInput) {
    this.config = {
      ...defaultConfig,
      ...config,
      loadOnStart: {
        ...defaultConfig.loadOnStart,
        ...config?.loadOnStart,
      },
    };
    this.apolloConfig = {
      ...apolloConfig,
    };
  }

  /**
   * Use this method to obtain current API and optionally listen to its update on occured changes within it.
   * @param apiChangeListener Function called to get an API and called on every API update.
   */
  connect(apiChangeListener?: (api?: SaleorAPI) => any): SaleorAPI {
    if (!this.api || !this.apiProxy || !this.apolloClient) {
      const { api, apiProxy, apolloClient } = SaleorManager.createApi(
        this.config,
        this.apolloConfig,
        this.tokenExpirationCallback,
        this.onSaleorApiChange
      );

      this.api = api;
      this.apiProxy = apiProxy;
      this.apolloClient = apolloClient;
    }

    if (apiChangeListener) {
      this.apiChangeListener = apiChangeListener;
    }

    return this.api;
  }

  private static createApi = (
    config: Config,
    apolloConfig: ApolloConfigInput,
    tokenExpirationCallback: () => void,
    onSaleorApiChange: () => void
  ): CreateAPIResult => {
    const { cache, links, client, options } = apolloConfig;

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

    const apiProxy = new APIProxy(apolloClient);
    const api = new SaleorAPI(
      apolloClient,
      apiProxy,
      config,
      onSaleorApiChange
    );

    return { api, apiProxy, apolloClient };
  };

  private tokenExpirationCallback = async () => {
    if (!this.tokenRefreshing) {
      this.tokenRefreshing = true;

      const tokenRefreshResult = await this.api?.auth.refreshSignInToken();
      if (!tokenRefreshResult?.data?.token || tokenRefreshResult?.dataError) {
        await this.api?.auth.signOut();
      }

      this.tokenRefreshing = false;
    }
  };

  private onSaleorApiChange = () => {
    if (this.apiChangeListener) {
      this.apiChangeListener(this.api);
    }
  };
}

export * from "./auth";
export * from "./cache";
export * from "./links";
export * from "./client";
export * from "./gqlTypes/globalTypes";

// FIXME: It's imported here because it's not a monorepo yet
/* eslint-disable import/no-cycle */
export * from "./react";
/* eslint-enable */
