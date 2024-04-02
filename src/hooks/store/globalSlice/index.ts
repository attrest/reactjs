// globalSlice.js
import { createSlice } from "@reduxjs/toolkit";

interface MenuItemType {
  name: string;
  id: string;
  current?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "pc" | "mo";
}

interface InitialStateType {
  name: string;
  isMobile: boolean;
  headerMenu: MenuItemType[];
}

const initialState: InitialStateType = {
  name: "ADC FE Docs",
  isMobile: false,
  headerMenu: [
    { name: "Convention", id: "convention" },
    { name: "FSD", id: "fsd" },
    { name: "Tailwind", id: "tailwind" },
    { name: "Components", id: "components" },
  ],
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
    setHeaderMenu: (state, action) => {
      state.isMobile = action.payload;
    },
  },
});

export const { setName, setMobileState, setHeaderMenu } = globalSlice.actions;
export default globalSlice.reducer;
