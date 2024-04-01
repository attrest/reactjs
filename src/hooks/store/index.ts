import { configureStore } from "@reduxjs/toolkit";
import globalReducers from "@/hooks/store/globalSlice/globalSlice";
import contentNavReducer from "@/hooks/store/subContentSlice/subContentSlice";

export const store = configureStore({
  reducer: {
    global: globalReducers,
    contentMenu: contentNavReducer,
  },
});

// RootState 타입 정의
export type RootState = ReturnType<typeof store.getState>;
