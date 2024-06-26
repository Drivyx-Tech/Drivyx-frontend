import { urlForImage } from "@/sanity/image";
import {
  Text,
  Link,
  UnorderedList,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
import React from "react";

export const CustomPortableText = {
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
    image: ({ node }: any) => {
      // const { asset, crop, hotspot } = node;
      // const imageUrl = imageUrlFromAsset(asset, crop, hotspot);

      return <img src={urlForImage(node).src} alt="Custom alt text" />;
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
