import Fetcher from "../Fetcher";
import { TCreateQuery } from "./type";

const base = process.env.NEXT_PUBLIC_LOCAL || process.env.NEXT_PUBLIC_AWS_DEV;

// create query
export const createVisitorQuery = (data: TCreateQuery["requestType"]) => {
  return Fetcher.init<TCreateQuery>("POST", base + "/query")
    .withJsonPaylad(data)
    .fetchData();
};
