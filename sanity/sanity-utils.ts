import { createClient, groq } from "next-sanity";
import {
  pathquery,
  queryAllCategories,
  queryAllTags,
  queryProjectBySlug,
} from "./query";
import { apiVersion, dataset, projectId, useCdn } from "./config/client-config";
import { Category, Project, Tag } from "@/types/sanityTypes";

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

// category
export const getAllCategories = async (): Promise<Category[]> => {
  try {
    const response = await client.fetch(queryAllCategories);
    return response;
  } catch (error) {
    console.error("Error retrieving categories:", error);
    return [];
  }
};

// tag
export const getAllTags = async (): Promise<Tag[]> => {
  try {
    const response = await client.fetch(queryAllTags);
    return response;
  } catch (error) {
    console.error("Error retrieving tags:", error);
    return [];
  }
};

export const getAllProjectsSlugs = async () => {
  try {
    const slugs = (await client.fetch(pathquery)) || [];
    return slugs.map((slug: string) => ({ slug }));
  } catch (error) {
    console.error("Error retrieving projects:", error);
    return [];
  }
};

export async function getProjectBySlug(slug: string): Promise<Project> {
  try {
    const response = await client.fetch(queryProjectBySlug(slug));
    return response[0];
  } catch (error) {
    console.error("Error retrieving project:", error);
    return {} as Project;
  }
}

export async function filterProjects({
  query,
  categoryId,
  tagId,
  page = 1,
  pageSize = 10,
}: {
  query?: string;
  categoryId?: string[];
  tagId?: string[];
  page?: number;
  pageSize?: number;
}): Promise<{ projects: Project[]; total: number }> {
  let querydb = groq`*[_type == "project"`;

  if (query) {
    if (query.trim() !== "") {
      querydb += groq` && projectTitle match "${query}*"`;
    }
  }

  if (categoryId && categoryId.length > 0) {
    querydb += groq` && subCategory._ref in ${JSON.stringify(categoryId)}`;
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

    if (tagId && tagId.length > 0) {
      const filteredProjects = response.filter((project: Project) => {
        return project.tags.some((tag: Tag) => tagId.includes(tag._id));
      });
      const total = filteredProjects.length;
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const projects = filteredProjects.slice(startIndex, endIndex);
      return { projects, total };
    }

    const total = response.length;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const projects = response.slice(startIndex, endIndex);
    return { projects, total };
  } catch (error) {
    console.error("Error retrieving projects:", error);
    return { projects: [], total: 0 };
  }
}
