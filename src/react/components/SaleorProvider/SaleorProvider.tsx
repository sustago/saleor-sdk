import React, { useState } from "react";

import { ApolloProvider } from "react-apollo";
import { SaleorManager } from "../../..";
import { SaleorContext, SaleorContextType } from "../../context";

import { IProps } from "./types";

const SaleorProvider: React.FC<IProps> = ({
  apolloConfig,
  config,
  children,
}: IProps) => {
  const [context, setContext] = useState<SaleorContextType | null>(null);

  const manager = new SaleorManager(config, apolloConfig);
  const { api, apolloClient } = manager.connect(saleorAPI => {
    if (saleorAPI) {
      setContext({ api: saleorAPI, config });
    }
  });
  setContext({ api, config });

  return (
    <SaleorContext.Provider value={context}>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </SaleorContext.Provider>
  );
};

SaleorProvider.displayName = "SaleorProvider";
export { SaleorProvider };
