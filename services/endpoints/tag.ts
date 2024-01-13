import Fetcher from "../Fetcher";
import { TTag } from "./type";

const base = process.env.NEXT_PUBLIC_AWS_DEV;

// getTags
export const getTags = () => {
  return Fetcher.init<TTag>("GET", base + "/tags").fetchData();
};
