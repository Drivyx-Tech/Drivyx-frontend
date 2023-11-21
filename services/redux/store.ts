import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import persistStore from "redux-persist/es/persistStore";
import tokensReducer from "./tokens.reducer";

// Define a fallback storage if window.localStorage is not available
const fallbackStorage: Storage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {},
  key: () => null,
  length: 0,
};

const persistConfig = {
  key: "Drixyv",
  storage:
    typeof window !== "undefined" ? window.localStorage : fallbackStorage,
  // blacklist: ["tmpStore"],
  timeout: 1000000,
} as const; // Assert the type here

const reducers = combineReducers({
  tokens: tokensReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,

  // I honestly have no idea what it does, gonna research that over the weekends
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
export const persistor = persistStore(store);
