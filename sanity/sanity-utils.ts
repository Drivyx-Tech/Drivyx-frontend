import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import { projectId, dataset, apiVersion, useCdn } from "./config/client-config";
import { Page } from "@/types/Page";
import { Category } from "@/types/category";
import { Tag } from "@/types/tag";

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

export const getAllSubCategories = async (): Promise<Category[]> => {
  const query = `*[_type == "subCategory"]`;

  try {
    const response = await client.fetch(query);
    return response;
  } catch (error) {
    console.error("Error retrieving categories:", error);
    return [];
  }
};

export const getAllTags = async (): Promise<Tag[]> => {
  const query = `*[_type == "tag"]`;

  try {
    const response = await client.fetch(query);
    return response;
  } catch (error) {
    console.error("Error retrieving tags:", error);
    return [];
  }
};

export const getAllProjects = async (): Promise<Project[]> => {
  const query = `*[_type == "project"]{
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
    website,
    excerpt,
    body,
    publishedAt
  }`;

  try {
    const response = await client.fetch(query);
    return response;
  } catch (error) {
    console.error("Error retrieving projects:", error);
    return [];
  }
};

export async function searchByProjectName(query: string): Promise<Project[]> {
  const querydb = `*[_type == "project" && projectTitle match "${query}*"]{
    _id,
    projectTitle,
    slug,
    coverImage,
    tags[]->{
      _id,
      tag
    },
    category->{
      _id,
      category
    },
    client,
    website,
    excerpt,
    body,
    publishedAt
  }`;

  try {
    const response = await client.fetch(querydb);
    return response;
  } catch (error) {
    console.error("Error retrieving projects:", error);
    return [];
  }
}

export async function filterProjectsByTags({
  tagId,
}: {
  tagId: string[];
}): Promise<Project[]> {
  const querydb = `*[_type == "project" && tags[]._ref in ${JSON.stringify(
    tagId
  )}]{
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
    website,
    excerpt,
    body,
    publishedAt
  }`;

  try {
    const response = await client.fetch(querydb);
    return response;
  } catch (error) {
    console.error("Error retrieving projects:", error);
    return [];
  }
}

export async function filterProjects({
  query,
  categoryId,
  tagId,
}: {
  query: string;
  categoryId: string[];
  tagId: string[];
}): Promise<Project[]> {
  let querydb = `*[_type == "project"`;

  if (query) {
    if (query.trim() !== "") {
      querydb += ` && projectTitle match "${query}*"`;
    }
  }

  if (categoryId.length > 0) {
    querydb += ` && subCategory._ref in ${JSON.stringify(categoryId)}`;
  }

  if (tagId.length > 0) {
    querydb += ` && tags[]-> tags[].tag_ref in ${JSON.stringify(tagId)}`;
  }

  querydb += `]{
    _id,
    projectTitle,
    slug,
    coverImage,
    tags[]->{
      _id,
      tag
    },
    subCategory->{
      _id,
      subCategory,
      category->{
        _id,
        category
      }
    },
    client,
    website,
    excerpt,
    body,
    publishedAt
  }`;

  try {
    const response = await client.fetch(querydb);
    return response;
  } catch (error) {
    console.error("Error retrieving projects:", error);
    return [];
  }
}
