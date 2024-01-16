import React from "react";
import Marketplace from "../../../../components/marketplace/Marketplace";
import { getAllProjects } from "@/services/endpoints/project";
import { Metadata } from "next";
import { getCategories } from "@/services/endpoints/category";
import { getTags } from "@/services/endpoints/tag";
import Navbar from "@/components/menu/WithSubnavigation";
import { Stack, VStack, Flex } from "@chakra-ui/react";
import forestBg from "@/public/images/turbine-white-bg.jpg";

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

      {/* <VStack
        py={16}
        px={8}
        h={"40vh"}
        backgroundImage={forestBg.src}
        backgroundPosition={"bottom"}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        pos={"relative"}
      >
        <Flex
          pos={"absolute"}
          top={0}
          w={"100%"}
          h={"100%"}
          backgroundImage={
            "linear-gradient(to top, rgba(18, 36, 0,0.98), rgba(18, 36, 0,0.5))"
          }
        />

        <Flex
          pos={"absolute"}
          bottom={"-40px"}
          w={"100%"}
          h={"40px"}
          backgroundImage={
            "linear-gradient(to top, rgba(18, 36, 0, 1), rgba(18, 36, 0, 1))"
          }
        />
      </VStack> */}

      <Marketplace
        allProjects={allProjects}
        categories={categories}
        tags={tags}
      />
    </div>
  );
}

export default page;
