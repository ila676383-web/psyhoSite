import { configureStore } from "@reduxjs/toolkit";
import { reducer as categoryReducer } from "@/slices/category.slice";
import { reducer as formReducer } from "@/slices/form.slice";

export const store = () => {
  return configureStore({
    reducer: {
      form: formReducer,
      category: categoryReducer,
    },
  });
};
export type AppStore = ReturnType<typeof store>;
export type AppStoreDispatch = AppStore["dispatch"];
export type RootState = ReturnType<AppStore["getState"]>;
