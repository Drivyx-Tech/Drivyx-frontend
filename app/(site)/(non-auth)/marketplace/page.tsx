import React from "react";
import Marketplace from "../../../../components/marketplace/Marketplace";
import { getAllProjects } from "@/services/endpoints/project";
import { Metadata } from "next";
import { getCategories } from "@/services/endpoints/category";
import { getTags } from "@/services/endpoints/tag";
import Navbar from "@/components/menu/WithSubnavigation";
import { Stack } from "@chakra-ui/react";

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
    <div>
      <Navbar navTheme="dark" />
      <Marketplace
        allProjects={allProjects}
        categories={categories}
        tags={tags}
      />
    </div>
  );
}

export default page;
