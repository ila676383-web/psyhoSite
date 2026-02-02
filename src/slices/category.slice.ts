
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: {category: "books" | "movies"} = {category: "books"};
export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<"books" | "movies">) => {
        state.category = action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;
export const reducer = categorySlice.reducer;
