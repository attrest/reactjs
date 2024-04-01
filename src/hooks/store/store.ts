import { configureStore } from "@reduxjs/toolkit";
import contentNavReducer from "@/features/sub-content/subContentSlice";

export const store = configureStore({
  reducer: {
    contentMenu: contentNavReducer,
  },
});

// RootState 타입 정의
export type RootState = ReturnType<typeof store.getState>;
