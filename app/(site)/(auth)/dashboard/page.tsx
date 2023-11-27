"use client";

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
import React from "react";
import imageArchitect1 from "public/img/imageArchitect1.png";
import { FaPlus } from "react-icons/fa";
import defaultAvatar from "public/svg/person-circle-auth.svg";
import { useAppSlector } from "@/services/redux/hooks";

function DashboardHome() {
  const company = useAppSlector((state) => state.tmpStore.company);

  return (
    <VStack bgColor={"gray.100"}>
      <Flex
        mb={{ sm: "195px", md: "85px", xl: "100px" }}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Flex
          direction={{ sm: "column", md: "row" }}
          mx="1.5rem"
          maxH="300px"
          minW={{ sm: "40%", xl: "60%" }}
          justifyContent={{ sm: "center", md: "space-between" }}
          align="center"
          backdropFilter="saturate(200%) blur(50px)"
          boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
          border="2px solid"
          borderColor={"white"}
          bg={"hsla(0,0%,100%,.8)"}
          px="24px"
          py="10px"
          borderRadius="20px"
          position={"absolute"}
          top={"75px"}
        >
          <Flex
            align="center"
            mb={{ sm: "10px", md: "0px" }}
            direction={{ sm: "column", md: "row" }}
            w={{ sm: "100%" }}
            textAlign={{ sm: "center", md: "start" }}
          >
            <Avatar
              me={{ md: "22px" }}
              src={company?.company_profile_icon || defaultAvatar.src}
              w="80px"
              h="80px"
              borderRadius="15px"
            />
            <Flex direction="column" maxWidth="100%" my={{ sm: "14px" }}>
              <Text
                fontSize={{ sm: "lg", lg: "xl" }}
                color={"gray.700"}
                fontWeight="bold"
                ms={{ sm: "8px", md: "0px" }}
              >
                {company?.company_name || "Company Name"}
              </Text>

              <Text
                fontSize={{ sm: "sm", md: "md" }}
                color={"gray.400"}
                fontWeight="semibold"
              >
                {company?.industry || "Industry"}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <CustomCardContainer
        title={"Project"}
        description={"some description of projects"}
      >
        <Grid
          templateColumns={{
            sm: "1fr",
            md: "1fr 1fr",
            lg: "repeat(3,1fr)",
            xl: "repeat(4, 1fr)",
          }}
          templateRows={{
            sm: "1fr 1fr 1fr auto",
            md: "1fr 1fr",
            lg: "1fr ",
            xl: "1fr",
          }}
          columnGap="54"
          rowGap="24"
        >
          <ProjectCard
            image={imageArchitect1}
            name={"Dummy Project #1"}
            category={"Modern"}
            description={
              "As Uber works through a huge amount of internal management turmoil."
            }
          />
          <ProjectCard
            image={imageArchitect1}
            name={"Dummy Project #2"}
            category={"Scandinavian"}
            description={
              "Music is something that every person has his or her own specific opinion about."
            }
          />
          <Button
            p="0px"
            bg="transparent"
            color="gray.500"
            border="1px solid lightgray"
            borderRadius="15px"
            minHeight={{ sm: "200px", md: "100%" }}
          >
            <Flex direction="column" justifyContent="center" align="center">
              <Icon as={FaPlus} fontSize="lg" mb="12px" />
              <Text fontSize="lg" fontWeight="bold">
                Create a New Project
              </Text>
            </Flex>
          </Button>
        </Grid>
      </CustomCardContainer>

      <CustomCardContainer
        title={"Other Section"}
        description={"some description of other section"}
      >
        <Grid
          templateColumns={{
            sm: "1fr",
            md: "1fr 1fr",
            lg: "repeat(3,1fr)",
            xl: "repeat(4, 1fr)",
          }}
          templateRows={{
            sm: "1fr 1fr 1fr auto",
            md: "1fr 1fr",
            lg: "1fr ",
            xl: "1fr",
          }}
          columnGap="54"
          rowGap="24"
        ></Grid>
      </CustomCardContainer>

      <CustomCardContainer
        title={"Other Section"}
        description={"some description of other section"}
      >
        <Grid
          templateColumns={{
            sm: "1fr",
            md: "1fr 1fr",
            lg: "repeat(3,1fr)",
            xl: "repeat(4, 1fr)",
          }}
          templateRows={{
            sm: "1fr 1fr 1fr auto",
            md: "1fr 1fr",
            lg: "1fr ",
            xl: "1fr",
          }}
          columnGap="54"
          rowGap="24"
        ></Grid>
      </CustomCardContainer>
    </VStack>
  );
}

export default DashboardHome;
