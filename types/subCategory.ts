import { Category } from "./category";

export type SubCategory = {
  _id: string;
  subCategory: string;
  category: {
    _id: string;
    category: string;
  };
};
