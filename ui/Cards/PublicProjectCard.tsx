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
  Avatar,
  HStack,
} from "@chakra-ui/react";

type IProps = {
  projectId: string;
  company_name: string;
  company_profile: string;
  status: string;
  project_name: string;
  category_name: string;
  subCategory_name: string;
  tags: any[];
  excerpt: string;
  updated_at: string;
  cover_image?: string;
  color?: string;
};

function PublicProjectCard({
  projectId,
  company_name,
  company_profile,
  project_name,
  category_name,
  subCategory_name,
  tags,
  excerpt,
  updated_at,
  cover_image,
  color,
}: IProps) {
  const projectCover =
    process.env.NEXT_PUBLIC_S3_USER_BUCKET + `${cover_image}`;

  return (
    <LinkBox
      cursor="pointer"
      w={"full"}
      borderRadius="lg"
      boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
    >
      <VStack
        justifyContent="space-between"
        h={"300px"}
        // border={"1px"}
        // borderColor={"white"}
        overflow={"hidden"}
        py={2}
        px={4}
      >
        {cover_image !== null ? (
          <Stack
            my={2}
            width={"full"}
            height={"300px"}
            rounded={"lg"}
            overflow={"hidden"}
            position={"relative"}
          >
            <Image
              width={"full"}
              height={"full"}
              src={projectCover}
              objectPosition={"center"}
              objectFit={"cover"}
              alt="project cover"
            />
            <Tag
              position={"absolute"}
              top={0}
              left={0}
              w={"fit-content"}
              colorScheme={color}
              variant="solid"
              alignSelf={"left"}
              size={"sm"}
            >
              {subCategory_name}
            </Tag>{" "}
          </Stack>
        ) : (
          <Box
            display={"flex"}
            position={"relative"}
            my={2}
            width={"full"}
            height={"300px"}
            bg={"gray.100"}
            rounded={"lg"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text color={"gray.300"} fontSize={"2xl"}>
              Project Image
            </Text>
            <Tag
              position={"absolute"}
              top={0}
              left={0}
              w={"fit-content"}
              colorScheme={color}
              variant="solid"
              alignSelf={"left"}
              size={"sm"}
            >
              {subCategory_name}
            </Tag>
          </Box>
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
          <LinkOverlay href={`/marketplace/project/${projectId}`}>
            <VStack
              spacing={1}
              align={"flex-start"}
              w={"full"}
              h={"fit-content"}
            >
              <Heading fontSize={"md"} fontFamily={"body"}>
                {project_name}
              </Heading>
              <Text
                noOfLines={3}
                fontSize={"12px"}
                color={"gray.500"}
                h={"55px"}
              >
                {excerpt}
              </Text>
            </VStack>
          </LinkOverlay>
          <VStack spacing={2} w={"full"} align="flex-start">
            <HStack>
              <Avatar
                size="xs"
                src={process.env.NEXT_PUBLIC_S3_USER_BUCKET + company_profile}
              />
              <Text fontWeight={600} fontSize={"12px"} color={"gray.500"}>
                {company_name || "company"}
              </Text>
            </HStack>

            {/* <Stack
              align={"flex-start"}
              wrap={"wrap"}
              w={"full"}
              direction={"row"}
              gap={1}
            >
              {tags.map((tag: any) => {
                return (
                  <Text
                    key={tag.id}
                    size="sm"
                    textTransform={"lowercase"}
                    color="primary.700"
                    fontSize={"12px"}
                  >
                    #{tag.tag_name}
                  </Text>
                );
              })}
            </Stack> */}
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
