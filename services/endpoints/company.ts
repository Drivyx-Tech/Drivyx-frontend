import Fetcher from "../Fetcher";
import { TCompany, TCompanyStatus, TUpdateIcon } from "./type";

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

// updateIcon
export const updateIcon = (data: TUpdateIcon["requestType"]) => {
  return Fetcher.init<TUpdateIcon>("POST", base + "/update-icon")
    .withCurrentToken()
    .withJsonPaylad(data)
    .fetchData();
};

// check company status
export const checkCompanyStatus = () => {
  return Fetcher.init<TCompanyStatus>("GET", base + "/company-status")
    .withCurrentToken()
    .fetchData();
};
