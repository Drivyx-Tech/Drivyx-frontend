// This is essentially a landfill of temp vars

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ImgFile } from "../endpoints/type";

type TTmpStore = {
  user: {
    given_name: string;
    family_name: string;
    email: string;
    profile_url: string;
    job_title: string;
    status: string;
    company: {
      company_name: string;
      company_profile_url: string;
      type: string;
      contact_number: string;
      company_size: string;
      industry: string;
      website_url: string;
      location: string;
      annual_revenue: string;
      description: string;
      status?: string;
    };
  };

  project: {
    project_name: string;
    funding_goal: string;
    excerpt: string;
    project_goal: string;
    desc: string;
    outcome: string;
    contributions: string;
    coverFile?: ImgFile;
    category: {
      category_id: string;
      category_name?: string;
    };
    subCategory: {
      subCategory_id: string;
      subCategory_name?: string;
    };
    tags: {
      tag_id: string;
      tag_name?: string;
    }[];
    imageFiles?: ImgFile[];
  };
};

const init: TTmpStore = {
  user: {
    given_name: "",
    family_name: "",
    email: "",
    profile_url: "",
    job_title: "",
    status: "",
    company: {
      company_name: "",
      company_profile_url: "",
      type: "",
      contact_number: "",
      company_size: "",
      industry: "",
      website_url: "",
      location: "",
      annual_revenue: "",
      description: "",
      status: "",
    },
  },
  project: {
    project_name: "",
    funding_goal: "",
    excerpt: "",
    project_goal: "",
    desc: "",
    outcome: "",
    contributions: "",
    coverFile: undefined,
    category: {
      category_id: "",
      category_name: "",
    },
    subCategory: {
      subCategory_id: "",
      subCategory_name: "",
    },
    tags: [
      {
        tag_id: "",
        tag_name: "",
      },
    ],
    imageFiles: [],
  },
};

const tmpStoreSlice = createSlice({
  name: "tmpStore",
  initialState: init,
  reducers: {
    clearState: () => init,
    // clear project state
    clearProject: (state) => {
      state.project = init.project;
    },
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
