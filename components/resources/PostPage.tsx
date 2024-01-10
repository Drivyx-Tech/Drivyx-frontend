import React from "react";
import {
  Text,
  Container,
  VStack,
  HStack,
  Image,
  Divider,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { urlForImage } from "@/sanity/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import GoBackButton from "./GoBackButton";
import { ROUTE_PATH } from "@/constants/ROUTE_PATH";
import { parseISO, format } from "date-fns";
import { CustomPortableText } from "@/ui/PortableTextComponents/CustomPortableText";
import MoreBlogPost from "./MoreBlogPost";

function PostPage(props: any) {
  const { loading, post } = props;
  const slug = post?.slug;

  if (!loading && !slug) {
    notFound();
  }

  const imageProps = post?.mainImage ? urlForImage(post?.mainImage) : null;

  const AuthorimageProps = post?.author?.image
    ? urlForImage(post.author.image)
    : null;

  return (
    <Stack mt={"65px"}>
      <Stack w={"full"} h={"400px"} pos={"relative"} align="center">
        <Flex
          pos={"absolute"}
          w={"100%"}
          h={"100%"}
          backgroundImage={
            "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.2))"
          }
        ></Flex>
        <Image
          src={imageProps?.src}
          w={"full"}
          objectFit={"cover"}
          objectPosition={"center"}
          loading={"lazy"}
          h={"full"}
          alt={post.title}
        />

        <VStack
          pos={"absolute"}
          w={"full"}
          maxW={"7xl"}
          h={"full"}
          //   direction={"column"}
          gap={"8"}
          //   mx={{ base: 10, md: 16, lg: 20 }}
          justify={"center"}
          align="center"
        >
          <Stack w={"full"} align={"left"}>
            <GoBackButton
              text="Blog overview"
              navTo={ROUTE_PATH.NON_AUTH.RESOURCES.HOME}
            />
          </Stack>
          <Stack maxW={"900px"}>
            <Text textStyle={"heading"} my={12} color={"white"}>
              {post.title}
            </Text>
          </Stack>
        </VStack>
      </Stack>

      <Container maxW={"7xl"} px={12} pb={12} mt={8}>
        <VStack alignItems="flex-start" mb={12}>
          <HStack mb={8} display="flex" alignItems="center">
            <Image
              src={AuthorimageProps?.src}
              borderRadius="full"
              boxSize="40px"
              alt={`Avatar of ${props.name}`}
            />
            <VStack gap={0} align={"left"}>
              <Text fontWeight={"bold"} fontSize="sm">
                {post.author?.name}
              </Text>
              <Text fontSize={"sm"}>
                {" "}
                {format(parseISO(post?.publishedAt), "MMMM dd, yyyy")}
              </Text>
            </VStack>
          </HStack>

          <Divider />

          {post.body && (
            <Stack my={12} gap={4}>
              <PortableText value={post.body} components={CustomPortableText} />
            </Stack>
          )}
        </VStack>
      </Container>

      <MoreBlogPost />
    </Stack>
  );
}

export default PostPage;
