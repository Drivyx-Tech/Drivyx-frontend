import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import persistStore from "redux-persist/es/persistStore";
import tokensReducer from "./tokens.reducer";
import storage from "redux-persist/lib/storage";
import tmpStoreReducer from "./tmpStore.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["tokens", "tmpStore"],
  // timeout: 1000000,
};

const reducers = combineReducers({
  tokens: tokensReducer,
  tmpStore: tmpStoreReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
export const persistor = persistStore(store);
