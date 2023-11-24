import Fetcher from "../Fetcher";
import { refreshToken } from "./auth";
import { TUser } from "./type";

// getUser
export const getUser = () => {
  return Fetcher.init<TUser>(
    "GET",
    "https://8b9990jfmk.execute-api.ap-southeast-2.amazonaws.com/dev/user"
  )
    .withCurrentToken()
    .fetchData();
};
