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
  useColorModeValue,
} from "@chakra-ui/react";
import { urlForImage } from "@/sanity/image";
import { Project } from "@/types/project";

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
    <Center py={6}>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
        w={"700px"}
        borderRadius="lg"
        boxShadow="lg"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Box textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                zIndex={-1}
                src={urlForImage(coverImage).src}
                alt="Example"
              />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
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
            {/* cate:{subCategory?.category?.category as string} */}
          </Text>
          <Text
            color={"red.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"12px"}
            letterSpacing={1.1}
          >
            {/* sub:{subCategory?.subCategory as string} */}
          </Text>
          <Heading marginTop="1">
            <Heading fontSize={"lg"} fontFamily={"body"}>
              {projectTitle}
            </Heading>
          </Heading>
          <Text fontSize={"14px"} color={"gray.500"}>
            {excerpt}
          </Text>
          <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
            <Text fontSize={"14px"} fontWeight="medium">
              Client: {client}
            </Text>
            <Text>{publishedAt.substring(0, 10)}</Text>
          </HStack>
          <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
            {tags.map((tag: any) => {
              return (
                <Tag
                  size={"sm"}
                  key={tag._id}
                  variant="solid"
                  colorScheme="teal"
                  w="fit-content"
                >
                  {tag.tag}
                </Tag>
              );
            })}
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}
