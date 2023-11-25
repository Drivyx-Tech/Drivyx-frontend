export type User = {
  id: string;
  given_name: string;
  family_name: string;
  email: string;
  status: string;
  updated_at: string;
  created_at: string;
};

export type Company = {
  id: string;
  user_id: string;
  company_name: string;
  contact_number: string;
  company_size: string;
  industry: string;
  location: string;
  company_profile_icon: string;
  website_url: string;
  annual_revenue: string;
  description: string;
};

export type Category = {
  id: string;
  category_name: string;
  created_at: string;
  updated_at: string;
  subCategories: SubCategory[];
};

export type SubCategory = {
  id: string;
  category_id: string;
  subCategory_name: string;
  created_at: string;
  updated_at: string;
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

// ===================================================
// ===================================================
// /refresh-token
// ===================================================
type RefreshTokenReq = {
  refreshToken: string;
};

type RefreshTokenRes = {
  AccessToken: string;
};

export type TRefreshToken = TEndpoint<RefreshTokenReq, RefreshTokenRes>;

// ###################################################
// # user                                            #
// ###################################################
// ===================================================
// /user
// ===================================================
export type UserRes = {
  result: {
    statusCode: number;
    message: string;
    detail: { user: User; company: Company };
  };
};

export type TUser = TEndpoint<{}, UserRes>;

// ###################################################
// # company                                         #
// ###################################################
// ===================================================
// /company
// ===================================================
export type CompanyReq = Company;

export type CompanyRes = {
  result: {
    statusCode: number;
    message: string;
    detail: Company;
  };
};

export type TCompany = TEndpoint<{}, CompanyRes>;

// ###################################################
// # category                                         #
// ###################################################
// ===================================================
// /categories
// ===================================================
export type CategoryRes = {
  result: {
    statusCode: number;
    message: string;
    detail: { categories: Category[] };
  };
};

export type TCategory = TEndpoint<{}, CategoryRes>;
