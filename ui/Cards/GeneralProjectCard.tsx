"use client";

import {
  HStack,
  Text,
  Image,
  Box,
  Heading,
  Stack,
  Tag,
  useColorModeValue,
  Link,
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

function GeneralProjectCard({
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
    <Link href={"#"} textDecoration="none" _hover={{ textDecoration: "none" }}>
      <HStack
        justifyContent="space-between"
        maxW={"430px"}
        h={"180px"}
        borderRadius="lg"
        boxShadow="lg"
        overflow={"hidden"}
      >
        <Box w={"full"} h={"full"} display="flex" flex="1" alignItems="center">
          <Image
            w={"full"}
            h={"full"}
            zIndex={-1}
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
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
          w={"full"}
          h={"full"}
        >
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={600}
            fontSize={"12px"}
          >
            {category_name}
          </Text>
          <Text
            color={"red.500"}
            textTransform={"lowercase"}
            fontWeight={800}
            fontSize={"12px"}
            letterSpacing={1.1}
          >
            subsdfs {subCategory_name}
          </Text>
          <Heading marginTop="1">
            <Heading fontSize={"lg"} fontFamily={"body"}>
              title {project_name}
            </Heading>
          </Heading>
          <Text fontSize={"14px"} color={"gray.500"}>
            excerptsdfsdf sdfsdfsdf sfdsdfsdfssdfsdf fsdfsdfs fsdfsdfsdfsd{" "}
            {excerpt}
          </Text>
          <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
            <Text fontSize={"14px"} fontWeight="medium">
              Publisher: {company_name}
            </Text>
            <Text fontSize={"14px"} fontWeight="medium">
              publishTime {update_at}
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
      </HStack>
    </Link>
  );
}

export default GeneralProjectCard;
