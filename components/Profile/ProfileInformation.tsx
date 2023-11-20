import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Grid,
  Icon,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

type ProfileInformationProps = {
  title?: string;
  description?: string;
  name?: string;
  mobile?: string;
  email?: string;
  location?: string;
};

const ProfileInformation = ({
  title,
  description,
  name,
  mobile,
  email,
  location,
}: ProfileInformationProps) => {
  return (
    <>
      <Card
        boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
        border="2px solid"
        borderColor={"white"}
        px="16px"
        mb={4}
      >
        <CardBody>
          <VStack>
            <Text
              w={"100%"}
              fontSize="xl"
              color={"gray.700"}
              fontWeight="bold"
              mb={6}
            >
              Contact Profile
            </Text>
            <Grid templateColumns="repeat(2, 1fr)" gap={6} w={"100%"}>
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color={"gray.700"}
                  fontWeight="bold"
                  me="10px"
                >
                  First Name:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  Yume
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color={"gray.700"}
                  fontWeight="bold"
                  me="10px"
                >
                  Last Name:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  Li
                </Text>
              </Flex>
            </Grid>
          </VStack>

          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <Flex align="center" mb="18px">
              <Text
                fontSize="md"
                color={"gray.700"}
                fontWeight="bold"
                me="10px"
              >
                Email:{" "}
              </Text>
              <Text fontSize="md" color="gray.500" fontWeight="400">
                yumeee.lol@gmail.com
              </Text>
            </Flex>
            <Flex align="center" mb="18px">
              <Text
                fontSize="md"
                color={"gray.700"}
                fontWeight="bold"
                me="10px"
              >
                Mobile:{" "}
              </Text>
              <Text fontSize="md" color="gray.500" fontWeight="400">
                +61 420859366
              </Text>
            </Flex>
          </Grid>
        </CardBody>
      </Card>

      <Card
        boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
        border="2px solid"
        borderColor={"white"}
        px="16px"
        mb={4}
        h={"100%"}
      >
        <CardBody>
          <VStack>
            <Text
              w={"100%"}
              fontSize="xl"
              color={"gray.700"}
              fontWeight="bold"
              mb={6}
            >
              Company
            </Text>
            <Grid templateColumns="repeat(2, 1fr)" gap={6} w={"100%"}>
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color={"gray.700"}
                  fontWeight="bold"
                  me="10px"
                >
                  Name:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  Yume Cat Pets
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color={"gray.700"}
                  fontWeight="bold"
                  me="10px"
                >
                  Industry:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  Information Technology
                </Text>
              </Flex>
            </Grid>
          </VStack>

          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <Flex align="center" mb="18px">
              <Text
                fontSize="md"
                color={"gray.700"}
                fontWeight="bold"
                me="10px"
              >
                Company Size:{" "}
              </Text>
              <Text fontSize="md" color="gray.500" fontWeight="400">
                2-10
              </Text>
            </Flex>
            <Flex align="center" mb="18px">
              <Text
                fontSize="md"
                color={"gray.700"}
                fontWeight="bold"
                me="10px"
              >
                Revenue:{" "}
              </Text>
              <Text fontSize="md" color="gray.500" fontWeight="400">
                +61 420859366
              </Text>
            </Flex>
          </Grid>

          <Flex align="center" mb="18px">
            <Text fontSize="md" color={"gray.700"} fontWeight="bold" me="10px">
              Location:{" "}
            </Text>
            <Text fontSize="md" color="gray.500" fontWeight="400">
              11 ashwood Dr, Nunawading 3131
            </Text>
          </Flex>
          <Flex align="center" mb="18px">
            <Text fontSize="md" color={"gray.700"} fontWeight="bold" me="10px">
              Description:{" "}
            </Text>
            <Text fontSize="md" color="gray.500" fontWeight="400">
              we are the company to help small business to have a better
              understanding and connection to their customers
            </Text>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default ProfileInformation;
