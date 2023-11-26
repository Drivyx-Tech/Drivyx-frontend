import Fetcher from "../Fetcher";
import { TCategory } from "./type";

const base = process.env.NEXT_PUBLIC_LOCAL || process.env.NEXT_PUBLIC_AWS_DEV;

// getCategories
export const getCategories = () => {
  return Fetcher.init<TCategory>("GET", base + "/categories").fetchData();
};
