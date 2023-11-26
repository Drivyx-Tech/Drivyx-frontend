import Fetcher from "../Fetcher";
import { TCompany } from "./type";

const base = process.env.NEXT_PUBLIC_LOCAL || process.env.NEXT_PUBLIC_AWS_DEV;

// getCompany
export const getCompany = () => {
  return Fetcher.init<TCompany>("GET", base + "/company")
    .withCurrentToken()
    .fetchData();
};

// createCompany
export const createCompany = (data: TCompany["requestType"]) => {
  return Fetcher.init<TCompany>("POST", base + "/company")
    .withCurrentToken()
    .withJsonPaylad(data)
    .fetchData();
};

// updateCompany
// export const updateCompany = (data: TCompany["requestType"]) => {
//   return Fetcher.init<TCompany>("PUT", base + "/company")
//     .withCurrentToken()
//     .withJsonPaylad(data)
//     .fetchData();
// };
