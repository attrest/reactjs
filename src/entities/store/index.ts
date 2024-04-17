import { configureStore } from "@reduxjs/toolkit";
import globalReducers from "@/entities/store/globalSlice";
import contentNavReducer from "@/entities/store/subContentSlice";

export const store = configureStore({
  reducer: {
    global: globalReducers,
    contentMenu: contentNavReducer,
  },
});

// RootState 타입 정의
export type RootState = ReturnType<typeof store.getState>;
