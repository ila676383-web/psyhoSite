"use client"
import { useState } from "react";
import { Provider } from "react-redux";
import { AppStore, store } from "./store";

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [storeRef] = useState<AppStore>(() => store());

  return <Provider store={storeRef}>{children}</Provider>;
};

export default StoreProvider;
