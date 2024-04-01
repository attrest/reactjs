// globalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "ACS FE Docs",
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setName } = globalSlice.actions;
export default globalSlice.reducer;
