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
import { ROUTE_PATH } from "@/constants/ROUTE_PATH";
import { parseISO, format } from "date-fns";
import { CustomPortableText } from "@/ui/PortableTextComponents/CustomPortableText";
import MoreBlogPost from "./MoreBlogPost";
import AnimatedTextButton from "@/ui/Button/AnimatedTextButton";

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
    <Stack>
      <Stack w={"full"} h={"40vh"} pos={"relative"} align="center">
        <Flex
          pos={"absolute"}
          w={"100%"}
          h={"100%"}
          backgroundImage={
            "linear-gradient(to top, rgba(0,0,0,0.98), rgba(0,0,0,0.3))"
          }
        />
        <Flex
          pos={"absolute"}
          bottom={"-60px"}
          w={"100%"}
          h={"60px"}
          backgroundImage={
            "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))"
          }
          justify={"center"}
        >
          <Stack w={"7xl"} align={"left"} justify={"center"} px={12}>
            <AnimatedTextButton
              text="Blog overview"
              navTo={ROUTE_PATH.NON_AUTH.RESOURCES.HOME}
              arrowDir={"left"}
              color={"white"}
            />
          </Stack>
        </Flex>

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
          h={`calc(40vh - 80px)`}
          top={20}
          gap={"8"}
          justify={"center"}
          align="center"
          px={12}
        >
          <Stack maxW={"900px"}>
            <Text textStyle={"heading"} color={"white"}>
              {post.title}
            </Text>
          </Stack>
        </VStack>
      </Stack>

      <Container maxW={"7xl"} px={12} pb={12} mt={28}>
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

      {/* <MoreBlogPost /> */}
    </Stack>
  );
}

export default PostPage;
