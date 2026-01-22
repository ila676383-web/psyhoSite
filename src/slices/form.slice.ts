import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: boolean = false;
export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setIsActive: (state, action: PayloadAction<boolean>) => {
      return action.payload;
    },
    isActive: (state) => state
  },
});

export const { isActive,setIsActive } = formSlice.actions;
export const reducer = formSlice.reducer;
