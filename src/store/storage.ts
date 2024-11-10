import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./modals";
import { listSlice } from "./lists";

const RootReducer = combineReducers({
  [modalSlice.name]: modalSlice.reducer,
  [listSlice.name]: listSlice.reducer,
});

export const store = configureStore({
  reducer: RootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
