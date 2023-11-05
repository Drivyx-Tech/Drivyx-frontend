import { groq } from "next-sanity";

export const queryAllCategories = groq`*[_type == "category"]{
    _id,
    category,
    "subCategories": *[_type == "subCategory" && references(^._id)]{
      _id,
      subCategory
    } 
  }`;

export const queryAllTags = groq`*[_type == "tag"]`;

export const pathquery = groq`
*[_type == "project" && defined(slug.current)][].slug.current
`;

export type Category = {
  _id: string;
  _type: string;
  category: string;
};

export type SubCategory = {
  _id: string;
  _type: string;
  subCategory: string;
  category: Category;
};

export const queryAllProjects = groq`*[_type == "project"]{
    _id,
    projectTitle,
    slug,
    coverImage,
    "tags": tags[]->{
      _id,
      tag
    },
    "subCategory": subCategory->{
      _id,
      subCategory,
      "category": category->{
        _id,
        category
      }
    },
    client,
    clientRole,
    website,
    excerpt,
    body,
    publishedAt
  }`;

export const queryProjectBySlug = (slug: string) => {
  return groq`*[_type == "project" && slug.current == "${slug}"]{
    _id,
    projectTitle,
    slug,
    coverImage,
    "tags": tags[]->{
      _id,
      tag
    },
    "subCategory": subCategory->{
      _id,
      subCategory,
      "category": category->{
        _id,
        category
      }
    },
    client,
    clientRole,
    website,
    excerpt,
    body,
    publishedAt
  }`;
};
