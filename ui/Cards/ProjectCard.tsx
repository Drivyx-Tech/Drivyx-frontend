"use client";

import {
  HStack,
  Text,
  Image,
  Box,
  Center,
  Heading,
  Stack,
  Tag,
  Link,
} from "@chakra-ui/react";
import { urlForImage } from "@/sanity/image";
import { Project } from "@/types/sanityTypes";

export default function ProjectCard({ project }: { project: Project }) {
  const {
    _id,
    projectTitle,
    slug,
    excerpt,
    coverImage,
    subCategory,
    tags,
    client,
    publishedAt,
  } = project;

  return (
    <Center>
      <Link
        href={process.env.NEXT_PUBLIC_BASE_URL + "marketplace/" + slug.current}
        textDecoration="none"
        _hover={{ textDecoration: "none" }}
      >
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
          w={"700px"}
          h={"230px"}
          borderRadius="lg"
          boxShadow="lg"
        >
          <Box display="flex" flex="1" marginRight="3" alignItems="center">
            <Image
              w={"full"}
              h={"full"}
              zIndex={-1}
              src={urlForImage(coverImage).src}
              alt="Example"
              fit="cover"
            />
          </Box>

          <Box
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "0" }}
          >
            <Text
              color={"green.500"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"12px"}
              letterSpacing={1.1}
            >
              {subCategory?.category?.category}
            </Text>
            <Text
              color={"red.500"}
              textTransform={"lowercase"}
              fontWeight={800}
              fontSize={"12px"}
              letterSpacing={1.1}
            >
              {subCategory?.subCategory}
            </Text>
            <Heading marginTop="1">
              <Heading fontSize={"lg"} fontFamily={"body"}>
                {projectTitle}
              </Heading>
            </Heading>
            <Text fontSize={"14px"} color={"gray.500"}>
              {excerpt}
            </Text>
            <HStack
              marginTop="2"
              spacing="2"
              display="flex"
              alignItems="center"
            >
              <Text fontSize={"14px"} fontWeight="medium">
                Client: {client}
              </Text>
              <Text fontSize={"14px"} fontWeight="medium">
                {publishedAt.substring(0, 10)}
              </Text>
            </HStack>
            <Stack mt={6} direction={"row"} spacing={2} align={"center"}>
              {tags.map((tag: any) => {
                return (
                  <Tag
                    size={"sm"}
                    key={tag._id}
                    borderRadius="full"
                    textTransform={"lowercase"}
                    colorScheme="blue"
                    w="fit-content"
                  >
                    {tag.tag}
                  </Tag>
                );
              })}
            </Stack>
          </Box>
        </Box>
      </Link>
    </Center>
  );
}
