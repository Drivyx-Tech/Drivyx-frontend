"use client";

import { Utiles } from "@/services/utils";
import {
  Text,
  Image,
  Box,
  Heading,
  Stack,
  Tag,
  VStack,
} from "@chakra-ui/react";
import imageArchitect1 from "public/images/role.jpeg";

type IProps = {
  company_name: string;
  status: string;
  project_name: string;
  category_name: string;
  subCategory_name: string;
  tags: any[];
  excerpt: string;
  updated_at: string;
};

function PublicProjectCard({
  company_name,
  status,
  project_name,
  category_name,
  subCategory_name,
  tags,
  excerpt,
  updated_at,
}: IProps) {
  return (
    <VStack
      justifyContent="space-between"
      w={"350px"}
      h={"410px"}
      borderRadius="lg"
      boxShadow="lg"
      overflow={"hidden"}
      py={2}
      px={4}
    >
      <VStack spacing={1} align={"flex-start"} w={"full"} h={"fit-content"}>
        <Text fontWeight={600} fontSize={"12px"} color={"gray.500"}>
          {company_name || "company"}
        </Text>
        <Heading fontSize={"md"} fontFamily={"body"}>
          {project_name}
        </Heading>
      </VStack>

      <Image
        my={2}
        w={"full"}
        h={"160px"}
        rounded={"lg"}
        src={imageArchitect1.src}
        alt="Example"
        fit="cover"
      />

      <Box
        textDecoration="none"
        _hover={{ textDecoration: "none" }}
        display="flex"
        flexDirection="column"
        w={"full"}
        h={"full"}
        justifyContent="space-between"
      >
        <Text noOfLines={3} fontSize={"12px"} color={"gray.500"}>
          {excerpt}
        </Text>

        <VStack spacing={0} w={"full"} align="flex-start">
          <Text
            w={"fit-content"}
            textTransform={"lowercase"}
            color={"primary.700"}
            fontWeight={400}
            fontSize={"12px"}
            alignSelf={"left"}
          >
            {category_name}
          </Text>
          <Text
            w={"fit-content"}
            textTransform={"lowercase"}
            color={"secondary.500"}
            fontWeight={400}
            fontSize={"12px"}
            alignSelf={"left"}
          >
            {subCategory_name}
          </Text>

          <Stack
            align={"flex-start"}
            wrap={"wrap"}
            w={"full"}
            direction={"row"}
          >
            {tags.map((tag: any) => {
              return (
                <Tag
                  key={tag.id}
                  size="sm"
                  textTransform={"lowercase"}
                  colorScheme="red"
                  borderRadius="full"
                >
                  {tag.tag_name}
                </Tag>
              );
            })}
          </Stack>
        </VStack>
      </Box>

      <VStack w={"full"} align={"flex-start"}>
        <Text fontSize={"10px"} textColor={"gray.500"}>
          {Utiles.formattedTime(updated_at)}
        </Text>
      </VStack>
    </VStack>
  );
}

export default PublicProjectCard;
