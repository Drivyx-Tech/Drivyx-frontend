import Fetcher from "../Fetcher";
import { TConfirmSignup, TSignin, TSignup } from "./type";

// signup
export const signup = (data: TSignup["requestType"]) => {
  return Fetcher.init<TSignup>("POST", "/signup")
    .withJsonPaylad(data)
    .fetchData();
};

// confirm-signup
export const confirmSignup = (data: TConfirmSignup["requestType"]) => {
  return Fetcher.init<TConfirmSignup>("POST", "/confirm-signup")
    .withJsonPaylad(data)
    .fetchData();
};

// signin
export const signin = (data: TSignin["requestType"]) => {
  return Fetcher.init<TSignin>("POST", "/signin")
    .withJsonPaylad(data)
    .fetchData();
};
