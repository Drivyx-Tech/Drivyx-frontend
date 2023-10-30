import { getAllProjects } from "@/sanity/sanity-utils";
import React from "react";

const Project = () => {
  return <div>sdfsdfsfsdfs</div>;
};

export default Project;

// export async function generateStaticParams() {
//   const projects = getAllProjects()
//     .then((projects) => {
//       return projects;
//     })
//     .catch((error) => {
//       console.error("Error retrieving projects:", error);
//     });

//   return projects.map((post) => ({
//     slug: post.slug,
//   }));
// }
