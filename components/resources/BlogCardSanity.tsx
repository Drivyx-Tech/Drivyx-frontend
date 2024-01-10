import { urlForImage } from "@/sanity/image";
import { HStack, Stack, Text, Image, Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { parseISO, format } from "date-fns";
import { ROUTE_PATH } from "@/constants/ROUTE_PATH";

function BlogCardSanity({
  post,
  aspect,
  minimal,
  pathPrefix,
  preloadImage,
  fontSize,
  fontWeight,
}: any) {
  const imageProps = post?.mainImage ? urlForImage(post.mainImage) : null;
  const AuthorimageProps = post?.author?.image
    ? urlForImage(post.author.image)
    : null;

  return (
    <HStack
      shadow={"lg"}
      flexDir={{ base: "column", md: "row" }}
      p={4}
      spacing={8}
      h={{ base: "auto", md: "230px" }}
      align={"center"}
      justify={"center"}
    >
      <Box w={300} h={200} flex={1}>
        {imageProps && (
          <Image
            width={300}
            height={200}
            objectFit={"cover"}
            src={imageProps.src}
            borderRadius="lg"
            alt={"drixyv"}
          />
        )}
      </Box>

      <Stack spacing="3" maxW={"500px"} flex={2}>
        <Link
          href={`${ROUTE_PATH.NON_AUTH.RESOURCES.BLOG}/${
            pathPrefix ? `${pathPrefix}/` : ""
          }${post.slug.current}`}
        >
          <Text textStyle={"smBold"} my="2">
            {post.title}
          </Text>
        </Link>

        <Text noOfLines={3} textStyle={"xsContext"}>
          {post.excerpt}
        </Text>

        <time dateTime={post?.publishedAt || post._createdAt}>
          {format(
            parseISO(post?.publishedAt || post._createdAt),
            "MMMM dd, yyyy"
          )}
        </time>
      </Stack>
    </HStack>
  );
}

export default BlogCardSanity;
