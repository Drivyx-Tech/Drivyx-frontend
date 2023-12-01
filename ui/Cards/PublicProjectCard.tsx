"use client";

import {
  HStack,
  Text,
  Image,
  Box,
  Heading,
  Stack,
  Tag,
  VStack,
  Badge,
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
  update_at: string;
};

function PublicProjectCard({
  company_name,
  status,
  project_name,
  category_name,
  subCategory_name,
  tags,
  excerpt,
  update_at,
}: IProps) {
  return (
    <HStack
      justifyContent="space-between"
      w={"580px"}
      h={"250px"}
      borderRadius="lg"
      boxShadow="lg"
      overflow={"hidden"}
    >
      <Box w={"full"} h={"full"} display="flex" flex="1" alignItems="center">
        <Image
          w={"full"}
          h={"full"}
          src={imageArchitect1.src}
          alt="Example"
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
        px={2}
        w={"full"}
        h={"full"}
        gap={2}
        justifyContent="space-between"
      >
        <VStack h={"full"} w={"full"}>
          <VStack spacing={0} justify="center">
            <Text
              color={"green.500"}
              textTransform={"lowercase"}
              fontWeight={600}
              fontSize={"14px"}
            >
              {category_name}
            </Text>
            <Text
              color={"red.500"}
              textTransform={"lowercase"}
              fontWeight={600}
              fontSize={"14px"}
            >
              {subCategory_name}
            </Text>
          </VStack>

          <VStack w={"full"} h={"full"} justify={"space-between"}>
            <VStack spacing={2} w={"full"} h={"full"}>
              <Heading fontSize={"md"} fontFamily={"body"}>
                {project_name}
              </Heading>
              <Text fontSize={"12px"} color={"gray.500"}>
                {excerpt}
              </Text>
            </VStack>

            <HStack w={"full"} spacing="2" justify={"space-between"}>
              <Text fontSize={"14px"}>Company:{company_name}</Text>
            </HStack>
            <HStack w={"full"} spacing="2" justify={"space-between"}>
              <Text fontSize={"14px"} fontWeight="medium">
                Publish: {update_at.split("T")[0]}
              </Text>
            </HStack>
          </VStack>
        </VStack>

        <Stack
          wrap={"wrap"}
          mt={1}
          direction={"row"}
          spacing={1}
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
        </Stack>
      </Box>
    </HStack>
  );
}

export default PublicProjectCard;
