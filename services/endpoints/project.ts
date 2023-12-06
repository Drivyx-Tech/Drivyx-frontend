import Fetcher from "../Fetcher";
import {
  TGetAllProjects,
  TGetUserProjects,
  TProject,
  TgetProjectByProjectId,
} from "./type";

const base = process.env.NEXT_PUBLIC_LOCAL || process.env.NEXT_PUBLIC_AWS_DEV;

// createCompany
export const createProject = (data: TProject["requestType"]) => {
  return Fetcher.init<TProject>("POST", base + "/project")
    .withCurrentToken()
    .withJsonPaylad(data)
    .fetchData();
};

//getProjectByProjectId
export const getProjectByProjectId = (
  params: TgetProjectByProjectId["requestType"]
) => {
  return Fetcher.init<TgetProjectByProjectId>("GET", base + "/project")
    .withParams(params)
    .fetchData();
};

// getProjectByUserId
export const getProjectByUserId = (params: TGetUserProjects["requestType"]) => {
  return Fetcher.init<TGetUserProjects>("GET", base + "/projects-by-user-id")
    .withCurrentToken()
    .withParams(params)
    .fetchData();
};

// get all projects with filter
export const getAllProjects = (params: TGetAllProjects["requestType"]) => {
  return Fetcher.init<TGetAllProjects>("GET", base + "/projects")
    .withParams(params)
    .fetchData();
};
