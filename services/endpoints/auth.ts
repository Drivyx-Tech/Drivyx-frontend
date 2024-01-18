import Fetcher from "../Fetcher";
import {
  TConfirmSignup,
  TForgetPassword,
  TRefreshToken,
  TResetPassword,
  TSignin,
  TSignout,
  TSignup,
} from "./type";

const base = process.env.NEXT_PUBLIC_AWS_DEV;

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

// signout
export const signout = (data: TSignout["requestType"]) => {
  return Fetcher.init<TSignout>("POST", base + "/signout")
    .withCurrentToken()
    .withJsonPaylad(data)
    .fetchData();
};

// /refresh-token
export const refreshToken = (data: TRefreshToken["requestType"]) => {
  return Fetcher.init<TRefreshToken>("POST", base + "/refresh-token")
    .withJsonPaylad(data)
    .fetchData();
};

// /forget-password
export const forgetPassword = (data: TForgetPassword["requestType"]) => {
  return Fetcher.init<TForgetPassword>("POST", base + "/forget-password")
    .withJsonPaylad(data)
    .fetchData();
};

// /reset-password
export const resetPassword = (data: TResetPassword["requestType"]) => {
  return Fetcher.init<TResetPassword>("POST", base + "/reset-password")
    .withJsonPaylad(data)
    .fetchData();
};
