"use client";

import {
  Stack,
  Text,
  Image,
  Skeleton,
  Box,
  Button,
  UseImageProps,
  HStack,
  Link,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Content from "@/ui/Content";
import { project } from "@/sanity/schemas/project";

type ProjectType = {
  imgSrc: UseImageProps["src"];
  title: string;
  content: string;
  exchange?: boolean;
  slug?: string;
};

const FeaturedSection = ({
  imgSrc,
  title,
  content,
  exchange,
  slug,
}: ProjectType) => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      justifyContent="center"
      gap={[4, 6, 8, 14]}
    >
      {exchange ? (
        <HStack gap="lg">
          <Box flex={1} mr={{ base: 0, md: 5 }} pos="relative">
            <DottedBox />
            <Image
              boxShadow="lg"
              maxW="600px"
              minH="400px"
              objectFit="cover"
              src={imgSrc}
              rounded="lg"
              fallback={<Skeleton />}
              alt={"drivyx project image"}
            />
          </Box>
          <Stack
            flex={1}
            direction="column"
            spacing={8}
            justifyContent="center"
            minW={"400px"}
          >
            <Text
              w={"fit-content"}
              textTransform={"uppercase"}
              color={"primary.700"}
              fontWeight={600}
              fontSize={"md"}
              // bg={useColorModeValue('primary.50', 'primary.50')}
              py={1}
              px={2}
              alignSelf={"left"}
              rounded={"md"}
            >
              Project
            </Text>
            <Text
              fontSize="5xl"
              lineHeight={1}
              fontWeight="bold"
              textAlign="left"
            >
              {title}
            </Text>
            <Box>
              <Content>{content}</Content>
            </Box>

            <Link href={process.env.DEV_BASE_URL + "marketplace/" + slug}>
              <Button
                rightIcon={<ArrowForwardIcon />}
                variant="solid"
                rounded={"md"}
                w={"fit-content"}
                textColor="text.white"
                backgroundColor="secondary.default"
                _hover={{ bg: "secondary.600", color: "white" }}
              >
                View project
              </Button>
            </Link>
          </Stack>
        </HStack>
      ) : (
        <HStack gap="lg">
          <Stack
            flex={1}
            direction="column"
            spacing={8}
            justifyContent="center"
            w={"500px"}
          >
            <Text
              w={"fit-content"}
              textTransform={"uppercase"}
              color={"primary.700"}
              fontWeight={600}
              fontSize={"md"}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              // bg={useColorModeValue('primary.50', 'primary.50')}
              py={1}
              px={2}
              alignSelf={"left"}
              rounded={"md"}
            >
              Project
            </Text>
            <Text
              fontSize="5xl"
              lineHeight={1}
              fontWeight="bold"
              textAlign="left"
            >
              {title}
            </Text>
            <Box>
              <Content>{content}</Content>
            </Box>
            <Button
              rightIcon={<ArrowForwardIcon />}
              variant="solid"
              rounded={"md"}
              w={"fit-content"}
              textColor="text.white"
              backgroundColor="secondary.default"
              _hover={{ bg: "secondary.600", color: "white" }}
            >
              View project
            </Button>
          </Stack>
          <Box flex={1} mr={{ base: 0, md: 5 }} pos="relative">
            <DottedBox />
            <Image
              boxShadow="lg"
              maxW="600px"
              minH="400px"
              objectFit="cover"
              src={imgSrc}
              rounded="lg"
              fallback={<Skeleton />}
              alt={"drivyx project image"}
            />
          </Box>
        </HStack>
      )}
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
