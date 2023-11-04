import { PortableTextBlock } from "sanity";
import { Category } from "./category";
import { SubCategory } from "./subCategory";
import { Tag } from "./tag";

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
  subCategory: SubCategory;
  tags: Tag[];
};
