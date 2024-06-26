import {
  Stack,
  Text,
  Image,
  Skeleton,
  Box,
  Button,
  Link,
  Flex,
  VStack,
  HStack,
  Tag,
  Wrap,
} from "@chakra-ui/react";
import Content from "@/ui/Content";
import { Project } from "@/types/sanityTypes";
import { urlForImage } from "@/sanity/image";
import { ChevronRightIcon } from "@chakra-ui/icons";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

type Props = {
  latestProject: Project;
};

const FeaturedSection = ({ latestProject }: Props) => {
  const { subCategory, tags, excerpt, slug, coverImage, projectTitle } =
    latestProject;

  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      justifyContent="center"
      gap={{ md: 8, lg: 12 }}
    >
      <Box flex={1} w="30rem" h={"20rem"}>
        <Image
          src={urlForImage(coverImage).src}
          rounded="lg"
          fallback={<Skeleton />}
          alt={"drivyx project image"}
          loading="lazy"
          w="30rem"
          h="20rem"
        />
      </Box>

      <Stack
        flex={1}
        direction="column"
        spacing={4}
        justifyContent="space-between"
        maxW={"500px"}
        minW={"300px"}
        py={2}
      >
        <VStack>
          <HStack w={"100%"} justifyContent="space-between">
            <Tag
              w={"fit-content"}
              size={"md"}
              variant="solid"
              textTransform={"lowercase"}
              fontWeight={700}
              colorScheme="green"
              color={"white"}
              borderRadius="full"
            >
              {subCategory.category?.category}
            </Tag>

            <Text
              w={"fit-content"}
              textTransform={"lowercase"}
              color={"secondary.600"}
              fontWeight={800}
              fontSize={"sm"}
              alignSelf={"left"}
            >
              {subCategory.subCategory}
            </Text>
          </HStack>
        </VStack>

        <VStack>
          <Text
            as={Link}
            textDecoration={"none"}
            href={BASE_URL + "marketplace" + "/" + slug.current}
            textStyle={"sanityH3"}
            textAlign="left"
            mb={4}
          >
            {projectTitle}
          </Text>

          <Box>
            <Content textAlign="center">{excerpt}</Content>
          </Box>
        </VStack>

        <Wrap>
          {tags.map((tag) => {
            return (
              <Flex key={tag._id}>
                <Tag
                  size="sm"
                  textTransform={"lowercase"}
                  mr={2}
                  colorScheme="red"
                  borderRadius="full"
                >
                  {tag.tag}
                </Tag>
              </Flex>
            );
          })}
        </Wrap>
      </Stack>
    </Stack>
  );
};

function DottedBox() {
  return (
    <Box
      position="absolute"
      left="-45px"
      top="-30px"
      height="full"
      maxW="700px"
      zIndex={-1}
    >
      <svg color={"rgba(55,65,81, 0.1)"} width="350" height="420" fill="none">
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect
          width="404"
          height="404"
          fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
        ></rect>
      </svg>
    </Box>
  );
}

export default FeaturedSection;
