import Fetcher from "../Fetcher";
import { TCompany } from "./type";

// getCompany
export const getCompany = () => {
  return Fetcher.init<TCompany>(
    "GET",
    "https://8b9990jfmk.execute-api.ap-southeast-2.amazonaws.com/dev/company"
  )
    .withCurrentToken()
    .fetchData();
};

// createCompany
export const createCompany = (data: TCompany["requestType"]) => {
  return Fetcher.init<TCompany>(
    "POST",
    "https://8b9990jfmk.execute-api.ap-southeast-2.amazonaws.com/dev/company"
  )
    .withCurrentToken()
    .withJsonPaylad(data)
    .fetchData();
};

// updateCompany
export const updateCompany = (data: TCompany["requestType"]) => {
  return Fetcher.init<TCompany>(
    "PUT",
    "https://8b9990jfmk.execute-api.ap-southeast-2.amazonaws.com/dev/company"
  )
    .withCurrentToken()
    .withJsonPaylad(data)
    .fetchData();
};
