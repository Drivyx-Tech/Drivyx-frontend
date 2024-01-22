import Fetcher from "../Fetcher";
import { IUpdateUserIcon, TUpdateUser, TUser } from "./type";

const base = process.env.NEXT_PUBLIC_AWS_DEV;

// getUser
export const getUser = () => {
  return Fetcher.init<TUser>("GET", base + "/user")
    .withCurrentToken()
    .fetchData();
};

// updateUser
export const updateUser = (data: TUpdateUser["requestType"]) => {
  return Fetcher.init<TUpdateUser>("PUT", base + "/user")
    .withCurrentToken()
    .withJsonPaylad(data)
    .fetchData();
};

// updateUserIcon
export const updateUserIcon = (data: IUpdateUserIcon["requestType"]) => {
  return Fetcher.init<IUpdateUserIcon>("POST", base + "/update-user-icon")
    .withCurrentToken()
    .withJsonPaylad(data)
    .fetchData();
};
