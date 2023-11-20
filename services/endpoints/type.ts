export type User = {
  id: string;
  given_name: string;
  family_name: string;
  email: string;
  status: string;
  updated_at: string;
  created_at: string;
};

// Generic Type
export type TEndpoint<Req, Res> = {
  requestType: Req;
  responseType: Res;
};

// ###################################################
// # Auth                                            #
// ###################################################
// ===================================================
// /signup
// ===================================================
export type SignupReq = {
  given_name: string;
  family_name: string;
  email: string;
  password: string;
};

export type SignupRes = {
  result: {
    userId: string;
  };
};

export type TSignup = TEndpoint<SignupReq, SignupRes>;

// ===================================================
// ===================================================
// /confirm-signup
// ===================================================
export type ConfirmSignupReq = {
  email: string;
  password: string;
  userId: string;
  code: string;
};

export type ConfirmSignupRes = {
  AccessToken: string;
  RefreshToken: string;
};

export type TConfirmSignup = TEndpoint<ConfirmSignupReq, ConfirmSignupRes>;

// ===================================================
// ===================================================
// /signin
// ===================================================
export type SigninReq = {
  email: string;
  password: string;
};

export type SigninRes = {
  AccessToken: string;
  RefreshToken: string;
};

export type TSignin = TEndpoint<SigninReq, SigninRes>;

// ###################################################
// # user                                            #
// ###################################################
// ===================================================
// /user
// ===================================================
export type UserRes = {
  result: User;
};

export type TUser = TEndpoint<{}, UserRes>;
