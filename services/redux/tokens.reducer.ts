import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTokens = {
  currentToken: string;
  refreshToken: string;
};

const init: TTokens = {
  currentToken: "",
  refreshToken: "",
};

const tokenSlice = createSlice({
  name: "tokens",
  initialState: init,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      (async () => {
        await localStorage.setItem("token", action.payload);
      })();

      state.currentToken = action.payload;
    },
    setRefresh: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
    clearToken: () => init,
  },
});

export default tokenSlice.reducer;
export const tokenAction = tokenSlice.actions;
