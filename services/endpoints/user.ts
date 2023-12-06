import Fetcher from "../Fetcher";
import { refreshToken } from "./auth";
import { TUser } from "./type";

const base = process.env.NEXT_PUBLIC_LOCAL || process.env.NEXT_PUBLIC_AWS_DEV;

// getUser
export const getUser = () => {
  return Fetcher.init<TUser>("GET", base + "/user")
    .withCurrentToken()
    .fetchData();
};
