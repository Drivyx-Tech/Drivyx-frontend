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
} from "@chakra-ui/react";
import Content from "@/ui/Content";
import { Project } from "@/types/sanityTypes";
import { urlForImage } from "@/sanity/image";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

type Props = {
  latestProject: Project;
};

const FeaturedSection = ({ latestProject }: Props) => {
  const { subCategory, tags, excerpt, slug, coverImage, projectTitle } =
    latestProject;

  console.log("latestProject", latestProject.subCategory.category?.category);

  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      justifyContent="center"
      gap={{ md: 8, lg: 12 }}
    >
      <Box flex={1} objectFit="cover" boxShadow="lg" maxW="500px" h={"100%"}>
        <Image
          src={urlForImage(coverImage).src}
          rounded="lg"
          fallback={<Skeleton />}
          alt={"drivyx project image"}
          loading="lazy"
        />
      </Box>

      <Stack
        flex={1}
        direction="column"
        spacing={4}
        justifyContent="center"
        maxW={"500px"}
        minW={"300px"}
      >
        <HStack align={"left"}>
          <Text
            w={"fit-content"}
            textTransform={"uppercase"}
            color={"primary.700"}
            fontWeight={600}
            fontSize={"sm"}
          >
            {subCategory.category?.category}
            <Text
              w={"fit-content"}
              textTransform={"capitalize"}
              color={"secondary.300"}
              fontWeight={600}
              fontSize={"sm"}
              alignSelf={"left"}
            >
              {subCategory.subCategory}
            </Text>
          </Text>
        </HStack>

        <Text textStyle={"sanityH3"} textAlign="left">
          {projectTitle}
        </Text>

        <Flex>
          {tags.map((tag) => {
            return (
              <Tag
                key={tag._id}
                borderRadius="full"
                size="sm"
                textTransform={"lowercase"}
                colorScheme="blue"
                mr={2}
              >
                {tag.tag}
              </Tag>
            );
          })}
        </Flex>

        <Box>
          <Content>{excerpt}</Content>
        </Box>

        <Link href={BASE_URL + "marketplace" + "/" + slug.current}>
          <Button
            size={"sm"}
            variant="solid"
            rounded={"full"}
            w={"fit-content"}
            textColor="text.white"
            backgroundColor="secondary.default"
            _hover={{ bg: "secondary.600", color: "white" }}
            fontWeight={300}
          >
            View project
          </Button>
        </Link>
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
