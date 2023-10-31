import { getAllProjects, getProjectBySlug } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";
import SectionContainer from "@/ui/SectionContainer";
import { VStack, Text, Box } from "@chakra-ui/react";
import { PortableText } from "@portabletext/react";
import React from "react";
import cccoil from "public/cccoil.svg";

export default async function Project({ params }: any) {
  const project = await getProjectBySlug("solar-power-project");

  return (
    <Box>
      <Box
        mt={"74px"}
        py={20}
        bgColor={"primary.50"}
        backgroundImage={cccoil.src}
        backgroundPosition="center"
        backgroundRepeat="repeat"
        backgroundSize="cover"
      >
        <Text textStyle={"heading"}>{project.projectTitle}</Text>
      </Box>

      <SectionContainer>
        {project.body && <PortableText value={project.body} />}
      </SectionContainer>
    </Box>
  );
}
