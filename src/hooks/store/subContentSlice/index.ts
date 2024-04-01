import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SubContentMenu {
  id?: string;
  title?: string;
  tag?: string;
}

interface SubContentMenuState {
  menus: SubContentMenu[];
}

const initialState: SubContentMenuState = {
  menus: [],
};

const subContentMenuSlice = createSlice({
  name: "subContentMenu",
  initialState,
  reducers: {
    // 메뉴 업데이트
    menuUpdate: (state, action: PayloadAction<SubContentMenu>) => {
      const index = state.menus.findIndex((menu) => menu.id === action.payload.id);
      if (index !== -1) {
        state.menus[index] = action.payload;
      }
    },
    // 메뉴 목록 초기화 혹은 새 데이터로 업데이트
    resetMenus: (state, action: PayloadAction<SubContentMenu[]>) => {
      state.menus = action.payload;
    },
  },
});

export const { menuUpdate, resetMenus } = subContentMenuSlice.actions;
export default subContentMenuSlice.reducer;
