import Fetcher from "../Fetcher";
import { TConfirmSignup, TRefreshToken, TSignin, TSignup } from "./type";

// signup
export const signup = (data: TSignup["requestType"]) => {
  return Fetcher.init<TSignup>(
    "POST",
    "https://8b9990jfmk.execute-api.ap-southeast-2.amazonaws.com/dev/signup"
  )
    .withJsonPaylad(data)
    .fetchData();
};

// confirm-signup
export const confirmSignup = (data: TConfirmSignup["requestType"]) => {
  return Fetcher.init<TConfirmSignup>(
    "POST",
    "https://8b9990jfmk.execute-api.ap-southeast-2.amazonaws.com/dev/confirm-signup"
  )
    .withJsonPaylad(data)
    .fetchData();
};

// signin
export const signin = (data: TSignin["requestType"]) => {
  return Fetcher.init<TSignin>(
    "POST",
    "https://8b9990jfmk.execute-api.ap-southeast-2.amazonaws.com/dev/signin"
  )
    .withJsonPaylad(data)
    .fetchData();
};

// /refresh-token
export const refreshToken = (data: TRefreshToken["requestType"]) => {
  return Fetcher.init<TRefreshToken>(
    "POST",
    "https://8b9990jfmk.execute-api.ap-southeast-2.amazonaws.com/dev/refresh-token"
  )
    .withJsonPaylad(data)
    .fetchData();
};
