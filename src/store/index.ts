import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import newsSlice from "./news-slice";

const store = configureStore({
  reducer: newsSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
