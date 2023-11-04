import { PortableTextBlock } from "sanity";

export type Category = {
  _id: string;
  category: string;
  subCategories: [
    {
      _id: string;
      subCategory: string;
    }
  ];
};

export type SubCategory = {
  _id: string;
  subCategory: string;
  category: {
    _id: string;
    category: string;
  };
};

export type Tag = {
  _id: string;
  tag: string;
  category: {
    _id: string;
    category: string;
  };
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
