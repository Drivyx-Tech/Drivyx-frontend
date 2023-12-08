"use client";

import { Utiles } from "@/services/utils";
import {
  HStack,
  Text,
  Box,
  Heading,
  VStack,
  Badge,
  Image,
} from "@chakra-ui/react";

type IProps = {
  company_name: string;
  status: string;
  project_name: string;
  category_name: string;
  subCategory_name: string;
  tags: any[];
  excerpt: string;
  update_at: string;
  imageUrl?: string;
};

function GeneralProjectCard({
  company_name,
  status,
  project_name,
  category_name,
  subCategory_name,
  tags,
  excerpt,
  update_at,
  imageUrl,
}: IProps) {
  const projectCover = process.env.NEXT_PUBLIC_S3_USER_BUCKET + `${imageUrl}`;

  return (
    <HStack
      justifyContent="space-between"
      minW={"400px"}
      maxW={"600px"}
      h={"200px"}
      borderRadius="lg"
      boxShadow="lg"
      overflow={"hidden"}
    >
      <Box w={"full"} h={"full"} display="flex" flex="1" alignItems="center">
        <Image
          w={"full"}
          h={"full"}
          src={projectCover || "https://placehold.co/400x300"}
          alt="drivyx cover image"
          fit="cover"
        />
      </Box>

      <Box
        flex={"1.5"}
        textDecoration="none"
        _hover={{ textDecoration: "none" }}
        display="flex"
        flexDirection="column"
        py={2}
        px={4}
        w={"full"}
        h={"full"}
        justifyContent={"space-around"}
        gap={2}
      >
        <HStack spacing={0} justify="center">
          <Text
            color={"green.500"}
            textTransform={"lowercase"}
            fontWeight={600}
            fontSize={"12px"}
          >
            {category_name}
          </Text>
          <Text mx={2}>-</Text>
          <Text
            color={"red.500"}
            textTransform={"lowercase"}
            fontWeight={600}
            fontSize={"12px"}
          >
            {subCategory_name}
          </Text>
        </HStack>

        <VStack spacing={2}>
          <Heading fontSize={"md"} fontFamily={"body"}>
            {project_name}
          </Heading>
          <Text noOfLines={3} fontSize={"12px"} color={"gray.500"}>
            {excerpt}
          </Text>
        </VStack>

        <HStack spacing="2" justify={"space-between"}>
          <Text fontSize={"12px"} color={"gray.600"} fontWeight="medium">
            {Utiles.formattedTime(update_at)}
          </Text>
          <Badge>{status}</Badge>
        </HStack>

        {/* <Stack
          wrap={"wrap"}
          mt={6}
          direction={"row"}
          spacing={2}
          align={"center"}
        >
          {tags.map((tag: any) => {
            return (
              <Tag
                size={"sm"}
                key={tag.id}
                textTransform={"lowercase"}
                colorScheme="blue"
                w="fit-content"
              >
                {tag.tag_name}
              </Tag>
            );
          })}
        </Stack> */}
      </Box>
    </HStack>
  );
}

export default GeneralProjectCard;
