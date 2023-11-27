import { ProjectCard } from "@/components/project/ProjectCard";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Grid,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaPlus } from "react-icons/fa";
import imageArchitect1 from "public/img/imageArchitect1.png";

const Project = ({ title, description }: any) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card
      p="16px"
      mx={12}
      my="24px"
      boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
      border="2px solid"
      borderColor={"white"}
      px="16px"
    >
      <CardHeader p="12px 5px" mb="12px">
        <Flex direction="column">
          <Text fontSize="lg" color={textColor} fontWeight="bold">
            {title} Projects
          </Text>
          <Text fontSize="sm" color="gray.500" fontWeight="400">
            {description} some descriptions of projects
          </Text>
        </Flex>
      </CardHeader>
      <CardBody px="5px">
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
      </CardBody>
    </Card>
  );
};

export default Project;
