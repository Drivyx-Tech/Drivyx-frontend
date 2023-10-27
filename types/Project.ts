import { PortableTextBlock } from "sanity";
import { Category } from "./category";
import { Tag } from "./tag";

export type Project = {
  _id: string;
  publishedAt: string;
  projectTitle: string;
  slug: string;
  coverImage: string;
  excerpt: string;
  website: string;
  client: string;
  body: PortableTextBlock[];
  subCategory: Category;
  tags: Tag[];
};
