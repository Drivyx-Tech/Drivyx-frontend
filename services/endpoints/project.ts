import Fetcher from "../Fetcher";
import { TGetUserProjects, TProject } from "./type";

const base = process.env.NEXT_PUBLIC_LOCAL || process.env.NEXT_PUBLIC_AWS_DEV;

// createCompany
export const createProject = (data: TProject["requestType"]) => {
  return Fetcher.init<TProject>("POST", base + "/project")
    .withCurrentToken()
    .withJsonPaylad(data)
    .fetchData();
};

// getProjectByUserId
export const getProjectByUserId = (params: TGetUserProjects["requestType"]) => {
  return Fetcher.init<TGetUserProjects>("GET", base + "/projects-by-user-id")
    .withCurrentToken()
    .withParams(params)
    .fetchData();
};
