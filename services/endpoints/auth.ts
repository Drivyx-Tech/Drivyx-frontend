import Fetcher from "../Fetcher";
import { TConfirmSignup, TRefreshToken, TSignin, TSignup } from "./type";

const base = process.env.NEXT_PUBLIC_LOCAL || process.env.NEXT_PUBLIC_AWS_DEV;

// signup
export const signup = (data: TSignup["requestType"]) => {
  return Fetcher.init<TSignup>("POST", base + "/signup")
    .withJsonPaylad(data)
    .fetchData();
};

// confirm-signup
export const confirmSignup = (data: TConfirmSignup["requestType"]) => {
  return Fetcher.init<TConfirmSignup>("POST", base + "/confirm-signup")
    .withJsonPaylad(data)
    .fetchData();
};

// signin
export const signin = (data: TSignin["requestType"]) => {
  return Fetcher.init<TSignin>("POST", base + "/signin")
    .withJsonPaylad(data)
    .fetchData();
};

// /refresh-token
export const refreshToken = (data: TRefreshToken["requestType"]) => {
  return Fetcher.init<TRefreshToken>("POST", base + "/refresh-token")
    .withJsonPaylad(data)
    .fetchData();
};
