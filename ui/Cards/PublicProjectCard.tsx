import ImgPlaceholder from "@/components/SVG/ImgPlaceholder";
import { Utiles } from "@/services/utils";
import {
  Text,
  Image,
  Box,
  Heading,
  Stack,
  Tag,
  VStack,
  LinkOverlay,
  LinkBox,
} from "@chakra-ui/react";

type IProps = {
  projectId: string;
  company_name: string;
  status: string;
  project_name: string;
  category_name: string;
  subCategory_name: string;
  tags: any[];
  excerpt: string;
  updated_at: string;
  cover_image?: string;
};

function PublicProjectCard({
  projectId,
  company_name,
  project_name,
  category_name,
  subCategory_name,
  tags,
  excerpt,
  updated_at,
  cover_image,
}: IProps) {
  const projectCover =
    process.env.NEXT_PUBLIC_S3_USER_BUCKET + `${cover_image}`;

  return (
    <LinkBox as="article">
      <VStack
        justifyContent="space-between"
        w={"300px"}
        h={"400px"}
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
          <LinkOverlay href={`/marketplace/${projectId}`}>
            <Heading fontSize={"md"} fontFamily={"body"}>
              {project_name}
            </Heading>
          </LinkOverlay>
        </VStack>

        {cover_image !== null ? (
          <Image
            my={2}
            w={"full"}
            h={"160px"}
            rounded={"lg"}
            src={projectCover}
            alt="drixyx project image"
            fit="cover"
          />
        ) : (
          <Box
            my={2}
            w={"full"}
            h={"500px"}
            bg={"gray.100"}
            rounded={"lg"}
          ></Box>
        )}

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
    </LinkBox>
  );
}

export default PublicProjectCard;
