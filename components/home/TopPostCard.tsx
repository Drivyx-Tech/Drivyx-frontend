import { ROUTE_PATH } from "@/constants/ROUTE_PATH";
import { urlForImage } from "@/sanity/image";
import { Post } from "@/services/endpoints/sanity";
import {
  Flex,
  Image,
  Text,
  VStack,
  Stack,
  Heading,
  Link,
} from "@chakra-ui/react";
import React from "react";

function TopPostCard({ post }: { post: Post }) {
  const imageProps = post?.mainImage ? urlForImage(post.mainImage) : null;

  return (
    <Flex
      boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
      justifyContent="space-between"
      flexDirection="column"
      overflow="hidden"
      rounded={30}
      flex={1}
      h={"450px"}
      pos={"relative"}
    >
      <Flex
        pos={"absolute"}
        top={0}
        left={0}
        w={"100%"}
        h={"100%"}
        bg={"black"}
        opacity={"0.5"}
      ></Flex>

      {imageProps && (
        <Image
          width={"full"}
          height={"full"}
          src={imageProps.src}
          objectFit={"cover"}
          objectPosition={"center"}
          loading={"lazy"}
          alt={post.title}
        />
      )}

      <VStack
        w={"full"}
        h={"full"}
        mb={6}
        pos={"absolute"}
        p={8}
        align={"left"}
        justify={"space-between"}
      >
        <Stack
          w={"fit-content"}
          rounded={30}
          bgColor={"primary.800"}
          py={2}
          px={6}
        >
          <Text
            color={"white"}
            fontWeight={600}
            fontSize={"sm"}
            textTransform={"uppercase"}
          >
            blog
          </Text>
        </Stack>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          w="full"
          color={"white"}
          lineHeight={1.75}
          noOfLines={3}
        >
          {post.excerpt}
        </Text>

        <Link
          href={`${ROUTE_PATH.NON_AUTH.RESOURCES.BLOG}/${post.slug.current}`}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Heading
            fontSize={{ base: "xl", md: "2xl" }}
            textAlign="left"
            w="full"
            mb={2}
            color="white"
            _hover={{
              color: "transparent",
              background: "-webkit-linear-gradient(left, #fdbb2d, #22c1c3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {post.title}
          </Heading>
        </Link>
      </VStack>

      {/* <Flex justifyContent="space-between">
      <Button
        colorScheme="green"
        fontWeight="bold"
        color="gray.900"
        size="sm"
      >
        More
      </Button>
    </Flex> */}
    </Flex>
  );
}

export default TopPostCard;
