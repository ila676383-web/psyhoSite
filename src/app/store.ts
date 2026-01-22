import { reducer } from "@/slices/form.slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = () => {
  return configureStore({
    reducer,
  });
};

export type AppStore = ReturnType<typeof store>;
export type AppStoreDispatch = AppStore["dispatch"];
export type RootState = ReturnType<AppStore["getState"]>;
