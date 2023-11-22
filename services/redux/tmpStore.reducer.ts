// This is essentially a landfill of temp vars

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTmpStore = {
  // profile info
  given_name: string;
  family_name: string;
  email: string;
  // company info
  company_name: string;
  company_profile_icon: string;
  contact_number: string;
  company_size: string;
  industry: string;
  website_url: string;
  location: string;
  annual_revenue: string;
  description: string;
};

const init: TTmpStore = {
  // profile info
  given_name: "",
  family_name: "",
  email: "",
  // company info
  company_name: "",
  company_profile_icon: "",
  contact_number: "",
  company_size: "",
  industry: "",
  website_url: "",
  location: "",
  annual_revenue: "",
  description: "",
};

const tmpStoreSlice = createSlice({
  name: "tmpStore",
  initialState: init,
  reducers: {
    clearState: () => init,
    setItem: {
      prepare: (
        ...args: [key: keyof TTmpStore, item: TTmpStore[keyof TTmpStore]]
      ) => {
        return { payload: args };
      },
      reducer: (
        state,
        action: PayloadAction<
          [key: keyof TTmpStore, item: TTmpStore[keyof TTmpStore]]
        >
      ) => {
        const [key, item] = action.payload;
        return { ...state, [key]: item };
      },
    },
    setState: (
      state,
      action: PayloadAction<TTmpStore | ((input: TTmpStore) => TTmpStore)>
    ) => {
      const { payload } = action;
      if (typeof payload === "object") return { ...payload };

      return payload(state);
    },
  },
});

export default tmpStoreSlice.reducer;
export const tmpStoreAction = tmpStoreSlice.actions;
