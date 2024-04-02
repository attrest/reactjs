// globalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "ADC FE Docs",
  isMobile: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setMobileState: (state, action) => {
      state.isMobile = action.payload;
    },
  },
});

export const { setName, setMobileState } = globalSlice.actions;
export default globalSlice.reducer;
