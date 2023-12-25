import React from "react";
import Marketplace from "../../../../components/marketplace/Marketplace";
import { getAllProjects } from "@/services/endpoints/project";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drivyx ESG | Marketplace",
  description:
    "Drivyx ESG Marketplace awaits your contribution to a sustainable future",
};

async function MarketplacePage() {
  const allProjects = await getAllProjects({
    skip: "0",
    take: "6",
    status: "approved",
  });

  return <Marketplace allProjects={allProjects} />;
}

export default MarketplacePage;
