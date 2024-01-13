import { urlForImage } from "@/sanity/image";
import { HStack, Stack, Text, Image, Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { parseISO, format } from "date-fns";
import { ROUTE_PATH } from "@/constants/ROUTE_PATH";

function BlogCardSanity({ post, pathPrefix }: any) {
  const imageProps = post?.mainImage ? urlForImage(post.mainImage) : null;
  const AuthorimageProps = post?.author?.image
    ? urlForImage(post.author.image)
    : null;

  return (
    <HStack py={12} spacing={8} borderTop={"1px solid #E9E9E9"}>
      <HStack spacing={8} align="start" justify={"space-between"}>
        <Box>
          {imageProps && (
            <Image
              w={160}
              h={100}
              rounded={10}
              objectFit={"cover"}
              src={imageProps.src}
              borderRadius="lg"
              alt={post.title}
            />
          )}
        </Box>

        <Stack
          spacing="4"
          w={{ base: "100%", md: "400px", lg: "600px" }}
          justify={"space-between"}
        >
          <Text
            w={"fit-content"}
            rounded={30}
            bgColor={"primary.800"}
            py={1}
            px={6}
            color={"white"}
            fontWeight={600}
            fontSize={"xs"}
            textTransform={"uppercase"}
          >
            {/* {post.category} */}
            blog
          </Text>

          <Link
            href={`${ROUTE_PATH.NON_AUTH.RESOURCES.BLOG}/${
              pathPrefix ? `${pathPrefix}/` : ""
            }${post.slug.current}`}
          >
            <Text textStyle={"subheading"}>{post.title}</Text>
          </Link>

          <HStack display="flex" alignItems="center">
            <Image
              src={AuthorimageProps?.src}
              borderRadius="full"
              boxSize="36px"
              alt={`Avatar of ${post.author?.name}`}
            />
            <Text fontWeight={"bold"} fontSize="sm">
              {post.author?.name}
            </Text>

            <Text fontSize={"sm"}>•</Text>

            <Text fontSize={"sm"} fontWeight={"bold"}>
              {" "}
              {format(parseISO(post?.publishedAt), "MMMM dd, yyyy")}
            </Text>
          </HStack>

          <Text lineHeight={1.5} textStyle={"context"}>
            {post.excerpt}
          </Text>
        </Stack>
      </HStack>
    </HStack>
  );
}

export default BlogCardSanity;
