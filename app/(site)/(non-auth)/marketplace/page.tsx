import React from "react";
import Marketplace from "../../../../components/marketplace/Marketplace";
import { getAllProjects } from "@/services/endpoints/project";
import { Metadata } from "next";
import { getCategories } from "@/services/endpoints/category";
import { getTags } from "@/services/endpoints/tag";

export const metadata: Metadata = {
  title: "Drivyx ESG | Marketplace",
  description:
    "Drivyx ESG Marketplace awaits your contribution to a sustainable future",
};

async function page() {
  const allProjects = await getAllProjects({
    skip: "0",
    take: "6",
    status: "approved",
  });
  const categories = await getCategories();
  const tags = await getTags();

  return (
    <Marketplace
      allProjects={allProjects}
      categories={categories}
      tags={tags}
    />
  );
}

export default page;
