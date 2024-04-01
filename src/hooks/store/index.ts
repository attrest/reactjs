import { configureStore } from "@reduxjs/toolkit";
import globalReducers from "@/hooks/store/globalSlice";
import contentNavReducer from "@/hooks/store/subContentSlice";

export const store = configureStore({
  reducer: {
    global: globalReducers,
    contentMenu: contentNavReducer,
  },
});

// RootState 타입 정의
export type RootState = ReturnType<typeof store.getState>;
