import { PortableTextBlock } from "sanity";

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

export type Tag = {
  _id: string;
  _type: string;
  tag: string;
  category: Category;
};

export type Project = {
  _id: string;
  publishedAt: string;
  projectTitle: string;
  slug: {
    current: string;
  };
  coverImage: string;
  excerpt: string;
  website: string;
  client: string;
  clientRole: string;
  body: PortableTextBlock[];
  category: any;
  subCategory: SubCategory;
  tags: Tag[];
};

export type Page = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  content: PortableTextBlock[];
};
