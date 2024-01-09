import {
  apiVersion,
  dataset,
  projectId,
  useCdn,
} from "@/sanity/config/client-config";
import { pathquery, postquery, singlequery } from "@/sanity/query";
import { PortableTextComponents } from "@portabletext/react";
import { createClient } from "next-sanity";

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

type Post = {
  publishedAt: string;
  slug: {
    current: string;
  };
  title: string;
  excerpt: string;
  author: {
    name: string;
    image: string;
  };
  mainImage: any;
  body: PortableTextComponents;
};

export async function getAllPosts(): Promise<Post[]> {
  return await client.fetch(postquery);
}

export async function getPostBySlug(slug: string): Promise<Post> {
  return await client.fetch(singlequery, { slug });
}

export async function getAllPostsSlugs() {
  const slugs = await client.fetch(pathquery);
  return slugs.map((slug: string) => ({ slug }));
}
