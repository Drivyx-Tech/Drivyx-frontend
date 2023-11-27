import Fetcher from "../Fetcher";
import { TProject } from "./type";

const base = process.env.NEXT_PUBLIC_LOCAL || process.env.NEXT_PUBLIC_AWS_DEV;

// createCompany
export const createProject = (data: TProject["requestType"]) => {
  return Fetcher.init<TProject>("POST", base + "/project")
    .withCurrentToken()
    .withJsonPaylad(data)
    .fetchData();
};
