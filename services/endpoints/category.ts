import Fetcher from "../Fetcher";
import { TCategory } from "./type";

// getCategories
export const getCategories = () => {
  return Fetcher.init<TCategory>(
    "GET",
    "https://8b9990jfmk.execute-api.ap-southeast-2.amazonaws.com/dev/categories"
  ).fetchData();
};
