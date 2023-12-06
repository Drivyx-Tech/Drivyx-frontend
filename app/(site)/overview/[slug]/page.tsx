import React from "react";
import ProjectPage from "./projectDetail";
import { getAllProjectsSlugs, getProjectBySlug } from "@/sanity/sanity-utils";

export async function generateStaticParams() {
  return await getAllProjectsSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getProjectBySlug(params.slug);
  return { title: `Drivyx | ${post?.projectTitle}` };
}

export default async function ProjectDefault({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(params.slug);
  return <ProjectPage project={project} />;
}
