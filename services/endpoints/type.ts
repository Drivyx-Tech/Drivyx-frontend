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

export type IconFile = {
  base64: string;
  ext: string;
  type: string;
  name?: string;
  size?: string;
};

export type Category = {
  id: string;
  category_name: string;
  created_at: string;
  updated_at: string;
  subCategories: SubCategory[];
  tags: Tag[];
};

export type SubCategory = {
  id: string;
  category_id: string;
  subCategory_name: string;
  created_at: string;
  updated_at: string;
};

export type Tag = {
  id: string;
  category_id: string;
  tag_name: string;
  created_at: string;
  updated_at: string;
};

export type TagsOnProjects = {
  project_id: string;
  tag_id: string;
  tag_name: string;
  created_at: string;
  updated_at: string;
};

export type Project = {
  id: string;
  user_id: string;
  status: string;
  project_name: string;
  category_id: string;
  subCategory_id: string;
  funding_goal: string;
  excerpt: string;
  project_goal: string;
  desc: string;
  outcome: string;
  contributions: string;
  created_at: string;
  updated_at: string;
  category?: Category;
  subCategory?: SubCategory;
  tagsOnProjects?: TagsOnProjects[];
  company?: Company;
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
    detail: {
      userId: string;
    };
    statusCode: number;
    title: string;
    message: string;
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
  detail: {
    AccessToken: string;
    RefreshToken: string;
  };
  message: string;
  statusCode: number;
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
  detail: {
    AccessToken: string;
    RefreshToken: string;
  };
  statusCode: number;
  message: string;
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

// ===================================================
// ===================================================
// /company
// ===================================================
export type UpdateIcon = {
  iconFile: IconFile;
};

export type UpdateIconRes = {
  statusCode: number;
  message: string;
  detail: {
    company_profile_url: string;
  };
};

export type TUpdateIcon = TEndpoint<UpdateIcon, UpdateIconRes>;

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

// ###################################################
// # category                                         #
// ###################################################
// ===================================================
// /categories
// ===================================================
export type TagRes = {
  result: {
    statusCode: number;
    message: string;
    detail: { tags: Tag[] };
  };
};

export type TTag = TEndpoint<{}, TagRes>;

// ###################################################
// # project                                         #
// ###################################################
// ===================================================
// /project
// ===================================================
export type ProjectReq = {
  category_id: string;
  subCategory_id: string;
  tag_ids: string[];
  project: {
    project_name: string;
    funding_goal: string;
    excerpt: string;
    project_goal: string;
    desc: string;
    outcome: string;
    contributions: string;
  };
};

export type ProjectRes = {
  result: {
    statusCode: number;
    message: string;
    detail: {
      newProject: Project;
      tags: {
        project_id: string;
        tag_id: string;
        created_at: string;
        updated_at: string;
      }[];
    };
  };
};

export type TProject = TEndpoint<ProjectReq, ProjectRes>;
// ===================================================
// ===================================================
// /projects-by-user-id
// ===================================================
export type GetUserProjectsReq = {
  skip?: string;
  take?: string;
};

export type GetUserProjectsRes = {
  result: {
    statusCode: number;
    message: string;
    detail: {
      projects: Project[];
      total: number;
    };
  };
};

export type TGetUserProjects = TEndpoint<
  GetUserProjectsReq,
  GetUserProjectsRes
>;

// ===================================================
// ===================================================
// get all projects --- /projects
// ===================================================
export type GetAllProjects = {
  query?: string;
  category_id?: any;
  subCategory_id?: any;
  tag_ids?: any;
  skip: string;
  take: string;
};

export type GetAllProjectsRes = {
  result: {
    statusCode: number;
    message: string;
    detail: {
      projects: Project[];
      total: number;
    };
  };
};

export type TGetAllProjects = TEndpoint<GetAllProjects, GetAllProjectsRes>;
