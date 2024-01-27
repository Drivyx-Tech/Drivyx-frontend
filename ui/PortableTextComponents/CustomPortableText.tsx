import { urlForImage } from "@/sanity/image";
import {
  Text,
  Link,
  UnorderedList,
  ListItem,
  OrderedList,
  Stack,
  Image,
} from "@chakra-ui/react";
import { SanityAsset } from "@sanity/image-url/lib/types/types";
import React from "react";

export const CustomPortableText = {
  types: {
    image: ({ value }: SanityAsset) => {
      return (
        <Stack
          maxW={"700px"}
          maxH={"400px"}
          overflow={"hidden"}
          alignSelf={"center"}
          objectFit={"cover"}
          my={8}
        >
          <Image
            src={urlForImage(value.asset._ref).src}
            alt={value.alt || " "}
            loading="lazy"
            w={"700px"}
            h={"full"}
            maxH={"400px"}
            style={{
              objectFit: "cover",
            }}
          />
        </Stack>
      );
    },
  },
  block: {
    h1: ({ children }: any) => {
      return (
        <Text
          mt={12}
          fontSize={"36px"}
          color={"secondary.800"}
          fontWeight={"bold"}
        >
          {children}
        </Text>
      );
    },
    h2: ({ children }: any) => {
      return (
        <Text
          mt={12}
          fontSize={"28px"}
          color={"secondary.800"}
          fontWeight={"bold"}
        >
          {children}
        </Text>
      );
    },
    h3: ({ children }: any) => {
      return (
        <Text
          mt={12}
          fontSize={"24px"}
          color={"secondary.800"}
          fontWeight={"bold"}
        >
          {children}
        </Text>
      );
    },
    h4: ({ children }: any) => {
      return (
        <Text
          mt={12}
          fontSize={"20px"}
          color={"secondary.800"}
          fontWeight={"bold"}
        >
          {children}
        </Text>
      );
    },
    normal: ({ children }: any) => {
      return (
        <Text fontSize={"18px"} color={"secondary.800"}>
          {children}
        </Text>
      );
    },
  },
  marks: {
    emphasis: ({ children }: any) => (
      <Text as="span" fontStyle="italic">
        {children}
      </Text>
    ),
    underline: ({ children }: any) => (
      <Text as="span" textDecoration="underline">
        {children}
      </Text>
    ),
    "strike-through": ({ children }: any) => (
      <Text as="span" textDecoration="line-through">
        {children}
      </Text>
    ),
    strong: ({ children }: any) => (
      <Text as="span" fontWeight="bold">
        {children}
      </Text>
    ),
    link: ({ value, children }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link href={value.href} rel={rel} textDecoration="underline">
          <Text
            as="span"
            fontWeight={"bold"}
            color={"primary.500"}
            textDecoration="underline"
          >
            {children}
          </Text>
        </Link>
      );
    },
  },
  lists: {
    bullet: ({ children }: any) => (
      <UnorderedList>
        {React.Children.map(children, (child, index) => (
          <ListItem
            key={index}
            fontSize={"20px"}
            color={"secondary.800"}
            marginLeft={"20px"}
          >
            {child}
          </ListItem>
        ))}
      </UnorderedList>
    ),
    numbered: ({ children }: any) => (
      <OrderedList>
        {React.Children.map(children, (child, index) => (
          <ListItem
            key={index}
            fontSize={"20px"}
            color={"secondary.800"}
            marginLeft={"20px"}
          >
            {child}
          </ListItem>
        ))}
      </OrderedList>
    ),
  },
};
