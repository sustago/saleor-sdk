import { ApolloClient } from "apollo-client";

import { SaleorAPI } from "./api";
import { Config, ConfigInput } from "./types";
import APIProxy from "./api/APIProxy";
import { defaultConfig } from "./config";

interface CreateAPIResult {
  api: SaleorAPI;
  apiProxy: APIProxy;
  apolloClient: ApolloClient<any>;
}

export class SaleorManager {
  public config: Config;

  private apiProxy?: APIProxy;

  private api?: SaleorAPI;

  private apolloClient?: ApolloClient<any>;

  private apiChangeListener?: (api?: SaleorAPI) => any;

  constructor(config: ConfigInput) {
    this.config = {
      ...defaultConfig,
      ...config,
      loadOnStart: {
        ...defaultConfig.loadOnStart,
        ...config?.loadOnStart,
      },
    };
  }

  /**
   * Use this method to obtain current API and optionally listen to its update on occured changes within it.
   * @param apolloClient Apollo Client.
   * @param apiChangeListener Function called to get an API and called on every API update.
   */
  connect(
    apolloClient: ApolloClient<any>,
    apiChangeListener?: (api?: SaleorAPI) => any
  ): SaleorAPI {
    if (!this.api || !this.apiProxy || !this.apolloClient) {
      const { api, apiProxy } = SaleorManager.createApi(
        this.config,
        apolloClient,
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
    apolloClient: ApolloClient<any>,
    onSaleorApiChange: () => void
  ): CreateAPIResult => {
    const apiProxy = new APIProxy(apolloClient);
    const api = new SaleorAPI(
      apolloClient,
      apiProxy,
      config,
      onSaleorApiChange
    );

    return { api, apiProxy, apolloClient };
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
