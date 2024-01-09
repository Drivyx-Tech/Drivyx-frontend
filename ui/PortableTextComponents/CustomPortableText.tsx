import {
  Text,
  Link,
  ListItem,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

export const CustomPortableText = {
  block: {
    h1: ({ children }: any) => {
      return (
        <Text fontSize={"36px"} color={"secondary.800"} fontWeight={"bold"}>
          {children}
        </Text>
      );
    },
    h2: ({ children }: any) => {
      return (
        <Text fontSize={"28px"} color={"secondary.800"} fontWeight={"bold"}>
          {children}
        </Text>
      );
    },
    h3: ({ children }: any) => {
      return (
        <Text fontSize={"24px"} color={"secondary.800"} fontWeight={"bold"}>
          {children}
        </Text>
      );
    },
    h4: ({ children }: any) => {
      return (
        <Text fontSize={"20px"} color={"secondary.800"} fontWeight={"bold"}>
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
    link: ({ value, children }: any) => (
      <Link
        href={value.href}
        fontWeight={"bold"}
        color={"primary.500"}
        textDecoration="underline"
      >
        {children}
      </Link>
    ),
  },
  lists: {
    bullet: ({ children }: any) => (
      <ListItem color={"secondary.800"}>{children}</ListItem>
    ),
    numbered: ({ children }: any) => (
      <ListItem color={"secondary.800"}>{children}</ListItem>
    ),
  },
};
