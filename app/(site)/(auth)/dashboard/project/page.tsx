"use client";

import React from "react";
import { ProjectCard } from "@/components/project/ProjectCard";
import CustomCardContainer from "@/ui/Cards/CustomCardContainer";
import {
  Avatar,
  Button,
  Flex,
  Grid,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
// import imageArchitect1 from "public/img/imageArchitect1.png";
import { FaPlus } from "react-icons/fa";
import { useAppSlector } from "@/services/redux/hooks";
import defaultAvatar from "public/svg/person-circle-auth.svg";

function Project() {
  const company = useAppSlector((state) => state.tmpStore.company);

  return (
    <VStack bgColor={"gray.100"}>
      <CustomCardContainer
        title={"Project"}
        description={"some description of projects"}
      >
        <Grid
          templateColumns={{
            sm: "1fr",
            md: "1fr 1fr",
            lg: "repeat(3,1fr)",
          }}
          templateRows={{
            sm: "1fr 1fr 1fr auto",
            md: "1fr 1fr",
            lg: "1fr ",
          }}
          columnGap="54"
          rowGap="24"
        >
          <ProjectCard
            // image={imageArchitect1}
            name={"Dummy Project #1"}
            category={"Modern"}
            description={
              "As Uber works through a huge amount of internal management turmoil."
            }
          />
          <ProjectCard
            // image={imageArchitect1}
            name={"Dummy Project #2"}
            category={"Scandinavian"}
            description={
              "Music is something that every person has his or her own specific opinion about."
            }
          />
        </Grid>
      </CustomCardContainer>
    </VStack>
  );
}

export default Project;
