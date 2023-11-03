import { filterProjects } from "@/sanity/sanity-utils";
import Home from "./home";

export default async function IndexPage() {
  const projects = await filterProjects({
    page: 1,
    pageSize: 2,
  });
  return <Home projects={projects.projects} />;
}
