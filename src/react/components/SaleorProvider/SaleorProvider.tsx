import React, { useState, useEffect } from "react";

import { SaleorManager } from "../../..";
import { SaleorContext, SaleorContextType } from "../../context";

import { IProps } from "./types";

const SaleorProvider: React.FC<IProps> = ({
  apolloConfig,
  config,
  children,
}: IProps) => {
  const [context, setContext] = useState<SaleorContextType | null>(null);

  const getSaleorApiAndClient = async (manager: SaleorManager) => {
    const api = manager.connect(saleorAPI => {
      if (saleorAPI) {
        setContext({ api: saleorAPI, config });
      }
    });
    setContext({ api, config });
  };

  useEffect(() => {
    const manager = new SaleorManager(config, apolloConfig);

    getSaleorApiAndClient(manager);
  }, []);

  return (
    <SaleorContext.Provider value={context}>{children}</SaleorContext.Provider>
  );
};

SaleorProvider.displayName = "SaleorProvider";
export { SaleorProvider };
