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

      <Stack
        h={"full"}
        spacing="3"
        maxW={"500px"}
        flex={2}
        justify={"space-between"}
      >
        <Stack>
          <Link
            href={`${ROUTE_PATH.NON_AUTH.RESOURCES.BLOG}/${
              pathPrefix ? `${pathPrefix}/` : ""
            }${post.slug.current}`}
          >
            <Text textStyle={"smBold"} mb="2">
              {post.title}
            </Text>
          </Link>

          <Text noOfLines={3} textStyle={"xsContext"}>
            {post.excerpt}
          </Text>
        </Stack>

        <HStack display="flex" alignItems="center" justify={"space-between"}>
          <HStack>
            <Image
              src={AuthorimageProps?.src}
              borderRadius="full"
              boxSize="36px"
              alt={`Avatar of ${post.author?.name}`}
            />
            <Text fontWeight={"bold"} fontSize="sm">
              {post.author?.name}
            </Text>
          </HStack>

          <Text fontSize={"sm"}>
            {" "}
            {format(parseISO(post?.publishedAt), "MMMM dd, yyyy")}
          </Text>
        </HStack>
      </Stack>
    </HStack>
  );
}

export default BlogCardSanity;
