import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./modals";
import { listSlice } from "./lists";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [listSlice.name],
};
const rootReducer = combineReducers({
  [modalSlice.name]: modalSlice.reducer,
  [listSlice.name]: listSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);

export type RootDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
