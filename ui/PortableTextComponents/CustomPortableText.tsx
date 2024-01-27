import { urlForImage } from "@/sanity/image";
import {
  Text,
  Link,
  UnorderedList,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
import React from "react";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";

// Barebones lazy-loaded image component
const SampleImageComponent = ({ value, isInline }: any) => {
  const imageUrl = urlBuilder()
    .image(value.asset)
    .width(isInline ? 100 : 800)
    .height(isInline ? 50 : 400)
    .fit("max")
    .auto("format")
    .url();

  console.log("image vale ----", value);
  console.log("Image URL-----", imageUrl);

  const { width, height } = getImageDimensions(value);
  return (
    <img
      src={urlBuilder()
        .image(value.asset)
        .width(isInline ? 100 : 800)
        .fit("max")
        .auto("format")
        .url()}
      alt={value.alt || " "}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
};

export const CustomPortableText = {
  types: {
    image: SampleImageComponent,
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
