import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: {value: boolean} = {value: false};
export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setIsActive: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },

  },
});

export const { setIsActive } = formSlice.actions;
export const reducer = formSlice.reducer;
